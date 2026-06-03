import { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, siteUrl } from "@/lib/site";
import { createPageMetadata } from "@/lib/metadata";
import { getSortedPosts } from "@/lib/blog";
import { BlogPageHeader } from "@/components/blog/BlogPageHeader";

const title = "Conversation Archive";
const description =
    "Conversation archive from Keiran Flynn, with older writing on English, executive communication and professional fluency.";

export const metadata: Metadata = {
    ...createPageMetadata({
        title,
        description,
        path: "/blog",
        index: false,
    }),
    title,
    description,
};

export default function BlogPage() {
    const posts = getSortedPosts();

    const blogJsonLd = {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Keiran Flynn Conversation Archive",
        description,
        url: absoluteUrl("/blog"),
        author: {
            "@type": "Person",
            "@id": `${siteUrl}/#person`,
            name: "Keiran Flynn",
            jobTitle: "AI Product Builder",
            url: `${siteUrl}/about`,
        },
        blogPost: posts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            url: absoluteUrl(`/blog/${post.slug}`),
            datePublished: post.rawDate,
            author: {
                "@type": "Person",
                name: post.author || "Keiran Flynn",
            },
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
            />

            <div className="max-w-4xl mx-auto px-6 sm:px-8 pt-36 sm:pt-44 pb-24 sm:pb-32">
                <BlogPageHeader />

                {/* Post grid */}
                {posts.length === 0 ? (
                    <p className="text-white/40">No posts yet.</p>
                ) : (
                    <div className="grid md:grid-cols-2 gap-5">
                        {posts.map((post) => (
                            <article
                                key={post.slug}
                                className="glass-card p-7 flex flex-col"
                            >
                                {post.tags && post.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {post.tags.slice(0, 2).map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded border border-accent/20 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-accent/70"
                                            >
                                                {tag.replace(/-/g, " ")}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <h2 className="text-[17px] font-semibold leading-snug mb-3">
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="text-white hover:text-accent transition-colors duration-300"
                                    >
                                        {post.title}
                                    </Link>
                                </h2>

                                <p className="text-[14px] text-white/55 leading-relaxed mb-5 flex-1">
                                    {post.description}
                                </p>

                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.06]">
                                    <div className="flex items-center gap-3 text-[12px] text-white/35">
                                        <time dateTime={post.rawDate}>{post.date}</time>
                                        <span>·</span>
                                        <span>{post.readingTime}</span>
                                    </div>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="text-[12px] text-accent hover:text-accent/80 font-medium transition-colors"
                                    >
                                        Read
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                )}

                {/* Back to home */}
                <div className="mt-16 pt-8 border-t border-white/[0.06]">
                    <Link
                        href="/"
                        className="text-[13px] text-white/40 hover:text-accent transition-colors"
                    >
                        Back to home
                    </Link>
                </div>
            </div>
        </>
    );
}
