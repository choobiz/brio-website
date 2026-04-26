#!/usr/bin/env node
// Bulk-migrate WordPress blog posts to MDX.
//
// Fetches HTML directly from builtbybrio.com, extracts the article body via
// jsdom, converts to Markdown via turndown, cleans WordPress-specific
// boilerplate, downloads cover images, and writes complete MDX files with
// frontmatter to content/blog/{slug}.mdx.
//
// Usage: node scripts/migrate-blog.mjs

import fs from "node:fs";
import path from "node:path";
import https from "node:https";
import { JSDOM } from "jsdom";
import TurndownService from "turndown";

const PROJECT_ROOT = "/Users/amirsmacbookair/claude/brio-website";
const CONTENT_DIR = path.join(PROJECT_ROOT, "content/blog");
const PUBLIC_IMG_DIR = path.join(PROJECT_ROOT, "public/images/blog");
const BASE = "https://builtbybrio.com";

/**
 * Per-post metadata. `slug` only is required — everything else is auto-derived
 * from the live HTML's OG tags. Override fields here only when the auto value
 * is wrong (e.g., to set a more specific ctaService or cleaner tag list).
 *
 * `ctaService` and `tags` MUST be set per post — they're not in the source.
 */
const POSTS = [
  { slug: "2024-chba-municipal-benchmarking-vancouver-surrey-burnaby-in-focus", ctaService: "general", tags: ["vancouver", "policy", "permits"] },
  { slug: "5-proven-kitchen-design-tips-for-a-timeless-look-2025-guide", ctaService: "kitchen", tags: ["kitchen", "design"] },
  { slug: "5-vancouver-special-renovation-ideas-to-modernize-your-home", ctaService: "home-renovations", tags: ["vancouver", "renovation", "design"] },
  { slug: "7-home-maintenance-tips-vancouver", ctaService: "home-renovations", tags: ["maintenance", "vancouver"] },
  { slug: "7-renovation-mistakes-to-avoid", ctaService: "home-renovations", tags: ["renovation", "mistakes"] },
  { slug: "7-small-kitchen-island-ideas-to-maximize-style-and-function", ctaService: "kitchen", tags: ["kitchen", "design", "small-spaces"] },
  { slug: "7-tips-to-a-smart-home-renovation-budget", ctaService: "home-renovations", tags: ["renovation", "budget"] },
  { slug: "bc-construction-labor-shortage-crisis-or-opportunity-in-2025", ctaService: "general", tags: ["industry", "bc", "labor"] },
  { slug: "build-with-boldness-mean", ctaService: "general", tags: ["brio"] },
  { slug: "building-integrated-photovoltaics-bipv-net-zero-homes-bc", ctaService: "custom-home", tags: ["solar", "energy-efficient", "high-performance"] },
  { slug: "construction-project-manager-responsibilities", ctaService: "general", tags: ["project-management", "industry"] },
  { slug: "home-renovations-that-increase-property-value", ctaService: "home-renovations", tags: ["renovation", "home-value", "roi"] },
  { slug: "how-to-ensure-successful-contractor-selection", ctaService: "general", tags: ["contractor", "renovation"] },
  { slug: "how-to-spot-early-signs-of-structural-damage-in-your-home", ctaService: "home-renovations", tags: ["maintenance", "structural", "inspection"] },
  { slug: "multi-generational-home-transformation", ctaService: "home-renovations", tags: ["renovation", "design", "family"] },
  { slug: "the-bc-energy-step-code-is-here-to-stay-what-it-means-for-your-2025-home-renovation", ctaService: "home-renovations", tags: ["energy", "bc", "renovation", "policy"] },
  { slug: "thinking-of-building-a-laneway-house-in-vancouver-read-this-first", ctaService: "laneway", tags: ["laneway", "vancouver", "permits"] },
  { slug: "timeless-kitchen-design-trends-2025", ctaService: "kitchen", tags: ["kitchen", "design", "trends"] },
  { slug: "top-7-kitchen-remodeling-tips-for-homeowners", ctaService: "kitchen", tags: ["kitchen", "renovation"] },
  { slug: "us-tariffs-impact-on-bc-construction-costs", ctaService: "general", tags: ["industry", "bc", "costs"] },
  { slug: "vancouver-building-permits-essential-guide", ctaService: "home-renovations", tags: ["vancouver", "permits", "renovation"] },
  { slug: "vancouver-multiplex-properties-expert-guide-to-evaluate-your-lots-potential", ctaService: "custom-home", tags: ["vancouver", "multiplex", "land-development"] },
  { slug: "whats-the-real-cost-of-a-home-renovation-in-vancouver-2025-guide", ctaService: "home-renovations", tags: ["vancouver", "renovation", "costs"] },
];

function fetchUrl(url, redirectsLeft = 3) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "Mozilla/5.0 BrioMigrationBot" } }, (res) => {
        if ((res.statusCode === 301 || res.statusCode === 302) && redirectsLeft > 0) {
          return resolve(fetchUrl(res.headers.location, redirectsLeft - 1));
        }
        if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        let data = "";
        res.setEncoding("utf8");
        res.on("data", (c) => (data += c));
        res.on("end", () => resolve(data));
      })
      .on("error", reject);
  });
}

