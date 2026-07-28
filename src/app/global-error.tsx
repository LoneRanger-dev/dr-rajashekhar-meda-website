"use client";

import { useEffect } from "react";

export default function GlobalError({
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
    <html lang="en">
      <body>
        <main>
          <h1>We couldn&apos;t load the website</h1>
          <p>Please try again in a moment.</p>
          <button type="button" onClick={unstable_retry}>
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
