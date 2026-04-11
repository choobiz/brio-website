import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading mb-8">Terms of Use</h1>
          <p className="text-text-body text-[15px] leading-relaxed">By using this website, you agree to the terms and conditions set forth by BRIO Construction. For questions, contact us at info@builtbybrio.com.</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
