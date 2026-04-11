import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative bg-brio-navy overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center">
      <Image
        src="/images/hero-home.jpg"
        alt="BRIO Construction project"
        fill
        priority
        className="object-cover opacity-30"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brio-navy/90 via-brio-navy/70 to-brio-navy/40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-brio-gold text-sm font-semibold tracking-[2px] uppercase mb-4">
            VANCOUVER&apos;S TRUSTED CONSTRUCTION PARTNER
          </p>
          <h1 className="text-white text-[36px] md:text-[52px] lg:text-[60px] font-bold leading-[1.08] mb-6 font-heading">
            From Concept to Completion — Together
          </h1>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Whether renovating, building custom homes, or developing spec projects, our expert team ensures precision in every detail. On time. On budget. Stress-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/about-us#get-in-touch"
              className="inline-flex items-center justify-center h-[52px] px-8 bg-brio-gold text-brio-navy font-bold rounded-lg hover:bg-brio-gold/90 transition-all gap-2 text-[15px]"
            >
              Get Your Free Estimate
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${COMPANY.phoneClean}`}
              className="inline-flex items-center justify-center h-[52px] px-8 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all gap-2 text-[15px]"
            >
              <Phone className="w-4 h-4" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
