/**
 * SAMPLE testimonials — demonstration content for General & Laparoscopic Surgery.
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
  initials: string;
}

export const sampleTestimonials: SampleTestimonial[] = [
  {
    id: "s1",
    name: "A. Kumar",
    location: "Khammam, Telangana",
    treatment: "Laparoscopic Hernia Repair",
    rating: 5,
    quote:
      "Dr. Rajashekhar Meda explained my hernia surgery patiently. The keyhole procedure meant minimal pain and I was discharged the very next day. Excellent care at Suraksha Hospital.",
    recovery: "Recovered in 1 week",
    consultedOn: "March 2025",
    initials: "AK",
  },
  {
    id: "s2",
    name: "S. Lakshmi",
    location: "Warangal, Telangana",
    treatment: "Gallbladder Surgery",
    rating: 5,
    quote:
      "Severe gallstone pain brought me to the emergency. Dr. Rajashekhar performed laparoscopic gallbladder removal smoothly. I felt instant relief.",
    recovery: "Recovered in 1 week",
    consultedOn: "January 2025",
    initials: "SL",
  },
  {
    id: "s3",
    name: "R. Srinivas",
    location: "Khammam, Telangana",
    treatment: "Laser Varicose Veins",
    rating: 5,
    quote:
      "The endovenous laser treatment for my varicose veins had no surgical cuts at all. I walked out of the clinic on the same day comfortably.",
    recovery: "Same-day recovery",
    consultedOn: "February 2025",
    initials: "RS",
  },
  {
    id: "s4",
    name: "P. Anitha",
    location: "Kothagudem, Telangana",
    treatment: "Emergency Appendectomy",
    rating: 5,
    quote:
      "Sudden acute appendix pain was handled with 24/7 emergency precision. Dr. Rajashekhar Meda's keyhole surgery had me back on my feet in days.",
    recovery: "Recovered in 4 days",
    consultedOn: "April 2025",
    initials: "PA",
  },
  {
    id: "s5",
    name: "M. Venkatesh",
    location: "Suryapet, Telangana",
    treatment: "Laser Piles & Fistula Care",
    rating: 5,
    quote:
      "I suffered from chronic painful piles for years before consulting Dr. Rajashekhar Meda. His German laser procedure was completely incisionless and painless.",
    recovery: "Recovered in 3 days",
    consultedOn: "May 2025",
    initials: "MV",
  },
  {
    id: "s6",
    name: "K. Bhavani",
    location: "Khammam, Telangana",
    treatment: "Laparoscopic Hernia Repair",
    rating: 5,
    quote:
      "Dr. Rajashekhar Meda and the Suraksha Hospital staff provided wonderful care for my abdominal hernia. The 3D mesh keyhole repair left tiny scars and healed so fast.",
    recovery: "Recovered in 5 days",
    consultedOn: "June 2025",
    initials: "KB",
  },
];

export const sampleStats = [
  { value: "4.9/5", label: "Average rating" },
  { value: "3000+", label: "Successful Surgeries" },
  { value: "99%", label: "Patient satisfaction" },
  { value: "10+", label: "Years experience" },
];
