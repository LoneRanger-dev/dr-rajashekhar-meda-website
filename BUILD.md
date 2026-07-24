# Dr. Gade Ramakrishna Reddy — Suraksha Hospital, Khammam
## Master Build / Run / Deploy Specification
*Prepared 2026-07-24. Hand this file to any CLI coding agent (Claude Code, Cursor CLI, etc.) — it contains everything needed to research, design, build, instrument, launch ads for, and deploy the site.*

---

## 0. Toolkit Selection (D:\AI-Toolkit)

`INDEX.md` was read and every folder inspected. Only tools relevant to a premium healthcare marketing site were selected; everything else (GPU image/video generation, Flutter/Expo mobile, ComfyUI, SadTalker, etc.) is ignored as out of scope.

| Selected | Why |
|---|---|
| **Next.js 15 + shadcn/ui** (`Templates\nextjs-shadcn-starter`) | Base web framework — SSR/SEO-friendly, fastest path to Core Web Vitals compliance, component library to avoid rebuilding primitives |
| **Three.js + React Three Fiber** (`Templates\r3f-starter`) | Interactive 3D brain/spine hero visualization requested in Phase 3 |
| **UI/UX Pro Max skill** (`Claude-Skills\UI-UX-Pro-Max` — global skills `ui-ux-pro-max`, `design`, `design-system`, `ui-styling`, `brand`) | Glassmorphism styling, palette/typography pairing, full design-system generation instead of ad-hoc CSS |
| **Web Scraping Expert skill** (`Claude-Skills\Web-Scraping-Expert`) | Phase 1 competitor analysis (Indocare Multispeciality Hospital, Arogya Hospital Khammam, and other directory-listed neurosurgeons) and Google Business Profile / review data gathering |
| **Supabase CLI** (`Utilities\supabase-cli`) | Appointment-request storage, contact-form backend, chatbot conversation logging — local Postgres/auth without standing up custom infra |
| **CrewAI / Agentic AI Expert skill** (`Agentic_AI\crewAI`, `Claude-Skills` agentic-ai-expert) | Powers the real AI chatbot's reasoning layer (intent routing: FAQ vs. appointment vs. escalate-to-call) |
| **MarkItDown** | Converting any additional PDFs (awards, certificates, existing brochures) the client supplies into markdown content for the CMS |

**Ignored:** ComfyUI, FLUX, InvokeAI, LivePortrait, SadTalker, Wan2.1 (no GPU, out of scope), Flutter/Expo (no mobile app requested), LangGraph/OpenManus/Ruflo (CrewAI alone is sufficient for a single chatbot agent — avoid overengineering), Content_Creation/Marketing_AI folders (reserved/empty).

---

## Phase 1 — Research (completed from provided materials + public search)

**Doctor**
- **Name:** Dr. Gade Ramakrishna Reddy (also styled Dr. Ramakrishna Reddy Gade)
- **Qualifications:** MBBS, MS (General Surgery), MCh (Neurosurgery)
- **Designation:** Consultant Brain & Spine Surgeon; Assistant Professor, Dept. of Neurosurgery, Mamata Medical College
- **Experience/expertise:** Trauma care (brain & spine surgery), endoscopic brain & spine surgery, MISS (Minimally Invasive Spine Surgery), epilepsy management, spinal deformities, herniated discs, spinal stenosis
- **Hospital:** Suraksha Hospital (శ్రీ వేద హెల్త్‌కేర్ సురక్ష హాస్పిటల్) — Emergency | Trauma | Multi-Specialty, 24/7 neurosurgeon availability, advanced ICU
- **Address:** Old Priyadarshini College Building, Nehru Nagar, near Karnataka Bank, Khammam, Telangana
- **Phone:** 7075 447 449
- **Timings:** Mon–Sat 10:00 AM – 8:00 PM · Sunday 10:00 AM – 2:00 PM
- **Existing assets found:** Branded poster/creative set (spine conditions, epilepsy awareness, hospital intro) in bilingual English/Telugu — reusable as source content and social proof; professional photography available (studio portraits + candid clinic shots)
- **Google Business Profile / reviews / social media:** No public digital footprint found for "Dr. Gade Ramakrishna Reddy" or "Suraksha Hospital Khammam" via web search — **this is a greenfield SEO opportunity**, not a deficiency to fix later. GBP claim/optimization is priority #1 in Phase 4.

