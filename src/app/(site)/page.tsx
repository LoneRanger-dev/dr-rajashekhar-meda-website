import Image from "next/image";
import { Phone, CalendarCheck, Clock, Star, MapPin, Award, CheckCircle2, Stethoscope, ShieldCheck } from "lucide-react";
import { SectionHeading, Stat } from "@/components/site/ui-bits";
import { Button } from "@/components/ui/button";
import { HeroBackground } from "@/components/site/hero-background";
import { Reveal } from "@/components/site/reveal";
import { site, whatsappUrl } from "@/lib/site";
import { doctorImages, BLUR_DATA_URL } from "@/lib/siteAssets";
import { ConditionsModule } from "@/components/site/conditions-module";
import { HospitalShowcase } from "@/components/site/hospital-showcase";
import { Testimonials } from "@/components/site/testimonials";
import { AppointmentForm } from "@/components/site/appointment-form";

const doctorBulletDetails = [
  {
    title: "Full Name & Qualifications",
    detail: "Dr. Rajashekhar Meda — MBBS, M.S. (General Surgery)",
  },
  {
    title: "Consultant Designation",
    detail: "Consultant Laparoscopic, Endoscopic & Laser Surgeon at Suraksha Hospital, Khammam.",
  },
  {
    title: "Surgical Experience",
    detail: "10+ Years of Surgical Excellence in advanced keyhole & minimally invasive laser procedures.",
  },
  {
    title: "Laparoscopic Keyhole Specialties",
    detail: "Advanced 3D Mesh Laparoscopic Hernia Repair (Inguinal, Umbilical, Incisional), Laparoscopic Cholecystectomy (Gallbladder Stones), and Emergency Laparoscopic Appendectomy.",
  },
  {
    title: "German Diode Laser Surgery",
    detail: "Incisionless Laser Hemorrhoidoplasty (LHP for Piles), FiLaC (Laser Fistula Closure), Laser Fissurectomy, and EVLA Laser for Varicose Veins with 100% sphincter preservation.",
  },
  {
    title: "General & Trauma Surgery",
    detail: "Excision of lipomas, cysts, abdominal masses, soft tissue tumors, and 24/7 round-the-clock abdominal trauma emergency response.",
  },
  {
    title: "Hospital Location",
    detail: "Suraksha Hospital, Old Priyadarshini College Building, Nehru Nagar, near Karnataka Bank, Wyra Road, Khammam, Telangana 507002.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO SECTION ─────────────────────────────────────────────────── */}
      <section id="hero" className="relative overflow-hidden brand-wash py-12 sm:py-20 lg:py-24 border-b border-border/50">
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

                <p className="type-lead text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Advanced minimally invasive keyhole surgery, hernia repair, gallbladder stones, laser proctology, and 24/7 trauma emergency care at {site.hospital.name}, Khammam.
                </p>
              </div>

              {/* Primary Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2.5 rounded-none bg-accent text-accent-foreground px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg hover:bg-accent/90 hover:-translate-y-0.5 transition-all duration-300 active:scale-95 w-full sm:w-auto"
                >
                  <CalendarCheck className="size-4" aria-hidden />
                  <span>Book Appointment</span>
                </a>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-none bg-[#25D366] text-white px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:bg-[#20bd5a] hover:-translate-y-0.5 transition-all duration-300 active:scale-95 w-full sm:w-auto"
                >
                  <span>WhatsApp Doctor</span>
                </a>
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

            {/* Right Column: Hero Doctor Photo with Floating Glassmorphic Badges (HumbrixHub Style) */}
            <div className="relative mx-auto max-w-[320px] sm:max-w-[420px] lg:max-w-[480px] w-full flex items-center justify-center py-6 sm:py-8">
              {/* Glowing Ambient Background & Blur Ring */}
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-sky-500/25 via-accent/25 to-sky-300/20 blur-3xl scale-105 opacity-85 pointer-events-none" />

              <div className="relative w-full flex items-center justify-center">
                {/* Central Doctor Portrait Cutout */}
                <Image
                  src={doctorImages.hero.src}
                  alt={`${site.doctor.name}, ${site.doctor.title} at ${site.hospital.name}, Khammam`}
                  width={doctorImages.hero.width}
                  height={doctorImages.hero.height}
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 420px"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  className="w-full h-auto max-h-[440px] sm:max-h-[500px] object-contain filter drop-shadow-[0_25px_40px_rgba(0,0,0,0.45)] z-10"
                />

                {/* Floating Card 1: Top-Left Patient Reviews Card */}
                <div className="absolute -top-3 -left-2 sm:-top-4 sm:-left-6 z-20 animate-float-slow bg-background/95 backdrop-blur-md border border-border/80 rounded-2xl p-2.5 sm:p-3.5 shadow-2xl flex items-center gap-3 scale-90 sm:scale-100">
                  <div className="flex -space-x-2 overflow-hidden">
                    <div className="inline-block size-7 sm:size-8 rounded-full bg-sky-500/20 border-2 border-background flex items-center justify-center text-[10px] font-bold text-accent">DR</div>
                    <div className="inline-block size-7 sm:size-8 rounded-full bg-emerald-500/20 border-2 border-background flex items-center justify-center text-[10px] font-bold text-emerald-600">★5</div>
                    <div className="inline-block size-7 sm:size-8 rounded-full bg-amber-500/20 border-2 border-background flex items-center justify-center text-[10px] font-bold text-amber-600">🏆</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-foreground flex items-center gap-1">
                      Reviews <span className="flex text-amber-400 text-[10px]">★★★★★</span>
                    </div>
                    <div className="text-[10px] font-medium text-muted-foreground">500+ Verified Patient Reviews</div>
                  </div>
                </div>

                {/* Floating Card 2: Top-Right Surgeries Stats Badge */}
                <div className="absolute top-6 -right-2 sm:top-8 sm:-right-8 z-20 animate-float-delayed bg-background/95 backdrop-blur-md border border-sky-500/30 rounded-2xl p-2.5 sm:p-3.5 shadow-2xl text-left scale-90 sm:scale-100">
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">Surgeries Performed</div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-base sm:text-lg font-black text-accent">5,000+</span>
                    <span className="inline-block size-5 rounded-md bg-accent/15 text-accent text-center text-xs leading-5 font-bold">✓</span>
                  </div>
                  <div className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1 mt-0.5">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-ping" /> 99.8% Surgical Success
                  </div>
                </div>

                {/* Floating Card 3: Bottom-Left Laser & Keyhole Specialist Badge */}
                <div className="absolute bottom-6 -left-3 sm:bottom-8 sm:-left-8 z-20 animate-float-delayed bg-background/95 backdrop-blur-md border border-border/80 rounded-2xl p-2.5 sm:p-3 shadow-2xl flex items-center gap-2.5 scale-90 sm:scale-100">
                  <div className="size-8 sm:size-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                    <Stethoscope className="size-4 sm:size-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-foreground">Laser & Keyhole Specialist</div>
                    <div className="text-[10px] text-muted-foreground">10+ Years Senior Surgeon</div>
                  </div>
                </div>

                {/* Floating Card 4: Bottom-Right 24/7 Emergency ICU Badge */}
                <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 z-20 animate-float-slow bg-background/95 backdrop-blur-md border border-emergency/30 rounded-2xl p-2.5 sm:p-3 shadow-2xl flex items-center gap-2.5 scale-90 sm:scale-100">
                  <div className="size-8 sm:size-9 rounded-xl bg-emergency/10 border border-emergency/20 flex items-center justify-center text-emergency shrink-0">
                    <ShieldCheck className="size-4 sm:size-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-foreground flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-emerald-500 animate-pulse" /> 24/7 ICU Care
                    </div>
                    <div className="text-[10px] text-muted-foreground">{site.hospital.name}</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── ABOUT DOCTOR SECTION ─────────────────────────────────────────── */}
      <section id="about" className="py-14 sm:py-20 bg-background border-b border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Doctor Photo Container */}
            <div className="relative mx-auto max-w-xs sm:max-w-sm w-full flex items-center justify-center">
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-sky-500/20 via-accent/20 to-sky-400/10 blur-3xl scale-95 opacity-75 pointer-events-none" />

              <div className="relative w-full overflow-hidden rounded-2xl border border-sky-500/20 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-950/80 shadow-xl backdrop-blur-sm">
                <Image
                  src={doctorImages.about.src}
                  alt={`${site.doctor.name}, ${site.doctor.title} at ${site.hospital.name}`}
                  width={doctorImages.about.width}
                  height={doctorImages.about.height}
                  priority
                  sizes="(max-width: 640px) 300px, 380px"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  className="w-full h-auto object-contain filter contrast-[1.02]"
                />
              </div>
            </div>

            {/* Right Column: Doctor Details */}
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="type-label text-accent inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3.5 py-1 text-xs">
                  <Stethoscope className="size-3.5" aria-hidden />
                  About the Doctor
                </span>
                <h2 className="type-h2 text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                  {site.doctor.name}
                </h2>
                <p className="text-sm sm:text-base font-semibold text-accent">
                  {site.doctor.credentials} · {site.doctor.title}
                </p>
              </div>

              <ul className="space-y-3 pt-2">
                {doctorBulletDetails.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                    <CheckCircle2 className="size-4 text-accent shrink-0 mt-0.5" aria-hidden />
                    <div>
                      <strong className="text-foreground font-bold">{item.title}: </strong>
                      <span className="text-muted-foreground leading-relaxed">{item.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="pt-4 flex flex-wrap gap-3">
                <Button
                  variant="accent"
                  size="cta"
                  className="rounded-none shadow-md"
                  render={<a href={site.contact.phoneHref} />}
                >
                  <Phone className="size-4" aria-hidden />
                  <span>Call Hospital</span>
                </Button>

                <Button
                  variant="whatsapp"
                  size="cta"
                  className="rounded-none shadow-md"
                  render={<a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" />}
                >
                  <span>WhatsApp Doctor</span>
                </Button>
              </div>
            </div>

          </Reveal>
        </div>
      </section>

      {/* ── SERVICES & SURGERIES SECTION ───────────────────────────────────── */}
      <section id="services">
        <ConditionsModule />
      </section>

      {/* ── HOSPITAL INFRASTRUCTURE SHOWCASE ─────────────────────────────── */}
      <section id="hospital">
        <HospitalShowcase />
      </section>

      {/* ── PATIENT REVIEWS & TESTIMONIALS SECTION ───────────────────────── */}
      <section id="reviews" className="py-14 sm:py-20 brand-wash border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeading
            eyebrow="Patient Feedback"
            title="Trusted Surgical Recovery Stories"
            lead="Read genuine patient experiences and testimonials for laparoscopic hernia, gallbladder, appendix, and laser surgeries at Suraksha Hospital."
          />
          <Testimonials />
        </div>
      </section>

      {/* ── CONTACT & APPOINTMENT SECTION ────────────────────────────────── */}
      <section id="contact" className="py-14 sm:py-20 bg-background border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="Appointment & Location"
            title="Book a Consultation or Reach Us 24/7"
            lead="Schedule an appointment with Dr. Rajashekhar Meda at Suraksha Hospital, Khammam, or call our 24/7 helpline for emergency surgical care."
          />

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Left: Contact Info & OPD Hours */}
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6 sm:p-8 space-y-5 border border-border/60">
                <h3 className="type-h3 text-xl font-bold text-foreground">Suraksha Hospital Details</h3>
                <address className="not-italic space-y-4 text-sm text-muted-foreground">
                  <div className="flex gap-3.5">
                    <MapPin className="size-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-foreground block text-base font-bold">{site.hospital.name}</strong>
                      <span>{site.hospital.addressFull}</span>
                    </div>
                  </div>
                  <div className="flex gap-3.5">
                    <Clock className="size-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-foreground block font-bold">OPD Consulting Hours</strong>
                      <span>{site.hours.weekday}</span>
                      <br />
                      <span>{site.hours.sunday}</span>
                    </div>
                  </div>
                  <div className="flex gap-3.5">
                    <ShieldCheck className="size-5 text-emergency shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-foreground block font-bold text-emergency">24/7 Emergency Care</strong>
                      <span>Round-the-clock emergency surgical care and ICU critical care.</span>
                    </div>
                  </div>
                </address>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="accent"
                    size="cta"
                    className="rounded-none shadow-md w-full sm:w-auto"
                    render={<a href={site.contact.phoneHref} />}
                  >
                    <Phone className="size-4" />
                    <span>Call Hospital</span>
                  </Button>
                  <Button
                    variant="whatsapp"
                    size="cta"
                    className="rounded-none shadow-md w-full sm:w-auto"
                    render={<a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" />}
                  >
                    <span>Message WhatsApp</span>
                  </Button>
                </div>
              </div>

              {/* Map Embed */}
              <div className="glass rounded-2xl p-3 border border-border/60 overflow-hidden shadow-sm">
                <iframe
                  title={`Map to ${site.hospital.name}`}
                  src={site.hospital.maps.embedUrl}
                  className="w-full h-[260px] rounded-xl border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Right: Interactive Appointment Booking Form */}
            <div className="glass rounded-2xl p-6 sm:p-8 border border-border/60 shadow-lg space-y-4">
              <h3 className="type-h3 text-xl font-bold text-foreground">Schedule Consultation</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Fill in your details below and our hospital team will reach out to confirm your slot immediately.
              </p>
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
