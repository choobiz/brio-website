import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FeaturedPost from "@/components/blog/FeaturedPost";
import PostCard from "@/components/blog/PostCard";
import CategoryFilterPills from "@/components/blog/CategoryFilterPills";
import LoadMoreButton from "@/components/blog/LoadMoreButton";
import { getAllPosts, getAllCategories } from "@/lib/blog";

const PAGE_SIZE = 12;

export const metadata: Metadata = {
  title: "BRIO Blog",
  description:
    "Construction tips, renovation guides, and industry insights from BRIO Construction in Vancouver.",
  alternates: { canonical: "https://builtbybrio.com/blog" },
};

interface BlogIndexPageProps {
  searchParams: Promise<{ category?: string; limit?: string }>;
}

export default async function BlogIndexPage({ searchParams }: BlogIndexPageProps) {
  const { category, limit } = await searchParams;
  const allPosts = getAllPosts();
  const categories = getAllCategories();

  const filtered = category
    ? allPosts.filter((p) => p.category === category)
    : allPosts;

  const featured = filtered[0];
  const rest = filtered.slice(1);

  const currentLimit = Math.max(PAGE_SIZE, Number.parseInt(limit ?? `${PAGE_SIZE}`, 10) || PAGE_SIZE);
  const visibleRest = rest.slice(0, currentLimit);
  const hasMore = visibleRest.length < rest.length;

  return (
    <>
      <Navbar />
      <section className="bg-brio-light-gray py-14 md:py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-text-muted text-[12px] uppercase tracking-[0.2em] font-semibold mb-3">
            BRIO Blog
          </p>
          <h1 className="font-heading text-brio-navy text-[40px] md:text-[56px] font-semibold leading-[1.1] mb-4">
            Renovation guides &amp; design ideas
          </h1>
          <p className="text-text-body text-[17px] md:text-[18px] leading-relaxed max-w-2xl mx-auto">
            Practical, specific writing on Metro Vancouver renovations from the team that builds the projects.
          </p>
        </div>
      </section>

      <section className="bg-white py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 overflow-x-auto">
            <CategoryFilterPills categories={categories} />
          </div>

          {filtered.length === 0 ? (
            <p className="text-text-muted text-center py-20">
              No articles in this category yet — check back soon.
            </p>
          ) : (
            <>
              {featured && !category && (
                <div className="mb-12 md:mb-16">
                  <FeaturedPost post={featured} />
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {(category ? filtered : visibleRest).map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>

              {!category && (
                <LoadMoreButton
                  pageSize={PAGE_SIZE}
                  currentLimit={currentLimit}
                  totalCount={rest.length}
                />
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
