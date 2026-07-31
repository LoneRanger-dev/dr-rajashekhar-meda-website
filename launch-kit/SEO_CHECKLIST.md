# SEO CHECKLIST — DR. RAJASEKHAR MEDA WEBSITE

Complete this checklist immediately after pushing the website live to ensure fast indexing and maximum search visibility.

---

## 1. Search Engine Indexing & Verification
- [ ] **Search Console Verification:** Add `drrajashekharmeda.com` to Google Search Console via HTML Meta Tag (`GOOGLE_SITE_VERIFICATION`).
- [ ] **Submit Sitemap:** Submit `https://drrajashekharmeda.com/sitemap.xml` in Search Console under Sitemaps.
- [ ] **Robots.txt Inspection:** Verify `https://drrajashekharmeda.com/robots.txt` returns `Allow: /` and links to the sitemap.
- [ ] **Bing Webmaster Tools:** Import Google Search Console configuration into Bing Webmaster Tools to register on Bing/Yahoo.

---

## 2. Page-Level Inspection & Indexing Requests
Use Search Console **URL Inspection Tool** to inspect and request indexing for these high-priority pages:

- [ ] `https://drrajashekharmeda.com/` (Homepage)
- [ ] `https://drrajashekharmeda.com/about` (About Dr. Rajasekhar Meda)
- [ ] `https://drrajashekharmeda.com/conditions/laparoscopic-surgery`
- [ ] `https://drrajashekharmeda.com/conditions/hernia-repair`
- [ ] `https://drrajashekharmeda.com/conditions/gallbladder-appendix`
- [ ] `https://drrajashekharmeda.com/conditions/laser-varicose-veins`
- [ ] `https://drrajashekharmeda.com/facilities`
- [ ] `https://drrajashekharmeda.com/contact`

---

## 3. Schema & Structured Data Validation
Run the live URLs through **Google Rich Results Test** (`search.google.com/test/rich-results`):

- [ ] **Physician Schema:** Validated on `/` and `/about` with zero errors.
- [ ] **MedicalClinic Schema:** Validated with address (`Old Priyadarshini College Building, Nehru Nagar...`) and phone.
- [ ] **FAQPage Schema:** Validated on `/` and `/reviews` with 4 surgical Q&As.
- [ ] **BreadcrumbList Schema:** Validated on inner condition routes.

---

## 4. Mobile & Performance Verification
- [ ] **Google Mobile-Friendly Test / Lighthouse Mobile:** Verify score > 90 on mobile devices.
- [ ] **Core Web Vitals Check:**
  - Largest Contentful Paint (LCP) < 2.5s
  - Interaction to Next Paint (INP) < 200ms
  - Cumulative Layout Shift (CLS) < 0.1
- [ ] **Reduced Motion Test:** Verify 3D canvas is disabled when `prefers-reduced-motion: reduce` is active.

---

## 5. Local Search & Geo-Targeting
- [ ] **NAP Consistency:** Ensure Name, Address, Phone match `launch/local-seo/NAP.md` exactly across all citations.
- [ ] **Geo-Meta Coordinates:** Verify Suraksha Hospital location pin is mapped on Google Maps.
- [ ] **Regional Language Markup:** Confirm Telugu text elements retain `lang="te"` attributes.