**Competitor landscape (Khammam neurosurgery/spine market)**
- Indocare Multispeciality Hospital, Wyra Road, Khammam — neurology/neurosurgery, has an indexed website (indocarehospital.com) ranking for "best neurosurgeon in Khammam"
- Arogya Hospital, Khammam — neurology department, own site
- Directory aggregators capturing local search intent instead of any single clinic: Skedoc, MFine, Credihealth, DocGenie, Lybrate — these presently outrank all individual Khammam neurosurgeons on generic queries, meaning **branded + hyper-local long-tail keywords** are the realistic wedge (see Phase 2 Local SEO)

*Action item for client:* confirm/create the Google Business Profile listing, gather 5–10 real patient testimonials (with consent) for the site and GBP, and provide any awards/publications not captured in the handwritten notes — placeholders are marked `[CONFIRM WITH CLIENT]` throughout the site copy.

---

## Phase 2 — Strategy

**Brand strategy:** Position as *"Khammam's trusted 24/7 Brain & Spine specialist"* — trauma-response credibility (24/7 availability) + advanced/minimally-invasive technique credibility (MISS, endoscopic surgery) + academic authority (Assistant Professor). Visual identity: clinical trust palette (deep navy/teal + white, echoing the existing Suraksha Hospital brand blue) with a single accent (orange, pulled from the existing branded chair/towel photography) to keep continuity with existing print creatives.

**Patient persona:**
1. *Acute/Trauma family* — searching at 2 AM after an accident or sudden neuro symptom, on mobile, needs phone number and "24/7" messaging within 3 seconds of landing.
2. *Chronic pain patient* (40–65) — has had back/neck pain for months, researching MISS/herniated disc treatment, compares 2–3 doctors, reads credentials and reviews before calling.
3. *Referring GP/family* — verifying qualifications (MCh, academic post) before referring a patient.

**Target audience:** Khammam district + surrounding mandals (Kothagudem, Bhadrachalam, Suryapet), age 35+, Telugu/English bilingual, mobile-first (~80%+ of local health searches in Tier-2 AP/Telangana are mobile).

**Local SEO strategy:** GBP optimization (categories: Neurosurgeon, Spine Surgeon; Telugu + English business description; weekly posts from existing creative library); NAP consistency across GBP/site/directories; city+specialty landing pages ("Spine Surgeon in Khammam", "Neurosurgeon Khammam", "Epilepsy Treatment Khammam"); schema markup (Physician + MedicalOrganization); backlinks from Mamata Medical College alumni pages and Telangana medical directories.

**Google Ads strategy:** Search campaign on high-intent local terms, Call-only campaign for trauma/emergency queries, Performance Max for broader brand awareness — full build in Phase 5.

**Competitor report:** Indocare and Arogya compete on generic "neurologist" terms; neither appears to emphasize MISS/endoscopic technique or 24/7 trauma response as a differentiator — the site should lead with these two angles.

**Content strategy:** Reuse existing bilingual poster content (spine conditions, epilepsy signs) as blog/education pages for SEO long-tail capture; add condition pages (Herniated Disc, Spinal Stenosis, Spinal Deformity, Epilepsy, Trauma/Brain Injury); patient FAQ page feeds the chatbot's knowledge base.

---

## Phase 3 — Website Generation

