import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ContactForm from "@/components/service/ContactForm";
import Link from "next/link";

export const metadata: Metadata = { title: "Financing", description: "Discover up to $40,000 in interest-free loans for energy upgrades with BRIO Construction." };

export default function FinancingPage() {
  return (
    <>
      <Navbar />
      <section className="bg-brio-light-gray py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading mb-6">Home Financing Options</h1>
          <p className="text-text-body text-[16px] md:text-[18px] leading-relaxed mb-8">
            Discover up to $40,000 in interest-free loans for energy upgrades with BRIO Construction. We make it easy to finance your renovation with flexible payment options.
          </p>
          <div className="bg-white p-8 mb-8">
            <h3 className="text-brio-navy text-[24px] font-semibold font-heading mb-4">12-Month Interest-Free Financing</h3>
            <p className="text-text-body text-[15px] mb-4">Available on kitchen and bathroom renovation packages. Break your renovation into manageable monthly payments with zero interest for a full year.</p>
            <Link href="#get-in-touch" className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide">Learn More</Link>
          </div>
        </div>
      </section>
      <ContactForm />
      <Footer />
    </>
  );
}
