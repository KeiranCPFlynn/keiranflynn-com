import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { getSortedPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const blogPosts = getSortedPosts();

  const blogUrls = blogPosts.map(post => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.rawDate),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: absoluteUrl("/about"),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: absoluteUrl("/contact"),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: absoluteUrl("/privacy"),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: absoluteUrl("/blog"),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...blogUrls,
  ];
}
