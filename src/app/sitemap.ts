import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/blog";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/about", "/services", "/projects", "/industries", "/blog", "/contact", "/privacy", "/terms"];
  const pages: MetadataRoute.Sitemap = paths.map((p) => ({
    url: `${SITE.url}${p}`,
    lastModified: new Date(),
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority: p === "" ? 1 : p === "/contact" || p === "/services" ? 0.9 : 0.7,
  }));
  const posts: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  return [...pages, ...posts];
}
