"use client";

import { useState } from "react";
import { Share2, Link as LinkIcon, Check } from "lucide-react";

interface ShareBarMobileProps {
  url: string;
  title: string;
}

/**
 * Inline share bar shown at the END of mobile articles only. Uses the
 * native Web Share API where available (iOS, Android) and falls back to
 * copy-link otherwise. We deliberately don't use a sticky bottom bar — it
 * eats too much screen real estate on small devices.
 */
export default function ShareBarMobile({ url, title }: ShareBarMobileProps) {
  const [copied, setCopied] = useState(false);

  async function shareNative() {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // User cancelled — no-op.
      }
    } else {
      copyLink();
    }
  }

  function copyLink() {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="lg:hidden flex items-center gap-3 my-10 py-4 border-y border-border">
      <span className="text-[12px] font-semibold uppercase tracking-wider text-text-muted">Share</span>
      <button
        onClick={shareNative}
        className="flex items-center gap-2 px-4 py-2 bg-brio-navy text-white text-[13px] font-semibold uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
      >
        <Share2 className="w-4 h-4" />
        Share article
      </button>
      <button
        onClick={copyLink}
        className="flex items-center gap-2 px-4 py-2 border border-border text-brio-navy text-[13px] font-semibold uppercase tracking-wide hover:border-brio-navy transition-colors"
      >
        {copied ? <Check className="w-4 h-4" /> : <LinkIcon className="w-4 h-4" />}
        {copied ? "Copied" : "Copy link"}
      </button>
    </div>
  );
}
