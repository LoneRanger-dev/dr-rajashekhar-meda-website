"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

/**
 * Capability gate for the 3D hero visual.
 *
 * The scene only ever loads when ALL of these hold:
 *   1. The user has not asked for reduced motion.
 *   2. The device looks capable enough (cores / memory / not a tiny screen).
 *   3. The hero is actually on screen.
 *   4. The browser has gone idle — so the 3D bundle never competes with
 *      LCP for bandwidth or main-thread time.
 *
 * When any check fails the component renders nothing and the CSS
 * `brand-wash` gradient behind it remains the visual — a genuine static
 * fallback with zero JavaScript cost.
 */

const SurgicalScene = dynamic(() => import("./surgical-scene"), {
  ssr: false,
  loading: () => null,
});

function deviceLooksCapable(): boolean {
  if (typeof window === "undefined") return false;

  // Small screens are almost always the budget phones we want to protect.
  if (window.matchMedia("(max-width: 640px)").matches) return false;

  const nav = navigator as Navigator & {
    deviceMemory?: number;
    connection?: { saveData?: boolean; effectiveType?: string };
  };

  if (nav.connection?.saveData) return false;
  if (nav.connection?.effectiveType && /2g/.test(nav.connection.effectiveType)) {
    return false;
  }
  if (typeof nav.deviceMemory === "number" && nav.deviceMemory < 4) return false;
  if (typeof nav.hardwareConcurrency === "number" && nav.hardwareConcurrency < 4) {
    return false;
  }

  return true;
}

export function HeroVisual({ className }: { className?: string }) {
  const [enabled, setEnabled] = useState(false);
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    function evaluate() {
      if (motionQuery.matches || !deviceLooksCapable()) {
        setEnabled(false);
        return;
      }

      const host = hostRef.current;
      if (!host) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            // Defer past first paint so the 3D never delays LCP.
            const idle =
              window.requestIdleCallback ??
              ((cb: IdleRequestCallback) =>
                window.setTimeout(() => cb({} as IdleDeadline), 400));
            idle(() => setEnabled(true));
            observer.disconnect();
          }
        },
        { rootMargin: "120px" }
      );

      observer.observe(host);
      return () => observer.disconnect();
    }

    const cleanup = evaluate();
    // Respond live if the user toggles reduced motion.
    motionQuery.addEventListener("change", evaluate);

    return () => {
      cleanup?.();
      motionQuery.removeEventListener("change", evaluate);
    };
  }, []);

  return (
    <div ref={hostRef} className={className} aria-hidden="true">
      {enabled && <SurgicalScene />}
    </div>
  );
}
