/**
 * SINGLE SOURCE OF TRUTH for all clinic information.
 *
 * Every page reads from this file. To update the phone number, timings,
 * address or add a testimonial, edit here — nothing else needs to change.
 * Items marked CONFIRM_WITH_CLIENT are unverified placeholders and are
 * rendered with a visible marker until the clinic supplies real data.
 */

export const CONFIRM = "[CONFIRM WITH CLIENT]" as const;

export const site = {
  domain: "https://drramakrishnareddy.com", // CONFIRM_WITH_CLIENT — final domain
  doctor: {
    name: "Dr. Gade Ramakrishna Reddy",
    nameAlt: "Dr. Ramakrishna Reddy Gade",
    nameTelugu: "డా. గాదె రామకృష్ణారెడ్డి",
    credentials: "MBBS, MS (General Surgery), MCh (Neurosurgery)",
    title: "Consultant Brain & Spine Surgeon",
    titleTelugu: "న్యూరో సర్జన్",
    academicRole:
      "Assistant Professor, Department of Neurosurgery, Mamata Medical College",
    tagline: "Your Partner in Brain & Spine Health",
  },
  hospital: {
    name: "Suraksha Hospital",
    nameTelugu: "సురక్ష హాస్పిటల్",
    descriptor: "Emergency · Trauma · Multi-Specialty",
    street: "Old Priyadarshini College Building, Nehru Nagar, near Karnataka Bank",
    city: "Khammam",
    state: "Telangana",
    postalCode: "507002",
    country: "IN",
    addressFull:
      "Old Priyadarshini College Building, Nehru Nagar, near Karnataka Bank, Khammam, Telangana 507002",
    exteriorImage: "/images/facility/hospital-exterior.jpg",
    // Google Maps — from the clinic's Google Business Profile pin.
    maps: {
      directionsUrl: "https://maps.app.goo.gl/Dnftg7odqrb4Epb79",
      embedUrl:
        "https://www.google.com/maps?q=Suraksha+Hospital%2C+Old+Priyadarshini+College%2C+Nehru+Nagar%2C+Khammam%2C+Telangana+507002&output=embed",
    },
    // CONFIRM_WITH_CLIENT — approximate coordinates; verify exact pin against GBP.
    geo: { lat: 17.2473, lng: 80.1514 },
  },
  contact: {
    phone: "7075447449",
    phoneDisplay: "7075 447 449",
    phoneHref: "tel:+917075447449",
    whatsapp: "917075447449", // CONFIRM_WITH_CLIENT — same number or separate Business line
    email: "", // CONFIRM_WITH_CLIENT
  },
  hours: {
    weekday: "Monday – Saturday · 10:00 AM – 8:00 PM",
    sunday: "Sunday · 10:00 AM – 2:00 PM",
    emergency: "24/7 neurosurgeon availability for emergencies",
    // machine-readable for schema.org
    spec: [
      { days: ["Mo", "Tu", "We", "Th", "Fr", "Sa"], opens: "10:00", closes: "20:00" },
      { days: ["Su"], opens: "10:00", closes: "14:00" },
    ],
  },
  pillars: [
    { title: "Expert Brain & Spine Surgeries", icon: "brain" },
    { title: "24/7 Trauma & Emergency Care", icon: "ambulance" },
    { title: "Advanced ICU & State-of-the-Art Treatment", icon: "hospital" },
  ],
} as const;

export type ConditionSlug =
  | "spine-surgery"
  | "brain-trauma"
  | "epilepsy"
  | "minimally-invasive-spine-surgery";

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

/**
 * Condition content. Written from the expertise list in the clinic's own
 * notes and print creatives — deliberately educational, never diagnostic.
 */
