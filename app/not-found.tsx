import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ArrowRight, Home, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you’re looking for doesn’t exist or has moved.",
  robots: { index: false, follow: false },
};

const POPULAR_LINKS = [
  { label: "Kitchen Remodeling", href: "/kitchen-remodeling", desc: "Functional, timeless kitchens." },
  { label: "Bathroom Remodeling", href: "/bathroom-remodeling", desc: "Spa-quality bathrooms, on time." },
  { label: "Basement Suites", href: "/basement-remodeling", desc: "Legal, rentable secondary suites." },
  { label: "Home Renovations", href: "/home-renovations", desc: "Whole-home updates with fixed pricing." },
  { label: "Custom Homes", href: "/custom-home-construction", desc: "Ground-up builds across Metro Vancouver." },
  { label: "Financing", href: "/financing", desc: "12-month 0% financing available." },
];

export default function NotFound() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-brio-navy text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-heading !text-white text-[88px] md:text-[140px] leading-none font-semibold mb-2 opacity-30">
            404
          </p>
          <h1 className="font-heading !text-white text-[32px] md:text-[44px] font-semibold leading-tight mb-4 -mt-6 md:-mt-10">
            We can’t find that page.
          </h1>
          <p className="text-white/85 text-[16px] md:text-[18px] leading-relaxed max-w-2xl mx-auto mb-8">
            The link may be broken, or the page may have moved during our recent site rebuild. Try one of the popular destinations below — or call us if you’re looking for something specific.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-white text-brio-navy px-7 py-3.5 text-[14px] font-semibold uppercase tracking-wide hover:bg-white/90 transition-colors"
            >
              <Home className="w-4 h-4" />
              Go to Home
            </Link>
            <a
              href="tel:+16042606691"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-7 py-3.5 text-[14px] font-semibold uppercase tracking-wide hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call (604) 260-6691
            </a>
          </div>
        </div>
      </section>

      {/* Popular destinations */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-text-muted text-[12px] uppercase tracking-[0.2em] font-semibold text-center mb-3">
            Popular destinations
          </p>
          <h2 className="font-heading text-brio-navy text-[26px] md:text-[34px] font-semibold leading-tight text-center mb-12">
            Where would you like to go?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {POPULAR_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group block p-6 border border-border bg-white hover:border-brio-navy transition-colors"
              >
                <h3 className="font-heading text-brio-navy text-[18px] font-semibold mb-2 leading-snug">
                  {link.label}
                </h3>
                <p className="text-text-body text-[14px] leading-relaxed mb-4">{link.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-brio-navy text-[12px] font-semibold uppercase tracking-wide group-hover:gap-2 transition-all">
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-14 pt-10 border-t border-border text-center">
            <p className="text-text-body text-[15px] leading-relaxed mb-4">
              Looking for something else?
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center text-[14px] font-semibold uppercase tracking-wide">
              <Link href="/projects" className="text-brio-navy hover:underline">Projects</Link>
              <span className="text-border">·</span>
              <Link href="/blog" className="text-brio-navy hover:underline">Blog</Link>
              <span className="text-border">·</span>
              <Link href="/about-us" className="text-brio-navy hover:underline">About BRIO</Link>
              <span className="text-border">·</span>
              <Link href="/areas-we-serve" className="text-brio-navy hover:underline">Areas we serve</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