function downloadBinary(url, dest, redirectsLeft = 3) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "Mozilla/5.0 BrioMigrationBot" } }, (res) => {
        if ((res.statusCode === 301 || res.statusCode === 302) && redirectsLeft > 0) {
          return resolve(downloadBinary(res.headers.location, dest, redirectsLeft - 1));
        }
        if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on("finish", () => file.close(() => resolve(dest)));
        file.on("error", reject);
      })
      .on("error", reject);
  });
}

function extractMeta(doc, prop) {
  const el =
    doc.querySelector(`meta[property="${prop}"]`) ||
    doc.querySelector(`meta[name="${prop}"]`);
  return el ? el.getAttribute("content") : null;
}

function extractArticleBody(doc, ogTitle) {
  // Builtbybrio's posts are rendered through Elementor: the title is an <h2>
  // with class `elementor-heading-title`, body content lives in
  // `data-widget_type="text-editor.default"` widgets, and the sidebar starts
  // with another heading whose text is "Categories". The article body is the
  // run of widgets between those two headings in document order.
  const headings = Array.from(doc.querySelectorAll(".elementor-heading-title"));

  // The article title heading is reliably the FIRST `.elementor-heading-title`
  // in the document (sidebar headings like "Categories", "Recent Posts" come
  // later). The OG title may be SEO-optimized and differ from the on-page H2,
  // so we don't depend on it for matching.
  const titleEl = headings[0];
  const categoriesEl = headings.find((h) => h.textContent.trim() === "Categories");

  if (!titleEl) {
    return doc.querySelector("article, main") || doc.body;
  }

  // Walk forward from the title's containing widget through the document and
  // collect all body widgets until we hit the "Categories" heading or run out.
  // Use a TreeWalker to iterate elements in document order.
  const walker = doc.createTreeWalker(doc.body, dom.window.NodeFilter.SHOW_ELEMENT, null);
  const collected = [];
  let started = false;
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node === titleEl) {
      started = true;
      continue; // Skip the title itself — frontmatter handles the title.
    }
    if (!started) continue;
    // Stop only when we reach the categories heading itself (after we've started
    // collecting body widgets). Don't use `.contains()` on ancestors — that
    // would match the <body> element and break before we collect anything.
    if (categoriesEl && node === categoriesEl) break;
    if (collected.some((c) => c.contains(node))) continue; // Already inside a captured ancestor.

    const widget = node.getAttribute && node.getAttribute("data-widget_type");
    if (!widget) continue;
    // Whitelist body widgets only — exclude breadcrumbs, share-buttons, posts grids, forms, mega-menu, etc.
    const ALLOW = new Set([
      "text-editor.default",
      "heading.default",
      "image.default",
      "icon-list.default",
      "image-box.default",
    ]);
    if (!ALLOW.has(widget)) continue;
    // Skip "BRIO Team" byline + date heading (small heading widgets near the top).
    if (widget === "heading.default") {
      const txt = node.textContent.trim();
      if (txt === "BRIO Team" || /^by BRIO Team$/i.test(txt) || /^Updated$/i.test(txt) || /^[A-Z][a-z]+ \d{1,2}, \d{4}$/.test(txt)) {
        continue;
      }
    }
    collected.push(node);
  }

  if (collected.length === 0) {
    return doc.querySelector("article, main") || doc.body;
  }

  const container = doc.createElement("div");
  for (const el of collected) container.appendChild(el.cloneNode(true));
  return container;
}

// Module-scoped reference so extractArticleBody can read NodeFilter from jsdom.
let dom;

function buildTurndown() {
  const td = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
    bulletListMarker: "-",
    emDelimiter: "_",
    linkStyle: "inlined",
  });
  // Strip Elementor decoration.
  td.remove(["script", "style", "noscript", "iframe", "form"]);
  td.addRule("strip-empty-images", {
    filter: (node) => node.nodeName === "IMG" && (!node.getAttribute("src") || node.getAttribute("src").startsWith("data:")),
    replacement: () => "",
  });
  return td;
}

