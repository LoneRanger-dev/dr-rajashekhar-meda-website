# VERCEL DEPLOYMENT GUIDE

This guide provides complete instructions for deploying Dr. Rajasekhar Meda's website to Vercel.

---

## 1. Initial Setup & Repository Import

1. Push your local repository to GitHub / GitLab / Bitbucket.
2. Log in to [vercel.com](https://vercel.com).
3. Click **Add New...** → **Project**.
4. Import your Git repository.
5. Configure Project Settings:
   - **Framework Preset:** `Next.js`
   - **Root Directory:** `./`
   - **Build Command:** `npx next build` (or leave default `next build`)
   - **Install Command:** `npm install` (or `pnpm install`)
   - **Output Directory:** `.next` (default)

---

## 2. Environment Variables Configuration

Before clicking Deploy, expand **Environment Variables** and add:

| Key | Value | Environment |
|---|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-XXXXXXXXXX` | Production, Preview |
| `NEXT_PUBLIC_GTM_ID` | `GTM-XXXXXXX` | Production, Preview |
| `NEXT_PUBLIC_AW_CONVERSION_ID` | `AW-XXXXXXXXX` | Production |
| `NEXT_PUBLIC_AW_CALL_CONVERSION` | `LabelString` | Production |
| `NEXT_PUBLIC_AW_FORM_CONVERSION` | `LabelString` | Production |
| `NEXT_PUBLIC_AW_WA_CONVERSION` | `LabelString` | Production |
| `GOOGLE_SITE_VERIFICATION` | `VerificationToken` | Production |
| `NEXT_PUBLIC_GOOGLE_MAPS_EMBED` | `https://www.google.com/maps/embed?...` | Production |
| `OPENAI_API_KEY` | `sk-proj-...` | Production |

Click **Deploy**.

---

## 3. Custom Domain Setup

1. In Vercel Project Dashboard, go to **Settings** → **Domains**.
2. Type `drrajashekharmeda.com` and click **Add**.
3. Select **Add drrajashekharmeda.com and redirect www.drrajashekharmeda.com to it** (or vice versa).
4. Configure DNS Records with your domain registrar (GoDaddy, Namecheap, BigRock, Hostinger):

### DNS Records Table

| Type | Name / Host | Value / Target | TTL |
|---|---|---|---|
| **A** | `@` | `76.76.21.21` | Automatic / 300 |
| **CNAME** | `www` | `cname.vercel-dns.com.` | Automatic / 300 |

5. Wait 2–10 minutes for DNS propagation.
6. Vercel will automatically generate and provision a free **Let's Encrypt SSL Certificate**.

---

## 4. Production Deployment Verification

Once deployed, test the following endpoints:

1. `https://drrajashekharmeda.com` — Homepage renders with 3D canvas deferred
2. `https://drrajashekharmeda.com/robots.txt` — Returns valid robots policy
3. `https://drrajashekharmeda.com/sitemap.xml` — Returns valid sitemap with 31 URLs
4. `https://drrajashekharmeda.com/manifest.webmanifest` — Returns Web App Manifest
5. Tap Phone & WhatsApp buttons on a mobile device to verify link handlers.

---

## 5. Rollback Process

If any deployment introduces an unexpected issue:

1. Go to Vercel Dashboard → **Deployments**.
2. Locate the previous successful deployment.
3. Click the **...** menu next to that deployment.
4. Click **Promote to Production**.
5. The rollback takes effect globally within seconds without rebuilding.
