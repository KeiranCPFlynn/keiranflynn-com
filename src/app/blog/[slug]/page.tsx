import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost, getSortedPosts } from "@/lib/blog";
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />

            <div className="max-w-3xl mx-auto px-6 sm:px-8 pt-36 sm:pt-44 pb-24">
                {/* Back link */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-[13px] text-white/40 hover:text-accent-gold transition-colors mb-12"
                >
                    ← All articles
                </Link>

                {/* Article header */}
                <header className="mb-12">
                    {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[10px] uppercase tracking-[0.18em] text-accent-gold/70 px-2 py-0.5 border border-accent-gold/20 rounded"
                                >
                                    {tag.replace(/-/g, " ")}
                                </span>
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
