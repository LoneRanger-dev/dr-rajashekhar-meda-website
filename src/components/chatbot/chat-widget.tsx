"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, Send, Phone, Loader2, AlertTriangle, MessageSquare, CalendarCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";
import { track, trackCall, trackWhatsApp } from "@/lib/analytics";

interface Message {
  role: "user" | "assistant";
  content: string;
  intent?: string;
}

const GREETING: Message = {
  role: "assistant",
  content: `Hello! I am Dr. Rajashekhar Meda's AI Assistant at Suraksha Hospital, Khammam.\n\nHow can I help you today? You can ask about our 14 surgical specialties (Hernia, Gallstones, Appendix, Laser Piles, Varicose Veins, etc.), clinic timings, location, or tap below to book a consultation.`,
};

const QUICK_SERVICE_SUGGESTIONS = [
  "📅 Book Appointment",
  "🚨 24/7 Emergency",
  "🕒 Clinic Timings",
  "📍 Hospital Location",
  "Hernia Surgery",
  "Gallbladder Stones",
  "Appendix Surgery",
  "Laser Piles & Fistula",
  "Varicose Veins Laser",
  "Thyroid & Lipoma",
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [bookingState, setBookingState] = useState<{ step: number; name?: string; phone?: string }>({ step: 0 });

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

  function handleQuickAction(action: "emergency" | "whatsapp" | "appointment") {
    if (action === "emergency") {
      trackCall();
      setMessages((prev) => [
        ...prev,
        { role: "user", content: "🚨 24/7 Emergency Assistance" },
        {
          role: "assistant",
          content: `24/7 Emergency Surgical Care is available at Suraksha Hospital, Khammam.\n\nPlease call our direct emergency helpline right now:`,
          intent: "emergency",
        },
      ]);
    } else if (action === "whatsapp") {
      trackWhatsApp();
      window.open(whatsappUrl("Hello Dr. Rajashekhar Meda's team, I would like to inquire about surgical consultation."), "_blank");
    } else if (action === "appointment") {
      setBookingState({ step: 1 });
      setMessages((prev) => [
        ...prev,
        { role: "user", content: "📅 Book Consultation" },
        {
          role: "assistant",
          content: "I'd be happy to help you reserve a consultation slot with Dr. Rajashekhar Meda.\n\nPlease type your **Full Name** to get started:",
          intent: "appointment",
        },
      ]);
    }
  }

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || sending) return;

    // Interactive booking wizard state handler
    if (bookingState.step === 1) {
      setBookingState({ step: 2, name: trimmed });
      setMessages((prev) => [
        ...prev,
        { role: "user", content: trimmed },
        {
          role: "assistant",
          content: `Thank you, ${trimmed}.\n\nNext, please provide your **Mobile Number** and any specific condition (e.g. Hernia, Gallstones, Laser Piles, etc.):`,
          intent: "appointment",
        },
      ]);
      setInput("");
      return;
    } else if (bookingState.step === 2) {
      const patientName = bookingState.name || "Patient";
      setBookingState({ step: 0 });
      setMessages((prev) => [
        ...prev,
        { role: "user", content: trimmed },
        {
          role: "assistant",
          content: `✅ **Appointment Request Received!**\n\n• **Patient Name:** ${patientName}\n• **Contact / Details:** ${trimmed}\n• **Hospital:** Suraksha Hospital, Khammam\n\nDr. Rajashekhar Meda's clinic desk will call you shortly on this number to confirm your time slot.\n\nFor immediate confirmation, call directly on **${site.contact.phoneDisplay}**.`,
          intent: "appointment",
        },
      ]);
      setInput("");
      return;
    }

    // Handle suggestion pill actions
    if (trimmed === "🚨 24/7 Emergency") {
      handleQuickAction("emergency");
      return;
    }
    if (trimmed === "📅 Book Appointment") {
      handleQuickAction("appointment");
      return;
    }

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
          "fixed z-50 right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1.5rem,env(safe-area-inset-bottom))] grid place-items-center rounded-full",
          "transition-transform duration-[var(--dur-base)] hover:scale-110 active:scale-95",
          "focus-visible:outline-3 focus-visible:outline-offset-4 shadow-2xl",
          open
            ? "size-14 bg-sky-600 text-white"
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
              alt="Dr. Meda AI Assistant"
              width={256}
              height={256}
              className="relative size-full rounded-full object-cover"
              aria-hidden
            />
          </span>
        )}
      </button>

      {/* Solid 100% Opaque Chatbot Panel */}
      {open && (
        <div
          id="chat-panel"
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-label="Clinic assistant"
          className={cn(
            "fixed z-50 right-2 left-2 bottom-20 sm:left-auto sm:right-4 sm:w-[26rem]",
            "lg:bottom-24 flex flex-col rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/90 text-slate-100",
            "shadow-2xl max-h-[min(34rem,75vh)]",
            !reduceMotion && "motion-safe:animate-in motion-safe:fade-in"
          )}
        >
          {/* Header */}
          <header className="flex items-center justify-between gap-3 bg-slate-950 border-b border-sky-500/30 text-white p-3.5">
            <div className="flex items-center gap-3 min-w-0">
              {reduceMotion ? (
                <Image
                  src="/brand/chatbot-poster.jpg"
                  alt=""
                  width={320}
                  height={320}
                  className="size-10 shrink-0 rounded-full object-cover"
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
                  className="size-10 shrink-0 rounded-full object-cover object-[50%_26%] ring-2 ring-sky-400/40"
                />
              )}
              <div className="min-w-0">
                <p className="font-bold text-sm truncate text-white">Dr. Meda AI Assistant</p>
                <p className="text-xs text-sky-300 truncate">
                  Suraksha Hospital, Khammam
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close the assistant"
              className="grid size-8 shrink-0 place-items-center rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-colors"
            >
              <X className="size-4" />
            </button>
          </header>

          {/* Integrated 3 Quick Action Bar inside Chatbot */}
          <div className="grid grid-cols-3 gap-1.5 p-2 bg-slate-950/90 border-b border-slate-800 text-center">
            <button
              type="button"
              onClick={() => handleQuickAction("emergency")}
              className="flex flex-col items-center justify-center gap-1 rounded-lg bg-red-600/90 hover:bg-red-600 text-white p-2 text-[10px] font-bold uppercase tracking-wider transition-all active:scale-95 shadow-sm"
            >
              <AlertTriangle className="size-3.5 shrink-0 animate-pulse text-yellow-300" />
              <span>24/7 Emergency</span>
            </button>

            <button
              type="button"
              onClick={() => handleQuickAction("whatsapp")}
              className="flex flex-col items-center justify-center gap-1 rounded-lg bg-emerald-600/90 hover:bg-emerald-600 text-white p-2 text-[10px] font-bold uppercase tracking-wider transition-all active:scale-95 shadow-sm"
            >
              <MessageSquare className="size-3.5 shrink-0 text-white" />
              <span>WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={() => handleQuickAction("appointment")}
              className="flex flex-col items-center justify-center gap-1 rounded-lg bg-sky-600/90 hover:bg-sky-600 text-white p-2 text-[10px] font-bold uppercase tracking-wider transition-all active:scale-95 shadow-sm"
            >
              <CalendarCheck className="size-3.5 shrink-0 text-white" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Messages Scroll View */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-3.5 space-y-3 bg-slate-900"
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
                      Urgent Emergency Care
                    </span>
                  )}
                  {m.content}
                  {m.intent === "emergency" && (
                    <a
                      href={site.contact.phoneHref}
                      onClick={() => track("call_click", { source: "chatbot" })}
                      className="mt-3 flex items-center justify-center gap-2 rounded-none bg-sky-500 text-slate-950 font-bold px-4 py-2.5 tnum shadow-md hover:bg-sky-400"
                    >
                      <Phone className="size-4" aria-hidden />
                      <span>Call Clinic</span>
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

            {/* Service & Quick Query Action Pills */}
            <div className="pt-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 block flex items-center gap-1">
                <Sparkles className="size-3 text-sky-400" /> Services &amp; Quick Queries:
              </span>
              <ul className="flex flex-wrap gap-1.5">
                {QUICK_SERVICE_SUGGESTIONS.map((s) => (
                  <li key={s}>
                    <button
                      type="button"
                      onClick={() => send(s)}
                      className="bg-slate-800 hover:bg-slate-700 text-sky-300 border border-slate-700 rounded-full px-2.5 py-1.5 text-[11px] font-semibold shadow-sm transition-all duration-200"
                    >
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="border-t border-slate-800 bg-slate-950 p-2.5 flex items-center gap-2"
          >
            <label htmlFor="chat-input" className="sr-only">
              Type your message
            </label>
            <input
              id="chat-input"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={bookingState.step > 0 ? "Type details here…" : "Ask about surgeries, symptoms, timings…"}
              autoComplete="off"
              className="flex-1 h-10 rounded-xl border border-slate-700 bg-slate-900 px-3 text-xs sm:text-sm text-white placeholder:text-slate-400 outline-none transition-all focus-visible:border-sky-400 focus-visible:ring-2 focus-visible:ring-sky-400/40"
            />
            <Button
              type="submit"
              variant="accent"
              size="icon-touch"
              disabled={sending || !input.trim()}
              aria-label="Send message"
              className="rounded-xl shrink-0 h-10 w-10"
            >
              <Send className="size-4" />
            </Button>
          </form>

          {/* Disclaimer */}
          <p className="bg-slate-950 px-3 pb-2 pt-0.5 text-[0.65rem] leading-snug text-slate-400 border-t border-slate-800/60">
            Educational assistant — for medical emergencies, call{" "}
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
