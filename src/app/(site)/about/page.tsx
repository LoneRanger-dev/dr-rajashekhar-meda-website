import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Stethoscope, ArrowRight, ShieldCheck, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/ui-bits";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { site } from "@/lib/site";
import { notoSansTelugu } from "@/lib/fonts-telugu";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/site/json-ld";

export const metadata: Metadata = buildMetadata({
  title: "About Dr. Rajashekhar Meda — Laparoscopic & General Surgeon Khammam",
  description: "Dr. Rajashekhar Meda, MBBS, M.S. (General Surgery), Consultant Laparoscopic, Endoscopic & Laser Surgeon at Suraksha Hospital, Khammam with 10+ years surgical experience.",
  path: "/about",
});

const qualifications = [
  { degree: "MBBS", detail: "Bachelor of Medicine, Bachelor of Surgery" },
  { degree: "M.S. (General Surgery)", detail: "Master of Surgery — General & Minimally Invasive Surgery" },
  { degree: "Laparoscopic Specialist", detail: "Endoscopic, Keyhole & Laser Surgery Certification" },
];

const expertise = [
  {
    title: "Laparoscopic Hernia Repair",
    body: "Advanced 3D mesh keyhole repair for Inguinal, Umbilical, Incisional, and Ventral hernias with minimal post-op pain.",
  },
  {
    title: "Laparoscopic Cholecystectomy (Gallbladder)",
    body: "Single and multi-port keyhole removal of gallstones and inflamed gallbladder with 24-hour discharge.",
  },
  {
    title: "Emergency Laparoscopic Appendectomy",
    body: "Urgent keyhole appendix removal for acute appendicitis, preventing rupture and abdominal infection.",
  },
  {
    title: "Laser Surgery & Varicose Veins",
    body: "Endovenous laser ablation (EVLA) for varicose veins and minimally invasive laser proctology (Piles, Fissure, Fistula).",
  },
  {
    title: "Tumor & Cyst Excision",
    body: "Surgical excision of lipomas, cysts, abdominal masses, and soft tissue tumors with histological accuracy.",
  },
  {
    title: "Emergency Surgical & Trauma Care",
    body: "24/7 round-the-clock emergency surgical response for abdominal trauma and acute surgical crises.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd />
      {/* Centered Spacious Doctor Overview (No Image) */}
      <section className="brand-wash py-16 sm:py-24 border-b border-border/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center space-y-6">
          <Reveal blur={false} y={16} className="space-y-4">
            <span className="type-label text-accent inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-4 py-1.5">
              <Stethoscope className="size-4" aria-hidden />
              10+ Years of Surgical Excellence
            </span>
            
            <h1 className="type-h1 text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              {site.doctor.name}
            </h1>
            
            <p className="type-lead text-lg sm:text-xl font-semibold text-accent max-w-2xl mx-auto">
              Consultant Laparoscopic, Endoscopic &amp; Laser Surgeon — MBBS, M.S. (General Surgery)
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {site.doctor.title} at {site.hospital.name}, {site.hospital.city}. Dr. Rajashekhar Meda brings over a decade of dedicated surgical experience in minimally invasive keyhole surgeries, laser proctology, routine general surgery, and 24/7 trauma emergency care.
            </p>

            <p
              lang="te"
              className={`${notoSansTelugu.variable} text-xl sm:text-2xl text-muted-foreground font-medium pt-2`}
            >
              {site.doctor.nameTelugu} — {site.doctor.titleTelugu}
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Button
                variant="emergency"
                size="cta"
                className="rounded-none shadow-md"
                render={<a href={site.contact.phoneHref} />}
              >
                <ShieldCheck className="size-4" aria-hidden />
                <span>Call {site.contact.phoneDisplay}</span>
              </Button>
              <Button
                variant="accent"
                size="cta"
                className="rounded-none shadow-md"
                render={<Link href="/contact#appointment" />}
              >
                <span>Book a Consultation</span>
                <ArrowRight className="size-4" aria-hidden />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Qualifications & Medical Credentials */}
      <Section className="py-16 sm:py-20 bg-background">
        <SectionHeading
          eyebrow="Academic Background"
          title="Qualifications & Training"
          lead="Rigorous surgical education and advanced minimally invasive certifications."
        />
        <RevealGroup as="ul" className="mt-10 grid sm:grid-cols-3 gap-6">
          {qualifications.map((q) => (
            <RevealItem
              key={q.degree}
              as="li"
              className="glass lift rounded-2xl p-6 border border-white/10 dark:border-white/5 space-y-3"
            >
              <span className="icon-glass grid size-12 place-items-center rounded-xl text-accent">
                <GraduationCap className="size-6" aria-hidden />
              </span>
              <h3 className="type-h3 text-lg font-bold">{q.degree}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{q.detail}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* Surgical Expertise Grid */}
      <Section className="py-16 sm:py-20 bg-muted/30 border-t border-border/40">
        <SectionHeading
          eyebrow="Core Competencies"
          title="Surgical Specialties"
          lead="Providing advanced keyhole and laser procedures with faster healing and minimal discomfort."
        />
        <RevealGroup as="ul" className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item) => (
            <RevealItem
              key={item.title}
              as="li"
              className="glass lift rounded-2xl p-6 border border-white/10 dark:border-white/5 space-y-3"
            >
              <span className="icon-glass grid size-10 place-items-center rounded-xl text-accent">
                <HeartPulse className="size-5" aria-hidden />
              </span>
              <h3 className="type-h3 text-base font-bold">{item.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>
    </>
  );
}
