import type { NextConfig } from "next";
import createMDX from "@next/mdx";

/**
 * Slugs of all blog posts that lived at the WordPress root
 * (e.g. /how-to-add-a-legal-basement-suite-…/) and now live at /blog/{slug}
 * on the new site. Redirected 308 so SEO authority is preserved and Google
 * eventually replaces the indexed URLs.
 *
 * NEW posts added under /blog/{slug} on the Next site after launch do NOT
 * need redirects — there's no old URL to redirect from.
 */
const MIGRATED_BLOG_SLUGS = [
  "2024-chba-municipal-benchmarking-vancouver-surrey-burnaby-in-focus",
  "5-proven-kitchen-design-tips-for-a-timeless-look-2025-guide",
  "5-vancouver-special-renovation-ideas-to-modernize-your-home",
  "7-home-maintenance-tips-vancouver",
  "7-renovation-mistakes-to-avoid",
  "7-small-kitchen-island-ideas-to-maximize-style-and-function",
  "7-tips-to-a-smart-home-renovation-budget",
  "bc-construction-labor-shortage-crisis-or-opportunity-in-2025",
  "build-with-boldness-mean",
  "building-integrated-photovoltaics-bipv-net-zero-homes-bc",
  "construction-project-manager-responsibilities",
  "home-renovations-that-increase-property-value",
  "how-to-add-a-legal-basement-suite-in-vancouver-a-step-by-step-guide",
  "how-to-ensure-successful-contractor-selection",
  "how-to-spot-early-signs-of-structural-damage-in-your-home",
  "multi-generational-home-transformation",
  "the-bc-energy-step-code-is-here-to-stay-what-it-means-for-your-2025-home-renovation",
  "thinking-of-building-a-laneway-house-in-vancouver-read-this-first",
  "timeless-kitchen-design-trends-2025",
  "top-7-kitchen-remodeling-tips-for-homeowners",
  "us-tariffs-impact-on-bc-construction-costs",
  "vancouver-building-permits-essential-guide",
  "vancouver-multiplex-properties-expert-guide-to-evaluate-your-lots-potential",
  "whats-the-real-cost-of-a-home-renovation-in-vancouver-2025-guide",
];

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],

  async redirects() {
    return [
      // Blog index URL changed.
      { source: "/brio-blog", destination: "/blog", permanent: true },

      // Each old WP blog post slug — was at root, now under /blog.
      // Generated programmatically so the source list above stays the single
      // source of truth.
      ...MIGRATED_BLOG_SLUGS.map((slug) => ({
        source: `/${slug}`,
        destination: `/blog/${slug}`,
        permanent: true,
      })),

      // WP category archives → blog index with category filter applied.
      // Category names match the `category` value in MDX frontmatter, which is
      // what CategoryFilterPills compares against.
      { source: "/category/brio-news", destination: "/blog?category=BRIO%20News", permanent: true },
      { source: "/category/brio-behind-the-build", destination: "/blog?category=BRIO%20Behind%20the%20Build", permanent: true },
      { source: "/category/brio-design-data", destination: "/blog?category=BRIO%20Design%20%26%20Data", permanent: true },
      { source: "/category/brio-guides", destination: "/blog?category=BRIO%20Guides", permanent: true },
      { source: "/category/home-renovation", destination: "/blog?category=Home%20Renovation", permanent: true },
      // Kitchen-remodeling category collides with the service slug — send to
      // the service page (more useful than a filtered blog) since visitors
      // landing here typically have commercial intent, not browsing intent.
      { source: "/category/kitchen-remodeling", destination: "/kitchen-remodeling", permanent: true },

      // Stray nested service URL on the old site.
      { source: "/services/home-additions-extensions", destination: "/home-additions-extensions", permanent: true },

      // Pages that don't exist on the new site — funnel to the most relevant
      // surface so SEO authority is salvaged rather than 404'd.
      { source: "/thank-you", destination: "/", permanent: true },
      { source: "/tools-resources", destination: "/", permanent: true },
      { source: "/tools-resources/:path*", destination: "/", permanent: true },
    ];
  },
};

const withMDX = createMDX({
  options: {
    // String form is required for Turbopack (Next 16 default).
    // remark-frontmatter: parses `---...---` YAML blocks as metadata so they
    //   are NOT rendered as body content. Without this @next/mdx treats the
    //   frontmatter as a setext H2 (the closing `---` underlines the YAML).
    // remark-gfm: tables, strikethrough, task lists.
    // rehype-slug: gives every heading an `id`.
    // rehype-autolink-headings: makes those ids clickable for deep-linking.
    remarkPlugins: ["remark-frontmatter", "remark-gfm"],
    rehypePlugins: ["rehype-slug", ["rehype-autolink-headings", { behavior: "wrap" }]],
  },
});

export default withMDX(nextConfig);
