"use client";

// Cloudflare Turnstile widget. Invisible/low-friction bot check; the token is
// verified server-side in /api/lead. Defaults to Cloudflare's "always passes"
// TEST site key so the form works before real keys are set — swap in the real
// key via NEXT_PUBLIC_TURNSTILE_SITE_KEY (and TURNSTILE_SECRET_KEY on the server)
// to turn on real protection.

import { useEffect, useRef } from "react";

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA";
const SCRIPT_ID = "cf-turnstile-script";

interface TurnstileAPI {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string;
}
declare global {
  interface Window { turnstile?: TurnstileAPI }
}

export default function Turnstile({ onToken }: { onToken: (token: string) => void }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const cbRef = useRef(onToken);
  cbRef.current = onToken;
  const done = useRef(false);

  useEffect(() => {
    function render() {
      if (done.current || !boxRef.current || !window.turnstile) return;
      done.current = true;
      window.turnstile.render(boxRef.current, {
        sitekey: SITE_KEY,
        callback: (t: string) => cbRef.current(t),
        "error-callback": () => cbRef.current(""),
        "expired-callback": () => cbRef.current(""),
      });
    }
    if (window.turnstile) { render(); return; }
    if (!document.getElementById(SCRIPT_ID)) {
      const s = document.createElement("script");
      s.id = SCRIPT_ID;
      s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      s.async = true; s.defer = true;
      s.onload = render;
      document.head.appendChild(s);
    } else {
      const iv = setInterval(() => { if (window.turnstile) { clearInterval(iv); render(); } }, 200);
      return () => clearInterval(iv);
    }
  }, []);

  return <div ref={boxRef} className="my-1" />;
}
