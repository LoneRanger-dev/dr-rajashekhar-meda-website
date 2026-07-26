"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { facilityImages, BLUR_DATA_URL } from "@/lib/siteAssets";

/**
 * Cinematic hospital showcase — the homepage "come and see us" moment.
 *
 * A still photograph made to feel alive: the exterior slow-zooms, drifts on
 * scroll parallax and leans toward the pointer, under layered blue ambient
 * lighting with floating motes and a frosted glass information panel.
 *
 * Every motion layer is transform/opacity only (GPU) and collapses to a clean
 * static hero under `prefers-reduced-motion` — no parallax, no particles.
 */

// Deterministic particle field (no Math.random → no hydration mismatch).
const PARTICLES = [
  { left: "8%", size: 6, delay: 0, duration: 9 },
  { left: "20%", size: 4, delay: 2.5, duration: 11 },
  { left: "33%", size: 8, delay: 1.2, duration: 10 },
  { left: "47%", size: 5, delay: 3.4, duration: 12 },
  { left: "61%", size: 7, delay: 0.8, duration: 9.5 },
  { left: "72%", size: 4, delay: 2.1, duration: 13 },
  { left: "84%", size: 6, delay: 1.7, duration: 10.5 },
  { left: "92%", size: 5, delay: 3.9, duration: 11.5 },
];

export function HospitalShowcase() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Scroll parallax — the background drifts slower than the page.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // Mouse parallax — the image leans a few pixels toward the pointer.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduce || e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 24);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 24);
  }

  return (
    <section
      ref={ref}
      onPointerMove={onPointerMove}
      aria-label={`${site.hospital.name} building`}
      className="relative overflow-hidden isolate"
    >
      {/* ── Background image: scroll parallax + mouse parallax + slow zoom ── */}
      <motion.div
        style={reduce ? undefined : { y: parallaxY }}
        className="absolute inset-0 -z-20"
      >
        <motion.div style={reduce ? undefined : { x: sx, y: sy }} className="absolute inset-0">
          <Image
            src={facilityImages.exterior.src}
            alt={`${site.hospital.name}, ${site.hospital.addressFull}`}
            fill
            sizes="100vw"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            className={`object-cover object-center scale-125 ${reduce ? "" : "animate-slow-zoom"}`}
          />
        </motion.div>
      </motion.div>

      {/* ── Depth + legibility scrim, warmed toward clinical navy ── */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[oklch(0.21_0.05_250/0.9)] via-[oklch(0.26_0.06_251/0.55)] to-[oklch(0.26_0.06_251/0.75)]"
        aria-hidden
      />
      {/* ── Dynamic blue ambient lighting ── */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 18% 15%, oklch(0.66 0.17 245 / 0.35), transparent 60%), radial-gradient(50% 50% at 88% 90%, oklch(0.72 0.13 200 / 0.28), transparent 60%)",
        }}
        aria-hidden
      />

      {/* ── Floating particles ── */}
      {!reduce && (
        <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
          {PARTICLES.map((p, i) => (
            <span
              key={i}
              className="absolute bottom-8 rounded-full bg-white/70"
              style={{
                left: p.left,
                width: p.size,
                height: p.size,
                boxShadow: "0 0 8px 2px oklch(0.72 0.16 240 / 0.6)",
                animation: `particle-rise ${p.duration}s ${p.delay}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>
      )}

      {/* ── Foreground glass panel ── */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-32 lg:py-40">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass-strong max-w-xl rounded-3xl p-7 sm:p-9 text-white shadow-[var(--elev-3)]"
        >
          <p className="type-label text-[clamp(0.7rem,2.5vw,0.8125rem)] text-teal-200">
            Visit us in Khammam
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold tracking-tight text-[clamp(1.75rem,1.2rem+3vw,2.75rem)] leading-[1.1]">
            {site.hospital.name}
          </h2>
          <p className="mt-3 text-[clamp(0.95rem,0.9rem+0.3vw,1.1rem)] text-white/85">
            {site.hospital.descriptor} — a modern facility on Nehru Nagar with an
            advanced ICU and a neurosurgeon available 24/7.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              variant="emergency"
              size="cta"
              render={<a href={site.contact.phoneHref} />}
            >
              <Phone aria-hidden />
              <span className="tnum">Call {site.contact.phoneDisplay}</span>
            </Button>
            <Button
              size="cta"
              className="bg-white/15 text-white hover:bg-white/25 border border-white/25 backdrop-blur-md"
              render={
                <a
                  href={site.hospital.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <MapPin aria-hidden />
              Get directions
            </Button>
            <Button
              variant="ghost"
              size="cta"
              className="text-white hover:bg-white/15"
              render={<Link href="/facilities" />}
            >
              Explore facilities
              <ArrowRight aria-hidden />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
