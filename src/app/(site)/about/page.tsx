import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Award, Stethoscope, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, ConfirmWithClient } from "@/components/site/ui-bits";
import { site, awards } from "@/lib/site";
import { notoSansTelugu } from "@/lib/fonts-telugu";

export const metadata: Metadata = {
  title: "About Dr. Gade Ramakrishna Reddy — MCh Neurosurgeon, Khammam",
  description:
    "Dr. Gade Ramakrishna Reddy, MBBS, MS, MCh (Neurosurgery), Consultant Brain & Spine Surgeon at Suraksha Hospital, Khammam and Assistant Professor at Mamata Medical College.",
};

const qualifications = [
  { degree: "MBBS", detail: "Bachelor of Medicine, Bachelor of Surgery" },
  { degree: "MS", detail: "Master of Surgery — General Surgery" },
  { degree: "MCh", detail: "Magister Chirurgiae — Neurosurgery (super-specialty)" },
];

const expertise = [
  {
    title: "Trauma care — brain & spine surgery",
    body: "Emergency neurosurgical management of head injuries, intracranial bleeds and spinal trauma, with 24/7 availability.",
  },
  {
    title: "Endoscopic brain & spine surgery",
    body: "Keyhole techniques that access the target through the smallest practical corridor.",
  },
  {
    title: "Minimally invasive spine surgery (MISS)",
    body: "Reduced tissue disruption, typically less blood loss and a shorter hospital stay compared with open surgery.",
  },
  {
    title: "Epilepsy management",
    body: "Diagnosis, medication optimisation and surgical evaluation for drug-resistant seizure disorders.",
  },
  {
    title: "Spinal deformities & degenerative disease",
    body: "Herniated discs, spinal stenosis and deformity correction.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="brand-wash">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
            <div className="glass rounded-3xl p-3">
              <Image
                src="/images/doctor/dr-reddy-portrait.jpg"
                alt={`Portrait of ${site.doctor.name}, ${site.doctor.title}`}
                width={1067}
                height={1600}
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-6">
              <SectionHeading
                as="h1"
                eyebrow="About"
                title={site.doctor.name}
                lead={site.doctor.credentials}
              />
              <p className="type-lead text-muted-foreground">
                {site.doctor.title} at {site.hospital.name}, {site.hospital.city},
                and {site.doctor.academicRole}. Dr. Reddy combines super-specialty
                surgical training with an active teaching role — and treats
                emergency trauma and planned spine surgery with the same
                technical rigour.
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
          </div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <SectionHeading eyebrow="Qualifications" title="Training & credentials" />
            <ul className="space-y-4">
              {qualifications.map((q) => (
                <li key={q.degree} className="glass rounded-2xl p-5 flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
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
            <SectionHeading eyebrow="Academic role" title="Teaching & authority" />
            <div className="glass rounded-2xl p-6 space-y-4">
              <div className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Building2 className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-semibold">Assistant Professor</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Department of Neurosurgery, Mamata Medical College
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                An academic appointment means staying current with evolving
                surgical technique and evidence — and being accountable to peers
                as well as patients. For referring doctors, it is a straightforward
                marker of standing.
              </p>
            </div>

            <SectionHeading eyebrow="Recognition" title="Awards & publications" />
            {awards.length > 0 ? (
              <ul className="space-y-3">
                {awards.map((a) => (
                  <li key={a.title} className="glass rounded-2xl p-5 flex gap-4">
                    <Award className="size-5 text-accent shrink-0 mt-0.5" aria-hidden />
                    <span className="font-medium">{a.title}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <ConfirmWithClient>
                No awards or publications were verifiable from the material
                supplied. Send through any awards, published papers, conference
                presentations or fellowships and they will be listed here.
                Nothing has been invented to fill this space.
              </ConfirmWithClient>
            )}
          </div>
        </div>
      </Section>

      <Section className="bg-muted/60">
        <SectionHeading
          eyebrow="Areas of expertise"
          title="What Dr. Reddy treats"
          lead="Drawn from the practice's own clinical focus — brain and spine, emergency and planned."
        />
        <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {expertise.map((item) => (
            <li key={item.title} className="glass rounded-2xl p-6 space-y-3">
              <span className="grid size-11 place-items-center rounded-xl bg-accent/10 text-accent">
                <Stethoscope className="size-5" aria-hidden />
              </span>
              <h3 className="type-h3">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
