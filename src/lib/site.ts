/**
 * SINGLE SOURCE OF TRUTH for all clinic and doctor information.
 *
 * Dr. Rajashekhar Meda — M.S. General Surgery
 * Consultant Laparoscopic, Endoscopic & Laser Surgeon
 * Suraksha Hospital, Khammam
 */

import { facilityImages } from "./siteAssets";

export const CONFIRM = "[CONFIRM WITH CLIENT]" as const;

export const site = {
  domain: "https://drrajashekharmeda.com",
  doctor: {
    name: "Dr. Rajashekhar Meda",
    nameAlt: "Dr. Meda Rajashekhar",
    nameTelugu: "డా॥ మేడ రాజశేఖర్",
    credentials: "MBBS, M.S. (General Surgery)",
    title: "Consultant Laparoscopic, Endoscopic & Laser Surgeon",
    titleTelugu: "జనరల్, ఎండోస్కోపిక్, లాప్రోస్కోపిక్ లేజర్ సర్జన్",
    academicRole:
      "10+ Years of Surgical Excellence | Consultant General & Laparoscopic Surgeon",
    tagline: "Advanced Laparoscopic Surgery — Minimally Invasive, Maximum Relief!",
  },
  hospital: {
    name: "Suraksha Hospital",
    nameTelugu: "సురక్ష హాస్పిటల్",
    descriptor: "Emergency · Trauma · Multi-Specialty",
    street: "Old Priyadarshini College Building, Nehru Nagar, near Karnataka Bank, Wyra Road",
    city: "Khammam",
    state: "Telangana",
    postalCode: "507002",
    country: "IN",
    addressFull:
      "Old Priyadarshini College Building, Nehru Nagar, near Karnataka Bank, Wyra Road, Khammam, Telangana 507002",
    exteriorImage: facilityImages.exterior.src,
    maps: {
      directionsUrl: "https://maps.app.goo.gl/Dnftg7odqrb4Epb79",
      embedUrl:
        "https://www.google.com/maps?q=Suraksha+Hospital%2C+Old+Priyadarshini+College%2C+Nehru+Nagar%2C+Khammam%2C+Telangana+507002&output=embed",
    },
    geo: { lat: 17.2473, lng: 80.1514 },
  },
  contact: {
    phone: "7075447449",
    phoneDisplay: "7075 447 449",
    phoneSecondaryDisplay: "90590 33575",
    phoneHref: "tel:+917075447449",
    whatsapp: "918128126849",
    email: "dr.rajashekharmeda@gmail.com",
    emailHref: "mailto:dr.rajashekharmeda@gmail.com",
  },
  hours: {
    weekday: "Monday – Saturday · 10:00 AM – 8:00 PM",
    sunday: "Sunday · 10:00 AM – 2:00 PM",
    emergency: "24/7 Emergency & Surgical Critical Care Availability",
    spec: [
      { days: ["Mo", "Tu", "We", "Th", "Fr", "Sa"], opens: "10:00", closes: "20:00" },
      { days: ["Su"], opens: "10:00", closes: "14:00" },
    ],
  },
  pillars: [
    { title: "Advanced Keyhole Laparoscopic Surgery", icon: "activity" },
    { title: "24/7 Surgical Emergency & Critical Care", icon: "ambulance" },
    { title: "10+ Years Experience & State-of-the-Art Care", icon: "hospital" },
  ],
} as const;

export type ConditionSlug =
  | "laparoscopic-surgery"
  | "hernia-repair"
  | "gallbladder-appendix"
  | "laser-varicose-veins";

export interface Condition {
  slug: ConditionSlug;
  name: string;
  short: string;
  icon: "spine" | "brain" | "activity" | "scan";
  summary: string;
  treats: string[];
  whenToSeek: string[];
  approach: string[];
}

