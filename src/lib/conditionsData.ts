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
  category: "Laparoscopic Surgery" | "Laser Proctology & Vascular" | "General & Trauma Surgery";
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
    relatedSlugs: ["gallbladder-stones", "appendicitis", "laser-surgery", "bariatric-surgery"],
  },

  // 2. GALLBLADDER STONES
  {
    slug: "gallbladder-stones",
    name: "Laparoscopic Gallbladder Surgery (Cholecystectomy)",
    shortName: "Gallstones",
    category: "Laparoscopic Surgery",
    summary: "Gold-standard laparoscopic removal of gallstones and inflamed gallbladder with mini-port keyhole technique and same-day discharge.",
    overview: "Gallstones (Cholelithiasis) are hardened deposits of digestive fluid that form in your gallbladder. When gallstones block the bile ducts, they cause severe right upper abdominal pain, nausea, and indigestion. Dr. Rajashekhar Meda performs Laparoscopic Cholecystectomy — the international gold-standard keyhole treatment.",
    symptoms: [
      { name: "Upper Right Pain", description: "Sharp, sudden pain in the upper right abdomen radiating to the back.", iconName: "pain" },
      { name: "Post-Meal Nausea", description: "Feeling nauseous or vomiting after eating fatty or oily meals.", iconName: "vomiting" },
      { name: "Bloating & Indigestion", description: "Persistent abdominal fullness, gas, and indigestion.", iconName: "digestive" },
      { name: "Fever & Jaundice", description: "High fever, chills, or yellowing of eyes in complicated duct blockage.", iconName: "fever" },
    ],
    causes: [
      { title: "Excess Cholesterol in Bile", description: "Bile containing too much cholesterol crystallizes into solid stones." },
      { title: "Biliary Sludge Stasis", description: "Incomplete emptying of the gallbladder causes bile to concentrate." },
      { title: "Dietary & Metabolic Factors", description: "High-fat diet, rapid weight loss, or metabolic syndrome." },
    ],
    riskFactors: ["Female gender & age > 40", "High cholesterol or fatty diet", "Pregnancy or hormonal changes", "Family history of gallstones", "Diabetes"],
    diagnosis: [
      { name: "Abdominal Ultrasound", description: "Quick, painless 10-minute scan providing 98% diagnostic accuracy for stones.", badge: "Primary" },
      { name: "Liver Function Tests (LFT)", description: "Blood screening to check for bile duct obstruction or jaundice.", badge: "Routine" },
      { name: "MRCP / CT Scan", description: "Advanced magnetic resonance imaging used if bile duct stones are suspected.", badge: "Advanced" },
    ],
    nonSurgicalTreatment: "Medications to dissolve stones take years and have high failure/recurrence rates. Surgery remains the definitive cure.",
    surgicalTreatment: "Laparoscopic Cholecystectomy removes the diseased gallbladder safely through 3-4 mini keyholes, leaving digestion completely normal.",
    laparoscopicBenefits: [
      { title: "Tiny Mini-Ports", description: "Cosmetically superior with near-invisible micro-scars." },
      { title: "Immediate Relief", description: "Eliminates gallstone attacks and digestive discomfort permanently." },
      { title: "24-Hour Discharge", description: "Overnight hospital stay with return home the very next morning." },
      { title: "Normal Digestion", description: "Bile flows directly from the liver to intestines without impairment." },
    ],
    recoveryTimeline: [
      { timeframe: "Day 1", title: "Keyhole Surgery", details: "Surgery performed; oral liquids started 4 hours post-op." },
      { timeframe: "Week 1", title: "Home Recovery", details: "Light soft diet at home; walking without assistance." },
      { timeframe: "Week 2", title: "Diet Normalization", details: "Return to normal family diet and regular desk work." },
      { timeframe: "Week 4", title: "Full Activity", details: "Complete recovery with unrestricted physical movement." },
      { timeframe: "Month 2", title: "Long-term Health", details: "Excellent long-term digestion and overall well-being." },
    ],
    faqs: [
      { question: "Can we remove only the stones and keep the gallbladder?", answer: "No, because the diseased gallbladder wall will continue to produce new stones. Removing the gallbladder is safe and cures the problem permanently." },
      { question: "How does the body digest food without a gallbladder?", answer: "The liver produces bile continuously and drips it directly into the small intestine, allowing normal digestion." },
      { question: "How long does laparoscopic gallbladder surgery take?", answer: "The procedure typically takes 30 to 45 minutes under general anesthesia." },
      { question: "When can I resume eating regular food?", answer: "Light soft food is started on the evening of surgery, and normal food within 3 to 5 days." },
      { question: "What is the hospital stay for gallbladder surgery at Suraksha Hospital?", answer: "Patients are discharged within 24 hours of surgery." },
      { question: "Are there any long-term side effects after gallbladder removal?", answer: "Most patients experience no long-term side effects and enjoy a completely normal life." },
    ],
    relatedSlugs: ["hernia", "appendicitis", "bariatric-surgery", "laser-surgery"],
  },

  // 3. APPENDICITIS
  {
    slug: "appendicitis",
    name: "Laparoscopic Appendix Surgery (Appendectomy)",
    shortName: "Appendicitis",
    category: "Laparoscopic Surgery",
    summary: "24/7 emergency laparoscopic removal of inflamed appendix to prevent rupture, abscess formation, and severe peritonitis.",
    overview: "Appendicitis is an acute emergency condition caused by inflammation and blockage of the appendix. If left untreated, the appendix can burst within 24-48 hours, spreading dangerous infection throughout the abdomen. Dr. Rajashekhar Meda provides 24/7 Emergency Laparoscopic Appendectomy at Suraksha Hospital, Khammam.",
    symptoms: [
      { name: "Periumbilical & RIF Pain", description: "Pain starting around belly button moving to lower right abdomen.", iconName: "pain" },
      { name: "High Fever & Chills", description: "Rising body temperature accompanied by shivering.", iconName: "fever" },
      { name: "Vomiting & Nausea", description: "Inability to retain food or liquids with loss of appetite.", iconName: "vomiting" },
      { name: "Abdominal Tenderness", description: "Severe sharp pain when pressing or releasing the lower right abdomen.", iconName: "pain" },
    ],
    causes: [
      { title: "Fecalith Obstruction", description: "Hardened stool particles blocking the narrow appendiceal lumen." },
      { title: "Lymphoid Hyperplasia", description: "Swollen lymphatic tissue in the appendix wall following viral infection." },
    ],
    riskFactors: ["Children & young adults (ages 10-30)", "Low-fiber diet", "Family history of appendicitis"],
    diagnosis: [
      { name: "Emergency Clinical Exam", description: "Assessment for McBurney's point tenderness and peritoneal signs.", badge: "Emergency" },
      { name: "Abdominal Ultrasonography", description: "Rapid ultrasound showing swollen appendix (>6mm diameter).", badge: "Primary" },
      { name: "CT Abdomen", description: "Definitive scan for suspected perforated or retrocecal appendix.", badge: "Advanced" },
    ],
    nonSurgicalTreatment: "Antibiotics alone carry a 40% recurrence rate and risk delayed perforation. Emergency laparoscopic appendectomy is the gold standard.",
    surgicalTreatment: "Laparoscopic Appendectomy uses 3 mini keyhole ports to inspect the entire abdominal cavity, ligate the appendix base, and remove it safely inside an endobag.",
    laparoscopicBenefits: [
      { title: "Entire Abdomen Inspection", description: "Allows full visual check of ovaries, intestines, and pelvic organs." },
      { title: "Lower Wound Infection", description: "Appendix is retrieved in a sterile endobag, protecting skin cuts." },
      { title: "Minimal Post-op Pain", description: "Dramatically reduced pain compared to traditional open appendectomy." },
      { title: "24-48 Hour Recovery", description: "Quick return home with minimal disruption to school or work." },
    ],
    recoveryTimeline: [
      { timeframe: "Day 1", title: "Emergency Laparoscopy", details: "Prompt keyhole surgery; mobilization within 6 hours." },
      { timeframe: "Week 1", title: "Discharge & Rest", details: "Discharge home; light walking and oral pain relief." },
      { timeframe: "Week 2", title: "School / Work Return", details: "Return to school, college, or desk jobs." },
      { timeframe: "Week 4", title: "Full Activity", details: "Resume sports, running, and full physical activity." },
      { timeframe: "Month 2", title: "Complete Healing", details: "Internal tissue complete recovery." },
    ],
    faqs: [
      { question: "How quickly does an appendix need to be operated?", answer: "Surgery should ideally be performed within 12-24 hours of diagnosis to prevent rupture." },
      { question: "What happens if the appendix bursts?", answer: "A burst appendix leaks pus into the abdomen, requiring emergency laparoscopic washing and antibiotic treatment." },
      { question: "Is laparoscopic appendectomy safe for children?", answer: "Yes, keyhole surgery is exceptionally safe for children and offers faster, less traumatic recovery." },
      { question: "What is the function of the appendix?", answer: "The appendix is a vestigial organ; removing it has zero negative impact on immune or digestive health." },
      { question: "How long is the hospital stay for appendicitis at Suraksha Hospital?", answer: "For unruptured appendicitis, patients are discharged in 24 hours." },
    ],
    relatedSlugs: ["hernia", "gallbladder-stones", "emergency-trauma-surgery"],
  },

  // 4. LIPOMA
  {
    slug: "lipoma",
    name: "Lipoma & Skin Tumor Excision",
    shortName: "Lipoma",
    category: "General & Trauma Surgery",
    summary: "Painless scarless micro-incision removal of lipomas, sebaceous cysts, and soft tissue swellings under local anesthesia.",
    overview: "A lipoma is a slow-growing, benign (non-cancerous) fatty lump situated between the skin and underlying muscle layer. While harmless, lipomas can cause discomfort, compress nerves, or cause cosmetic concern. Dr. Rajashekhar Meda performs aesthetic micro-incision lipoma excision with plastic closure.",
    symptoms: [
      { name: "Soft Doughy Lump", description: "Painless, soft, movable swelling under the skin.", iconName: "bulge" },
      { name: "Slow Growth", description: "Gradually increases in size over months or years.", iconName: "swelling" },
      { name: "Pressure Discomfort", description: "Discomfort or aching when pressing against nerves or joints.", iconName: "pain" },
    ],
    causes: [
      { title: "Genetic Predisposition", description: "Inherited tendency for lipoma development (Familial Multiple Lipomatosis)." },
      { title: "Adipose Hyperplasia", description: "Localized overgrowth of mature fat cells." },
    ],
    riskFactors: ["Middle age (40-60 years)", "Family history", "Minor localized trauma"],
    diagnosis: [
      { name: "Clinical Examination", description: "Palpation for slippage sign and mobility characteristic of lipoma.", badge: "Primary" },
      { name: "Soft Tissue Ultrasound", description: "Confirms benign subcutaneous hyperechoic fatty mass.", badge: "Routine" },
      { name: "Histopathology Biopsy", description: "Routine tissue examination after excision for 100% confirmation.", badge: "Routine" },
    ],
    nonSurgicalTreatment: "Non-surgical creams or injections cannot permanently remove the fibrous lipoma capsule.",
    surgicalTreatment: "Complete capsule micro-excision under local anesthesia prevents recurrence with cosmetically hidden incisions.",
    laparoscopicBenefits: [
      { title: "Day-Care Surgery", description: "Procedure takes 20-30 minutes under local anesthesia; go home immediately." },
      { title: "Aesthetic Cosmetic Closure", description: "Intracutaneous sutures ensure minimal to invisible surgical lines." },
      { title: "Zero Recurrence", description: "Complete removal of the outer capsule ensures the lump does not return." },
    ],
    recoveryTimeline: [
      { timeframe: "Day 1", title: "Procedure", details: "Painless excision under local anesthesia; immediate discharge." },
      { timeframe: "Week 1", title: "Wound Care", details: "Keep dressing dry; resume full regular activities." },
      { timeframe: "Week 2", title: "Suture Removal", details: "Cosmetic check and suture removal (if non-absorbable)." },
      { timeframe: "Month 1", title: "Scar Fading", details: "Surgical line fades smoothly into surrounding skin." },
      { timeframe: "Month 2", title: "Final Result", details: "Flat, smooth skin contour." },
    ],
    faqs: [
      { question: "Can a lipoma turn into cancer?", answer: "No, ordinary lipomas are completely benign and do not transform into liposarcoma." },
      { question: "Is lipoma surgery painful?", answer: "No, local anesthesia numbs the area completely during the procedure." },
      { question: "Will the lipoma grow back after removal?", answer: "Complete excision of the lipoma along with its capsule guarantees zero recurrence at that site." },
    ],
    relatedSlugs: ["thyroid", "breast-lump", "laser-surgery"],
  },

  // 5. VARICOSE VEINS
  {
    slug: "varicose-veins",
    name: "Laser Surgery for Varicose Veins (EVLA)",
    shortName: "Varicose Veins",
    category: "Laser Proctology & Vascular",
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
      { timeframe: "Month 2", title: "Long-term Success", details: "Complete resolution of leg heaviness and cramps." },
    ],
    faqs: [
      { question: "Is laser treatment for varicose veins painful?", answer: "No, local tumescent anesthesia ensures the entire laser procedure is virtually painless." },
      { question: "Do I need hospital admission for varicose vein laser treatment?", answer: "No, EVLA is performed as a day-care procedure allowing you to go home the same day." },
      { question: "What happens to the blood flow when the vein is sealed?", answer: "Blood naturally reroutes into healthy deep leg veins, improving overall circulation." },
    ],
    relatedSlugs: ["piles", "fistula", "laser-surgery"],
  },

  // 6. PILES
  {
    slug: "piles",
    name: "Laser Piles Surgery (Laser Hemorrhoidoplasty)",
    shortName: "Piles (Hemorrhoids)",
    category: "Laser Proctology & Vascular",
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
      { title: "Minimal Post-Op Pain", description: "Dramatically painless compared to painful conventional hemorrhoidectomy." },
      { title: "24-Hour Discharge", description: "Return home the next morning and resume normal daily activities." },
    ],
    recoveryTimeline: [
      { timeframe: "Day 1", title: "Laser Procedure", details: "20-minute laser treatment under short anesthesia." },
      { timeframe: "Week 1", title: "Soft Diet & Sitz Bath", details: "Normal bowel movements with minimal discomfort." },
      { timeframe: "Week 2", title: "Work Return", details: "Resume active work; complete shrinkage of pile mass." },
      { timeframe: "Month 1", title: "Complete Cure", details: "Zero bleeding, no prolapse." },
      { timeframe: "Month 2", title: "Long-term Relief", details: "Healthy anal canal function." },
    ],
    faqs: [
      { question: "Is laser piles surgery better than open surgery?", answer: "Yes, laser surgery causes 80% less post-op pain, has no open wounds, and allows recovery in 2-3 days." },
      { question: "Will piles return after laser treatment?", answer: "Laser treatment seals the hemorrhoidal blood supply permanently. Maintaining a high-fiber diet prevents new piles." },
    ],
    relatedSlugs: ["fistula", "fissure", "laser-surgery"],
  },

  // 7. FISTULA
  {
    slug: "fistula",
    name: "Laser Anal Fistula Closure (FiLaC)",
    shortName: "Anal Fistula",
    category: "Laser Proctology & Vascular",
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
      { timeframe: "Month 1", title: "Complete Closure", details: "External opening fully healed." },
      { timeframe: "Month 2", title: "Final Recovery", details: "Total cure verified on clinical check." },
    ],
    faqs: [
      { question: "Does laser fistula surgery cause bowel incontinence?", answer: "No! Unlike open surgery, FiLaC laser preserves 100% of anal sphincter muscles, ensuring zero risk of incontinence." },
      { question: "How long does it take for a laser fistula wound to heal?", answer: "Patients resume daily work in 3 to 5 days, with complete internal healing in 4 weeks." },
    ],
    relatedSlugs: ["piles", "fissure", "laser-surgery"],
  },

  // 8. FISSURE
  {
    slug: "fissure",
    name: "Laser Anal Fissure Surgery",
    shortName: "Anal Fissure",
    category: "Laser Proctology & Vascular",
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
      { timeframe: "Week 2", title: "Full Healing", details: "Fissure tear fully covered by healthy mucosa." },
      { timeframe: "Month 1", title: "Permanent Recovery", details: "Complete cure." },
      { timeframe: "Month 2", title: "Long-term Health", details: "Healthy bowel habits." },
    ],
    faqs: [
      { question: "How quickly does pain stop after laser fissure surgery?", answer: "Most patients report immediate relief from severe cutting pain after the first bowel movement post-laser." },
    ],
    relatedSlugs: ["piles", "fistula", "laser-surgery"],
  },

  // 9. HYDROCELE
  {
    slug: "hydrocele",
    name: "Minimal Access Hydrocele Surgery (Hydrocelectomy)",
    shortName: "Hydrocele",
    category: "General & Trauma Surgery",
    summary: "Single micro-incision hydrocelectomy for painless fluid swelling around the testicle with cosmetic closure.",
    overview: "A hydrocele is a type of swelling in the scrotum that occurs when fluid collects in the thin sheath surrounding a testicle. Dr. Meda performs Minimal Access Eversion Hydrocelectomy under short spinal anesthesia, removing the fluid sac through a small hidden cosmetic incision.",
    symptoms: [
      { name: "Painless Scrotal Swelling", description: "Smooth, painless enlargement of one or both sides of scrotum.", iconName: "swelling" },
      { name: "Heaviness & Dragging", description: "Weight discomfort or dragging feeling when standing or walking.", iconName: "pain" },
    ],
    causes: [
      { title: "Fluid Imbalance", description: "Overproduction or defective absorption of tunica vaginalis fluid." },
    ],
    riskFactors: ["Scrotal trauma", "Epididymitis or testicular infection", "Older age"],
    diagnosis: [
      { name: "Transillumination Test", description: "Light shines clearly through fluid-filled scrotal mass.", badge: "Primary" },
      { name: "Scrotal Doppler Ultrasound", description: "Rule out testicular mass or hernia.", badge: "Routine" },
    ],
    nonSurgicalTreatment: "Needle aspiration causes rapid fluid re-accumulation. Surgical hydrocelectomy is the permanent cure.",
    surgicalTreatment: "Minimal Access Hydrocelectomy excises and everts the fluid sac through a 2cm hidden scrotal crease incision.",
    laparoscopicBenefits: [
      { title: "Hidden Cosmetic Cut", description: "Incision hidden in natural scrotal skin folds." },
      { title: "Overnight Hospital Stay", description: "Discharge within 24 hours." },
      { title: "Zero Fluid Recurrence", description: "Sac eversion prevents fluid from returning." },
    ],
    recoveryTimeline: [
      { timeframe: "Day 1", title: "Hydrocelectomy", details: "Short procedure; scrotal support applied." },
      { timeframe: "Week 1", title: "Discharge & Rest", details: "Discharge home; light walking with scrotal support." },
      { timeframe: "Week 2", title: "Normal Activity", details: "Resume office work and driving." },
      { timeframe: "Month 1", title: "Complete Recovery", details: "Scrotum returns to normal shape and size." },
      { timeframe: "Month 2", title: "Full Sports Clearance", details: "Resume heavy lifting and sports." },
    ],
    faqs: [
      { question: "Will hydrocele surgery affect fertility?", answer: "No, hydrocelectomy does not touch or harm the testicle or sperm ducts." },
    ],
    relatedSlugs: ["hernia", "lipoma", "emergency-trauma-surgery"],
  },

  // 10. THYROID
  {
    slug: "thyroid",
    name: "Thyroid Swelling & Thyroidectomy Surgery",
    shortName: "Thyroid Surgery",
    category: "General & Trauma Surgery",
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
      { timeframe: "Week 2", title: "Histopathology Review", details: "Tissue report review & thyroid hormone titration." },
      { timeframe: "Month 1", title: "Scar Fading", details: "Neck crease line fading." },
      { timeframe: "Month 2", title: "Full Well-being", details: "Balanced thyroid hormone health." },
    ],
    faqs: [
      { question: "Will my voice change after thyroid surgery?", answer: "Dr. Meda uses meticulous nerve identification technique to ensure vocal cord nerve preservation and normal voice retention." },
    ],
    relatedSlugs: ["breast-lump", "lipoma", "laser-surgery"],
  },

  // 11. BREAST LUMP
  {
    slug: "breast-lump",
    name: "Breast Lump Excision & Breast Surgery",
    shortName: "Breast Lump",
    category: "General & Trauma Surgery",
    summary: "Gentle cosmetic micro-excision of benign fibroadenomas, cysts, and diagnostic biopsy of breast swellings.",
    overview: "Breast lumps (such as Fibroadenoma or Fibrocystic illness) require prompt evaluation to rule out malignancy and relieve pain. Dr. Meda offers cosmetic circumareolar breast lump excision with invisible scars.",
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
      { timeframe: "Week 2", title: "Biopsy Report", details: "Histopathology confirmation of benign tissue." },
      { timeframe: "Month 1", title: "Invisible Scar", details: "Flawless cosmetic recovery." },
      { timeframe: "Month 2", title: "Routine Health", details: "Annual breast health check." },
    ],
    faqs: [
      { question: "Are all breast lumps cancerous?", answer: "No! Over 80% of breast lumps in women under 40 are completely benign fibroadenomas or cysts." },
    ],
    relatedSlugs: ["lipoma", "thyroid", "laser-surgery"],
  },

  // 12. BARIATRIC SURGERY
  {
    slug: "bariatric-surgery",
    name: "Laparoscopic Bariatric & Weight Loss Surgery",
    shortName: "Bariatric Surgery",
    category: "Laparoscopic Surgery",
    summary: "Laparoscopic Sleeve Gastrectomy & Gastric Bypass for severe obesity, type-2 diabetes reversal, and metabolic health.",
    overview: "For patients suffering from severe morbid obesity (BMI > 35) or uncontrolled Type 2 Diabetes, Laparoscopic Sleeve Gastrectomy provides long-term, sustainable weight reduction and metabolic disease remission.",
    symptoms: [
      { name: "Severe Weight Gain", description: "BMI > 35 with joint pain and mobility restriction.", iconName: "bulge" },
      { name: "Uncontrolled Diabetes", description: "High HbA1c despite multiple diabetic medications.", iconName: "fatigue" },
      { name: "Sleep Apnea", description: "Heavy snoring and night choking.", iconName: "fatigue" },
    ],
    causes: [
      { title: "Metabolic Dysregulation", description: "Hormonal resistance and high hunger hormone (Ghrelin) secretion." },
    ],
    riskFactors: ["BMI > 35", "Family history of obesity", "Metabolic syndrome"],
    diagnosis: [
      { name: "Multidisciplinary Evaluation", description: "Endocrinology, bariatric nutrition, and cardiac clearance.", badge: "Primary" },
    ],
    nonSurgicalTreatment: "Dietary modification, behavioral therapy, and GLP-1 medications.",
    surgicalTreatment: "Laparoscopic Sleeve Gastrectomy reduces stomach capacity by 75% via 4 mini keyholes, drastically lowering hunger hormone production.",
    laparoscopicBenefits: [
      { title: "60-70% Excess Weight Loss", description: "Sustained weight reduction over 12-18 months." },
      { title: "Diabetes & BP Remission", description: "Over 80% of patients eliminate or reduce diabetic medications." },
    ],
    recoveryTimeline: [
      { timeframe: "Day 1", title: "Laparoscopic Sleeve", details: "Keyhole surgery; walking in 4 hours." },
      { timeframe: "Week 1", title: "Liquid Diet Phase", details: "Clear liquid protein diet at home." },
      { timeframe: "Week 2", title: "Pureed Food", details: "Transition to soft pureed nutrition." },
      { timeframe: "Month 1", title: "Solid Foods & Exercise", details: "10-15 kg weight loss; active gym walking." },
      { timeframe: "Month 2", title: "Metabolic Remission", details: "Significant reduction in blood sugar and BP." },
    ],
    faqs: [
      { question: "Is bariatric weight loss surgery safe?", answer: "Yes, modern laparoscopic bariatric surgery has a safety profile comparable to routine gallbladder surgery." },
    ],
    relatedSlugs: ["gallbladder-stones", "hernia", "laser-surgery"],
  },

  // 13. LASER SURGERY
  {
    slug: "laser-surgery",
    name: "Advanced Laser Surgery & Laser Proctology",
    shortName: "Laser Surgery",
    category: "Laser Proctology & Vascular",
    summary: "Cutting-edge painless German diode laser therapies for Piles, Fissures, Fistula, Pilonidal Sinus & Varicose Veins.",
    overview: "Dr. Meda specializes in advanced Laser Surgery using high-precision German Diode Laser platforms for proctology and vascular conditions. Laser therapy offers bloodless, incisionless, sphincter-preserving cures with same-day discharge.",
    symptoms: [
      { name: "Anal Pain & Bleeding", description: "Bleeding or sharp pain during bowel movements.", iconName: "bleeding" },
      { name: "Varicose Leg Veins", description: "Painful, swollen leg veins.", iconName: "skin" },
    ],
    causes: [
      { title: "Vascular & Tissue Degeneration", description: "Increased pressure causing venous or sphincter breakdown." },
    ],
    riskFactors: ["Sedentary desk jobs", "Constipation", "Standing occupations"],
    diagnosis: [
      { name: "Laser Anoscopy & Doppler", description: "Precision mapping before laser therapy.", badge: "Primary" },
    ],
    nonSurgicalTreatment: "Conservative medications for mild initial stages.",
    surgicalTreatment: "Targeted laser fiber coagulation of diseased tissue without cutting open skin.",
    laparoscopicBenefits: [
      { title: "Zero Cuts or Stitches", description: "Pure laser thermal energy closure." },
      { title: "90% Less Pain", description: "Virtually painless post-op recovery." },
    ],
    recoveryTimeline: [
      { timeframe: "Day 1", title: "Laser Procedure", details: "Day-care procedure; walk home in 3 hours." },
      { timeframe: "Week 1", title: "Work Return", details: "Resume full office duties." },
      { timeframe: "Month 1", title: "Total Cure", details: "Complete tissue recovery." },
      { timeframe: "Month 2", title: "Long-term Health", details: "Healthy active lifestyle." },
    ],
    faqs: [
      { question: "Why is laser surgery superior to conventional open surgery?", answer: "Laser surgery involves no cutting, minimal pain, no painful dressing changes, and rapid 2-day recovery." },
    ],
    relatedSlugs: ["varicose-veins", "piles", "fistula", "fissure"],
  },

  // 14. EMERGENCY TRAUMA SURGERY
  {
    slug: "emergency-trauma-surgery",
    name: "24/7 Emergency & Abdominal Trauma Surgery",
    shortName: "Emergency Surgery",
    category: "General & Trauma Surgery",
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
      { timeframe: "Month 1", title: "Strength Recovery", details: "Gradual return of physical vitality." },
      { timeframe: "Month 2", title: "Complete Rehabilitation", details: "Full functional recovery." },
    ],
    faqs: [
      { question: "Is emergency surgical care available 24/7 at Suraksha Hospital Khammam?", answer: "Yes! Dr. Rajashekhar Meda and the Suraksha Hospital trauma team provide 24/7 emergency surgical evaluation and operating theatre readiness." },
    ],
    relatedSlugs: ["appendicitis", "hernia", "gallbladder-stones"],
  },

  // 15. PILONIDAL SINUS
  {
    slug: "pilonidal-sinus",
    name: "Laser Pilonidal Sinus Surgery (SILaC)",
    shortName: "Pilonidal Sinus",
    category: "Laser Proctology & Vascular",
    summary: "Painless Laser Sinus Obliteration (SILaC) for natal cleft pilonidal sinus with zero open wounds and minimal recurrence.",
    overview: "Pilonidal sinus is a painful infected hair-containing cavity or channel under the skin in the cleft of the buttocks. Traditional open excision leaves large painful wounds requiring months of daily dressing. Dr. Meda performs SILaC (Sinus Laser Closure), cleaning and sealing the sinus tract with German laser energy.",
    symptoms: [
      { name: "Painful Natal Cleft Swelling", description: "Painful lump or swelling at the top of the buttock crease.", iconName: "swelling" },
      { name: "Pus & Blood Discharge", description: "Foul-smelling pus or bloody fluid draining from skin pit openings.", iconName: "bleeding" },
      { name: "Sitting Discomfort", description: "Sharp discomfort or ache when sitting down for extended periods.", iconName: "pain" },
    ],
    causes: [
      { title: "Loose Hair Ingrowth", description: "Loose hair penetrating skin pits in natal cleft due to friction." },
      { title: "Follicular Occlusion", description: "Blocked hair follicles forming an infected subcutaneous sinus tract." },
    ],
    riskFactors: ["Young males (ages 15-30)", "Prolonged sitting (drivers, desk workers)", "Excess body hair & obesity"],
    diagnosis: [
      { name: "Clinical Visual Inspection", description: "Direct identification of midline sinus pits and secondary tracks.", badge: "Primary" },
      { name: "Probing Assessment", description: "Mapping sinus depth under sterile illumination.", badge: "Routine" },
    ],
    nonSurgicalTreatment: "Antibiotics temporarily control acute infection but cannot remove embedded hair or seal the sinus cavity.",
    surgicalTreatment: "Sinus Laser Closure (SILaC) clears hair debris and delivers 360° laser thermal energy to collapse and seal the sinus internally.",
    laparoscopicBenefits: [
      { title: "Zero Large Open Wounds", description: "No painful open cutting or months of daily wound packing." },
      { title: "Day-Care Discharge", description: "Procedure takes 20 minutes; go home the same day." },
      { title: "Fast Work Return", description: "Resume comfortable sitting and desk work in 2-3 days." },
    ],
    recoveryTimeline: [
      { timeframe: "Day 1", title: "SILaC Laser", details: "Sinus tract cleaned and laser sealed; same-day discharge." },
      { timeframe: "Week 1", title: "Light Dressing", details: "Minimal pain; routine daily activities." },
      { timeframe: "Week 2", title: "Complete Work Return", details: "Resume full active office duties." },
      { timeframe: "Month 1", title: "Sinus Obliteration", details: "Sinus tract fully sealed and flat." },
    ],
    faqs: [
      { question: "Is laser pilonidal sinus surgery painful?", answer: "No, SILaC laser surgery is performed under regional/local anesthesia and causes 90% less post-op pain than open excision." },
      { question: "How long does recovery take after SILaC laser?", answer: "Patients return to work within 3 days, compared to 6-8 weeks of painful dressing for traditional open surgery." },
    ],
    relatedSlugs: ["fistula", "piles", "laser-surgery"],
  },

  // 16. INTESTINAL & COLON SURGERY
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
      { title: "Diverticulitis / Adhesions", description: "Infected pouches or post-surgical bands causing bowel twist." },
    ],
    riskFactors: ["Age > 50", "Low-fiber diet", "History of intestinal polyps", "Inflammatory bowel disease"],
    diagnosis: [
      { name: "Colonoscopy", description: "Endoscopic visualization and biopsy of bowel mucosa.", badge: "Primary" },
      { name: "Contrast CT Abdomen", description: "3D imaging mapping bowel obstruction site and vascular supply.", badge: "Advanced" },
    ],
    nonSurgicalTreatment: "Medical management for early diverticulitis or inflammatory bowel disease. Obstructive lesions require surgical resection.",
    surgicalTreatment: "Laparoscopic Resection and Stapled Anastomosis removes diseased intestine through keyholes and reconnects healthy bowel seamlessly.",
    laparoscopicBenefits: [
      { title: "Tiny Keyhole Access", description: "Avoids long painful mid-line laparotomy incisions." },
      { title: "Faster Bowel Function Return", description: "Bowel movements resume days faster post-op." },
      { title: "Lower Complication Rate", description: "Reduced wound infection and hernia risk." },
    ],
    recoveryTimeline: [
      { timeframe: "Day 1", title: "Laparoscopic Resection", details: "Keyhole operation; IV hydration & early walking." },
      { timeframe: "Week 1", title: "Bowel Recovery & Diet", details: "Oral liquids to soft diet transition; home discharge." },
      { timeframe: "Week 2", title: "Home Recovery", details: "Walking comfortably and eating normal meals." },
      { timeframe: "Month 1", title: "Full Vitality", details: "Complete functional bowel recovery." },
    ],
    faqs: [
      { question: "What is laparoscopic intestinal resection?", answer: "It is keyhole surgery to remove diseased bowel segments and join healthy bowel ends together using specialized surgical staplers." },
      { question: "How long is the hospital stay after laparoscopic colon surgery?", answer: "Most patients are safely discharged in 4 to 5 days." },
    ],
    relatedSlugs: ["gallbladder-stones", "appendicitis", "hernia"],
  },
];

// BACKWARD COMPATIBILITY SLUG ALIASES
export const legacySlugAliases: Record<string, string> = {
  "laparoscopic-surgery": "hernia",
  "hernia-repair": "hernia",
  "gallbladder-appendix": "gallbladder-stones",
  "laser-varicose-veins": "varicose-veins",
};

export function getConditionBySlug(slug: string): ConditionDetail | undefined {
  const targetSlug = legacySlugAliases[slug] || slug;
  return detailedConditions.find((c) => c.slug === targetSlug);
}
