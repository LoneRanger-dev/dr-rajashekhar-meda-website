"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, ShieldCheck } from "lucide-react";
import { site, navigation, conditions } from "@/lib/site";
import { Reveal } from "@/components/site/reveal";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-sky-500/20 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <Reveal y={16}>
          {/* Main Footer Grid: Clean 4-Column Layout */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch">
            
            {/* Column 1: Doctor Branding & Logo */}
            <div className="space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <Link href="/" className="inline-flex rounded-xl bg-white p-2 shrink-0 shadow-md hover:opacity-95 transition-opacity">
                  <Image
                    src="/brand/dr-rajashekhar-logo-footer.png"
                    alt={`${site.doctor.name} — Laparoscopic, Endoscopic & Laser Surgery`}
                    width={480}
                    height={320}
                    className="h-14 w-auto object-contain"
                  />
                </Link>
                <div className="space-y-1">
                  <p className="font-[family-name:var(--font-display)] text-base font-extrabold text-white tracking-tight">
                    {site.doctor.name}
                  </p>
                  <p className="text-xs text-sky-300 font-semibold">
                    {site.doctor.credentials}
                  </p>
                  <p className="text-xs text-slate-300 leading-snug font-medium">
                    {site.doctor.title}
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2: Hospital Location & Contact Card */}
            <div className="h-full rounded-xl border border-sky-500/20 bg-slate-900/60 p-4 sm:p-5 shadow-sm hover:-translate-y-0.5 hover:border-sky-400/40 hover:shadow-md transition-all duration-300 backdrop-blur-md flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  {site.hospital.name}
                </h2>
                <address className="not-italic space-y-2 text-xs sm:text-sm text-slate-300">
                  <div className="flex gap-2 items-start">
                    <MapPin className="size-4 mt-0.5 shrink-0 text-accent" aria-hidden />
                    <span className="leading-relaxed text-xs sm:text-sm">
                      {site.hospital.addressFull}
                    </span>
                  </div>
                </address>
              </div>
              <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs">
                <a
                  href={site.hospital.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-accent hover:text-sky-300 transition-colors"
                >
                  Get Directions →
                </a>
                <a
                  href={site.contact.phoneHref}
                  className="flex items-center gap-1.5 font-bold text-white hover:text-sky-300 transition-colors tnum"
                >
                  <Phone className="size-3.5 text-accent" aria-hidden />
                  <span>{site.contact.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Column 3: Consulting Hours Card */}
            <div className="h-full rounded-xl border border-sky-500/20 bg-slate-900/60 p-4 sm:p-5 shadow-sm hover:-translate-y-0.5 hover:border-sky-400/40 hover:shadow-md transition-all duration-300 backdrop-blur-md flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  Consulting Hours
                </h2>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  <li className="flex gap-2 items-start">
                    <Clock className="size-4 mt-0.5 shrink-0 text-accent" aria-hidden />
                    <span className="leading-relaxed text-xs sm:text-sm">
                      {site.hours.weekday}
                      <br />
                      {site.hours.sunday}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="pt-2 border-t border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <ShieldCheck className="size-4 shrink-0 text-emerald-400" aria-hidden />
                  <span>24/7 Emergency & ICU Care</span>
                </div>
              </div>
            </div>

            {/* Column 4: Explore & Treatments Navigation */}
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Explore
                </h2>
                <ul className="space-y-1.5 text-xs font-medium">
                  {navigation.slice(1).map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-slate-300 hover:text-sky-300 transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Surgeries
                </h2>
                <ul className="space-y-1.5 text-xs font-medium">
                  {conditions.slice(0, 5).map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/conditions/${c.slug}`}
                        className="text-slate-300 hover:text-sky-300 transition-colors duration-200"
                      >
                        {c.short}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Divider & Disclaimer Section */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 space-y-3">
            <p className="text-[11px] leading-relaxed text-slate-400/90 max-w-5xl">
              <strong className="font-semibold text-slate-300">
                Medical Disclaimer:
              </strong>{" "}
              The content provided on this website is for informational and educational purposes only and does not constitute professional medical advice, diagnosis, or treatment. For urgent inquiries or trauma care, please call{" "}
              <a href={site.contact.phoneHref} className="underline tnum text-slate-300 hover:text-white">
                {site.contact.phoneDisplay}
              </a>{" "}
              or visit Suraksha Hospital emergency room immediately.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
              <p>
                © {new Date().getFullYear()} {site.doctor.name} · {site.hospital.name},{" "}
                {site.hospital.city}. All rights reserved.
              </p>
              <p className="text-[11px] text-slate-500 font-medium">
                Advanced Laparoscopic, Endoscopic & Laser Surgical Center
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
