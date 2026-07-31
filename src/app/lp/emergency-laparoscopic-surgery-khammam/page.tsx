import type { Metadata } from "next";
import { LandingPage, type LandingConfig } from "@/components/site/landing-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "24/7 Emergency Laparoscopic & Surgical Care in Khammam",
  description:
    "Acute abdominal pain or surgical emergency in Khammam? Dr. Rajashekhar Meda is available 24/7 at Suraksha Hospital with advanced ICU support. Call 7075 447 449 now.",
  noIndex: true,
  path: "/lp/emergency-laparoscopic-surgery-khammam",
});

const config: LandingConfig = {
  eyebrow: "24/7 Emergency Surgical Trauma Care",
  headline: (
    <>
      Surgical emergency? A surgeon is{" "}
      <span className="text-emergency">available right now</span>
    </>
  ),
  subhead:
    "Suraksha Hospital, Khammam has Dr. Rajashekhar Meda available 24 hours a day for acute abdominal pain, appendicitis, strangulated hernia, and trauma emergencies — backed by an advanced ICU.",
  urgent: true,
  image: {
    src: "/images/doctor/dr-rajashekhar-scrubs.jpg",
    alt: "Suraksha Hospital Khammam — 24/7 trauma and emergency surgical care with advanced ICU",
  },
  benefits: [
    {
      title: "Call at any hour",
      body: "Emergencies do not keep clinic hours. Emergency surgical care is reachable 24/7, including nights and holidays.",
    },
    {
      title: "Advanced ICU on site",
      body: "Critical care support in the same hospital — seamless transition from emergency room to theatre and ICU.",
    },
    {
      title: "Rapid surgical response",
      body: "Acute abdominal conditions like appendicitis and strangulated hernias require immediate intervention. Call right away.",
    },
  ],
};

export default function Page() {
  return <LandingPage config={config} />;
}
