"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { facilityImages, BLUR_DATA_URL } from "@/lib/siteAssets";
import { notoSansTelugu } from "@/lib/fonts-telugu";

/**
 * Cinematic facilities hero — the exterior on a slow parallax + zoom under
 * layered blue ambient light, faint neural-network lines and floating motes,
 * with a readable light-glass panel carrying the page <h1>.
 *
 * All motion is transform/opacity (GPU) and collapses to a clean static hero
 * under prefers-reduced-motion. Contrast is guaranteed by the light panel +
 * dark text over a navy scrim.
 */
const PARTICLES = [
  { left: "10%", size: 5, delay: 0, duration: 10 },
  { left: "26%", size: 4, delay: 2.4, duration: 12 },
  { left: "42%", size: 7, delay: 1.1, duration: 11 },
  { left: "60%", size: 5, delay: 3.2, duration: 13 },
  { left: "74%", size: 4, delay: 0.7, duration: 10.5 },
  { left: "88%", size: 6, delay: 2, duration: 12.5 },
];

export function FacilityHero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduce || e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 20);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 20);
  }

  return (
    <section
      ref={ref}
      onPointerMove={onPointerMove}
      className="relative overflow-hidden isolate"
    >
      {/* Background: scroll + mouse parallax + slow zoom */}
      <motion.div
        style={reduce ? undefined : { y: parallaxY }}
        className="absolute inset-0 -z-20"
      >
        <motion.div style={reduce ? undefined : { x: sx, y: sy }} className="absolute inset-0">
          <Image
            src={facilityImages.wards.src}
            alt={`Inside ${site.hospital.name} — ICU, operating theatre, wards and reception, Khammam`}
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            className={`object-cover object-center scale-125 ${reduce ? "" : "animate-slow-zoom"}`}
          />
        </motion.div>
      </motion.div>

      {/* Navy depth scrim */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[oklch(0.21_0.05_250/0.92)] via-[oklch(0.26_0.06_251/0.6)] to-[oklch(0.26_0.06_251/0.78)]"
        aria-hidden
      />
      {/* Dynamic blue ambient lighting */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(55% 55% at 20% 12%, oklch(0.66 0.17 245 / 0.4), transparent 60%), radial-gradient(50% 50% at 85% 88%, oklch(0.72 0.13 200 / 0.3), transparent 60%)",
        }}
        aria-hidden
      />
      {/* Faint animated neural-network lines */}
      {!reduce && (
        <svg
          className="absolute inset-0 -z-10 h-full w-full opacity-[0.18]"
          preserveAspectRatio="none"
          viewBox="0 0 1200 600"
          aria-hidden
        >
          <g stroke="oklch(0.8 0.13 210)" strokeWidth="1" fill="none">
            <path d="M120 80 L360 200 L300 420 L560 480" strokeDasharray="4 10">
              <animate attributeName="stroke-dashoffset" from="0" to="-140" dur="9s" repeatCount="indefinite" />
            </path>
            <path d="M900 120 L720 260 L980 340 L820 520" strokeDasharray="4 10">
              <animate attributeName="stroke-dashoffset" from="0" to="140" dur="11s" repeatCount="indefinite" />
            </path>
          </g>
          <g fill="oklch(0.85 0.12 205)">
            {[[120, 80], [360, 200], [300, 420], [900, 120], [720, 260], [980, 340]].map(
              ([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="3" />
              )
            )}
          </g>
        </svg>
      )}
      {/* Floating particles */}
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

      {/* Foreground glass panel */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28 lg:py-36">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl rounded-3xl border border-white/60 bg-white/85 p-7 sm:p-9 text-slate-900 shadow-[var(--elev-3)] backdrop-blur-xl"
        >
          <p className="type-label text-[clamp(0.75rem,2.5vw,0.875rem)] text-accent">
            Hospital facilities
          </p>
          <h1 className="mt-3 type-h1 text-slate-900">{site.hospital.name}</h1>
          <p
            lang="te"
            className={`${notoSansTelugu.variable} mt-2 text-[clamp(1.05rem,1rem+0.5vw,1.35rem)] text-slate-600`}
          >
            {site.hospital.nameTelugu}
          </p>
          <p className="mt-3 text-[clamp(0.95rem,0.9rem+0.3vw,1.1rem)] text-slate-700">
            {site.hospital.descriptor} — {site.hospital.city}, {site.hospital.state}.
            A modern surgical facility with an advanced ICU and a
            general & laparoscopic surgeon available 24/7.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              variant="emergency"
              size="cta"
              render={<a href={site.contact.phoneHref} />}
            >
              <Phone aria-hidden />
              <span className="tnum">{site.contact.phoneDisplay}</span>
            </Button>
            <Button
              variant="accent"
              size="cta"
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
