# CLIENT HANDOVER DOCUMENTATION

**Client:** Dr. Rajasekhar Meda / Suraksha Hospital  
**Project:** Web Platform & Digital Presence  
**Handover Date:** July 31, 2026  

---

## 1. Project Access & Links

- **Repository:** `d:\Dr.Rajashekhar` (GitHub link to be updated by admin)
- **Production URL:** `https://drrajashekharmeda.com`
- **Hosting Platform:** Vercel Project Dashboard
- **Analytics Platform:** Google Analytics 4 Dashboard
- **Tag Manager:** Google Tag Manager Container
- **Search Console:** Google Search Console Property

---

## 2. Administrative Responsibilities

### Client / Clinic Management Team:
1. **Appointment Requests:** Monitor incoming calls to `90590 33575` / `7075 447 449` and WhatsApp messages from `8128126849`.
2. **Patient Reviews:** Send Google Review link to satisfied post-op patients and respond using templates in `launch/google-business-profile/review-response-templates.md`.
3. **Google Posts:** Publish weekly update posts on Google Business Profile from `launch/google-business-profile/first-10-google-posts.md`.
4. **Email Confirmation:** Provide official clinic email address (`TODO_CLIENT_EMAIL`) to receive website lead notifications.

---

## 3. Monthly Maintenance Tasks

| Task | Schedule | Responsible Party |
|---|---|---|
| Check GA4 traffic and lead conversion reports | 1st of every month | Marketing Team |
| Check Search Console crawl errors and impressions | 1st of every month | Technical Developer |
| Publish 4 Google Business Profile updates | Weekly | Marketing Team |
| Review and update consultation hours if holidays occur | As needed | Clinic Admin |
| Run `npm audit` & update dependencies | Quarterly | Technical Developer |

---

## 4. Backup & Security Strategy
- **Source Code Backup:** Automated version control via GitHub.
- **Hosting Infrastructure:** Vercel edge redundancy with instant 1-click rollback capability.
- **SSL Certificate:** Automatically auto-renewed every 90 days by Vercel / Let's Encrypt.
- **Form Security:** Client-side sanitization + server-side validation on `/api/appointments`.

---

## 5. Account Access Checklist for Client
Ensure access is granted to `dr.rajashekharmeda@gmail.com` (or client designated email) for:
- [ ] Vercel Team Account (Owner / Admin)
- [ ] Google Analytics 4 (Administrator)
- [ ] Google Tag Manager (Administrator)
- [ ] Google Search Console (Owner)
- [ ] Google Business Profile (Primary Owner)
- [ ] Domain Registrar (GoDaddy / Hostinger Account)

---

## 6. Renewal Reminders Schedule

- **Domain Renewal (`drrajashekharmeda.com`):** Annual (Set to auto-renew with registrar)
- **Vercel Hosting:** Free Tier / Pro Monthly Subscription
- **SSL Certificate:** Free, fully automated by Vercel
