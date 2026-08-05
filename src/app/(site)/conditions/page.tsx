import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Building2 } from "lucide-react";
import { ConditionsModule } from "@/components/site/conditions-module";
import { HospitalShowcase } from "@/components/site/hospital-showcase";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { articles } from "@/lib/articles";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/site/json-ld";

export const metadata: Metadata = buildMetadata({
  title: "Services, Facilities & Education — Surgical Care in Khammam",
  description: "Explore surgical services, state-of-the-art ICU & operation theatre facilities, and patient education guides by Dr. Rajashekhar Meda at Suraksha Hospital, Khammam.",
  path: "/conditions",
});

export default function ConditionsPage() {
  return (
    <>
      <JsonLd />
      {/* Primary Surgical Services & Conditions Grid */}
      <ConditionsModule />

      {/* Hospital Facilities Section (Merged into Services) */}
      <section id="facilities" className="section-py bg-muted/40 border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="text-center space-y-4 max-w-3xl mx-auto mb-10" blur={false} y={16}>
            <span className="type-label text-[#134377] dark:text-sky-300 inline-flex items-center gap-2 rounded-full bg-[#134377]/10 dark:bg-sky-500/15 border border-[#134377]/20 dark:border-sky-400/30 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
              <Building2 className="size-3.5" aria-hidden />
              <span>Suraksha Hospital Infrastructure</span>
            </span>
            <h2 className="type-h2">World-Class Surgical Facilities</h2>
            <p className="type-lead text-muted-foreground">
              Suraksha Hospital is equipped with advanced laparoscopic modular operation theatres, 24/7 ICU critical care, and high-precision laser surgical equipment in Khammam.
            </p>
          </Reveal>

          <HospitalShowcase />
        </div>
      </section>

      {/* Health Education Section (Merged into Services) */}
      <section id="education" className="section-py bg-background border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="text-center space-y-4 max-w-3xl mx-auto mb-12" blur={false} y={16}>
            <span className="type-label text-[#134377] dark:text-sky-300 inline-flex items-center gap-2 rounded-full bg-[#134377]/10 dark:bg-sky-500/15 border border-[#134377]/20 dark:border-sky-400/30 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
              <BookOpen className="size-3.5" aria-hidden />
              <span>Patient Health Education</span>
            </span>
            <h2 className="type-h2">Surgical Guidance &amp; Recovery Articles</h2>
            <p className="type-lead text-muted-foreground">
              Read comprehensive surgical education guides written by Dr. Rajashekhar Meda to help you understand procedure preparation, recovery timelines, and surgical safety.
            </p>
          </Reveal>

          <RevealGroup as="div" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <RevealItem key={article.slug} as="div">
                <Link
                  href={`/blog/${article.slug}`}
                  className="group glass lift rounded-2xl p-6 flex flex-col justify-between h-full border border-white/10 hover:border-accent/40 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <span className="inline-block rounded-md bg-accent/10 px-2.5 py-1 text-xs font-bold text-accent">
                      {article.category} · {article.readingMinutes} min read
                    </span>
                    <h3 className="type-h3 text-base sm:text-lg group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                      {article.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-accent">
                    <span>Read Article Guide</span>
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
