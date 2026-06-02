import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface WritingPost {
    slug: string;
    title: string;
    date: string;
    rawDate: string;
    description: string;
    excerpt: string;
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

const WRITING_DIR = path.join(process.cwd(), "src", "content", "writing");

export function getSortedWritingPosts(): WritingPost[] {
    if (!fs.existsSync(WRITING_DIR)) {
        return [];
    }

    return fs
        .readdirSync(WRITING_DIR)
        .filter((fileName) => fileName.endsWith(".mdx"))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, "");
            const fullPath = path.join(WRITING_DIR, fileName);
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

export function getWritingPost(slug: string): WritingPost | null {
    const fullPath = path.join(WRITING_DIR, `${slug}.mdx`);

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

export function getAllWritingSlugs(): string[] {
    if (!fs.existsSync(WRITING_DIR)) {
        return [];
    }
    return fs
        .readdirSync(WRITING_DIR)
        .filter((fileName) => fileName.endsWith(".mdx"))
        .map((fileName) => fileName.replace(/\.mdx$/, ""));
}

export function getWritingPostsByTag(tag: string): WritingPost[] {
    const allPosts = getSortedWritingPosts();
    return allPosts.filter(post => post.tags && post.tags.includes(tag));
}

export function getAllWritingTags(): string[] {
    const allPosts = getSortedWritingPosts();
    const tagSet = new Set<string>();
    allPosts.forEach(post => {
        if (post.tags) {
            post.tags.forEach(tag => tagSet.add(tag));
        }
    });
    return Array.from(tagSet).sort();
}
