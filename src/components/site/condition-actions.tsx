"use client";

import React from "react";
import Link from "next/link";
import { CalendarCheck, MessageSquare, Phone } from "lucide-react";
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
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#134377] hover:bg-[#0e3259] text-white px-5 py-3 text-xs sm:text-sm font-bold shadow-md transition-all duration-300 active:scale-95"
        >
          <CalendarCheck className="size-4" />
          <span>Book Consultation</span>
        </Link>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackWhatsApp}
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#5CA548] hover:bg-[#4a883a] text-white px-5 py-3 text-xs sm:text-sm font-bold shadow-md transition-all duration-300 active:scale-95"
        >
          <MessageSquare className="size-4" />
          <span>WhatsApp Doctor</span>
        </a>

        <a
          href={phoneHref}
          onClick={trackCall}
          className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-[#134377] bg-sky-500/10 text-[#134377] dark:text-sky-300 px-5 py-3 text-xs sm:text-sm font-bold shadow-sm hover:bg-[#134377]/10 transition-all duration-300 active:scale-95"
        >
          <Phone className="size-4" />
          <span className="tnum">Call: {phoneDisplay}</span>
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3 pt-2">
      <Link
        href="/contact#appointment"
        className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#134377] hover:bg-[#0e3259] text-white px-7 py-3.5 text-xs sm:text-sm font-bold shadow-md transition-all duration-300 active:scale-95"
      >
        <CalendarCheck className="size-4" aria-hidden />
        <span>Book Appointment</span>
      </Link>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackWhatsApp}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#5CA548] hover:bg-[#4a883a] text-white px-6 py-3.5 text-xs sm:text-sm font-bold shadow-md transition-all duration-300 active:scale-95"
      >
        <MessageSquare className="size-4" aria-hidden />
        <span>WhatsApp</span>
      </a>

      <a
        href={phoneHref}
        onClick={trackCall}
        className="inline-flex items-center justify-center gap-2.5 rounded-full border border-[#134377] bg-sky-500/10 text-[#134377] dark:text-sky-300 px-6 py-3.5 text-xs sm:text-sm font-bold shadow-md hover:bg-[#134377]/10 transition-all duration-300 active:scale-95"
      >
        <Phone className="size-4" aria-hidden />
        <span>Call Clinic</span>
      </a>
    </div>
  );
}
