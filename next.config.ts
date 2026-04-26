import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
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
