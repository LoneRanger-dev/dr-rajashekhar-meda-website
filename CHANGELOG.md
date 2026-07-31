# CHANGELOG

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-07-31

### Added
- Complete website migration and identity transformation for Dr. Rajasekhar Meda (MBBS, M.S. General Surgery).
- Single source of truth configuration in `src/lib/site.ts` with verified clinical business data.
- High-performance procedural 3D hero visualization using React Three Fiber (`hero-visual.tsx` & `surgical-scene.tsx`).
- Dynamic Structured Data (JSON-LD) for Physician, MedicalClinic, FAQPage, and BreadcrumbList.
- Environment-variable-driven Google Analytics 4, GTM, and Google Ads conversion layer.
- Complete Google Business Profile, Local SEO NAP, and Directory Listing launch packages in `/launch/` and `/launch-kit/`.

### Changed
- Refactored legacy component identifiers to specialty-neutral names (`HeroVisual`, `SurgicalScene`).
- Updated root metadata and OpenGraph social cards to target `https://drrajashekharmeda.com`.

### Removed
- Cleaned up 8 orphaned legacy image files from `public/` saving ~4 MB bundle size.
- Removed legacy hardcoded Google tracking IDs in favor of environment variable fallbacks.
