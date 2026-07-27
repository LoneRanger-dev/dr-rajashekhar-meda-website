import type { Metadata } from "next";
import "./globals.css";
import { figtree, notoSans } from "@/lib/fonts";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/site/json-ld";
import { Analytics } from "@/components/site/analytics";
import { GoogleTagManager } from "@next/third-parties/google";

const TITLE = `${site.doctor.name} — Brain & Spine Surgeon, Khammam`;
const DESCRIPTION =
  "Consultant Brain & Spine Surgeon at Suraksha Hospital, Khammam. MBBS, MS, MCh (Neurosurgery). Minimally invasive spine surgery, endoscopic neurosurgery, epilepsy care and 24/7 trauma response.";
const OG_DESCRIPTION =
  "MCh Neurosurgeon at Suraksha Hospital, Khammam. 24/7 trauma care, minimally invasive spine surgery and epilepsy treatment. Call 7075 447 449.";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: TITLE,
    template: `%s | ${site.doctor.name}`,
  },
  description: DESCRIPTION,
  applicationName: `${site.doctor.name} — ${site.hospital.name}`,
  authors: [{ name: site.doctor.name }],
  creator: site.doctor.name,
  publisher: site.hospital.name,
  category: "health",
  keywords: [
    "neurosurgeon Khammam",
    "brain surgeon Khammam",
    "spine surgeon Khammam",
    "best neurosurgeon in Khammam",
    "minimally invasive spine surgery Khammam",
    "herniated disc treatment Khammam",
    "epilepsy treatment Khammam",
    "24/7 emergency neurosurgeon Khammam",
    "Suraksha Hospital Khammam",
    "Dr. GRK Reddy",
    "Dr. GRK Reddy neurosurgeon",
    "Dr. Gade Ramakrishna Reddy",
    "Consultant Neurosurgeon Khammam",
    "Brain & Spine Specialist Khammam",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.domain,
    siteName: `${site.doctor.name} — ${site.doctor.title}`,
    title: TITLE,
    description: OG_DESCRIPTION,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: `${site.doctor.name}, ${site.doctor.title} at ${site.hospital.name}, Khammam`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: OG_DESCRIPTION,
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  formatDetection: { telephone: true, address: true, email: false },
  // verification: { google: "..." }, // add the GSC token when the domain is verified
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${notoSans.variable} h-full antialiased`}
    >
      <GoogleTagManager gtmId="GTM-WCMMQRD6" />
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-3 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-3 focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        {children}
        <JsonLd />
        <Analytics />
      </body>
    </html>
  );
}
