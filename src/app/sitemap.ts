import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/about", "/services", "/projects", "/industries", "/contact", "/privacy", "/terms"];
  return paths.map((p) => ({
    url: `${SITE.url}${p}`,
    lastModified: new Date(),
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority: p === "" ? 1 : p === "/contact" || p === "/services" ? 0.9 : 0.7,
  }));
}
