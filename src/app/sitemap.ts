import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { getSortedPosts, getAllTags } from "@/lib/blog";
import { getSortedWritingPosts } from "@/lib/writing";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const blogPosts = getSortedPosts();
  const writingPosts = getSortedWritingPosts();

  const blogUrls = blogPosts.map(post => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.rawDate),
    changeFrequency: "yearly" as const,
    priority: 0.35,
  }));

  const writingUrls = writingPosts.map(post => ({
    url: absoluteUrl(`/writing/${post.slug}`),
    lastModified: new Date(post.rawDate),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const tags = getAllTags();
  const tagUrls = tags.map(tag => ({
    url: absoluteUrl(`/blog/tag/${tag}`),
    lastModified,
    changeFrequency: "yearly" as const,
    priority: 0.2,
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
      url: absoluteUrl("/services"),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: absoluteUrl("/work"),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: absoluteUrl("/writing"),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: absoluteUrl("/contact"),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: absoluteUrl("/conversation"),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.25,
    },
    {
      url: absoluteUrl("/privacy"),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: absoluteUrl("/llms.txt"),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.2,
    },
    {
      url: absoluteUrl("/llms-full.txt"),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.2,
    },
    {
      url: absoluteUrl("/blog"),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    ...writingUrls,
    ...blogUrls,
    ...tagUrls,
  ];
}
