import Link from "next/link";
import Image from "next/image";
import { Phone, CalendarCheck, Clock, Star, MapPin, Award, CheckCircle2 } from "lucide-react";
import { Section, SectionHeading, Stat } from "@/components/site/ui-bits";
import { Button } from "@/components/ui/button";
import { HeroBackground } from "@/components/site/hero-background";
import { Reveal } from "@/components/site/reveal";
import { site, whatsappUrl } from "@/lib/site";
import { doctorImages, BLUR_DATA_URL } from "@/lib/siteAssets";

export default function HomePage() {
  return (
    <>
      {/* ── HERO SECTION ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden brand-wash py-12 sm:py-20 lg:py-24 border-b border-border/50">
        <HeroBackground />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Headline, Doctor Designation, Badges, CTAs */}
            <Reveal as="div" className="space-y-6" blur={false} y={16}>
              {/* Tag Wrapper Badges */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 px-3.5 py-1 text-xs font-semibold text-accent">
                  <Award className="size-3.5" aria-hidden />
                  10+ Years Excellence
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emergency/10 border border-emergency/30 px-3.5 py-1 text-xs font-semibold text-emergency">
                  <Clock className="size-3.5" aria-hidden />
                  24/7 Emergency Care
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 px-3.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <Star className="size-3.5 fill-current" aria-hidden />
                  4.9/5 Patient Rating
                </span>
              </div>

              {/* Title & Complete Designation */}
              <div className="space-y-4">
                <h1 className="type-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-[1.1]">
                  Excellence in <span className="text-accent">Surgical Care</span> With Compassionate Precision
                </h1>
                
                {/* Doctor Name & Complete Designation */}
                <div className="space-y-1 py-2 border-l-2 border-accent/60 pl-4 bg-sky-500/5 rounded-r-xl max-w-xl">
                  <p className="font-extrabold text-lg sm:text-xl text-foreground tracking-tight">
                    {site.doctor.name}
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-accent">
                    MBBS, MS (General Surgery)
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground">
                    Consultant Laparoscopic, Endoscopic & Laser Surgeon
                  </p>
                </div>

                <p className="type-lead text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Advanced minimally invasive keyhole surgery, hernia repair, gallbladder stones, laser proctology, and 24/7 trauma emergency care at {site.hospital.name}, Khammam.
                </p>
              </div>

              {/* Primary Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <Link
                  href="/contact#appointment"
                  className="inline-flex items-center justify-center gap-2.5 rounded-none bg-accent text-accent-foreground px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg hover:bg-accent/90 hover:-translate-y-0.5 transition-all duration-300 active:scale-95 w-full sm:w-auto"
                >
                  <CalendarCheck className="size-4" aria-hidden />
                  <span>Book Appointment</span>
                </Link>
              </div>

              {/* Counter Stats */}
              <dl className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
                <div className="glass rounded-xl p-3 text-center border border-border/60">
                  <dt className="sr-only">Experience</dt>
                  <dd>
                    <Stat value="10+" label="Years Exp." />
                  </dd>
                </div>
                <div className="glass rounded-xl p-3 text-center border border-border/60">
                  <dt className="sr-only">Surgeries</dt>
                  <dd>
                    <Stat value="5000+" label="Surgeries" />
                  </dd>
                </div>
                <div className="glass rounded-xl p-3 text-center border border-border/60">
                  <dt className="sr-only">Emergency Care</dt>
                  <dd>
                    <Stat value="24/7" label="ICU Care" />
                  </dd>
                </div>
              </dl>
            </Reveal>

            {/* Right Column: Hero Doctor Photo Card */}
            <div className="relative mx-auto max-w-md lg:max-w-none w-full">
              <div className="relative glow-halo glass rounded-2xl p-3 border border-white/20 dark:border-white/10 shadow-2xl">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={doctorImages.hero.src}
                    alt={`${site.doctor.name}, ${site.doctor.title} at ${site.hospital.name}, Khammam`}
                    width={doctorImages.hero.width}
                    height={doctorImages.hero.height}
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── VISIT & LOCATION SECTION ─────────────────────────────────────── */}
      <Section className="py-12 sm:py-16 bg-background">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Suraksha Hospital Practice"
              title="State-of-the-Art Surgical Infrastructure"
              lead="Equipped with advanced modular keyhole operating theatres, high-precision German Diode Laser systems, and 24/7 ICU critical care support."
            />
            <ul className="space-y-3.5 pt-2">
              <li className="flex items-start gap-3 text-xs sm:text-sm">
                <CheckCircle2 className="size-4 text-accent shrink-0 mt-0.5" />
                <span className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Laparoscopic Keyhole Surgery:</strong> 3D Mesh Hernia Repair, Gallstones, and Appendix removal with 24-hour discharge.
                </span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm">
                <CheckCircle2 className="size-4 text-accent shrink-0 mt-0.5" />
                <span className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">German Laser Proctology &amp; Vascular:</strong> Minimally invasive laser treatment for Piles, Fissure, Fistula, and Varicose Veins.
                </span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm">
                <CheckCircle2 className="size-4 text-accent shrink-0 mt-0.5" />
                <span className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">24/7 Emergency Surgical Care:</strong> Round-the-clock emergency team for abdominal trauma, acute appendicitis, and surgical crises.
                </span>
              </li>
            </ul>

            <div className="pt-2 flex flex-wrap gap-3">
              <Button
                variant="accent"
                size="cta"
                className="rounded-none shadow-md"
                render={<Link href="/conditions" />}
              >
                <span>Explore All Surgeries</span>
              </Button>
              <Button
                variant="outline"
                size="cta"
                className="rounded-none shadow-md"
                render={
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <span>Message on WhatsApp</span>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="glass rounded-2xl p-6 sm:p-8 space-y-5 border border-border/60">
              <h3 className="type-h3 text-xl font-bold text-foreground">Consultation Timings &amp; Address</h3>
              <address className="not-italic space-y-3.5 text-xs sm:text-sm text-muted-foreground">
                <div className="flex gap-3">
                  <MapPin className="size-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground block">{site.hospital.name}</strong>
                    <span>{site.hospital.addressFull}</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="size-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground block">OPD Hours</strong>
                    <span>{site.hours.weekday}</span>
                    <br />
                    <span>{site.hours.sunday}</span>
                  </div>
                </div>
              </address>
              <div className="pt-2">
                <Button
                  variant="accent"
                  size="cta"
                  className="rounded-none w-full shadow-md"
                  render={<a href={site.contact.phoneHref} />}
                >
                  <Phone className="size-4" />
                  <span>Call Hospital</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
