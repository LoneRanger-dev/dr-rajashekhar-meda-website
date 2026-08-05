import Image from "next/image";
import { Phone, CalendarCheck, Clock, Star, MapPin, Award, CheckCircle2, Stethoscope, ShieldCheck, Activity, Sparkles } from "lucide-react";
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
    detail: "Dr. Rajashekhar Meda - MBBS, M.S. (General Surgery)",
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
      <section id="hero" className="relative overflow-hidden bg-white dark:bg-slate-950 py-12 sm:py-16 lg:py-20 border-b border-border/40">
        <HeroBackground />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Headline, Subtitle, Description, CTA */}
            <Reveal as="div" className="space-y-6 text-left" blur={false} y={16}>
              <div className="space-y-2">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#0B3B60] dark:text-sky-300">
                  Welcome to
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B3B60] dark:text-white tracking-tight leading-[1.1]">
                  Dr. Rajashekhar Meda
                </h1>
                <p className="text-xl sm:text-2xl font-semibold text-[#4A749B] dark:text-sky-400 tracking-wide pt-1">
                  General &amp; Laparoscopic Surgeon
                </p>
              </div>

              <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg">
                Providing advanced surgical care with precision, compassion, and modern medical expertise. Dedicated to delivering personalized treatment plans, faster recovery, and better outcomes for every patient
              </p>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#1D538E] hover:bg-[#153E6B] text-white px-8 py-3.5 text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 active:scale-95"
                >
                  Book an Appointment
                </a>
              </div>
            </Reveal>

            {/* Right Column: Exact Composite Doctor Graphic Image */}
            <div className="relative mx-auto max-w-[380px] sm:max-w-[480px] lg:max-w-[540px] w-full flex items-center justify-center py-4">
              <Image
                src="/images/doctor/dr-rajashekhar-hero-circle-graphic.png"
                alt="Dr. Rajashekhar Meda - General & Laparoscopic Surgeon"
                width={1080}
                height={1080}
                priority
                sizes="(max-width: 640px) 380px, (max-width: 1024px) 480px, 540px"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── ABOUT DOCTOR SECTION ─────────────────────────────────────────── */}
      <section id="about" className="py-14 sm:py-20 bg-background border-b border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Doctor Photo Container with Moving Animated Icons */}
            <div className="relative mx-auto max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] w-full flex items-center justify-center py-6">
              
              {/* Floating Animated Icon 1: Top Left */}
              <div className="absolute top-2 -left-2 sm:-left-6 glass rounded-2xl p-2.5 sm:p-3 flex items-center gap-2 shadow-xl border border-sky-400/30 text-xs font-bold text-foreground z-20 animate-float-slow">
                <span className="p-1.5 rounded-xl bg-sky-500/15 text-accent">
                  <Stethoscope className="size-4" />
                </span>
                <span>Laparoscopic Expert</span>
              </div>

              {/* Floating Animated Icon 2: Top Right */}
              <div className="absolute top-8 -right-2 sm:-right-6 glass rounded-2xl p-2.5 sm:p-3 flex items-center gap-2 shadow-xl border border-sky-400/30 text-xs font-bold text-foreground z-20 animate-float-delayed">
                <span className="p-1.5 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  <Award className="size-4" />
                </span>
                <span>10+ Yrs Exp.</span>
              </div>

              {/* Floating Animated Icon 3: Bottom Left */}
              <div className="absolute bottom-6 -left-2 sm:-left-6 glass rounded-2xl p-2.5 sm:p-3 flex items-center gap-2 shadow-xl border border-sky-400/30 text-xs font-bold text-foreground z-20 animate-float-delayed">
                <span className="p-1.5 rounded-xl bg-teal-500/15 text-teal-600 dark:text-teal-400">
                  <Sparkles className="size-4" />
                </span>
                <span>German Laser Surgery</span>
              </div>

              {/* Floating Animated Icon 4: Bottom Right */}
              <div className="absolute bottom-2 -right-2 sm:-right-6 glass rounded-2xl p-2.5 sm:p-3 flex items-center gap-2 shadow-xl border border-orange-500/30 text-xs font-bold text-emergency z-20 animate-float-slow">
                <span className="p-1.5 rounded-xl bg-orange-500/15 text-emergency">
                  <Clock className="size-4" />
                </span>
                <span>24/7 Trauma Care</span>
              </div>

              {/* Main Doctor Circle Image */}
              <Image
                src={doctorImages.about.src}
                alt={`${site.doctor.name}, ${site.doctor.title} at ${site.hospital.name}`}
                width={doctorImages.about.width}
                height={doctorImages.about.height}
                priority
                sizes="(max-width: 640px) 340px, 420px"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500 z-10"
              />
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
                  className="rounded-full shadow-md"
                  render={<a href={site.contact.phoneHref} />}
                >
                  <Phone className="size-4" aria-hidden />
                  <span>Call Hospital</span>
                </Button>

                <Button
                  variant="whatsapp"
                  size="cta"
                  className="rounded-full shadow-md"
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
                    className="rounded-full shadow-md w-full sm:w-auto"
                    render={<a href={site.contact.phoneHref} />}
                  >
                    <Phone className="size-4" />
                    <span>Call Hospital</span>
                  </Button>
                  <Button
                    variant="whatsapp"
                    size="cta"
                    className="rounded-full shadow-md w-full sm:w-auto"
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
