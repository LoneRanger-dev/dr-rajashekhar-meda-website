import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Brain, Activity, Scan, Bone } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/ui-bits";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { conditions } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Conditions & Treatments — Brain, Spine & Epilepsy Care in Khammam",
  description: "Brain and spine conditions treated by Dr. GRK Reddy in Khammam: herniated disc, spinal stenosis, spinal deformity, head injury, brain tumours, epilepsy and minimally invasive spine surgery.",
  path: "/conditions",
});

const icons = { spine: Bone, brain: Brain, activity: Activity, scan: Scan } as const;

export default function ConditionsPage() {
  return (
    <>
      <section className="brand-wash">
        <Reveal className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20" blur={false} y={16}>
          <SectionHeading
            as="h1"
            eyebrow="Conditions & Treatments"
            title="Brain and spine care, explained clearly"
            lead="Understanding your condition makes the conversation with your surgeon easier. These pages explain what each condition is, when to seek help, and how it is treated — in plain language, without jargon."
          />
        </Reveal>
      </section>

      <Section>
        <RevealGroup as="ul" className="grid sm:grid-cols-2 gap-6">
          {conditions.map((condition) => {
            const Icon = icons[condition.icon];
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
