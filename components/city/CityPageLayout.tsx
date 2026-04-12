"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FAQ from "@/components/shared/FAQ";
import { SERVICES } from "@/lib/constants";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

const HERO_IMAGES = [
  { src: "/images/city/hero-1.jpg", alt: "Modern bathroom renovation" },
  { src: "/images/city/hero-2.jpg", alt: "Kitchen interior design" },
  { src: "/images/city/hero-3.jpg", alt: "Home renovation in progress" },
  { src: "/images/city/hero-4.webp", alt: "Custom home interior" },
];

const TRUST_ITEMS = [
  { title: "Clear Communication", text: "We aim to maintain clear communication with you throughout the entire project, to help ensure your renovation is a success." },
  { title: "Transparent Pricing", text: "There shouldn\u2019t be any mystery as to where or how your money is being spent. That\u2019s why we provide transparent pricing." },
  { title: "Project Schedule", text: "From start to finish, we\u2019ll keep you up to date as your home renovation progresses. So you\u2019re not guessing what\u2019s going on." },
  { title: "Permits & Inspections", text: "We don\u2019t take short cuts or leave things to chance. We ensure all permits and inspections are properly completed." },
  { title: "Quality Materials", text: "We want to ensure your home renovation lasts a lifetime. That\u2019s why we use the best materials based on your requirements." },
  { title: "Safety First", text: "Safety comes first on our job sites. This not only helps prevent accidents, but it help keep the project on budget and schedule." },
  { title: "Clean Up", text: "Things can get messy during a renovation, but you have no need to worry. Your home will be cleaned upon completion." },
  { title: "License & Insurance", text: "We are licensed and insured to protect your investment and our people. You can expect professional service from us." },
  { title: "Warranty", text: "We stand behind our work with a twelve month warranty on all workmanship. If you have a problem, we\u2019ll take care of it." },
] as const;

const SERVICES_LEFT = SERVICES.slice(0, 7);
const SERVICES_RIGHT = SERVICES.slice(7);

function buildFaq(cityName: string) {
  return [
    { q: `Do I Need a Building Permit For a Home Renovation Or New Construction in ${cityName}?`, a: `Yes, most renovations, home additions, and new construction projects in ${cityName} require a permit from the City of ${cityName}. Permits ensure that your project complies with local zoning, safety, and environmental regulations. Our team at BRIO Construction can handle the entire permit application process for you.` },
    { q: `What Are ${cityName}\u2019s Zoning Restrictions For Duplexes And Multi-Family Housing?`, a: `${cityName} has specific zoning bylaws that determine where duplexes, townhouses, and multi-family homes can be built. The ever-changing landscape of zoning bylaws in ${cityName} requires a team that\u2019s active in the area and has the latest updates on zoning and bylaw changes. If you\u2019re unsure about your property\u2019s zoning, BRIO Construction can review your lot and help you maximize its potential.` },
    { q: `How Long Does It Take To Build Or Renovate a Home in ${cityName}?`, a: "Project timelines depend on the scope, permitting process, and weather conditions. On average: Custom Home Construction: 12-16 months, Major Home Renovation: 4-8 months, Duplex or Townhouse: 12-18 months. BRIO Construction ensures efficient project management and timely completion." },
    { q: `Can Brio Construction Help With Laneway Home Or Secondary Suite Construction?`, a: `Yes! ${cityName} encourages laneway homes and secondary suites to increase housing availability. We offer design-build services including laneway home construction, basement suite renovations & legal conversions, and coach houses & accessory dwelling units (ADUs).` },
    { q: "How Much Will My Renovation Cost?", a: "Costs depend on factors like project size, materials, and labor. We provide transparent quotes and help you stay within budget without compromising quality." },
  ];
}

