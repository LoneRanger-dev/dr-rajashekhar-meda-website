"use client";

import { Stethoscope, Scan, Scissors, Sparkles, CheckCircle2 } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";

const steps = [
  {
    number: "01",
    icon: Stethoscope,
    title: "Clinical Consultation",
    description: "Detailed pre-operative evaluation, physical examination, and digital diagnostic mapping by Dr. Rajasekhar Meda.",
    highlight: "Comprehensive Care",
  },
  {
    number: "02",
    icon: Scan,
    title: "3D Keyhole Planning",
    description: "Personalized surgical roadmap utilizing high-resolution imaging for minimally invasive precision.",
    highlight: "Advanced Precision",
  },
  {
    number: "03",
    icon: Scissors,
    title: "Minimally Invasive Surgery",
    description: "Laparoscopic keyhole or laser ablation procedure performed with tiny 3-5mm incisions and minimal tissue trauma.",
    highlight: "Minimal Pain & Scars",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Rapid Recovery & Discharge",
    description: "Post-operative monitoring at Suraksha Hospital ICU/Ward with discharge typically within 24 hours.",
    highlight: "Same-Day Discharge",
  },
];

export function PatientJourney() {
  return (
    <section className="section-py relative overflow-hidden bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="space-y-4 max-w-3xl mb-12" blur={false} y={16}>
          <span className="type-label text-[#134377] dark:text-sky-300 inline-flex items-center gap-2 rounded-full bg-[#134377]/10 dark:bg-sky-500/15 border border-[#134377]/20 dark:border-sky-400/30 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
            <Stethoscope className="size-3.5" />
            <span>Surgical Care Roadmap</span>
          </span>
          <h2 className="type-h2">Your Path to Safe & Rapid Surgical Recovery</h2>
          <p className="type-lead text-muted-foreground">
            From your initial consultation at Suraksha Hospital to same-day post-operative discharge — structured for your complete comfort and safety.
          </p>
        </Reveal>

        <RevealGroup as="div" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <RevealItem
                key={step.number}
                as="div"
                className="group relative glass lift rounded-2xl p-6 flex flex-col justify-between h-full border border-white/10 hover:border-accent/30 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-bold font-[family-name:var(--font-display)] text-accent/40 group-hover:text-accent transition-colors">
                      {step.number}
                    </span>
                    <span className="icon-glass grid size-12 place-items-center rounded-xl text-accent group-hover:scale-110 transition-transform">
                      <Icon className="size-6" aria-hidden />
                    </span>
                  </div>
                  <h3 className="type-h3 mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/50 flex items-center gap-1.5 text-xs font-semibold text-accent">
                  <CheckCircle2 className="size-3.5" aria-hidden />
                  <span>{step.highlight}</span>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