export const conditions: Condition[] = [
  {
    slug: "laparoscopic-surgery",
    name: "Advanced Laparoscopic & Keyhole Surgery",
    short: "Laparoscopic Surgery",
    icon: "scan",
    summary:
      "Minimally invasive keyhole surgical techniques providing smaller incisions, significantly less pain, minimal scarring, and rapid recovery.",
    treats: [
      "Diagnostic Laparoscopy",
      "Laparoscopic Colectomy & Intestinal Surgery",
      "Laparoscopic Splenectomy",
      "Laparoscopic Pancreatectomy",
      "Abdominal Wall Reconstruction",
      "Bariatric & Metabolic Surgeries",
    ],
    whenToSeek: [
      "Unexplained acute or chronic abdominal pain",
      "Recommendation for abdominal surgical evaluation",
      "Preference for keyhole surgery with minimal downtime",
      "Desire for reduced post-operative hospital stay",
    ],
    approach: [
      "Comprehensive pre-surgical clinical evaluation & imaging review",
      "State-of-the-art HD laparoscopic visualization systems",
      "Ultra-fine precision instruments ensuring minimal tissue trauma",
      "Accelerated recovery protocol and personal post-op care",
    ],
  },
  {
    slug: "hernia-repair",
    name: "Laparoscopic Hernia Repair",
    short: "Hernia Repair",
    icon: "activity",
    summary:
      "Advanced 3D mesh laparoscopic repair for Inguinal, Umbilical, Incisional, and Ventral hernias with minimal recurrence risk.",
    treats: [
      "Inguinal Hernia (Groin hernia)",
      "Umbilical & Paraumbilical Hernia",
      "Incisional Hernia (Post-surgical)",
      "Ventral & Epigastric Hernia",
      "Recurrent Hernia Repairs",
      "Femoral Hernia",
    ],
    whenToSeek: [
      "Visible bulge or lump in the groin or abdominal wall",
      "Discomfort, dragging pain, or heaviness while standing or coughing",
      "Pain or enlargement of an existing swelling",
      "Sudden severe pain or inability to push bulge back in (Emergency)",
    ],
    approach: [
      "Precision keyhole dissection under direct HD endoscopic view",
      "Bio-compatible tension-free prosthetic mesh reinforcement",
      "Substantially reduced postoperative pain compared to open repair",
      "Rapid return to work and daily active lifestyle within days",
    ],
  },
  {
    slug: "gallbladder-appendix",
    name: "Gallbladder & Appendix Surgery",
    short: "Gallbladder & Appendix",
    icon: "brain",
    summary:
      "Specialized emergency and elective keyhole surgeries: Laparoscopic Cholecystectomy for gallstones and Laparoscopic Appendectomy for acute appendicitis.",
    treats: [
      "Gallstones (Cholelithiasis)",
      "Gallbladder Inflammation (Cholecystitis)",
      "Acute & Chronic Appendicitis",
      "Biliary Sludge & Polyps",
      "Complicated Appendiceal Abscess",
      "Emergency Abdominal Conditions",
    ],
    whenToSeek: [
      "Sharp pain in upper right abdomen radiating to back or shoulder",
      "Nausea, vomiting, or bloating after fatty meals",
      "Sudden intense pain around belly button moving to lower right abdomen",
      "Fever with severe abdominal tenderness",
    ],
    approach: [
      "24/7 Emergency surgical admission and prompt diagnostic ultrasound/CT",
      "Single or mini-port laparoscopic removal techniques",
      "High-precision cystic duct and vessel clipping",
      "Overnight or 24-hour hospital discharge for most patients",
    ],
  },
  {
    slug: "laser-varicose-veins",
    name: "Laser Surgery, Varicose Veins & Tumors",
    short: "Laser & Tumor Surgery",
    icon: "spine",
    summary:
      "Modern painless laser treatments for varicose veins, laser proctology, and precise surgical excision of benign and malignant tumors.",
    treats: [
      "Varicose Veins (Endovenous Laser Ablation)",
      "Benign & Malignant Tumor Excision",
      "Soft Tissue Tumors & Cysts",
      "Laser Treatment for Piles / Fissure / Fistula",
      "Skin & Subcutaneous Swellings (Lipoma, Sebaceous Cyst)",
      "Emergency Wound & Trauma Reconstruction",
    ],
    whenToSeek: [
      "Swollen, twisted, or painful veins in legs with discoloration or ulcers",
      "Newly noticed lump, tumor, or rapidly enlarging swelling",
      "Persistent pain or bleeding during bowel movements",
      "Surgical recommendation for tissue biopsy or excision",
    ],
    approach: [
      "Targeted laser fiber therapy requiring no large surgical cuts",
      "Day-care procedure with immediate patient mobility",
      "Cosmetically superior outcomes with no scar formation",
      "Complete histopathological evaluation of excised tumors",
    ],
  },
];

export const navigation = [
  { href: "/", label: "Home", short: "Home" },
  { href: "/about", label: "About Dr. Rajashekhar Meda", short: "About" },
  { href: "/conditions", label: "Surgeries & Services", short: "Services" },
  { href: "/facilities", label: "Hospital Facilities", short: "Facilities" },
  { href: "/reviews", label: "Patient Reviews", short: "Reviews" },
  { href: "/blog", label: "Health Education", short: "Education" },
  { href: "/contact", label: "Contact", short: "Contact" },
] as const;

export const testimonials: {
  quote: string;
  name: string;
  condition: string;
  consentOnFile: boolean;
}[] = [];

export const awards: { title: string; year?: string }[] = [];

export const whatsappUrl = (
  message = "Hello Dr. Rajashekhar Meda, I would like to book a consultation for Laparoscopic / General Surgery."
) => `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
