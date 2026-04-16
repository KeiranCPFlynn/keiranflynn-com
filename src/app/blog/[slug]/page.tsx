import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost, getSortedPosts, getRelatedPosts } from "@/lib/blog";
import { absoluteUrl, siteUrl } from "@/lib/site";

export async function generateStaticParams() {
    const posts = getSortedPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getPost(slug);

    if (!post) return notFound();

    const imageUrl = absoluteUrl("/keiran.jpg");
    const canonicalUrl = absoluteUrl(`/blog/${slug}`);

    return {
        title: `${post.title} | Keiran Flynn`,
        description: post.description,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: post.title,
            description: post.description,
            url: canonicalUrl,
            siteName: "Keiran Flynn",
            type: "article",
            publishedTime: post.rawDate,
            authors: [post.author || "Keiran Flynn"],
            tags: post.tags,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
            images: [imageUrl],
        },
    };
}

export default async function BlogPost({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getPost(slug);

    if (!post) return notFound();

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: siteUrl,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: absoluteUrl("/blog"),
            },
            {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: absoluteUrl(`/blog/${slug}`),
            },
        ],
    };

    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.description,
        datePublished: post.rawDate,
        dateModified: post.rawDate,
        author: {
            "@type": "Person",
            "@id": `${siteUrl}/#person`,
            name: post.author || "Keiran Flynn",
            jobTitle: "Strategic Communication Consultant",
            url: absoluteUrl("/about"),
        },
        publisher: {
            "@type": "Person",
            name: "Keiran Flynn",
            url: siteUrl,
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": absoluteUrl(`/blog/${slug}`),
        },
        image: absoluteUrl("/keiran.jpg"),
        url: absoluteUrl(`/blog/${slug}`),
        ...(post.tags && { keywords: post.tags.join(", ") }),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />

            <div className="max-w-3xl mx-auto px-6 sm:px-8 pt-36 sm:pt-44 pb-24">
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] text-white/30 mb-10">
                    <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/blog" className="hover:text-white/60 transition-colors">Blog</Link>
                    <span>/</span>
                    <span className="text-white/50 truncate max-w-[200px]">{post.title}</span>
                </nav>

                {/* Article header */}
                <header className="mb-12">
                    {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.map((tag) => (
                                <Link
                                    key={tag}
                                    href={`/blog/tag/${tag}`}
                                    className="text-[10px] uppercase tracking-[0.18em] text-accent-gold/70 hover:text-accent-gold hover:border-accent-gold/40 px-2 py-0.5 border border-accent-gold/20 rounded transition-colors duration-300"
                                >
                                    {tag.replace(/-/g, " ")}
                                </Link>
                            ))}
                        </div>
                    )}

                    <div className="accent-line mb-6" />

                    <h1 className="text-heading text-white mb-6">{post.title}</h1>

                    <div className="flex items-center gap-4 text-[13px] text-white/35">
                        <span>{post.author || "Keiran Flynn"}</span>
                        <span>·</span>
                        <time dateTime={post.rawDate}>{post.date}</time>
                        <span>·</span>
                        <span>{post.readingTime}</span>
                    </div>
                </header>

                {/* Article body */}
                <article className="prose prose-invert max-w-none">
                    <MDXRemote source={post.content} />
                </article>

                {/* Related posts */}
                {(() => {
                    const relatedPosts = getRelatedPosts(post.slug, 3);
                    if (relatedPosts.length === 0) return null;

                    return (
                        <div className="mt-16">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-[15px] font-medium text-white/70">
                                    Related reading
                                </h2>
                                <Link
                                    href="/blog"
                                    className="text-[12px] text-white/40 hover:text-accent-gold transition-colors"
                                >
                                    All articles →
                                </Link>
                            </div>
                            <div className="grid md:grid-cols-3 gap-4">
                                {relatedPosts.map((related) => (
                                    <article
                                        key={related.slug}
                                        className="glass-card p-5 flex flex-col"
                                    >
                                        <h3 className="text-[14px] font-medium leading-snug mb-2">
                                            <Link
                                                href={`/blog/${related.slug}`}
                                                className="text-white hover:text-accent-gold transition-colors"
                                            >
                                                {related.title}
                                            </Link>
                                        </h3>
                                        <p className="text-[12px] text-white/45 leading-relaxed mb-4 flex-1">
                                            {related.description.length > 100
                                                ? `${related.description.substring(0, 100)}...`
                                                : related.description}
                                        </p>
                                        <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/[0.06]">
                                            <div className="text-[11px] text-white/30">
                                                <time dateTime={related.rawDate}>
                                                    {related.date}
                                                </time>
                                            </div>
                                            <Link
                                                href={`/blog/${related.slug}`}
                                                className="text-[11px] text-accent-gold hover:text-accent-gold/80 font-medium transition-colors"
                                            >
                                                Read
                                            </Link>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    );
                })()}

                {/* CTA */}
                <div className="mt-20 glass-card p-8 text-center">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-3">
                        Work with Keiran
                    </p>
                    <p className="text-white/70 mb-6 text-[15px]">
                        Ready to put this into practice? Book a session and work through your specific professional communication challenges directly.
                    </p>
                    <Link href="/#sessions" className="btn-primary inline-flex">
                        Book a Session
                    </Link>
                </div>

                {/* Footer nav */}
                <div className="mt-12 pt-8 border-t border-white/[0.06] flex items-center justify-between">
                    <Link
                        href="/blog"
                        className="text-[13px] text-white/40 hover:text-accent-gold transition-colors"
                    >
                        ← All articles
                    </Link>
                    <Link
                        href="/"
                        className="text-[13px] text-white/40 hover:text-accent-gold transition-colors"
                    >
                        keiranflynn.com
                    </Link>
                </div>
            </div>
        </>
    );
}
