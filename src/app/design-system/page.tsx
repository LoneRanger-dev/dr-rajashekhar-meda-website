import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Phone, CalendarCheck, ShieldCheck, Brain, Activity, Stethoscope } from "lucide-react";
import { notoSansTelugu } from "@/lib/fonts-telugu";

export const metadata: Metadata = {
  title: "Design System — Suraksha Neuro",
  robots: { index: false, follow: false },
};

/* Internal style guide. Not linked from the site nav and marked noindex —
   it exists so the clinic and future developers can see the tokens in situ. */

function Swatch({
  name,
  varName,
  hex,
  contrast,
  onDark,
}: {
  name: string;
  varName: string;
  hex: string;
  contrast?: string;
  onDark?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="h-20 rounded-xl border elev-1 flex items-end p-2"
        style={{ background: `var(${varName})` }}
      >
        {contrast && (
          <span
            className="text-[0.7rem] font-medium tnum"
            style={{ color: onDark ? "#fff" : "var(--navy-900)" }}
          >
            {contrast}
          </span>
        )}
      </div>
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-muted-foreground tnum">{hex}</p>
      </div>
    </div>
  );
}

function Section({ title, note, children }: { title: string; note?: string; children: React.ReactNode }) {
  return (
    <section className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl">{title}</h2>
        {note && <p className="text-sm text-muted-foreground max-w-2xl">{note}</p>}
      </div>
      {children}
    </section>
  );
}

