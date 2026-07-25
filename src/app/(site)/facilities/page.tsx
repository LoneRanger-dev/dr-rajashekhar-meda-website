import type { Metadata } from "next";
import Image from "next/image";
import { Ambulance, BedDouble, Brain, Clock, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, ConfirmWithClient } from "@/components/site/ui-bits";
import { site } from "@/lib/site";
import { notoSansTelugu } from "@/lib/fonts-telugu";

export const metadata: Metadata = {
  title: "Suraksha Hospital Khammam — Emergency, Trauma & Multi-Specialty",
  description:
    "Suraksha Hospital, Nehru Nagar, Khammam — emergency and trauma care, advanced ICU and 24/7 neurosurgeon availability. Consulting hours and location.",
};

const facilities = [
  {
    icon: Ambulance,
    title: "24/7 emergency & trauma",
    body: "Round-the-clock intake for head injury, spinal trauma and acute neurological emergencies, with a neurosurgeon available at any hour.",
  },
  {
    icon: BedDouble,
    title: "Advanced ICU",
    body: "Intensive care support on site for post-operative and critically ill neurosurgical patients.",
  },
  {
    icon: Brain,
    title: "Neurosurgical theatre",
    body: "Equipped for endoscopic and minimally invasive brain and spine procedures.",
  },
  {
    icon: ShieldCheck,
    title: "Multi-specialty support",
    body: "Access to allied specialties under one roof, so complex cases do not need to be moved between hospitals.",
  },
];

export default function FacilitiesPage() {
  return (
    <>
      <section className="brand-wash">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <SectionHeading
                as="h1"
                eyebrow="Hospital facilities"
                title={site.hospital.name}
                lead={`${site.hospital.descriptor} — ${site.hospital.city}, ${site.hospital.state}`}
              />
              <p
                lang="te"
                className={`${notoSansTelugu.variable} text-xl text-muted-foreground`}
              >
                {site.hospital.nameTelugu}
              </p>
              <Button
                variant="emergency"
                size="cta"
                render={<a href={site.contact.phoneHref} />}
              >
                <Phone aria-hidden />
                <span className="tnum">{site.contact.phoneDisplay}</span>
              </Button>
            </div>
            <div className="glass rounded-3xl p-3">
              <Image
                src="/images/creatives/hospital-intro-banner.jpg"
                alt={`${site.hospital.name} — expert brain and spine surgeries, 24/7 trauma and emergency care, advanced ICU and state-of-the-art treatment`}
                width={1280}
                height={716}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="What's on site"
          title="Facilities supporting neurosurgical care"
        />
        <ul className="mt-12 grid sm:grid-cols-2 gap-5">
          {facilities.map(({ icon: Icon, title, body }) => (
            <li key={title} className="glass rounded-2xl p-7 flex gap-5">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                <Icon className="size-6" aria-hidden />
              </span>
              <div>
                <h2 className="type-h3">{title}</h2>
                <p className="text-sm text-muted-foreground mt-1.5">{body}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <ConfirmWithClient>
            Photographs of the hospital exterior, reception, ICU and operating
            theatre would strengthen this page considerably — patients comparing
            hospitals look for them. Please supply images cleared for publication
            (no identifiable patients).
          </ConfirmWithClient>
        </div>
      </Section>

      <Section className="bg-muted/60">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <SectionHeading eyebrow="Getting here" title="Location & hours" />
            <ul className="space-y-5">
              <li className="flex gap-4">
                <MapPin className="size-5 text-accent shrink-0 mt-1" aria-hidden />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <address className="not-italic text-sm text-muted-foreground mt-1">
                    {site.hospital.addressFull}
                  </address>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="size-5 text-accent shrink-0 mt-1" aria-hidden />
                <div>
                  <h3 className="font-semibold">Consulting hours</h3>
                  <p className="text-sm text-muted-foreground mt-1">
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
          </div>
          <ConfirmWithClient>
            An embedded Google Map goes here once the Google Business Profile is
            claimed and the exact map pin is confirmed. Claiming the profile is
            priority #1 for local SEO — it is what makes the clinic appear in
            &ldquo;neurosurgeon near me&rdquo; searches and on Google Maps.
          </ConfirmWithClient>
        </div>
      </Section>
    </>
  );
}
