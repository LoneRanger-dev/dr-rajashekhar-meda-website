/**
 * CENTRALISED IMAGE CONFIGURATION — single source of truth for every asset
 * rendered on the site. Components must import paths from here rather than
 * hardcoding strings, so the whole site can be re-skinned by editing this one
 * file (swap a client's photos without touching a single component).
 *
 * Source files live under /public. next/image optimises them to AVIF/WebP at
 * request time, so the source format (png/jpg) does not affect delivered size.
 */

/** Doctor photography — mapped to where each shot reads best. */
export const doctorImages = {
  /** Homepage hero — confident, premium three-quarter portrait. */
  hero: {
    src: "/images/doctor/doctor-black-apron-new.png",
    width: 1537,
    height: 1023,
  },
  /** Consultation / "why choose" — approachable full portrait. */
  consultation: {
    src: "/images/doctor/doctor-new.png",
    width: 1023,
    height: 1537,
  },
  /** About & long-form context — wide consulting shot. */
  about: {
    src: "/images/doctor/dr-reddy-consulting-wide.jpg",
    width: 1600,
    height: 1100,
  },
  /** Profile cards & structured-data image — vertical studio portrait. */
  portrait: {
    src: "/images/doctor/dr-reddy-portrait.jpg",
    width: 1067,
    height: 1600,
  },
  /** Surgical scrubs — trauma / theatre context. */
  scrubs: {
    src: "/images/doctor/dr-reddy-scrubs.jpg",
    width: 1200,
    height: 800,
  },
} as const;

/** Hospital & facility photography. */
export const facilityImages = {
  /** Homepage cinematic showcase + facilities hero. */
  exterior: {
    src: "/images/facility/hospital-exterior.jpg",
    width: 1024,
    height: 640,
  },
  /** Interior — reception / ward, used on the visit + facilities pages. */
  interior: {
    src: "/images/facility/suraksha-interior-new.png",
    width: 1692,
    height: 930,
  },
} as const;

/** Editorial creatives used on condition, blog and landing pages. */
export const creativeImages = {
  brainTrauma: { src: "/images/creatives/brain-trauma.png", width: 1024, height: 1024 },
  epilepsy: { src: "/images/creatives/epilepsy-signs.jpg", width: 1200, height: 800 },
  spineConditions: { src: "/images/creatives/spine-conditions.jpg", width: 1200, height: 800 },
  hospitalBanner: {
    src: "/images/creatives/hospital-intro-banner.jpg",
    width: 1280,
    height: 716,
  },
  /** Branded doctor banner (also the social OpenGraph image). */
  doctorBanner: {
    src: "/opengraph-image.png",
    width: 1200,
    height: 630,
  },
} as const;

/** Brand marks. */
export const brandImages = {
  logo: { src: "/brand/suraksha-logo.png", width: 1774, height: 887 },
  mark: { src: "/brand/suraksha-mark.png", width: 512, height: 512 },
  chatbotAvatar: { src: "/brand/chatbot-avatar.png", width: 256, height: 256 },
  chatbotPoster: { src: "/brand/chatbot-poster.jpg", width: 320, height: 320 },
} as const;

/**
 * Shared low-res placeholder for next/image `placeholder="blur"`. A soft
 * clinical-blue tile so images fade in from the brand palette rather than a
 * grey flash. Keeps LCP clean without shipping per-image blur data.
 */
export const BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjUiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjUiIGZpbGw9IiNkYmU3ZjEiLz48L3N2Zz4=";

export type ImageAsset = { src: string; width: number; height: number };
