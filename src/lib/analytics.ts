/**
 * Analytics event layer — Dr. Rajashekhar Meda / Suraksha Hospital.
 *
 * ALL tracking IDs are read from environment variables — never hardcoded:
 *
 *   NEXT_PUBLIC_GA_MEASUREMENT_ID   GA4 Measurement ID   (e.g. G-XXXXXXXXXX)
 *   NEXT_PUBLIC_GTM_ID              GTM Container ID     (e.g. GTM-XXXXXXX)
 *   NEXT_PUBLIC_AW_CONVERSION_ID    Google Ads Account   (e.g. AW-XXXXXXXXX)
 *   NEXT_PUBLIC_AW_CALL_CONVERSION  Ads call-click label (e.g. AbCdEfGhIjK)
 *   NEXT_PUBLIC_AW_FORM_CONVERSION  Ads form-submit label
 *   NEXT_PUBLIC_AW_WA_CONVERSION    Ads whatsapp label
 *
 * If any variable is absent the site builds and runs with no errors.
 * GTM/GA4 are loaded via @next/third-parties in layout.tsx.
 * Google Ads conversion events are fired via window.gtag() when available.
 *
 * Events pushed to dataLayer (configure as GTM triggers → GA4 events):
 *   call_click                  — any tap on the phone number
 *   whatsapp_click              — any tap on a wa.me link
 *   appointment_form_submit     — appointment form submitted successfully
 *   form_submit                 — generic form submit
 *   chatbot_open                — chat widget opened
 *   chatbot_appointment_intent  — visitor asked to book via chatbot
 *   chatbot_emergency_intent    — emergency detected (safety signal)
 *   directions_click            — Get Directions button tapped
 */

export type AnalyticsEvent =
  | "call_click"
  | "whatsapp_click"
  | "appointment_form_submit"
  | "form_submit"
  | "chatbot_open"
  | "chatbot_appointment_intent"
  | "chatbot_emergency_intent"
  | "directions_click";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Push a dataLayer event (picked up by GTM and GA4 via tag config). */
export function track(
  event: AnalyticsEvent,
  params: Record<string, string | number | boolean> = {}
): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

/**
 * Fire a Google Ads conversion via gtag().
 * Safe no-op if gtag is not loaded or the env var is missing.
 */
function fireAdsConversion(label: string | undefined) {
  const awId = process.env.NEXT_PUBLIC_AW_CONVERSION_ID;
  if (!awId || !label || typeof window?.gtag !== "function") return;
  window.gtag("event", "conversion", {
    send_to: `${awId}/${label}`,
  });
}

/** Call: fires dataLayer + optional Ads conversion. */
export function trackCall() {
  track("call_click", { method: "phone" });
  fireAdsConversion(process.env.NEXT_PUBLIC_AW_CALL_CONVERSION);
}

/** WhatsApp: fires dataLayer + optional Ads conversion. */
export function trackWhatsApp() {
  track("whatsapp_click", { method: "whatsapp" });
  fireAdsConversion(process.env.NEXT_PUBLIC_AW_WA_CONVERSION);
}

/** Appointment form submit: fires dataLayer + optional Ads conversion. */
export function trackFormSubmit() {
  track("appointment_form_submit", {});
  track("form_submit", {});
  fireAdsConversion(process.env.NEXT_PUBLIC_AW_FORM_CONVERSION);
}

/** Directions click: fires dataLayer only. */
export function trackDirections() {
  track("directions_click", {});
}
