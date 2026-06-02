import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { absoluteUrl, siteUrl } from "@/lib/site";
import { getPostsByTag, getAllTags } from "@/lib/blog";

export async function generateStaticParams() {
    const tags = getAllTags();
    return tags.map((tag) => ({ tag }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ tag: string }>;
}): Promise<Metadata> {
    const { tag } = await params;
    const posts = getPostsByTag(tag);

    if (posts.length === 0) return notFound();

    const title = `Conversation archive posts tagged "${tag.replace(/-/g, " ")}"`;
    const description = `Archive posts on ${tag.replace(/-/g, " ")} from older writing on English, executive communication and professional fluency.`;
    const canonicalUrl = absoluteUrl(`/blog/tag/${tag}`);

    return {
        title,
        description,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            siteName: "Keiran Flynn",
            type: "website",
        },
        twitter: {
            title,
            description,
        },
    };
}

export default async function TagPage({
    params,
}: {
    params: Promise<{ tag: string }>;
}) {
    const { tag } = await params;
    const posts = getPostsByTag(tag);

    if (posts.length === 0) return notFound();

    const displayTag = tag.replace(/-/g, " ");

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
                name: displayTag,
                item: absoluteUrl(`/blog/tag/${tag}`),
            },
        ],
    };

    return (
        <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <div className="max-w-4xl mx-auto px-6 sm:px-8 pt-36 sm:pt-44 pb-24 sm:pb-32">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] text-white/30 mb-10">
                <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-white/60 transition-colors">Blog</Link>
                <span>/</span>
                <span className="text-white/50">{displayTag}</span>
            </nav>

            {/* Header */}
            <div className="mb-16">
                <div className="accent-line mb-8" />
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-display text-white">
                        #{displayTag}
                    </h1>
                    <Link
                        href="/blog"
                        className="text-[13px] text-white/40 hover:text-accent transition-colors"
                    >
                        All archive posts
                    </Link>
                </div>
                <p className="text-subheading text-white/55 max-w-2xl">
                    Archive posts on {displayTag} from older writing on English,
                    executive communication and professional fluency.
                </p>
                <div className="mt-4 text-[13px] text-white/35">
                    {posts.length} article{posts.length !== 1 ? "s" : ""}
                </div>
            </div>

            {/* Post grid */}
            <div className="grid md:grid-cols-2 gap-5">
                {posts.map((post) => (
                    <article
                        key={post.slug}
                        className="glass-card p-7 flex flex-col"
                    >
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

            {/* Back to blog */}
            <div className="mt-16 pt-8 border-t border-white/[0.06]">
                <Link
                    href="/blog"
                    className="text-[13px] text-white/40 hover:text-accent transition-colors"
                >
                    Back to all archive posts
                </Link>
            </div>
        </div>
        </>
    );
}
