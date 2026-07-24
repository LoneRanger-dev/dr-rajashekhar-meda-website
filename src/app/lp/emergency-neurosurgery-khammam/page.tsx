import type { Metadata } from "next";
import { LandingPage, type LandingConfig } from "@/components/site/landing-page";

export const metadata: Metadata = {
  title: "24/7 Emergency Neurosurgeon in Khammam — Head Injury & Trauma",
  description:
    "Head injury or neurological emergency in Khammam? A neurosurgeon is available 24/7 at Suraksha Hospital with advanced ICU support. Call 7075 447 449 now.",
  robots: { index: false, follow: false },
};

const config: LandingConfig = {
  eyebrow: "24/7 Emergency Neurosurgery",
  headline: (
    <>
      Head injury? A neurosurgeon is{" "}
      <span className="text-emergency">available right now</span>
    </>
  ),
  subhead:
    "Suraksha Hospital, Khammam has a neurosurgeon available 24 hours a day for head injury, spinal trauma and acute neurological emergencies — backed by an advanced ICU on site.",
  urgent: true,
  image: {
    src: "/images/creatives/hospital-intro-banner.jpg",
    alt: "Suraksha Hospital Khammam — 24/7 trauma and emergency care with advanced ICU",
  },
  benefits: [
    {
      title: "Call at any hour",
      body: "Emergencies do not keep clinic hours. A neurosurgeon is reachable 24/7, including nights, Sundays and public holidays.",
    },
    {
      title: "Advanced ICU on site",
      body: "Critical care support in the same hospital — no transfer needed between the operating theatre and intensive care.",
    },
    {
      title: "Time matters in head injury",
      body: "Bleeding inside the skull can develop over hours. If someone lost consciousness or is getting drowsier, call immediately.",
    },
  ],
};

export default function Page() {
  return <LandingPage config={config} />;
}
