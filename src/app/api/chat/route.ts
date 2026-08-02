import OpenAI from "openai";
import { NextResponse } from "next/server";
import {
  SYSTEM_PROMPT,
  looksLikeEmergency,
  needsClinicalRedirect,
  EMERGENCY_REPLY,
  CLINICAL_REPLY,
  getSmartLocalResponse,
} from "@/lib/chatbot/knowledge";

/**
 * Chatbot reasoning endpoint (OpenAI with smart local fallback).
 */

export const runtime = "nodejs";
export const maxDuration = 30;

const MODEL = process.env.OPENAI_MODEL || "gpt-4o-mini";
const MAX_MESSAGES = 20;
const MAX_CHARS = 1500;

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const HITS = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 15;

function rateLimited(key: string): boolean {
  const now = Date.now();
  const entry = HITS.get(key);

  if (!entry || now > entry.resetAt) {
    HITS.set(key, { count: 1, resetAt: now + WINDOW_MS });
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
          "You've sent quite a few messages in a short time. Please wait a moment, or call 7075 447 449 directly if it's urgent.",
        intent: "rate_limited",
      },
      { status: 429 }
    );
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    // Smart local knowledge fallback when API key is missing
    const fallbackReply = getSmartLocalResponse(latest.content);
    return NextResponse.json({ reply: fallbackReply, intent: "faq" });
  }

  const client = new OpenAI({ apiKey });

  try {
    const completion = await client.chat.completions.create({
      model: MODEL,
      max_tokens: 450,
      temperature: 0.3,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.map((m) => ({ role: m.role, content: m.content })),
      ],
    });

    const choice = completion.choices[0];
    const reply = choice?.message?.content?.trim() ?? "";

    if (!reply) {
      const fallbackReply = getSmartLocalResponse(latest.content);
      return NextResponse.json({ reply: fallbackReply, intent: "faq" });
    }

    const intent = /appointment|book|visit|timing|slot/i.test(latest.content)
      ? "appointment"
      : "faq";

    return NextResponse.json({ reply, intent });
  } catch (error) {
    console.error("[chat] OpenAI API error or fallback trigger", error);
    
    // Always provide an accurate local knowledge answer even if upstream API fails
    const fallbackReply = getSmartLocalResponse(latest.content);
    return NextResponse.json({ reply: fallbackReply, intent: "faq" }, { status: 200 });
  }
}
