# Brio Website Rebuild — Detailed Work Report: 2026-04-26 (Part B)

**Purpose:** Technical reference for recreating the blog rebuild from scratch.

---

## Task 1: Build the Blog Editorial Template

### Problem
The original blog had 24 separate hand-written `app/blog/{slug}/page.tsx` files (888 lines of near-duplicate boilerplate). Each was a stub: title from frontmatter, a single hardcoded date, and one paragraph that was literally the meta description repeated. No actual article body, no images, no author, no related posts, no JSON-LD, no share buttons. The blog index was a text-only single-column list with no thumbnails, no excerpts, no categories, no search. The user described it as feeling "like an early-2010s blog template" and wanted a modern editorial layout that drives time-on-page and lead-form conversions.

### Solution

#### Dependencies
```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx \
            gray-matter remark-gfm rehype-slug rehype-autolink-headings \
            reading-time server-only
```

#### File: `next.config.ts`
```ts
import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  options: {
    // String form is required for Turbopack (Next 16 default).
    // remark-frontmatter added in Task 5.
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: ["rehype-slug", ["rehype-autolink-headings", { behavior: "wrap" }]],
  },
});

export default withMDX(nextConfig);
```

#### File: `mdx-components.tsx` (project root, REQUIRED by @next/mdx App Router)
Maps MDX-emitted HTML elements (h2, h3, p, ul, li, blockquote, table, img, a, hr) to typography-styled React components matching the site's brio-navy + Times New Roman heading + Open Sans body design tokens. Also exposes `CalloutCard`, `PullQuote`, `Figure`, `BeforeAfterSlider`, `InlineLeadForm` so they can be used directly inside `.mdx` files. `<a>` rendering distinguishes internal vs external (internal uses `next/link`; external opens in new tab with `rel="noopener"`).

#### File: `lib/blog.ts` — content data layer
```ts
import "server-only";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPostFrontmatter {
  title: string; slug: string; date: string; updatedAt?: string;
  author: string; category: string; tags?: string[];
  coverImage: string; coverImageAlt?: string;
  excerpt: string; readTime?: number; ctaService?: string;
  draft?: boolean; schemaType?: "article" | "howto" | "faq";
}

export interface BlogPost extends BlogPostFrontmatter {
  filePath: string; computedReadTime: number; wordCount: number;
}
```
Exports: `getAllPosts()`, `getPostBySlug(slug)`, `getAllPostSlugs()`, `getAllCategories()`, `getRelatedPosts(currentSlug, limit=3)` (same category first, then same tag, then recency fillers), `extractTOC(content)` (regex over raw MDX text — finds `^## ` and `^### ` headings outside code fences, generates slugified IDs matching `rehype-slug` output), `getPostRawContent(slug)`.

#### File: `lib/authors.ts` — author roster
```ts
export interface Author {
  id: string; name: string; role: string; bio: string;
  avatar?: string; email?: string; linkedin?: string;
}
const AUTHORS: Record<string, Author> = {
  brio: { id: "brio", name: "BRIO Construction", role: "...", bio: "..." },
  amir: { id: "amir", name: "Amir Omidvar", role: "Founder & Principal", bio: "Founded BRIO in 2018 to bring on-time, fixed-price guarantees to Vancouver renovations after watching too many projects spiral on his own home build." },
};
export function getAuthor(id: string | undefined): Author { return id ? (AUTHORS[id] ?? AUTHORS.brio) : AUTHORS.brio; }
```
Avatars deliberately omitted — components render conditionally without them.

#### Components in `components/blog/`

