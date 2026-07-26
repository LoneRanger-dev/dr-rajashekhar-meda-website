import type { Metadata } from "next";
import Link from "next/link";
import { Quote, Star, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/ui-bits";
import { RevealGroup, RevealItem } from "@/components/site/reveal";
import { Testimonials } from "@/components/site/testimonials";
import { testimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Patient Reviews — Dr. GRK Reddy, Khammam",
  description:
    "Patient experiences of brain and spine treatment with Dr. GRK Reddy at Suraksha Hospital, Khammam.",
};

export default function ReviewsPage() {
  /**
   * Real, consented testimonials always win. The sample showcase renders only
   * while `testimonials` in src/lib/site.ts is empty — add real ones there and
   * all demonstration content (including the illustrative stats) disappears
   * automatically.
   */
  const hasReal = testimonials.length > 0;

  return (
    <>
      <section className="brand-wash">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionHeading
            as="h1"
            eyebrow="Patient reviews"
            title="What patients say"
            lead="Recovery from brain or spine surgery is a significant experience. These are the words of patients who have been through it."
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

      {!hasReal && (
        <Section className="bg-muted/60">
          <div className="max-w-3xl space-y-6">
            <div className="glass lift rounded-2xl p-7 space-y-4">
              <span className="icon-glass grid size-11 place-items-center rounded-xl text-accent">
                <Star className="size-5" aria-hidden />
              </span>
              <h2 className="type-h3">How to publish real reviews here</h2>
              <ol className="list-decimal ml-5 space-y-2 text-sm text-muted-foreground">
                <li>Collect 5–10 genuine patient testimonials.</li>
                <li>
                  Obtain written consent from each patient to publish their
                  words, and confirm whether they agree to their name being
                  shown or prefer initials only.
                </li>
                <li>
                  Send them across. Once added, the samples above are replaced
                  automatically.
                </li>
              </ol>
              <p className="text-sm text-muted-foreground">
                Reviews on the Google Business Profile do double duty — they
                build trust for patients comparing surgeons, and they are one of
                the strongest ranking signals in local search.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Button variant="accent" size="cta" render={<Link href="/contact" />}>
                  Contact the clinic
                </Button>
              </div>
            </div>

            <div className="flex gap-3 text-sm text-muted-foreground">
              <ShieldCheck className="size-5 text-success shrink-0 mt-0.5" aria-hidden />
              <p>
                Patient privacy is taken seriously. No clinical detail, image or
                identifying information is published without explicit written
                permission.
              </p>
            </div>
          </div>
        </Section>
      )}
    </>
  );
}
