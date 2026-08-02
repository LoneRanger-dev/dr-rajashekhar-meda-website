"use client";

import React from "react";
import Link from "next/link";
import { ShieldAlert, CalendarCheck, MessageSquare, Phone } from "lucide-react";
import { trackCall, trackWhatsApp } from "@/lib/analytics";

interface ConditionActionsProps {
  phoneHref: string;
  phoneDisplay: string;
  whatsappUrl: string;
  variant?: "hero" | "sidebar";
}

export function ConditionActions({
  phoneHref,
  phoneDisplay,
  whatsappUrl,
  variant = "hero",
}: ConditionActionsProps) {
  if (variant === "sidebar") {
    return (
      <div className="space-y-2.5 pt-2">
        <Link
          href="/contact#appointment"
          className="w-full inline-flex items-center justify-center gap-2 rounded-none bg-accent text-accent-foreground px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:bg-accent/90 hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
        >
          <CalendarCheck className="size-4" />
          <span>Book Consultation</span>
        </Link>

        <a
          href={phoneHref}
          onClick={trackCall}
          className="w-full inline-flex items-center justify-center gap-2 rounded-none bg-emergency text-white px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:bg-emergency-hover hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
        >
          <Phone className="size-4" />
          <span className="tnum">Emergency: {phoneDisplay}</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackWhatsApp}
          className="w-full inline-flex items-center justify-center gap-2 rounded-none bg-emerald-600 text-white px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:bg-emerald-700 hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
        >
          <MessageSquare className="size-4" />
          <span>WhatsApp Doctor</span>
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3 pt-2">
      <a
        href={phoneHref}
        onClick={trackCall}
        className="inline-flex items-center justify-center gap-2.5 rounded-none bg-emergency text-white px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:bg-emergency-hover hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
      >
        <ShieldAlert className="size-4 animate-pulse" aria-hidden />
        <span className="tnum">Call 24/7 Emergency ({phoneDisplay})</span>
      </a>

      <Link
        href="/contact#appointment"
        className="inline-flex items-center justify-center gap-2 rounded-none bg-accent text-accent-foreground px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:bg-accent/90 hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
      >
        <CalendarCheck className="size-4" aria-hidden />
        <span>Book Appointment</span>
      </Link>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackWhatsApp}
        className="inline-flex items-center justify-center gap-2 rounded-none bg-emerald-600 text-white px-5 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:bg-emerald-700 hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
      >
        <MessageSquare className="size-4" aria-hidden />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