Article-page (16 components):
1. **`Breadcrumbs.tsx`** — chevron-separated nav (Home › Blog › Title), last item is non-link and truncated on mobile
2. **`HeroCover.tsx`** — full-bleed cover image, 16:10 mobile / 21:9 desktop, gradient overlay, title in serif over image. (Updated in Task 4 — see below.)
3. **`MetaStrip.tsx`** — author avatar + name + date + (optional) updated date + read-time + "Jump to estimate ↓" anchor link to `#blog-end`
4. **`ReadingProgressBar.tsx`** — `"use client"`, fixed top bar, IntersectionObserver-free scroll-based progress through `#blog-article` element. Hidden on mobile (`hidden md:block`)
5. **`StickyTOC.tsx`** — `"use client"`, desktop sticky left rail. IntersectionObserver tracks all TOC headings; highlights the one with the highest visible ratio. `rootMargin: "-80px 0px -60% 0px"` accounts for header height and prefers headings near the top
6. **`MobileTOCAccordion.tsx`** — `<details>`-based accordion at top of body on mobile. Auto-closes when clicking a section link
7. **`Figure.tsx`** — `<Image>` + caption + optional `fullBleed` (escapes the article column on desktop via `md:-mx-24 lg:-mx-32`)
8. **`PullQuote.tsx`** — large serif quote with optional attribution line; full-bleed escape on desktop
9. **`CalloutCard.tsx`** — 4 tones: `tip` (light gray), `warning` (amber), `info` (blue), `key` (navy reverse-out). Each ships an icon (Lightbulb, AlertTriangle, Info, CheckCircle2) and a default label
10. **`InlineLeadForm.tsx`** — wraps shared `<LeadForm variant="compact" />`, source auto-prefixed with `blog-inline-{source}`, defaults headline/subhead/submitLabel
11. **`AuthorCard.tsx`** — avatar + role + 1-line bio + "Written by" eyebrow
12. **`EndOfArticleCTA.tsx`** — navy section with topic-matched headline by service slug (kitchen → "Ready to start your kitchen renovation?", basement → "Ready to add a legal basement suite?", etc.) wrapping a stacked-variant LeadForm. `id="blog-end"` for the meta-strip jump link
13. **`RelatedPosts.tsx`** — 3-card grid with cover image, category eyebrow, title, read-time
14. **`ShareRail.tsx`** — `"use client"`, desktop sticky right rail. Facebook + LinkedIn (custom inline SVGs because Lucide v1 dropped brand icons), X, Pinterest (Pinterest matters for renovation/design content), copy-link with 1.5s confirmation state
15. **`ShareBarMobile.tsx`** — `"use client"`, inline share bar at end of mobile articles. Native Web Share API where available, copy-link fallback. No sticky bottom bar (eats too much screen real estate)
16. **`ArticleJsonLd.tsx`** — `BlogPosting` schema with author, publisher, image (absolute URL), datePublished, dateModified, keywords, articleSection, wordCount

Index components:
- **`FeaturedPost.tsx`** — 2-col card (image left on desktop), category eyebrow, large serif title, dek, date, read-time
- **`PostCard.tsx`** — 16:9 cover, category eyebrow, title (line-clamp-3), excerpt (line-clamp-2), date+readtime
- **`CategoryFilterPills.tsx`** — `"use client"`, "All" + each category, drives URL searchParam `?category=…`, resets `limit` on category change, scroll-locked pushState
- **`LoadMoreButton.tsx`** — `"use client"`, increments URL searchParam `?limit=` by `PAGE_SIZE` on click, hides when fully loaded

#### File: `app/blog/[slug]/page.tsx`
```tsx
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `${BASE_URL}/blog/${post.slug}`;
  return {
    title: post.title, description: post.excerpt,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article",
      publishedTime: post.date, modifiedTime: post.updatedAt ?? post.date,
      images: [{ url: post.coverImage, alt: post.coverImageAlt ?? post.title }],
      authors: [getAuthor(post.author).name] },
    twitter: { card: "summary_large_image", title, description, images: [post.coverImage] },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug); if (!post) notFound();
  const author = getAuthor(post.author);
  const related = getRelatedPosts(slug, 3);
  const rawContent = getPostRawContent(slug) ?? "";
  const toc = extractTOC(rawContent);
  const url = `${BASE_URL}/blog/${post.slug}`;
  // Next.js 16 dynamic MDX import pattern.
  const { default: PostBody } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <>
      <Navbar />
      <ReadingProgressBar targetId="blog-article" />
      <ArticleJsonLd post={post} author={author} url={url} />
      <HeroCover src={post.coverImage} alt={post.coverImageAlt ?? post.title}
                 title={post.title} excerpt={post.excerpt} category={post.category} />
      <article id="blog-article" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_60px] xl:grid-cols-[220px_minmax(0,720px)_80px] gap-8 xl:gap-12 justify-center">
            <div className="hidden lg:block"><StickyTOC items={toc} /></div>
            <div className="min-w-0">
              <Breadcrumbs items={[{label:"Home",href:"/"},{label:"Blog",href:"/blog"},{label:post.title}]} />
              <MetaStrip author={author} date={post.date} updatedAt={post.updatedAt} readTime={post.computedReadTime} />
              <MobileTOCAccordion items={toc} />
              <div className="pt-2"><PostBody /></div>
              <ShareBarMobile url={url} title={post.title} />
              <AuthorCard author={author} />
              <EndOfArticleCTA service={post.ctaService} source={post.slug} />
            </div>
            <div className="hidden lg:block"><ShareRail url={url} title={post.title} /></div>
          </div>
          <div className="max-w-4xl mx-auto"><RelatedPosts posts={related} /></div>
        </div>
      </article>
      <Footer />
    </>
  );
}
```

