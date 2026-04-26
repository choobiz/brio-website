import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/blog";

export default function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 bg-white border border-border hover:border-brio-navy transition-colors"
    >
      <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[360px] overflow-hidden bg-brio-light-gray">
        <Image
          src={post.coverImage}
          alt={post.coverImageAlt ?? post.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 md:p-10 flex flex-col justify-center">
        <p className="text-text-muted text-[12px] uppercase tracking-[0.2em] font-semibold mb-3">
          Featured · {post.category}
        </p>
        <h2 className="font-heading text-brio-navy text-[24px] md:text-[34px] font-semibold leading-tight mb-4 group-hover:opacity-80 transition-opacity">
          {post.title}
        </h2>
        <p className="text-text-body text-[16px] leading-relaxed mb-5 line-clamp-3">
          {post.excerpt}
        </p>
        <p className="text-text-muted text-[13px] mb-6">
          {new Date(post.date).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}
          {" · "}
          {post.computedReadTime} min read
        </p>
        <span className="inline-block text-brio-navy text-[13px] font-semibold uppercase tracking-wide">
          Read article →
        </span>
      </div>
    </Link>
  );
}
