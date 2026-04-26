import type { ReactNode } from "react";

interface PullQuoteProps {
  children: ReactNode;
  attribution?: string;
}

export default function PullQuote({ children, attribution }: PullQuoteProps) {
  return (
    <figure className="my-10 md:my-12 md:-mx-12">
      <blockquote className="border-l-4 border-brio-navy pl-6 md:pl-8">
        <p className="font-heading text-brio-navy text-[22px] md:text-[28px] font-semibold leading-tight italic">
          &ldquo;{children}&rdquo;
        </p>
        {attribution && (
          <figcaption className="mt-3 text-text-muted text-[13px] uppercase tracking-wide font-semibold">
            — {attribution}
          </figcaption>
        )}
      </blockquote>
    </figure>
  );
}
