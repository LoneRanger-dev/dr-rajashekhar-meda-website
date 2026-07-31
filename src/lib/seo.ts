import { Metadata } from "next";
import { site } from "@/lib/site";

export function buildMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${site.domain}${path}`;
  const fullTitle = `${title} | ${site.doctor.name} - Suraksha Hospital Khammam`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(site.domain),
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description,
      siteName: `${site.doctor.name} - ${site.hospital.name}`,
      images: [
        {
          url: "/images/doctor/dr-rajashekhar-hero.jpg",
          width: 1200,
          height: 630,
          alt: `${site.doctor.name} - Consultant Laparoscopic & General Surgeon`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/images/doctor/dr-rajashekhar-hero.jpg"],
    },
  };
}
