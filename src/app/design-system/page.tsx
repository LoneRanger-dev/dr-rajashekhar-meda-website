import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Phone, CalendarCheck } from "lucide-react";
import { notoSansTelugu } from "@/lib/fonts-telugu";

export const metadata: Metadata = {
  title: "Design System — Dr. Rajashekhar Meda",
  robots: { index: false, follow: false },
};

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
        <h2 className="type-h2">{title}</h2>
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
          <h1 className="type-h1">Dr. Rajashekhar Meda Design System</h1>
          <p className="text-muted-foreground max-w-2xl">
            Derived from Suraksha Hospital branding — medical blue and purple accents, WCAG 2.1 AA verified color pairs.
          </p>
        </header>

        <Section
          title="Core palette"
          note="Medical blue carries primary actions, while purple accent adds premium hospital branding."
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            <Swatch name="Primary (Navy 800)" varName="--navy-800" hex="#103A5E" contrast="11.74:1 AAA" onDark />
            <Swatch name="Foreground (Navy 900)" varName="--navy-900" hex="#0A2540" contrast="15.54:1 AAA" onDark />
            <Swatch name="Accent (Teal 700)" varName="--teal-700" hex="#0E7490" contrast="5.36:1 AA" onDark />
            <Swatch name="Emergency (Orange 700)" varName="--orange-700" hex="#C2410C" contrast="5.18:1 AA" onDark />
            <Swatch name="Heritage (Purple)" varName="--plum-700" hex="#7B2D8E" contrast="brand accent" onDark />
            <Swatch name="Muted fg (Slate 600)" varName="--slate-600" hex="#44596B" contrast="7.27:1 AAA" onDark />
            <Swatch name="Border (Slate 200)" varName="--slate-200" hex="#D3E2ED" />
            <Swatch name="Surface (Slate 50)" varName="--slate-50" hex="#F6F9FC" />
          </div>
        </Section>

        <Section
          title="Typography"
          note="Figtree for headings, Noto Sans for body, Noto Sans Telugu for bilingual copy."
        >
          <div className="glass rounded-2xl p-8 space-y-5">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Display / Figtree</p>
              <p className="type-display">Laparoscopic &amp; Laser Surgery</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Heading 2</p>
              <p className="type-h2">Minimally Invasive Keyhole Surgery</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Body / Noto Sans</p>
              <p className="max-w-prose">
                Dr. Rajashekhar Meda is a Consultant Laparoscopic &amp; General Surgeon at Suraksha
                Hospital, Khammam, with 10+ years of surgical experience.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Telugu / Noto Sans Telugu</p>
              <p lang="te" className={`${notoSansTelugu.variable} type-h3`}>
                డా॥ మేడ రాజశేఖర్ — జనరల్, ఎండోస్కోపిక్, లాప్రోస్కోపిక్ లేజర్ సర్జన్
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
          note="Every button is touch-friendly and WCAG compliant."
        >
          <div className="glass rounded-2xl p-8 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="emergency" size="cta-lg">
                <Phone /> Call 24/7 — 7075 447 449
              </Button>
              <Button variant="accent" size="cta">
                <CalendarCheck /> Book Appointment
              </Button>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}
