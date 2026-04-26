"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

interface LoadMoreButtonProps {
  pageSize: number;
  currentLimit: number;
  totalCount: number;
}

export default function LoadMoreButton({ pageSize, currentLimit, totalCount }: LoadMoreButtonProps) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  if (currentLimit >= totalCount) return null;

  function loadMore() {
    const next = new URLSearchParams(params.toString());
    next.set("limit", String(currentLimit + pageSize));
    router.push(`${pathname}?${next.toString()}`, { scroll: false });
  }

  return (
    <div className="flex justify-center mt-12">
      <button
        onClick={loadMore}
        className="px-8 py-3 border-2 border-brio-navy text-brio-navy text-[13px] font-semibold uppercase tracking-wide hover:bg-brio-navy hover:text-white transition-colors"
      >
        Load more articles
      </button>
    </div>
  );
}
