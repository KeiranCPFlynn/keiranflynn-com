import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, siteUrl } from "@/lib/site";
import { getSortedWritingPosts } from "@/lib/writing";

const title = "Writing";
const description =
    "Notes from Keiran Flynn on building AI products, coding agents, product judgment and practical AI workflows.";

export const metadata: Metadata = {
    title,
    description,
    alternates: {
        canonical: absoluteUrl("/writing"),
    },
    openGraph: {
        title,
        description,
        url: absoluteUrl("/writing"),
        siteName: "Keiran Flynn",
        type: "website",
    },
    twitter: {
        title,
        description,
    },
};

const themes = [
    "Building useful AI products with coding agents",
    "Turning vague ideas into scoped product work",
    "Product judgment inside fast agentic build loops",
    "What discovery says before the demo gets too persuasive",
];

export default function WritingPage() {
    const posts = getSortedWritingPosts();

    const blogJsonLd = {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Keiran Flynn Writing",
        description,
        url: absoluteUrl("/writing"),
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
            url: absoluteUrl(`/writing/${post.slug}`),
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

            <div className="mx-auto max-w-4xl px-6 pt-36 pb-24 sm:px-8 sm:pt-44 sm:pb-32">
                <div className="accent-line mb-8" />
                <h1 className="text-display mb-8 text-white">Writing</h1>
                <p className="text-subheading mb-14 text-white/65">
                    Notes on building AI products with coding agents.
                </p>

                {posts.length === 0 ? (
                    <div className="glass-card p-7 sm:p-9">
                        <h2 className="mb-5 text-2xl font-semibold text-white">
                            Current Themes
                        </h2>
                        <ul className="space-y-4">
                            {themes.map((theme) => (
                                <li key={theme} className="flex gap-3 text-white/65">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    <span>{theme}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <>
                        <div className="glass-card p-7 sm:p-9 mb-12">
                            <h2 className="mb-5 text-2xl font-semibold text-white">
                                Current Themes
                            </h2>
                            <ul className="space-y-4">
                                {themes.map((theme) => (
                                    <li key={theme} className="flex gap-3 text-white/65">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                        <span>{theme}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

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
                                                    className="text-[10px] uppercase tracking-[0.18em] text-accent/70 px-2 py-0.5 border border-accent/20 rounded"
                                                >
                                                    {tag.replace(/-/g, " ")}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <h2 className="text-[17px] font-semibold leading-snug mb-3">
                                        <Link
                                            href={`/writing/${post.slug}`}
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
                                            href={`/writing/${post.slug}`}
                                            className="text-[12px] text-accent hover:text-accent/80 font-medium transition-colors"
                                        >
                                            Read
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </>
                )}

                <div className="mt-10 rounded-lg border border-white/[0.08] bg-white/[0.02] p-6">
                    <p className="mb-4 text-[11px] uppercase tracking-[0.16em] text-white/45">
                        Archive
                    </p>
                    <p className="mb-5 text-[15px] leading-relaxed text-white/60">
                        Older writing on English, executive communication and
                        conversation coaching remains available as a conversation archive.
                    </p>
                    <Link href="/blog" className="text-[13px] text-accent hover:text-white">
                        View Conversation Archive
                    </Link>
                </div>

                <div className="mt-12 pt-8 border-t border-white/[0.06]">
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
