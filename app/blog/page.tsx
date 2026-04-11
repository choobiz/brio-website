import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = { title: "BRIO Blog", description: "Construction tips, renovation guides, and industry insights from BRIO Construction." };

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <section className="py-24 md:py-32 bg-brio-light-gray">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading mb-4">BRIO Blog</h1>
          <p className="text-text-body text-[16px]">Construction tips, renovation guides, and industry insights coming soon.</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
