# Client Handover — Your New Website

**For:** Dr. Gade Ramakrishna Reddy and the Suraksha Hospital team
**Live site:** https://drgrkneuro.com

This guide is written for clinic staff, not developers. No coding knowledge needed.

---

## 1. What you have

A website with 15 pages covering:

- **Home** — your credentials, the conditions you treat, and the 24/7 message
- **About Dr. Reddy** — qualifications and academic role
- **Conditions & Treatments** — four pages: Spine, Brain & Trauma, Epilepsy, MISS
- **Hospital Facilities** — Suraksha Hospital, ICU, location and hours
- **Patient Reviews** — currently empty, waiting for your testimonials (see §4)
- **Health Education** — three patient guides written from your existing posters
- **Contact** — appointment request form
- **Three advertising pages** — used only by Google Ads, not linked in the menu

Plus an **AI assistant** (bottom-right button) that answers questions about
timings, location and what you treat, and helps patients request appointments.

---

## 2. The five things that matter most

### 🔴 Priority 1 — Claim your Google Business Profile

**This is the single most valuable thing you can do, and it is free.**

Right now, searching "neurosurgeon in Khammam" does not show your practice. About
half of local patients find a clinic through Google Maps, not a website. Until the
profile is claimed, that half cannot find you at all.

1. Go to **google.com/business**
2. Search for "Suraksha Hospital Khammam"
3. If it exists, click **Claim this business**. If not, click **Add your business**
4. Use exactly this information — it must match the website character for character:
   - **Name:** Suraksha Hospital
   - **Address:** Old Priyadarshini College Building, Nehru Nagar, near Karnataka Bank, Khammam, Telangana
   - **Phone:** 7075 447 449
   - **Categories:** Neurosurgeon (primary), Spine Surgeon, Hospital
   - **Hours:** Mon–Sat 10:00–20:00, Sun 10:00–14:00
5. Write the business description in **both English and Telugu**
6. Upload your existing posters and clinic photos

**Do not start paying for Google Ads before this is done.** You would be paying
for clicks while the free listing that half your patients use is missing.

### 🔴 Priority 2 — Collect patient reviews

Reviews do two jobs at once: they reassure patients comparing surgeons, and they
are one of the strongest factors in whether you appear in local search results.

Ask satisfied patients to review you on Google. A simple approach that works:
after a successful follow-up, hand them a card with a short link to your review
page. Never offer anything in exchange for a review — Google removes those and
can penalise the listing.

### 🟠 Priority 3 — Send us your testimonials

The Patient Reviews page is deliberately empty. We did not write fake
testimonials, because publishing invented patient quotes is both unethical and a
regulatory risk for a medical practice.

To activate the page, send us 5–10 real testimonials. For each one we need:
- The patient's words
- Their **written consent** to publish
- Whether they agree to their full name, or prefer initials only

### 🟠 Priority 4 — Confirm your details

We need you to confirm or supply:

| Item | Currently |
|---|---|
| Postcode | We used 507001 — please confirm |
| WhatsApp number | Assumed same as 7075 447 449 — confirm or give us the separate Business number |
| Awards / publications | **None listed.** We found none in the material you gave us and did not invent any. Send any awards, published papers or fellowships. |
| Clinic email | Not on the site yet |
| Hospital photos | We have none. Photos of the reception, ICU and operating theatre would help patients a lot. **No identifiable patients in any photo.** |
| Final domain name | `drgrkneuro.com` |

### 🟡 Priority 5 — Buy your domain name

See the next section.

---

## 3. Production web address

The production site is `drgrkneuro.com`. Use this address on visiting cards,
prescription pads, Google Business Profile, and all advertising materials.

**Operational note:** Keep the domain set to auto-renew and ensure it remains
connected to the Vercel project.

⚠️ **Set the domain to auto-renew.** A domain that expires takes the website and
any email on it offline, and recovering a lapsed domain can be expensive.

---

## 4. Changing content on the site

All the information a person would normally want to change — phone number,
address, clinic hours, the conditions list, testimonials — lives in **one single
file**. Change it there and it updates on every page, in the footer, in the
Google listing data, and on all three advertising pages at once.

That file is `src/lib/site.ts`.

**You do not need to edit this yourself** — send the change to your developer and
it is a two-minute job. But it is useful to know it is one small file and not a
big rebuild, so nobody can tell you a phone number change is a large project.

| To change… | It is a… |
|---|---|
| Phone, address, hours, WhatsApp number | One-line edit |
| Adding a testimonial | One short block, copy the existing pattern |
| Adding an award | One line |
| Adding a condition page | Half an hour |
| Writing a new health article | 1–2 hours, mostly writing |

---

## 5. How the AI assistant works

The button in the bottom-right corner opens an assistant that can answer
questions about your timings, location, and the conditions you treat, and can
help a patient request an appointment.

**What it will never do — this is built in and enforced, not just requested:**

- It will not diagnose, suggest treatment, or name any medicine or dose
- If someone describes symptoms or asks "is this serious?", it replies that this
  needs Dr. Reddy to assess in person, and gives the phone number
- If someone mentions a head injury, unconsciousness, a seizure, sudden weakness
  or slurred speech, it **stops the conversation immediately** and tells them to
  call you or go to the nearest emergency department. It does not ask follow-up
  questions and does not try to judge how serious it is.

The emergency and symptom checks run on the website itself, **before** the AI is
contacted. That matters: even if the AI service is down or slow, an emergency
message still gets your phone number instantly.

**One thing to know:** the assistant needs an API key to answer general
questions. Until that key is added, it still works safely — emergencies and
symptom questions get the right response — but general questions reply
"please call the clinic." See the README for how to add the key.

---

## 6. What to check each month

Ten minutes, once a month:

1. **Google Business Profile** — any new reviews? Reply to all of them, good and bad.
2. **Post to the profile** — one post a week using your existing poster designs.
3. **Google Analytics** — how many people called or submitted the form?
4. **If ads are running** — what is the cost per appointment? Is it going up or down?
5. **Test the phone number** on your own mobile from the live site. This catches problems fastest.

---

## 7. Who to contact

| Issue | Contact |
|---|---|
| Website is down | Your developer |
| Change phone, hours, address | Your developer (quick edit) |
| Domain renewal | Whoever you bought the domain from |
| Google Ads not performing | Whoever manages the ad account |
| Add a testimonial | Your developer, with written consent attached |

---

## 8. Honest limitations

Things this website does **not** do, so there are no surprises:

- **No online payment.** Patients cannot pay a consultation fee online.
- **No live appointment calendar.** The form sends a request; your staff still
  call back to confirm a time. This is deliberate — a real calendar needs to
  connect to how you actually schedule patients.
- **The form is not a medical record system.** It is not secure enough for
  clinical information, and the form itself tells patients not to enter medical
  history.
- **Appointment requests are currently logged, not stored in a database.**
  Connecting the database (Supabase) is a follow-up task — see the README.
  Until then, the form works and confirms to the patient, but the clinic will
  not receive an automatic notification. **Do not advertise the form as the main
  booking route until this is connected.**
- **English only, mostly.** Your name, the hospital name and headings appear in
  Telugu, but the main content is English. Full Telugu translation is a
  worthwhile future addition given your patient base.
