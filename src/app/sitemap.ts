import type { MetadataRoute } from "next";
import { pageUrl } from "@/content/site";
import { services } from "@/content/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: pageUrl("/"), changeFrequency: "monthly", priority: 1 },
    {
      url: pageUrl("/servicos"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...services.map((service) => ({
      url: pageUrl(`/servicos/${service.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