export default function DesignSystemPage() {
  return (
    <main className="brand-wash min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-16 space-y-16">
        <header className="space-y-3">
          <p className="text-sm font-medium text-accent uppercase tracking-widest">
            Internal style guide
          </p>
          <h1 className="text-4xl sm:text-5xl">Suraksha Neuro Design System</h1>
          <p className="text-muted-foreground max-w-2xl">
            Derived from the clinic&apos;s existing print creatives — deep clinical navy and
            cyan/teal, with the Suraksha logo plum as a sparing heritage accent. Every
            foreground/background pair below is WCAG 2.1 AA verified.
          </p>
        </header>

        <Section
          title="Core palette"
          note="Navy carries the brand and all primary actions. Teal-700 is the accessible action teal — the lighter cyans are decorative only and must never carry body copy."
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            <Swatch name="Primary (Navy 800)" varName="--navy-800" hex="#103A5E" contrast="11.74:1 AAA" onDark />
            <Swatch name="Foreground (Navy 900)" varName="--navy-900" hex="#0A2540" contrast="15.54:1 AAA" onDark />
            <Swatch name="Accent (Teal 700)" varName="--teal-700" hex="#0E7490" contrast="5.36:1 AA" onDark />
            <Swatch name="Emergency (Orange 700)" varName="--orange-700" hex="#C2410C" contrast="5.18:1 AA" onDark />
            <Swatch name="Heritage (Plum)" varName="--plum-700" hex="#7B2D8E" contrast="logo only" onDark />
            <Swatch name="Muted fg (Slate 600)" varName="--slate-600" hex="#44596B" contrast="7.27:1 AAA" onDark />
            <Swatch name="Border (Slate 200)" varName="--slate-200" hex="#D3E2ED" />
            <Swatch name="Surface (Slate 50)" varName="--slate-50" hex="#F6F9FC" />
          </div>
        </Section>

        <Section
          title="Decorative cyans"
          note="Gradients, the 3D hero and glass edges only. Both fail AA for body text on white, so they are deliberately excluded from text tokens."
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            <Swatch name="Cyan 600" varName="--teal-600" hex="#0891B2" contrast="3.68:1 large-only" onDark />
            <Swatch name="Cyan 400" varName="--teal-400" hex="#22D3EE" contrast="decorative" />
            <Swatch name="Cyan 100" varName="--teal-100" hex="#CFF5FB" />
            <Swatch name="Cyan 50" varName="--teal-50" hex="#ECFEFF" />
          </div>
        </Section>

        <Section
          title="Typography"
          note="Figtree for headings, Noto Sans for body, Noto Sans Telugu for the bilingual copy carried over from the clinic's posters."
        >
          <div className="glass rounded-2xl p-8 space-y-5">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Display / Figtree</p>
              <p className="text-5xl">Brain &amp; Spine Care</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Heading 2</p>
              <p className="text-3xl">Minimally Invasive Spine Surgery</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Body / Noto Sans</p>
              <p className="max-w-prose">
                Dr. Gade Ramakrishna Reddy is a Consultant Brain &amp; Spine Surgeon at Suraksha
                Hospital, Khammam, with an MCh in Neurosurgery and an academic appointment as
                Assistant Professor at Mamata Medical College.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Telugu / Noto Sans Telugu</p>
              <p lang="te" className={`${notoSansTelugu.variable} text-2xl`}>
                డా. గాదె రామకృష్ణారెడ్డి — న్యూరో సర్జన్
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Tabular figures (phone, timings)
              </p>
              <p className="tnum text-xl">7075 447 449 · 10:00 AM – 8:00 PM</p>
            </div>
          </div>
        </Section>

        <Section
          title="Buttons"
          note="Every patient-facing button is at least 44px tall. The emergency variant is reserved exclusively for the 24/7 call action so urgency keeps its meaning."
        >
          <div className="glass rounded-2xl p-8 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="emergency" size="cta-lg">
                <Phone /> Call 24/7 — 7075 447 449
              </Button>
              <Button variant="accent" size="cta">
                <CalendarCheck /> Book Appointment
              </Button>
              <Button variant="default" size="cta">
                Learn More
              </Button>
              <Button variant="outline" size="cta">
                Conditions Treated
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="secondary" size="cta">Secondary</Button>
              <Button variant="ghost" size="cta">Ghost</Button>
              <Button variant="link" size="cta">Text link</Button>
              <Button variant="accent" size="icon-touch" aria-label="Call the clinic">
                <Phone />
              </Button>
            </div>
          </div>
        </Section>

        <Section
          title="Glass cards"
          note="Glassmorphism for the conditions grid and testimonials, with an opaque fallback where backdrop-filter is unsupported."
        >
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: Brain, title: "Brain & Trauma", body: "24/7 emergency neurosurgical response and advanced ICU support." },
              { icon: Activity, title: "Spine Surgery", body: "Herniated disc, spinal stenosis and deformity correction via MISS." },
              { icon: Stethoscope, title: "Epilepsy Care", body: "Diagnosis and long-term seizure management." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="glass rounded-2xl p-6 space-y-3">
                <div className="size-11 rounded-xl bg-accent/10 text-accent grid place-items-center">
                  <Icon className="size-5" aria-hidden />
                </div>
                <h3 className="text-lg">{title}</h3>
                <p className="text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Elevation & radius">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {[
              ["elev-1", "Subtle — inputs, list rows"],
              ["elev-2", "Cards, sticky CTA bar"],
              ["elev-3", "Modals, chatbot panel"],
            ].map(([cls, label]) => (
              <div key={cls} className={`${cls} bg-card rounded-xl p-5 border`}>
                <p className="font-medium text-sm">{cls}</p>
                <p className="text-xs text-muted-foreground mt-1">{label}</p>
              </div>
            ))}
            <div className="bg-card rounded-xl p-5 border elev-1">
              <p className="font-medium text-sm">radius</p>
              <p className="text-xs text-muted-foreground mt-1 tnum">base 0.75rem</p>
            </div>
          </div>
        </Section>

        <Section
          title="Accessibility guarantees"
          note="These are enforced in globals.css, not left to per-component discretion."
        >
          <ul className="glass rounded-2xl p-8 space-y-3">
            {[
              "Focus rings are 3px and never removed — :focus-visible is defined globally.",
              "prefers-reduced-motion collapses all animation, including the 3D hero.",
              "Body text is minimum 16px; line-height 1.625.",
              "Colour is never the sole carrier of meaning — icons accompany status.",
              "Dark mode uses tonal variants, verified independently (not inverted).",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm">
                <ShieldCheck className="size-5 text-success shrink-0" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </main>
  );
}
