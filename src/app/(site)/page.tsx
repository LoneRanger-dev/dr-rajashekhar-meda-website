import Link from "next/link";
import {
  Phone,
  CalendarCheck,
  ShieldAlert,
  Clock,
  MapPin,
  Activity,
  Ambulance,
  BedDouble,
} from "lucide-react";
import { Section, SectionHeading, Stat } from "@/components/site/ui-bits";
import { Button } from "@/components/ui/button";
import { HeroVisual } from "@/components/hero/hero-visual";
import { TiltCard } from "@/components/site/tilt-card";
import { HeroBackground } from "@/components/site/hero-background";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { site, whatsappUrl } from "@/lib/site";
import { doctorImages } from "@/lib/siteAssets";

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

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <a
                  href={site.contact.phoneHref}
                  className="inline-flex items-center justify-center gap-2.5 rounded-none bg-emergency text-white px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:bg-emergency-hover hover:-translate-y-0.5 transition-all duration-300 active:scale-95 w-full sm:w-auto"
                >
                  <Phone className="size-4" aria-hidden />
                  <span className="tnum">Call {site.contact.phoneDisplay}</span>
                </a>
                <Link
                  href="/contact#appointment"
                  className="inline-flex items-center justify-center gap-2.5 rounded-none bg-accent text-accent-foreground px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:bg-accent/90 hover:-translate-y-0.5 transition-all duration-300 active:scale-95 w-full sm:w-auto"
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
