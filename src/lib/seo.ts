import type { Metadata } from "next";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  robots?: Metadata["robots"];
  type?: "article" | "website";
};

/** Builds complete per-page metadata so canonical and social URLs never inherit the home URL. */
export function pageMetadata({
  title,
  description,
  path,
  robots,
  type = "website",
}: PageMetadata): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      title,
      description,
      url: path,
      images: ["/opengraph-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image.png"],
    },
    robots,
  };
}
