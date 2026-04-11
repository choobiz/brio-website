"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services" },
  { label: "ABOUT US", href: "/about-us" },
  { label: "PROJECTS", href: "/projects" },
  { label: "FINANCING", href: "/financing" },
  { label: "BRIO BLOG", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between" style={{ height: "76px" }}>
          <Link href="/" className="shrink-0">
            <Image src="/images/logo.png" alt={COMPANY.name} width={160} height={50} className="h-[50px] w-auto" priority />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[14px] font-medium text-white/90 hover:text-white transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Phone */}
          <a
            href={`tel:${COMPANY.phoneClean}`}
            className="hidden lg:flex items-center gap-2 text-[14px] font-medium text-white/90 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            {COMPANY.phone}
          </a>

          {/* Mobile toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a href={`tel:${COMPANY.phoneClean}`} className="w-10 h-10 flex items-center justify-center text-white" aria-label="Call">
              <Phone className="w-5 h-5" />
            </a>
            <button onClick={() => setOpen(!open)} className="w-10 h-10 flex items-center justify-center text-white" aria-label="Menu">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-brio-navy/95 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-1">
            {NAV_ITEMS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block py-3 text-[15px] font-medium text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
