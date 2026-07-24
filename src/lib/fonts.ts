import { Figtree, Noto_Sans } from "next/font/google";

/**
 * Site-wide faces, loaded in the root layout.
 * Weights are kept deliberately tight — every extra weight is another
 * font file competing for bandwidth on a throttled mobile connection.
 */
export const figtree = Figtree({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const notoSans = Noto_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});
