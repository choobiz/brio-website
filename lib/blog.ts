import "server-only";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPostFrontmatter {
  title: string;
  slug: string;
  date: string;
  updatedAt?: string;
  author: string;
  category: string;
  tags?: string[];
  coverImage: string;
  coverImageAlt?: string;
  excerpt: string;
  /** Optional override; auto-calculated from body if omitted. */
  readTime?: number;
  /** Service slug bound to the end-of-article LeadForm. */
  ctaService?: string;
  /** Optional draft flag — drafts are excluded from listings and the sitemap. */
  draft?: boolean;
  /** Optional schema type override: "article" (default), "howto", or "faq". */
  schemaType?: "article" | "howto" | "faq";
}

export interface BlogPost extends BlogPostFrontmatter {
  /** Absolute path to the .mdx file on disk. */
  filePath: string;
  /** Calculated read time in minutes (rounded up). */
  computedReadTime: number;
  /** Word count of the body. */
  wordCount: number;
}

function readPostFile(slug: string): { data: BlogPostFrontmatter; content: string; filePath: string } | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { data: data as BlogPostFrontmatter, content, filePath };
}

function toPost(parsed: { data: BlogPostFrontmatter; content: string; filePath: string }): BlogPost {
  const stats = readingTime(parsed.content);
  return {
    ...parsed.data,
    filePath: parsed.filePath,
    computedReadTime: parsed.data.readTime ?? Math.max(1, Math.ceil(stats.minutes)),
    wordCount: stats.words,
  };
}

/** All published posts, newest first. Drafts are excluded. */
export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => readPostFile(file.replace(/\.mdx$/, "")))
    .filter((p): p is NonNullable<typeof p> => p !== null)
    .filter((p) => !p.data.draft)
    .map(toPost)
    .sort((a, b) => b.date.localeCompare(a.date));
}

/** Single post by slug. Returns null for missing or draft posts in production. */
export function getPostBySlug(slug: string): BlogPost | null {
  const parsed = readPostFile(slug);
  if (!parsed) return null;
  if (parsed.data.draft && process.env.NODE_ENV === "production") return null;
  return toPost(parsed);
}

/** Slugs of all published posts — for generateStaticParams. */
export function getAllPostSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

/** Distinct categories across all published posts, sorted alphabetically. */
export function getAllCategories(): string[] {
  const set = new Set(getAllPosts().map((p) => p.category));
  return Array.from(set).sort();
}

/**
 * Related posts: same category first, then same tag, capped to `limit`.
 * Excludes the current post.
 */
export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const all = getAllPosts().filter((p) => p.slug !== currentSlug);
  const current = all.find((p) => p.slug === currentSlug) ?? getPostBySlug(currentSlug);
  if (!current) return all.slice(0, limit);

  const sameCategory = all.filter((p) => p.category === current.category);
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);

  const currentTags = new Set(current.tags ?? []);
  const sameTagButDifferentCategory = all
    .filter((p) => p.category !== current.category)
    .filter((p) => (p.tags ?? []).some((t) => currentTags.has(t)));

  const combined = [...sameCategory, ...sameTagButDifferentCategory];
  if (combined.length >= limit) return combined.slice(0, limit);

  // Fall back to most recent posts to fill out the row.
  const seen = new Set(combined.map((p) => p.slug));
  const fillers = all.filter((p) => !seen.has(p.slug)).slice(0, limit - combined.length);
  return [...combined, ...fillers];
}

/** Extracts H2 headings from raw MDX content for the table of contents. */
export function extractTOC(content: string): { id: string; text: string; level: 2 | 3 }[] {
  const headings: { id: string; text: string; level: 2 | 3 }[] = [];
  const lines = content.split("\n");
  let inCodeFence = false;

  for (const line of lines) {
    if (line.startsWith("```")) {
      inCodeFence = !inCodeFence;
      continue;
    }
    if (inCodeFence) continue;

    const match = line.match(/^(##|###)\s+(.+)$/);
    if (!match) continue;
    const level = match[1].length === 2 ? 2 : 3;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
    headings.push({ id, text, level: level as 2 | 3 });
  }

  return headings;
}

/** Read the raw MDX content (frontmatter stripped) for TOC extraction. */
export function getPostRawContent(slug: string): string | null {
  const parsed = readPostFile(slug);
  return parsed?.content ?? null;
}
