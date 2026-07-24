"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, Send, Phone, Loader2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { track } from "@/lib/analytics";

interface Message {
  role: "user" | "assistant";
  content: string;
  intent?: string;
}

const GREETING: Message = {
  role: "assistant",
  content: `Hello. I can help with clinic timings, directions, what Dr. Reddy treats, and booking an appointment.\n\nIf this is an emergency, please call ${site.contact.phoneDisplay} straight away.`,
};

const SUGGESTIONS = [
  "What are the clinic timings?",
  "Where is the hospital located?",
  "I'd like to book an appointment",
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const q = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(q.matches);
    update();
    q.addEventListener("change", update);
    return () => q.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [messages, reduceMotion]);

  // Escape closes the panel (WCAG 2.1.2 — no keyboard trap).
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    inputRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function toggle() {
    setOpen((v) => {
      if (!v) track("chatbot_open");
      return !v;
    });
  }

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || sending) return;

    const next = [...messages, { role: "user" as const, content: trimmed }];
    setMessages(next);
    setInput("");
    setSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.map(({ role, content }) => ({ role, content })),
        }),
      });

      const data = (await res.json()) as { reply?: string; intent?: string };

      if (data.intent === "emergency") track("chatbot_emergency_intent");
      if (data.intent === "appointment") track("chatbot_appointment_intent");

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.reply ??
            `Sorry — something went wrong. Please call ${site.contact.phoneDisplay}.`,
          intent: data.intent,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `I couldn't reach the clinic's assistant. Please call ${site.contact.phoneDisplay}.`,
          intent: "error",
        },
      ]);
    } finally {
      setSending(false);
      inputRef.current?.focus();
    }
  }

  return (
    <>
      {/* Launcher — sits above the mobile sticky CTA bar (z-index scale:
          header 40 · sticky CTA 30 · chatbot 50). */}
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls="chat-panel"
        aria-label={open ? "Close the assistant" : "Open the assistant"}
        className={cn(
          "fixed z-50 right-4 bottom-20 lg:bottom-6 flex items-center gap-2.5",
          "rounded-full shadow-[var(--elev-3)] bg-accent text-accent-foreground",
          "transition-transform duration-[var(--dur-base)] hover:scale-105 active:scale-95",
          // Circle on mobile: the labelled pill is wide enough to sit on top
          // of page content (it covered the testimonial carousel arrows).
          open
            ? "size-14 justify-center"
            : "size-14 justify-center sm:size-auto sm:h-14 sm:pl-4 sm:pr-5",
          !open && !reduceMotion && "animate-pulse-slow"
        )}
      >
        {open ? (
          <X className="size-6" />
        ) : (
          <>
            {/* Static frame of the clinic's mascot, not the video: this button
                is on every page, and a 2.4 MB autoplaying video here would
                undo the LCP work. The animation plays in the panel instead. */}
            <Image
              src="/brand/chatbot-avatar.png"
              alt=""
              width={160}
              height={160}
              className="size-10 shrink-0 rounded-full object-cover"
              aria-hidden
            />
            <span className="hidden sm:inline font-semibold text-sm whitespace-nowrap">
              Ask a question
            </span>
          </>
        )}
      </button>

      {open && (
        <div
          id="chat-panel"
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-label="Clinic assistant"
          className={cn(
            "fixed z-50 right-2 left-2 bottom-36 sm:left-auto sm:right-4 sm:w-[26rem]",
            "lg:bottom-24 flex flex-col rounded-2xl border border-border overflow-hidden",
            "bg-background shadow-[var(--elev-3)] max-h-[min(32rem,70vh)]",
            !reduceMotion && "motion-safe:animate-in motion-safe:fade-in"
          )}
        >
          <header className="flex items-center justify-between gap-3 bg-primary text-primary-foreground p-4">
            <div className="flex items-center gap-3 min-w-0">
              {/* The mascot animation. Loads only once the panel is opened,
                  and falls back to a still frame under reduced-motion. */}
              {reduceMotion ? (
                <Image
                  src="/brand/chatbot-poster.jpg"
                  alt=""
                  width={320}
                  height={320}
                  className="size-11 shrink-0 rounded-full object-cover"
                  aria-hidden
                />
              ) : (
                <video
                  src="/brand/chatbot.mp4"
                  poster="/brand/chatbot-poster.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="none"
                  aria-hidden
                  className="size-11 shrink-0 rounded-full object-cover bg-white"
                />
              )}
              <div className="min-w-0">
                <p className="font-semibold text-sm truncate">Clinic Assistant</p>
                <p className="text-xs opacity-80 truncate">
                  {site.hospital.name}, {site.hospital.city}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close the assistant"
              className="grid size-9 shrink-0 place-items-center rounded-lg hover:bg-white/15"
            >
              <X className="size-5" />
            </button>
          </header>

          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-3"
            aria-live="polite"
            aria-atomic="false"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={cn(
                  "flex",
                  m.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-line",
                    m.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : m.intent === "emergency"
                        ? "bg-emergency/10 border border-emergency/40 rounded-bl-sm"
                        : "bg-muted rounded-bl-sm"
                  )}
                >
                  {m.intent === "emergency" && (
                    <span className="flex items-center gap-1.5 font-semibold text-emergency mb-1.5">
                      <AlertTriangle className="size-4" aria-hidden />
                      Urgent
                    </span>
                  )}
                  {m.content}
                  {m.intent === "emergency" && (
                    <a
                      href={site.contact.phoneHref}
                      onClick={() => track("call_click", { source: "chatbot" })}
                      className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-emergency px-4 py-2.5 font-semibold text-emergency-foreground tnum"
                    >
                      <Phone className="size-4" aria-hidden />
                      Call {site.contact.phoneDisplay}
                    </a>
                  )}
                </div>
              </div>
            ))}

            {sending && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-sm bg-muted px-4 py-3">
                  <Loader2 className="size-4 animate-spin text-muted-foreground" />
                  <span className="sr-only">The assistant is typing…</span>
                </div>
              </div>
            )}

            {messages.length === 1 && (
              <ul className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <li key={s}>
                    <button
                      type="button"
                      onClick={() => send(s)}
                      className="rounded-full border border-border bg-background px-3 py-2 text-xs font-medium hover:bg-muted transition-colors"
                    >
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="border-t border-border p-3 flex items-center gap-2"
          >
            <label htmlFor="chat-input" className="sr-only">
              Type your message
            </label>
            <input
              id="chat-input"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about timings, location…"
              autoComplete="off"
              className="flex-1 h-11 rounded-xl border border-input bg-background px-3 text-base"
            />
            <Button
              type="submit"
              variant="accent"
              size="icon-touch"
              disabled={sending || !input.trim()}
              aria-label="Send message"
            >
              <Send />
            </Button>
          </form>

          <p className="px-4 pb-3 text-[0.7rem] leading-snug text-muted-foreground">
            This assistant gives general information only — it cannot diagnose or
            give medical advice. For anything urgent, call{" "}
            <a href={site.contact.phoneHref} className="underline font-medium tnum">
              {site.contact.phoneDisplay}
            </a>
            .
          </p>
        </div>
      )}
    </>
  );
}