#### File: `app/blog/page.tsx` — new index
3-section layout: hero band (light gray, centered headline + dek), pills + featured + grid section (white). Reads `searchParams.category` and `searchParams.limit`, filters posts, renders FeaturedPost (only when no category filter), PostGrid (3 cols), LoadMoreButton (only when no category filter).

### Verification
- `npx tsc --noEmit` clean
- `npm run build` succeeds, all routes generate, sample post `/blog/welcome-to-the-new-brio-blog` SSG'd

### Dependencies & Side Effects
- All 24 old `app/blog/{slug}/page.tsx` directories deleted via `cd app/blog && ls -d */ | grep -v "^\[" | xargs rm -rf`
- `lib/blog-posts.json` deleted (orphaned after lib/blog.ts replaced it)
- Two npm audit vulnerabilities (moderate); not addressed (would require breaking changes)

---

## Task 2: Migrate Basement-Suite Post (Hand-Crafted)

### Problem
Needed a polished proof-of-concept post showing the full template + components in action before bulk-migrating 23 more. Picked the basement-suite post because it's a clear how-to guide with natural spots for callouts.

### Solution

#### Cover image download
```bash
mkdir -p public/images/blog/how-to-add-a-legal-basement-suite-in-vancouver-a-step-by-step-guide
curl -sL "https://builtbybrio.com/wp-content/uploads/2025/06/eafc3a9f-487b-4220-bde0-657a775837f9.webp" \
  -o public/images/blog/how-to-add-a-legal-basement-suite-in-vancouver-a-step-by-step-guide/cover.webp
```

#### File: `content/blog/how-to-add-a-legal-basement-suite-in-vancouver-a-step-by-step-guide.mdx`
Frontmatter (title, slug, date 2025-06-25, updatedAt 2025-08-25, author "amir", category "BRIO Guides", tags, coverImage, coverImageAlt, excerpt, ctaService "basement"). Body manually edited from the Firecrawl scrape: removed WordPress boilerplate, tightened phrasing, demoted body H1 to H2, added one `<CalloutCard tone="key" title="Quick reference">` summarizing the BC Building Code numbers (37 m² minimum, 2.0 m ceiling, 1.83 m below grade, 45-min fire separation), and one `<PullQuote attribution="BRIO Construction">` mid-article.

### Verification
- `npm run build` succeeds, 25 routes (24 historical + welcome) generate from `content/blog/`
- Post renders with hero + body + author card + topic-matched LeadForm CTA

---

## Task 3: Bulk-Migrate Remaining 23 Posts via Scraper Script

### Problem
Doing 23 more posts by hand would take 4-6 hours and produce inconsistent quality. Needed an automated migration that produces clean MDX from each live WordPress post.

### Iterative Solution Path

**Iteration 1** — Tried using saved Firecrawl markdown + a script that cleans WP boilerplate. Abandoned because token cost of saving 23 markdown bodies (~140K tokens) was prohibitive.

**Iteration 2** — Switched to direct HTML fetch + Node-based HTML→Markdown conversion. Installed `turndown` + `jsdom`.
```bash
npm install --save-dev turndown jsdom
```

**Iteration 3** — First extractor used `articleH1.closest(".elementor-section")` which matched the page-level Elementor wrapper, returning the entire page including navbar. Many posts came back at exactly 1,482 chars (just nav + header).

**Iteration 4** — Switched to walker-based collection: `TreeWalker` from `doc.body`, gate `started = true` after passing the title H2, collect widgets matching `data-widget_type="text-editor.default"` (and friends) until reaching the "Categories" sidebar heading. Bug: termination condition `node.contains(categoriesEl)` matched `<body>` because body contains everything — broke before collecting anything. Posts came back at 278 chars (just frontmatter).

