import type { Metadata } from "next";
import { LandingPage, type LandingConfig } from "@/components/site/landing-page";

export const metadata: Metadata = {
  title: "Epilepsy Treatment in Khammam — Seizure Specialist",
  description:
    "Epilepsy and seizure treatment in Khammam by Dr. GRK Reddy, MCh Neurosurgery. Diagnosis, medication management and surgical evaluation. Call 7075 447 449.",
  robots: { index: false, follow: false },
};

const config: LandingConfig = {
  eyebrow: "Epilepsy & Seizure Care",
  headline: (
    <>
      Epilepsy is treatable. Get the{" "}
      <span className="text-accent">right diagnosis</span>
    </>
  ),
  subhead:
    "Blackouts, staring episodes or sudden jerks? Epilepsy is far more common than most people realise — and most patients achieve good seizure control with the right treatment plan.",
  image: {
    src: "/images/creatives/epilepsy-signs.jpg",
    alt: "Epilepsy signs and symptoms — brief confusion, involuntary jerks, fixed gaze, loss of awareness and emotional changes",
  },
  benefits: [
    {
      title: "Accurate diagnosis first",
      body: "Not every blackout is epilepsy, and not every seizure looks dramatic. Correct classification determines the right treatment.",
    },
    {
      title: "Medication optimisation",
      body: "Most people are well controlled on medication. The aim is the fewest seizures with the fewest side effects.",
    },
    {
      title: "Surgical evaluation available",
      body: "Where seizures persist despite properly trialled medication, an MCh-qualified neurosurgeon can assess whether surgery is an option.",
    },
  ],
};

export default function Page() {
  return <LandingPage config={config} />;
}
