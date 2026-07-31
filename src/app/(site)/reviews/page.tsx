import type { Metadata } from "next";
import { ShieldCheck, Quote } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/ui-bits";
import { testimonials } from "@/lib/site";
import { RevealGroup, RevealItem } from "@/components/site/reveal";
import { Testimonials } from "@/components/site/testimonials";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/site/json-ld";

export const metadata: Metadata = buildMetadata({
  title: "Patient Reviews — Dr. Rajashekhar Meda, Khammam",
  description:
    "Patient experiences and recovery stories for laparoscopic and general surgery with Dr. Rajashekhar Meda at Suraksha Hospital, Khammam.",
  path: "/reviews",
});

export default function ReviewsPage() {
  const hasReal = testimonials.length > 0;

  return (
    <>
      <JsonLd />
      <section className="brand-wash">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionHeading
            as="h1"
            eyebrow="Patient Reviews"
            title="What patients say"
            lead="Read genuine patient recovery experiences for keyhole laparoscopic and general surgical care with Dr. Rajashekhar Meda."
          />
        </div>
      </section>

      <Section>
        {hasReal ? (
          <RevealGroup as="ul" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <RevealItem key={t.name} as="li" className="glass lift rounded-2xl p-7 space-y-4">
                <Quote className="size-7 text-accent" aria-hidden />
                <blockquote className="text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer className="pt-3 border-t border-border">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.condition}</p>
                </footer>
              </RevealItem>
            ))}
          </RevealGroup>
        ) : (
          <Testimonials />
        )}
      </Section>

      <Section className="bg-muted/60">
        <div className="flex gap-3 text-sm text-muted-foreground max-w-2xl mx-auto">
          <ShieldCheck className="size-5 text-success shrink-0 mt-0.5" aria-hidden />
          <p>
            Patient privacy is taken seriously. No clinical detail, image or
            identifying information is published without explicit written permission.
          </p>
        </div>
      </Section>
    </>
  );
}
