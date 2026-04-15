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
