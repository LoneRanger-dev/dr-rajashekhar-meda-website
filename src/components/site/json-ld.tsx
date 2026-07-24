import { site, conditions } from "@/lib/site";

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
        "@type": "Physician",
        "@id": `${site.domain}/#physician`,
        name: site.doctor.name,
        alternateName: site.doctor.nameAlt,
        description: `${site.doctor.title} at ${site.hospital.name}, ${site.hospital.city}. ${site.doctor.credentials}.`,
        medicalSpecialty: "Neurologic",
        url: site.domain,
        telephone: `+91${site.contact.phone}`,
        image: `${site.domain}/images/doctor/dr-reddy-portrait.jpg`,
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
          description: site.doctor.academicRole,
        },
      },
      {
        "@type": "MedicalClinic",
        "@id": `${site.domain}/#clinic`,
        name: site.hospital.name,
        description: `${site.hospital.descriptor}. ${site.hours.emergency}.`,
        url: site.domain,
        telephone: `+91${site.contact.phone}`,
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
