import { site, conditions } from "@/lib/site";

/**
 * Structured Data (JSON-LD) for Dr. Rajashekhar Meda & Suraksha Hospital.
 * Fully aligned with Schema.org Physician, MedicalClinic, and LocalBusiness specifications.
 */
export function JsonLd() {
  const clinicUrl = site.domain;

  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": ["Physician", "MedicalBusiness"],
    "@id": `${clinicUrl}/#physician`,
    name: site.doctor.name,
    alternateName: [site.doctor.nameAlt, site.doctor.nameTelugu],
    description: `${site.doctor.name} is a leading ${site.doctor.title} at ${site.hospital.name}, Khammam with 10+ years of surgical expertise in laparoscopic, keyhole, and laser surgeries.`,
    url: clinicUrl,
    image: `${clinicUrl}/images/doctor/dr-rajashekhar-hero.jpg`,
    telephone: site.contact.phone,
    email: site.contact.email,
    medicalSpecialty: [
      "https://schema.org/Surgical",
      "GeneralSurgery",
      "LaparoscopicSurgery",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Medical University",
    },
    worksFor: {
      "@type": "MedicalClinic",
      name: site.hospital.name,
      alternateName: site.hospital.nameTelugu,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.hospital.street,
        addressLocality: site.hospital.city,
        addressRegion: site.hospital.state,
        postalCode: site.hospital.postalCode,
        addressCountry: site.hospital.country,
      },
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.hospital.street,
      addressLocality: site.hospital.city,
      addressRegion: site.hospital.state,
      postalCode: site.hospital.postalCode,
      addressCountry: site.hospital.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.hospital.geo.lat,
      longitude: site.hospital.geo.lng,
    },
    openingHoursSpecification: site.hours.spec.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days.map((d) => `https://schema.org/${d}`),
      opens: h.opens,
      closes: h.closes,
    })),
    priceRange: "₹₹",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "General & Laparoscopic Surgical Services",
      itemListElement: conditions.map((c, i) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: c.name,
          description: c.summary,
          url: `${clinicUrl}/conditions/${c.slug}`,
        },
        position: i + 1,
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What surgeries does Dr. Rajashekhar Meda specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dr. Rajashekhar Meda specializes in Advanced Laparoscopic Surgery (keyhole surgery), Laparoscopic Hernia Repair, Laparoscopic Cholecystectomy (gallbladder removal), Laparoscopic Appendectomy, Tumor Excision, and Endoscopic Laser Surgery for varicose veins.",
        },
      },
      {
        "@type": "Question",
        name: "What are the benefits of laparoscopic keyhole surgery over open surgery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Laparoscopic surgery uses tiny keyhole incisions, resulting in significantly less pain, reduced risk of infection, minimal scar formation, shorter hospital stays, and a fast return to daily activities within days.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Dr. Rajashekhar Meda's clinic located in Khammam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dr. Rajashekhar Meda consults at Suraksha Hospital, Old Priyadarshini College Building, Nehru Nagar, near Karnataka Bank, Wyra Road, Khammam, Telangana.",
        },
      },
      {
        "@type": "Question",
        name: "Is emergency surgical care available at Suraksha Hospital?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, 24/7 emergency surgical care, critical care ICU support, and trauma services are available at Suraksha Hospital. You can reach the emergency helpline at 7075 447 449.",
        },
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${clinicUrl}/#website`,
    url: clinicUrl,
    name: `${site.doctor.name} - General & Laparoscopic Surgeon`,
    description: `Official website of ${site.doctor.name}, Consultant Laparoscopic & Laser Surgeon at ${site.hospital.name}, Khammam.`,
    publisher: {
      "@id": `${clinicUrl}/#physician`,
    },
    inLanguage: "en-IN",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": `${clinicUrl}/#organization`,
    name: site.hospital.name,
    alternateName: site.hospital.nameTelugu,
    url: clinicUrl,
    logo: `${clinicUrl}/brand/dr-rajashekhar-logo-footer.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.hospital.street,
      addressLocality: site.hospital.city,
      addressRegion: site.hospital.state,
      postalCode: site.hospital.postalCode,
      addressCountry: site.hospital.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.contact.phone,
      contactType: "emergency",
      areaServed: "IN",
      availableLanguage: ["English", "Telugu", "Hindi"],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: clinicUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Dr. Rajashekhar Meda",
        item: `${clinicUrl}/about`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Surgeries & Treatments",
        item: `${clinicUrl}/conditions`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
