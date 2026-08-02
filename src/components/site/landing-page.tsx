import Image from "next/image";
import { Phone, CheckCircle2, ShieldAlert, GraduationCap, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppointmentForm } from "@/components/site/appointment-form";
import { site } from "@/lib/site";
import { BLUR_DATA_URL } from "@/lib/siteAssets";

export interface LandingConfig {
  eyebrow: string;
  headline: React.ReactNode;
  subhead: string;
  benefits: { title: string; body: string }[];
  image: { src: string; alt: string };
  /** Emergency layouts lead with the phone and hide the form above the fold. */
  urgent?: boolean;
}

/**
 * Shared Google Ads landing page shell.
 *
 * Deliberately has NO site navigation — a paid visitor has exactly one job
 * to do, and every extra link is a way to leak out of the funnel.
 * These pages are noindex so they never compete with the organic pages
 * for the same keywords.
 */
export function LandingPage({ config }: { config: LandingConfig }) {
  return (
    <main id="main" className="flex-1">
      {/* Minimal header — logo-less, single call action, no nav links */}
      <header className="sticky top-0 z-40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-3">
          <div className="glass-strong rounded-2xl px-4 h-14 flex items-center justify-between gap-4">
          <div className="leading-tight min-w-0">
            <p className="font-[family-name:var(--font-display)] font-semibold text-sm sm:text-base truncate">
              {site.doctor.name}
            </p>
            <p className="text-[0.7rem] sm:text-xs text-muted-foreground truncate">
              {site.doctor.credentials}
            </p>
          </div>
          <Button
            variant="emergency"
            size="cta"
            className="shrink-0"
            render={<a href={site.contact.phoneHref} />}
          >
            <Phone aria-hidden />
            <span className="tnum hidden sm:inline">{site.contact.phoneDisplay}</span>
            <span className="tnum sm:hidden">Call</span>
          </Button>
          </div>
        </div>
      </header>

      <section className="brand-wash">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-emergency/10 px-4 py-2 text-sm font-semibold text-emergency">
                <ShieldAlert className="size-4" aria-hidden />
                {config.eyebrow}
              </span>
              <h1 className="type-h1">{config.headline}</h1>
              <p className="type-lead text-muted-foreground">
                {config.subhead}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="emergency"
                  size="cta-lg"
                  render={<a href={site.contact.phoneHref} />}
                >
                  <Phone aria-hidden />
                  <span>Call Emergency</span>
                </Button>
                {!config.urgent && (
                  <Button variant="accent" size="cta-lg" render={<a href="#book" />}>
                    Book an appointment
                  </Button>
                )}
              </div>

              <ul className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-border">
                {[
                  { icon: GraduationCap, label: "M.S. General Surgery" },
                  { icon: ShieldAlert, label: "24/7 availability" },
                  { icon: MapPin, label: `${site.hospital.city}, ${site.hospital.state}` },
                ].map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2 text-sm font-medium">
                    <Icon className="size-4 text-accent shrink-0" aria-hidden />
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative glow-halo glass rounded-3xl p-3 elev-3">
              <div className="overflow-hidden rounded-2xl img-hover">
                <Image
                  src={config.image.src}
                  alt={config.image.alt}
                  width={1600}
                  height={1100}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ul className="grid sm:grid-cols-3 gap-5">
            {config.benefits.map((b) => (
              <li key={b.title} className="group glass lift rounded-2xl p-6 space-y-3">
                <span className="icon-glass grid size-11 place-items-center rounded-xl text-accent">
                  <CheckCircle2 className="size-5" aria-hidden />
                </span>
                <h2 className="type-h3">{b.title}</h2>
                <p className="text-sm text-muted-foreground">{b.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="book" className="pb-16 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10">
            <AppointmentForm />
            <div className="glass lift rounded-2xl p-7 space-y-5 h-fit">
              <h2 className="type-h3">{site.hospital.name}</h2>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin className="size-5 text-accent shrink-0 mt-0.5" aria-hidden />
                  <address className="not-italic text-muted-foreground">
                    {site.hospital.addressFull}
                  </address>
                </li>
                <li className="flex gap-3">
                  <Clock className="size-5 text-accent shrink-0 mt-0.5" aria-hidden />
                  <div className="text-muted-foreground">
                    {site.hours.weekday}
                    <br />
                    {site.hours.sunday}
                    <br />
                    <span className="font-medium text-emergency">
                      {site.hours.emergency}
                    </span>
                  </div>
                </li>
              </ul>
              <Button
                variant="emergency"
                size="cta"
                className="w-full"
                render={<a href={site.contact.phoneHref} />}
              >
                <Phone aria-hidden />
                <span className="tnum">{site.contact.phoneDisplay}</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-3">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong>Medical disclaimer:</strong> This page is general information,
            not medical advice. In an emergency, call{" "}
            <a href={site.contact.phoneHref} className="underline tnum">
              {site.contact.phoneDisplay}
            </a>{" "}
            or go to your nearest emergency department.
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {site.doctor.name} · {site.hospital.name},{" "}
            {site.hospital.city}
          </p>
        </div>
      </footer>
    </main>
  );
}
