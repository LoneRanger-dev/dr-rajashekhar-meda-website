/**
 * SINGLE SOURCE OF TRUTH for all clinic and doctor information.
 *
 * Dr. Rajashekhar Meda — M.S. General Surgery
 * Consultant Laparoscopic, Endoscopic & Laser Surgeon
 * Suraksha Hospital, Khammam
 */

import { facilityImages } from "./siteAssets";
import { detailedConditions } from "./conditionsData";

export const CONFIRM = "[CONFIRM WITH CLIENT]" as const;

export const site = {
  domain: "https://drrajashekharmeda.com",
  doctor: {
    name: "Dr. Rajashekhar Meda",
    nameAlt: "Dr. Meda Rajashekhar",
    nameTelugu: "డా॥ మేడ రాజశేఖర్",
    headerSubtitle: "MBBS, DNB • General & Laparoscopic Surgeon",
    credentials: "MBBS, DNB",
    title: "Consultant Laparoscopic, Endoscopic & General Surgeon",
    titleTelugu: "జనరల్, ఎండోస్కోపిక్, లాప్రోస్కోపిక్ లేజర్ సర్జన్",
    academicRole:
      "10+ Years of Surgical Excellence | Consultant General & Laparoscopic Surgeon",
    tagline: "Advanced Laparoscopic Surgery - Minimally Invasive, Maximum Relief!",
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
    email: "rajalapsurgeon@gmail.com",
    emailHref: "mailto:rajalapsurgeon@gmail.com",
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

export interface ConditionItem {
  slug: string;
  name: string;
  short: string;
  summary: string;
}

export const conditions: ConditionItem[] = detailedConditions.map((c) => ({
  slug: c.slug,
  name: c.name,
  short: c.shortName,
  summary: c.summary,
}));

export const navigation = [
  { href: "/#hero", label: "Home", short: "Home" },
  { href: "/#about", label: "About Dr. Rajashekhar Meda", short: "About" },
  { href: "/#services", label: "Services & Surgeries", short: "Services" },
  { href: "/#reviews", label: "Patient Reviews", short: "Reviews" },
  { href: "/#contact", label: "Contact", short: "Contact" },
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
