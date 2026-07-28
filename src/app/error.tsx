"use client";

import { useEffect } from "react";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main id="main" className="brand-wash flex-1 grid place-items-center px-4 py-24">
      <div className="glass max-w-lg rounded-2xl p-8 text-center space-y-5">
        <h1 className="type-h2">We couldn&apos;t load this page</h1>
        <p className="text-muted-foreground">
          Please try again. If you need urgent help, call the clinic directly.
        </p>
        <button
          type="button"
          onClick={unstable_retry}
          className="btn-premium h-11 rounded-xl bg-accent px-5 font-medium text-accent-foreground"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
