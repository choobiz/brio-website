import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";
import { SERVICES, AREAS } from "@/lib/constants";
import { PROJECTS } from "@/lib/projects";

const BASE_URL = "https://builtbybrio.com";

function blogSlugs(): string[] {
  const dir = path.join(process.cwd(), "app/blog");
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths = [
    "",
    "/about-us",
    "/areas-we-serve",
    "/blog",
    "/financing",
    "/privacy-policy",
    "/projects",
    "/services",
    "/terms-of-use",
  ];

  const servicePaths = SERVICES.map((s) => `/${s.slug}`);
  const areaPaths = AREAS.map((a) => `/${a.slug}`);
  const projectPaths = PROJECTS.map((p) => `/projects/${p.slug}`);
  const blogPaths = blogSlugs().map((s) => `/blog/${s}`);

  const all = [
    ...staticPaths,
    ...servicePaths,
    ...areaPaths,
    ...projectPaths,
    ...blogPaths,
  ];

  return all.map((p) => ({
    url: `${BASE_URL}${p}`,
    lastModified: now,
    changeFrequency: p.startsWith("/blog/") ? "monthly" : "weekly",
    priority:
      p === ""
        ? 1.0
        : servicePaths.includes(p) || areaPaths.includes(p)
        ? 0.8
        : p.startsWith("/projects/")
        ? 0.7
        : p.startsWith("/blog/")
        ? 0.6
        : 0.5,
  }));
}
