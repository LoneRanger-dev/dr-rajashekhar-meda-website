# Maintenance Guide

For whoever looks after this site over time. Assumes basic Git and Node.

---

## Routine schedule

| When | Do |
|---|---|
| **Weekly** (first month of ads) | Read the Google Ads search terms report, add negative keywords |
| **Monthly** | Reply to Google reviews; post to the Business Profile; check GA4 conversions; **tap the phone link on a real mobile** |
| **Quarterly** | `npm outdated`, patch/minor updates, re-run Lighthouse, check for broken links |
| **Annually** | Domain renewal (⚠️ set auto-renew); review all clinic details; major framework upgrade |

The single most valuable recurring check is the monthly one: **click the phone
number on the live site from a real phone.** It catches the failure that costs
actual patients, and takes ten seconds.

---

## Dependency updates

```bash
npm outdated
npm update                 # patch + minor, safe
npm run lint && npx tsc --noEmit && npm run build
```

Only after all three pass, commit and push.

For **major** versions (Next 16 → 17, React 19 → 20), do it deliberately:

```bash
git checkout -b upgrade/next-17
npm install next@latest react@latest react-dom@latest
npm run build
```

Then manually check, in this order:

1. `/` — does the 3D hero still render? Is the hero image still the LCP?
2. `/contact` — submit the form; confirm the success state
3. Chatbot — send "my father hit his head" and confirm the **emergency** response
4. `/design-system` — do the glass surfaces and tokens still look right?
5. Mobile viewport (375px) — is the sticky CTA bar clear of the chat button?

### Framework gotchas

- **Tailwind v4 has no `tailwind.config.js`.** Tokens are CSS custom properties
  in `globals.css`. Guides telling you to edit a config file are for v3.
- **Base UI, not Radix.** shadcn components use `render={<a />}` where Radix used
  `asChild`. Our `Button` auto-sets `nativeButton={false}` when `render` is
  present — without that, Base UI logs a console error on every call button.
- **Next 16 differs from Next 15.** `node_modules/next/dist/docs/` is the
  authoritative reference; the template's `AGENTS.md` warns about this too.

---

## Security

- **Rotate `ANTHROPIC_API_KEY`** if it is ever exposed:
  console.anthropic.com → revoke → issue new → update in Vercel → redeploy.
- **Never** prefix a secret with `NEXT_PUBLIC_`. That ships it to every browser.
- `.env*` is gitignored (with an explicit exception for `.env.example`, which
  contains no secrets). Before any push: `git status` should never list `.env.local`.
- The chatbot endpoint has basic in-memory rate limiting. It resets per
  serverless instance, so it throttles casual abuse, not a determined attacker.
  If you see unexpected API spend, move it to Upstash or Supabase.

---

## Finishing the Supabase integration

This is the main outstanding task. Appointment requests currently validate and
log but do not persist, so the clinic gets no notification.

**1. Create the table**

```sql
create table appointments (
  id             uuid primary key default gen_random_uuid(),
  created_at     timestamptz not null default now(),
  name           text not null,
  phone          text not null,
  reason         text,
  preferred_date text,
  notes          text,
  source         text not null default 'website_form',
  status         text not null default 'new'
);

alter table appointments enable row level security;
-- No public policies: only the service role may read or write.
```

**2. Set env vars in Vercel** — `NEXT_PUBLIC_SUPABASE_URL` and
`SUPABASE_SERVICE_ROLE_KEY` (the service role key is server-only — never
`NEXT_PUBLIC_`).

**3. Fill in `persist()`** in `src/app/api/appointments/route.ts`. The function
is already isolated for exactly this — the validation contract and the form do
not change.

**4. Add clinic notification.** A row in a table nobody watches is not a booking.
Add an email (Resend) or WhatsApp message to the clinic on insert. **Test that
the clinic actually receives it before telling them the form is live.**

**5. Point the chatbot at the same route** so bot-collected appointments land in
the same table.

---

## Backups

| Asset | Backed up by | Action needed |
|---|---|---|
| Source code | GitHub | None — it is the backup |
| Deployment | Vercel keeps history | Roll back in the dashboard |
| Images | In the repo | None |
| Appointment data | ❌ Nothing yet | Once Supabase is live, enable Point-in-Time Recovery, and export monthly |
| Domain | ⚠️ Nothing | **Set auto-renew** |

The riskiest item on this list is the domain. An expired domain takes the site
and any email on it offline, and recovery can be expensive and slow.

---

## Troubleshooting

| Symptom | Likely cause |
|---|---|
| Site down | Check vercel-status.com, then the Vercel deployment log |
| Chatbot says "assistant isn't available" | `ANTHROPIC_API_KEY` missing or invalid in Vercel |
| Chatbot answers safety questions but not general ones | Same — the local guardrails work without the key by design |
| No analytics data | `NEXT_PUBLIC_GTM_ID` unset, or GTM container not published |
| Form submits but clinic gets nothing | Expected — Supabase not wired yet (see above) |
| Fonts look wrong | Check `fonts.ts` / `fonts-telugu.ts` are still separate modules |
| Build fails after dependency update | `rm -rf .next node_modules package-lock.json && npm install` |
| 3D hero not showing | Working as designed on low-end devices, small screens, or reduced-motion. Test on desktop with motion enabled. |

---

## Content changes

Almost everything lives in `src/lib/site.ts`.

**Adding a testimonial** — only with written consent on file:

```ts
export const testimonials = [
  {
    quote: "…",
    name: "R. Kumar",           // or "R.K." if they preferred initials
    condition: "Spine surgery",
    consentOnFile: true,        // must be true
  },
];
```

The Reviews page switches from the placeholder to the real grid automatically.

**Adding an award:**

```ts
export const awards = [{ title: "…", year: "2024" }];
```

**Adding a health article** — append to `src/lib/articles.ts`. It appears on
`/blog` and in the sitemap automatically. Every article needs a `seekHelp` array;
that block is what routes an urgent reader to the phone, and it is not optional.

---

## Deploying

Pushes to `main` do **not** auto-deploy — the Vercel GitHub connection was not
authorised for the private repo. Either:

**Connect it once** (recommended): Vercel dashboard → Project → Settings → Git →
connect `LoneRanger-dev/suraksha-neuro`. Pushes then deploy automatically.

**Or deploy manually:**

```bash
npm run lint && npx tsc --noEmit && npm run build   # all three must pass
npx vercel --prod
```

Never deploy a build with lint or type errors. If you are in a hurry and
tempted to skip the checks, that is exactly when the phone number breaks.
