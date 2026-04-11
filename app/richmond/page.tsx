import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ContactForm from "@/components/service/ContactForm";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Richmond Construction & Renovation Services",
  description: "BRIO Construction serves Richmond with expert home renovations, custom home construction, and commercial renovations. Get your free estimate today.",
};

export default function RichmondPage() {
  return (
    <>
      <Navbar />
      <section className="bg-brio-light-gray py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading mb-6">
            Richmond Construction & Renovation Services
          </h1>
          <p className="text-text-body text-[16px] md:text-[18px] leading-relaxed mb-8">
            BRIO Construction is proud to serve Richmond with expert construction and renovation services.
            From custom homes to kitchen remodels, our team delivers quality craftsmanship on every project.
          </p>
          <Link href="#get-in-touch" className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide">
            Get Your Free Estimate
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-10">
            Our Services in Richmond
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/${s.slug}`} className="bg-brio-light-gray p-5 text-center hover:shadow-md transition-shadow">
                <p className="text-brio-navy text-[13px] font-semibold uppercase tracking-wide">{s.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </>
  );
}
