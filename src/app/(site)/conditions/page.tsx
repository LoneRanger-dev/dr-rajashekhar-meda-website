import type { Metadata } from "next";
import { ConditionsModule } from "@/components/site/conditions-module";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/site/json-ld";

export const metadata: Metadata = buildMetadata({
  title: "Surgeries & Conditions — Patient Education & Surgical Care in Khammam",
  description: "Comprehensive patient education and surgical treatment guides for Laparoscopic Hernia Repair, Gallstones, Appendicitis, Laser Varicose Veins, Laser Piles, Fistula, Thyroid & Emergency Trauma Care by Dr. Rajashekhar Meda at Suraksha Hospital, Khammam.",
  path: "/conditions",
});

export default function ConditionsPage() {
  return (
    <>
      <JsonLd />
      <ConditionsModule />
    </>
  );
}
