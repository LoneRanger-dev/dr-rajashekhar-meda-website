import { site } from "@/lib/site";
import { articles } from "@/lib/articles";
import { detailedConditions } from "@/lib/conditionsData";

/**
 * Knowledge base for Dr. Rajashekhar Meda's AI Assistant.
 */
export function buildKnowledgeBase(): string {
  const detailedConditionText = detailedConditions
    .map(
      (c) =>
        `### ${c.name} (${c.shortName}) [page: /conditions/${c.slug}]\n` +
        `Category: ${c.category}\n` +
        `Summary: ${c.summary}\n` +
        `Overview: ${c.overview}\n` +
        `Symptoms: ${c.symptoms.map((s) => `${s.name}: ${s.description}`).join("; ")}\n` +
        `Causes: ${c.causes.map((ca) => `${ca.title}: ${ca.description}`).join("; ")}\n` +
        `Risk Factors: ${c.riskFactors.join(", ")}\n` +
        `Diagnosis: ${c.diagnosis.map((d) => `${d.name} (${d.badge}): ${d.description}`).join("; ")}\n` +
        `Surgical Treatment: ${c.surgicalTreatment}\n` +
        `Laparoscopic/Laser Benefits: ${c.laparoscopicBenefits.map((b) => `${b.title}: ${b.description}`).join("; ")}`
    )
    .join("\n\n");

  const articleText = articles
    .map((a) => `### ${a.title} (page: /blog/${a.slug})\n${a.description}`)
    .join("\n\n");

  return `
## The doctor
Name: ${site.doctor.name} (${site.doctor.nameAlt} / ${site.doctor.nameTelugu})
Qualifications: ${site.doctor.credentials}
Role: ${site.doctor.title}
Experience: 10+ Years of Surgical Excellence

## The hospital
${site.hospital.name} — ${site.hospital.descriptor}
Address: ${site.hospital.addressFull}
Phone: ${site.contact.phoneDisplay} / ${site.contact.phoneSecondaryDisplay}
WhatsApp: ${site.contact.whatsapp}

## Hours
${site.hours.weekday}
${site.hours.sunday}
${site.hours.emergency}

## Surgeries, Diseases & Medical Conditions Treated (All 14 Services)
${detailedConditionText}

## Patient education articles
${articleText}
`.trim();
}

export const SYSTEM_PROMPT = `You are the appointment and information assistant for ${site.doctor.name}, ${site.doctor.title} at ${site.hospital.name} in ${site.hospital.city}, Telangana, India.

# What you may talk about
ONLY these topics:
- The doctor's qualifications (${site.doctor.credentials}), 10+ years experience, and surgical expertise
- Clinic address, directions, consulting hours, email (${site.contact.email}), and phone numbers (${site.contact.phoneDisplay})
- Which laparoscopic, laser proctology, vascular, and general surgeries are offered (Hernia, Gallstones, Appendicitis, Lipoma, Laser Varicose Veins, Piles, Fistula, Fissure, Thyroid, Breast Surgery, Diabetic Foot, Cellulitis, Laparoscopic Abdominal Cancer Surgery, Emergency Trauma)
- Helping the visitor book a surgical consultation or appointment

Use ONLY the facts in the KNOWLEDGE BASE below. If something is not there, say you do not have that information and offer the clinic phone number ${site.contact.phoneDisplay}. Never guess or invent facts about fees, waiting times, or availability.

# ABSOLUTE SAFETY RULES
1. You are NOT a doctor and must NEVER provide medical diagnosis, triage, treatment plans, medication dosages, or personal medical advice.
2. If the visitor asks for personal diagnosis or whether they need immediate surgery, reply briefly that this must be evaluated by Dr. Rajashekhar Meda in person and give the clinic phone number.
3. EMERGENCY: if the message mentions severe abdominal pain, strangulated hernia, high fever with jaundice, acute vomiting, accident trauma, heavy bleeding, or sudden unbearable pain — urgently direct them to call ${site.contact.phoneDisplay} immediately or go to Suraksha Hospital emergency room.

# Booking an appointment
If the visitor wants to book, collect their NAME and MOBILE NUMBER (and optionally preferred date/condition). Once provided, confirm back to them and let them know the clinic team will call to confirm.

# Style
Warm, reassuring, professional, and concise. English or Telugu.

# KNOWLEDGE BASE
${buildKnowledgeBase()}`;

