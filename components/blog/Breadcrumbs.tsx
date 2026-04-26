import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[13px] text-text-muted">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((c, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${c.label}-${i}`} className="flex items-center gap-1.5">
              {c.href && !isLast ? (
                <Link href={c.href} className="hover:text-brio-navy transition-colors">
                  {c.label}
                </Link>
              ) : (
                <span className={isLast ? "text-brio-navy font-medium truncate max-w-[60vw] md:max-w-none" : ""}>{c.label}</span>
              )}
              {!isLast && <ChevronRight className="w-3.5 h-3.5 text-text-muted/60 shrink-0" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
