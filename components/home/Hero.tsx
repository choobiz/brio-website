import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[650px] flex items-center overflow-hidden">
      <Image
        src="/images/hero-home.jpg"
        alt="BRIO Construction project"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-28 lg:py-36 w-full">
        <div className="max-w-3xl">
          <h1 className="text-white text-[42px] md:text-[56px] lg:text-[68px] font-semibold leading-[1.1] mb-6 font-heading">
            From Concept to Completion—Together
          </h1>
          <p className="text-white/90 text-[18px] md:text-[20px] leading-relaxed mb-10 max-w-2xl">
            At BRIO, we create spaces that inspire, endure, and elevate. Whether renovating, building custom homes, or developing spec projects, our expert team ensures precision in every detail. With a streamlined process, clear communication, and expert execution, we make construction stress-free—delivering on time, on budget, and hassle-free.
          </p>
          <Link
            href="/about-us#get-in-touch"
            className="inline-block bg-brio-navy text-white text-[15px] font-semibold px-8 py-4 hover:bg-brio-navy/90 transition-colors tracking-wide uppercase"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
