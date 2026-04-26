"use client";

import { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  text: string;
  level: 2 | 3;
}

interface StickyTOCProps {
  items: TOCItem[];
}

/**
 * Desktop-only sticky table of contents. Highlights the heading currently
 * closest to the top of the viewport via IntersectionObserver. Hidden on
 * <lg breakpoints — mobile uses MobileTOCAccordion instead.
 */
export default function StickyTOC({ items }: StickyTOCProps) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);

  useEffect(() => {
    if (items.length === 0) return;
    const observers: IntersectionObserver[] = [];
    const visible = new Map<string, number>();

    function pickActive() {
      let best: string | null = null;
      let bestRatio = -1;
      visible.forEach((ratio, id) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          best = id;
        }
      });
      if (best) setActiveId(best);
    }

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visible.set(item.id, entry.intersectionRatio);
            } else {
              visible.delete(item.id);
            }
          });
          pickActive();
        },
        { rootMargin: "-80px 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  if (items.length === 0) return null;

  return (
    <aside className="hidden lg:block sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-muted mb-4">
        On this page
      </p>
      <ul className="space-y-2 border-l border-border">
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <li key={item.id} className={item.level === 3 ? "pl-3" : ""}>
              <a
                href={`#${item.id}`}
                className={`block -ml-px pl-4 py-1 border-l-2 text-[13px] leading-snug transition-colors ${
                  isActive
                    ? "border-brio-navy text-brio-navy font-semibold"
                    : "border-transparent text-text-muted hover:text-brio-navy"
                }`}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
