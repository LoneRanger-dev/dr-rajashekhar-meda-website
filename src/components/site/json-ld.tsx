import { site, conditions } from "@/lib/site";
import { doctorImages } from "@/lib/siteAssets";

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const graph = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.domain}${item.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

/**
 * Physician + MedicalClinic structured data (BUILD.md Phase 3 non-negotiable).
 * Feeds Google's rich results and reinforces the local-SEO NAP signal.
 */
export function JsonLd() {
  const address = {
    "@type": "PostalAddress",
    streetAddress: site.hospital.street,
    addressLocality: site.hospital.city,
    addressRegion: site.hospital.state,
    postalCode: site.hospital.postalCode,
    addressCountry: site.hospital.country,
  };

  const openingHours = site.hours.spec.map((s) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: s.days.map(
      (d) =>
        ({
          Mo: "Monday",
          Tu: "Tuesday",
          We: "Wednesday",
          Th: "Thursday",
          Fr: "Friday",
          Sa: "Saturday",
          Su: "Sunday",
        })[d]
    ),
    opens: s.opens,
    closes: s.closes,
  }));

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        // ── Physician ───────────────────────────────────────────────────────
        // name: canonical legal name matching Google Business Profile (§4.3).
        // alternateName: every indexed name variant helps entity resolution.
        // jobTitle + hospitalAffiliation: primary disambiguation signals for
        //   Google's Knowledge Graph per audit §4.2 / §4.3.
        // medicalSpecialty: expanded to array per audit §4.3.
        // description: leads with current specialty, not the General Surgery
        //   training stage — resolves the root-cause identified in §4.2.
        "@type": "Physician",
        "@id": `${site.domain}/#physician`,
        name: "Dr. Gade Ramakrishna Reddy",
        alternateName: ["Dr. GRK Reddy", "Ramakrishna Reddy G"],
        jobTitle: "Consultant Neurosurgeon",
        description:
          "Dr. Gade Ramakrishna Reddy is a Consultant Neurosurgeon" +
          " (Brain & Spine Surgeon) at Suraksha Hospital, Khammam, holding" +
          " MBBS, MS and MCh (Neurosurgery) qualifications, and" +
          " Assistant Professor, Department of Neurosurgery, Mamata Medical College.",
        medicalSpecialty: ["Neurologic", "Surgical"],
        hospitalAffiliation: {
          "@type": "Hospital",
          name: site.hospital.name,
          "@id": `${site.domain}/#clinic`,
        },
        url: site.domain,
        telephone: `+91${site.contact.phone}`,
        email: site.contact.email,
        image: `${site.domain}${doctorImages.portrait.src}`,
        address,
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.hospital.geo.lat,
          longitude: site.hospital.geo.lng,
        },
        openingHoursSpecification: openingHours,
        availableService: conditions.map((c) => ({
          "@type": "MedicalProcedure",
          name: c.name,
          description: c.summary,
          url: `${site.domain}/conditions/${c.slug}`,
        })),
        memberOf: {
          "@type": "MedicalOrganization",
          name: "Mamata Medical College",
          description: "Assistant Professor, Department of Neurosurgery",
        },
      },
      {
        "@type": ["MedicalClinic", "MedicalOrganization", "LocalBusiness"],
        "@id": `${site.domain}/#clinic`,
        name: site.hospital.name,
        description: `${site.hospital.descriptor}. ${site.hours.emergency}.`,
        url: site.domain,
        telephone: `+91${site.contact.phone}`,
        email: site.contact.email,
        address,
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.hospital.geo.lat,
          longitude: site.hospital.geo.lng,
        },
        openingHoursSpecification: openingHours,
        availableService: {
          "@type": "MedicalProcedure",
          name: "Emergency Neurosurgery",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.domain}/#website`,
        url: site.domain,
        name: `${site.doctor.name} — ${site.doctor.title}`,
        inLanguage: ["en-IN", "te-IN"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Content is fully static and authored in this repo — no user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
