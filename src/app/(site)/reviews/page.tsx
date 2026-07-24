import type { Metadata } from "next";
import Link from "next/link";
import { Quote, Star, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, ConfirmWithClient } from "@/components/site/ui-bits";
import { testimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Patient Reviews — Dr. Gade Ramakrishna Reddy, Khammam",
  description:
    "Patient experiences of brain and spine treatment with Dr. Gade Ramakrishna Reddy at Suraksha Hospital, Khammam.",
};

export default function ReviewsPage() {
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
        {testimonials.length > 0 ? (
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <li key={t.name} className="glass rounded-2xl p-7 space-y-4">
                <Quote className="size-7 text-accent" aria-hidden />
                <blockquote className="text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer className="pt-3 border-t border-border">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.condition}</p>
                </footer>
              </li>
            ))}
          </ul>
        ) : (
          <div className="space-y-8 max-w-3xl">
            <ConfirmWithClient>
              <p className="mb-3">
                No testimonials are published yet. BUILD.md requires written
                patient consent before any review goes live, so this page has
                deliberately been left empty rather than filled with invented
                quotes.
              </p>
              <p className="font-medium text-foreground mb-2">To activate this page:</p>
              <ol className="list-decimal ml-5 space-y-1.5">
                <li>Collect 5–10 genuine patient testimonials.</li>
                <li>
                  Obtain written consent from each patient to publish their words
                  — and confirm whether they agree to their name being shown or
                  prefer initials only.
                </li>
                <li>
                  Send them across; they will be added to the testimonials list
                  and will appear here automatically.
                </li>
              </ol>
            </ConfirmWithClient>

            <div className="glass rounded-2xl p-7 space-y-4">
              <span className="grid size-11 place-items-center rounded-xl bg-accent/10 text-accent">
                <Star className="size-5" aria-hidden />
              </span>
              <h2 className="text-xl">Google reviews strengthen this most</h2>
              <p className="text-sm text-muted-foreground">
                Reviews on the Google Business Profile do double duty — they build
                trust for patients comparing surgeons, and they are one of the
                strongest ranking signals in local search. Claiming the profile
                and inviting satisfied patients to review is the single highest-value
                marketing action available right now.
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
        )}
      </Section>
    </>
  );
}