**Iteration 5** — Removed the `.contains()` ancestor check, kept only `node === categoriesEl` as the break condition (gated by `started`). Title detection used `og:title` matching by lowercase prefix — but SEO-customized OG titles diverge from on-page H2s (e.g., og:title "Energy Step Code: Embrace Your 2025 Home's Future" vs page H2 "The BC Energy Step Code is Here to Stay…"). Posts where titles diverged still failed.

**Final iteration** — Title detection uses the FIRST `.elementor-heading-title` element in document order (sidebar headings always come later). Works for all 23 posts.

#### File: `scripts/migrate-blog.mjs`
Key sections:
```js
// Per-post array — slug + ctaService + tags. All other metadata auto-derived.
const POSTS = [
  { slug: "...", ctaService: "kitchen", tags: ["kitchen","design"] }, ...
];

// Body extraction
function extractArticleBody(doc, ogTitle) {
  const headings = Array.from(doc.querySelectorAll(".elementor-heading-title"));
  const titleEl = headings[0]; // First in document order
  const categoriesEl = headings.find(h => h.textContent.trim() === "Categories");
  if (!titleEl) return doc.querySelector("article, main") || doc.body;

  const walker = doc.createTreeWalker(doc.body, dom.window.NodeFilter.SHOW_ELEMENT, null);
  const collected = []; let started = false;
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node === titleEl) { started = true; continue; }
    if (!started) continue;
    if (categoriesEl && node === categoriesEl) break;
    if (collected.some(c => c.contains(node))) continue;
    const widget = node.getAttribute && node.getAttribute("data-widget_type");
    if (!widget) continue;
    const ALLOW = new Set(["text-editor.default","heading.default","image.default","icon-list.default","image-box.default"]);
    if (!ALLOW.has(widget)) continue;
    if (widget === "heading.default") {
      const txt = node.textContent.trim();
      if (txt === "BRIO Team" || /^by BRIO Team$/i.test(txt) || /^Updated$/i.test(txt) || /^[A-Z][a-z]+ \d{1,2}, \d{4}$/.test(txt)) continue;
    }
    collected.push(node);
  }
  const container = doc.createElement("div");
  for (const el of collected) container.appendChild(el.cloneNode(true));
  return container;
}

// Cleanup pipeline (post-turndown)
function cleanMarkdown(md) {
  let body = md;
  for (const m of ["\n## Categories","\n## Recent Posts","\n## More related Content","\n## The Inside Look","\n###### Subscribe"]) {
    const idx = body.indexOf(m); if (idx !== -1) body = body.slice(0, idx);
  }
  body = body.replace(/^#{1,6}\s+(by\s+)?BRIO\s+Team\s*$/gim, "");
  body = body.replace(/^Updated\s*$/gim, "");
  body = body.replace(/^[A-Z][a-z]+ \d{1,2}, \d{4}\s*$/gm, "");
  body = body.replace(/^# ([^#].*)$/gm, "## $1");        // demote body H1 → H2
  body = body.replace(/^Image Source:.*$/gm, "");
  body = body.replace(/https:\/\/builtbybrio\.com\//g, "/");
  body = body.replace(/(\]\(\/[^)]+?)\/\)/g, "$1)");      // strip trailing slash
  body = body.replace(/^\*\s+\*\s+\*\s*$/gm, "");
  body = body.replace(/\[\s*\]\(\/[^)]+\)/g, "");
  body = body.replace(/\n{3,}/g, "\n\n");
  return body.trim();
}

// Cover image: download from og:image to public/images/blog/{slug}/cover.{ext}
// Frontmatter assembled from og:title, og:description, og:image, og:image:alt,
// article:section, article:published_time, article:modified_time
```

### Verification
- `node scripts/migrate-blog.mjs` reports `Done. 23 succeeded, 0 failed.`
- File sizes range 5,591 chars to 41,146 chars (all substantive)
- `npm run build` generates all 25 blog routes via `generateStaticParams`

### Dependencies & Side Effects
- Added `turndown` + `jsdom` as devDependencies
- `lib/blog-posts.json` was already deleted earlier; needed `git rm --cached` to clear stale tracking
- The basement-suite post is NOT in the script's POSTS array — running the script does not overwrite the hand-crafted version

---

## Task 4: Fix Blog Hero Image + Title Readability

### Problem
User screenshot showed two issues on the post page hero:
1. The cover image was so heavily darkened it was nearly black
2. The title H1 over the image was unclear / nearly invisible

