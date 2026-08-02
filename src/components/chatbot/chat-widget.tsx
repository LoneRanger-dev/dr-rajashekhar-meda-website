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
  content: `Hello. I can help with clinic timings, hospital directions, Dr. Rajashekhar Meda's surgical treatments, and booking a consultation.\n\nIf this is an emergency, please call ${site.contact.phoneDisplay} immediately.`,
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
          content: `Dr. Meda's consulting hours: Mon-Sat 10am-2pm & 5pm-8:30pm. Emergency 24/7 at Suraksha Hospital, Khammam. Call ${site.contact.phoneDisplay}.`,
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
      {/* Launcher Floating Mascot Button */}
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls="chat-panel"
        aria-label={open ? "Close the assistant" : "Chat with the clinic assistant"}
        className={cn(
          "fixed z-50 right-[max(1rem,env(safe-area-inset-right))] bottom-[calc(5rem+env(safe-area-inset-bottom))] lg:bottom-[max(1.5rem,env(safe-area-inset-bottom))] grid place-items-center rounded-full",
          "transition-transform duration-[var(--dur-base)] hover:scale-110 active:scale-95",
          "focus-visible:outline-3 focus-visible:outline-offset-4",
          open
            ? "size-14 bg-sky-600 text-white shadow-2xl"
            : "size-16 sm:size-[4.5rem]",
          !open && !reduceMotion && "animate-float"
        )}
      >
        {open ? (
          <X className="size-6" />
        ) : (
          <span className="relative grid size-full place-items-center">
            <span
              className={cn(
                "absolute inset-0 rounded-full ring-2 ring-sky-400/50 shadow-xl",
                !reduceMotion && "animate-breathe"
              )}
              aria-hidden
            />
            <Image
              src="/brand/chatbot-avatar.png"
              alt=""
              width={256}
              height={256}
              className="relative size-full rounded-full object-cover"
              aria-hidden
            />
          </span>
        )}
      </button>

      {/* Solid Non-Transparent Chatbot Window Panel */}
      {open && (
        <div
          id="chat-panel"
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-label="Clinic assistant"
          className={cn(
            "fixed z-50 right-2 left-2 bottom-36 sm:left-auto sm:right-4 sm:w-[26rem]",
            "lg:bottom-24 flex flex-col rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/80 text-slate-100",
            "shadow-2xl max-h-[min(32rem,70vh)]",
            !reduceMotion && "motion-safe:animate-in motion-safe:fade-in"
          )}
        >
          {/* Solid Header */}
          <header className="flex items-center justify-between gap-3 bg-slate-950 border-b border-sky-500/30 text-white p-4">
            <div className="flex items-center gap-3 min-w-0">
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
                  className="size-11 shrink-0 rounded-full object-cover object-[50%_26%] ring-2 ring-sky-400/40"
                />
              )}
              <div className="min-w-0">
                <p className="font-bold text-sm truncate text-white">Clinic Assistant</p>
                <p className="text-xs text-sky-300 truncate">
                  {site.hospital.name}, {site.hospital.city}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close the assistant"
              className="grid size-9 shrink-0 place-items-center rounded-lg bg-slate-800/80 text-white hover:bg-slate-700 transition-colors"
            >
              <X className="size-5" />
            </button>
          </header>

          {/* Solid Messages List Scroll Area */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-900"
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
                    "max-w-[88%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-sm",
                    m.role === "user"
                      ? "bg-sky-600 text-white font-medium rounded-br-sm"
                      : m.intent === "emergency"
                        ? "bg-red-950/90 text-red-100 border border-red-500/50 rounded-bl-sm"
                        : "bg-slate-800 text-slate-100 border border-slate-700/70 rounded-bl-sm"
                  )}
                >
                  {m.intent === "emergency" && (
                    <span className="flex items-center gap-1.5 font-bold text-red-400 mb-1.5">
                      <AlertTriangle className="size-4" aria-hidden />
                      Urgent Emergency
                    </span>
                  )}
                  {m.content}
                  {m.intent === "emergency" && (
                    <a
                      href={site.contact.phoneHref}
                      onClick={() => track("call_click", { source: "chatbot" })}
                      className="mt-3 flex items-center justify-center gap-2 rounded-none bg-emergency px-4 py-2.5 font-bold text-white tnum shadow-md hover:bg-emergency-hover"
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
                <div className="rounded-2xl rounded-bl-sm bg-slate-800 border border-slate-700 px-4 py-3">
                  <Loader2 className="size-4 animate-spin text-sky-400" />
                  <span className="sr-only">The assistant is typing…</span>
                </div>
              </div>
            )}

            {messages.length === 1 && (
              <ul className="flex flex-wrap gap-2 pt-2">
                {SUGGESTIONS.map((s) => (
                  <li key={s}>
                    <button
                      type="button"
                      onClick={() => send(s)}
                      className="bg-slate-800 hover:bg-slate-700 text-sky-300 border border-slate-700 rounded-full px-3 py-2 text-xs font-semibold shadow-sm transition-all duration-200"
                    >
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Solid Input Bar Container */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="border-t border-slate-800 bg-slate-950 p-3 flex items-center gap-2"
          >
            <label htmlFor="chat-input" className="sr-only">
              Type your message
            </label>
            <input
              id="chat-input"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about timings, location, surgeries…"
              autoComplete="off"
              className="flex-1 h-11 rounded-xl border border-slate-700 bg-slate-900 px-3.5 text-sm sm:text-base text-white placeholder:text-slate-400 outline-none transition-all focus-visible:border-sky-400 focus-visible:ring-2 focus-visible:ring-sky-400/40"
            />
            <Button
              type="submit"
              variant="accent"
              size="icon-touch"
              disabled={sending || !input.trim()}
              aria-label="Send message"
              className="rounded-xl shrink-0"
            >
              <Send className="size-4" />
            </Button>
          </form>

          {/* Solid Disclaimer */}
          <p className="bg-slate-950 px-4 pb-3 pt-1 text-[0.7rem] leading-snug text-slate-400 border-t border-slate-800/60">
            This assistant provides general information — it cannot diagnose or give medical advice. For urgent issues, call{" "}
            <a href={site.contact.phoneHref} className="underline font-semibold text-sky-300 tnum">
              {site.contact.phoneDisplay}
            </a>
            .
          </p>
        </div>
      )}
    </>
  );
}
