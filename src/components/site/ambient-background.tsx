/**
 * Static ambient background — clean soft medical blue/teal lighting wash without animations.
 */
export function AmbientBackground() {
  return (
    <div className="ambient-bg" aria-hidden>
      <span
        className="size-[42rem] -left-40 -top-40 opacity-[0.25]"
        style={{
          background:
            "radial-gradient(circle, var(--teal-300), transparent 60%)",
        }}
      />
      <span
        className="size-[38rem] right-[-12rem] top-[6rem] opacity-[0.18]"
        style={{
          background:
            "radial-gradient(circle, var(--navy-600), transparent 62%)",
        }}
      />
      <span
        className="size-[34rem] left-[20%] bottom-[-14rem] opacity-[0.15]"
        style={{
          background:
            "radial-gradient(circle, var(--teal-400), transparent 60%)",
        }}
      />
    </div>
  );
}