### Root Causes
1. `<Image className="object-cover opacity-70" />` dimmed the image 30%
2. Full-frame gradient `bg-gradient-to-t from-brio-navy via-brio-navy/70 to-brio-navy/30` darkened on top of that
3. `<h1 className="text-white …">` was being overridden to navy because `app/globals.css:30` has an unlayered `h1, h2, h3, h4 { color: var(--color-text-dark); }` rule (`--color-text-dark` = `#1D3146` = navy). In Tailwind v4, utility classes live in a cascade layer — unlayered rules win. Same root cause as the financing-page invisible-headline bug (commit history reference).

### Solution

#### File: `components/blog/HeroCover.tsx`
```tsx
// Before
<Image className="object-cover opacity-70" />
<div className="absolute inset-0 bg-gradient-to-t from-brio-navy via-brio-navy/70 to-brio-navy/30" />
<h1 className="font-heading text-white …">

// After
<Image className="object-cover" />
<div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-transparent" />
<h1 className="font-heading !text-white …" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}>
```
Also added smaller text-shadow on the category eyebrow (`0 1px 6px`) and dek (`0 1px 8px`).

#### File: `app/blog/page.tsx`
Simplified the index hero to centered alignment and tighter copy:
```tsx
// Before
<h1 className="text-[36px] md:text-[52px] … max-w-3xl">
  Renovation guides, design ideas, and what things really cost in Metro Vancouver.
</h1>

// After
<div className="… text-center">
  <h1 className="text-[40px] md:text-[56px] … leading-[1.1] mb-4">
    Renovation guides &amp; design ideas
  </h1>
  <p className="… mx-auto">
    Practical, specific writing on Metro Vancouver renovations from the team that builds the projects.
  </p>
</div>
```

### Verification
- Visual confirmation post-deploy: cover image clear, title readable

### Dependencies & Side Effects
- The `!text-white` (Tailwind important modifier) bypasses the unlayered globals.css rule. A more architecturally correct fix would be moving the globals.css h1 rule into `@layer base { … }`, but that risks breaking other pages that depend on it. Per-component `!important` is the safer surgical fix.

---

## Task 5: Fix Frontmatter Rendering as Visible Body Content

### Problem
After Vercel deployed the migrated posts, every post displayed its YAML frontmatter (title, slug, date, tags, coverImage URL, alt text, excerpt) as a giant bold/serif/underlined heading at the top of the body. User reported via screenshot showing the multiplex post.

### Root Cause
`@next/mdx` does not handle `---...---` frontmatter natively. Without `remark-frontmatter` in the remark pipeline:
1. The leading `---` on line 1 is parsed as a thematic break OR the start of an unrecognized block
2. Lines 2-13 (the YAML key:value pairs) collapse into a single paragraph
3. The closing `---` on line 14 is parsed as a setext H2 underline (CommonMark allows `text\n---` as an H2)
4. Result: the entire frontmatter block becomes one fake H2 element
5. `rehype-autolink-headings` (configured with `behavior: "wrap"`) wraps that fake H2 in an `<a>` tag, producing the bold-underlined-serif appearance

`gray-matter` was correctly parsing the frontmatter for `lib/blog.ts` (so `getPostBySlug` returned proper title/date/etc), but `gray-matter` and `@next/mdx` are independent — `@next/mdx` reads the raw file directly.

The fix is documented in `node_modules/next/dist/docs/01-app/02-guides/mdx.md` under the "Frontmatter" section but easy to miss when copying the docs' basic config example.

### Solution

#### Install
```bash
npm install --save-dev remark-frontmatter
```

#### File: `next.config.ts`
```ts
remarkPlugins: ["remark-frontmatter", "remark-gfm"],
```
Order matters: `remark-frontmatter` must be applied first so the frontmatter is recognized as a YAML node before `remark-gfm` or any other plugin sees the content.

### Verification
- `rm -rf .next && npm run build` succeeds
- Manual page view confirms: hero (cover + title) renders at top, body starts cleanly with the actual H2 sub-heading, no visible YAML

### Dependencies & Side Effects
- Saved as long-lived feedback memory: `~/.claude/projects/-Users-amirsmacbookair-claude/memory/feedback_next_mdx_frontmatter.md` so future sessions don't rediscover this
- Hard-rule pointer added to `MEMORY.md`

---

## Out-of-Band Memory Updates

- Created `feedback_next_mdx_frontmatter.md` (long-lived gotcha)
- Updated `MEMORY.md` hard-rule index
- Progress memory `project_brio_website_rebuild.md` will be updated in Step 6 of work-report-logger
