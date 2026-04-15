import { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/site";
import { getSortedPosts } from "@/lib/blog";

const title = "Insights & Articles | Keiran Flynn";
const description =
    "Practical thinking on high-level business English, strategic communication, executive presence, and professional fluency for founders and senior leaders.";

export const metadata: Metadata = {
    title,
    description,
    alternates: {
        canonical: absoluteUrl("/blog"),
    },
    openGraph: {
        title,
        description,
        url: absoluteUrl("/blog"),
        siteName: "Keiran Flynn",
        type: "website",
    },
    twitter: {
        title,
        description,
    },
};

export default function BlogPage() {
    const posts = getSortedPosts();

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://keiranflynn.com";

    const blogJsonLd = {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Keiran Flynn — Insights & Articles",
        description,
        url: absoluteUrl("/blog"),
        author: {
            "@type": "Person",
            "@id": `${siteUrl}/#person`,
            name: "Keiran Flynn",
            jobTitle: "Strategic Communication Consultant",
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
                {/* Header */}
                <div className="mb-16">
                    <div className="accent-line mb-8" />
                    <h1 className="text-display text-white mb-6">
                        Insights & Articles
                    </h1>
                    <p className="text-subheading text-white/55 max-w-2xl">
                        Practical thinking on business English, strategic
                        communication, and professional fluency for founders and
                        senior leaders.
                    </p>
                </div>

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
                                                className="text-[10px] uppercase tracking-[0.18em] text-accent-gold/70 px-2 py-0.5 border border-accent-gold/20 rounded"
                                            >
                                                {tag.replace(/-/g, " ")}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <h2 className="text-[17px] font-semibold leading-snug mb-3">
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="text-white hover:text-accent-gold transition-colors duration-300"
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
                                        className="text-[12px] text-accent-gold hover:text-accent-gold/80 font-medium transition-colors"
                                    >
                                        Read →
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
                        className="text-[13px] text-white/40 hover:text-accent-gold transition-colors"
                    >
                        ← Back to home
                    </Link>
                </div>
            </div>
        </>
    );
}
