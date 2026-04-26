"use client";

import { useState } from "react";
import { Link as LinkIcon, Check } from "lucide-react";

// Lucide v1+ removed brand icons; inline the few we need.
function Facebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.5 2.9h-2.4v7A10 10 0 0 0 22 12z" />
    </svg>
  );
}

function Linkedin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5V9h3v10zM6.5 7.7A1.7 1.7 0 1 1 6.5 4.3a1.7 1.7 0 0 1 0 3.4zM19 19h-3v-5c0-1.2-.5-2-1.6-2-.9 0-1.4.6-1.6 1.2-.1.2-.1.4-.1.7V19h-3V9h3v1.3c.4-.6 1.1-1.5 2.7-1.5 2 0 3.5 1.3 3.5 4V19z" />
    </svg>
  );
}

interface ShareRailProps {
  url: string;
  title: string;
}

function PinterestIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0a12 12 0 0 0-4.4 23.2c-.1-1-.2-2.4 0-3.5l1.5-6.4s-.4-.7-.4-1.8c0-1.7 1-3 2.2-3 1 0 1.5.8 1.5 1.7 0 1-.7 2.6-1 4-.3 1.2.6 2.2 1.8 2.2 2.2 0 3.8-2.3 3.8-5.6 0-3-2.1-5-5.1-5-3.5 0-5.6 2.6-5.6 5.4 0 1 .4 2.2 1 2.8.1.1.1.2.1.3l-.4 1.4c0 .2-.1.3-.4.2-1.4-.7-2.3-2.7-2.3-4.4 0-3.5 2.6-6.8 7.4-6.8 3.9 0 6.9 2.8 6.9 6.5 0 3.9-2.4 7-5.8 7-1.1 0-2.2-.6-2.5-1.3l-.7 2.6c-.3 1-.9 2.3-1.4 3.1A12 12 0 1 0 12 0z" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25h6.83l4.713 6.231 5.447-6.231Zm-1.16 17.52h1.833L7.084 4.126H5.117L17.084 19.77Z" />
    </svg>
  );
}

/**
 * Floating share rail for desktop. Mobile uses ShareBarMobile + native Web Share API.
 * Pinterest is included because home-renovation/design content shares well there.
 */
export default function ShareRail({ url, title }: ShareRailProps) {
  const [copied, setCopied] = useState(false);
  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  function copyLink() {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  const buttonCls =
    "w-10 h-10 flex items-center justify-center bg-white border border-border text-text-muted hover:bg-brio-navy hover:text-white hover:border-brio-navy transition-colors";

  return (
    <div className="hidden lg:block sticky top-32 max-h-[calc(100vh-9rem)]">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-muted mb-3 text-center">
        Share
      </p>
      <div className="flex flex-col gap-2 items-center">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encoded}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
          className={buttonCls}
        >
          <Facebook className="w-4 h-4" />
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className={buttonCls}
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X"
          className={buttonCls}
        >
          <XIcon className="w-4 h-4" />
        </a>
        <a
          href={`https://pinterest.com/pin/create/button/?url=${encoded}&description=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Pinterest"
          className={buttonCls}
        >
          <PinterestIcon className="w-4 h-4" />
        </a>
        <button onClick={copyLink} aria-label="Copy link" className={buttonCls}>
          {copied ? <Check className="w-4 h-4 text-green-600" /> : <LinkIcon className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
