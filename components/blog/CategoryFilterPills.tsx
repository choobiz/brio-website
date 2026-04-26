"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

interface CategoryFilterPillsProps {
  categories: string[];
}

export default function CategoryFilterPills({ categories }: CategoryFilterPillsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const active = params.get("category");

  function setCategory(category: string | null) {
    const next = new URLSearchParams(params.toString());
    if (category) next.set("category", category);
    else next.delete("category");
    next.delete("limit"); // reset load-more on category change
    const qs = next.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  const pillCls = (isActive: boolean) =>
    `px-4 py-2 text-[13px] font-semibold uppercase tracking-wide whitespace-nowrap transition-colors ${
      isActive
        ? "bg-brio-navy text-white"
        : "bg-white text-text-body border border-border hover:border-brio-navy hover:text-brio-navy"
    }`;

  return (
    <div className="flex flex-wrap gap-2">
      <button onClick={() => setCategory(null)} className={pillCls(!active)}>
        All
      </button>
      {categories.map((cat) => (
        <button key={cat} onClick={() => setCategory(cat)} className={pillCls(active === cat)}>
          {cat}
        </button>
      ))}
    </div>
  );
}
