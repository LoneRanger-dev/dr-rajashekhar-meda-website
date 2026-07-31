import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Phone,
  CalendarCheck,
  CheckCircle2,
  AlertTriangle,
  Stethoscope,
  ArrowRight,
  ShieldAlert,
  MessageSquare,
  HelpCircle,
  Clock,
  Zap,
  Activity,
  FileText,
  ChevronRight,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/ui-bits";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { ConditionIllustration } from "@/components/illustrations/condition-illustrations";
import { site, whatsappUrl } from "@/lib/site";
import { detailedConditions, getConditionBySlug, ConditionDetail } from "@/lib/conditionsData";
import { trackCall, trackWhatsApp } from "@/lib/analytics";

export function generateStaticParams() {
  // Static params for all 14 main conditions plus 4 legacy alias slugs
  const allSlugs = [
    ...detailedConditions.map((c) => c.slug),
    "laparoscopic-surgery",
    "hernia-repair",
    "gallbladder-appendix",
    "laser-varicose-veins",
  ];
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);
  if (!condition) return {};

  return {
    title: `${condition.name} Treatment in Khammam | ${site.doctor.name}`,
    description: `${condition.summary} Expert consultation & minimally invasive treatment by Dr. Rajashekhar Meda at Suraksha Hospital, Khammam.`,
    alternates: { canonical: `/conditions/${condition.slug}` },
    openGraph: {
      title: `${condition.name} Treatment in Khammam | ${site.doctor.name}`,
      description: condition.summary,
      url: `/conditions/${condition.slug}`,
      images: ["/images/doctor/dr-rajashekhar-hero.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${condition.name} Treatment in Khammam | ${site.doctor.name}`,
      description: condition.summary,
      images: ["/images/doctor/dr-rajashekhar-hero.jpg"],
    },
  };
}

