import Image from "next/image";
import Link from "next/link";
import type { Author } from "@/lib/authors";
import { Clock } from "lucide-react";

interface MetaStripProps {
  author: Author;
  date: string;
  updatedAt?: string;
  readTime: number;
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" });
}

export default function MetaStrip({ author, date, updatedAt, readTime }: MetaStripProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-text-muted py-5 border-b border-border">
      <div className="flex items-center gap-2.5">
        {author.avatar && (
          <Image
            src={author.avatar}
            alt={author.name}
            width={32}
            height={32}
            className="rounded-full object-cover w-8 h-8"
          />
        )}
        <span className="text-brio-navy font-semibold">{author.name}</span>
      </div>
      <span className="text-border">·</span>
      <time dateTime={date}>{formatDate(date)}</time>
      {updatedAt && updatedAt !== date && (
        <>
          <span className="text-border">·</span>
          <span className="italic">Updated {formatDate(updatedAt)}</span>
        </>
      )}
      <span className="text-border">·</span>
      <span className="flex items-center gap-1">
        <Clock className="w-3.5 h-3.5" />
        {readTime} min read
      </span>
      <Link
        href="#blog-end"
        className="ml-auto text-brio-navy text-[12px] font-semibold uppercase tracking-wide hover:underline"
      >
        Jump to estimate &darr;
      </Link>
    </div>
  );
}
