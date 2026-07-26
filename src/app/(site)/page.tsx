import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  CalendarCheck,
  ShieldAlert,
  Stethoscope,
  GraduationCap,
  Clock,
  MapPin,
  ArrowRight,
  Brain,
  Activity,
  Scan,
  Bone,
  Ambulance,
  BedDouble,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, Stat } from "@/components/site/ui-bits";
import { NeuroVisual } from "@/components/hero/neuro-visual";
import { TiltCard } from "@/components/site/tilt-card";
import { HospitalShowcase } from "@/components/site/hospital-showcase";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { site, conditions, whatsappUrl } from "@/lib/site";
import { doctorImages, BLUR_DATA_URL } from "@/lib/siteAssets";

const conditionIcons = {
  spine: Bone,
  brain: Brain,
  activity: Activity,
  scan: Scan,
} as const;

const pillarIcons = { brain: Brain, ambulance: Ambulance, hospital: BedDouble } as const;

export default function HomePage() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────────────────
          The 3D brain/spine visual replaces the portrait side in the next
          step; this static composition is the reduced-motion fallback. */}
      <section className="brand-wash relative overflow-hidden">
        {/* Decorative 3D layer. Loads only on capable devices, after idle,
            and never carries meaning — the CSS gradient is the fallback. */}
        <NeuroVisual className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-1/2 opacity-45 dark:opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal as="div" className="space-y-7" blur={false} y={16}>
              <span className="inline-flex items-center gap-2 rounded-full bg-emergency/10 px-4 py-2 text-sm font-semibold text-emergency">
                <ShieldAlert className="size-4" aria-hidden />
                24/7 Neurosurgeon Availability
              </span>

              <div className="space-y-4">
                <h1 className="type-display">
                  Khammam&apos;s trusted{" "}
                  <span className="text-accent">Brain &amp; Spine</span> specialist
                </h1>
                <p className="type-lead text-muted-foreground max-w-xl">
                  {site.doctor.name} — {site.doctor.credentials}. Advanced
                  minimally invasive spine surgery, endoscopic neurosurgery and
                  round-the-clock trauma care at {site.hospital.name}.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="emergency"
                  size="cta-lg"
                  render={<a href={site.contact.phoneHref} />}
                >
                  <Phone aria-hidden />
                  <span className="tnum">Call {site.contact.phoneDisplay}</span>
                </Button>
                <Button
                  variant="accent"
                  size="cta-lg"
                  render={<Link href="/contact#appointment" />}
                >
                  <CalendarCheck aria-hidden />
                  Book an appointment
                </Button>
              </div>

              <dl className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
                <div className="glass lift rounded-2xl p-3 sm:p-4 min-w-0">
                  <dt className="sr-only">Qualification</dt>
                  <dd>
                    <Stat value="MCh" label="Neurosurgery" />
                  </dd>
                </div>
                <div className="glass lift rounded-2xl p-3 sm:p-4 min-w-0">
                  <dt className="sr-only">Emergency availability</dt>
                  <dd>
                    <Stat value="24/7" label="Trauma response" />
                  </dd>
                </div>
                <div className="glass lift rounded-2xl p-3 sm:p-4 min-w-0">
                  <dt className="sr-only">Academic role</dt>
                  <dd>
                    <Stat value="Asst. Prof." label="Mamata Medical College" />
                  </dd>
                </div>
              </dl>
            </Reveal>

            <div className="relative glow-halo">
              <TiltCard
                src={doctorImages.hero.src}
                alt={`${site.doctor.name}, ${site.doctor.title} at ${site.hospital.name}, Khammam`}
                width={doctorImages.hero.width}
                height={doctorImages.hero.height}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="elev-3"
              />
              <div className="glass rounded-2xl p-4 elev-2 absolute -bottom-5 left-4 right-4 sm:left-8 sm:right-auto sm:max-w-xs">
                <p className="text-sm font-semibold">{site.doctor.tagline}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {site.hospital.name} · {site.hospital.descriptor}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE PILLARS (from the clinic's own banner) ─────────────────── */}
      <Section className="pt-20 sm:pt-24">
        <RevealGroup as="ul" className="grid sm:grid-cols-3 gap-5">
          {site.pillars.map((pillar) => {
            const Icon = pillarIcons[pillar.icon as keyof typeof pillarIcons];
            return (
              <RevealItem
                key={pillar.title}
                as="li"
                className="group glass lift rounded-2xl p-6 flex gap-4"
              >
                <span className="icon-glass grid size-12 shrink-0 place-items-center rounded-xl text-primary dark:text-accent">
                  <Icon className="size-6" aria-hidden />
                </span>
                <p className="font-semibold self-center">{pillar.title}</p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Section>

      {/* ── CONDITIONS ───────────────────────────────────────────────────── */}
      <Section className="bg-muted/60">
        <SectionHeading
          eyebrow="Conditions & Treatments"
          title="Specialised brain and spine care"
          lead="From emergency trauma response to planned minimally invasive spine surgery — each condition explained in plain language."
        />
        <RevealGroup
          as="ul"
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {conditions.map((condition) => {
            const Icon = conditionIcons[condition.icon];
            return (
              <RevealItem key={condition.slug} as="li">
                <Link
                  href={`/conditions/${condition.slug}`}
                  className="group glass lift rounded-2xl p-6 h-full flex flex-col gap-3"
                >
                  <span className="icon-glass grid size-12 place-items-center rounded-xl text-accent">
                    <Icon
                      className="size-6 transition-transform duration-[var(--dur-base)] group-hover:scale-110"
                      aria-hidden
                    />
                  </span>
                  <h3 className="type-h3">{condition.short}</h3>
                  <p className="text-sm text-muted-foreground flex-1">
                    {condition.summary}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Learn more
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

      {/* ── WHY DR REDDY ─────────────────────────────────────────────────── */}
      <Section>
        <Reveal className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative glow-halo glass rounded-3xl p-3">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-2xl img-hover">
              <Image
                src={doctorImages.consultation.src}
                alt={`${site.doctor.name} in consultation at ${site.hospital.name}, Khammam`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                className="object-cover object-top"
              />
            </div>
          </div>
          <div className="space-y-7">
            <SectionHeading
              eyebrow="Why patients choose Dr. GRK Reddy"
              title="Advanced technique, backed by academic authority"
              lead="Two things set this practice apart in Khammam: a neurosurgeon genuinely available around the clock, and routine use of minimally invasive techniques rather than defaulting to open surgery."
            />
            <ul className="space-y-5">
              {[
                {
                  icon: GraduationCap,
                  title: "MCh Neurosurgery + academic post",
                  body: `${site.doctor.academicRole} — actively teaching the next generation of neurosurgeons.`,
                },
                {
                  icon: Stethoscope,
                  title: "Minimally invasive spine surgery (MISS)",
                  body: "Smaller incisions, less tissue disruption and typically a shorter hospital stay, wherever the condition allows it.",
                },
                {
                  icon: ShieldAlert,
                  title: "24/7 trauma response",
                  body: "A neurosurgeon is available at any hour, supported by an advanced ICU on site.",
                },
              ].map(({ icon: Icon, title, body }) => (
                <li key={title} className="group flex gap-4">
                  <span className="icon-glass grid size-11 shrink-0 place-items-center rounded-xl text-accent">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Button variant="glass" size="cta" render={<Link href="/about" />}>
              Read Dr. GRK Reddy&apos;s full profile
              <ArrowRight aria-hidden />
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* ── EMERGENCY BANNER ─────────────────────────────────────────────── */}
      <section className="bg-emergency text-emergency-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex gap-4 items-center">
              <Image
                src={doctorImages.scrubs.src}
                alt={`${site.doctor.name} in surgical scrubs at ${site.hospital.name}`}
                width={doctorImages.scrubs.width}
                height={doctorImages.scrubs.height}
                sizes="80px"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                className="hidden sm:block size-20 rounded-2xl object-cover ring-2 ring-white/40 shrink-0"
              />
              <ShieldAlert className="size-10 shrink-0" aria-hidden />
              <div>
                <h2 className="type-h2 text-emergency-foreground">
                  Head injury or sudden neurological symptoms?
                </h2>
                <p className="mt-2 max-w-2xl opacity-95">
                  Do not wait. A neurosurgeon is available 24/7 at{" "}
                  {site.hospital.name}. Call now, or go straight to the nearest
                  emergency department.
                </p>
              </div>
            </div>
            <Button
              size="cta-lg"
              className="bg-white text-emergency hover:bg-white/90 shrink-0"
              render={<a href={site.contact.phoneHref} />}
            >
              <Phone aria-hidden />
              <span className="tnum">{site.contact.phoneDisplay}</span>
            </Button>
          </div>
        </div>
      </section>

      {/* ── HOSPITAL SHOWCASE (cinematic exterior) ───────────────────────── */}
      <HospitalShowcase />

      {/* ── VISIT / LOCATION ─────────────────────────────────────────────── */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Visit the clinic"
              title={site.hospital.name}
              lead={site.hospital.descriptor}
            />
            <ul className="space-y-5">
              <li className="flex gap-4">
                <MapPin className="size-5 text-accent shrink-0 mt-1" aria-hidden />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {site.hospital.addressFull}
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="size-5 text-accent shrink-0 mt-1" aria-hidden />
                <div>
                  <h3 className="font-semibold">Consulting hours</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {site.hours.weekday}
                    <br />
                    {site.hours.sunday}
                    <br />
                    <span className="font-medium text-emergency">
                      {site.hours.emergency}
                    </span>
                  </p>
                </div>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="emergency"
                size="cta"
                render={<a href={site.contact.phoneHref} />}
              >
                <Phone aria-hidden />
                <span className="tnum">Call the clinic</span>
              </Button>
              <Button
                variant="outline"
                size="cta"
                render={
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                Message on WhatsApp
              </Button>
              <Button
                variant="glass"
                size="cta"
                render={
                  <a
                    href={site.hospital.maps.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <MapPin aria-hidden />
                Get directions
              </Button>
            </div>
          </div>

          {/* Embedded Google Map — from the clinic's Business Profile pin,
              in a rounded glass frame with a soft medical-blue glow. The
              hospital itself is presented in the cinematic showcase above. */}
          <div className="relative glow-halo">
            <div className="glass elev-2 rounded-3xl p-3 overflow-hidden">
              <iframe
                title={`Map to ${site.hospital.name}, ${site.hospital.city}`}
                src={site.hospital.maps.embedUrl}
                className="w-full h-[340px] sm:h-[440px] lg:h-[520px] rounded-2xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
