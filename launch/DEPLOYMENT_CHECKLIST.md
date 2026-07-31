# DEPLOYMENT CHECKLIST — DR. RAJASEKHAR MEDA WEBSITE

This checklist covers all technical and operational steps required to take the website live and establish the digital presence.

---

## 1. Codebase & Build Verification
- [x] Clean codebase — 0 legacy references (GRK/Neuro) in `src/`
- [x] Neutral component structure (`HeroVisual`, `SurgicalScene`)
- [x] TypeScript type check clean (`npx tsc --noEmit` -> 0 errors)
- [x] ESLint clean (`npm run lint` -> 0 warnings/errors)
- [x] Next.js production build clean (`npx next build` -> 31/31 routes static/SSG)
- [x] Environment variable fallback ready (`layout.tsx` & `analytics.ts` handle missing env vars gracefully)

---

## 2. Vercel / Hosting Deployment
- [ ] Connect GitHub repository to Vercel
- [ ] Set Framework Preset to **Next.js**
- [ ] Configure Environment Variables in Vercel Dashboard:
  - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
  - `NEXT_PUBLIC_GTM_ID`
  - `NEXT_PUBLIC_AW_CONVERSION_ID`
  - `NEXT_PUBLIC_AW_CALL_CONVERSION`
  - `NEXT_PUBLIC_AW_FORM_CONVERSION`
  - `NEXT_PUBLIC_AW_WA_CONVERSION`
  - `GOOGLE_SITE_VERIFICATION`
- [ ] Deploy initial production build
- [ ] Verify SSL certificate issued automatically by Vercel

---

## 3. Domain & DNS Configuration
- [ ] Purchase / Access domain `drrajashekharmeda.com`
- [ ] Point A record to `76.76.21.21` (Vercel IP)
- [ ] Point CNAME `www` to `cname.vercel-dns.com`
- [ ] Confirm domain assignment in Vercel project settings
- [ ] Confirm HTTP -> HTTPS automatic redirect
- [ ] Confirm canonical URLs resolve to `https://drrajashekharmeda.com`

---

## 4. Google Accounts & Analytics Provisioning
- [ ] Create Google Account for Dr. Rajasekhar Meda / Suraksha Hospital (if not already existing)
- [ ] **Google Analytics 4 (GA4):**
  - [ ] Create GA4 Property: "Dr. Rajasekhar Meda — Suraksha Hospital"
  - [ ] Copy Measurement ID (`G-XXXXXXXXXX`) to Vercel env var `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- [ ] **Google Tag Manager (GTM):**
  - [ ] Create GTM Container for Web
  - [ ] Copy Container ID (`GTM-XXXXXXX`) to Vercel env var `NEXT_PUBLIC_GTM_ID`
- [ ] **Google Ads:**
  - [ ] Create Google Ads Account
  - [ ] Set up Call Conversion, Form Submit Conversion, WhatsApp Click Conversion
  - [ ] Copy AW ID & Conversion Labels to Vercel env vars

---

## 5. Google Search Console & SEO Verification
- [ ] Add property `https://drrajashekharmeda.com` in Google Search Console
- [ ] Verify ownership via HTML Tag (`GOOGLE_SITE_VERIFICATION`) or DNS TXT record
- [ ] Submit sitemap URL: `https://drrajashekharmeda.com/sitemap.xml`
- [ ] Run **Google Rich Results Test** on homepage, `/about`, `/conditions/laparoscopic-surgery`
- [ ] Verify `Physician`, `MedicalClinic`, `FAQPage`, and `BreadcrumbList` schemas render clean with 0 errors
- [ ] Inspect robots.txt via GSC inspect tool (`https://drrajashekharmeda.com/robots.txt`)

---

## 6. Google Business Profile (GBP) Setup
- [ ] Go to business.google.com and click "Add Business"
- [ ] Name: `Dr. Rajasekhar Meda — Suraksha Hospital`
- [ ] Primary Category: `Surgeon` (or `General Surgeon`)
- [ ] Secondary Categories: Laparoscopic Surgeon, Medical Clinic, Hospital, Emergency Care Physician
- [ ] Address: Old Priyadarshini College Building, Nehru Nagar, near Karnataka Bank, Wyra Road, Khammam 507002
- [ ] Phone: `9059033575` / `7075447449`
- [ ] Website: `https://drrajashekharmeda.com`
- [ ] Request postcard/video verification
- [ ] Upload photos from `/public/images/doctor/` and `/public/brand/`
- [ ] Populate Services using `launch/google-business-profile/services.md`
- [ ] Populate Description using `launch/google-business-profile/business-description.md`
- [ ] Post first update using Post 1 from `launch/google-business-profile/first-10-google-posts.md`

---

## 7. Directory Profiles Submission
- [ ] Submit profile to **Practo** (using `launch/directory-listings/profiles.md`)
- [ ] Submit profile to **Lybrate**
- [ ] Claim listing on **Justdial**
- [ ] Submit profile to **Skedoc**
- [ ] Create listing on **Apollo 24|7** (if applicable)

---

## 8. Post-Launch Verification
- [ ] Test form submission on live site (`/contact`) -> verify event reaches GA4/GTM dataLayer
- [ ] Test tap-to-call on mobile device -> verify phone opens and event triggers
- [ ] Test WhatsApp button on mobile -> verify WhatsApp opens with pre-filled message
- [ ] Verify Google Maps embed and directions link load cleanly
- [ ] Conduct mobile performance audit via PageSpeed Insights
