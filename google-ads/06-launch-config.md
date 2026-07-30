# Launch Configuration — Final, Locked

Single reference sheet for everything that has to be set in the Google Ads web
UI because it can't travel through a CSV import. Apply after posting
`01`–`04` (and pasting `05`'s text into the PMax asset group).

## Campaigns & Budgets (locked)

| Campaign | Type | Daily budget | Bid strategy | Schedule | Locations | Languages |
|---|---|---|---|---|---|---|
| Suraksha Emergency - Call Only | Call ads | ₹600 | Maximize conversions | 24/7 | Khammam + 40km, Presence only | English, Telugu |
| Suraksha Neurosurgery - Search | Search | ₹420 | Maximize conversions | Mon–Sat 10:00–20:00, Sun 10:00–14:00 | Khammam + 40km, Presence only | English, Telugu |
| Suraksha Brand Awareness - PMax | Performance Max | ₹180 | Maximize conversions | 24/7 (PMax has no schedule control) | Khammam + 40km, Presence only | English, Telugu |

Total: **₹1,200/day ≈ ₹36,000/month.**

## Location target — exact setup

- Base location: Khammam, Telangana
- Radius: 40 km (covers Kothagudem, Bhadrachalam, Suryapet)
- Target setting: **Presence: people in your targeted locations** — not
  "Presence or interest." This excludes someone in another city merely
  searching about Khammam.
- Do not add statewide Telangana or Hyderabad as a target at launch.

## Call-only campaign — ad type fix

Ads Editor cannot create the "Call ads" campaign subtype through CSV import,
so `01-campaigns-adgroups-keywords.csv` creates *Suraksha Emergency - Call
Only* as a normal Search campaign. After posting:

1. Open the campaign in the Google Ads web UI.
2. Change campaign subtype to **Call**.
3. Set the phone number to **7075 447 449**, country India.
4. Confirm call reporting is enabled so calls count as the primary
   conversion.

## Conversion actions to import (after GTM/GA4 is live)

| Conversion | Primary/Secondary |
|---|---|
| Phone call ≥ 60s (Google Ads call reporting) | Primary |
| `appointment_form_submit` | Primary |
| `whatsapp_click` | Secondary |
| `chatbot_appointment_intent` | Secondary |

`chatbot_emergency_intent` is a safety signal only — never a conversion goal.

## Google Business Profile — client-confirmed

Client confirmed (29 July 2026): Suraksha Hospital and Dr. GRK Reddy's
practice are the same entity — the other "Suraksha Hospital" results found
in search (Wyra Road/Autonagar, B K Bazar Colony/Nizampet) are not a
naming collision to worry about, and "Sri Raksha Hospital" in Nehru Nagar is
a different business. Not a blocker.

One step still worth doing before spending on ads, since it's a five-minute
check with high payoff: confirm the GBP listing tied to this practice is
claimed and its address exactly matches the site's standard NAP —
"Suraksha Hospital, Old Priyadarshini College Building, Nehru Nagar, near
Karnataka Bank, Khammam, Telangana 507002" / "7075 447 449". If it isn't
claimed yet, claim/create it with that exact NAP before Search/Call-only
campaigns start driving Maps-pack traffic.

## Launch order

1. Confirm the Google Business Profile NAP matches (see above — quick check,
   not a blocker).
2. Verify GTM/GA4/conversion events are firing (see
   `Dr_GRK_Reddy_Analytics_Tracking_Setup_Guide.docx` in the project root).
3. Import `01` → `02` → `03` → `04` in Google Ads Editor, review, Post.
4. Paste `05`'s text assets into the PMax asset group in the web UI; add
   image/logo/video assets from the site's existing photography.
5. Apply every setting in this file (locations, languages, schedule,
   call-only ad type, budgets).
6. Import conversion actions from GA4 into Google Ads; mark primaries.
7. Do a final read-through of all live campaigns in Editor before the last
   Post.
