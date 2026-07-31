# ENVIRONMENT VARIABLES DOCUMENTATION

This document defines all environment variables supported by the application, their purpose, format, and where to obtain them.

---

## Overview

All analytics, tracking, search verification, and API tokens are configured via environment variables.

> **Zero-Dependency Fallback:** If NO environment variables are set, the application will still compile, build, and execute cleanly with 0 console or runtime errors. Tracking calls will safely degrade to no-ops.

---

## 1. `NEXT_PUBLIC_GA_MEASUREMENT_ID`

- **Type:** String (Public, Client-side)
- **Format:** `G-XXXXXXXXXX` (e.g., `G-YHMZWYWQVK`)
- **Purpose:** Google Analytics 4 Measurement ID. When set, Next.js `@next/third-parties/google` component automatically injects the official GA4 gtag.js snippet into the page `<head>`.
- **Where to obtain:** Google Analytics → Admin → Data Streams → Web Stream → Measurement ID.

---

## 2. `NEXT_PUBLIC_GTM_ID`

- **Type:** String (Public, Client-side)
- **Format:** `GTM-XXXXXXX` (e.g., `GTM-WCMMQRD6`)
- **Purpose:** Google Tag Manager Container ID. When set, `@next/third-parties/google` injects the GTM container script. All site events (`call_click`, `whatsapp_click`, `appointment_form_submit`) are pushed to `window.dataLayer`.
- **Where to obtain:** Google Tag Manager → Account Dashboard → Container ID.

---

## 3. `NEXT_PUBLIC_AW_CONVERSION_ID`

- **Type:** String (Public, Client-side)
- **Format:** `AW-XXXXXXXXX` (e.g., `AW-1092837465`)
- **Purpose:** Google Ads Account Conversion ID. Required for firing direct Google Ads conversion events upon phone call taps, form submissions, or WhatsApp clicks.
- **Where to obtain:** Google Ads → Goals → Conversions → Summary → Tag Setup.

---

## 4. `NEXT_PUBLIC_AW_CALL_CONVERSION`

- **Type:** String (Public, Client-side)
- **Format:** Alphanumeric String (e.g., `AbCdEfGhIjK`)
- **Purpose:** Google Ads Conversion Label for Phone Call Clicks. Fired via `gtag('event', 'conversion', { send_to: 'AW-xxx/Label' })` whenever a visitor taps any phone call button.
- **Where to obtain:** Google Ads → Goals → Conversions → Call Conversion → Event Snippet.

---

## 5. `NEXT_PUBLIC_AW_FORM_CONVERSION`

- **Type:** String (Public, Client-side)
- **Format:** Alphanumeric String (e.g., `XyZ123AbC`)
- **Purpose:** Google Ads Conversion Label for Appointment Form Submission. Fired when an appointment form is submitted successfully.
- **Where to obtain:** Google Ads → Goals → Conversions → Form Conversion → Event Snippet.

---

## 6. `NEXT_PUBLIC_AW_WA_CONVERSION`

- **Type:** String (Public, Client-side)
- **Format:** Alphanumeric String (e.g., `WaLAbEl987`)
- **Purpose:** Google Ads Conversion Label for WhatsApp Link Clicks. Fired when a visitor taps the WhatsApp appointment button.
- **Where to obtain:** Google Ads → Goals → Conversions → WhatsApp Conversion → Event Snippet.

---

## 7. `GOOGLE_SITE_VERIFICATION`

- **Type:** String (Public, Server-side / Build-time)
- **Format:** Alphanumeric Token (e.g., `abc123def456ghi789`)
- **Purpose:** Verification token for Google Search Console. Injected into `<meta name="google-site-verification" content="..." />` in `src/app/layout.tsx`.
- **Where to obtain:** Google Search Console → Add Property → HTML Tag method → copy `content` token.

---

## 8. `NEXT_PUBLIC_GOOGLE_MAPS_EMBED`

- **Type:** String (Public, Client-side)
- **Format:** Full HTTPS Embed URL (e.g., `https://www.google.com/maps/embed?pb=...`)
- **Purpose:** Dynamic Google Maps iframe source URL displayed on `/facilities` and `/contact` pages.
- **Where to obtain:** Google Maps → Suraksha Hospital Khammam → Share → Embed a map → Copy iframe `src`.

---

## 9. `OPENAI_API_KEY` (Optional)

- **Type:** String (Private, Server-side Only)
- **Format:** `sk-proj-...`
- **Purpose:** Powers the AI assistant chatbot route (`/api/chat`). If absent, the chatbot route cleanly returns a `503 Service Unavailable` status without crashing the site.
- **Where to obtain:** OpenAI Platform → API Keys.

---

## Summary Matrix

| Variable | Scope | Required? | Fallback Behavior if Missing |
|---|---|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Client | Optional | GA script not loaded; no runtime error |
| `NEXT_PUBLIC_GTM_ID` | Client | Optional | GTM script not loaded; dataLayer safely initialized |
| `NEXT_PUBLIC_AW_CONVERSION_ID` | Client | Optional | Ads conversions skipped silently |
| `NEXT_PUBLIC_AW_CALL_CONVERSION` | Client | Optional | Call conversion event skipped silently |
| `NEXT_PUBLIC_AW_FORM_CONVERSION` | Client | Optional | Form conversion event skipped silently |
| `NEXT_PUBLIC_AW_WA_CONVERSION` | Client | Optional | WhatsApp conversion event skipped silently |
| `GOOGLE_SITE_VERIFICATION` | Server | Optional | Meta tag omitted; site renders normally |
| `NEXT_PUBLIC_GOOGLE_MAPS_EMBED` | Client | Optional | Fallback map direct link displayed |
| `OPENAI_API_KEY` | Server | Optional | Chatbot API returns 503 error status |
