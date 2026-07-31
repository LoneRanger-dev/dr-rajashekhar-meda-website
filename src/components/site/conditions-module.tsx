"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Stethoscope } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { ConditionIllustration } from "@/components/illustrations/condition-illustrations";
import { detailedConditions } from "@/lib/conditionsData";

const categories = [
  "All Conditions",
  "Laparoscopic Surgery",
  "Laser Proctology & Vascular",
  "General & Trauma Surgery",
] as const;

export function ConditionsModule() {
  const [activeCategory, setActiveCategory] = useState<string>("All Conditions");

  const filteredConditions =
    activeCategory === "All Conditions"
      ? detailedConditions
      : detailedConditions.filter((c) => c.category === activeCategory);

  return (
    <section className="section-py relative overflow-hidden bg-background">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-40 right-0 size-96 rounded-full bg-accent/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 left-0 size-96 rounded-full bg-primary/10 blur-3xl" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center space-y-4 max-w-3xl mx-auto mb-10 sm:mb-12" blur={false} y={16}>
          <span className="type-label text-accent inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-4 py-1.5">
            <Sparkles className="size-3.5" aria-hidden />
            International Hospital Standard Patient Education
          </span>
          <h2 className="type-h2">Surgeries &amp; Medical Conditions Treated</h2>
          <p className="type-lead text-muted-foreground">
            Explore comprehensive patient education guides for laparoscopic keyhole surgeries, laser proctology, vascular procedures, and 24/7 trauma emergency care by Dr. Rajashekhar Meda at Suraksha Hospital.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-accent text-accent-foreground shadow-md scale-105"
                    : "bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Condition Cards Grid */}
        <RevealGroup as="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredConditions.map((condition) => (
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

                  <h3 className="type-h3 text-base sm:text-lg mb-2 group-hover:text-accent transition-colors flex items-center justify-between">
                    <span>{condition.name}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed mb-4">
                    {condition.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-accent">
                  <span className="inline-flex items-center gap-1">
                    <ShieldCheck className="size-3.5" aria-hidden />
                    Learn More &amp; Book
                  </span>
                  <span className="grid size-7 place-items-center rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight className="size-3.5" aria-hidden />
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Bottom Banner */}
        <Reveal className="mt-14 glass rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-accent/20 bg-gradient-to-r from-accent/5 to-primary/5" blur={false} y={16}>
          <div className="flex items-center gap-4">
            <span className="icon-glass grid size-12 shrink-0 place-items-center rounded-2xl text-accent">
              <Stethoscope className="size-6" aria-hidden />
            </span>
            <div>
              <h4 className="font-semibold text-foreground text-base sm:text-lg">Need Immediate Surgical Evaluation?</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">Dr. Rajashekhar Meda is available for OPD consultation &amp; 24/7 Emergency Trauma care at Suraksha Hospital, Khammam.</p>
            </div>
          </div>
          <Link
            href="/contact#appointment"
            className="inline-flex items-center gap-2 rounded-xl bg-accent text-accent-foreground px-5 py-3 text-sm font-semibold shadow-md hover:bg-accent/90 transition-all shrink-0 active:scale-95"
          >
            <span>Book Consultation</span>
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
