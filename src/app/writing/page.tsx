import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, siteUrl } from "@/lib/site";
import { getSortedWritingPosts } from "@/lib/writing";

const title = "Writing";
const description =
    "Practical AI product guides on coding agents, prototype-to-product work, product strategy and AI workflows for founders and small teams.";

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

export default function WritingPage() {
    const posts = getSortedWritingPosts();
    const [featuredPost, ...otherPosts] = posts;

    const blogJsonLd = {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Keiran Flynn AI Product Blog",
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
                <header className="mb-14 sm:mb-16">
                    <div className="accent-line mb-8" />
                    <div className="grid gap-8 md:grid-cols-[1fr_15rem] md:items-end">
                        <div>
                            <p className="eyebrow mb-5">AI product blog</p>
                            <h1 className="text-display mb-7 text-white">Writing</h1>
                            <p className="max-w-2xl text-[1.05rem] leading-relaxed text-white/60 sm:text-[1.15rem]">
                                Practical guides on AI product strategy, coding agents,
                                prototype hardening and the decisions that turn AI demos
                                into useful software.
                            </p>
                        </div>

                        {posts.length > 0 && (
                            <div className="border-l border-white/[0.08] pl-5 text-[13px] leading-relaxed text-white/42 md:justify-self-end">
                                <p>{posts.length} notes</p>
                                <p>
                                    Latest{" "}
                                    <time dateTime={featuredPost.rawDate}>
                                        {featuredPost.date}
                                    </time>
                                </p>
                                <Link
                                    href="/blog"
                                    className="mt-4 inline-block text-accent transition-colors hover:text-white"
                                >
                                    Conversation archive
                                </Link>
                            </div>
                        )}
                    </div>
                </header>

                {posts.length === 0 ? (
                    <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-7 sm:p-9">
                        <h2 className="mb-3 text-2xl font-semibold text-white">
                            Nothing published yet.
                        </h2>
                        <p className="text-[15px] leading-relaxed text-white/55">
                            New writing will appear here as it is published.
                        </p>
                    </div>
                ) : (
                    <>
                        <article className="mb-12 border-y border-white/[0.08] py-8 sm:py-10">
                            <div className="mb-5 flex flex-wrap items-center gap-3 text-[12px] text-white/35">
                                <span className="text-accent">Latest</span>
                                <span>·</span>
                                <time dateTime={featuredPost.rawDate}>
                                    {featuredPost.date}
                                </time>
                                <span>·</span>
                                <span>{featuredPost.readingTime}</span>
                            </div>

                            {featuredPost.tags && featuredPost.tags.length > 0 && (
                                <div className="mb-5 flex flex-wrap gap-2">
                                    {featuredPost.tags.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded border border-accent/20 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-accent/70"
                                        >
                                            {tag.replace(/-/g, " ")}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <h2 className="mb-5 max-w-3xl text-[2rem] font-semibold leading-[1.05] text-white sm:text-[2.75rem]">
                                <Link
                                    href={`/writing/${featuredPost.slug}`}
                                    className="transition-colors duration-300 hover:text-accent"
                                >
                                    {featuredPost.title}
                                </Link>
                            </h2>

                            <p className="mb-7 max-w-2xl text-[1rem] leading-relaxed text-white/58 sm:text-[1.08rem]">
                                {featuredPost.description}
                            </p>

                            <Link
                                href={`/writing/${featuredPost.slug}`}
                                className="inline-flex min-h-11 items-center rounded-lg border border-white/[0.10] px-4 text-[13px] font-medium text-white transition-colors hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
                            >
                                Read the guide
                            </Link>
                        </article>

                        {otherPosts.length > 0 && (
                            <section aria-labelledby="more-writing">
                                <div className="mb-5 flex items-end justify-between gap-5">
                                    <h2
                                        id="more-writing"
                                        className="text-[1rem] font-semibold text-white"
                                    >
                                        More guides
                                    </h2>
                                    <div className="hidden h-px flex-1 bg-white/[0.06] sm:block" />
                                </div>

                                <div className="divide-y divide-white/[0.06]">
                                    {otherPosts.map((post) => (
                                        <article
                                            key={post.slug}
                                            className="grid gap-4 py-6 transition-colors duration-300 hover:bg-white/[0.015] sm:grid-cols-[9rem_1fr] sm:gap-8"
                                        >
                                            <div className="text-[12px] leading-relaxed text-white/35">
                                                <time dateTime={post.rawDate}>
                                                    {post.date}
                                                </time>
                                                <p>{post.readingTime}</p>
                                            </div>

                                            <div>
                                                {post.tags && post.tags.length > 0 && (
                                                    <div className="mb-3 flex flex-wrap gap-2">
                                                        {post.tags.slice(0, 2).map((tag) => (
                                                            <span
                                                                key={tag}
                                                                className="text-[10px] uppercase tracking-[0.18em] text-accent/60"
                                                            >
                                                                {tag.replace(/-/g, " ")}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}

                                                <h3 className="mb-2 text-[1.15rem] font-semibold leading-snug">
                                                    <Link
                                                        href={`/writing/${post.slug}`}
                                                        className="text-white transition-colors duration-300 hover:text-accent"
                                                    >
                                                        {post.title}
                                                    </Link>
                                                </h3>

                                                <p className="max-w-2xl text-[14px] leading-relaxed text-white/52">
                                                    {post.description}
                                                </p>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </section>
                        )}

                        {posts.length === 1 && (
                            <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-6">
                                <p className="text-[15px] leading-relaxed text-white/55">
                                    More notes will appear here as they are published.
                                </p>
                            </div>
                        )}
                    </>
                )}

                <div className="mt-12 rounded-lg border border-white/[0.08] bg-white/[0.02] p-6">
                    <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-center">
                        <div>
                            <p className="mb-2 text-[11px] uppercase tracking-[0.16em] text-white/42">
                                Archive
                            </p>
                            <p className="text-[15px] leading-relaxed text-white/58">
                                Older pieces on English, executive communication and
                                conversation coaching live in the conversation archive.
                            </p>
                        </div>
                        <Link
                            href="/blog"
                            className="text-[13px] text-accent transition-colors hover:text-white"
                        >
                            View archive
                        </Link>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/[0.06] pt-8">
                    <Link
                        href="/"
                        className="text-[13px] text-white/40 transition-colors hover:text-accent"
                    >
                        Back to home
                    </Link>
                </div>
            </div>
        </>
    );
}
