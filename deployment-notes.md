# DEPLOYMENT NOTES — v1.0.0

## Deployment Summary
- **Target Platform:** Vercel (Edge Network & Serverless Functions)
- **Node.js Version:** 20.x / 22.x LTS
- **Build Engine:** Next.js 16.2.10 (Turbopack)
- **Routes Generated:** 31 total (29 Static/SSG, 2 Serverless API Route Handlers)

## Pre-Deployment Verification Matrix
- TypeScript compilation (`tsc --noEmit`): 0 errors
- ESLint static analysis (`eslint`): 0 errors, 0 warnings
- Unused asset cleanup: 8 orphaned images removed (~4 MB saved)
- Component refactoring: Legacy identifiers replaced with neutral component models (`HeroVisual`, `SurgicalScene`)
- Env Var Fallbacks: Safe no-op execution when third-party keys are unset

## Infrastructure Requirements
- Custom Domain DNS A Record -> `76.76.21.21`
- Custom Domain CNAME Record (`www`) -> `cname.vercel-dns.com`
- Automatic SSL Certificate provisioning via Let's Encrypt / Vercel Edge
