# GOOGLE SERVICES SETUP GUIDE

This guide provides step-by-step instructions for configuring all Google services for Dr. Rajasekhar Meda's website.

---

## 1. Google Analytics 4 (GA4)

1. Go to [analytics.google.com](https://analytics.google.com) and log in with the client's Google Account.
2. Click **Admin** (bottom left gear icon) → **Create Account** (or Create Property).
3. Account Name: `Dr. Rajasekhar Meda — Suraksha Hospital`
4. Property Name: `drrajashekharmeda.com`
5. Reporting time zone: `India (GMT+5:30)` | Currency: `Indian Rupee (INR)`
6. Industry: `Jobs & Education / Healthcare`
7. Click **Create** and accept terms.
8. Choose Platform: **Web**.
9. Website URL: `https://drrajashekharmeda.com` | Stream Name: `Website Data Stream`
10. Copy the **Measurement ID** (Format: `G-XXXXXXXXXX`).
11. **Where to place:** Add to Vercel Environment Variables as `NEXT_PUBLIC_GA_MEASUREMENT_ID`.

---

## 2. Google Tag Manager (GTM)

1. Go to [tagmanager.google.com](https://tagmanager.google.com).
2. Click **Create Account**.
3. Account Name: `Dr. Rajasekhar Meda` | Country: `India`
4. Container Name: `drrajashekharmeda.com` | Target Platform: **Web**
5. Click **Create** and accept terms.
6. Copy the **Container ID** from the top right (Format: `GTM-XXXXXXX`).
7. **Where to place:** Add to Vercel Environment Variables as `NEXT_PUBLIC_GTM_ID`.

---

## 3. Google Search Console (GSC)

1. Go to [search.google.com/search-console](https://search.google.com/search-console).
2. Click **Add Property**.
3. Select **URL prefix**: `https://drrajashekharmeda.com`.
4. Choose Verification Method: **HTML tag**.
5. Copy the `content` attribute value from the meta tag (e.g. `<meta name="google-site-verification" content="YOUR_TOKEN_HERE" />`).
6. **Where to place:** Add to Vercel Environment Variables as `GOOGLE_SITE_VERIFICATION`.
7. Once deployed, click **Verify** in Search Console.
8. Under **Sitemaps**, submit: `https://drrajashekharmeda.com/sitemap.xml`.

---

## 4. Google Business Profile (GBP)

1. Go to [business.google.com](https://business.google.com).
2. Search for business name: `Dr. Rajasekhar Meda — Suraksha Hospital`.
3. Select Business Category: **Surgeon** (or **General Surgeon**).
4. Do you want to add a location customers can visit? Select **Yes**.
5. Address:
   - Street Address: `Old Priyadarshini College Building, Nehru Nagar, near Karnataka Bank, Wyra Road`
   - City: `Khammam` | State: `Telangana` | PIN Code: `507002`
6. Phone Number: `9059033575`
7. Website URL: `https://drrajashekharmeda.com`
8. Complete postcard or video verification as requested by Google.
9. Populate categories, services, description, and initial posts using the ready-made templates in `/launch/google-business-profile/`.

---

## 5. Google Ads Setup & Conversion Tracking

1. Go to [ads.google.com](https://ads.google.com).
2. Create Account or sign in to existing manager account.
3. Click **Goals** → **Conversions** → **Summary** → **New Conversion Action**.
4. Select **Website**. Enter `https://drrajashekharmeda.com`.
5. Create Conversion Actions manually:
   - **Action 1:** Phone Call Click (`call_click`)
   - **Action 2:** Appointment Form Submission (`appointment_submit`)
   - **Action 3:** WhatsApp Click (`whatsapp_click`)
6. Copy the **Conversion ID** (`AW-XXXXXXXXX`) and **Conversion Labels**.
7. **Where to place:** Add to Vercel Environment Variables:
   - `NEXT_PUBLIC_AW_CONVERSION_ID`
   - `NEXT_PUBLIC_AW_CALL_CONVERSION`
   - `NEXT_PUBLIC_AW_FORM_CONVERSION`
   - `NEXT_PUBLIC_AW_WA_CONVERSION`

---

## 6. Google Maps Embed

1. Once the Google Business Profile is verified and live on Google Maps:
2. Open Google Maps and search for `Suraksha Hospital Khammam`.
3. Click **Share** → **Embed a map**.
4. Copy the `src` URL inside the `<iframe>` tag (Format: `https://www.google.com/maps/embed?pb=...`).
5. **Where to place:** Add to Vercel Environment Variables as `NEXT_PUBLIC_GOOGLE_MAPS_EMBED`.

---

## 7. Rich Results Test

1. Go to [search.google.com/test/rich-results](https://search.google.com/test/rich-results).
2. Enter URL `https://drrajashekharmeda.com`.
3. Confirm that **Physician**, **MedicalClinic**, **FAQPage**, and **BreadcrumbList** items are detected without errors or warnings.
