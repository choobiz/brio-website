"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FAQ from "@/components/shared/FAQ";
import LeadForm from "@/components/shared/LeadForm";
import { SERVICES } from "@/lib/constants";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

// 13 images available — each city gets a unique set
const ALL_IMAGES = [
  "/images/city/hero-main.jpg",   // 0  - duplex exterior
  "/images/city/img-01.jpg",      // 1  - interior living
  "/images/city/img-02.jpg",      // 2  - luxury living room
  "/images/city/img-03.jpg",      // 3  - duplex interior
  "/images/city/img-04.jpg",      // 4  - home extension living area
  "/images/city/img-05.webp",     // 5  - modern interior
  "/images/city/img-06.webp",     // 6  - kitchen/dining
  "/images/city/img-07.avif",     // 7  - warm living room
  "/images/city/img-08.webp",     // 8  - bathroom renovation
  "/images/city/img-09.webp",     // 9  - kitchen after
  "/images/city/img-10.webp",     // 10 - kitchen after
  "/images/city/img-11.webp",     // 11 - kitchen after
  "/images/city/img-12.webp",     // 12 - kitchen after
  "/images/city/img-13.jpg",      // 13 - condo interior
];

// Each city gets: [heroImage, servicesImage, carousel1, carousel2, carousel3, carousel4]
const CITY_IMAGES: Record<string, number[]> = {
  "Vancouver":        [0, 6,   1, 2, 9, 13],
  "North Vancouver":  [1, 8,   3, 5, 10, 7],
  "West Vancouver":   [2, 11,  4, 0, 8, 6],
  "Burnaby":          [3, 9,   7, 1, 12, 5],
  "Coquitlam":        [4, 10,  0, 6, 13, 8],
  "Richmond":         [5, 12,  2, 3, 11, 7],
  "New Westminster":  [7, 13,  1, 9, 4, 0],
  "Squamish":         [6, 1,   5, 12, 3, 10],
  "Lions Bay":        [13, 3,  8, 11, 2, 9],
  "Port Moody":       [8, 5,   7, 10, 0, 4],
};

function getCityImages(cityName: string) {
  const indices = CITY_IMAGES[cityName] ?? [0, 6, 1, 2, 9, 13];
  return {
    hero: ALL_IMAGES[indices[0]],
    services: ALL_IMAGES[indices[1]],
    carousel: [
      { src: ALL_IMAGES[indices[2]], alt: `${cityName} renovation project 1` },
      { src: ALL_IMAGES[indices[3]], alt: `${cityName} renovation project 2` },
      { src: ALL_IMAGES[indices[4]], alt: `${cityName} renovation project 3` },
      { src: ALL_IMAGES[indices[5]], alt: `${cityName} renovation project 4` },
    ],
  };
}

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

function ImageCarousel({ images }: { images: { src: string; alt: string }[] }) {
  // Show 2 images at a time, so we have pairs: [0,1] and [2,3]
  const totalSlides = Math.ceil(images.length / 2);
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prev = () => setCurrent((c) => (c === 0 ? totalSlides - 1 : c - 1));
  const next = () => setCurrent((c) => (c === totalSlides - 1 ? 0 : c + 1));

  // Mobile swipe — distinguishes a swipe from a tap by 50px threshold.
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 50) prev();
    else if (dx < -50) next();
    touchStartX.current = null;
  };

  return (
    <div className="relative w-full">
      <div
        className="overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIdx) => (
            <div key={slideIdx} className="w-full shrink-0 grid grid-cols-2 gap-4">
              {images.slice(slideIdx * 2, slideIdx * 2 + 2).map((img) => (
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
            className="w-11 h-11 sm:w-8 sm:h-8 rounded-full border border-brio-navy flex items-center justify-center text-brio-navy hover:bg-brio-navy hover:text-white transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="w-11 h-11 sm:w-8 sm:h-8 rounded-full border border-brio-navy flex items-center justify-center text-brio-navy hover:bg-brio-navy hover:text-white transition-colors"
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
  const cityImages = getCityImages(cityName);

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
                src={cityImages.hero}
                alt={`Home renovation in ${cityName} by BRIO Construction`}
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
          <ImageCarousel images={cityImages.carousel} />
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
                src={cityImages.services}
                alt={`Renovation project in ${cityName} by BRIO Construction`}
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
              <LeadForm
                source={`city-${cityName.toLowerCase().replace(/\s+/g, "-")}`}
                service="city"
                city={cityName}
                variant="compact"
              />
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

      <Footer />
    </>
  );
}
