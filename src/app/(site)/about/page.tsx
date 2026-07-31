import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Award, Stethoscope, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/ui-bits";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { site, awards } from "@/lib/site";
import { doctorImages, creativeImages, BLUR_DATA_URL } from "@/lib/siteAssets";
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
    body: "Endovenous laser ablation (EVLA) for varicose veins and minimally invasive laser proctology.",
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
      <section className="brand-wash">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
          <Reveal className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
            <div className="relative glow-halo glass rounded-3xl p-3">
              <div className="overflow-hidden rounded-2xl img-hover">
                <Image
                  src={doctorImages.about.src}
                  alt={`${site.doctor.name}, ${site.doctor.title}, in consultation at ${site.hospital.name}`}
                  width={doctorImages.about.width}
                  height={doctorImages.about.height}
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <SectionHeading
                as="h1"
                eyebrow="About the Doctor"
                title={site.doctor.name}
                lead="Consultant Laparoscopic, Endoscopic & Laser Surgeon — MBBS, M.S. (General Surgery)"
              />
              <p className="type-lead text-muted-foreground">
                {site.doctor.title} at {site.hospital.name}, {site.hospital.city}. Dr. Rajashekhar Meda brings 10+ years of dedicated surgical experience in minimally invasive laparoscopic surgery, routine general surgery, and 24/7 trauma emergency care.
              </p>
              <p
                lang="te"
                className={`${notoSansTelugu.variable} text-xl text-muted-foreground`}
              >
                {site.doctor.nameTelugu} — {site.doctor.titleTelugu}
              </p>
              <Button
                variant="accent"
                size="cta"
                render={<Link href="/contact#appointment" />}
              >
                Book a consultation
                <ArrowRight aria-hidden />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <Reveal className="relative glow-halo glass rounded-3xl p-3">
          <div className="overflow-hidden rounded-2xl img-hover">
            <Image
              src={creativeImages.hospitalBanner.src}
              alt={`${site.hospital.name} — laparoscopic surgery, 24/7 trauma and emergency care, advanced ICU`}
              width={creativeImages.hospitalBanner.width}
              height={creativeImages.hospitalBanner.height}
              sizes="(max-width: 1024px) 100vw, 1152px"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              className="w-full h-auto object-cover"
            />
          </div>
        </Reveal>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <SectionHeading eyebrow="Qualifications" title="Training & credentials" />
            <ul className="space-y-4">
              {qualifications.map((q) => (
                <li key={q.degree} className="group glass lift rounded-2xl p-5 flex gap-4">
                  <span className="icon-glass grid size-11 shrink-0 place-items-center rounded-xl text-primary dark:text-accent">
                    <GraduationCap className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold">{q.degree}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{q.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <SectionHeading eyebrow="Clinical Leadership" title="Surgical Excellence" />
            <div className="group glass lift rounded-2xl p-6 space-y-4">
              <div className="flex gap-4">
                <span className="icon-glass grid size-11 shrink-0 place-items-center rounded-xl text-accent">
                  <Building2 className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-semibold">Consultant General & Laparoscopic Surgeon</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Suraksha Hospital, Wyra Road, Khammam
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                With over a decade of clinical experience, Dr. Rajashekhar Meda focuses on minimally invasive keyhole procedures that maximize patient comfort, minimize scar tissue, and ensure rapid, complication-free post-operative recovery.
              </p>
            </div>

            {awards.length > 0 && (
              <>
                <SectionHeading eyebrow="Recognition" title="Awards & publications" />
                <ul className="space-y-3">
                  {awards.map((a) => (
                    <li key={a.title} className="glass lift rounded-2xl p-5 flex gap-4">
                      <Award className="size-5 text-accent shrink-0 mt-0.5" aria-hidden />
                      <span className="font-medium">{a.title}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </Section>

      <Section className="bg-muted/60">
        <SectionHeading
          eyebrow="Areas of expertise"
          title="What Dr. Rajashekhar Meda treats"
          lead="Comprehensive general, laparoscopic, laser, and emergency surgical care."
        />
        <RevealGroup as="ul" className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {expertise.map((item) => (
            <RevealItem
              key={item.title}
              as="li"
              className="group glass lift rounded-2xl p-6 space-y-3"
            >
              <span className="icon-glass grid size-11 place-items-center rounded-xl text-accent">
                <Stethoscope
                  className="size-5 transition-transform duration-[var(--dur-base)] group-hover:scale-110"
                  aria-hidden
                />
              </span>
              <h3 className="type-h3">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>
    </>
  );
}
