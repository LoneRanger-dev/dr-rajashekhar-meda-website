import type { Metadata } from "next";
import { LandingPage, type LandingConfig } from "@/components/site/landing-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Gallbladder Stone & Laser Surgery in Khammam — Dr. Rajashekhar Meda",
  description:
    "Laparoscopic gallbladder stone removal (Cholecystectomy) & Endovenous laser treatment for varicose veins by Dr. Rajashekhar Meda at Suraksha Hospital, Khammam.",
  noIndex: true,
  path: "/lp/gallbladder-laser-surgery-khammam",
});

const config: LandingConfig = {
  eyebrow: "Gallbladder & Laser Treatments",
  headline: (
    <>
      Gallbladder stone pain or varicose veins? <span className="text-accent">Laser & Keyhole care</span>
    </>
  ),
  subhead:
    "Suraksha Hospital, Khammam provides high-precision laparoscopic cholecystectomy and endovenous laser ablation by Dr. Rajashekhar Meda (M.S. General Surgery).",
  image: {
    src: "/images/doctor/dr-rajashekhar-hero.jpg",
    alt: "Laparoscopic Gallbladder & Laser Surgery by Dr. Rajashekhar Meda",
  },
  benefits: [
    {
      title: "Painless laser varicose vein ablation",
      body: "Modern endovenous laser therapy seals leg veins internally without surgical cuts or hospital stays.",
    },
    {
      title: "Gold-standard gallbladder surgery",
      body: "Laparoscopic removal of gallstones eliminates acute abdominal pain and digestive complications.",
    },
    {
      title: "10+ years surgical expertise",
      body: "Consultant surgeon Dr. Rajashekhar Meda ensures personal care and high safety standards.",
    },
  ],
};

export default function Page() {
  return <LandingPage config={config} />;
}
