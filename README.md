# Dr. Gade Ramakrishna Reddy — Brain & Spine Surgeon, Khammam

Website for Dr. Gade Ramakrishna Reddy (MBBS, MS, MCh Neurosurgery), Consultant
Brain & Spine Surgeon at Suraksha Hospital, Khammam, Telangana.

**Live:** https://suraksha-neuro.vercel.app
**Repo:** https://github.com/LoneRanger-dev/suraksha-neuro

| Doc | For |
|---|---|
| This file | Developers |
| [docs/CLIENT-HANDOVER.md](docs/CLIENT-HANDOVER.md) | Clinic staff — non-technical |
| [docs/MAINTENANCE.md](docs/MAINTENANCE.md) | Whoever maintains this long-term |
| [google-ads/README.md](google-ads/README.md) | Whoever runs the ad account |

---

## Stack

| | |
|---|---|
| Framework | Next.js 16.2.10 (App Router, Turbopack) |
| UI | React 19.2, Tailwind CSS v4, shadcn/ui on Base UI |
| 3D | Three.js + React Three Fiber (lazy, capability-gated) |
| AI | Anthropic SDK — `claude-opus-4-8` |
| Hosting | Vercel |
| Icons | Lucide |
| Fonts | Figtree (display), Noto Sans (body), Noto Sans Telugu (scoped) |

> **Note:** BUILD.md specifies "Next.js 15"; the toolkit template actually ships
> **16.2.10**. We stayed on 16. Tailwind v4 has no `tailwind.config.js` — the
> design tokens live in CSS. Follow Next 16 conventions, not Next 15 ones.

## Quick start

```bash
npm install
cp .env.example .env.local     # then fill in the values
npm run dev                    # http://localhost:3000
```

| Command | Does |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npx tsc --noEmit` | Typecheck |

## Environment variables

See `.env.example`. None are required to build — the site degrades gracefully
without them.

| Variable | Required? | Notes |
|---|---|---|
| `ANTHROPIC_API_KEY` | For the chatbot | **Server-side only.** Without it the bot still handles emergencies and symptom questions correctly, and replies "please call the clinic" to everything else. |
| `NEXT_PUBLIC_GTM_ID` | For analytics | GTM container. When unset, no tag loads at all. |
| `NEXT_PUBLIC_SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` | For appointment storage | Not yet wired — see Known gaps. |

Set these in Vercel: `Project → Settings → Environment Variables`, then redeploy.

⚠️ Never prefix a secret with `NEXT_PUBLIC_` — that ships it to the browser.

## Structure

```
src/
├── app/
│   ├── (site)/          # public pages — header, footer, sticky CTA, chatbot
│   ├── lp/              # Google Ads landing pages — no nav, noindex
│   ├── api/
│   │   ├── chat/        # chatbot endpoint (guardrails run before the model)
│   │   └── appointments/# form intake, server-validated
│   ├── design-system/   # living style guide (noindex)
│   ├── globals.css      # ALL design tokens live here
│   ├── sitemap.ts       # excludes /lp/* by design
│   └── robots.ts
├── components/
│   ├── site/            # header, footer, forms, schema, analytics
│   ├── hero/            # 3D visual + capability gate
│   ├── chatbot/         # chat widget
│   └── ui/              # shadcn primitives
└── lib/
    ├── site.ts          # ★ SINGLE SOURCE OF TRUTH for all clinic data
    ├── articles.ts      # patient education content
    ├── analytics.ts     # GTM dataLayer wrapper
    ├── fonts.ts         # global fonts
    ├── fonts-telugu.ts  # ★ isolated on purpose — see below
    └── chatbot/knowledge.ts  # system prompt + safety patterns
