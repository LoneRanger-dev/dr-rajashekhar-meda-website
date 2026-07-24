import type { Metadata } from "next";
import { Figtree, Noto_Sans, Noto_Sans_Telugu, Geist_Mono } from "next/font/google";
import "./globals.css";

/* Display face — confident geometric sans for headings */
const figtree = Figtree({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/* Body face — high-legibility humanist sans */
const notoSans = Noto_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/* Telugu script face — the clinic's creatives are bilingual */
const notoSansTelugu = Noto_Sans_Telugu({
  variable: "--font-telugu-sans",
  subsets: ["telugu"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Gade Ramakrishna Reddy — Brain & Spine Surgeon, Khammam",
  description:
    "Consultant Brain & Spine Surgeon at Suraksha Hospital, Khammam. MBBS, MS, MCh (Neurosurgery). Minimally invasive spine surgery, endoscopic neurosurgery, epilepsy and 24/7 trauma care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${notoSans.variable} ${notoSansTelugu.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