function ImageCarousel() {
  // Show 2 images at a time, so we have pairs: [0,1] and [2,3]
  const totalSlides = Math.ceil(HERO_IMAGES.length / 2);
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? totalSlides - 1 : c - 1));
  const next = () => setCurrent((c) => (c === totalSlides - 1 ? 0 : c + 1));

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIdx) => (
            <div key={slideIdx} className="w-full shrink-0 grid grid-cols-2 gap-4">
              {HERO_IMAGES.slice(slideIdx * 2, slideIdx * 2 + 2).map((img) => (
                <div key={img.src} className="relative aspect-[4/3] overflow-hidden">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="50vw" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* Dots + Arrows row */}
      <div className="flex items-center justify-center gap-4 mt-5">
        <div className="flex gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-brio-navy" : "bg-gray-300"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="w-8 h-8 rounded-full border border-brio-navy flex items-center justify-center text-brio-navy hover:bg-brio-navy hover:text-white transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="w-8 h-8 rounded-full border border-brio-navy flex items-center justify-center text-brio-navy hover:bg-brio-navy hover:text-white transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

interface CityPageLayoutProps {
  cityName: string;
}

export default function CityPageLayout({ cityName }: CityPageLayoutProps) {
  const faq = buildFaq(cityName);

  return (
    <>
      <Navbar />

      {/* ── Hero – two-column: text left, image right ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
            {/* Left – text */}
            <div className="py-16 md:py-24 md:pr-12">
              <h1 className="font-heading text-[36px] md:text-[46px] font-semibold text-brio-navy leading-[1.15] mb-5">
                Achieve Your Dream Home In {cityName}
              </h1>
              <p className="text-text-body text-[15px] leading-relaxed mb-7 max-w-md">
                Remodel with BRIO Construction, get transparent pricing, expert guidance, and turn your ideas into reality.
              </p>
              <Link
                href="#get-in-touch"
                className="inline-block bg-brio-navy text-white text-[13px] font-semibold px-7 py-3.5 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
              >
                Contact Us for a Free Quotation
              </Link>
            </div>
            {/* Right – image */}
            <div className="relative h-[300px] md:h-full md:min-h-[480px]">
              <Image
                src="/images/city/hero-main.jpg"
                alt="Modern home renovation by BRIO Construction"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Image Carousel ── */}
      <section className="bg-white pt-8 pb-16 md:pt-12 md:pb-24 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImageCarousel />
        </div>
      </section>

      {/* ── Learn More ── */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-[22px] md:text-[28px] font-semibold text-brio-navy text-center mb-14 uppercase tracking-wider leading-snug">
            Learn More About Building in<br />{cityName} with BRIO
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <h3 className="text-brio-navy text-[14px] font-bold uppercase tracking-wide mb-3">
                {cityName}&apos;s Renovation Regulations
              </h3>
              <p className="text-text-body text-[13px] leading-relaxed">
                Renovating in {cityName} requires understanding local building codes, permits, and zoning regulations. Our experts ensure your project meets all legal requirements for a hassle-free experience.
              </p>
            </div>
            <div>
              <h3 className="text-brio-navy text-[14px] font-bold uppercase tracking-wide mb-3">
                Smart Design for {cityName} Homes
              </h3>
              <p className="text-text-body text-[13px] leading-relaxed">
                Maximize space, enhance energy efficiency, and incorporate modern design elements tailored to {cityName}&apos;s climate and lifestyle. We help you create a stylish, functional, and sustainable home.
              </p>
            </div>
            <div>
              <h3 className="text-brio-navy text-[14px] font-bold uppercase tracking-wide mb-3">
                Quality Craftsmanship &amp; Trusted Contractors
              </h3>
              <p className="text-text-body text-[13px] leading-relaxed">
                At BRIO Construction, we partner with experienced professionals who deliver top-tier craftsmanship, transparent pricing, and on-time project completion&mdash;so you can renovate with confidence.
              </p>
            </div>
          </div>

          <p className="text-center text-text-body text-[14px]">
            <span className="font-semibold">Ready to start your {cityName} project?</span>{" "}
            <Link href="#get-in-touch" className="text-brio-navy font-semibold underline hover:no-underline">
              Contact BRIO today for a free consultation!
            </Link>
          </p>
        </div>
      </section>

      {/* ── Services + CTA with image on right ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left – service list + CTA */}
            <div className="py-12 md:py-16 md:pr-12">
              {/* Service checkmarks */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-12">
                <ul className="space-y-3">
                  {SERVICES_LEFT.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/${s.slug}`} className="flex items-center gap-3 text-text-body text-[14px] font-medium hover:text-brio-navy transition-colors">
                        <span className="w-5 h-5 rounded bg-brio-navy flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 text-white" />
                        </span>
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-3">
                  {SERVICES_RIGHT.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/${s.slug}`} className="flex items-center gap-3 text-text-body text-[14px] font-medium hover:text-brio-navy transition-colors">
                        <span className="w-5 h-5 rounded bg-brio-navy flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 text-white" />
                        </span>
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Navy CTA */}
              <h2 className="font-heading text-[26px] md:text-[34px] font-bold text-brio-navy leading-[1.15] mb-6 uppercase tracking-wide">
                No Matter the Project, You Can Begin Your Build Today
              </h2>
              <Link
                href="#get-in-touch"
                className="inline-block bg-brio-navy text-white text-[13px] font-semibold px-7 py-3.5 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
              >
                Contact Us for a Free Consultation Today!
              </Link>
            </div>

            {/* Right – image */}
            <div className="relative h-[350px] md:h-auto md:min-h-[500px]">
              <Image
                src="/images/city/hero-1.jpg"
                alt="Kitchen renovation by BRIO Construction"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Build with Confidence ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-[22px] md:text-[28px] font-semibold text-brio-navy text-center mb-14 uppercase tracking-wider">
            Build with Confidence
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 mb-12">
            {TRUST_ITEMS.map((item) => (
              <div key={item.title}>
                <div className="border-t-2 border-brio-navy w-10 mb-4" />
                <h3 className="text-brio-navy text-[15px] font-semibold italic mb-2">
                  {item.title}
                </h3>
                <p className="text-text-body text-[13px] leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="#get-in-touch"
              className="inline-block border-2 border-brio-navy text-brio-navy text-[13px] font-semibold px-7 py-3 uppercase tracking-wide hover:bg-brio-navy hover:text-white transition-colors"
            >
              Schedule Your Free Consultation Today!
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contact Form + FAQ side-by-side ── */}
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
                FAQ for {cityName}
              </h3>
              <FAQ items={faq} compact />
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left – text + form */}
            <div>
              <p className="text-text-muted text-[12px] uppercase tracking-widest mb-2">Subscribe</p>
              <h2 className="font-heading text-[28px] md:text-[34px] font-bold text-brio-navy mb-4">
                The Inside Look
              </h2>
              <p className="text-text-body text-[15px] leading-relaxed mb-6">
                The email newsletter that delivers curated home decor and furniture picks, expert design advice, and more. Join 4,000+ subscribers.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address..."
                  className="w-full h-12 px-4 border border-gray-300 text-sm bg-white focus:outline-none focus:border-brio-navy"
                />
                <button
                  type="submit"
                  className="w-full h-12 bg-brio-navy text-white font-semibold uppercase tracking-wide text-[13px] hover:bg-brio-navy/90 transition-colors"
                >
                  Sign Me Up
                </button>
              </form>
            </div>
            {/* Right – image with arch shape */}
            <div className="flex justify-center">
              <div className="relative w-[340px] h-[400px] md:w-[380px] md:h-[440px] rounded-t-full overflow-hidden">
                <Image
                  src="/images/newsletter.png"
                  alt="Builder overlooking a construction site"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
