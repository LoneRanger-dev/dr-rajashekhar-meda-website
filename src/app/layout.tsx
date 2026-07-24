import type { Metadata } from "next";
import "./globals.css";
import { figtree, notoSans } from "@/lib/fonts";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/site/json-ld";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.doctor.name} — Brain & Spine Surgeon, Khammam`,
    template: `%s | ${site.doctor.name}`,
  },
  description:
    "Consultant Brain & Spine Surgeon at Suraksha Hospital, Khammam. MBBS, MS, MCh (Neurosurgery). Minimally invasive spine surgery, endoscopic neurosurgery, epilepsy and 24/7 trauma care.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: `${site.doctor.name} — ${site.doctor.title}`,
    title: `${site.doctor.name} — Brain & Spine Surgeon, Khammam`,
    description:
      "MCh Neurosurgeon at Suraksha Hospital, Khammam. 24/7 trauma care, minimally invasive spine surgery and epilepsy treatment.",
  },
  robots: { index: true, follow: true },
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
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-3 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-3 focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
