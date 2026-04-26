"use client";

import { useEffect, useState } from "react";

/**
 * Thin progress bar fixed to the top of the viewport, tracking scroll
 * through the targeted article element. Hidden on mobile (it would
 * interfere with mobile browser chrome and adds little value on small
 * screens where total scroll length is already visible-ish).
 */
export default function ReadingProgressBar({ targetId = "blog-article" }: { targetId?: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    function onScroll() {
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const totalScrollable = target.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const pct = totalScrollable <= 0 ? 0 : Math.max(0, Math.min(100, (scrolled / totalScrollable) * 100));
      setProgress(pct);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [targetId]);

  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 right-0 z-40 h-[3px] bg-transparent pointer-events-none hidden md:block"
    >
      <div
        className="h-full bg-brio-navy transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
