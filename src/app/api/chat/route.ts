import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import {
  SYSTEM_PROMPT,
  looksLikeEmergency,
  needsClinicalRedirect,
  EMERGENCY_REPLY,
  CLINICAL_REPLY,
} from "@/lib/chatbot/knowledge";

/**
 * Chatbot reasoning endpoint.
 *
 * Safety design: the emergency and clinical-question screens run LOCALLY,
 * before any network call. If the model is slow, rate-limited, misconfigured
 * or down, an emergency message still gets the phone number immediately.
 * Patient safety must not depend on a third-party API being up.
 */

export const runtime = "nodejs";
export const maxDuration = 30;

const MODEL = "claude-opus-4-8";
const MAX_MESSAGES = 20;
const MAX_CHARS = 1500;

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

/**
 * Minimal in-memory rate limit. Serverless instances are ephemeral and not
 * shared, so this throttles casual abuse rather than a determined attacker —
 * enough to stop a stuck client from running up API spend. Move to Supabase
 * or Upstash if abuse becomes a real problem.
 */
const HITS = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 12;

function rateLimited(key: string): boolean {
  const now = Date.now();
  const entry = HITS.get(key);

  if (!entry || now > entry.resetAt) {
    HITS.set(key, { count: 1, resetAt: now + WINDOW_MS });
    // Opportunistic cleanup so the map cannot grow without bound.
    if (HITS.size > 500) {
      for (const [k, v] of HITS) if (now > v.resetAt) HITS.delete(k);
    }
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

function clientKey(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  return fwd?.split(",")[0]?.trim() || "anonymous";
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const raw = (body as { messages?: unknown }).messages;
  if (!Array.isArray(raw) || raw.length === 0) {
    return NextResponse.json({ error: "No messages supplied." }, { status: 400 });
  }

  const messages: ChatMessage[] = raw
    .slice(-MAX_MESSAGES)
    .filter(
      (m): m is ChatMessage =>
        !!m &&
        typeof m === "object" &&
        (m as ChatMessage).role !== undefined &&
        ["user", "assistant"].includes((m as ChatMessage).role) &&
        typeof (m as ChatMessage).content === "string"
    )
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_CHARS) }));

  const latest = [...messages].reverse().find((m) => m.role === "user");
  if (!latest) {
    return NextResponse.json({ error: "No user message found." }, { status: 400 });
  }

  // ---- SAFETY SCREENS (local, before any network call) -------------------
  if (looksLikeEmergency(latest.content)) {
    return NextResponse.json({ reply: EMERGENCY_REPLY, intent: "emergency" });
  }

  if (needsClinicalRedirect(latest.content)) {
    return NextResponse.json({ reply: CLINICAL_REPLY, intent: "clinical_redirect" });
  }

  if (rateLimited(clientKey(req))) {
    return NextResponse.json(
      {
        reply:
          "You've sent quite a few messages in a short time. Please wait a moment, or call the clinic directly if it's urgent.",
        intent: "rate_limited",
      },
      { status: 429 }
    );
  }

  // The API key must never reach the browser — this route is the only caller.
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error("[chat] ANTHROPIC_API_KEY is not set");
    return NextResponse.json(
      {
        reply:
          "The assistant isn't available right now. Please call the clinic and the team will help you directly.",
        intent: "unavailable",
      },
      { status: 503 }
    );
  }

  const client = new Anthropic({ apiKey });

  try {
    const response = await client.messages.create({
      model: MODEL,
      max_tokens: 400,
      // Thinking is omitted deliberately: replies are 2-4 sentences and this
      // runs in front of an anxious patient on a phone, so latency matters
      // more than deliberation. The system prompt carries the reasoning.
      output_config: { effort: "low" },
      system: [
        {
          type: "text",
          text: SYSTEM_PROMPT,
          // The prompt is static across every request, so it caches cleanly.
          cache_control: { type: "ephemeral" },
        },
      ],
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
    });

    if (response.stop_reason === "refusal") {
      return NextResponse.json({ reply: CLINICAL_REPLY, intent: "clinical_redirect" });
    }

    const reply = response.content
      .filter((block): block is Anthropic.TextBlock => block.type === "text")
      .map((block) => block.text)
      .join("")
      .trim();

    if (!reply) {
      return NextResponse.json({ reply: CLINICAL_REPLY, intent: "clinical_redirect" });
    }

    // Heuristic intent tag so the widget can fire the right GA4 event.
    const intent = /appointment|book|visit|timing|slot/i.test(latest.content)
      ? "appointment"
      : "faq";

    return NextResponse.json({ reply, intent });
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) {
      console.warn("[chat] upstream rate limited");
    } else if (error instanceof Anthropic.APIError) {
      console.error("[chat] API error", error.status, error.message);
    } else {
      console.error("[chat] unexpected error", error);
    }

    // Any failure falls back to the phone number rather than leaving the
    // patient with nothing.
    return NextResponse.json(
      {
        reply:
          "I'm having trouble responding just now. Please call the clinic on 7075 447 449 and the team will help you straight away.",
        intent: "error",
      },
      { status: 200 }
    );
  }
}
