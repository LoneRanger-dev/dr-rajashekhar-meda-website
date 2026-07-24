/**
 * Patient education articles.
 *
 * Content is adapted from the clinic's own bilingual print creatives
 * (epilepsy signs poster, spine conditions poster) so the site says exactly
 * what the practice already says in print — and captures the long-tail
 * search intent those topics attract.
 *
 * Every article is educational, never diagnostic. Each ends with a
 * "when to seek help" block pointing at the phone number.
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
  category: "Spine" | "Brain & Trauma" | "Epilepsy";
  readingMinutes: number;
  image?: { src: string; alt: string };
  body: ArticleBlock[];
  seekHelp: string[];
}

export const articles: Article[] = [
  {
    slug: "epilepsy-signs-and-symptoms",
    title: "Epilepsy: signs and symptoms you should not ignore",
    description:
      "Recognising the signs of epilepsy early can bring hope and help. A plain-language guide to the symptoms of seizure disorders, from the neurosurgery team at Suraksha Hospital, Khammam.",
    category: "Epilepsy",
    readingMinutes: 4,
    image: {
      src: "/images/creatives/epilepsy-signs.jpg",
      alt: "Bilingual patient education poster listing the signs and symptoms of epilepsy",
    },
    body: [
      {
        type: "para",
        text: "Epilepsy is a neurological condition in which a person experiences recurring seizures. It is more common than most people assume, and — importantly — it is treatable. Recognising the signs early means treatment can start sooner, and most people with epilepsy go on to lead full, ordinary lives.",
      },
      { type: "heading", text: "Common signs and symptoms" },
      {
        type: "para",
        text: "Seizures do not always look the way they are portrayed on screen. Many are subtle and easy to miss. Watch for:",
      },
      {
        type: "list",
        items: [
          "Brief confusion or disorientation — a short period where the person seems 'absent'",
          "Sudden, involuntary jerks or spasms in the arms and legs",
          "Fixed gaze or staring episodes that cannot be interrupted",
          "Loss of awareness or blackouts",
          "Emotional changes such as sudden unexplained fear, worry or unusual feelings",
        ],
      },
      { type: "heading", text: "What causes epilepsy?" },
      {
        type: "para",
        text: "Epilepsy has many possible causes: previous head injury, infection affecting the brain, stroke, a structural abnormality, or a genetic tendency. In a significant number of cases no single cause is ever identified — which does not make the condition any less treatable.",
      },
      { type: "heading", text: "How is it treated?" },
      {
        type: "para",
        text: "Most people are treated successfully with anti-epileptic medication. The aim is to find the drug and dose that controls seizures with the fewest side effects, which sometimes takes a period of adjustment. Where seizures continue despite properly trialled medication — known as drug-resistant epilepsy — surgical assessment may be appropriate. This is a specialist evaluation that identifies whether the seizures arise from one area of the brain that can safely be treated surgically.",
      },
      { type: "heading", text: "Living with epilepsy" },
      {
        type: "para",
        text: "Regular sleep, taking medication consistently, and avoiding known triggers make a measurable difference. Keeping a simple seizure diary — what happened, when, and what preceded it — is genuinely useful information for your doctor, and often reveals patterns that are otherwise easy to miss.",
      },
    ],
    seekHelp: [
      "A seizure lasting longer than five minutes",
      "Repeated seizures without full recovery in between",
      "A first-ever seizure",
      "A seizure resulting in injury, or occurring in water",
      "Difficulty breathing or the person does not regain consciousness",
    ],
  },
  {
    slug: "spine-conditions-and-treatment",
    title: "Spine conditions and treatment: herniated discs, stenosis and deformities",
    description:
      "Specialised care for herniated discs, spinal stenosis and spinal deformities — what these conditions are, how they are diagnosed and when surgery is considered.",
    category: "Spine",
    readingMinutes: 5,
    image: {
      src: "/images/creatives/spine-conditions.jpg",
      alt: "Patient education poster illustrating spine conditions and treatment options",
    },
    body: [
      {
        type: "para",
        text: "Back and neck pain are extremely common, and the great majority of episodes settle with time, movement and simple measures. But when pain persists for weeks, radiates into an arm or leg, or comes with numbness or weakness, it is worth having the spine properly assessed.",
      },
      { type: "heading", text: "Herniated (slipped) disc" },
      {
        type: "para",
        text: "The discs between the vertebrae act as cushions. When the softer inner material pushes through the tougher outer wall, it can press on a nearby nerve. That pressure is what produces the classic pattern of pain radiating down a leg (sciatica) or into an arm, often with pins and needles or weakness. Many herniated discs improve without surgery over several weeks.",
      },
      { type: "heading", text: "Spinal stenosis" },
      {
        type: "para",
        text: "Stenosis means narrowing of the spinal canal, usually the result of gradual age-related change. The narrowing leaves less room for the spinal cord and nerves. A characteristic symptom is leg pain or heaviness that comes on with walking and eases when sitting down or leaning forward — some people notice they can walk much further with a shopping trolley to lean on.",
      },
      { type: "heading", text: "Spinal deformities" },
      {
        type: "para",
        text: "Deformities such as scoliosis (sideways curvature) and kyphosis (excessive forward rounding) may be present from adolescence or develop later as the spine degenerates. Mild curves often need nothing more than monitoring. Larger or progressing curves — particularly where they affect breathing, balance or cause persistent pain — warrant specialist assessment.",
      },
      { type: "heading", text: "How spine problems are assessed" },
      {
        type: "para",
        text: "Assessment begins with your history and a clinical examination — where exactly the pain is, what makes it better or worse, and whether nerve function is affected. Imaging such as MRI is used to confirm the picture. An important principle: imaging findings are interpreted alongside your symptoms, never in isolation. Many people have disc changes visible on a scan while having no pain at all, so the scan alone never decides the treatment.",
      },
      { type: "heading", text: "When is surgery considered?" },
      {
        type: "para",
        text: "Surgery is generally considered when conservative treatment has been given a fair trial without adequate relief, when there is progressive weakness or nerve compression, or where a deformity is worsening. Where surgery is needed, minimally invasive spine surgery (MISS) can often be used — smaller incisions, less disruption to surrounding muscle, typically less blood loss and often a shorter hospital stay. Not every condition is suitable for MISS, and suitability is assessed case by case.",
      },
    ],
    seekHelp: [
      "Loss of bladder or bowel control alongside back pain — treat this as an emergency",
      "Progressive weakness in an arm or leg",
      "Numbness around the inner thighs or groin",
      "Severe pain following a fall or accident",
      "Back pain with fever or unexplained weight loss",
    ],
  },
  {
    slug: "head-injury-what-to-do",
    title: "Head injury: what to do and when it is an emergency",
    description:
      "After a fall or road accident, knowing which head injury symptoms are serious matters. A practical guide to warning signs and when to seek immediate neurosurgical care in Khammam.",
    category: "Brain & Trauma",
    readingMinutes: 4,
    image: {
      src: "/images/creatives/brain-trauma.png",
      alt: "Suraksha Hospital — expert care for brain and trauma: head injury assessment, emergency care and advanced neuro care",
    },
    body: [
      {
        type: "para",
        text: "Head injuries range from a minor knock to a life-threatening emergency, and the difference is not always obvious in the first few minutes. Road accidents and falls are the most common causes. Knowing which signs matter helps families act quickly when it counts.",
      },
      { type: "heading", text: "Why the first hours matter" },
      {
        type: "para",
        text: "Some of the most dangerous consequences of head injury — particularly bleeding inside the skull — can develop over hours rather than instantly. A person may seem fine immediately after an accident and deteriorate later. This is precisely why observation after a significant head injury is taken seriously, and why access to a neurosurgeon at any hour matters.",
      },
      { type: "heading", text: "Warning signs to watch for" },
      {
        type: "para",
        text: "After any significant blow to the head, watch closely for the following over the next 24–48 hours:",
      },
      {
        type: "list",
        items: [
          "Loss of consciousness, however brief",
          "A headache that steadily worsens rather than settling",
          "Repeated vomiting",
          "Increasing drowsiness, or difficulty waking the person",
          "Confusion, unusual behaviour or difficulty recognising people",
          "Weakness, numbness or clumsiness in an arm or leg",
          "Slurred speech or blurred/double vision",
          "Clear fluid or blood coming from the nose or ear",
          "A seizure",
        ],
      },
      { type: "heading", text: "What to do at the scene" },
      {
        type: "list",
        items: [
          "Call for help immediately if any warning sign above is present",
          "Do not move someone with a suspected neck or spine injury unless they are in danger",
          "Keep the person still, and do not leave them alone",
          "Do not give food, drink or painkillers until they have been assessed",
          "Note the time of injury and what happened — this genuinely helps the treating team",
        ],
      },
      { type: "heading", text: "Assessment and treatment" },
      {
        type: "para",
        text: "In hospital, assessment involves a neurological examination and usually a CT scan of the head. Many head injuries need observation rather than an operation. Where there is significant bleeding or pressure on the brain, urgent surgery may be required — and advanced ICU support afterwards is often as important as the surgery itself.",
      },
    ],
    seekHelp: [
      "Any loss of consciousness after a head injury",
      "A headache that keeps getting worse",
      "Repeated vomiting after the injury",
      "Increasing drowsiness or confusion",
      "Fluid or blood from the nose or ear",
      "Any seizure following a head injury",
    ],
  },
];
