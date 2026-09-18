import type { MetadataRoute } from "next";

import { weddingStories } from "@/content/stories";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

/** One entry per page, plus one per wedding story. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: readonly { readonly path: string; readonly priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/portfolio", priority: 0.9 },
    { path: "/about", priority: 0.8 },
    { path: "/wedding-stories", priority: 0.8 },
    { path: "/behind-the-scenes", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
  ];

  const storyRoutes = weddingStories.map((story) => ({
    path: `/wedding-stories/${story.slug}`,
    priority: 0.6,
  }));

  return [...routes, ...storyRoutes].map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency:
      route.path === "/behind-the-scenes" || route.path.startsWith("/wedding-stories")
        ? "weekly"
        : "monthly",
    priority: route.priority,
  }));
}

