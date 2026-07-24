import { Noto_Sans_Telugu } from "next/font/google";

/**
 * Telugu face — ~120 KB, the single largest asset on the site because the
 * Telugu glyph set is big.
 *
 * It lives in its OWN module on purpose. When it was declared alongside the
 * global faces in `fonts.ts`, Next emitted and preloaded it on every route
 * that touched that module — including the homepage, where no Telugu is
 * rendered. Isolating it here means only the pages that genuinely import it
 * (about, facilities, the internal style guide) pay the download.
 *
 * Where the variable is absent, the `:lang(te)` rule in globals.css falls
 * back to the body face, so Telugu text still renders — just not in the
 * script-matched face.
 */
export const notoSansTelugu = Noto_Sans_Telugu({
  variable: "--font-telugu-sans",
  subsets: ["telugu"],
  weight: ["400", "600"],
  display: "swap",
});
