import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Breadcrumbs from "@/components/blog/Breadcrumbs";
import HeroCover from "@/components/blog/HeroCover";
import MetaStrip from "@/components/blog/MetaStrip";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";
import StickyTOC from "@/components/blog/StickyTOC";
import MobileTOCAccordion from "@/components/blog/MobileTOCAccordion";
import AuthorCard from "@/components/blog/AuthorCard";
import EndOfArticleCTA from "@/components/blog/EndOfArticleCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";
import ShareRail from "@/components/blog/ShareRail";
import ShareBarMobile from "@/components/blog/ShareBarMobile";
import ArticleJsonLd from "@/components/blog/ArticleJsonLd";
import {
  getAllPostSlugs,
  getPostBySlug,
  getRelatedPosts,
  getPostRawContent,
  extractTOC,
} from "@/lib/blog";
import { getAuthor } from "@/lib/authors";

const BASE_URL = "https://builtbybrio.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `${BASE_URL}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedAt ?? post.date,
      images: [{ url: post.coverImage, alt: post.coverImageAlt ?? post.title }],
      authors: [getAuthor(post.author).name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const author = getAuthor(post.author);
  const related = getRelatedPosts(slug, 3);
  const rawContent = getPostRawContent(slug) ?? "";
  const toc = extractTOC(rawContent);
  const url = `${BASE_URL}/blog/${post.slug}`;

  // Dynamic MDX import — Next.js 16 pattern.
  const { default: PostBody } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <>
      <Navbar />
      <ReadingProgressBar targetId="blog-article" />
      <ArticleJsonLd post={post} author={author} url={url} />

      <HeroCover
        src={post.coverImage}
        alt={post.coverImageAlt ?? post.title}
        title={post.title}
        excerpt={post.excerpt}
        category={post.category}
      />

      <article id="blog-article" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_60px] xl:grid-cols-[220px_minmax(0,720px)_80px] gap-8 xl:gap-12 justify-center">
            {/* Left rail: TOC on desktop */}
            <div className="hidden lg:block">
              <StickyTOC items={toc} />
            </div>

            {/* Center column: article body */}
            <div className="min-w-0">
              <Breadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "Blog", href: "/blog" },
                  { label: post.title },
                ]}
              />
              <MetaStrip
                author={author}
                date={post.date}
                updatedAt={post.updatedAt}
                readTime={post.computedReadTime}
              />
              <MobileTOCAccordion items={toc} />

              <div className="pt-2">
                <PostBody />
              </div>

              <ShareBarMobile url={url} title={post.title} />
              <AuthorCard author={author} />
              <EndOfArticleCTA service={post.ctaService} source={post.slug} />
            </div>

            {/* Right rail: share rail on desktop */}
            <div className="hidden lg:block">
              <ShareRail url={url} title={post.title} />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <RelatedPosts posts={related} />
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
