"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image src="/images/logo.png" alt={COMPANY.name} width={140} height={48} className="h-12 w-auto" priority />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.href} className="text-[15px] font-medium text-text-secondary hover:text-brio-blue transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Phone + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${COMPANY.phoneClean}`} className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-brio-blue transition-colors">
              <Phone className="w-4 h-4" />
              {COMPANY.phone}
            </a>
            <Link href="/about-us#get-in-touch" className="inline-flex items-center h-10 px-5 bg-brio-blue text-white text-sm font-semibold rounded-lg hover:bg-brio-blue/90 transition-colors">
              Get Free Estimate
            </Link>
          </div>

          {/* Mobile */}
          <div className="flex lg:hidden items-center gap-2">
            <a href={`tel:${COMPANY.phoneClean}`} className="w-10 h-10 flex items-center justify-center text-brio-navy" aria-label="Call">
              <Phone className="w-5 h-5" />
            </a>
            <button onClick={() => setOpen(!open)} className="w-10 h-10 flex items-center justify-center text-brio-navy" aria-label="Menu">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.href} className="block py-3 text-base font-medium text-brio-navy hover:text-brio-blue" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/about-us#get-in-touch" className="block w-full text-center mt-4 py-3 bg-brio-blue text-white font-semibold rounded-lg" onClick={() => setOpen(false)}>
              Get Free Estimate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