export default async function ConditionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);
  if (!condition) notFound();

  const related = detailedConditions
    .filter((c) => condition.relatedSlugs.includes(c.slug) || c.category === condition.category)
    .filter((c) => c.slug !== condition.slug)
    .slice(0, 3);

  // Structured JSON-LD Schemas (MedicalCondition + FAQPage + BreadcrumbList)
  const medicalConditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: condition.name,
    description: condition.overview,
    possibleTreatment: [
      {
        "@type": "MedicalTherapy",
        name: condition.surgicalTreatment,
      },
    ],
    signOrSymptom: condition.symptoms.map((s) => ({
      "@type": "MedicalSignOrSymptom",
      name: s.name,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: condition.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site.domain,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Surgeries & Conditions",
        item: `${site.domain}/conditions`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: condition.shortName,
        item: `${site.domain}/conditions/${condition.slug}`,
      },
    ],
  };

  return (
    <>
      {/* Inject Structured Data Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalConditionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── HERO SECTION ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden brand-wash pt-10 pb-14 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden><ChevronRight className="size-3.5" /></li>
              <li>
                <Link href="/conditions" className="hover:text-foreground transition-colors">
                  Surgeries &amp; Conditions
                </Link>
              </li>
              <li aria-hidden><ChevronRight className="size-3.5" /></li>
              <li>
                <span aria-current="page" className="text-foreground font-semibold">
                  {condition.shortName}
                </span>
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Copy */}
            <Reveal className="lg:col-span-7 space-y-6" blur={false} y={16}>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1.5 text-xs font-semibold text-accent">
                <Stethoscope className="size-4" aria-hidden />
                {condition.category} — Suraksha Hospital, Khammam
              </div>

              <h1 className="type-h1 text-3xl sm:text-4xl lg:text-5xl">{condition.name}</h1>
              <p className="type-lead text-muted-foreground text-base sm:text-lg leading-relaxed">
                {condition.summary}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={site.contact.phoneHref}
                  onClick={trackCall}
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-emergency text-emergency-foreground px-5 py-3.5 text-sm font-semibold shadow-md hover:bg-emergency-hover transition-all active:scale-95"
                >
                  <ShieldAlert className="size-4 animate-pulse" aria-hidden />
                  <span className="tnum">Call 24/7 Emergency ({site.contact.phoneDisplay})</span>
                </a>

                <Link
                  href="/contact#appointment"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent text-accent-foreground px-5 py-3.5 text-sm font-semibold shadow-md hover:bg-accent/90 transition-all active:scale-95"
                >
                  <CalendarCheck className="size-4" aria-hidden />
                  <span>Book Appointment</span>
                </Link>

                <a
                  href={whatsappUrl(`Hello Dr. Meda, I would like to consult regarding ${condition.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackWhatsApp}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 text-white px-4 py-3.5 text-sm font-semibold shadow-md hover:bg-emerald-700 transition-all active:scale-95"
                >
                  <MessageSquare className="size-4" aria-hidden />
                  <span>WhatsApp</span>
                </a>
              </div>
            </Reveal>

            {/* Right Vector Illustration Card */}
            <Reveal className="lg:col-span-5" blur={false} y={16}>
              <div className="glass-strong rounded-3xl p-4 sm:p-6 shadow-2xl border border-white/20 dark:border-white/10 bg-background/80">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-50 dark:bg-slate-900/60 p-4 border border-slate-100 dark:border-slate-800">
                  <ConditionIllustration slug={condition.slug} className="size-full object-contain" />
                </div>
                <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-4 text-emerald-500" />
                    Verified Medical Guide
                  </span>
                  <span>Dr. Rajashekhar Meda</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WHAT IS THIS CONDITION? ───────────────────────────────────────── */}
      <Section className="bg-background">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <Reveal className="space-y-4" blur={false} y={16}>
              <span className="type-label text-accent">Understanding Your Health</span>
              <h2 className="type-h2">What is {condition.shortName}?</h2>
              <div className="glass rounded-2xl p-6 sm:p-8 space-y-4 border border-white/10 text-muted-foreground leading-relaxed">
                <p className="text-base sm:text-lg text-foreground font-medium">
                  {condition.overview}
                </p>
                <p>
                  Dr. Rajashekhar Meda evaluates each patient individually at Suraksha Hospital, Khammam, prioritizing early diagnosis, non-surgical management when appropriate, and high-precision minimally invasive keyhole procedures when surgical cure is required.
                </p>
              </div>
            </Reveal>

            {/* ── SYMPTOMS INFOGRAPHIC GRID ─────────────────────────────────── */}
            <Reveal className="space-y-4 pt-6" blur={false} y={16}>
              <span className="type-label text-accent">Recognizing Key Warnings</span>
              <h2 className="type-h2">Common Symptoms of {condition.shortName}</h2>
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {condition.symptoms.map((symptom) => (
                  <div
                    key={symptom.name}
                    className="glass lift rounded-2xl p-5 border border-white/10 flex items-start gap-4"
                  >
                    <span className="icon-glass grid size-10 shrink-0 place-items-center rounded-xl text-accent">
                      <AlertTriangle className="size-5" />
                    </span>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm sm:text-base mb-1">{symptom.name}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{symptom.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* ── CAUSES & RISK FACTORS ──────────────────────────────────────── */}
            <Reveal className="space-y-4 pt-6" blur={false} y={16}>
              <span className="type-label text-accent">Underlying Etiology</span>
              <h2 className="type-h2">Causes &amp; Risk Factors</h2>
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {/* Causes */}
                <div className="glass rounded-2xl p-6 border border-white/10 space-y-3">
                  <h3 className="type-h3 text-base sm:text-lg text-accent flex items-center gap-2">
                    <Activity className="size-5" />
                    Primary Causes
                  </h3>
                  <ul className="space-y-2.5">
                    {condition.causes.map((cause) => (
                      <li key={cause.title} className="text-xs sm:text-sm text-muted-foreground">
                        <strong className="text-foreground">{cause.title}:</strong> {cause.description}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Risk Factors */}
                <div className="glass rounded-2xl p-6 border border-white/10 space-y-3">
                  <h3 className="type-h3 text-base sm:text-lg text-accent flex items-center gap-2">
                    <Zap className="size-5" />
                    Risk Factors
                  </h3>
                  <ul className="space-y-2">
                    {condition.riskFactors.map((rf) => (
                      <li key={rf} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                        <CheckCircle2 className="size-4 text-accent shrink-0" />
                        <span>{rf}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* ── DIAGNOSIS PROTOCOLS ────────────────────────────────────────── */}
            <Reveal className="space-y-4 pt-6" blur={false} y={16}>
              <span className="type-label text-accent">Accurate Clinical Evaluation</span>
              <h2 className="type-h2">How {condition.shortName} is Diagnosed</h2>
              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                {condition.diagnosis.map((diag) => (
                  <div key={diag.name} className="glass rounded-2xl p-5 border border-white/10 space-y-2">
                    <span className="inline-block rounded-md bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent">
                      {diag.badge}
                    </span>
                    <h4 className="font-semibold text-foreground text-sm">{diag.name}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{diag.description}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* ── LAPAROSCOPIC VS OPEN SURGERY ADVANTAGES ─────────────────────── */}
            <Reveal className="space-y-4 pt-6" blur={false} y={16}>
              <span className="type-label text-accent">Surgical Excellence</span>
              <h2 className="type-h2">Benefits of Minimally Invasive Keyhole Surgery</h2>
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {condition.laparoscopicBenefits.map((benefit) => (
                  <div key={benefit.title} className="glass lift rounded-2xl p-5 border border-emerald-500/20 bg-emerald-500/5 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-sm sm:text-base">
                      <CheckCircle2 className="size-5 shrink-0" />
                      <h4>{benefit.title}</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* ── RECOVERY TIMELINE ──────────────────────────────────────────── */}
            <Reveal className="space-y-4 pt-6" blur={false} y={16}>
              <span className="type-label text-accent">Patient Recovery Roadmap</span>
              <h2 className="type-h2">Post-Operative Recovery Timeline</h2>
              <div className="space-y-3 pt-2">
                {condition.recoveryTimeline.map((stage) => (
                  <div key={stage.timeframe} className="glass rounded-2xl p-5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <span className="rounded-xl bg-accent text-accent-foreground px-4 py-2 text-xs font-bold shrink-0">
                      {stage.timeframe}
                    </span>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm sm:text-base">{stage.title}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">{stage.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* ── FREQUENTLY ASKED QUESTIONS (FAQS) ───────────────────────────── */}
            <Reveal className="space-y-4 pt-8" blur={false} y={16}>
              <span className="type-label text-accent">Patient Questions Answered</span>
              <h2 className="type-h2">Frequently Asked Questions</h2>
              <div className="space-y-4 pt-2">
                {condition.faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group glass rounded-2xl p-5 border border-white/10 transition-all [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex items-center justify-between cursor-pointer font-semibold text-foreground text-sm sm:text-base">
                      <span className="flex items-center gap-2">
                        <HelpCircle className="size-5 text-accent shrink-0" />
                        {faq.question}
                      </span>
                      <span className="text-accent transition-transform duration-300 group-open:rotate-180">
                        ↓
                      </span>
                    </summary>
                    <p className="mt-4 pt-3 border-t border-border/50 text-xs sm:text-sm text-muted-foreground leading-relaxed pl-7">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>

          {/* ── RIGHT STICKY SIDEBAR ────────────────────────────────────────── */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <Reveal className="glass-strong rounded-3xl p-6 border border-accent/30 shadow-xl bg-background/90 space-y-5" blur={false} y={16}>
              <div className="flex items-center gap-3">
                <span className="icon-glass grid size-12 shrink-0 place-items-center rounded-2xl text-accent">
                  <Stethoscope className="size-6" />
                </span>
                <div>
                  <h3 className="font-bold text-foreground text-base">{site.doctor.name}</h3>
                  <p className="text-xs text-muted-foreground">{site.doctor.credentials}</p>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-muted-foreground border-t border-border/50">
                <div className="flex items-start gap-2">
                  <MapPin className="size-4 text-accent shrink-0 mt-0.5" />
                  <span>{site.hospital.name}, {site.hospital.city}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-accent shrink-0" />
                  <span>OPD Consultation &amp; 24/7 Emergency</span>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                <Link
                  href="/contact#appointment"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-accent text-accent-foreground px-4 py-3 text-sm font-semibold shadow-md hover:bg-accent/90 transition-all active:scale-95"
                >
                  <CalendarCheck className="size-4" />
                  <span>Book Consultation</span>
                </Link>

                <a
                  href={site.contact.phoneHref}
                  onClick={trackCall}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emergency text-emergency-foreground px-4 py-3 text-sm font-semibold shadow-md hover:bg-emergency-hover transition-all active:scale-95"
                >
                  <Phone className="size-4" />
                  <span className="tnum">Emergency: {site.contact.phoneDisplay}</span>
                </a>

                <a
                  href={whatsappUrl(`Hello Dr. Meda, I have a question regarding ${condition.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackWhatsApp}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 text-white px-4 py-3 text-sm font-semibold shadow-md hover:bg-emerald-700 transition-all active:scale-95"
                >
                  <MessageSquare className="size-4" />
                  <span>WhatsApp Doctor</span>
                </a>
              </div>
            </Reveal>
          </aside>
        </div>
      </Section>

      {/* ── RELATED CONDITIONS CAROUSEL / RECOMMENDATIONS ───────────────────── */}
      {related.length > 0 && (
        <Section className="bg-muted/30">
          <Reveal className="space-y-4 mb-8" blur={false} y={16}>
            <span className="type-label text-accent">Related Surgical Guides</span>
            <h2 className="type-h2">Explore Other Conditions Treated</h2>
          </Reveal>
          <RevealGroup as="div" className="grid sm:grid-cols-3 gap-6">
            {related.map((rel) => (
              <RevealItem key={rel.slug} as="div">
                <Link
                  href={`/conditions/${rel.slug}`}
                  className="group glass lift rounded-2xl p-5 flex flex-col justify-between h-full border border-white/10 hover:border-accent/40 transition-all duration-300"
                >
                  <div>
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-900/50 p-3 mb-4">
                      <ConditionIllustration slug={rel.slug} className="size-full object-contain" />
                    </div>
                    <h3 className="font-semibold text-foreground text-base mb-1 group-hover:text-accent transition-colors">
                      {rel.name}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">{rel.summary}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-accent">
                    <span>View Guide</span>
                    <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </Section>
      )}
    </>
  );
}
