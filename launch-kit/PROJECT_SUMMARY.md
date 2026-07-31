# PROJECT SUMMARY

## Executive Overview
This website represents the official digital presence of **Dr. Rajasekhar Meda** (MBBS, M.S. General Surgery), Consultant Laparoscopic, Endoscopic & Laser Surgeon practicing at **Suraksha Hospital**, Khammam, Telangana.

The platform has been migrated and transformed from an existing healthcare codebase to exclusively feature Dr. Rajasekhar Meda, preserving all high-performance interactive elements (Three.js 3D surgical visualization, glassmorphic UI, responsive layouts, motion effects, and accessibility hooks).

---

## Key Metadata
- **Project Name:** Dr. Rajasekhar Meda Medical Website
- **Doctor Name:** Dr. Rajasekhar Meda (డా॥ మేడ రాజశేఖర్)
- **Qualifications:** MBBS, M.S. (General Surgery)
- **Specialty:** Laparoscopic, Endoscopic & Laser Surgery (10+ Years Experience)
- **Hospital Partner:** Suraksha Hospital — Sri Veda Healthcare (సురక్ష హాస్పిటల్)
- **Hospital Descriptor:** Emergency · Trauma · Multi-Specialty
- **Location:** Priyadarshini College Old Building, Nehru Nagar, near Karnataka Bank, Wyra Road, Khammam, Telangana 507002
- **Primary Contacts:** `90590 33575` (Appointments) | `7075 447 449` (Emergency) | `8128126849` (WhatsApp)
- **Primary Domain:** `https://drrajashekharmeda.com`

---

## Technology Stack & Architecture

### Core Frameworks & Runtime
- **Framework:** Next.js 16.2.10 (App Router, Turbopack Build System)
- **Language:** TypeScript 5.x (Strict Type Checking)
- **UI Library:** React 19.x
- **Styling:** Vanilla CSS + Tailwind CSS utilities with Glassmorphism, CSS Custom Properties & Design Tokens
- **Icons:** Lucide React
- **Animations:** Framer Motion (reduced-motion accessible)

### 3D Visualization & Graphics
- **3D Engine:** React Three Fiber (`@react-three/fiber`) & Three.js (`three`)
- **Hero Element:** Procedural 3D laparoscopic keyhole & trocar HUD (`surgical-scene.tsx`) wrapped in a dynamic idle-deferred capability gate (`hero-visual.tsx`).

### AI & API Architecture
- **Chatbot API:** Next.js Route Handler (`src/app/api/chat/route.ts`) interfacing with OpenAI API (GPT-4o-mini).
- **Appointment API:** Next.js Route Handler (`src/app/api/appointments/route.ts`) with input validation and dataLayer event triggers.

---

## Deployment & Infrastructure
- **Hosting Platform:** Vercel (Edge Network / Serverless Functions)
- **Build Output:** 29 Static Pages (Prerendered SSG) + 2 Dynamic API Routes
- **Global CDN:** Vercel Edge Network with automatic SSL & Brotli compression.

---

## Key Features Implemented

1. **Interactive Hero Section:** Dynamic 3D procedural surgical visualizer with device capability detection and reduced-motion fallback.
2. **Clinical Specialty Pages:** Comprehensive coverage of Laparoscopic Surgery, Hernia Repair, Gallbladder & Appendix Removal, Laser Varicose Vein Treatment, Bariatric Surgery, and Emergency Trauma Care.
3. **Emergency Medical CTA:** 24/7 emergency alert banner with single-tap direct dialing (`7075 447 449`).
4. **WhatsApp Integration:** Direct one-click booking via `https://wa.me/918128126849` with pre-filled consultation request text.
5. **Multi-lingual Support:** Telugu typography powered by Google Font `Noto Sans Telugu` with proper `lang="te"` markup for regional accessibility.
6. **AI Assistant:** Medical inquiry chatbot tailored specifically for Dr. Rajasekhar Meda's procedures and Suraksha Hospital services.
7. **Hospital Showcase:** Highlighting Suraksha Hospital's ICU, Operating Theatres, Emergency Wards, and Diagnostic Facilities.

---

## SEO & Schema Architecture
- **Server-Side Rendered Metadata:** `buildMetadata` helper generating automated title tags, meta descriptions, OpenGraph cards, and Twitter summary cards.
- **Structured Data (JSON-LD):**
  - `@type: ["Physician", "MedicalBusiness"]`
  - `@type: "MedicalClinic"`
  - `@type: "FAQPage"`
  - `@type: "BreadcrumbList"`
- **Indexing Files:** Dynamic `sitemap.xml` and strict `robots.txt` configuration.

---

## Accessibility & Performance
- **Accessibility:** Meets WCAG 2.1 AA contrast requirements, `aria-hidden` decorative elements, keyboard focus rings, `sr-only` skip navigation links, and full reduced-motion media query support.
- **Performance:** Native `next/image` optimization with inline SVG blur placeholders, web font optimization via `next/font`, and zero client-side main-thread blocking during LCP.
