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
  Activity,
  Ambulance,
  BedDouble,
} from "lucide-react";
import { Section, SectionHeading, Stat } from "@/components/site/ui-bits";
import { Button } from "@/components/ui/button";
import { HeroVisual } from "@/components/hero/hero-visual";
import { TiltCard } from "@/components/site/tilt-card";
import { HospitalShowcase } from "@/components/site/hospital-showcase";
import { HeroBackground } from "@/components/site/hero-background";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { PatientJourney } from "@/components/site/patient-journey";
import { ConditionsModule } from "@/components/site/conditions-module";
import { site, whatsappUrl } from "@/lib/site";
import { doctorImages, BLUR_DATA_URL } from "@/lib/siteAssets";

const pillarIcons = { activity: Activity, ambulance: Ambulance, hospital: BedDouble } as const;

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <HeroBackground />
        <HeroVisual className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-1/2 opacity-40 dark:opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal as="div" className="space-y-7" blur={false} y={16}>
              <span className="inline-flex items-center gap-2 rounded-full bg-emergency/10 px-4 py-2 text-sm font-semibold text-emergency">
                <ShieldAlert className="size-4" aria-hidden />
                24/7 Surgical & Trauma Emergency Care
              </span>

              <div className="space-y-4">
                <h1 className="type-display">
                  Khammam&apos;s trusted{" "}
                  <span className="text-accent">Laparoscopic &amp; Laser</span> Surgeon
                </h1>
                <p className="type-lead text-muted-foreground max-w-xl">
                  {site.doctor.name} — {site.doctor.credentials}. Advanced
                  minimally invasive keyhole surgery, hernia repair, gallbladder,
                  appendix, and 24/7 trauma emergency care at {site.hospital.name}.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={site.contact.phoneHref}
                  className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-emergency text-white px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:bg-emergency-hover hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
                >
                  <Phone className="size-4" aria-hidden />
                  <span className="tnum">Call {site.contact.phoneDisplay}</span>
                </a>
                <Link
                  href="/contact#appointment"
                  className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-accent text-accent-foreground px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:bg-accent/90 hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
                >
                  <CalendarCheck className="size-4" aria-hidden />
                  <span>Book Consultation</span>
                </Link>
              </div>

              <dl className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
                <div className="glass lift rounded-2xl p-3 sm:p-4 min-w-0">
                  <dt className="sr-only">Qualification</dt>
                  <dd>
                    <Stat value="M.S." label="Gen. Surgeon" />
                  </dd>
                </div>
                <div className="glass lift rounded-2xl p-3 sm:p-4 min-w-0">
                  <dt className="sr-only">Experience</dt>
                  <dd>
                    <Stat value="10+" label="Years Experience" />
                  </dd>
                </div>
                <div className="glass lift rounded-2xl p-3 sm:p-4 min-w-0">
                  <dt className="sr-only">Specialty</dt>
                  <dd>
                    <Stat value="Keyhole" label="Laparoscopic" />
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
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE PILLARS ─────────────────────────────────────────────────── */}
      <Section className="pt-20 sm:pt-24">
        <RevealGroup as="ul" className="grid sm:grid-cols-3 gap-5">
          {site.pillars.map((pillar) => {
            const Icon = pillarIcons[pillar.icon as keyof typeof pillarIcons] || Activity;
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

      {/* ── CONDITIONS / SERVICES MODULE ─────────────────────────────────── */}
      <ConditionsModule />

      {/* ── PATIENT JOURNEY / PROCESS TIMELINE ──────────────────────────── */}
      <PatientJourney />

      {/* ── WHY DR. RAJASHEKHAR MEDA ───────────────────────────────────────── */}
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
              eyebrow="Why patients choose Dr. Rajashekhar Meda"
              title="10+ Years of Surgical Precision & Patient Relief"
              lead="Specialized keyhole laparoscopic surgery offers minimal pain, tiny scars, fast hospital discharge, and early return to daily work."
            />
            <ul className="space-y-5">
              {[
                {
                  icon: GraduationCap,
                  title: "M.S. General Surgery & 10 Years Experience",
                  body: "Proven clinical leadership in laparoscopic, endoscopic, and laser procedures.",
                },
                {
                  icon: Stethoscope,
                  title: "Advanced Laparoscopic & Laser Techniques",
                  body: "State-of-the-art keyhole hernia, gallbladder, appendix, and varicose vein laser treatments.",
                },
                {
                  icon: ShieldAlert,
                  title: "24/7 Emergency Surgical Trauma Care",
                  body: "Round-the-clock surgeon availability supported by advanced ICU and critical care facilities.",
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
              View full profile
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
                  Acute abdominal pain or surgical emergency?
                </h2>
                <p className="mt-2 max-w-2xl opacity-95">
                  Do not delay. Surgical emergency and ICU trauma services are available 24/7 at{" "}
                  {site.hospital.name}. Call now or reach the emergency department immediately.
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

      {/* ── HOSPITAL SHOWCASE ─────────────────────────────────────────────── */}
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
