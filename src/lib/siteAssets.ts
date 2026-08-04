/**
 * CENTRALISED IMAGE CONFIGURATION — single source of truth for every asset
 * rendered on Dr. Rajashekhar Meda's website.
 */

export const doctorImages = {
  /** Homepage hero — official graphic hero section image of Dr. Rajashekhar Meda. */
  hero: {
    src: "/images/doctor/dr-rajashekhar-herosection.png",
    width: 1536,
    height: 1024,
  },
  /** Consultation — professional doctor portrait in lab coat. */
  consultation: {
    src: "/images/doctor/dr-rajashekhar-consulting.jpg",
    width: 720,
    height: 1280,
  },
  /** Surgical poster creative — advanced laparoscopic surgery. */
  about: {
    src: "/images/doctor/dr-rajashekhar-about-poster.jpg",
    width: 572,
    height: 1024,
  },
  /** Vertical portrait for cards and schemas. */
  portrait: {
    src: "/images/doctor/dr-rajashekhar-hero.jpg",
    width: 1000,
    height: 1500,
  },
  /** Doctor in surgical scrubs — theatre & trauma context. */
  scrubs: {
    src: "/images/doctor/dr-rajashekhar-scrubs.png",
    width: 1080,
    height: 1580,
  },
} as const;

export const facilityImages = {
  exterior: {
    src: "/images/doctor/dr-rajashekhar-hero.jpg",
    width: 1000,
    height: 1500,
  },
  interior: {
    src: "/images/doctor/dr-rajashekhar-consulting.jpg",
    width: 720,
    height: 1280,
  },
  wards: {
    src: "/images/doctor/dr-rajashekhar-scrubs.png",
    width: 1080,
    height: 1580,
  },
} as const;

export const creativeImages = {
  brainTrauma: { src: "/images/doctor/dr-rajashekhar-scrubs.png", width: 1080, height: 1580 },
  epilepsy: { src: "/images/doctor/dr-rajashekhar-consulting.jpg", width: 720, height: 1280 },
  spineConditions: { src: "/images/doctor/dr-rajashekhar-scrubs.png", width: 1080, height: 1580 },
  hospitalBanner: {
    src: "/images/doctor/dr-rajashekhar-consulting.jpg",
    width: 720,
    height: 1280,
  },
  doctorBanner: {
    src: "/images/doctor/dr-rajashekhar-hero.jpg",
    width: 1000,
    height: 1500,
  },
} as const;

export const brandImages = {
  logo: { src: "/brand/suraksha-logo.png", width: 1024, height: 1024 },
  mark: { src: "/brand/icon.png", width: 512, height: 512 },
  chatbotAvatar: { src: "/brand/chatbot-avatar.png", width: 256, height: 256 },
  chatbotPoster: { src: "/brand/chatbot-poster.jpg", width: 320, height: 320 },
} as const;

export const BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjUiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjUiIGZpbGw9IiNkYmU3ZjEiLz48L3N2Zz4=";

export type ImageAsset = { src: string; width: number; height: number };
