import Image from "next/image";
import type { Author } from "@/lib/authors";

export default function AuthorCard({ author }: { author: Author }) {
  return (
    <div className="my-12 p-6 md:p-8 bg-brio-light-gray flex flex-col sm:flex-row gap-5 sm:items-center">
      {author.avatar && (
        <Image
          src={author.avatar}
          alt={author.name}
          width={88}
          height={88}
          className="rounded-full object-cover w-20 h-20 shrink-0"
        />
      )}
      <div className="flex-1">
        <p className="text-[12px] uppercase tracking-[0.2em] text-text-muted font-semibold mb-1.5">
          Written by
        </p>
        <p className="font-heading text-brio-navy text-[20px] font-semibold leading-tight">
          {author.name}
        </p>
        <p className="text-text-muted text-[13px] mb-2">{author.role}</p>
        <p className="text-text-body text-[14px] leading-relaxed">{author.bio}</p>
      </div>
    </div>
  );
}