**Stack:** Next.js 15 (App Router) + TypeScript + Tailwind + shadcn/ui, from `Templates\nextjs-shadcn-starter`. Three.js/R3F (`Templates\r3f-starter`) mounted as a single hero-section component (rotating anatomical brain/spine model, low-poly, lazy-loaded, degrades to a static WebP on low-end devices/reduced-motion).

**Pages:** Home · About Dr. Reddy · Conditions & Treatments (Spine, Brain/Trauma, Epilepsy, MISS) · Suraksha Hospital Facilities · Patient Reviews/Testimonials · Blog/Education · Contact & Appointment · Google Ads landing pages (dedicated, no nav, single CTA) for: Spine Surgery Khammam, Emergency Neurosurgery Khammam, Epilepsy Treatment Khammam.

**Design direction (via UI-UX Pro Max skill):** Glassmorphism cards for the conditions grid and testimonials; Framer Motion for scroll-reveal, sticky appointment CTA bar, micro-interactions on hover/tap; Apple/Linear/Stripe-grade whitespace and typographic rhythm (pair a confident serif or geometric sans for headings with a highly legible body font — finalize via `ui-ux-pro-max` palette/font-pairing search); dark-mode-aware but defaults light for medical trust.

**Non-negotiables:** WCAG 2.1 AA accessibility (color contrast, focus states, reduced-motion fallback for the 3D hero, alt text on every clinical image, semantic headings); full responsive breakpoints (mobile-first, given persona mobile skew); Medical/Physician JSON-LD schema; sitemap.xml + robots.txt; Core Web Vitals budget — LCP < 2.5s (achieved via static hero fallback + image optimization), CLS < 0.1, INP < 200ms.

---

## Phase 4 — Tracking & Configuration

Install and verify, in this order:
1. Google Search Console (verify domain, submit sitemap)
2. Google Analytics 4 (GA4 property + events: `call_click`, `whatsapp_click`, `appointment_form_submit`, `chatbot_open`, `chatbot_appointment_intent`)
3. Google Tag Manager (container wraps GA4 + Ads conversion tags — no direct gtag edits after this)
4. Google Ads conversion tracking (linked via GTM: call conversions, form-fill conversions)
5. Meta Pixel (for future retargeting/Meta Ads)
6. WhatsApp click-to-chat tracking (wa.me link with UTM + GTM click trigger)
7. Call tracking (dynamic number insertion recommended once ad spend starts, so Search vs. Direct calls are distinguishable in GA4)
8. Appointment tracking (form submissions land in Supabase `appointments` table + GA4 event + optional email/WhatsApp notification to clinic)
9. Heatmaps (Microsoft Clarity — free, GDPR-friendly — installed via GTM)

---

## Phase 5 — Google Ads Campaign

**Structure:** Search campaign ("Suraksha Neurosurgery — Search") + Call-only campaign ("Suraksha Emergency — Call") + Performance Max ("Suraksha Brand Awareness").

**Ad groups & sample keywords (exact match core, phrase for reach):**
- *Spine Surgery:* spine surgeon khammam, herniated disc treatment khammam, minimally invasive spine surgery khammam, spinal stenosis doctor khammam
- *Brain/Trauma:* neurosurgeon khammam, brain surgery khammam, head injury doctor khammam, brain tumor specialist khammam
- *Epilepsy:* epilepsy treatment khammam, epilepsy doctor khammam, seizure specialist khammam
- *Emergency (call-only):* emergency neurosurgeon khammam, 24 hour neuro doctor khammam, trauma hospital khammam

**Negative keywords:** free, jobs, salary, course, fellowship, hospital jobs, medical college admission, [competitor hospital names — exclude own-brand cannibalization only if agency-managed separately], veterinary, dental, cardiology, orthopedic (unless MISS overlap intended).

**Responsive Search Ads:** headlines mixing credential ("MCh Neurosurgeon"), urgency ("24/7 Emergency Care"), technique ("Minimally Invasive Spine Surgery"), location ("Khammam's Trusted Spine Surgeon"); descriptions reinforcing trauma response + academic credibility + call-to-action.

