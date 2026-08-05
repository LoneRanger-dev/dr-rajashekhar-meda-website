"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Scroll-reveal wrapper — UI-UX-Pro-Max motion.csv #4 Standard
 * Scroll Reveal Standard: power2.out, y:24, duration:0.5s, stagger:0.08s
 *
 * Fades + slides content up with a soft blur-in as it enters the viewport.
 * Collapses to static when prefers-reduced-motion is set — no layout shift.
 */
export function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 24,
  blur = true,
  duration = 0.5,
  className,
}: {
  children: ReactNode;
  as?: "div" | "section" | "li" | "span";
  delay?: number;
  y?: number;
  blur?: boolean;
  duration?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{
        opacity: 0,
        y,
        filter: blur ? "blur(8px)" : "blur(0px)",
      }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      /* power2.out: cubic-bezier(0.16, 1, 0.3, 1) — UI-UX-Pro-Max spec */
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Staggered container — UI-UX-Pro-Max motion.csv #8 Standard
 * Stagger List Standard: scale(0.92) y:16 stagger:0.06s back.out(1.4)
 *
 * Children wrapped in <RevealItem> reveal in sequence as the group scrolls
 * into view. Use for card grids, feature lists, and service grids.
 */
const containerVariants: Variants = {
  hidden: {},
  /* staggerChildren: 0.08s per UI-UX-Pro-Max motion spec stagger 0.06-0.08 */
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

const itemVariants: Variants = {
  /* back.out(1.4) card pop — cubic-bezier(0.34, 1.56, 0.64, 1) */
  hidden: { opacity: 0, y: 16, scale: 0.94, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.48,
      ease: [0.34, 1.56, 0.64, 1], /* back.out(1.4) — card entrance pop */
    },
  },
};

export function RevealGroup({
  children,
  as = "div",
  className,
}: {
  children: ReactNode;
  as?: "div" | "ul";
  className?: string;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({
  children,
  as = "div",
  className,
}: {
  children: ReactNode;
  as?: "div" | "li";
  className?: string;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag className={className} variants={itemVariants}>
      {children}
    </MotionTag>
  );
}

