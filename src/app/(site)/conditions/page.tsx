import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Activity, Scan, Scissors } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/ui-bits";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { conditions } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/site/json-ld";

export const metadata: Metadata = buildMetadata({
  title: "Surgeries & Treatments — Laparoscopic & General Surgery in Khammam",
  description: "Advanced laparoscopic and general surgery procedures treated by Dr. Rajashekhar Meda in Khammam: Hernia repair, Appendectomy, Cholecystectomy, Varicose veins laser treatment, and tumor removal.",
  path: "/conditions",
});

const icons = { spine: Scissors, brain: Activity, activity: Activity, scan: Scan } as const;

export default function ConditionsPage() {
  return (
    <>
      <JsonLd />
      <section className="brand-wash">
        <Reveal className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20" blur={false} y={16}>
          <SectionHeading
            as="h1"
            eyebrow="Surgeries & Clinical Services"
            title="Laparoscopic and general surgical procedures"
            lead="Explore comprehensive keyhole and laser surgical treatments offered by Dr. Rajashekhar Meda at Suraksha Hospital, Khammam."
          />
        </Reveal>
      </section>

      <Section>
        <RevealGroup as="ul" className="grid sm:grid-cols-2 gap-6">
          {conditions.map((condition) => {
            const Icon = icons[condition.icon] || Activity;
            return (
              <RevealItem key={condition.slug} as="li">
                <Link
                  href={`/conditions/${condition.slug}`}
                  className="group glass lift rounded-2xl p-7 h-full flex flex-col gap-4"
                >
                  <span className="icon-glass grid size-12 place-items-center rounded-xl text-accent">
                    <Icon
                      className="size-6 transition-transform duration-[var(--dur-base)] group-hover:scale-110"
                      aria-hidden
                    />
                  </span>
                  <h2 className="type-h2">{condition.name}</h2>
                  <p className="text-muted-foreground flex-1">{condition.summary}</p>
                  <ul className="flex flex-wrap gap-2">
                    {condition.treats.slice(0, 3).map((t) => (
                      <li
                        key={t}
                        className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1.5 font-semibold text-accent">
                    Read more
                    <ArrowRight
                      className="size-4 transition-transform duration-[var(--dur-base)] group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Section>
    </>
  );
}
