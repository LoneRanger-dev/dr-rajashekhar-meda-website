import type { Metadata } from "next";
import "./globals.css";
import { figtree, notoSans } from "@/lib/fonts";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/site/json-ld";
import { Analytics } from "@/components/site/analytics";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "";

const TITLE = `${site.doctor.name} — Laparoscopic & General Surgeon, Khammam`;
const DESCRIPTION =
  "Consultant Laparoscopic, Endoscopic & Laser Surgeon at Suraksha Hospital, Khammam. MBBS, M.S. (General Surgery). Minimally invasive keyhole surgery, hernia repair, appendix, gallbladder, laser treatment, and 24/7 trauma emergency care.";
const OG_DESCRIPTION =
  "Laparoscopic & General Surgeon at Suraksha Hospital, Khammam. 24/7 emergency surgical care, keyhole hernia & appendix surgery. Call 7075 447 449.";

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
    "laparoscopic surgeon Khammam",
    "general surgeon Khammam",
    "hernia repair Khammam",
    "appendix surgery Khammam",
    "gallbladder surgery Khammam",
    "laser surgeon Khammam",
    "varicose veins laser treatment Khammam",
    "best general surgeon in Khammam",
    "Suraksha Hospital Khammam",
    "Dr. Rajashekhar Meda",
    "Dr. Meda Rajashekhar",
    "Dr. Rajashekhar surgeon Khammam",
    "24/7 emergency surgeon Khammam",
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
        url: "/images/doctor/dr-rajashekhar-hero.jpg",
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
    images: ["/images/doctor/dr-rajashekhar-hero.jpg"],
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
  manifest: "/manifest.webmanifest",
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
  formatDetection: { telephone: true, address: true, email: false },
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
      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
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
