import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Helena Melo",
    short_name: "Helena Melo",
    description: "Terapeuta holística",
    start_url: "/",
    display: "standalone",
    background_color: "#F3EFE6",
    theme_color: "#0E3A44",
    lang: "pt-PT",
  };
}
