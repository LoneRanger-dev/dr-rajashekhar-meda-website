import type { Metadata } from "next";
import Image from "next/image";
import { Ambulance, BedDouble, Brain, Clock, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/ui-bits";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { FacilityHero } from "@/components/site/facility-hero";
import { FloatingMedicalIcons } from "@/components/site/floating-medical-icons";
import { Tilt3D } from "@/components/site/tilt-3d";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { facilityImages, BLUR_DATA_URL, type ImageAsset } from "@/lib/siteAssets";
import { BreadcrumbJsonLd } from "@/components/site/json-ld";

export const metadata: Metadata = pageMetadata({
  title: "Suraksha Hospital Khammam — Emergency, Trauma & Multi-Specialty",
  description:
    "Suraksha Hospital, Nehru Nagar, Khammam — emergency and trauma care, advanced ICU and 24/7 neurosurgeon availability. Consulting hours and location.",
  path: "/facilities",
});

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

/**
 * Premium facility gallery — config-driven. To add a room photo: drop it in
 * /public/images/facility/, register it in siteAssets.facilityImages, and add
 * one line here. The responsive grid and effects apply automatically.
 */
const gallery: {
  image: ImageAsset;
  title: string;
  caption: string;
  /** Full-width panoramic tile — for montages / wide shots. */
  wide?: boolean;
}[] = [
  {
    image: facilityImages.wards,
    title: "ICU, theatre, wards & recovery",
    caption:
      "Intensive care, a modern operating theatre, private rooms and calm recovery spaces — all under one roof.",
    wide: true,
  },
  {
    image: facilityImages.interior,
    title: "Reception & patient areas",
    caption: "Calm, modern interiors designed around patient comfort.",
  },
  {
    image: facilityImages.exterior,
    title: "The hospital",
    caption: "Our building on Nehru Nagar, near Karnataka Bank.",
  },
];

export default function FacilitiesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Hospital Facilities", path: "/facilities" }]} />
      {/* ── CINEMATIC HERO ───────────────────────────────────────────────── */}
      <FacilityHero />

      {/* ── PREMIUM INTRODUCTION ─────────────────────────────────────────── */}
      <Section>
        <Reveal className="mx-auto max-w-3xl text-center space-y-4">
          <p className="type-label text-accent">A neuroscience institute</p>
          <h2 className="type-h2">
            Built for brain &amp; spine care, from emergency to recovery
          </h2>
          <p className="type-lead text-muted-foreground text-pretty">
            {site.hospital.name} brings advanced neurosurgical infrastructure to
            Khammam under one roof — an emergency-ready theatre, an on-site
            intensive care unit and comfortable recovery spaces, so complex
            cases are managed without moving patients between hospitals.
          </p>
        </Reveal>
      </Section>

      {/* ── WHAT'S ON SITE — 3D tilt glass cards over ambient icons ───────── */}
      <Section className="relative overflow-hidden">
        <FloatingMedicalIcons />
        <div className="relative">
          <SectionHeading
            eyebrow="What's on site"
            title="Facilities supporting neurosurgical care"
          />
          <RevealGroup as="ul" className="mt-12 grid sm:grid-cols-2 gap-5 lg:gap-6">
            {facilities.map(({ icon: Icon, title, body }) => (
              <RevealItem key={title} as="li" className="h-full">
                <Tilt3D className="h-full">
                  <div className="group glass lift rounded-[28px] p-7 flex gap-5 h-full">
                    <span
                      className="icon-glass grid size-12 shrink-0 place-items-center rounded-xl text-accent"
                      style={{ transform: "translateZ(40px)" }}
                    >
                      <Icon
                        className="size-6 transition-transform duration-[var(--dur-base)] group-hover:scale-110"
                        aria-hidden
                      />
                    </span>
                    <div style={{ transform: "translateZ(24px)" }}>
                      <h3 className="type-h3">{title}</h3>
                      <p className="text-sm text-muted-foreground mt-1.5">{body}</p>
                    </div>
                  </div>
                </Tilt3D>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* ── PREMIUM GALLERY ──────────────────────────────────────────────── */}
      <Section className="bg-muted/40">
        <SectionHeading
          eyebrow="Inside the hospital"
          title="A closer look"
          lead="Clean, calm, and equipped for advanced neurosurgical care."
        />
        <RevealGroup
          as="ul"
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {gallery.map(({ image, title, caption, wide }) => (
            <RevealItem
              key={title}
              as="li"
              className={`h-full ${wide ? "sm:col-span-2 lg:col-span-3" : ""}`}
            >
              <Tilt3D className="h-full" maxX={wide ? 3 : 6} maxY={wide ? 4 : 8}>
                <figure className="group relative h-full glass rounded-[28px] p-2 shadow-[0_30px_80px_oklch(0.26_0.06_251/0.18)]">
                  <div
                    className={`card-shine relative overflow-hidden rounded-[22px] ${
                      wide ? "aspect-[3/2] sm:aspect-[16/7]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={`${title} — ${site.hospital.name}, Khammam`}
                      fill
                      sizes={wide ? "100vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
                      placeholder="blur"
                      blurDataURL={BLUR_DATA_URL}
                      className="object-cover transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-105"
                      style={{ transform: "translateZ(20px)" }}
                    />
                    {/* Legibility gradient + title (always visible for a11y) */}
                    <div
                      className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/65 via-black/25 to-transparent"
                      style={{ transform: "translateZ(45px)" }}
                    >
                      <figcaption className="text-white font-semibold text-[clamp(0.95rem,0.9rem+0.4vw,1.1rem)]">
                        {title}
                      </figcaption>
                      <p className="text-white/85 text-sm mt-0.5 max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-[var(--ease-out)] group-hover:max-h-16 group-hover:opacity-100">
                        {caption}
                      </p>
                    </div>
                  </div>
                </figure>
              </Tilt3D>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* ── LOCATION & HOURS ─────────────────────────────────────────────── */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <SectionHeading eyebrow="Getting here" title="Location & hours" />
            <ul className="space-y-5">
              <li className="group flex gap-4">
                <span className="icon-glass grid size-11 shrink-0 place-items-center rounded-xl text-accent">
                  <MapPin className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <address className="not-italic text-sm text-muted-foreground mt-1">
                    {site.hospital.addressFull}
                  </address>
                </div>
              </li>
              <li className="group flex gap-4">
                <span className="icon-glass grid size-11 shrink-0 place-items-center rounded-xl text-accent">
                  <Clock className="size-5" aria-hidden />
                </span>
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
          <div className="space-y-4">
            <div className="relative glow-halo">
              <div className="glass rounded-3xl p-3 elev-2 overflow-hidden">
                <iframe
                  title={`Map to ${site.hospital.name}, ${site.hospital.city}`}
                  src={site.hospital.maps.embedUrl}
                  className="w-full h-[300px] sm:h-[360px] rounded-2xl border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
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
      </Section>
    </>
  );
}
