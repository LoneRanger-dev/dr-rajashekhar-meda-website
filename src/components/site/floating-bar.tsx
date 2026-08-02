"use client";

import Link from "next/link";
import { ShieldAlert, MessageSquare, CalendarCheck } from "lucide-react";
import { trackCall, trackWhatsApp } from "@/lib/analytics";
import { site, whatsappUrl } from "@/lib/site";

export function FloatingBar() {
  return (
    <aside
      aria-label="Quick contact sidebar toolbar"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 items-end group"
    >
      {/* 24/7 Emergency Call (No phone number printed, red button) */}
      <a
        href={site.contact.phoneHref}
        onClick={trackCall}
        className="inline-flex items-center gap-2 rounded-l-xl rounded-r-none bg-emergency text-white px-3.5 sm:px-4 py-3 text-xs font-bold uppercase tracking-wider shadow-2xl hover:bg-emergency-hover hover:-translate-x-1.5 transition-all duration-300 border-l border-t border-b border-white/20"
        title="24/7 Emergency Call"
      >
        <ShieldAlert className="size-4 shrink-0 animate-pulse" aria-hidden />
        <span className="whitespace-nowrap">24/7 Emergency</span>
      </a>

      {/* WhatsApp Chat */}
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackWhatsApp}
        className="inline-flex items-center gap-2 rounded-l-xl rounded-r-none bg-emerald-600 text-white px-3.5 sm:px-4 py-3 text-xs font-bold uppercase tracking-wider shadow-2xl hover:bg-emerald-700 hover:-translate-x-1.5 transition-all duration-300 border-l border-t border-b border-white/20"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="size-4 shrink-0" aria-hidden />
        <span className="whitespace-nowrap">WhatsApp</span>
      </a>

      {/* Book Appointment */}
      <Link
        href="/contact#appointment"
        className="inline-flex items-center gap-2 rounded-l-xl rounded-r-none bg-accent text-accent-foreground px-3.5 sm:px-4 py-3 text-xs font-bold uppercase tracking-wider shadow-2xl hover:bg-accent/90 hover:-translate-x-1.5 transition-all duration-300 border-l border-t border-b border-white/20"
        title="Book Appointment"
      >
        <CalendarCheck className="size-4 shrink-0" aria-hidden />
        <span className="whitespace-nowrap">Book Appointment</span>
      </Link>
    </aside>
  );
}
