import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FAQ from "@/components/shared/FAQ";
import Link from "next/link";
import Image from "next/image";
import BeforeAfterSlider from "@/components/service/BeforeAfterSlider";

export const metadata: Metadata = {
  title: "Kitchen Remodeling",
  description:
    "Transform your kitchen with BRIO Construction's expert kitchen remodeling services, creating a modern or cozy design tailored to your needs.",
};

const FAQ_ITEMS = [
  {
    q: "How does the design and selection process work?",
    a: "The process starts with an initial consultation to discuss your vision, needs, and budget. Our design team assists you in selecting materials, fixtures, and finishes that align with your preferences. We also provide a complimentary 3D rendering so you can visualize your new kitchen before construction begins.",
  },
  {
    q: "How long does a kitchen remodel take?",
    a: "Most kitchen renovations take 8-12 weeks, depending on complexity. We create a clear timeline and keep you informed every step of the way.",
  },
  {
    q: "What measures ensure quality craftsmanship?",
    a: "We have a network of reputable contractors that adhere to industry standards, employ skilled tradespeople, and use high-quality materials. We also provide a 12-month warranty on all workmanship.",
  },
  {
    q: "Do I need permits for a kitchen remodel?",
    a: "Some renovations may require permits, especially if moving plumbing or electrical. We take care of all necessary permits to ensure a hassle-free process.",
  },
  {
    q: "Do I need design ideas before starting?",
    a: "While having a vision is beneficial, it's not mandatory. Our experienced design team can collaborate with you to develop a design that aligns with your preferences and budget.",
  },
];

const TRUST_ITEMS = [
  { title: "Licensed & Insured", text: "Fully licensed and insured to protect your investment. You can expect professional service from start to finish." },
  { title: "Industry Recognized", text: "Recognized by industry associations for our commitment to excellence, quality standards, and ethical business practices." },
  { title: "Proven Expertise", text: "Years of experience delivering high-quality kitchen renovations across Greater Vancouver with a track record of satisfied clients." },
  { title: "Transparent Processes", text: "No hidden fees or surprises. We provide detailed quotes, clear timelines, and keep you informed every step of the way." },
  { title: "Quality Craftsmanship", text: "We use premium materials and skilled tradespeople to ensure your kitchen renovation is built to last a lifetime." },
];

const TESTIMONIALS = [
  {
    name: "Sam S.",
    location: "Vancouver",
    project: "Spec Home",
    text: "BRIO Construction exceeded our expectations on every level. Their attention to detail and commitment to quality craftsmanship transformed our spec home into something truly special. Communication was excellent throughout the entire process.",
  },
  {
    name: "Ron M.",
    location: "North Vancouver",
    project: "Full Renovation",
    text: "From start to finish, the BRIO team was professional, transparent, and delivered outstanding results. Our full home renovation was completed on time and on budget. We couldn't be happier with the final outcome.",
  },
  {
    name: "K.M.",
    location: "Vancouver",
    project: "Bathroom Remodeling",
    text: "We hired BRIO for our bathroom remodel and were blown away by the quality of work. The team was respectful of our home, cleaned up daily, and the finished product looks absolutely stunning. Highly recommend!",
  },
];

