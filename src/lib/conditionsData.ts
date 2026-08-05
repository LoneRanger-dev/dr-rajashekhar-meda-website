export interface SymptomItem {
  name: string;
  description: string;
  iconName: "pain" | "swelling" | "fever" | "vomiting" | "bulge" | "bleeding" | "constipation" | "digestive" | "skin" | "fatigue";
}

export interface CauseItem {
  title: string;
  description: string;
}

export interface DiagnosticStep {
  name: string;
  description: string;
  badge: "Primary" | "Advanced" | "Routine" | "Emergency";
}

export interface RecoveryStage {
  timeframe: string;
  title: string;
  details: string;
}

export interface ConditionFAQ {
  question: string;
  answer: string;
}

export interface ConditionDetail {
  slug: string;
  name: string;
  shortName: string;
  category: "Laparoscopic Surgery" | "Laser & Vascular Surgery" | "General & Surgical Oncology";
  summary: string;
  overview: string;
  symptoms: SymptomItem[];
  causes: CauseItem[];
  riskFactors: string[];
  diagnosis: DiagnosticStep[];
  nonSurgicalTreatment: string;
  surgicalTreatment: string;
  laparoscopicBenefits: {
    title: string;
    description: string;
  }[];
  recoveryTimeline: RecoveryStage[];
  faqs: ConditionFAQ[];
  relatedSlugs: string[];
}

