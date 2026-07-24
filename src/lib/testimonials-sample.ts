/**
 * SAMPLE testimonials — demonstration content only.
 *
 * ⚠️ These are FICTIONAL placeholders written to show the clinic what the
 * reviews section will look like. They are NOT real patients and must never
 * be presented as genuine. Every card renders a visible "Sample" badge and
 * the section carries a disclaimer.
 *
 * When real testimonials arrive (with written patient consent), add them to
 * `testimonials` in `src/lib/site.ts`. The Reviews page automatically switches
 * to the real ones and drops all of this demo content, including the stats.
 */

export interface SampleTestimonial {
  id: string;
  name: string;
  location: string;
  treatment: string;
  rating: number;
  quote: string;
  recovery: string;
  consultedOn: string;
  /** Initials shown in the avatar — no photographs of fictional people. */
  initials: string;
}

export const sampleTestimonials: SampleTestimonial[] = [
  {
    id: "s1",
    name: "A. Kumar",
    location: "Khammam, Telangana",
    treatment: "Brain Surgery",
    rating: 5,
    quote:
      "Dr. Gade Ramakrishna Reddy explained my condition patiently and recommended the most suitable treatment. Throughout my recovery I felt well supported by the medical team. The care at Suraksha Hospital was professional and compassionate.",
    recovery: "Recovered in 8 weeks",
    consultedOn: "March 2025",
    initials: "AK",
  },
  {
    id: "s2",
    name: "S. Lakshmi",
    location: "Warangal, Telangana",
    treatment: "Slip Disc",
    rating: 5,
    quote:
      "I had severe lower back pain for several months. After treatment, I gradually returned to my normal routine. The entire process — from consultation to follow-up — was smooth and reassuring.",
    recovery: "Recovered in 6 weeks",
    consultedOn: "January 2025",
    initials: "SL",
  },
  {
    id: "s3",
    name: "R. Srinivas",
    location: "Hyderabad, Telangana",
    treatment: "Head Injury",
    rating: 5,
    quote:
      "My family appreciated how clearly every procedure was explained. The hospital staff were attentive, and the recovery guidance helped us feel confident throughout the treatment.",
    recovery: "Recovered in 10 weeks",
    consultedOn: "February 2025",
    initials: "RS",
  },
  {
    id: "s4",
    name: "P. Anitha",
    location: "Vijayawada, Andhra Pradesh",
    treatment: "Cervical Pain",
    rating: 5,
    quote:
      "Years of neck pain had started affecting my daily work. The consultation was thorough and nothing was rushed. I was told honestly what would help and what would not, which I valued.",
    recovery: "Recovered in 5 weeks",
    consultedOn: "April 2025",
    initials: "PA",
  },
  {
    id: "s5",
    name: "K. Ramesh",
    location: "Kothagudem, Telangana",
    treatment: "Spine Surgery",
    rating: 5,
    quote:
      "The minimally invasive approach meant a much shorter hospital stay than I expected. Every question I asked before surgery was answered in plain language, without any pressure.",
    recovery: "Recovered in 7 weeks",
    consultedOn: "December 2024",
    initials: "KR",
  },
  {
    id: "s6",
    name: "V. Suresh",
    location: "Bhadrachalam, Telangana",
    treatment: "Brain Tumor",
    rating: 5,
    quote:
      "We came in worried and left with a clear plan. The team kept our family informed at every stage, and the follow-up care after discharge was just as attentive as the treatment itself.",
    recovery: "Recovered in 12 weeks",
    consultedOn: "November 2024",
    initials: "VS",
  },
];

/**
 * Illustrative practice statistics.
 *
 * ⚠️ UNVERIFIED — these figures are placeholders for the demo layout and have
 * NOT been confirmed by the clinic. Publishing unverified volume or
 * satisfaction figures for a real physician is a factual claim and a potential
 * advertising-compliance issue. They render only alongside the sample content
 * and disappear the moment real testimonials are added.
 */
export const sampleStats = [
  { value: "4.9/5", label: "Average rating" },
  { value: "5000+", label: "Patients treated" },
  { value: "98%", label: "Patient satisfaction" },
  { value: "12+", label: "Years experience" },
];
