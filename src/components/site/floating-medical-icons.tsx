import {
  Brain,
  Activity,
  Microscope,
  Scan,
  Stethoscope,
  HeartPulse,
  ShieldPlus,
  Syringe,
} from "lucide-react";

/**
 * Ambient floating medical icons — a faint, slow decorative layer behind
 * facility content. Deliberately ~8–10% opacity so it reads as texture, never
 * distraction. Deterministic positions (no hydration mismatch); pointer-events
 * none; frozen by the global reduced-motion rule. Server component.
 */
const ICONS = [
  { Icon: Brain, left: "6%", top: "12%", size: 56, delay: 0, dur: 7 },
  { Icon: Activity, left: "24%", top: "68%", size: 44, delay: 1.5, dur: 8.5 },
  { Icon: Microscope, left: "44%", top: "22%", size: 48, delay: 0.8, dur: 7.5 },
  { Icon: Scan, left: "66%", top: "72%", size: 46, delay: 2.2, dur: 9 },
  { Icon: Stethoscope, left: "82%", top: "18%", size: 52, delay: 1.1, dur: 8 },
  { Icon: HeartPulse, left: "90%", top: "58%", size: 40, delay: 2.6, dur: 7.8 },
  { Icon: ShieldPlus, left: "14%", top: "42%", size: 42, delay: 0.4, dur: 8.8 },
  { Icon: Syringe, left: "56%", top: "48%", size: 38, delay: 1.9, dur: 9.4 },
];

export function FloatingMedicalIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {ICONS.map(({ Icon, left, top, size, delay, dur }, i) => (
        <span
          key={i}
          className="absolute text-accent/10 dark:text-accent/[0.08]"
          style={{
            left,
            top,
            animation: `img-float ${dur}s ${delay}s ease-in-out infinite`,
          }}
        >
          <Icon style={{ width: size, height: size }} strokeWidth={1.25} />
        </span>
      ))}
    </div>
  );
}
