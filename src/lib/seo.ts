import { Metadata } from "next";
import { site } from "@/lib/site";

export function buildMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
  image = "/images/doctor/dr-rajashekhar-hero.jpg",
}: {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
  image?: string;
}): Metadata {
  const url = `${site.domain}${path}`;
  // Keep title succinct and under 60 chars where possible
  const fullTitle = title.includes("Dr. Rajashekhar Meda")
    ? title
    : `${title} | Dr. Rajashekhar Meda`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "Dr Rajasekhar Meda",
      "Dr Rajashekhar Meda",
      "General Surgeon Khammam",
      "Laparoscopic Surgeon Khammam",
      "Laser Varicose Veins Khammam",
      "Breast Surgeon Khammam",
      "Thyroid Surgeon Khammam",
      "Diabetic Foot Specialist Khammam",
      "Cellulitis Treatment Khammam",
      "Abdominal Cancer Surgery Khammam",
      "Raja Khammam Surgeon",
      "Suraksha Hospital Khammam",
    ],
    metadataBase: new URL(site.domain),
    alternates: {
      canonical: url,
    },
    authors: [{ name: site.doctor.name, url: site.domain }],
    creator: site.doctor.name,
    publisher: site.hospital.name,
    formatDetection: {
      telephone: true,
      address: true,
      email: true,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description,
      siteName: `${site.doctor.name} — ${site.hospital.name}`,
      locale: "en_IN",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${site.doctor.name} - Consultant Laparoscopic & General Surgeon at Suraksha Hospital, Khammam`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@DrMedaSurgical",
    },
  };
}
