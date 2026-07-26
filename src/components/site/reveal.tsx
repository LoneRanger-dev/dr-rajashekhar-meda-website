"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Scroll-reveal wrapper — fades content up with a soft blur-in as it enters
 * the viewport, in the same easing voice as the rest of the site.
 *
 * Runs once per element (no re-trigger on scroll-back), animates only
 * transform/opacity/filter (GPU-friendly), and collapses to a plain static
 * container when the visitor prefers reduced motion — so nothing moves and
 * there is no layout shift.
 */
export function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 24,
  blur = true,
  className,
}: {
  children: ReactNode;
  as?: "div" | "section" | "li" | "span";
  delay?: number;
  y?: number;
  blur?: boolean;
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
        filter: blur ? "blur(10px)" : "blur(0px)",
      }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Staggered container — children wrapped in <RevealItem> reveal in sequence
 * as the group scrolls into view. Use for card grids and lists.
 */
const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
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