const EMERGENCY_PATTERNS: RegExp[] = [
  /\b(acute|severe|unbearable|intense)\s*(abdominal|stomach|belly)\s*(pain|cramp)/i,
  /\b(appendicitis|appendix|burst|rupture|peritonitis)\b/i,
  /\b(strangulated|trapped|stuck)\s*hernia\b/i,
  /\b(gallbladder|gallstone)\s*(attack|severe pain|jaundice)\b/i,
  /\b(accident|fall|trauma|heavy bleeding|vomiting blood)\b/i,
  /\bemergency (case|admission|surgery)\b/i,
  /\b(dying|critical condition|unconscious)\b/i,
];

export function looksLikeEmergency(message: string): boolean {
  return EMERGENCY_PATTERNS.some((re) => re.test(message));
}

export const EMERGENCY_REPLY = `This sounds like an acute issue requiring immediate medical evaluation. Please call **${site.contact.phoneDisplay}** right now — 24/7 emergency surgical care is available at ${site.hospital.name}, Khammam — or visit the emergency department immediately.`;

const CLINICAL_PATTERNS: RegExp[] = [
  /\bwhat('s| is) wrong with me\b/i,
  /\bdo i (have|need) (surgery|operation)\b/i,
  /\bis (this|it) (serious|dangerous|normal)\b/i,
  /\bwhich (medicine|tablet|antibiotic)\b/i,
  /\bcan you diagnose\b/i,
];

export function needsClinicalRedirect(message: string): boolean {
  return CLINICAL_PATTERNS.some((re) => re.test(message));
}

export const CLINICAL_REPLY = `I am an AI assistant and cannot provide medical diagnostics. For an accurate clinical assessment, please consult Dr. Rajashekhar Meda in person at ${site.hospital.name}.

Call **${site.contact.phoneDisplay}** or tell me your name and phone number to request an appointment.`;

export function getSmartLocalResponse(message: string): string {
  const q = message.toLowerCase();

  // 1. Timings & Hours
  if (/timing|hour|time|open|schedule|when/i.test(q)) {
    return `Dr. Rajashekhar Meda's consulting hours at Suraksha Hospital, Khammam:\n\n• Morning: 10:00 AM – 2:00 PM (Mon – Sat)\n• Evening: 5:00 PM – 8:30 PM (Mon – Sat)\n• Emergency: Available 24/7\n\nFor appointments or urgent visits, call ${site.contact.phoneDisplay}.`;
  }

  // 2. Location & Address
  if (/location|address|where|map|direction|find|hospital/i.test(q)) {
    return `Suraksha Hospital is located at:\n${site.hospital.addressFull}.\n\nIt is opposite the New Bus Stand in Khammam, Telangana. Call ${site.contact.phoneDisplay} for direct directions or assistance.`;
  }

  // 3. Booking Appointment
  if (/book|appointment|consult|slot|visit|meet/i.test(q)) {
    return `To book a surgical consultation with Dr. Rajashekhar Meda (${site.doctor.credentials}):\n\n1. Call directly on ${site.contact.phoneDisplay}\n2. Email: ${site.contact.email}\n3. Or visit our online booking page at /contact#appointment\n\nWalk-in consultations are also available during clinic hours at Suraksha Hospital, Khammam.`;
  }

  // 4. Match all detailed conditions from Services page
  const matchedCondition = detailedConditions.find((c) => {
    const slugMatch = q.includes(c.slug.replace("-", " "));
    const nameMatch = q.includes(c.shortName.toLowerCase());
    const symptomMatch = c.symptoms.some((s) => q.includes(s.name.toLowerCase()));
    return slugMatch || nameMatch || symptomMatch;
  });

  if (matchedCondition) {
    return `**${matchedCondition.name}**\n\n${matchedCondition.summary}\n\n• **Symptoms:** ${matchedCondition.symptoms.map((s) => s.name).join(", ")}\n• **Surgical Approach:** ${matchedCondition.surgicalTreatment}\n\nTo learn more, visit /conditions/${matchedCondition.slug} or call ${site.contact.phoneDisplay} to schedule a consultation with Dr. Rajashekhar Meda.`;
  }

  // Specific condition keyword fallbacks
  if (/hernia|inguinal|umbilical|incisional/i.test(q)) {
    return `Dr. Rajashekhar Meda performs advanced 3D Mesh Laparoscopic Hernia Repair at Suraksha Hospital, Khammam. It offers minimal post-op pain, 24-hour discharge, and minimal recurrence. Visit /conditions/hernia or call ${site.contact.phoneDisplay}.`;
  }

  if (/gallbladder|gallstone|cholecystectomy/i.test(q)) {
    return `Laparoscopic Cholecystectomy (Gallbladder Removal) is performed using mini-port keyhole techniques for fast recovery and 24-hour discharge. Visit /conditions/gallbladder-stones or call ${site.contact.phoneDisplay}.`;
  }

  if (/appendix|appendicitis/i.test(q)) {
    return `24/7 Emergency Laparoscopic Appendectomy is available at Suraksha Hospital to safely remove inflamed appendix via keyholes. Call ${site.contact.phoneDisplay} immediately for emergency care.`;
  }

  if (/piles|hemorrhoid|fissure|fistula|laser|proctology/i.test(q)) {
    return `Dr. Meda specializes in German Diode Laser Surgery for Piles (LHP), Anal Fissures, and Anal Fistula (FiLaC) with zero cutting, minimal pain, and same-day discharge. Call ${site.contact.phoneDisplay} for a consultation.`;
  }

  if (/varicose|vein/i.test(q)) {
    return `Endovenous Laser Ablation (EVLA) for Laser Varicose Veins is available with Dr. Meda. No cuts, no stitches, and immediate walking post-op. Visit /conditions/varicose-veins or call ${site.contact.phoneDisplay}.`;
  }

  if (/diabetic foot|ulcer|gangrene|limb salvage/i.test(q)) {
    return `Dr. Meda provides expert Diabetic Foot Management & Limb Salvage at Suraksha Hospital, Khammam, including surgical debridement and advanced wound care. Visit /conditions/diabetic-foot or call ${site.contact.phoneDisplay}.`;
  }

  if (/cellulitis|skin infection|abscess/i.test(q)) {
    return `Comprehensive Cellulitis Treatment and surgical decompression are available at Suraksha Hospital. Visit /conditions/cellulitis or call ${site.contact.phoneDisplay}.`;
  }

  if (/thyroid|goiter/i.test(q)) {
    return `Dr. Meda performs precision nerve-monitored Thyroidectomy for goiter and nodules. Visit /conditions/thyroid or call ${site.contact.phoneDisplay}.`;
  }

  if (/breast|lumpectomy|fibroadenoma/i.test(q)) {
    return `Cosmetic circumareolar Breast Surgery and lump excision are offered with invisible scarring. Visit /conditions/breast-lump or call ${site.contact.phoneDisplay}.`;
  }

  if (/cancer|tumor|oncology|abdominal cancer/i.test(q)) {
    return `Dr. Meda performs Laparoscopic Abdominal Cancer Surgery (stomach, colon, rectal, abdominal tumors) with 4K keyhole precision and R0 tumor clearance. Visit /conditions/abdominal-cancer-surgery or call ${site.contact.phoneDisplay}.`;
  }

  if (/doctor|qualification|experience|who/i.test(q)) {
    return `${site.doctor.name} (${site.doctor.credentials}) is a Consultant Laparoscopic, Endoscopic & Laser Surgeon with over 10+ years of surgical experience at Suraksha Hospital, Khammam.`;
  }

  return `Dr. Rajashekhar Meda (${site.doctor.credentials}) offers expert Laparoscopic Keyhole Surgeries, Laser Varicose Veins & Proctology, Surgical Oncology, and 24/7 Emergency Care at Suraksha Hospital, Khammam.\n\nFor consultations or inquiries, please call ${site.contact.phoneDisplay} or email ${site.contact.email}.`;
}
