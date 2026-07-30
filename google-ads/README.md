# Google Ads — Import Guide

*Verified and finalized 29 July 2026 — see Verification Log at the bottom.*
*Status: **LOCKED for launch.** All open decisions below have been resolved —
see `06-launch-config.md` for the single consolidated settings sheet.*

Five CSVs, ready for **Google Ads Editor**. Import the first four in the order
below; each depends on the one before it. File `05` is a reference sheet, not
a direct bulksheet import (see note in that section).

| File | What it creates |
|---|---|
| `01-campaigns-adgroups-keywords.csv` | 3 campaigns, 8 ad groups, 40 keywords with per-keyword landing pages |
| `02-responsive-search-ads.csv` | 5 Responsive Search Ads (10 headlines + 4 descriptions each) |
| `03-negative-keywords.csv` | 63 negative keywords across all campaigns |
| `04-extensions.csv` | Sitelinks, callouts, structured snippets, call and location extensions |
| `05-pmax-asset-group.csv` | Text assets (headlines, descriptions, business name) for the Performance Max asset group |

## How to import

1. Download **Google Ads Editor** (free) and sign in to the account.
2. `Account → Import → From file…`
3. Import `01` first, then `02`, `03`, `04`.
4. Review the proposed changes in the left pane — **nothing goes live until you
   click Post.**
5. Click **Post** when you are satisfied.
6. For `05`, open the PMax campaign's asset group in the **web UI** (not
   Editor) and paste in the headlines/descriptions manually — Performance Max
   asset groups need at least one image, logo, and video, which can't travel
   through a text CSV. Use the site's existing photography (hospital exterior,
   doctor portrait, ICU/facility shots — already in `public/images/`) for the
   images and logo.

## Before you post — settings to apply in the web UI (not CSV-importable)

These are locked decisions, not open questions — apply them as-is. Full detail
in `06-launch-config.md`.

1. ~~Swap the domain~~ — **already correct.** All Final URLs point at
   `https://drgrkneuro.com`, the live production domain, and all three `/lp/`
   landing pages return HTTP 200 (verified 29 July 2026). No change needed.
2. **Call-only campaign:** `01` creates *Suraksha Emergency - Call Only* as a
   Search campaign because Ads Editor cannot create the call-only ad type
   from CSV. In the web interface, change its ad type to **Call ads** and set
   the phone number to **7075 447 449**.
3. **Location targeting — decided: Khammam + 40 km radius**, *"Presence: people
   in your targeted locations"* (not "presence or interest"). This covers
   Kothagudem, Bhadrachalam and Suryapet. Statewide Telangana reach was
   considered and rejected as the primary target — a hospital-based specialist
   practice converts on proximity, not reach, and statewide spend would mostly
   buy unconvertible Hyderabad-area clicks. If reach still matters later, add
   the rest of Telangana as a separate, low bid-adjustment secondary location
   rather than reworking the core targeting.
4. **Languages — decided: English and Telugu.**
5. **Ad schedule — decided:** Search campaign runs clinic hours (Mon–Sat
   10:00–20:00, Sun 10:00–14:00). Call-only campaign runs 24/7.
6. **Google Business Profile:** client confirmed Suraksha Hospital and this
   practice are the same entity — the other Khammam "Suraksha Hospital"
   results and the separate "Sri Raksha Hospital" listing are not a naming
   collision to worry about. Not a blocker. Still worth a quick check that
   the GBP tied to this practice is claimed with the exact NAP used on the
   site — "Suraksha Hospital, Old Priyadarshini College Building, Nehru
   Nagar, near Karnataka Bank, Khammam, Telangana 507002" / "7075 447 449".

## Budget

Total **₹1,200/day ≈ ₹36,000/month**, split per BUILD.md's recommendation:

| Campaign | Daily | Share | Why |
|---|---|---|---|
| Suraksha Emergency - Call Only | ₹600 | 50% | Highest intent, lowest cost per patient. Someone searching "emergency neurosurgeon" at 2 AM converts on the phone, not a form. |
| Suraksha Neurosurgery - Search | ₹420 | 35% | Chronic-pain patients researching over days or weeks. |
| Suraksha Brand Awareness - PMax | ₹180 | 15% | Deliberately smallest. PMax is a black box — don't feed it much until the Search data shows what converts. |

Start here, then **reassess after 2–3 weeks** and shift budget toward whichever
campaign shows the lower cost-per-appointment.

## Conversion tracking

Do **not** create conversion actions directly in Google Ads. Everything is wired
through GTM (see the site's tracking setup), so the site fires one event and every
platform reads it:

| Conversion | Source event | Count as |
|---|---|---|
| Phone call ≥ 60s | Google Ads call reporting | Primary |
| Appointment form submit | `appointment_form_submit` | Primary |
| WhatsApp click | `whatsapp_click` | Secondary |
| Chatbot appointment intent | `chatbot_appointment_intent` | Secondary |

Mark only the two primaries as *Primary* conversion actions — otherwise
Smart Bidding optimises toward cheap WhatsApp clicks instead of actual patients.

`chatbot_emergency_intent` is a **safety signal, not a conversion**. Never
optimise bidding toward it.

## One remaining check + one warning

**Confirm the Google Business Profile is claimed with the correct NAP** before
running ads — not a blocker (client confirmed the hospital/practice identity
is unambiguous), but roughly half of local health searches convert through
the Maps pack, so it's worth five minutes to verify the listing exists and
matches the site's address exactly.

**Watch the search terms report weekly for the first month.** The negative list
in `03` is a solid starting point, but real search terms always surface waste
the list didn't anticipate. Add negatives as you find them.

## Verification Log (29 July 2026)

- All Final URLs confirmed pointing at the live production domain — no
  find-and-replace needed.
- All three `/lp/` landing pages (`spine-surgery-khammam`,
  `emergency-neurosurgery-khammam`, `epilepsy-treatment-khammam`) return
  HTTP 200. They're intentionally absent from `sitemap.xml`, consistent with
  being paid-traffic-only, noindexed pages.
- Every RSA headline, description, and path checked against Google's
  character limits (30 / 90 / 15) — all pass.
- Extensions checked against limits (sitelink text 25, callout 25, structured
  snippet value 25) — **found and fixed 3 violations**: "Minimally Invasive
  Surgery" (26 chars) in the sitelink, callout, and structured snippet rows
  was shortened to "Minimally Invasive Spine" (24 chars) in all three places.
- Negative keyword lists reviewed per campaign (45 Search / 13 Call-only / 5
  PMax) — no conflicts with active keyword targets.
- Added `05-pmax-asset-group.csv` — the PMax campaign previously had a budget
  row but no creative assets, which would have blocked it from serving.