```

### Two things that will bite you if you don't know them

**1. `src/lib/site.ts` is the single source of truth.** Phone, address, hours,
conditions, testimonials. Change the phone number there and it updates every
page, the footer, the JSON-LD schema and all three ad landing pages. Never
hardcode clinic details in a component.

**2. `fonts-telugu.ts` is a separate module deliberately.** When the Telugu font
was declared alongside the global fonts, Next emitted and preloaded it on
**every** route — including the homepage, which has no Telugu. That is 121 KB
(the Telugu glyph set is large) and it pushed mobile LCP from 2.6s to 3.4s.
Isolating it into its own module means only the pages that import it pay for it.
**Do not merge it back into `fonts.ts`.**

## Design system

All tokens are in [src/app/globals.css](src/app/globals.css) in three layers:
primitives → semantic → component. Visual reference at `/design-system`.

Palette derives from the clinic's own print creatives — deep navy + cyan/teal,
plum from the Suraksha logo as a sparing accent.

**Every colour pair is WCAG 2.1 AA verified.** Two colours from the original
brief failed and were corrected:

| Colour | Contrast on white | Result |
|---|---|---|
| Amber `#F97316` (proposed) | 2.80:1 | ❌ replaced |
| Cyan `#0891B2` (proposed for actions) | 3.68:1 | ⚠️ large text only |
| Emergency `#C2410C` | 5.18:1 | ✅ AA |
| Action teal `#0E7490` | 5.36:1 | ✅ AA |
| Navy `#103A5E` | 11.74:1 | ✅ AAA |

The bright cyans remain in the system for gradients, glass edges and the 3D
hero — **never for text.** If you add a colour, check the contrast first.

`variant="emergency"` is reserved for the 24/7 call action only. Using it
elsewhere dilutes the one signal that matters at 2 AM.

## Chatbot safety architecture

Read this before touching `src/lib/chatbot/knowledge.ts`.

```
message → local emergency regex ──► phone number, conversation stops
        → local clinical regex  ──► "call the clinic", no medical answer
        → rate limit
        → claude-opus-4-8 with grounded system prompt
        → any failure           ──► phone number
```

**The safety screens run locally, before any network call.** This is deliberate:
if the API is down, slow, rate-limited or the key is missing, an emergency
message still gets the phone number immediately. Patient safety does not depend
on a third party being reachable.

The system prompt is built from the site's own content (`buildKnowledgeBase()`)
so the assistant cannot invent facts about the practice.

**If you widen the emergency regex, test it.** A bare `serious` was matching
"Is my back pain serious?" and showing a chronic-pain patient an emergency
banner. Over-broad patterns are not free — they frighten people.

## Analytics

Everything goes through the GTM dataLayer. **There are no hardcoded `gtag()`
calls in this codebase and there should not be** — GA4, Google Ads conversions,
Meta Pixel and Clarity are all container tags, so the marketing side can change
tracking without a deploy.

Events: `call_click`, `whatsapp_click`, `appointment_form_submit`,
`chatbot_open`, `chatbot_appointment_intent`, `chatbot_emergency_intent`.

## Performance

Measured against the live Vercel deployment (Lighthouse mobile, throttled):

| | Score |
|---|---|
| Performance | 94 |
| Accessibility | **100** |
| Best Practices | **100** |
| SEO | **100** |

LCP 2.9s · CLS 0 · TBT 50ms. Desktop scores 99.

The 868 KB Three.js chunk is **not** in the initial page load — verified. It
loads only after: reduced-motion check passes, device looks capable, hero is in
viewport, and the browser goes idle.

## Known gaps

| Gap | Impact |
|---|---|
| **Supabase not wired** | Appointment requests are validated and logged, not stored. The clinic gets no notification. Persistence is abstracted behind `persist()` in `api/appointments/route.ts` — drop the Supabase client in there. **Do not promote the form as the main booking route until this is done.** |
| `ANTHROPIC_API_KEY` not set on Vercel | Chatbot answers safety cases correctly but defers general questions to the phone. |
| GTM container not created | No analytics yet. |
| Mobile LCP 2.9s vs 2.5s target | Under Lighthouse's deliberately pessimistic throttling. Real 4G is faster. Next lever is trimming the hero image further. |
| 7 npm audit warnings | Transitive dev dependencies, no runtime path. Review before each major bump. |
| Testimonials / awards empty | Waiting on client consent — intentional, not a bug. |
