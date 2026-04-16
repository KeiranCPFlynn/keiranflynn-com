import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
    slug: string;
    title: string;
    date: string;        // formatted for display: "April 5, 2026"
    rawDate: string;     // ISO date string for sorting/meta: "2026-04-05"
    description: string; // from frontmatter, falls back to excerpt
    excerpt: string;     // extracted from first paragraph
    content: string;
    readingTime: string;
    tags?: string[];
    author?: string;
}

function calculateReadingTime(content: string): string {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
}

function extractExcerpt(content: string): string {
    const lines = content.trim().split("\n");
    for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith("#")) {
            const clean = trimmed.replace(/[*_`\[\]]/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
            return clean.length > 200 ? clean.substring(0, 200) + "..." : clean;
        }
    }
    return "";
}

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

export function getSortedPosts(): BlogPost[] {
    if (!fs.existsSync(BLOG_DIR)) {
        return [];
    }

    return fs
        .readdirSync(BLOG_DIR)
        .filter((fileName) => fileName.endsWith(".mdx"))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, "");
            const fullPath = path.join(BLOG_DIR, fileName);
            const fileContent = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContent);

            const rawDate = data.date || "";
            const excerpt = extractExcerpt(content);

            return {
                slug,
                title: data.title || slug,
                rawDate,
                date: rawDate
                    ? new Date(rawDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                      })
                    : "",
                description: data.description || excerpt,
                excerpt,
                content,
                readingTime: calculateReadingTime(content),
                tags: data.tags,
                author: data.author,
            };
        })
        .sort((a, b) => new Date(b.rawDate).getTime() - new Date(a.rawDate).getTime());
}

export function getPost(slug: string): BlogPost | null {
    const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContent = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContent);

    const rawDate = data.date || "";
    const excerpt = extractExcerpt(content);

    return {
        slug,
        title: data.title || slug,
        rawDate,
        date: rawDate
            ? new Date(rawDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
              })
            : "",
        description: data.description || excerpt,
        excerpt,
        content,
        readingTime: calculateReadingTime(content),
        tags: data.tags,
        author: data.author,
    };
}

// Keep legacy alias
export const getPostBySlug = getPost;

export function getAllPostSlugs(): string[] {
    if (!fs.existsSync(BLOG_DIR)) {
        return [];
    }
    return fs
        .readdirSync(BLOG_DIR)
        .filter((fileName) => fileName.endsWith(".mdx"))
        .map((fileName) => fileName.replace(/\.mdx$/, ""));
}

export function getPostsByTag(tag: string): BlogPost[] {
    const allPosts = getSortedPosts();
    return allPosts.filter(post => post.tags && post.tags.includes(tag));
}

export function getAllTags(): string[] {
    const allPosts = getSortedPosts();
    const tagSet = new Set<string>();
    allPosts.forEach(post => {
        if (post.tags) {
            post.tags.forEach(tag => tagSet.add(tag));
        }
    });
    return Array.from(tagSet).sort();
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
    const currentPost = getPost(currentSlug);
    if (!currentPost || !currentPost.tags || currentPost.tags.length === 0) {
        // If no tags, return most recent posts excluding current
        return getSortedPosts()
            .filter(post => post.slug !== currentSlug)
            .slice(0, limit);
    }

    const allPosts = getSortedPosts();
    const scoredPosts = allPosts
        .filter(post => post.slug !== currentSlug)
        .map(post => {
            let score = 0;
            if (post.tags) {
                // Count tag matches
                const matchingTags = post.tags.filter(tag =>
                    currentPost.tags!.includes(tag)
                );
                score = matchingTags.length;
            }
            return { post, score };
        })
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score ||
            new Date(b.post.rawDate).getTime() - new Date(a.post.rawDate).getTime())
        .map(item => item.post)
        .slice(0, limit);

    // If not enough tag-matched posts, fill with most recent
    if (scoredPosts.length < limit) {
        const recentPosts = getSortedPosts()
            .filter(post => post.slug !== currentSlug &&
                !scoredPosts.some(p => p.slug === post.slug))
            .slice(0, limit - scoredPosts.length);
        return [...scoredPosts, ...recentPosts];
    }

    return scoredPosts;
}
