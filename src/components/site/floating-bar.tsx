"use client";

import Link from "next/link";
import { ShieldAlert, MessageSquare, CalendarCheck } from "lucide-react";
import { trackCall, trackWhatsApp } from "@/lib/analytics";
import { site, whatsappUrl } from "@/lib/site";

export function FloatingBar() {
  return (
    <aside
      aria-label="Quick contact toolbar"
      className="fixed bottom-4 inset-x-4 z-50 mx-auto max-w-lg lg:bottom-6"
    >
      <div className="glass-strong rounded-2xl p-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/20 dark:border-white/10 flex items-center justify-between gap-2 backdrop-blur-xl bg-background/90">
        {/* Emergency Call */}
        <a
          href={site.contact.phoneHref}
          onClick={trackCall}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emergency text-emergency-foreground px-3.5 py-2.5 text-xs sm:text-sm font-semibold shadow-md hover:bg-emergency-hover transition-all active:scale-[0.98]"
        >
          <ShieldAlert className="size-4 shrink-0 animate-pulse" aria-hidden />
          <span className="hidden sm:inline">24/7 Emergency</span>
          <span className="tnum font-bold">{site.contact.phoneDisplay}</span>
        </a>

        {/* WhatsApp */}
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackWhatsApp}
          className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 text-white px-3.5 py-2.5 text-xs sm:text-sm font-semibold shadow-md hover:bg-emerald-700 transition-all active:scale-[0.98]"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="size-4 shrink-0" aria-hidden />
          <span className="hidden md:inline">WhatsApp</span>
        </a>

        {/* Book Appointment */}
        <Link
          href="/contact#appointment"
          className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-accent text-accent-foreground px-3.5 py-2.5 text-xs sm:text-sm font-semibold shadow-md hover:bg-accent/90 transition-all active:scale-[0.98]"
        >
          <CalendarCheck className="size-4 shrink-0" aria-hidden />
          <span className="whitespace-nowrap">Book</span>
        </Link>
      </div>
    </aside>
  );
}
