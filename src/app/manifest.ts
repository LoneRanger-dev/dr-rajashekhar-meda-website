import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dr. GRK Reddy — Brain & Spine Surgeon",
    short_name: "Dr. GRK Reddy",
    description:
      "Brain and spine care at Suraksha Hospital, Khammam.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f9fc",
    theme_color: "#103a5e",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/icon.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
