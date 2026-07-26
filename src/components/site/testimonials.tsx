"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Star,
  Quote,
  MapPin,
  CalendarDays,
  Activity,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Info,
} from "lucide-react";
import { sampleTestimonials, sampleStats, type SampleTestimonial } from "@/lib/testimonials-sample";
import { cn } from "@/lib/utils";

/**
 * Sample testimonial showcase.
 *
 * Every card carries a visible "Sample" badge and the section closes with a
 * disclaimer. That labelling is deliberate and load-bearing — unlabelled
 * fictional patient reviews on a real doctor's site would be misleading to
 * patients and an advertising-compliance problem. Do not remove the badges
 * or soften the disclaimer while this content is fictional.
 */

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={cn(
            "size-4",
            i < rating ? "fill-amber-400 text-amber-400" : "text-border"
          )}
          aria-hidden
        />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: SampleTestimonial }) {
  return (
    <article className="glass rounded-2xl p-6 h-full flex flex-col gap-4 relative">
      {/* Sample badge — must stay visible while this content is fictional. */}
      <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">
        <BadgeCheck className="size-3" aria-hidden />
        Sample
      </span>

      <Quote className="size-7 text-accent/40" aria-hidden />
      <Stars rating={t.rating} />

      <blockquote className="text-sm text-muted-foreground leading-relaxed flex-1">
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      <dl className="grid grid-cols-2 gap-3 pt-4 border-t border-border text-xs">
        <div className="flex items-start gap-1.5">
          <Activity className="size-3.5 text-accent shrink-0 mt-0.5" aria-hidden />
          <div>
            <dt className="sr-only">Treatment</dt>
            <dd className="font-medium">{t.treatment}</dd>
          </div>
        </div>
        <div className="flex items-start gap-1.5">
          <CalendarDays className="size-3.5 text-accent shrink-0 mt-0.5" aria-hidden />
          <div>
            <dt className="sr-only">Recovery</dt>
            <dd className="text-muted-foreground">{t.recovery}</dd>
          </div>
        </div>
      </dl>

      <footer className="flex items-center gap-3 pt-3 border-t border-border">
        {/* Initials, not a stock photo — a fabricated face attached to a
            fabricated patient story would be a step too far. */}
        <span
          className="grid size-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground font-semibold text-sm"
          aria-hidden
        >
          {t.initials}
        </span>
        <div className="min-w-0">
          <p className="font-semibold text-sm truncate">{t.name}</p>
          <p className="text-xs text-muted-foreground flex items-center gap-1 truncate">
            <MapPin className="size-3 shrink-0" aria-hidden />
            {t.location}
          </p>
          <p className="text-[0.7rem] text-muted-foreground/80 tnum">
            Consulted {t.consultedOn}
          </p>
        </div>
      </footer>
    </article>
  );
}

export function Testimonials() {
  const reduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  function scrollTo(next: number) {
    const clamped = Math.max(0, Math.min(sampleTestimonials.length - 1, next));
    setIndex(clamped);
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[clamped] as HTMLElement | undefined;
    card?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <>
      {/* Illustrative stats — unverified, shown only with the sample set. */}
      <dl className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {sampleStats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: reduceMotion ? 0 : i * 0.06 }}
            className="glass rounded-2xl p-5 text-center"
          >
            <dt className="sr-only">{s.label}</dt>
            <dd>
              <span className="block text-2xl sm:text-3xl font-[family-name:var(--font-display)] font-semibold text-primary dark:text-accent tnum">
                {s.value}
              </span>
              <span className="block text-xs text-muted-foreground mt-1">
                {s.label}
              </span>
            </dd>
          </motion.div>
        ))}
      </dl>

      {/* Desktop: grid. Mobile: horizontal snap carousel. */}
      <div
        ref={trackRef}
        className={cn(
          "flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4",
          "sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible sm:mx-0 sm:px-0 sm:pb-0"
        )}
      >
        {sampleTestimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: reduceMotion ? 0 : (i % 3) * 0.08 }}
            whileHover={reduceMotion ? undefined : { y: -6 }}
            className="snap-center shrink-0 w-[85vw] max-w-sm sm:w-auto sm:max-w-none sm:shrink"
          >
            <TestimonialCard t={t} />
          </motion.div>
        ))}
      </div>

      {/* Carousel controls — mobile only, where the track actually scrolls. */}
      <div className="flex sm:hidden items-center justify-center gap-3 mt-4">
        <button
          type="button"
          onClick={() => scrollTo(index - 1)}
          disabled={index === 0}
          aria-label="Previous testimonial"
          className="btn-premium grid size-11 place-items-center rounded-xl glass disabled:opacity-40"
        >
          <ChevronLeft className="size-5" />
        </button>
        <span className="text-sm text-muted-foreground tnum" aria-live="polite">
          {index + 1} / {sampleTestimonials.length}
        </span>
        <button
          type="button"
          onClick={() => scrollTo(index + 1)}
          disabled={index === sampleTestimonials.length - 1}
          aria-label="Next testimonial"
          className="btn-premium grid size-11 place-items-center rounded-xl glass disabled:opacity-40"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      {/* Disclaimer — deliberately legible, not a faint footnote. */}
      <div
        role="note"
        className="mt-10 flex gap-3 rounded-xl border border-border bg-muted/60 p-5 text-sm"
      >
        <Info className="size-5 text-accent shrink-0 mt-0.5" aria-hidden />
        <p className="text-muted-foreground">
          <strong className="font-semibold text-foreground">
            Sample testimonials shown for demonstration purposes.
          </strong>{" "}
          The reviews and statistics above are illustrative placeholders, not
          real patients. This section will be updated with genuine patient
          testimonials after obtaining appropriate patient consent.
        </p>
      </div>
    </>
  );
}