**Extensions:** Location (Suraksha Hospital address, map pin), Call (7075 447 449, call-only during clinic hours + after-hours emergency routing), Callout ("24/7 Trauma Care", "MCh Neurosurgery", "Advanced ICU", "Minimally Invasive Surgery"), Structured Snippets (Services: Spine Surgery, Brain Surgery, Epilepsy Care, Trauma Care), Sitelinks (About Dr. Reddy, Conditions Treated, Book Appointment, Patient Reviews).

**Conversion goals:** phone call ≥ 60s, appointment form submit, WhatsApp click, chatbot appointment-intent message.

**Budget recommendation:** Start ₹800–1,200/day (~₹25,000–35,000/month) split ~50% Call-only (highest-intent, lowest CPA for emergency/trauma), 35% Search, 15% PMax; reassess after 2–3 weeks of conversion data and reallocate toward whichever campaign shows lower cost-per-appointment.

---

## Phase 6 — Deploy

```bash
# 1. Scaffold from toolkit template
cd Templates/nextjs-shadcn-starter
npm install

# 2. Local dev
npm run dev        # http://localhost:3000

# 3. Lint/typecheck/build (fix all errors before deploy)
npm run lint
npm run build

# 4. Deploy to Vercel
npm i -g vercel
vercel login
vercel --prod
```

Post-deploy: connect custom domain in Vercel, re-verify GSC/GA4/GTM on the live domain, run a Lighthouse/PageSpeed audit against production URL and confirm Core Web Vitals thresholds hold on real hosting (not just localhost).

**Deliverables to generate after first successful deploy:** README/Documentation (stack, folder structure, how to update content), Client Handover doc (how to edit clinic hours/contact/testimonials without a developer, how ad tracking works, monthly reporting cadence), Maintenance Guide (dependency update cadence, backup policy for Supabase data, who to contact for domain/hosting renewal).

---

## Bottom-Right AI Chatbot Widget

**Requirement:** real AI-powered assistant, not a canned-response widget.

**UX:** Floating circular button, bottom-right, subtle glassmorphism + a gentle idle pulse/breathing animation (robotic/medical avatar icon) to draw attention without feeling gimmicky; expands into a chat panel with Framer Motion spring transition; sticky across all pages; respects `prefers-reduced-motion`.

**Architecture:**
- Frontend: React chat panel (Vercel-hosted, part of the same Next.js app) calling a serverless API route.
- Reasoning layer: CrewAI single-agent setup (from `Agentic_AI\crewAI` in the toolkit) with a system prompt scoped strictly to Dr. Reddy/Suraksha Hospital facts (qualifications, hours, address, conditions treated, phone number) — grounded in a knowledge base built from the FAQ/condition pages so it cannot hallucinate medical advice.
- Intent routing: (1) informational FAQ → answered directly from knowledge base; (2) appointment intent → collects name/phone/preferred time → writes to Supabase `appointments` table + fires `chatbot_appointment_intent` GA4 event; (3) emergency/urgent symptoms → immediately surfaces the call button and the 24/7 phone number rather than continuing conversation (safety-first — the bot must never attempt to triage or diagnose).
- Guardrails: explicit system-prompt instruction to never give a diagnosis, dosage, or medical judgment — always redirect clinical questions to "please call or book a consultation with Dr. Reddy."

**Tracking:** every open, message sent, and appointment-intent event flows into GA4 via GTM (already configured in Phase 4).

---

## Open Items Requiring Client Confirmation
- [ ] Google Business Profile ownership/claim status
- [ ] Real patient testimonials (written consent required before publishing)
- [ ] Awards/publications list (notes only mention academic role, not specific papers/awards)
- [ ] Final domain name for deployment
- [ ] WhatsApp Business number (confirm same as 7075 447 449 or separate)
- [ ] Ad budget approval (₹25,000–35,000/month recommended starting range)
