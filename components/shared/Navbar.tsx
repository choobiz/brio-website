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
  twoColumn?: boolean;
  customDropdown?: "about";
}

const SERVICE_DROPDOWN_SLUGS = [
  "custom-home-construction",
  "spec-home-construction",
  "laneway-home-construction",
  "home-additions-extensions",
  "commercial-renovations",
  "home-renovations",
  "painting-services",
  "kitchen-remodeling",
  "bathroom-remodeling",
  "basement-remodeling",
  "high-performance-homes",
  "strata-services",
  "land-development-pre-construction",
] as const;

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us", customDropdown: "about" },
  {
    label: "Services",
    href: "/services",
    dropdown: SERVICES.filter((s) =>
      (SERVICE_DROPDOWN_SLUGS as readonly string[]).includes(s.slug)
    ).map((s) => ({ label: s.name, href: `/${s.slug}` })),
    twoColumn: true,
  },
  { label: "Projects", href: "/projects" },
  { label: "Financing", href: "/financing" },
  { label: "Brio Blog", href: "/blog" },
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

  if (!item.dropdown && !item.customDropdown) {
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
          {item.customDropdown === "about" ? (
            <div className="bg-white rounded shadow-lg border border-gray-100 min-w-[420px]">
              <div className="px-5 py-3">
                <Link href="/about-us" className="block text-[14px] text-gray-800 hover:text-brio-navy transition-colors py-1.5">
                  About Us
                </Link>
                <Link href="/areas-we-serve" className="block text-[14px] text-gray-800 hover:text-brio-navy transition-colors py-1.5">
                  Areas We Serve
                </Link>
              </div>
              <hr className="border-gray-200 mx-5" />
              <div className="grid grid-cols-2 gap-x-4 px-5 py-4">
                {AREAS.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/${area.slug}`}
                    className="flex items-center gap-2 py-1.5 text-[13px] font-medium text-gray-700 hover:text-brio-navy transition-colors"
                  >
                    <span className="text-gray-400">&rarr;</span>
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div
              className={`bg-white rounded shadow-lg border border-gray-100 py-2 ${
                item.twoColumn ? "grid grid-cols-2 min-w-[480px]" : "min-w-[260px]"
              }`}
            >
              {item.dropdown!.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  className="block px-4 py-2.5 text-[13px] text-gray-700 hover:bg-gray-50 hover:text-brio-navy transition-colors"
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          )}
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
              className="w-12 h-12 flex items-center justify-center text-brio-navy"
              aria-label="Call"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-12 h-12 flex items-center justify-center text-brio-navy"
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
            {NAV_ITEMS.map((item) =>
              item.dropdown || item.customDropdown ? (
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
                      {item.customDropdown === "about" ? (
                        <>
                          <Link href="/about-us" className="block py-2 text-[14px] text-white/80 hover:text-white" onClick={() => setMobileOpen(false)}>About Us</Link>
                          <Link href="/areas-we-serve" className="block py-2 text-[14px] text-white/80 hover:text-white" onClick={() => setMobileOpen(false)}>Areas We Serve</Link>
                          {AREAS.map((area) => (
                            <Link key={area.slug} href={`/${area.slug}`} className="block py-2 text-[14px] text-white/60 hover:text-white pl-2" onClick={() => setMobileOpen(false)}>
                              &rarr; {area.name}
                            </Link>
                          ))}
                        </>
                      ) : (
                        <>
                          <Link
                            href={item.href}
                            className="block py-2 text-[14px] text-white/80 hover:text-white"
                            onClick={() => setMobileOpen(false)}
                          >
                            View All
                          </Link>
                          {item.dropdown!.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block py-2 text-[14px] text-white/80 hover:text-white"
                              onClick={() => setMobileOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </>
                      )}
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
