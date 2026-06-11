import type { MetadataRoute } from "next";

// Required for output: "export"
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Foresight",
    short_name: "Foresight",
    description:
      "Consultoría estratégica en inteligencia artificial para organizaciones públicas y privadas en América Latina",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1a2e44",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
