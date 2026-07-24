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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/ui-bits";
import { site, conditions } from "@/lib/site";

export function generateStaticParams() {
  return conditions.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const condition = conditions.find((c) => c.slug === slug);
  if (!condition) return {};

  return {
    title: `${condition.name} in Khammam — ${site.doctor.name}`,
    description: condition.summary,
    alternates: { canonical: `/conditions/${condition.slug}` },
  };
}

export default async function ConditionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const condition = conditions.find((c) => c.slug === slug);
  if (!condition) notFound();

  const others = conditions.filter((c) => c.slug !== condition.slug);

  return (
    <>
      <section className="brand-wash">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/conditions" className="hover:text-foreground">
                  Conditions
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span aria-current="page" className="text-foreground font-medium">
                  {condition.short}
                </span>
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-5">
            <h1 className="text-4xl sm:text-5xl">{condition.name}</h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              {condition.summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                variant="emergency"
                size="cta"
                render={<a href={site.contact.phoneHref} />}
              >
                <Phone aria-hidden />
                <span className="tnum">Call {site.contact.phoneDisplay}</span>
              </Button>
              <Button
                variant="accent"
                size="cta"
                render={<Link href="/contact#appointment" />}
              >
                <CalendarCheck aria-hidden />
                Book an appointment
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="glass rounded-2xl p-7 space-y-4">
            <span className="grid size-11 place-items-center rounded-xl bg-accent/10 text-accent">
              <Stethoscope className="size-5" aria-hidden />
            </span>
            <h2 className="text-xl">Conditions treated</h2>
            <ul className="space-y-2.5">
              {condition.treats.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm">
                  <CheckCircle2
                    className="size-4 text-accent shrink-0 mt-0.5"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-2xl p-7 space-y-4 border-emergency/30">
            <span className="grid size-11 place-items-center rounded-xl bg-emergency/10 text-emergency">
              <AlertTriangle className="size-5" aria-hidden />
            </span>
            <h2 className="text-xl">When to seek help</h2>
            <ul className="space-y-2.5">
              {condition.whenToSeek.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm">
                  <span
                    className="size-1.5 rounded-full bg-emergency shrink-0 mt-2"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground pt-2 border-t border-border">
              This list is for general guidance only and is not a diagnosis. If
              symptoms are sudden or severe, treat it as an emergency and call.
            </p>
          </div>

          <div className="glass rounded-2xl p-7 space-y-4">
            <span className="grid size-11 place-items-center rounded-xl bg-primary text-primary-foreground">
              <CheckCircle2 className="size-5" aria-hidden />
            </span>
            <h2 className="text-xl">Dr. Reddy&apos;s approach</h2>
            <ul className="space-y-2.5">
              {condition.approach.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm">
                  <CheckCircle2
                    className="size-4 text-accent shrink-0 mt-0.5"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <section className="bg-emergency text-emergency-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <p className="text-lg font-medium max-w-2xl">
              Not sure whether your symptoms need a specialist? Call the clinic —
              a neurosurgeon is available 24/7.
            </p>
            <Button
              size="cta"
              className="bg-white text-emergency hover:bg-white/90 shrink-0"
              render={<a href={site.contact.phoneHref} />}
            >
              <Phone aria-hidden />
              <span className="tnum">{site.contact.phoneDisplay}</span>
            </Button>
          </div>
        </div>
      </section>

      <Section className="bg-muted/60">
        <SectionHeading eyebrow="Related" title="Other treatments" />
        <ul className="mt-10 grid sm:grid-cols-3 gap-5">
          {others.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/conditions/${c.slug}`}
                className="group glass rounded-2xl p-6 h-full flex flex-col gap-2 transition-transform duration-[var(--dur-base)] hover:-translate-y-1"
              >
                <h3 className="text-lg">{c.short}</h3>
                <p className="text-sm text-muted-foreground flex-1">{c.summary}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Read more
                  <ArrowRight
                    className="size-4 transition-transform duration-[var(--dur-base)] group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
