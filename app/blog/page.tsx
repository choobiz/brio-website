import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Link from "next/link";
import blogPosts from "@/lib/blog-posts.json";

export const metadata: Metadata = {
  title: "BRIO Blog",
  description: "Construction tips, renovation guides, and industry insights from BRIO Construction in Vancouver.",
};

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <Navbar />
      <section className="bg-brio-light-gray py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading text-center mb-12">
            BRIO Blog
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white p-6 hover:shadow-lg transition-shadow group"
              >
                <p className="text-text-muted text-[12px] mb-2">{post.date}</p>
                <h3 className="text-brio-navy text-[17px] font-semibold font-heading mb-3 group-hover:text-brio-navy/70 transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-text-body text-[14px] leading-relaxed line-clamp-3 mb-4">
                  {post.desc}
                </p>
                <span className="text-brio-navy text-[13px] font-semibold uppercase tracking-wide">
                  Read More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
