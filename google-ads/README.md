# Google Ads — Import Guide

Four CSVs, ready for **Google Ads Editor**. Import them in the order below; each
depends on the one before it.

| File | What it creates |
|---|---|
| `01-campaigns-adgroups-keywords.csv` | 3 campaigns, 8 ad groups, 40 keywords with per-keyword landing pages |
| `02-responsive-search-ads.csv` | 5 Responsive Search Ads (10 headlines + 4 descriptions each) |
| `03-negative-keywords.csv` | 63 negative keywords across all campaigns |
| `04-extensions.csv` | Sitelinks, callouts, structured snippets, call and location extensions |

## How to import

1. Download **Google Ads Editor** (free) and sign in to the account.
2. `Account → Import → From file…`
3. Import `01` first, then `02`, `03`, `04`.
4. Review the proposed changes in the left pane — **nothing goes live until you
   click Post.**
5. Click **Post** when you are satisfied.

## Before you post — five things to change

1. **Swap the domain.** Every Final URL points at
   `https://drgrkneuro.com`. Use this production domain for all campaigns.
   find-and-replace that string across all four files.
2. **Set the call-only campaign properly.** `01` creates
   *Suraksha Emergency - Call Only* as a Search campaign because Ads Editor
   cannot create the call-only ad type from CSV. In the web interface, change
   its ad type to **Call ads** and set the phone number to **7075 447 449**.
3. **Set location targeting** (not importable via these files):
   - Khammam + 40 km radius — this covers Kothagudem, Bhadrachalam and Suryapet
   - Target *"Presence: people in your targeted locations"*, **not**
     "presence or interest". Someone in Delhi researching Khammam hospitals is
     not a patient who can attend a clinic.
4. **Set languages:** English **and** Telugu.
5. **Set the ad schedule** for the Search campaign to clinic hours
   (Mon–Sat 10:00–20:00, Sun 10:00–14:00). Leave the **call-only campaign
   running 24/7** — that is the entire point of it.

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

## Two warnings

**Do not run ads before the Google Business Profile is claimed.** Roughly half of
local health searches convert through the Maps pack, not a website. Paying for
clicks while the free listing is missing is the most expensive mistake available
here.

**Watch the search terms report weekly for the first month.** The negative list
in `03` is a solid starting point, but real search terms always surface waste
the list didn't anticipate. Add negatives as you find them.
