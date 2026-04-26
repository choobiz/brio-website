import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/blog";

export default function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white border border-border hover:border-brio-navy transition-colors h-full flex flex-col"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-brio-light-gray">
        {post.coverImage && (
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt ?? post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <p className="text-text-muted text-[12px] uppercase tracking-wider font-semibold mb-2">
          {post.category}
        </p>
        <h3 className="font-heading text-brio-navy text-[18px] font-semibold leading-snug mb-3 line-clamp-3 group-hover:opacity-80 transition-opacity">
          {post.title}
        </h3>
        <p className="text-text-body text-[14px] leading-relaxed mb-4 line-clamp-2 flex-1">
          {post.excerpt}
        </p>
        <p className="text-text-muted text-[12px] mt-auto">
          {new Date(post.date).toLocaleDateString("en-CA", { month: "short", day: "numeric", year: "numeric" })}
          {" · "}
          {post.computedReadTime} min read
        </p>
      </div>
    </Link>
  );
}
