"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Clean clinical hero background — replaces the interior photo background
 * with the official Dr. Rajasekhar Meda surgical logo backdrop graphic.
 */
export function HeroBackground() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <div
      ref={ref}
      className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-br from-slate-50 via-sky-50/60 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-sky-950"
      aria-hidden
    >
      {/* Soft Ambient Clinical Lighting */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 20% 20%, oklch(0.96 0.03 210 / 0.8), transparent 70%), radial-gradient(60% 60% at 80% 30%, oklch(0.93 0.04 220 / 0.6), transparent 60%)",
        }}
      />

      {/* Official Doctor Surgical Logo Hero Backdrop Graphic */}
      <motion.div
        style={reduce ? undefined : { y }}
        className="absolute right-0 lg:right-[3%] top-1/2 -translate-y-1/2 pointer-events-none opacity-20 sm:opacity-25 dark:opacity-30 size-[450px] sm:size-[620px] lg:size-[820px] select-none"
      >
        <Image
          src="/brand/dr-rajashekhar-hero-bg-logo.png"
          alt=""
          width={820}
          height={620}
          priority
          className="size-full object-contain filter drop-shadow-2xl"
        />
      </motion.div>

      {/* Soft overlay gradient to ensure clean readability of hero typography */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent lg:from-background/95 lg:via-background/70 lg:to-transparent" />
    </div>
  );
}
