/**
 * Analytics event layer.
 *
 * Everything goes through the GTM dataLayer — there are deliberately no
 * hardcoded gtag() calls anywhere in this codebase. GA4, Google Ads
 * conversions, Meta Pixel and Clarity are all configured as tags inside the
 * GTM container, so the clinic's marketing agency can add or change tracking
 * without a code deploy.
 *
 * Events fired by the site (wire these as GTM triggers → GA4 events):
 *   call_click                  — any tap on the phone number
 *   whatsapp_click              — any tap on a wa.me link
 *   appointment_form_submit     — appointment form submitted successfully
 *   chatbot_open                — chat widget opened
 *   chatbot_appointment_intent  — visitor asked to book via the chatbot
 *   chatbot_emergency_intent    — emergency detected (safety signal, not a conversion)
 */

export type AnalyticsEvent =
  | "call_click"
  | "whatsapp_click"
  | "appointment_form_submit"
  | "chatbot_open"
  | "chatbot_appointment_intent"
  | "chatbot_emergency_intent";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(
  event: AnalyticsEvent,
  params: Record<string, string | number | boolean> = {}
): void {
  if (typeof window === "undefined") return;

  // Safe no-op when GTM is absent (local dev, or before the container is live).
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
