import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Link from "next/link";
import { AREAS } from "@/lib/constants";

export const metadata: Metadata = { title: "Areas We Serve", description: "BRIO Construction serves Vancouver, North Vancouver, West Vancouver, Burnaby, Coquitlam, Richmond, and more." };

export default function AreasPage() {
  return (
    <>
      <Navbar />
      <section className="bg-brio-light-gray py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading mb-12">Areas We Serve</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {AREAS.map((a) => (
              <Link key={a.slug} href={`/${a.slug}`} className="bg-white p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-brio-navy text-[16px] font-semibold">{a.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
