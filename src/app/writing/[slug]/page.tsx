import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getWritingPost, getSortedWritingPosts } from "@/lib/writing";
import { absoluteUrl, siteUrl } from "@/lib/site";

export async function generateStaticParams() {
    const posts = getSortedWritingPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getWritingPost(slug);

    if (!post) return notFound();

    const imageUrl = absoluteUrl("/keiran.jpg");
    const canonicalUrl = absoluteUrl(`/writing/${slug}`);

    return {
        title: post.title,
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

export default async function WritingPost({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getWritingPost(slug);

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
                name: "Writing",
                item: absoluteUrl("/writing"),
            },
            {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: absoluteUrl(`/writing/${slug}`),
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
            jobTitle: "AI Product Builder",
            url: absoluteUrl("/about"),
        },
        publisher: {
            "@type": "Person",
            name: "Keiran Flynn",
            url: siteUrl,
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": absoluteUrl(`/writing/${slug}`),
        },
        image: absoluteUrl("/keiran.jpg"),
        url: absoluteUrl(`/writing/${slug}`),
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
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] text-white/30 mb-10">
                    <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/writing" className="hover:text-white/60 transition-colors">Writing</Link>
                    <span>/</span>
                    <span className="text-white/50 truncate max-w-[200px]">{post.title}</span>
                </nav>

                <header className="mb-12">
                    {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[10px] uppercase tracking-[0.18em] text-accent/70 px-2 py-0.5 border border-accent/20 rounded"
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

                <article className="prose prose-invert max-w-none">
                    <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
                </article>

                <div className="mt-20 pt-8 border-t border-white/[0.06] flex items-center justify-between">
                    <Link
                        href="/writing"
                        className="text-[13px] text-white/40 hover:text-accent transition-colors"
                    >
                        All writing
                    </Link>
                    <Link
                        href="/"
                        className="text-[13px] text-white/40 hover:text-accent transition-colors"
                    >
                        keiranflynn.com
                    </Link>
                </div>
            </div>
        </>
    );
}
