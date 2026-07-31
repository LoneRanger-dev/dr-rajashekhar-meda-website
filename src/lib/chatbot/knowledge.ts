import { site, conditions } from "@/lib/site";
import { articles } from "@/lib/articles";

/**
 * Knowledge base for Dr. Rajashekhar Meda's AI Assistant.
 */
export function buildKnowledgeBase(): string {
  const conditionText = conditions
    .map(
      (c) =>
        `### ${c.name} (page: /conditions/${c.slug})\n` +
        `${c.summary}\n` +
        `Treats: ${c.treats.join("; ")}.\n` +
        `Reasons to seek help: ${c.whenToSeek.join("; ")}.\n` +
        `Approach: ${c.approach.join("; ")}.`
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

## Surgeries & Treatments
${conditionText}

## Patient education articles
${articleText}
`.trim();
}

export const SYSTEM_PROMPT = `You are the appointment and information assistant for ${site.doctor.name}, ${site.doctor.title} at ${site.hospital.name} in ${site.hospital.city}, Telangana, India.

# What you may talk about
ONLY these topics:
- The doctor's qualifications (M.S. General Surgery), 10+ years experience, and surgical expertise
- Clinic address, directions, consulting hours, and phone numbers (${site.contact.phoneDisplay})
- Which laparoscopic and general surgeries are offered, in educational terms
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
