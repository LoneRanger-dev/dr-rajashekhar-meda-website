"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { facilityImages, BLUR_DATA_URL } from "@/lib/siteAssets";

/**
 * Living hero background — the hospital interior, slow-zoomed and drifting on
 * scroll, sitting behind a light scrim so the dark hero copy stays readable.
 * Features a large stylized ambient R-emblem watermark on the right.
 */
export function HeroBackground() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  return (
    <div ref={ref} className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <motion.div style={reduce ? undefined : { y }} className="absolute inset-0">
        <div className={`absolute inset-0 scale-110 ${reduce ? "" : "animate-slow-zoom"}`}>
          <Image
            src={facilityImages.interior.src}
            alt=""
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            className="object-cover object-center"
          />
        </div>
      </motion.div>

      {/* Legibility scrim — near-solid on mobile, left-heavy on desktop. */}
      <div className="absolute inset-0 bg-white/82 dark:bg-[oklch(0.21_0.05_250/0.8)] lg:hidden" />
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(90deg, #ffffff 0%, #ffffff 42%, rgba(255,255,255,0.74) 64%, rgba(255,255,255,0.42) 100%)",
        }}
      />
      {/* Soft clinical wash so the photo reads as brand, not literal. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 12% 8%, oklch(0.945 0.04 208 / 0.55), transparent 55%), radial-gradient(60% 60% at 92% 6%, oklch(0.92 0.019 243 / 0.5), transparent 60%)",
        }}
      />

      {/* Large stylized ambient R-emblem watermark graphic */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 opacity-[0.08] dark:opacity-15 pointer-events-none size-[380px] sm:size-[500px] lg:size-[680px] select-none">
        <Image
          src="/brand/icon.png"
          alt=""
          width={680}
          height={680}
          className="size-full object-contain"
        />
      </div>
    </div>
  );
}