export default function KitchenPage() {
  return (
    <>
      <Navbar />

      {/* 1. Hero — Two-column layout */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
            {/* Left – text */}
            <div className="py-16 md:py-24 md:pr-12 flex flex-col justify-center">
              <h1 className="font-heading text-[36px] md:text-[46px] font-semibold text-brio-navy leading-[1.15] mb-5">
                Breathe New Life Into Your Kitchen
              </h1>
              <p className="text-text-body text-[15px] leading-relaxed mb-5 max-w-lg">
                The kitchen is the heart of your home. Whether you dream of a sleek
                modern kitchen, a cozy farmhouse design, or a chef-inspired space, we
                bring your vision to life with high-quality craftsmanship, smart layouts,
                and premium finishes.
              </p>
              <p className="text-brio-navy font-semibold text-[15px] mb-2">
                Complimentary 3D Rendering &mdash; See your new Kitchen before
                construction begins!
              </p>
              <p className="text-text-body text-[14px] italic mb-8">
                Limited-Time Offer &ndash; Act Now!
              </p>
              <div>
                <Link
                  href="#get-in-touch"
                  className="inline-block bg-brio-navy text-white text-[13px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
                >
                  Get My Free, Detailed Estimate
                </Link>
              </div>
            </div>
            {/* Right – image */}
            <div className="relative h-[350px] md:h-auto md:min-h-[520px]">
              <Image
                src="/images/city/img-09.webp"
                alt="Beautiful kitchen renovation by BRIO Construction"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Partners */}
      <section className="py-10 md:py-14 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-[18px] md:text-[22px] font-semibold text-brio-navy uppercase tracking-wider mb-8">
            Our Partners
          </h2>
          <div className="flex items-center justify-center gap-8 md:gap-14 flex-wrap">
            <Image src="/images/partners/havan.png" alt="HAVAN" width={120} height={60} className="h-10 md:h-14 w-auto object-contain" />
            <Image src="/images/partners/renomark.png" alt="RenoMark" width={120} height={60} className="h-10 md:h-14 w-auto object-contain" />
            <Image src="/images/partners/warranty-2510.png" alt="2-5-10 Home Warranty" width={120} height={60} className="h-10 md:h-14 w-auto object-contain" />
          </div>
        </div>
      </section>

      {/* Before/After Interactive Sliders */}
      <section className="py-10 md:py-16 bg-brio-light-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-[22px] md:text-[28px] font-semibold text-brio-navy text-center mb-8 uppercase tracking-wider">
            Check Out These Transformations!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <BeforeAfterSlider before="/images/kitchen/before-1.jpg" after="/images/kitchen/after-1.jpg" altBefore="Kitchen before renovation 1" altAfter="Kitchen after renovation 1" />
            <BeforeAfterSlider before="/images/kitchen/before-2.jpg" after="/images/kitchen/after-2.jpg" altBefore="Kitchen before renovation 2" altAfter="Kitchen after renovation 2" />
            <BeforeAfterSlider before="/images/kitchen/before-3.webp" after="/images/kitchen/after-3.png" altBefore="Kitchen before renovation 3" altAfter="Kitchen after renovation 3" />
          </div>
        </div>
      </section>

      {/* 6. Trust Signals — Two-column layout */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left – bullet list */}
            <div>
              <ul className="space-y-6">
                {TRUST_ITEMS.map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span className="w-6 h-6 rounded bg-brio-navy flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="text-brio-navy text-[15px] font-semibold mb-1">{item.title}</h3>
                      <p className="text-text-body text-[13px] leading-relaxed">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Right – heading + CTA */}
            <div>
              <h2 className="font-heading text-[24px] md:text-[30px] font-semibold text-brio-navy uppercase tracking-wide leading-snug mb-5">
                Remodel with Confidence &ndash; Choose BRIO
              </h2>
              <p className="text-text-body text-[15px] leading-relaxed mb-8">
                At BRIO Construction, we believe in delivering excellence without compromise.
                Partnering with us is a decision you can trust!
              </p>
              <Link
                href="#get-in-touch"
                className="inline-block bg-brio-navy text-white text-[13px] font-semibold px-7 py-3.5 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
              >
                Book Your Free Consultation Today!
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Kitchen Gallery */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-[24px] md:text-[34px] font-semibold text-brio-navy uppercase tracking-wide leading-snug mb-10 italic">
            Love Your Kitchen Again,<br />Let&apos;s Build Something Beautiful!
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              "/images/kitchen/gallery-01.jpeg",
              "/images/kitchen/gallery-02.webp",
              "/images/kitchen/gallery-03.webp",
              "/images/kitchen/gallery-04.jpeg",
              "/images/kitchen/gallery-05.jpg",
              "/images/kitchen/gallery-06.jpg",
              "/images/kitchen/gallery-07.jpeg",
              "/images/kitchen/gallery-08.webp",
              "/images/kitchen/gallery-09.webp",
              "/images/kitchen/gallery-10.webp",
              "/images/kitchen/gallery-11.jpg",
              "/images/kitchen/gallery-12.webp",
            ].map((src, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden">
                <Image src={src} alt={`Kitchen renovation project ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 50vw, 33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-text-body text-[15px] leading-relaxed text-center max-w-3xl mx-auto mb-12">
            At BRIO Construction, we&apos;re all about turning your renovation dreams into
            reality. But don&apos;t just take our word for it&mdash;hear from our satisfied
            clients themselves.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-brio-light-gray p-8">
                <p className="text-text-body text-[14px] leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-brio-navy text-[15px] font-semibold">{t.name}</p>
                  <p className="text-text-muted text-[13px]">{t.location} &mdash; {t.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Contact Form + FAQ side by side */}
      <section id="get-in-touch" className="py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left – form */}
            <div>
              <h3 className="font-heading text-[20px] md:text-[24px] font-semibold text-brio-navy mb-2 uppercase tracking-wide">
                Let&apos;s Discuss Your Project
              </h3>
              <p className="text-text-body text-[13px] leading-relaxed mb-6">
                Ready to explore the possibilities for your project? We&apos;d love to hear your ideas!
                Taking the first step is easy. Share a few details below, and our team will get in touch to schedule a friendly, no-obligation consultation to discuss your project.
              </p>
              <form className="space-y-3">
                <input type="text" required placeholder="Name" className="w-full h-11 px-4 border border-gray-300 text-sm bg-white focus:outline-none focus:border-brio-navy" />
                <div className="grid grid-cols-2 gap-3">
                  <input type="tel" required placeholder="Phone" className="w-full h-11 px-4 border border-gray-300 text-sm bg-white focus:outline-none focus:border-brio-navy" />
                  <input type="email" required placeholder="Email" className="w-full h-11 px-4 border border-gray-300 text-sm bg-white focus:outline-none focus:border-brio-navy" />
                </div>
                <input type="text" placeholder="Service Address" className="w-full h-11 px-4 border border-gray-300 text-sm bg-white focus:outline-none focus:border-brio-navy" />
                <textarea placeholder="Description of Work" rows={4} className="w-full px-4 py-3 border border-gray-300 text-sm bg-white focus:outline-none focus:border-brio-navy resize-none" />
                <button type="submit" className="w-full h-11 bg-brio-navy text-white font-semibold uppercase tracking-wide text-[13px] hover:bg-brio-navy/90 transition-colors">
                  Book Now!
                </button>
              </form>
            </div>

            {/* Right – FAQ */}
            <div>
              <h3 className="font-heading text-[20px] md:text-[24px] font-semibold text-brio-navy mb-6 uppercase tracking-wide">
                Frequently Asked Questions
              </h3>
              <FAQ items={FAQ_ITEMS} compact />
            </div>
          </div>
        </div>
      </section>

      {/* 10. Newsletter */}
      <section className="py-10 md:py-14 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="text-text-muted text-[11px] uppercase tracking-widest mb-1">Subscribe</p>
              <h2 className="font-heading text-[22px] md:text-[26px] font-bold text-brio-navy mb-2">The Inside Look</h2>
              <p className="text-text-body text-[13px] leading-relaxed mb-4 max-w-md">
                The email newsletter that delivers curated home decor and furniture picks, expert design advice, and more. Join 4,000+ subscribers.
              </p>
              <form className="flex gap-2 max-w-md">
                <input type="email" placeholder="Your email address..." className="flex-1 h-10 px-4 border border-gray-300 text-sm bg-white focus:outline-none focus:border-brio-navy" />
                <button type="submit" className="h-10 px-5 bg-brio-navy text-white font-semibold uppercase tracking-wide text-[12px] hover:bg-brio-navy/90 transition-colors shrink-0">Sign Me Up</button>
              </form>
            </div>
            <div className="hidden md:block relative w-[200px] h-[240px] rounded-t-full overflow-hidden">
              <Image src="/images/newsletter.png" alt="Builder overlooking a construction site" fill className="object-cover" sizes="200px" />
            </div>
          </div>
        </div>
      </section>

      {/* 11. Footer */}
      <Footer />
    </>
  );
}
