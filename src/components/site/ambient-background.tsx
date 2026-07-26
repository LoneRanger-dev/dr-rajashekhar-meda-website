/**
 * Ambient background — the slow, softly-drifting colour fields that sit behind
 * the entire site and give the "liquid glass floating above the page" feeling.
 *
 * Deliberately restrained for a healthcare context: large, heavily blurred,
 * low-opacity teal / medical-blue / navy blobs over the white page. It reads as
 * a clean clinical wash, not a lava lamp. Pure CSS transforms (GPU) and frozen
 * by the global reduced-motion rule, so it costs nothing on the main thread.
 *
 * Server component (no interactivity) — rendered once in the site layout.
 */
export function AmbientBackground() {
  return (
    <div className="ambient-bg" aria-hidden>
      <span
        className="size-[42rem] -left-40 -top-40 opacity-[0.30]"
        style={{
          background:
            "radial-gradient(circle, var(--teal-300), transparent 60%)",
          animation: "drift-a 22s ease-in-out infinite",
        }}
      />
      <span
        className="size-[38rem] right-[-12rem] top-[6rem] opacity-[0.22]"
        style={{
          background:
            "radial-gradient(circle, var(--navy-600), transparent 62%)",
          animation: "drift-b 28s ease-in-out infinite",
        }}
      />
      <span
        className="size-[34rem] left-[20%] bottom-[-14rem] opacity-[0.18]"
        style={{
          background:
            "radial-gradient(circle, var(--teal-400), transparent 60%)",
          animation: "drift-c 25s ease-in-out infinite",
        }}
      />
    </div>
  );
}
