"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { COMPANY, SERVICES, AREAS } from "@/lib/constants";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Our Services",
    href: "/services",
    dropdown: SERVICES.map((s) => ({ label: s.name, href: `/${s.slug}` })),
  },
  { label: "Projects", href: "/projects" },
  {
    label: "Areas We Serve",
    href: "/areas-we-serve",
    dropdown: AREAS.map((a) => ({ label: a.name, href: `/${a.slug}` })),
  },
  { label: "About", href: "/about-us" },
  { label: "Blog", href: "/blog" },
  { label: "Financing", href: "/financing" },
];

function DesktopDropdown({
  item,
  open,
  onEnter,
  onLeave,
}: {
  item: NavItem;
  open: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (timeout.current) clearTimeout(timeout.current);
    onEnter();
  };

  const handleLeave = () => {
    timeout.current = setTimeout(onLeave, 150);
  };

  useEffect(() => {
    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, []);

  if (!item.dropdown) {
    return (
      <Link
        href={item.href}
        className="text-[13px] font-semibold text-brio-navy hover:text-brio-navy/70 transition-colors tracking-wide uppercase"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <Link
        href={item.href}
        className="flex items-center gap-1 text-[13px] font-semibold text-brio-navy hover:text-brio-navy/70 transition-colors tracking-wide uppercase"
      >
        {item.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </Link>

      {open && (
        <div className="absolute top-full left-0 pt-2 z-50">
          <div className="bg-white rounded shadow-lg border border-gray-100 py-2 min-w-[260px]">
            {item.dropdown.map((sub) => (
              <Link
                key={sub.href}
                href={sub.href}
                className="block px-4 py-2.5 text-[13px] text-gray-700 hover:bg-gray-50 hover:text-brio-navy transition-colors"
              >
                {sub.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt={COMPANY.name}
              width={140}
              height={50}
              className="h-[50px] w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-5">
            {NAV_ITEMS.map((item) => (
              <DesktopDropdown
                key={item.label}
                item={item}
                open={openDropdown === item.label}
                onEnter={() => setOpenDropdown(item.label)}
                onLeave={() => setOpenDropdown(null)}
              />
            ))}
          </div>

          {/* Phone + Get a Quote */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${COMPANY.phoneClean}`}
              className="flex items-center gap-2 text-[13px] font-semibold text-brio-navy hover:text-brio-navy/70 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {COMPANY.phone}
            </a>
            <Link
              href="/about-us#get-in-touch"
              className="bg-brio-navy text-white text-[13px] font-semibold px-5 py-2.5 hover:bg-brio-navy/90 transition-colors uppercase tracking-wide"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${COMPANY.phoneClean}`}
              className="w-10 h-10 flex items-center justify-center text-brio-navy"
              aria-label="Call"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-10 h-10 flex items-center justify-center text-brio-navy"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-brio-navy/95 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-1">
            <Link
              href="/"
              className="block py-3 text-[15px] font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            {NAV_ITEMS.map((item) =>
              item.dropdown ? (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                    }
                    className="flex items-center justify-between w-full py-3 text-[15px] font-medium text-white"
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileExpanded === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="pl-4 pb-2 space-y-1">
                      <Link
                        href={item.href}
                        className="block py-2 text-[14px] text-white/80 hover:text-white"
                        onClick={() => setMobileOpen(false)}
                      >
                        View All
                      </Link>
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block py-2 text-[14px] text-white/80 hover:text-white"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block py-3 text-[15px] font-medium text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/about-us#get-in-touch"
              className="block mt-4 text-center bg-white text-brio-navy text-[14px] font-semibold py-3 uppercase tracking-wide"
              onClick={() => setMobileOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
