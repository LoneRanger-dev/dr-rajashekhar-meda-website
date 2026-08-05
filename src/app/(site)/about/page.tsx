import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Stethoscope, Phone, ArrowRight, ShieldCheck, CheckCircle2, Clock, MapPin, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { site } from "@/lib/site";
import { doctorImages, BLUR_DATA_URL } from "@/lib/siteAssets";
import { notoSansTelugu } from "@/lib/fonts-telugu";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/site/json-ld";

export const metadata: Metadata = buildMetadata({
  title: "About Dr. Rajashekhar Meda — Laparoscopic & General Surgeon Khammam",
  description: "Dr. Rajashekhar Meda, MBBS, M.S. (General Surgery), Consultant Laparoscopic, Endoscopic & Laser Surgeon at Suraksha Hospital, Khammam with 10+ years surgical experience.",
  path: "/about",
});

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
    detail: "Suraksha Hospital, Old Priyadarshini College Building, Nehru Nagar, near Karnataka Bank, Wyra Road, Khammam, Telangana 507002 (Opp. New Bus Stand).",
  },
  {
    title: "Consulting Hours & Emergency",
    detail: "Morning: 10:00 AM – 2:00 PM | Evening: 5:00 PM – 8:30 PM (Mon–Sat). 24/7 Emergency Surgical Availability.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd />
      
      {/* Split-Screen About Doctor Section: Photo on Left, Point-by-Point Details on Right */}
      <section className="brand-wash py-12 sm:py-16 border-b border-border/50">
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

            {/* Right Column: Point-by-Point Details */}
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="type-label text-[#134377] dark:text-sky-300 inline-flex items-center gap-2 rounded-full bg-[#134377]/10 dark:bg-sky-500/15 border border-[#134377]/20 dark:border-sky-400/30 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                  <Stethoscope className="size-3.5" aria-hidden />
                  <span>About the Doctor</span>
                </span>
                <h1 className="type-h1 text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                  {site.doctor.name}
                </h1>
                <p className="text-sm sm:text-base font-semibold text-accent">
                  {site.doctor.credentials} · {site.doctor.title}
                </p>
                <p
                  lang="te"
                  className={`${notoSansTelugu.variable} text-lg text-muted-foreground font-medium pt-1`}
                >
                  {site.doctor.nameTelugu} - {site.doctor.titleTelugu}
                </p>
              </div>

              {/* Point-wise Details List */}
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

              {/* CTAs */}
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
                  variant="accent"
                  size="cta"
                  className="rounded-full shadow-md"
                  render={<Link href="/contact#appointment" />}
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="size-4" aria-hidden />
                </Button>
              </div>
            </div>

          </Reveal>
        </div>
      </section>

      {/* Specialties Point-wise Summary Section */}
      <section className="py-12 sm:py-16 bg-muted/20 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="type-label text-[#134377] dark:text-sky-300 inline-flex items-center gap-2 rounded-full bg-[#134377]/10 dark:bg-sky-500/15 border border-[#134377]/20 dark:border-sky-400/30 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
              <Award className="size-3.5" aria-hidden />
              <span>Surgical Standards &amp; Care</span>
            </span>
            <h2 className="type-h2 text-xl sm:text-3xl font-bold">Comprehensive Patient Care</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="glass rounded-xl p-5 space-y-2 border border-border/50">
              <h3 className="font-bold text-sm text-foreground flex items-center gap-2">
                <Clock className="size-4 text-accent" /> Consulting Hours
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {site.hours.weekday}<br />{site.hours.sunday}
              </p>
            </div>

            <div className="glass rounded-xl p-5 space-y-2 border border-border/50">
              <h3 className="font-bold text-sm text-foreground flex items-center gap-2">
                <ShieldCheck className="size-4 text-emergency" /> 24/7 Trauma Emergency
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Suraksha Hospital offers 24/7 round-the-clock emergency surgical care for acute appendicitis, strangulated hernia, and abdominal trauma.
              </p>
            </div>

            <div className="glass rounded-xl p-5 space-y-2 border border-border/50">
              <h3 className="font-bold text-sm text-foreground flex items-center gap-2">
                <MapPin className="size-4 text-accent" /> Suraksha Hospital Location
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Opposite New Bus Stand, Wyra Road, Khammam, Telangana 507002.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
