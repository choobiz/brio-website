import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/blog";

export default function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;
  return (
    <section className="my-16">
      <h2 className="font-heading text-brio-navy text-[24px] md:text-[28px] font-semibold mb-6">
        Continue reading
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block bg-white border border-border hover:border-brio-navy transition-colors"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-brio-light-gray">
              {post.coverImage && (
                <Image
                  src={post.coverImage}
                  alt={post.coverImageAlt ?? post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}
            </div>
            <div className="p-5">
              <p className="text-text-muted text-[12px] uppercase tracking-wide font-semibold mb-2">
                {post.category}
              </p>
              <h3 className="font-heading text-brio-navy text-[17px] font-semibold leading-snug mb-2 line-clamp-3">
                {post.title}
              </h3>
              <p className="text-text-muted text-[13px]">{post.computedReadTime} min read</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
