import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = { title: "Services", description: "Explore BRIO Construction's full range of construction and renovation services across Greater Vancouver." };

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <section className="bg-brio-light-gray py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading text-center mb-12">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/${s.slug}`} className="bg-white p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-brio-navy text-[18px] font-semibold font-heading mb-2">{s.name}</h3>
                <p className="text-brio-navy text-[13px] font-semibold uppercase tracking-wide">Learn More →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