export const detailedConditions: ConditionDetail[] = [
  // 1. HERNIA
  {
    slug: "hernia",
    name: "Laparoscopic Hernia Repair",
    shortName: "Hernia",
    category: "Laparoscopic Surgery",
    summary: "Advanced 3D mesh laparoscopic keyhole repair for Inguinal, Umbilical, Incisional, and Ventral hernias with minimal recurrence and fast recovery.",
    overview: "A hernia occurs when an internal organ or fatty tissue squeezes through a weak spot or tear in the surrounding abdominal muscle wall. Dr. Rajashekhar Meda performs advanced minimally invasive 3D mesh keyhole laparoscopic repair at Suraksha Hospital, Khammam, ensuring minimal postoperative discomfort and rapid return to daily active living.",
    symptoms: [
      { name: "Visible Bulge", description: "A noticeable swell or lump in the groin or abdominal region.", iconName: "bulge" },
      { name: "Dragging Pain", description: "A dull ache or dragging sensation when standing, coughing, or bending.", iconName: "pain" },
      { name: "Discomfort on Lifting", description: "Sharp discomfort during physical exertion or heavy lifting.", iconName: "pain" },
      { name: "Enlarging Swelling", description: "A bulge that increases in size over time or towards the end of the day.", iconName: "swelling" },
    ],
    causes: [
      { title: "Abdominal Muscle Weakness", description: "Congenital weakness or age-related weakening of muscle fibers." },
      { title: "Increased Intra-Abdominal Pressure", description: "Chronic coughing, heavy weightlifting, or persistent strain." },
      { title: "Prior Surgical Incisions", description: "Incomplete healing of previous abdominal incisions leading to incisional hernia." },
    ],
    riskFactors: ["Heavy physical lifting", "Chronic cough or constipation", "Obesity & sudden weight gain", "Multiple pregnancies", "Advanced age"],
    diagnosis: [
      { name: "Clinical Physical Exam", description: "Thorough physical assessment in standing and lying positions by Dr. Meda.", badge: "Primary" },
      { name: "High-Resolution Ultrasound", description: "Precise ultrasound imaging to map defect size and organ contents.", badge: "Routine" },
      { name: "Contrast CT Scan", description: "Detailed 3D imaging reserved for complex, recurrent, or large incisional hernias.", badge: "Advanced" },
    ],
    nonSurgicalTreatment: "Trusses or abdominal binders provide temporary support but cannot repair muscle defects. Surgery is the definitive cure to prevent strangulation.",
    surgicalTreatment: "Laparoscopic keyhole mesh repair (TAPP / TEP technique) places a bi-compatible 3D prosthetic mesh behind the muscle wall via tiny 3mm incisions.",
    laparoscopicBenefits: [
      { title: "3-5mm Keyhole Incisions", description: "No large painful abdominal cuts or disfiguring surgical scars." },
      { title: "Tension-Free 3D Mesh", description: "Reinforces the entire abdominal wall defect with minimal recurrence risk." },
      { title: "Overnight Hospital Stay", description: "Most patients are discharged within 24 hours of surgery." },
      { title: "Fast Work Return", description: "Resume light desk work in 3-5 days and active routine in 10 days." },
    ],
    recoveryTimeline: [
      { timeframe: "Day 1", title: "Post-op Mobilization", details: "Walk comfortably in the hospital room within 4-6 hours post-op." },
      { timeframe: "Week 1", title: "Home Discharge", details: "Discharge from hospital; comfortable walking and light daily activities." },
      { timeframe: "Week 2", title: "Normal Routine", details: "Resume normal diet, driving, and routine office work." },
      { timeframe: "Week 4", title: "Active Living", details: "Resume moderate exercise and light physical training." },
      { timeframe: "Month 2", title: "Full Clearance", details: "Complete clearance for heavy lifting and strenuous athletic sports." },
    ],
    faqs: [
      { question: "What happens if a hernia is left untreated?", answer: "Untreated hernias can enlarge over time and risk incarceration or strangulation (trapped intestine cutting off blood supply), which requires emergency surgery." },
      { question: "Is mesh safe for hernia repair?", answer: "Yes, modern medical-grade monofilament 3D polypropylene mesh is biocompatible, highly flexible, and drastically reduces hernia recurrence to under 1%." },
      { question: "How small are the incisions in keyhole laparoscopic hernia surgery?", answer: "Laparoscopic repair uses 3 tiny keyhole punctures (3mm to 10mm), leaving virtually unnoticeable scars." },
      { question: "When can I walk after laparoscopic hernia surgery?", answer: "Patients are encouraged to walk within 4 to 6 hours after surgery at Suraksha Hospital." },
      { question: "How long is the hospital stay for hernia surgery in Khammam?", answer: "Most patients are safely discharged within 24 hours." },
      { question: "Can a hernia heal on its own without surgery?", answer: "No, abdominal muscle defects cannot self-heal. Surgical repair is the only permanent solution." },
      { question: "What is the difference between open and laparoscopic hernia repair?", answer: "Open repair requires a 6-10cm incision through muscle. Laparoscopic repair uses tiny keyholes, resulting in less pain, lower infection rates, and faster recovery." },
      { question: "Will I feel the mesh after surgery?", answer: "No, the mesh is placed deep within the preperitoneal space and integrates smoothly with body tissue." },
    ],
    relatedSlugs: ["gallbladder-stones", "appendicitis", "varicose-veins", "intestinal-colon-surgery"],
  },

  // 2. GALLBLADDER STONES
  {
    slug: "gallbladder-stones",
    name: "Laparoscopic Gallbladder Surgery (Cholecystectomy)",
    shortName: "Gallbladder Stones",
    category: "Laparoscopic Surgery",
    summary: "Gold-standard keyhole laparoscopic removal of gallbladder for painful gallstones, sludge, and cholecystitis with 24-hour discharge.",
    overview: "Gallbladder stones (Cholelithiasis) are hard deposits that form in the gallbladder, causing severe upper right abdominal pain (biliary colic), nausea, and digestive disturbance. Left untreated, they can cause acute cholecystitis, jaundice, or life-threatening pancreatitis. Dr. Meda performs Laparoscopic Cholecystectomy.",
    symptoms: [
      { name: "Upper Right Abdominal Pain", description: "Sudden sharp pain in upper right abdomen radiating to back.", iconName: "pain" },
      { name: "Nausea & Vomiting", description: "Queasiness or vomiting, especially after fatty or oily meals.", iconName: "vomiting" },
      { name: "Indigestion & Bloating", description: "Fullness, gas, and belching after eating.", iconName: "digestive" },
      { name: "Jaundice & Fever", description: "Yellowish eyes or skin and fever if bile duct gets blocked.", iconName: "fever" },
    ],
    causes: [
      { title: "Bile Cholesterol Supersaturation", description: "Excess cholesterol forming crystals that solidify into gallstones." },
      { title: "Gallbladder Hypomotility", description: "Incomplete emptying of gallbladder allowing bile sludge to concentrate." },
    ],
    riskFactors: ["Female gender", "Age > 40", "High-fat diet & obesity", "Rapid weight changes", "Pregnancy"],
    diagnosis: [
      { name: "Abdominal Ultrasound", description: "Gold-standard imaging detecting gallstones as small as 2mm.", badge: "Primary" },
      { name: "Liver Function Tests (LFT)", description: "Blood panel checking bilirubin and liver enzymes.", badge: "Routine" },
      { name: "MRCP / CT Scan", description: "Magnetic resonance mapping if common bile duct stones are suspected.", badge: "Advanced" },
    ],
    nonSurgicalTreatment: "Medicines cannot permanently dissolve gallstones. Surgical removal of the gallbladder (Cholecystectomy) is the only definitive medical treatment.",
    surgicalTreatment: "Laparoscopic Cholecystectomy removes the diseased gallbladder along with stones through 3-4 tiny keyholes (3mm-10mm).",
    laparoscopicBenefits: [
      { title: "Minimal Post-Op Discomfort", description: "Significantly less pain than traditional open abdominal surgery." },
      { title: "24-Hour Hospital Stay", description: "Admitted in the morning and safely home the next day." },
      { title: "Invisible Scarring", description: "Tiny keyhole punctures fade into faint natural skin lines." },
      { title: "Normal Digestion Preserved", description: "Liver continues to produce bile, allowing normal food digestion." },
    ],
    recoveryTimeline: [
      { timeframe: "Day 1", title: "Keyhole Operation", details: "Laparoscopic removal in 45 mins; sips of water in 4 hours." },
      { timeframe: "Week 1", title: "Home Discharge", details: "Normal walking at home; light low-fat diet." },
      { timeframe: "Week 2", title: "Regular Diet & Work", details: "Return to normal diet and office duties." },
      { timeframe: "Month 1", title: "Full Recovery", details: "Complete recovery with zero digestive restrictions." },
    ],
    faqs: [
      { question: "Can I digest food normally without a gallbladder?", answer: "Yes! The gallbladder only stores bile. After removal, the liver secretes bile directly into the small intestine, allowing normal digestion." },
      { question: "Is laparoscopic gallbladder removal safe?", answer: "Yes, Laparoscopic Cholecystectomy is one of the safest and most commonly performed keyhole surgeries worldwide." },
    ],
    relatedSlugs: ["hernia", "appendicitis", "varicose-veins", "intestinal-colon-surgery"],
  },

  // 3. APPENDICITIS
  {
    slug: "appendicitis",
    name: "Laparoscopic Appendectomy",
    shortName: "Appendicitis",
    category: "Laparoscopic Surgery",
    summary: "24/7 emergency keyhole appendix removal for acute appendicitis to prevent rupture, peritonitis, and severe infection.",
    overview: "Acute Appendicitis is a painful inflammation of the appendix requiring immediate emergency surgical removal. Delaying treatment risks appendix rupture (burst appendix), causing widespread abdominal infection (peritonitis). Dr. Meda provides 24/7 Emergency Laparoscopic Appendectomy at Suraksha Hospital, Khammam.",
    symptoms: [
      { name: "Lower Right Abdominal Pain", description: "Pain starting near belly button and moving to lower right abdomen.", iconName: "pain" },
      { name: "Fever & Chills", description: "Low to high-grade fever accompanied by nausea.", iconName: "fever" },
      { name: "Vomiting & Loss of Appetite", description: "Inability to eat food due to persistent nausea and pain.", iconName: "vomiting" },
      { name: "Abdominal Tenderness", description: "Sharp pain when touching or pressing the right lower abdomen.", iconName: "pain" },
    ],
    causes: [
      { title: "Appendiceal Lumen Obstruction", description: "Fecalith (hardened stool), lymphoid hyperplasia, or foreign body blocking the appendix." },
    ],
    riskFactors: ["Age 10-30", "Low-fiber diet", "Family history"],
    diagnosis: [
      { name: "Clinical Examination", description: "Assessment for McBurney's point tenderness and rebound rigidity.", badge: "Primary" },
      { name: "High-Resolution Ultrasound", description: "Demonstrating inflamed, non-compressible appendix > 6mm.", badge: "Routine" },
      { name: "Contrast CT Scan", description: "Definitive imaging for complicated or ruptured appendicitis.", badge: "Advanced" },
    ],
    nonSurgicalTreatment: "Antibiotics alone carry a 30-40% recurrence rate and risk sudden rupture. Surgical appendectomy is the gold-standard cure.",
    surgicalTreatment: "Laparoscopic Appendectomy extracts the inflamed appendix through three 3mm-5mm keyhole ports.",
    laparoscopicBenefits: [
      { title: "24/7 Emergency Availability", description: "Immediate admission and keyhole operation day or night." },
      { title: "Complete Abdominal Washout", description: "Laparoscope allows thorough washing if appendix has leaked or ruptured." },
      { title: "Same-Day / 24h Discharge", description: "Fast recovery with minimal wound infection risk." },
    ],
    recoveryTimeline: [
      { timeframe: "Day 1", title: "Emergency Keyhole Removal", details: "Immediate surgery; walk in room post-op." },
      { timeframe: "Week 1", title: "Discharge & Soft Diet", details: "Discharge home; light meals and walking." },
      { timeframe: "Week 2", title: "Full Routine", details: "Resume school, college, or office work." },
    ],
    faqs: [
      { question: "What happens if a burst appendix is left untreated?", answer: "A burst appendix releases pus into the abdominal cavity, causing life-threatening peritonitis that requires emergency laparoscopic peritoneal lavage." },
    ],
    relatedSlugs: ["gallbladder-stones", "hernia", "emergency-trauma-surgery"],
  },

  // 4. LIPOMA
  {
    slug: "lipoma",
    name: "Lipoma & Skin Lesion Excision",
    shortName: "Lipoma Excision",
    category: "General & Surgical Oncology",
    summary: "Micro-incision scarless surgical removal of fatty lipomas, sebaceous cysts, dermoid cysts, and soft tissue swellings.",
    overview: "A lipoma is a benign, slow-growing fatty tissue lump located between the skin and underlying muscle layer. While harmless, large or multiple lipomas can cause pain, cosmetic concern, or nerve pressure. Dr. Meda performs Micro-Incision Lipoma & Cyst Excision with plastic cosmetic suturing.",
    symptoms: [
      { name: "Soft Doughy Lump", description: "Painless, soft, easily movable lump under the skin.", iconName: "bulge" },
      { name: "Gradual Size Increase", description: "Slow enlargement over months or years.", iconName: "swelling" },
      { name: "Pressure Discomfort", description: "Pain if lipoma presses on neighboring nerves or blood vessels.", iconName: "pain" },
    ],
    causes: [
      { title: "Genetic Predisposition", description: "Familial multiple lipomatosis or localized fat overgrowth." },
    ],
    riskFactors: ["Age 30-60", "Family history", "Minor tissue trauma"],
    diagnosis: [
      { name: "Clinical Examination", description: "Slip sign positive assessment.", badge: "Primary" },
      { name: "Soft Tissue Ultrasound", description: "Confirming subcutaneous fat echogenicity.", badge: "Routine" },
    ],
    nonSurgicalTreatment: "Steroid injections temporarily shrink lipomas slightly but do not remove the capsule.",
    surgicalTreatment: "Complete capsule micro-excision under local anesthesia via tiny hidden incision.",
    laparoscopicBenefits: [
      { title: "Cosmetic Subcuticular Sutures", description: "Dissolvable plastic sutures leave minimal skin mark." },
      { title: "30-Minute Day-Care", description: "Walk in and walk out within an hour." },
    ],
    recoveryTimeline: [
      { timeframe: "Day 1", title: "Day-care Excision", details: "Procedure in 30 mins; home immediately." },
      { timeframe: "Week 1", title: "Stitch-Free Healing", details: "Wound dry; normal showering." },
    ],
    faqs: [
      { question: "Can a lipoma turn into cancer?", answer: "No, ordinary lipomas are completely benign and do not transform into liposarcoma." },
    ],
    relatedSlugs: ["thyroid", "breast-lump", "diabetic-foot"],
  },

  // 5. VARICOSE VEINS
  {
    slug: "varicose-veins",
    name: "Laser Surgery for Varicose Veins (EVLA)",
    shortName: "Laser Varicose Veins",
    category: "Laser & Vascular Surgery",
    summary: "Painless Endovenous Laser Ablation (EVLA) for twisted leg veins — no cuts, no stitches, immediate walking post-op.",
    overview: "Varicose veins are enlarged, twisted, swollen veins visible under the skin of the legs, caused by weak or failing venous valves. Left untreated, they lead to leg pain, swelling, skin discoloration, and painful venous ulcers. Dr. Meda offers advanced Endovenous Laser Ablation (EVLA).",
    symptoms: [
      { name: "Twisted Bulging Veins", description: "Dark blue or purple swollen, snake-like leg veins.", iconName: "skin" },
      { name: "Heaviness & Achiness", description: "Throbbing leg ache, heaviness, or muscle cramps at night.", iconName: "pain" },
      { name: "Ankle Swelling", description: "Fluid accumulation and swelling around ankles by evening.", iconName: "swelling" },
      { name: "Skin Darkening / Ulcers", description: "Browning of skin near ankles or slow-healing venous ulcers.", iconName: "skin" },
    ],
    causes: [
      { title: "Venous Valve Incompetence", description: "Failure of one-way valves causes blood to pool downward in leg veins." },
      { title: "Increased Venous Pressure", description: "Prolonged standing or sitting increases pressure on leg veins." },
    ],
    riskFactors: ["Prolonged standing occupations (teachers, police, nurses)", "Age > 50", "Pregnancy", "Obesity"],
    diagnosis: [
      { name: "Venous Doppler Ultrasound", description: "Color Doppler mapping of Great and Small Saphenous vein reflux.", badge: "Primary" },
      { name: "Clinical CEAP Staging", description: "Classification of venous disease severity.", badge: "Routine" },
    ],
    nonSurgicalTreatment: "Compression stockings and leg elevation relieve symptoms but cannot repair damaged veins.",
    surgicalTreatment: "Endovenous Laser Ablation (EVLA) delivers laser thermal energy inside the diseased vein via a micro-puncture, sealing it permanently.",
    laparoscopicBenefits: [
      { title: "No Surgical Cuts or Stitches", description: "Performed entirely through a single needle puncture." },
      { title: "Walk Home Immediately", description: "Patients walk out of the clinic 1-2 hours after the laser procedure." },
      { title: "Immediate Relief", description: "Leg heaviness and throbbing pain disappear almost instantly." },
      { title: "Superior Cosmetic Outcome", description: "No scars, stitches, or discoloration." },
    ],
    recoveryTimeline: [
      { timeframe: "Day 1", title: "EVLA Procedure", details: "Laser ablation completed in 45 mins; walk home in 2 hours." },
      { timeframe: "Week 1", title: "Compression Stockings", details: "Wear stocking; light daily walking encouraged." },
      { timeframe: "Week 2", title: "Full Recovery", details: "Vein shrinkage visible; return to active work routines." },
      { timeframe: "Month 1", title: "Cosmetic Check", details: "Veins fully dissolved; clear healthy leg skin." },
    ],
    faqs: [
      { question: "Is laser treatment for varicose veins painful?", answer: "No, local tumescent anesthesia ensures the entire laser procedure is virtually painless." },
      { question: "Do I need hospital admission for varicose vein laser treatment?", answer: "No, EVLA is performed as a day-care procedure allowing you to go home the same day." },
      { question: "What happens to the blood flow when the vein is sealed?", answer: "Blood naturally reroutes into healthy deep leg veins, improving overall circulation." },
    ],
    relatedSlugs: ["piles", "fistula", "cellulitis"],
  },

  // 6. PILES
  {
    slug: "piles",
    name: "Laser Piles Surgery (Laser Hemorrhoidoplasty)",
    shortName: "Piles (Hemorrhoids)",
    category: "Laser & Vascular Surgery",
    summary: "Minimal access painless Laser Hemorrhoidoplasty (LHP) for Grade 2-4 piles with zero cutting, minimal pain, and quick discharge.",
    overview: "Piles (Hemorrhoids) are swollen blood vessels in the anal canal causing painless bleeding during bowel movements, prolapse, and discomfort. Dr. Meda performs state-of-the-art Laser Hemorrhoidoplasty (LHP), shrinking hemorrhoidal tissue from within using targeted laser beam energy without open cutting.",
    symptoms: [
      { name: "Painless Rectal Bleeding", description: "Bright red blood drops or spurts during defecation.", iconName: "bleeding" },
      { name: "Prolapsing Tissue Lump", description: "Swelling or lump coming out of anus during bowel movement.", iconName: "bulge" },
      { name: "Anal Itching & Discomfort", description: "Persistent irritation, soreness, or mucus discharge.", iconName: "pain" },
    ],
    causes: [
      { title: "Chronic Constipation & Straining", description: "Increased pressure on anal vascular cushions." },
      { title: "Low Fiber Intake", description: "Hard stools requiring excessive abdominal pushing." },
    ],
    riskFactors: ["Sedentary lifestyle", "Chronic constipation", "Pregnancy", "Low fluid intake"],
    diagnosis: [
      { name: "Digital Rectal Exam", description: "Evaluation of hemorrhoidal grade and sphincter tone.", badge: "Primary" },
      { name: "Proctoscopy", description: "Direct visual inspection of internal piles cushions.", badge: "Routine" },
    ],
    nonSurgicalTreatment: "High-fiber diet, stool softeners, and warm sitz baths help Grade 1 piles.",
    surgicalTreatment: "Laser Hemorrhoidoplasty (LHP) uses a diode laser fiber inserted into the hemorrhoidal node, sealing the blood vessel supply safely.",
    laparoscopicBenefits: [
      { title: "Zero Cutting / No Open Wounds", description: "Laser energy seals blood vessels internally without open excision." },
      { title: "Minimal Post-Op Pain", description: "Dramatically painless compared to conventional open surgery." },
      { title: "24-Hour Discharge", description: "Return home the next morning and resume normal daily activities." },
    ],
    recoveryTimeline: [
      { timeframe: "Day 1", title: "Laser Procedure", details: "20-minute laser treatment under short anesthesia." },
      { timeframe: "Week 1", title: "Soft Diet & Sitz Bath", details: "Normal bowel movements with minimal discomfort." },
      { timeframe: "Week 2", title: "Work Return", details: "Resume active work; complete shrinkage of pile mass." },
    ],
    faqs: [
      { question: "Is laser piles surgery better than open surgery?", answer: "Yes, laser surgery causes 80% less post-op pain, has no open wounds, and allows recovery in 2-3 days." },
    ],
    relatedSlugs: ["fistula", "fissure", "varicose-veins"],
  },

  // 7. FISTULA
  {
    slug: "fistula",
    name: "Laser Anal Fistula Closure (FiLaC)",
    shortName: "Anal Fistula",
    category: "Laser & Vascular Surgery",
    summary: "Sphincter-saving FiLaC (Fistula Laser Closure) preserving complete bowel control with minimal recurrence.",
    overview: "An anal fistula is an abnormal infected tunnel connecting the anal canal to the skin surrounding the anus. Traditional open surgery risks cutting sphincter muscles and causing incontinence. Dr. Meda uses advanced FiLaC (Fistula Laser Closure) to destroy the fistula tract while preserving sphincter muscles 100%.",
    symptoms: [
      { name: "Pus & Foul Discharge", description: "Recurrent pus, fluid, or blood discharge near the anus.", iconName: "bleeding" },
      { name: "Perianal Pain & Swelling", description: "Throbbing pain aggravated by sitting or bowel movements.", iconName: "pain" },
      { name: "Recurrent Abscesses", description: "Frequent painful boils near the anal opening.", iconName: "swelling" },
    ],
    causes: [
      { title: "Clogged Anal Gland Infection", description: "Abscess bursting open and forming a permanent fistulous track." },
    ],
    riskFactors: ["Prior anal abscess", "Crohn's disease or IBD", "Diabetes"],
    diagnosis: [
      { name: "Clinical Probe Assessment", description: "Mapping internal and external fistula openings.", badge: "Primary" },
      { name: "MRI Fistulogram", description: "3D magnetic resonance mapping for complex or high fistulas.", badge: "Advanced" },
    ],
    nonSurgicalTreatment: "Antibiotics temporarily suppress pus discharge but cannot seal the anatomical fistula tunnel.",
    surgicalTreatment: "FiLaC (Fistula-tract Laser Closure) emits 360° laser energy inside the tract, collapsing and sealing it without sphincter damage.",
    laparoscopicBenefits: [
      { title: "100% Sphincter Preservation", description: "Zero risk of fecal incontinence or muscle weakness." },
      { title: "No Large Open Wounds", description: "Eliminates months of painful daily dressings." },
      { title: "Fast Tissue Healing", description: "High success rate with minimal downtime." },
    ],
    recoveryTimeline: [
      { timeframe: "Day 1", title: "FiLaC Laser", details: "Laser closure of tract; minimal post-op pain." },
      { timeframe: "Week 1", title: "Discharge & Healing", details: "Discharge home; minor dressing, painless walking." },
      { timeframe: "Week 2", title: "Tract Fibrosis", details: "Fistula tract seals tight internally." },
    ],
    faqs: [
      { question: "Does laser fistula surgery cause bowel incontinence?", answer: "No! Unlike open surgery, FiLaC laser preserves 100% of anal sphincter muscles, ensuring zero risk of incontinence." },
    ],
    relatedSlugs: ["piles", "fissure", "varicose-veins"],
  },

  // 8. FISSURE
  {
    slug: "fissure",
    name: "Laser Anal Fissure Surgery",
    shortName: "Anal Fissure",
    category: "Laser & Vascular Surgery",
    summary: "Instant pain relief with precision laser fissurectomy and sphincter relaxation for chronic anal tears.",
    overview: "An anal fissure is a small, painful tear in the lining of the anal canal, usually caused by passing hard, dry stools. It causes intense knife-like pain during and after bowel movements. Dr. Meda performs Laser Fissurectomy with Laser Sphincterotomy for immediate, permanent pain relief.",
    symptoms: [
      { name: "Sharp Cutting Pain", description: "Intense burning pain during and for hours after defecation.", iconName: "pain" },
      { name: "Bright Red Blood Streak", description: "Blood on toilet tissue or stool surface.", iconName: "bleeding" },
      { name: "Visible Skin Crack", description: "Visible tear or sentinel skin tag near anal margin.", iconName: "skin" },
    ],
    causes: [
      { title: "Hard Stool Trauma", description: "Passing hard, dry stools causing mucosal tear." },
      { title: "High Sphincter Spasm", description: "Elevated resting sphincter pressure preventing blood flow and healing." },
    ],
    riskFactors: ["Chronic constipation", "Post-childbirth", "Low fiber diet"],
    diagnosis: [
      { name: "Gentle Visual Inspection", description: "Direct gentle visualization of posterior anal tear.", badge: "Primary" },
    ],
    nonSurgicalTreatment: "Stool softeners, diltiazem creams, and sitz baths cure 60% of acute fissures. Chronic non-healing fissures require laser therapy.",
    surgicalTreatment: "Laser Sphincterotomy relaxes the tight muscle ring with laser precision, restoring blood flow and curing the fissure permanently.",
    laparoscopicBenefits: [
      { title: "Instant Pain Relief", description: "Burning pain stops on the day of surgery." },
      { title: "No Cutting of Mucosa", description: "Bloodless laser energy relieves sphincter spasm." },
      { title: "Same-Day Discharge", description: "Go home within hours of procedure." },
    ],
    recoveryTimeline: [
      { timeframe: "Day 1", title: "Laser Release", details: "Procedure done; immediate pain relief." },
      { timeframe: "Week 1", title: "Soft Stool & Healing", details: "Painless bowel movements." },
    ],
    faqs: [
      { question: "How quickly does pain stop after laser fissure surgery?", answer: "Most patients report immediate relief from severe cutting pain after the first bowel movement post-laser." },
    ],
    relatedSlugs: ["piles", "fistula", "varicose-veins"],
  },

  // 9. THYROID
  {
    slug: "thyroid",
    name: "Thyroid Surgery (Thyroidectomy)",
    shortName: "Thyroid Surgery",
    category: "General & Surgical Oncology",
    summary: "Precision nerve-monitored Hemithyroidectomy & Total Thyroidectomy for nodules, goiter, and thyroid tumors.",
    overview: "Thyroid nodules and enlarged goiters cause neck swelling, difficulty swallowing, or throat pressure. Dr. Meda performs precision Hemithyroidectomy and Total Thyroidectomy using nerve-monitoring techniques to safeguard vocal cord nerves.",
    symptoms: [
      { name: "Neck Lump / Goiter", description: "Visible swelling at the front of the neck moving with swallowing.", iconName: "swelling" },
      { name: "Throat Tightness", description: "Pressure sensation or difficulty swallowing solid foods.", iconName: "digestive" },
      { name: "Voice Changes", description: "Hoarseness or voice alteration.", iconName: "fatigue" },
    ],
    causes: [
      { title: "Iodine Deficiency / Autoimmune", description: "Hashimoto's or colloid multinodular goiter." },
      { title: "Thyroid Nodule / Neoplasm", description: "Benign adenoma or thyroid carcinoma." },
    ],
    riskFactors: ["Female gender", "Radiation exposure", "Family history"],
    diagnosis: [
      { name: "Thyroid Function Test (T3, T4, TSH)", description: "Blood hormonal assessment.", badge: "Primary" },
      { name: "Neck Ultrasound", description: "High-resolution Doppler mapping of nodules (TIRADS rating).", badge: "Routine" },
      { name: "FNAC Fine Needle Biopsy", description: "Cytological microscopic check of nodule cells.", badge: "Advanced" },
    ],
    nonSurgicalTreatment: "Thyroxine medical suppression for small benign non-obstructive colloid nodules. Surgery is required for large goiters, suspicious FNAC, or pressure symptoms.",
    surgicalTreatment: "Thyroidectomy with nerve identification and parathyroid preservation.",
    laparoscopicBenefits: [
      { title: "Recurrent Laryngeal Nerve Preservation", description: "Vocal cord nerves meticulously preserved." },
      { title: "Cosmetic Neck Crease Line", description: "Incision placed inside natural neck crease fold." },
    ],
    recoveryTimeline: [
      { timeframe: "Day 1", title: "Thyroidectomy", details: "Precision surgery; liquid intake in 6 hours." },
      { timeframe: "Week 1", title: "Discharge & Voice Check", details: "Home discharge; normal voice verified." },
    ],
    faqs: [
      { question: "Will my voice change after thyroid surgery?", answer: "Dr. Meda uses meticulous nerve identification technique to ensure vocal cord nerve preservation and normal voice retention." },
    ],
    relatedSlugs: ["breast-lump", "lipoma", "abdominal-cancer-surgery"],
  },

  // 10. BREAST SURGERY
  {
    slug: "breast-lump",
    name: "Breast Surgery (Benign & Malignant)",
    shortName: "Breast Surgery",
    category: "General & Surgical Oncology",
    summary: "Gentle cosmetic micro-excision of benign fibroadenomas, cysts, and diagnostic biopsy or oncological breast surgery.",
    overview: "Breast lumps (such as Fibroadenoma or Fibrocystic illness) require prompt evaluation to rule out malignancy and relieve pain. Dr. Meda offers cosmetic circumareolar breast lump excision with invisible scars as well as surgical oncology for breast tumors.",
    symptoms: [
      { name: "Painless Breast Lump", description: "Firm, smooth, mobile lump felt during self-examination.", iconName: "bulge" },
      { name: "Breast Pain / Tenderness", description: "Cyclic or non-cyclic breast ache.", iconName: "pain" },
      { name: "Nipple Discharge", description: "Fluid or clear discharge from nipple.", iconName: "bleeding" },
    ],
    causes: [
      { title: "Hormonal Sensitivity", description: "Estrogen responsiveness leading to Fibroadenoma in young women." },
    ],
    riskFactors: ["Age 15-30 (Fibroadenoma)", "Hormonal replacement", "Family history"],
    diagnosis: [
      { name: "Triple Assessment (Exam + Sonomammogram + FNAC)", description: "100% diagnostic confirmation protocol.", badge: "Primary" },
    ],
    nonSurgicalTreatment: "Small asymptomatic fibroadenomas (<1cm) can be observed with periodic ultrasound.",
    surgicalTreatment: "Cosmetic Lumpectomy under local or short general anesthesia via hidden circumareolar edge incision.",
    laparoscopicBenefits: [
      { title: "Hidden Circumareolar Incision", description: "Incision along dark nipple border leaves no visible scar on breast skin." },
      { title: "Day-Care Procedure", description: "Discharge on the same day." },
    ],
    recoveryTimeline: [
      { timeframe: "Day 1", title: "Lumpectomy", details: "30-min procedure; same day discharge." },
      { timeframe: "Week 1", title: "Wound Check", details: "Dressing change; normal daily activities." },
    ],
    faqs: [
      { question: "Are all breast lumps cancerous?", answer: "No! Over 80% of breast lumps in women under 40 are completely benign fibroadenomas or cysts." },
    ],
    relatedSlugs: ["lipoma", "thyroid", "abdominal-cancer-surgery"],
  },

  // 11. PILONIDAL SINUS
  {
    slug: "pilonidal-sinus",
    name: "Laser Pilonidal Sinus Surgery (SILaC)",
    shortName: "Pilonidal Sinus",
    category: "Laser & Vascular Surgery",
    summary: "Painless Laser Sinus Obliteration (SILaC) for natal cleft pilonidal sinus with zero open wounds and minimal recurrence.",
    overview: "Pilonidal sinus is a painful infected hair-containing cavity or channel under the skin in the cleft of the buttocks. Traditional open excision leaves large painful wounds requiring months of daily dressing. Dr. Meda performs SILaC (Sinus Laser Closure), cleaning and sealing the sinus tract with German laser energy.",
    symptoms: [
      { name: "Painful Natal Cleft Swelling", description: "Painful lump or swelling at the top of the buttock crease.", iconName: "swelling" },
      { name: "Pus & Blood Discharge", description: "Foul-smelling pus or bloody fluid draining from skin pit openings.", iconName: "bleeding" },
      { name: "Sitting Discomfort", description: "Sharp discomfort or ache when sitting down for extended periods.", iconName: "pain" },
    ],
    causes: [
      { title: "Loose Hair Ingrowth", description: "Loose hair penetrating skin pits in natal cleft due to friction." },
    ],
    riskFactors: ["Young males (ages 15-30)", "Prolonged sitting (drivers, desk workers)", "Excess body hair & obesity"],
    diagnosis: [
      { name: "Clinical Visual Inspection", description: "Direct identification of midline sinus pits and secondary tracks.", badge: "Primary" },
    ],
    nonSurgicalTreatment: "Antibiotics temporarily control acute infection but cannot remove embedded hair or seal the sinus cavity.",
    surgicalTreatment: "Sinus Laser Closure (SILaC) clears hair debris and delivers 360° laser thermal energy to collapse and seal the sinus internally.",
    laparoscopicBenefits: [
      { title: "Zero Large Open Wounds", description: "No painful open cutting or months of daily wound packing." },
      { title: "Day-Care Discharge", description: "Procedure takes 20 minutes; go home the same day." },
    ],
    recoveryTimeline: [
      { timeframe: "Day 1", title: "SILaC Laser", details: "Sinus tract cleaned and laser sealed; same-day discharge." },
      { timeframe: "Week 1", title: "Light Dressing", details: "Minimal pain; routine daily activities." },
    ],
    faqs: [
      { question: "Is laser pilonidal sinus surgery painful?", answer: "No, SILaC laser surgery is performed under regional/local anesthesia and causes 90% less post-op pain than open excision." },
    ],
    relatedSlugs: ["fistula", "piles", "varicose-veins"],
  },

  // 12. INTESTINAL & COLON SURGERY
  {
    slug: "intestinal-colon-surgery",
    name: "Laparoscopic Intestinal & Colon Surgery",
    shortName: "Intestinal Surgery",
    category: "Laparoscopic Surgery",
    summary: "Advanced keyhole resection and anastomosis for intestinal obstruction, diverticulitis, polyps, and bowel tumors with fast recovery.",
    overview: "Intestinal conditions such as bowel obstruction, diverticular disease, large benign polyps, or localized bowel tumors require precise surgical resection. Dr. Meda performs Advanced Laparoscopic Intestinal & Colorectal Resection, restoring normal bowel continuity through tiny keyhole incisions with fast recovery.",
    symptoms: [
      { name: "Severe Abdominal Cramping", description: "Recurrent severe abdominal pain and bloating.", iconName: "pain" },
      { name: "Altered Bowel Habits", description: "Alternating diarrhea, severe constipation, or blood in stool.", iconName: "digestive" },
      { name: "Unexplained Weight Loss", description: "Loss of appetite and progressive weight loss.", iconName: "fatigue" },
    ],
    causes: [
      { title: "Intestinal Stricture / Tumors", description: "Narrowing of bowel lumen due to inflammation or polyps." },
    ],
    riskFactors: ["Age > 50", "Low-fiber diet", "History of intestinal polyps"],
    diagnosis: [
      { name: "Colonoscopy", description: "Endoscopic visualization and biopsy of bowel mucosa.", badge: "Primary" },
      { name: "Contrast CT Abdomen", description: "3D imaging mapping bowel obstruction site and vascular supply.", badge: "Advanced" },
    ],
    nonSurgicalTreatment: "Medical management for early diverticulitis or inflammatory bowel disease. Obstructive lesions require surgical resection.",
    surgicalTreatment: "Laparoscopic Resection and Stapled Anastomosis removes diseased intestine through keyholes and reconnects healthy bowel seamlessly.",
    laparoscopicBenefits: [
      { title: "Tiny Keyhole Access", description: "Avoids long painful mid-line laparotomy incisions." },
      { title: "Faster Bowel Function Return", description: "Bowel movements resume days faster post-op." },
    ],
    recoveryTimeline: [
      { timeframe: "Day 1", title: "Laparoscopic Resection", details: "Keyhole operation; IV hydration & early walking." },
      { timeframe: "Week 1", title: "Bowel Recovery & Diet", details: "Oral liquids to soft diet transition; home discharge." },
    ],
    faqs: [
      { question: "What is laparoscopic intestinal resection?", answer: "It is keyhole surgery to remove diseased bowel segments and join healthy bowel ends together using specialized surgical staplers." },
    ],
    relatedSlugs: ["abdominal-cancer-surgery", "gallbladder-stones", "hernia"],
  },

  // 13. DIABETIC FOOT MANAGEMENT
  {
    slug: "diabetic-foot",
    name: "Diabetic Foot Management & Limb Salvage",
    shortName: "Diabetic Foot",
    category: "General & Surgical Oncology",
    summary: "Comprehensive diabetic foot ulcer care, debridement, specialized dressing, vascular evaluation, and surgical limb salvage.",
    overview: "Diabetic foot ulcers and infections develop due to peripheral neuropathy and impaired arterial circulation in long-standing diabetes. Left untreated, minor wounds can rapidly turn gangrenous. Dr. Rajashekhar Meda provides expert diabetic foot care, aggressive surgical debridement, specialized vacuum-assisted closure (VAC), and revascularization coordination at Suraksha Hospital, Khammam, to prevent limb amputation.",
    symptoms: [
      { name: "Non-Healing Foot Ulcer", description: "Open wound or sore on the foot/sole that fails to heal.", iconName: "skin" },
      { name: "Numbness & Loss of Sensation", description: "Reduced pain perception due to diabetic neuropathy.", iconName: "fatigue" },
      { name: "Redness, Swelling & Pus", description: "Signs of active tissue infection and spreading abscess.", iconName: "swelling" },
      { name: "Blackened Gangrenous Skin", description: "Tissue necrosis and dark skin discoloration.", iconName: "skin" },
    ],
    causes: [
      { title: "Diabetic Peripheral Neuropathy", description: "Loss of protective pain sensation leading to unrecognized pressure injuries." },
      { title: "Peripheral Arterial Disease (PAD)", description: "Poor arterial blood flow delaying tissue healing." },
      { title: "Secondary Bacterial Infection", description: "Rapid bacterial invasion in high-blood-sugar environments." },
    ],
    riskFactors: ["Uncontrolled Diabetes (HbA1c > 8%)", "Smoking", "Peripheral vascular disease", "Foot deformities & calluses"],
    diagnosis: [
      { name: "Clinical Wagner Ulcer Grading", description: "Assessment of wound depth, bone involvement, and gangrene.", badge: "Primary" },
      { name: "Arterial Color Doppler", description: "Evaluating leg arterial blood supply and distal pulses.", badge: "Routine" },
      { name: "Wound Culture & X-ray Foot", description: "Identifying bacterial pathogens and ruling out osteomyelitis (bone infection).", badge: "Advanced" },
    ],
    nonSurgicalTreatment: "Strict glycemic control, off-loading footwear, daily sterile antiseptic dressings, and culture-targeted antibiotics.",
    surgicalTreatment: "Surgical Debridement, Abscess Drainage, Tendon Resection, Negative Pressure Wound Therapy (VAC), and minor toe amputations when necessary for limb salvage.",
    laparoscopicBenefits: [
      { title: "Limb Salvage Protocol", description: "Focuses on preserving maximum healthy foot structure and mobility." },
      { title: "Advanced VAC Therapy", description: "Promotes rapid granulation tissue formation and wound contraction." },
      { title: "Multi-Disciplinary Care", description: "Coordinated endocrinology, vascular, and surgical wound management." },
    ],
    recoveryTimeline: [
      { timeframe: "Day 1", title: "Surgical Debridement", details: "Infected tissue removed; culture sent; IV antibiotics started." },
      { timeframe: "Week 1", title: "VAC / Advanced Dressing", details: "Wound bed clean; granulation tissue developing." },
      { timeframe: "Week 3", title: "Wound Closure / Graft", details: "Secondary closure or skin grafting if needed." },
      { timeframe: "Month 2", title: "Complete Healing & Offloading", details: "Ulcer fully healed; custom diabetic footwear fitted." },
    ],
    faqs: [
      { question: "Can diabetic foot ulcers be cured without amputation?", answer: "Yes! Early aggressive surgical debridement, specialized wound care, and proper blood sugar control successfully save the leg in over 90% of diabetic foot cases." },
      { question: "Why do diabetic foot wounds take so long to heal?", answer: "High blood sugar impairs nerve sensation and blood vessel circulation, reducing oxygen and immune cell delivery to the wound." },
    ],
    relatedSlugs: ["cellulitis", "lipoma", "emergency-trauma-surgery"],
  },

  // 14. CELLULITIS TREATMENT
  {
    slug: "cellulitis",
    name: "Cellulitis & Soft Tissue Infection Management",
    shortName: "Cellulitis Treatment",
    category: "General & Surgical Oncology",
    summary: "Urgent surgical intervention and targeted therapy for deep leg cellulitis, necrotizing skin infections, and subcutaneous abscesses.",
    overview: "Cellulitis is a serious, rapidly spreading bacterial infection of the deep skin and subcutaneous tissues. If delayed, it can progress to necrotizing fasciitis, sepsis, or extensive tissue destruction. Dr. Meda provides prompt emergency surgical decompression, abscess incision & drainage, and intensive IV antibiotic treatment at Suraksha Hospital, Khammam.",
    symptoms: [
      { name: "Spreading Redness & Warmth", description: "Expanding red, hot, swollen skin area, commonly on the leg or arm.", iconName: "skin" },
      { name: "Severe Throbbing Pain", description: "Intense tenderness and pain on touching the affected skin.", iconName: "pain" },
      { name: "Fever & Chills", description: "Systemic fever, shivering, and body malaise.", iconName: "fever" },
      { name: "Blisters & Pus Drainage", description: "Skin bullae, fluid blisters, or pus leaking from skin breaks.", iconName: "swelling" },
    ],
    causes: [
      { title: "Bacterial Entry via Skin Break", description: "Staphylococcus or Streptococcus bacteria entering through cuts, insect bites, or fungal cracks." },
      { title: "Lymphatic Stasis & Edema", description: "Poor venous or lymphatic drainage predisposing to recurrent infections." },
    ],
    riskFactors: ["Diabetes mellitus", "Chronic leg swelling / Varicose veins", "Fungal interdigital tinea pedis", "Immunosuppression"],
    diagnosis: [
      { name: "Clinical Dermato-Surgical Exam", description: "Mapping infection boundaries and checking for fluctuation or crepitus.", badge: "Primary" },
      { name: "Blood Tests (CBC, CRP, Blood Culture)", description: "Assessing infection severity, white blood cell count, and inflammatory markers.", badge: "Routine" },
      { name: "Soft Tissue Ultrasound / CT", description: "Ruling out deep subfascial abscess or necrotizing fasciitis.", badge: "Advanced" },
    ],
    nonSurgicalTreatment: "High-dose broad-spectrum intravenous antibiotics, leg elevation, and pain management for early non-complicated cellulitis.",
    surgicalTreatment: "Surgical Incision & Drainage (I&D), Fasciotomy for compartment pressure release, and aggressive debridement for necrotizing soft tissue infections.",
    laparoscopicBenefits: [
      { title: "Rapid Emergency Decompression", description: "Relieves tissue tension and halts infection spread." },
      { title: "Targeted Antibiotic Therapy", description: "Culture-guided IV antibiotics for complete bacterial clearance." },
      { title: "Prevent Complications", description: "Prevents sepsis, tissue loss, and chronic lymphedema." },
    ],
    recoveryTimeline: [
      { timeframe: "Day 1", title: "IV Antibiotics & Drainage", details: "Emergency admission; incision & drainage if abscess present." },
      { timeframe: "Day 3", title: "Infection Control", details: "Fever subsides; skin redness recedes; pain declines." },
      { timeframe: "Week 1", title: "Discharge on Oral Antibiotics", details: "Wound healthy; transition to oral medications." },
      { timeframe: "Week 2", title: "Complete Resolution", details: "Skin returned to normal tone; light daily activities." },
    ],
    faqs: [
      { question: "When does cellulitis require surgery?", answer: "Surgery is needed when cellulitis forms an abscess (pus collection), causes tissue necrosis, or increases tissue pressure." },
      { question: "Can cellulitis recur?", answer: "Yes, if underlying factors like fungal foot infections, diabetes, or varicose veins are untreated. Dr. Meda addresses all root causes to prevent recurrence." },
    ],
    relatedSlugs: ["diabetic-foot", "varicose-veins", "emergency-trauma-surgery"],
  },

  // 15. LAPAROSCOPIC ABDOMINAL CANCER SURGERY
  {
    slug: "abdominal-cancer-surgery",
    name: "Laparoscopic Abdominal Cancer Surgery",
    shortName: "Abdominal Cancer Surgery",
    category: "Laparoscopic Surgery",
    summary: "Minimally invasive keyhole surgical oncology for Stomach, Colon, Rectal, Appendix, and Intra-Abdominal Tumors.",
    overview: "Gastrointestinal and abdominal cancers (including stomach cancer, colon/rectal cancer, gallbladder tumors, and retroperitoneal masses) require precise oncological resection with complete lymph node clearance. Dr. Rajashekhar Meda performs high-precision Laparoscopic Abdominal Cancer Surgery at Suraksha Hospital, Khammam, achieving complete R0 cancer resection through tiny keyhole incisions.",
    symptoms: [
      { name: "Unexplained Weight Loss & Fatigue", description: "Rapid loss of weight and loss of appetite.", iconName: "fatigue" },
      { name: "Persistent Abdominal Pain", description: "Dull, continuous, or worsening abdominal ache.", iconName: "pain" },
      { name: "Blood in Stool / Anemia", description: "Dark tarry stools (melena) or frank rectal blood.", iconName: "bleeding" },
      { name: "Abdominal Mass / Swelling", description: "Palpable lump or progressive abdominal distension.", iconName: "bulge" },
    ],
    causes: [
      { title: "Genetic & Familial Predisposition", description: "Inherited gene mutations or family history of GI cancers." },
      { title: "Chronic Inflammation & Polyps", description: "Long-standing ulcerative colitis, adenomatous polyps, or H. pylori gastritis." },
    ],
    riskFactors: ["Age > 50", "Smoking & alcohol consumption", "Diet high in processed meats", "Family history of GI cancer"],
    diagnosis: [
      { name: "Endoscopy & Colonoscopy Biopsy", description: "Direct tissue sampling for histopathological diagnosis.", badge: "Primary" },
      { name: "Triple-Phase Contrast CT / PET-CT", description: "Staging scan to map tumor extent, vessel involvement, and lymph nodes.", badge: "Advanced" },
      { name: "Tumor Markers (CEA, CA 19-9)", description: "Blood biomarkers for baseline evaluation and post-op monitoring.", badge: "Routine" },
    ],
    nonSurgicalTreatment: "Neoadjuvant chemotherapy or radiation therapy when indicated to shrink tumors prior to surgery.",
    surgicalTreatment: "Laparoscopic Oncological Resection (Radical Colectomy, Gastrectomy, Anterior Resection) with D2/D3 lymphadenectomy and stapled reconstruction.",
    laparoscopicBenefits: [
      { title: "HD 4K Tumor Visualization", description: "Magnified view allows micro-dissection of lymphatics and vital nerve preservation." },
      { title: "R0 Complete Cancer Resection", description: "Ensures clear surgical tumor margins matching open surgery standards." },
      { title: "Faster Adjuvant Therapy Start", description: "Quick keyhole recovery allows post-op chemotherapy to start weeks earlier." },
      { title: "Minimal Post-Op Pain", description: "Tiny incisions significantly reduce pain and pulmonary complications." },
    ],
    recoveryTimeline: [
      { timeframe: "Day 1", title: "Laparoscopic Resection", details: "Keyhole operation; ICU monitoring; early walking." },
      { timeframe: "Day 3", title: "Bowel Function Return", details: "Sips of liquids; active walking in ward." },
      { timeframe: "Day 5-7", title: "Discharge Home", details: "Tolerating soft diet; home discharge on oral medications." },
      { timeframe: "Week 2", title: "HPE Report & Tumor Board", details: "Final pathology review & multidisciplinary treatment plan." },
      { timeframe: "Month 1", title: "Full Functional Recovery", details: "Return to normal daily life and readiness for adjuvant therapy." },
    ],
    faqs: [
      { question: "Is laparoscopic keyhole surgery safe for abdominal cancer?", answer: "Yes! Large clinical trials prove laparoscopic cancer surgery provides identical long-term cure rates to open surgery while offering smaller scars, less pain, and faster recovery." },
      { question: "How soon can chemotherapy start after laparoscopic cancer surgery?", answer: "Because keyhole wounds heal within 10-14 days, patients can begin post-operative chemotherapy much sooner than after traditional open surgery." },
    ],
    relatedSlugs: ["hernia", "gallbladder-stones", "intestinal-colon-surgery"],
  },

  // 16. EMERGENCY TRAUMA SURGERY
  {
    slug: "emergency-trauma-surgery",
    name: "24/7 Emergency & Abdominal Trauma Surgery",
    shortName: "Emergency Surgery",
    category: "General & Surgical Oncology",
    summary: "24/7 immediate surgical intervention at Suraksha Hospital ICU for intestinal perforation, blunt abdominal trauma & acute abdomen.",
    overview: "Surgical emergencies such as peptic ulcer perforation, bowel gangrene, strangulated hernia, or blunt abdominal trauma from road accidents require immediate life-saving emergency surgery. Dr. Meda provides 24/7 Emergency Trauma & Abdominal Surgery at Suraksha Hospital, Khammam.",
    symptoms: [
      { name: "Sudden Severe Abdominal Pain", description: "Intense, unbearable rigid abdominal pain.", iconName: "pain" },
      { name: "High Fever & Shock", description: "Low BP, rapid pulse, high fever, cold clammy hands.", iconName: "fever" },
      { name: "Continuous Vomiting", description: "Greenish/bilious vomiting and abdominal distension.", iconName: "vomiting" },
    ],
    causes: [
      { title: "Peptic Ulcer Perforation", description: "Stomach ulcer tearing open into abdominal cavity." },
      { title: "Blunt Abdominal Trauma", description: "Spleen or liver laceration from road traffic accident." },
    ],
    riskFactors: ["Uncontrolled peptic ulcer", "Trauma / accidents", "Strangulated hernia"],
    diagnosis: [
      { name: "Emergency STAT CT & X-Ray", description: "X-ray erect abdomen showing free air under diaphragm.", badge: "Emergency" },
      { name: "FAST Ultrasound", description: "Focused assessment with sonography for trauma fluid in pelvis.", badge: "Emergency" },
    ],
    nonSurgicalTreatment: "Emergency resuscitation with IV fluids and broad-spectrum antibiotics while preparing for immediate surgery.",
    surgicalTreatment: "Emergency Exploratory Laparoscopy or Laparotomy to repair perforation, stop internal bleeding, and wash the abdominal cavity.",
    laparoscopicBenefits: [
      { title: "24/7 ICU & Operating Theatre", description: "Immediate admission and surgery within minutes." },
      { title: "Life-Saving Precision", description: "Stops internal bleeding and controls peritonitis." },
    ],
    recoveryTimeline: [
      { timeframe: "Day 1", title: "Emergency Resuscitation & Surgery", details: "Life-saving operation and 24/7 ICU monitoring." },
      { timeframe: "Week 1", title: "ICU to Ward Step-Down", details: "Infection control, bowel sound recovery, oral nutrition." },
      { timeframe: "Week 2", title: "Discharge Home", details: "Discharge on oral medications and soft diet." },
    ],
    faqs: [
      { question: "Is emergency surgical care available 24/7 at Suraksha Hospital Khammam?", answer: "Yes! Dr. Rajashekhar Meda and the Suraksha Hospital trauma team provide 24/7 emergency surgical evaluation and operating theatre readiness." },
    ],
    relatedSlugs: ["appendicitis", "hernia", "gallbladder-stones"],
  },
];

// BACKWARD COMPATIBILITY SLUG ALIASES
export const legacySlugAliases: Record<string, string> = {
  "laparoscopic-surgery": "hernia",
  "hernia-repair": "hernia",
  "gallbladder-appendix": "gallbladder-stones",
  "laser-varicose-veins": "varicose-veins",
  "breast-surgery": "breast-lump",
  "hydrocele": "hernia",
  "bariatric-surgery": "hernia",
  "laser-surgery": "varicose-veins",
};

export function getConditionBySlug(slug: string): ConditionDetail | undefined {
  const targetSlug = legacySlugAliases[slug] || slug;
  return detailedConditions.find((c) => c.slug === targetSlug);
}