function cleanMarkdown(md) {
  let body = md;

  // 1. Cut off everything from these footer/sidebar markers.
  const cuts = ["\n## Categories", "\n## Recent Posts", "\n## More related Content", "\n## The Inside Look", "\n###### Subscribe"];
  for (const m of cuts) {
    const idx = body.indexOf(m);
    if (idx !== -1) body = body.slice(0, idx);
  }

  // 2. Drop "by BRIO Team" / "BRIO Team" lines at any heading level.
  body = body.replace(/^#{1,6}\s+(by\s+)?BRIO\s+Team\s*$/gim, "");

  // 3. Drop date-only paragraph lines like "July 13, 2025" or "Updated\nMarch 19, 2025".
  body = body.replace(/^Updated\s*$/gim, "");
  body = body.replace(/^[A-Z][a-z]+ \d{1,2}, \d{4}\s*$/gm, "");

  // 4. Drop body-level H1s — the article title is rendered by HeroCover
  //    from frontmatter, not the body. Demote any inner H1 to H2 instead of
  //    dropping it (preserves content) for readability.
  body = body.replace(/^# ([^#].*)$/gm, "## $1");

  // 5. Drop "Image Source:" attribution lines (orphans from base64-stripped images).
  body = body.replace(/^Image Source:.*$/gm, "");

  // 6. Convert internal absolute URLs → relative paths.
  body = body.replace(/https:\/\/builtbybrio\.com\//g, "/");
  body = body.replace(/(\]\(\/[^)]+?)\/\)/g, "$1)"); // strip trailing slash

  // 7. Strip horizontal rule separators that came from <hr> in the source.
  body = body.replace(/^\*\s+\*\s+\*\s*$/gm, "");

  // 8. Strip empty link wrappers like `[\n\n](/some-path)` that come from
  //    image links whose images were stripped.
  body = body.replace(/\[\s*\]\(\/[^)]+\)/g, "");

  // 9. Squeeze excess blank lines.
  body = body.replace(/\n{3,}/g, "\n\n");

  return body.trim();
}

function escapeYaml(s) {
  return (s ?? "").replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function isoDate(s) {
  if (!s) return new Date().toISOString().slice(0, 10);
  return s.slice(0, 10);
}

async function processPost(post) {
  const url = `${BASE}/${post.slug}/`;
  console.log(`→ ${post.slug}`);

  let html;
  try {
    html = await fetchUrl(url);
  } catch (e) {
    console.warn(`  ✗ fetch failed: ${e.message}`);
    return false;
  }

  dom = new JSDOM(html);
  const doc = dom.window.document;

  const ogTitle = (extractMeta(doc, "og:title") || "").replace(/ - BRIO Construction$/, "").trim();
  const ogDesc = (extractMeta(doc, "og:description") || extractMeta(doc, "description") || "").trim();
  const ogImage = extractMeta(doc, "og:image:secure_url") || extractMeta(doc, "og:image");
  const ogImageAlt = extractMeta(doc, "og:image:alt") || ogTitle;
  const ogSection = extractMeta(doc, "article:section") || "BRIO Guides";
  const published = extractMeta(doc, "article:published_time");
  const modified = extractMeta(doc, "article:modified_time");

  if (!ogTitle || !ogImage) {
    console.warn(`  ✗ missing OG metadata`);
    return false;
  }

  // Convert article body to markdown.
  const bodyEl = extractArticleBody(doc, ogTitle);
  const td = buildTurndown();
  let md = td.turndown(bodyEl.innerHTML);
  md = cleanMarkdown(md);

  // Download cover image.
  const ext = path.extname(ogImage.split("?")[0]).toLowerCase() || ".jpg";
  const safeExt = [".webp", ".jpg", ".jpeg", ".png"].includes(ext) ? ext : ".jpg";
  const imgDir = path.join(PUBLIC_IMG_DIR, post.slug);
  fs.mkdirSync(imgDir, { recursive: true });
  const imgFilePath = path.join(imgDir, `cover${safeExt}`);
  if (!fs.existsSync(imgFilePath)) {
    try {
      await downloadBinary(ogImage, imgFilePath);
    } catch (e) {
      console.warn(`  ✗ cover image failed: ${e.message}`);
    }
  }
  const localImage = `/images/blog/${post.slug}/cover${safeExt}`;

  // Map WordPress category names to friendlier blog categories.
  const CATEGORY_MAP = {
    "BRIO Design & Data": "BRIO Design & Data",
    "BRIO Guides": "BRIO Guides",
    "BRIO News": "BRIO News",
    "Home Renovation": "Home Renovation",
    "Kitchen Remodeling": "Kitchen Remodeling",
    "Bathroom Remodeling": "Bathroom Remodeling",
    "BRIO Behind the Build": "BRIO Behind the Build",
  };
  const category = CATEGORY_MAP[ogSection] || ogSection;

  const fm = `---
title: "${escapeYaml(ogTitle)}"
slug: "${post.slug}"
date: "${isoDate(published)}"
updatedAt: "${isoDate(modified)}"
author: "amir"
category: "${escapeYaml(category)}"
tags: ${JSON.stringify(post.tags)}
coverImage: "${localImage}"
coverImageAlt: "${escapeYaml(ogImageAlt)}"
excerpt: "${escapeYaml(ogDesc)}"
ctaService: "${post.ctaService}"
draft: false
---

${md}
`;

  const mdxPath = path.join(CONTENT_DIR, `${post.slug}.mdx`);
  fs.writeFileSync(mdxPath, fm);
  console.log(`  ✓ wrote ${path.basename(mdxPath)} (${md.length.toLocaleString()} chars)`);
  return true;
}

async function main() {
  let ok = 0;
  let fail = 0;
  for (const post of POSTS) {
    const success = await processPost(post);
    if (success) ok++;
    else fail++;
  }
  console.log(`\nDone. ${ok} succeeded, ${fail} failed.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
