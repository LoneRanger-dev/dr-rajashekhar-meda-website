import type { Metadata } from "next";
import { LandingPage, type LandingConfig } from "@/components/site/landing-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Spine Surgeon in Khammam — Minimally Invasive Spine Surgery",
  description:
    "Suffering from back pain, herniated disc or spinal stenosis? Dr. GRK Reddy, MCh Neurosurgery, offers minimally invasive spine surgery in Khammam. Call 7075 447 449.",
  robots: { index: false, follow: false },
  path: "/lp/spine-surgery-khammam",
});

const config: LandingConfig = {
  eyebrow: "Minimally Invasive Spine Surgery",
  headline: (
    <>
      Back pain that won&apos;t go away? See Khammam&apos;s{" "}
      <span className="text-accent">spine specialist</span>
    </>
  ),
  subhead:
    "Herniated disc, spinal stenosis or spinal deformity — assessed and treated by an MCh-qualified neurosurgeon using minimally invasive techniques wherever possible.",
  image: {
    src: "/images/creatives/spine-conditions.jpg",
    alt: "Spine conditions and treatment — specialised care for herniated discs, spinal stenosis and spinal deformities",
  },
  benefits: [
    {
      title: "Minimally invasive approach",
      body: "Smaller incisions, less muscle disruption and typically a shorter hospital stay than open surgery — where your condition allows it.",
    },
    {
      title: "Super-specialty qualified",
      body: "MBBS, MS, MCh (Neurosurgery) and Assistant Professor at Mamata Medical College — surgery is not delegated to a generalist.",
    },
    {
      title: "Surgery is not the first answer",
      body: "Conservative management is considered first where appropriate. You will be told honestly if you do not need an operation.",
    },
  ],
};

export default function Page() {
  return <LandingPage config={config} />;
}
