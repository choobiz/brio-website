import type { BlogPost } from "@/lib/blog";
import type { Author } from "@/lib/authors";

interface ArticleJsonLdProps {
  post: BlogPost;
  author: Author;
  url: string;
}

/**
 * Article JSON-LD for rich-results eligibility on Google.
 * Uses BlogPosting (more specific than Article) which Google still treats
 * as a valid Article subtype for rich-result features.
 */
export default function ArticleJsonLd({ post, author, url }: ArticleJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: [
      post.coverImage.startsWith("http")
        ? post.coverImage
        : `https://builtbybrio.com${post.coverImage}`,
    ],
    datePublished: post.date,
    dateModified: post.updatedAt ?? post.date,
    author: {
      "@type": "Person",
      name: author.name,
      jobTitle: author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "BRIO Construction",
      logo: {
        "@type": "ImageObject",
        url: "https://builtbybrio.com/favicon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: post.tags?.join(", "),
    articleSection: post.category,
    wordCount: post.wordCount,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