export const conditions: Condition[] = [
  {
    slug: "spine-surgery",
    name: "Spine Conditions & Surgery",
    short: "Spine Surgery",
    icon: "spine",
    summary:
      "Specialised care for herniated discs, spinal stenosis and spinal deformities — from conservative management through to corrective surgery.",
    treats: [
      "Herniated / slipped disc",
      "Spinal stenosis",
      "Spinal deformities (scoliosis, kyphosis)",
      "Degenerative disc disease",
      "Spinal trauma and fractures",
      "Sciatica and nerve compression",
    ],
    whenToSeek: [
      "Back or neck pain lasting more than a few weeks",
      "Pain radiating into an arm or leg",
      "Numbness, tingling or weakness in the limbs",
      "Difficulty walking or loss of balance",
    ],
    approach: [
      "Clinical assessment and imaging review",
      "Conservative management considered first where appropriate",
      "Minimally invasive techniques used wherever the condition allows",
      "Post-operative rehabilitation guidance",
    ],
  },
  {
    slug: "brain-trauma",
    name: "Brain Surgery & Trauma Care",
    short: "Brain & Trauma",
    icon: "brain",
    summary:
      "Round-the-clock neurosurgical response for head injury and brain conditions, supported by Suraksha Hospital's advanced ICU.",
    treats: [
      "Head injury and traumatic brain injury",
      "Intracranial haemorrhage",
      "Brain tumours",
      "Hydrocephalus",
      "Skull fractures",
      "Endoscopic brain surgery",
    ],
    whenToSeek: [
      "Any head injury with loss of consciousness",
      "Persistent or worsening headache after a fall or accident",
      "Repeated vomiting, confusion or drowsiness following injury",
      "Sudden weakness, slurred speech or vision change",
    ],
    approach: [
      "Immediate assessment — a neurosurgeon is available 24/7",
      "Advanced ICU support on site",
      "Endoscopic and microsurgical techniques",
      "Family kept informed throughout treatment",
    ],
  },
  {
    slug: "epilepsy",
    name: "Epilepsy & Seizure Management",
    short: "Epilepsy Care",
    icon: "activity",
    summary:
      "Diagnosis and long-term management of epilepsy and seizure disorders, with surgical evaluation where medication alone is not enough.",
    treats: [
      "Newly diagnosed epilepsy",
      "Drug-resistant epilepsy",
      "Seizure disorders in adults",
      "Surgical evaluation for epilepsy",
    ],
    whenToSeek: [
      "Brief confusion or disorientation",
      "Sudden, involuntary jerks or spasms in the arms and legs",
      "Fixed gaze or staring episodes",
      "Loss of awareness or blackouts",
      "Emotional changes such as unexplained fear or worry",
    ],
    approach: [
      "Detailed history and seizure classification",
      "Medication optimisation and monitoring",
      "Surgical assessment for drug-resistant cases",
      "Ongoing follow-up and lifestyle guidance",
    ],
  },
  {
    slug: "minimally-invasive-spine-surgery",
    name: "Minimally Invasive Spine Surgery (MISS)",
    short: "MISS",
    icon: "scan",
    summary:
      "Spine surgery through smaller incisions — designed to reduce tissue damage, shorten hospital stay and speed up return to daily activity.",
    treats: [
      "Herniated disc (microdiscectomy)",
      "Spinal stenosis decompression",
      "Selected spinal fusions",
      "Endoscopic spine procedures",
    ],
    whenToSeek: [
      "You have been advised spine surgery and want to understand your options",
      "You are concerned about recovery time from open surgery",
      "Conservative treatment has not relieved your symptoms",
    ],
    approach: [
      "Smaller incisions and less muscle disruption",
      "Typically reduced blood loss compared with open surgery",
      "Often a shorter hospital stay",
      "Suitability is assessed case by case — not every condition qualifies",
    ],
  },
];

/**
 * `label` is the full descriptive name (used in the footer and mobile menu).
 * `short` is used in the desktop header — the full labels are too wide to fit
 * alongside the logo and the phone button, and pushed the call CTA off-screen.
 */
export const navigation = [
  { href: "/", label: "Home", short: "Home" },
  { href: "/about", label: "About Dr. Reddy", short: "About" },
  { href: "/conditions", label: "Conditions & Treatments", short: "Conditions" },
  { href: "/facilities", label: "Hospital Facilities", short: "Facilities" },
  { href: "/reviews", label: "Patient Reviews", short: "Reviews" },
  { href: "/blog", label: "Health Education", short: "Education" },
  { href: "/contact", label: "Contact", short: "Contact" },
] as const;

/**
 * Testimonials are intentionally EMPTY.
 * BUILD.md requires written patient consent before publishing any review,
 * and inventing them would be both unethical and a compliance risk.
 * Add entries here once the clinic supplies consented testimonials.
 */
export const testimonials: {
  quote: string;
  name: string;
  condition: string;
  consentOnFile: boolean;
}[] = [];

/** Awards / publications — none verified in the source material yet. */
export const awards: { title: string; year?: string }[] = [];

export const whatsappUrl = (message = "Hello, I would like to book an appointment with Dr. Reddy.") =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
