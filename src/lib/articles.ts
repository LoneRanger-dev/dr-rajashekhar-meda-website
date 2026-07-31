/**
 * Patient education articles for General & Laparoscopic Surgery.
 * Dr. Rajashekhar Meda — Suraksha Hospital, Khammam.
 */

export interface ArticleBlock {
  type: "para" | "list" | "heading";
  text?: string;
  items?: string[];
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: "Laparoscopic Surgery" | "Hernia & Appendix" | "Laser Surgery";
  readingMinutes: number;
  image?: { src: string; alt: string };
  body: ArticleBlock[];
  seekHelp: string[];
}

export const articles: Article[] = [
  {
    slug: "laparoscopic-gallbladder-surgery-guide",
    title: "Laparoscopic Gallbladder Surgery (Cholecystectomy): Recovery, Benefits & What to Expect",
    description:
      "A patient guide to keyhole gallbladder stone removal by Dr. Rajashekhar Meda at Suraksha Hospital, Khammam. Learn about symptoms, benefits of laparoscopic surgery, and quick recovery timelines.",
    category: "Laparoscopic Surgery",
    readingMinutes: 4,
    image: {
      src: "/images/doctor/dr-rajashekhar-poster.jpg",
      alt: "Laparoscopic Gallbladder Surgery Patient Guide by Dr. Rajashekhar Meda",
    },
    body: [
      {
        type: "para",
        text: "Gallstones (Cholelithiasis) are one of the most common causes of upper abdominal pain and digestive discomfort. When gallstones cause inflammation or block bile ducts, Laparoscopic Cholecystectomy (keyhole surgery to remove the gallbladder) is the gold standard, highly safe treatment.",
      },
      { type: "heading", text: "Recognizing Gallbladder Symptoms" },
      {
        type: "para",
        text: "Gallbladder issues often manifest after eating fatty or rich meals. Key signs include:",
      },
      {
        type: "list",
        items: [
          "Sharp or cramping pain in the upper right abdomen",
          "Pain radiating to the right shoulder blade or back",
          "Nausea, vomiting, indigestion, or persistent bloating",
          "Fever, chills, or yellowish tint to the skin/eyes (jaundice)",
        ],
      },
      { type: "heading", text: "Why Choose Laparoscopic Keyhole Surgery?" },
      {
        type: "para",
        text: "Unlike traditional open surgery requiring a large incision, laparoscopic gallbladder surgery uses 3 or 4 tiny keyhole openings (5mm to 10mm). A miniature HD camera (laparoscope) guides surgical precision. Benefits include significantly reduced postoperative pain, minimal scar visibility, single-day hospital stay, and return to work within 3-5 days.",
      },
      { type: "heading", text: "Post-Operative Recovery & Care" },
      {
        type: "para",
        text: "Patients can walk and eat light meals on the same day as surgery. The human body functions completely normally without a gallbladder, as bile flows directly from the liver into the small intestine. Following a low-fat diet for 2 weeks ensures smooth digestion.",
      },
    ],
    seekHelp: [
      "Severe upper abdominal pain lasting more than 2 hours",
      "Abdominal pain accompanied by high fever or chills",
      "Yellowing of the eyes or skin (jaundice)",
      "Persistent nausea and inability to keep fluids down",
    ],
  },
  {
    slug: "hernia-repair-laparoscopic-surgery",
    title: "Hernia Symptoms, Types & Advanced Keyhole Mesh Repair Options in Khammam",
    description:
      "Understand Inguinal, Umbilical, and Incisional hernias. Dr. Rajashekhar Meda explains modern tension-free 3D mesh laparoscopic repair with zero recurrence.",
    category: "Hernia & Appendix",
    readingMinutes: 5,
    image: {
      src: "/images/doctor/dr-rajashekhar-poster.jpg",
      alt: "Laparoscopic Hernia Repair Guide",
    },
    body: [
      {
        type: "para",
        text: "A hernia occurs when an internal organ or fatty tissue pushes through a weakness or tear in the surrounding muscle wall. Hernias never heal on their own with medication or exercise; surgical repair is the only definitive cure.",
      },
      { type: "heading", text: "Common Types of Hernias" },
      {
        type: "list",
        items: [
          "Inguinal Hernia: Occurs in the groin region (most common in men).",
          "Umbilical Hernia: Swelling around the navel / belly button.",
          "Incisional Hernia: Develops at the site of a previous surgical scar.",
          "Ventral Hernia: Muscle weakness along the abdominal midline.",
        ],
      },
      { type: "heading", text: "Laparoscopic Tension-Free Mesh Repair" },
      {
        type: "para",
        text: "During keyhole hernia repair, Dr. Rajashekhar Meda places a lightweight, biocompatible synthetic mesh from the inner side of the abdominal wall. This reinforces the weak muscle layer without pulling tissues tightly, eliminating pain and reducing recurrence rates to virtually zero.",
      },
    ],
    seekHelp: [
      "Sudden severe pain in a hernia swelling",
      "A hernia bulge that turns red, purple, or dark",
      "Inability to gently push the hernia bulge back in",
      "Nausea, vomiting, and inability to pass gas or stool (Strangulated Hernia Emergency)",
    ],
  },
  {
    slug: "appendix-removal-laparoscopic-surgery",
    title: "Understanding Appendicitis: Urgent Keyhole Appendix Surgery (Appendectomy)",
    description:
      "Identify acute appendicitis early. 24/7 emergency laparoscopic appendix removal by Dr. Rajashekhar Meda at Suraksha Hospital, Khammam.",
    category: "Hernia & Appendix",
    readingMinutes: 4,
    image: {
      src: "/images/doctor/dr-rajashekhar-hero.jpg",
      alt: "Emergency Laparoscopic Appendix Surgery by Dr. Rajashekhar Meda",
    },
    body: [
      {
        type: "para",
        text: "Appendicitis is an acute inflammation of the appendix requiring immediate medical attention. Delaying treatment can lead to appendix rupture (perforation), causing widespread abdominal infection.",
      },
      { type: "heading", text: "Key Symptoms of Appendicitis" },
      {
        type: "list",
        items: [
          "Dull pain near the navel that shifts to the lower right abdomen and grows sharp",
          "Pain that worsens with coughing, walking, or sudden movements",
          "Loss of appetite, nausea, and vomiting",
          "Low-grade fever that rises as illness progresses",
          "Abdominal swelling and severe tenderness",
        ],
      },
      { type: "heading", text: "Emergency Laparoscopic Appendectomy" },
      {
        type: "para",
        text: "At Suraksha Hospital, emergency laparoscopic appendectomy is performed through tiny incisions, allowing rapid removal of the inflamed appendix, thorough abdominal irrigation, minimal post-op pain, and discharge within 24 hours.",
      },
    ],
    seekHelp: [
      "Sudden, sharp, worsening pain in the lower right abdomen",
      "Pain accompanied by fever, vomiting, or shivering",
      "Severe abdominal stiffness or extreme sensitivity to touch",
    ],
  },
  {
    slug: "laser-surgery-varicose-veins-and-hemo",
    title: "Minimally Invasive Laser Surgery: Varicose Veins, Tumors & Painless Care",
    description:
      "Explore modern laser therapy for varicose veins, laser proctology, and precise tumor removal by Dr. Rajashekhar Meda.",
    category: "Laser Surgery",
    readingMinutes: 4,
    image: {
      src: "/images/doctor/dr-rajashekhar-consulting.jpg",
      alt: "Laser Surgery and Tumor Excision by Dr. Rajashekhar Meda",
    },
    body: [
      {
        type: "para",
        text: "Surgical science has evolved dramatically. Advanced laser techniques allow doctors to treat vascular conditions, skin tumors, and colorectal problems without major cuts or prolonged hospital stays.",
      },
      { type: "heading", text: "Endovenous Laser Ablation (EVLA) for Varicose Veins" },
      {
        type: "para",
        text: "Twisted, enlarged veins in the legs cause heaviness, pain, swelling, and skin darkening. EVLA uses pinpoint laser energy to seal diseased veins internally under local anesthesia. Patients walk out of the clinic on the same day with no surgical cuts or scars.",
      },
      { type: "heading", text: "Surgical Excision of Tumors & Cysts" },
      {
        type: "para",
        text: "Dr. Rajashekhar Meda specializes in precision surgical removal of lipomas, sebaceous cysts, soft tissue tumors, and abdominal masses, ensuring thorough oncological safety and optimal cosmetic recovery.",
      },
    ],
    seekHelp: [
      "Painful varicose veins with skin discoloration or non-healing leg ulcers",
      "Newly noticed body lump, tumor, or fast-growing swelling",
      "Bleeding or pain during bowel movements",
    ],
  },
];
