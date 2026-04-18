import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Building-Integrated Photovoltaics for BC Net-Zero Homes",
  description: "Discover how Building-Integrated Photovoltaics (BIPV) can transform homes in British Columbia into net-zero energy solutions with BRIO Construction.",
};

export default function BlogPost() {
  return (
    <>
      <Navbar />
      <article className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/blog" className="text-brio-navy text-[13px] font-semibold uppercase tracking-wide hover:underline">&larr; Back to Blog</Link>
          </div>
          <p className="text-text-muted text-[13px] mb-3">2025-04-27</p>
          <h1 className="text-[28px] md:text-[38px] font-semibold text-brio-navy font-heading mb-8 leading-tight">
            Harnessing Building-Integrated Photovoltaics (BIPV) for Net-Zero Homes in British Columbia
          </h1>
          <div className="prose max-w-none">
            <p className="text-text-body text-[16px] leading-relaxed mb-4">Discover how Building-Integrated Photovoltaics (BIPV) can transform homes in British Columbia into net-zero energy solutions with BRIO Construction.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-border">
            <Link href="/about-us#get-in-touch" className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide">
              Book Your Free Consultation
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
