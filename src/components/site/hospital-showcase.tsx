"use client";

import Link from "next/link";
import { Phone, MapPin, ArrowRight, Building2, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function HospitalShowcase() {
  return (
    <section className="relative overflow-hidden w-full max-w-full my-8 border border-border/60 shadow-2xl">
      {/* ── Background: Live Interactive Google Map of Suraksha Hospital ── */}
      <div className="absolute inset-0 z-0 opacity-80 dark:opacity-70 pointer-events-auto">
        <iframe
          title={`${site.hospital.name} Map Location`}
          src={site.hospital.maps.embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: "450px" }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="size-full filter contrast-[1.05] saturate-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/80 pointer-events-none" />
      </div>

      {/* ── Top Center Prominent Suraksha Hospital Card ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 flex flex-col items-center justify-center text-center">
        <div className="max-w-2xl w-full rounded-none border border-slate-700/80 bg-slate-900/95 p-6 sm:p-10 backdrop-blur-2xl text-white shadow-2xl space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent border border-accent/30">
            <Building2 className="size-3.5 shrink-0" aria-hidden />
            <span>Visit Us in Khammam</span>
          </div>

          <h2 className="font-[family-name:var(--font-display)] font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-tight">
            {site.hospital.name}
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
            {site.hospital.street}, {site.hospital.city}, {site.hospital.state} {site.hospital.postalCode}
          </p>

          <div className="pt-1 flex flex-wrap items-center justify-center gap-4 text-xs text-sky-300 font-semibold">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5 text-accent" />
              {site.hours.weekday}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="size-3.5 text-emergency" />
              24/7 Surgical Emergency
            </span>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <Button
              size="cta"
              className="rounded-none bg-white text-slate-950 font-extrabold hover:bg-slate-100 hover:text-slate-950 shadow-xl transition-all duration-200"
              render={<a href={site.contact.phoneHref} />}
            >
              <Phone className="size-4 text-sky-600" aria-hidden />
              <span>Call Hospital</span>
            </Button>

            <Button
              variant="accent"
              size="cta"
              className="rounded-none shadow-md"
              render={
                <a
                  href={site.hospital.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <MapPin className="size-4" aria-hidden />
              <span>Get Directions</span>
            </Button>

            <Button
              variant="ghost"
              size="cta"
              className="rounded-none text-sky-300 hover:text-white hover:bg-white/10"
              render={<Link href="/conditions" />}
            >
              <span>Explore Surgeries</span>
              <ArrowRight className="size-4" aria-hidden />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
