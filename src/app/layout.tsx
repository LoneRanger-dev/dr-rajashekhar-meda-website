import type { Metadata, Viewport } from "next";
import { Lora, Raleway } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/site/json-ld";
import { Analytics } from "@/components/site/analytics";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "";

/* UI-UX-Pro-Max: Typography #8 — "Wellness Calm" (Serif + Sans)
   Best For: Health apps, wellness, spa, meditation, organic brands
   Lora: organic curves → conveys medical trust + warmth (headings)
   Raleway: elegant simplicity → approachable, professional (body) */
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0B192C" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.doctor.name} | ${site.doctor.title} | Khammam`,
    template: `%s | ${site.doctor.name}`,
  },
  description: `${site.doctor.name} — ${site.doctor.credentials}. Advanced laparoscopic, endoscopic & laser surgery at ${site.hospital.name}, Khammam. Hernia repair, gallbladder, appendix, varicose veins & 24/7 emergency care.`,
  keywords: [
    "Dr Rajashekhar Meda",
    "Laparoscopic Surgeon Khammam",
    "Suraksha Hospital Khammam",
    "General Surgeon Khammam",
    "Hernia Surgery Khammam",
    "Gallbladder Surgery Khammam",
    "Laser Varicose Veins Khammam",
    "Appendix Surgery Khammam",
  ],
  authors: [{ name: site.doctor.name }],
  creator: site.doctor.name,
  publisher: site.hospital.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.domain,
    siteName: site.doctor.name,
    title: `${site.doctor.name} | ${site.doctor.title} | Khammam`,
    description: `Consultant Laparoscopic & General Surgeon at ${site.hospital.name}, Khammam. Minimal incision, fast recovery, 24/7 emergency care.`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${site.doctor.name} — Suraksha Hospital Khammam`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.doctor.name} | ${site.doctor.title}`,
    description: `Advanced Laparoscopic & General Surgery at ${site.hospital.name}, Khammam.`,
    images: ["/og-image.png"],
  },
  robots: {
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
      className={`${lora.variable} ${raleway.variable} h-full antialiased`}
    >
      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
      <body className="min-h-full flex flex-col w-full max-w-full">
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
