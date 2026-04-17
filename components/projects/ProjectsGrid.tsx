"use client";

import { useState, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export type ProjectCard = {
  name: string;
  type: "Commercial" | "Residential";
  year: string;
  projectType: string;
  image: string;
  slug: string;
  excerpt: string;
};

const FILTERS = ["All", "Commercial", "Residential"] as const;
export type ProjectFilter = (typeof FILTERS)[number];

export default function ProjectsGrid({
  projects,
  initialFilter,
}: {
  projects: ProjectCard[];
  initialFilter: ProjectFilter;
}) {
  const [active, setActive] = useState<ProjectFilter>(initialFilter);
  const [, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  const handleFilter = (f: ProjectFilter) => {
    setActive(f);
    const params = new URLSearchParams();
    if (f !== "All") params.set("type", f.toLowerCase());
    const query = params.toString();
    const href = query ? `${pathname}?${query}` : pathname;
    startTransition(() => {
      router.replace(href, { scroll: false });
    });
  };

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.type === active);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center gap-6 mb-12">
          {FILTERS.map((f) => {
            const isActive = active === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => handleFilter(f)}
                aria-pressed={isActive}
                className={
                  isActive
                    ? "text-brio-navy text-[14px] font-semibold border-b-2 border-brio-navy pb-1"
                    : "text-text-muted text-[14px] font-medium hover:text-brio-navy transition-colors border-b-2 border-transparent pb-1"
                }
              >
                {f}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-4">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-brio-navy text-[16px] font-bold font-heading uppercase tracking-wide mb-1">
                {p.name}
              </h3>
              <p className="text-text-muted text-[11px] uppercase tracking-wide mb-2">
                {p.projectType} · {p.year}
              </p>
              <p className="text-text-body text-[13px] leading-relaxed mb-3">
                {p.excerpt}
              </p>
              <span className="text-brio-navy text-[13px] font-bold uppercase tracking-wide group-hover:underline">
                Learn More
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
