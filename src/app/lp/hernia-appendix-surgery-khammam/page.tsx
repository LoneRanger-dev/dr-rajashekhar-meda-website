import type { Metadata } from "next";
import { LandingPage, type LandingConfig } from "@/components/site/landing-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Laparoscopic Hernia & Appendix Surgery in Khammam — Dr. Rajashekhar Meda",
  description:
    "Advanced keyhole hernia repair and appendix removal by Dr. Rajashekhar Meda (MBBS, DNB) at Suraksha Hospital, Khammam. Minimal pain and rapid recovery.",
  noIndex: true,
  path: "/lp/hernia-appendix-surgery-khammam",
});

const config: LandingConfig = {
  eyebrow: "Advanced Keyhole Surgery",
  headline: (
    <>
      Hernia or appendix trouble? <span className="text-accent">Keyhole surgery</span> brings fast relief
    </>
  ),
  subhead:
    "Dr. Rajashekhar Meda offers modern 3D mesh laparoscopic hernia repair and keyhole appendectomy at Suraksha Hospital, Khammam.",
  image: {
    src: "/images/doctor/dr-rajashekhar-poster.jpg",
    alt: "Laparoscopic Hernia and Appendix Surgery by Dr. Rajashekhar Meda in Khammam",
  },
  benefits: [
    {
      title: "Minimally invasive keyhole cuts",
      body: "Tiny incisions (5mm-10mm) resulting in significantly less post-operative pain and hidden scars.",
    },
    {
      title: "Zero-recurrence hernia repair",
      body: "3D biocompatible mesh reinforcement provides permanent strength to abdominal wall weakness.",
    },
    {
      title: "Same-day / 24-hour discharge",
      body: "Walk home within 24 hours and resume light daily activities within 3 to 5 days.",
    },
  ],
};

export default function Page() {
  return <LandingPage config={config} />;
}
