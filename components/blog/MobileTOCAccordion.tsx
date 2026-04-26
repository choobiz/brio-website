"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface TOCItem {
  id: string;
  text: string;
  level: 2 | 3;
}

export default function MobileTOCAccordion({ items }: { items: TOCItem[] }) {
  const [open, setOpen] = useState(false);
  if (items.length === 0) return null;

  return (
    <details
      className="lg:hidden border border-border bg-brio-light-gray mb-8"
      open={open}
      onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}
    >
      <summary className="flex items-center justify-between cursor-pointer list-none px-4 py-3 text-brio-navy text-[13px] font-semibold uppercase tracking-wide">
        Table of contents
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </summary>
      <ul className="px-4 pb-4 space-y-2">
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? "pl-4" : ""}>
            <a
              href={`#${item.id}`}
              className="block text-[14px] text-text-body hover:text-brio-navy py-0.5"
              onClick={() => setOpen(false)}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
