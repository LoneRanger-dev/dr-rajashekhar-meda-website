"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { ConditionIllustration } from "@/components/illustrations/condition-illustrations";
import { detailedConditions } from "@/lib/conditionsData";

export function ConditionsModule() {
  return (
    <section className="section-py relative overflow-hidden bg-background">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-40 right-0 size-96 rounded-full bg-accent/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 left-0 size-96 rounded-full bg-primary/10 blur-3xl" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center space-y-4 max-w-3xl mx-auto mb-10 sm:mb-12" blur={false} y={16}>
          <span className="type-label text-[#134377] dark:text-sky-300 inline-flex items-center gap-2 rounded-full bg-[#134377]/10 dark:bg-sky-500/15 border border-[#134377]/20 dark:border-sky-400/30 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="size-3.5" aria-hidden />
            <span>International Hospital Standard Patient Education</span>
          </span>
          <h2 className="type-h2">Surgeries &amp; Medical Conditions Treated</h2>
          <p className="type-lead text-muted-foreground">
            Explore comprehensive patient education guides for laparoscopic keyhole surgeries, laser proctology, vascular procedures, and 24/7 trauma emergency care by Dr. Rajashekhar Meda at Suraksha Hospital.
          </p>
        </Reveal>

        {/* Condition Cards Grid — All 14 Conditions */}
        <RevealGroup as="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {detailedConditions.map((condition) => (
            <RevealItem key={condition.slug} as="div">
              <Link
                href={`/conditions/${condition.slug}`}
                className="group relative glass lift rounded-2xl p-5 flex flex-col justify-between h-full border border-white/10 dark:border-white/5 hover:border-accent/40 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer"
              >
                <div>
                  {/* Vector Medical Illustration Box */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-900/50 p-3 mb-4 group-hover:scale-[1.02] transition-transform duration-300 border border-slate-100 dark:border-slate-800">
                    <ConditionIllustration slug={condition.slug} className="size-full object-contain" />
                    <span className="absolute top-2 left-2 rounded-md bg-background/90 backdrop-blur-md px-2 py-0.5 text-[10px] font-semibold text-accent border border-accent/20">
                      {condition.category}
                    </span>
                  </div>

                  <h3 className="font-[family-name:var(--font-display)] font-bold text-base text-foreground group-hover:text-accent transition-colors line-clamp-2 mb-2">
                    {condition.name}
                  </h3>

                  <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed mb-4">
                    {condition.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/50 flex items-center justify-between text-xs font-bold text-accent group-hover:translate-x-0.5 transition-transform">
                  <span className="inline-flex items-center gap-1">
                    <ShieldCheck className="size-3.5 text-accent" />
                    Learn Surgery Guide
                  </span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
