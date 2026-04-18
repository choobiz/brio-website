import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import LeadForm from "@/components/shared/LeadForm";
import FAQ from "@/components/shared/FAQ";
import PartnersCarousel from "@/components/shared/PartnersCarousel";
import BeforeAfterSlider from "@/components/service/BeforeAfterSlider";
import Newsletter from "@/components/home/Newsletter";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Bathroom Remodeling",
  description:
    "Transform your bathroom with expert bathroom remodeling services from BRIO Construction. Upgrade your space with style and confidence today!",
};


const KEY_SELLING_POINTS = [
  {
    title: "Seamless, Stress-Free Experience",
    items: [
      "2-Week Remodel: From demolition to a stunning reveal, we work efficiently to minimize disruption.",
      "Zero Delays: Our streamlined process and dedicated team ensure your project stays on track.",
    ],
  },
  {
    title: "Affordable Luxury at Its Best",
    items: [
      "Competitive pricing with packages starting from $15,000.",
      "Complimentary 3D Rendering: See your dream bathroom before we start building.",
    ],
  },
  {
    title: "Proven Expertise",
    items: [
      "Licensed & Insured: Full BC Builder\u2019s License and comprehensive warranty insurance.",
      "Trusted Industry Leaders: HAVAN members and RenoMark certified.",
      "15+ Years of Experience: Hundreds of successful bathroom transformations.",
    ],
  },
  {
    title: "Commitment to Quality",
    items: [
      "12-month workmanship warranty on every project.",
      "Premium materials and skilled tradespeople on every job.",
    ],
  },
];

const FAQ_ITEMS = [
  {
    q: "How does the design process work?",
    a: "It starts with an initial consultation to discuss your vision, needs, and budget. Our design team helps you select materials, fixtures, and finishes. You\u2019ll receive a complimentary 3D rendering so you can visualize the final result before construction begins.",
  },
  {
    q: "How long does a bathroom remodel take?",
    a: "After our design and selection phase, we need just 2 weeks from demolition to handover. Our streamlined process and dedicated team ensure zero delays and minimal disruption to your daily routine.",
  },
  {
    q: "What ensures quality craftsmanship?",
    a: "We adhere to strict industry standards, employ skilled tradespeople, and use only high-quality materials. Every project comes with a 12-month workmanship warranty, and we are Licensed, Insured, HAVAN members, and RenoMark certified.",
  },
  {
    q: "Do I need design ideas before starting?",
    a: "Not at all! While having a vision is beneficial, it\u2019s not mandatory. Our experienced design team can collaborate with you to develop a design that aligns with your preferences and budget. We\u2019ll guide you through material and fixture selections.",
  },
  {
    q: "How can I prepare for a bathroom remodel?",
    a: "Clear out personal items from the bathroom, protect adjacent areas from dust, and set up alternative bathroom facilities if needed. Our team will walk you through a detailed preparation checklist and handle all site protection and daily cleanup.",
  },
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
    text: "From start to finish, the BRIO team was professional, transparent, and delivered outstanding results. Our full home renovation was completed on time and on budget. We couldn\u2019t be happier with the final outcome.",
  },
  {
    name: "K.M.",
    location: "Vancouver",
    project: "Bathroom Remodeling",
    text: "We hired BRIO for our bathroom remodel and were blown away by the quality of work. The team was respectful of our home, cleaned up daily, and the finished product looks absolutely stunning. Highly recommend!",
  },
];

export default function BathroomPage() {
  return (
    <>
      <Navbar />

      {/* ── 1. Hero — Two-column: text left, bathroom image right ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
            {/* Left — text */}
            <div className="py-16 md:py-24 md:pr-12">
              <h1 className="text-[32px] md:text-[44px] font-semibold italic text-brio-navy font-heading mb-6 leading-tight">
                Transform Your Bathroom In Record Time With Brio!
              </h1>
              <p className="text-text-body text-[15px] leading-relaxed mb-1">
                <span className="font-bold">Complete Remodel in Just 2 weeks!</span> &ndash; No long waits, no hassle!
              </p>
              <p className="text-text-body text-[15px] leading-relaxed mb-1">
                <span className="font-bold">Starting at Very Low Prices</span> &ndash; High-quality renovation at an unbeatable price.
              </p>
              <p className="text-text-body text-[15px] leading-relaxed mb-1">
                <span className="font-bold">Complimentary 3D Rendering</span> &ndash; See your new bathroom <span className="font-bold">before</span> construction begins! <span className="font-bold">Limited-Time Offer &ndash; Act Now!</span>
              </p>
              <p className="text-text-body text-[15px] mt-4 mb-7">
                Don&apos;t miss out! Upgrade your bathroom with confidence.
              </p>
              <div>
                <Link
                  href="#get-in-touch"
                  className="inline-block bg-brio-navy text-white text-[13px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
                >
                  Book Your Free Consultation Now
                </Link>
              </div>
            </div>
            {/* Right — image */}
            <div className="relative h-[300px] md:h-auto md:min-h-[480px]">
              <Image
                src="/images/city/img-08.webp"
                alt="Modern bathroom renovation by BRIO Construction"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Partners ── */}
      <PartnersCarousel />

      {/* ── 5. Before/After Sliders ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12 uppercase tracking-wide">
            CHECK OUT THESE TRANSFORMATIONS!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BeforeAfterSlider
              before="/images/bathroom/before-1.webp"
              after="/images/bathroom/after-1.webp"
              altBefore="Bathroom before renovation 1"
              altAfter="Bathroom after renovation 1"
            />
            <BeforeAfterSlider
              before="/images/bathroom/before-2.webp"
              after="/images/bathroom/after-2.webp"
              altBefore="Bathroom before renovation 2"
              altAfter="Bathroom after renovation 2"
            />
            <BeforeAfterSlider
              before="/images/bathroom/before-3.webp"
              after="/images/bathroom/after-3.webp"
              altBefore="Bathroom before renovation 3"
              altAfter="Bathroom after renovation 3"
            />
          </div>
        </div>
      </section>

      {/* ── 6. Trust Signals — Two-column ── */}
      <section className="py-16 md:py-24 bg-brio-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: bullet items */}
            <div className="space-y-6">
              {KEY_SELLING_POINTS.map((point) => (
                <div key={point.title} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-brio-navy shrink-0 mt-1" />
                  <div>
                    <h3 className="text-brio-navy text-[16px] font-semibold font-heading mb-1">
                      {point.title}
                    </h3>
                    <ul className="space-y-1">
                      {point.items.map((item) => (
                        <li
                          key={item}
                          className="text-text-body text-[14px] leading-relaxed"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: CTA block */}
            <div>
              <h2 className="text-[24px] md:text-[30px] font-semibold text-brio-navy font-heading mb-4 uppercase tracking-wide">
                REMODEL WITH CONFIDENCE &ndash; CHOOSE BRIO
              </h2>
              <p className="text-text-body text-[15px] leading-relaxed mb-6">
                At BRIO Construction, we combine expert craftsmanship, premium
                materials, and a streamlined process to deliver stunning bathroom
                transformations in just 2 weeks. From complimentary 3D renderings
                to a 12-month workmanship warranty, every detail is designed to
                give you peace of mind and a bathroom you&apos;ll love.
              </p>
              <Link
                href="#get-in-touch"
                className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
              >
                BOOK YOUR FREE CONSULTATION NOW!
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Gallery ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold italic text-brio-navy font-heading text-center mb-12 uppercase tracking-wide">
            ELEVATE YOUR BATHROOM COMPLETE REMODELS IN JUST 2 WEEKS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
              <div key={n} className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={`/images/bathroom/gallery-${n}.webp`}
                  alt={`Bathroom renovation gallery ${n}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Testimonials ── */}
      <section className="py-16 md:py-24 bg-brio-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12 uppercase tracking-wide">
            WHAT HOMEOWNERS ARE SAYING!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white p-8">
                <p className="text-text-body text-[14px] leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="text-brio-navy font-semibold text-[15px]">
                    {t.name}
                  </p>
                  <p className="text-text-muted text-[13px]">
                    {t.location} &mdash; {t.project}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Contact + FAQ side by side ── */}
      <section id="get-in-touch" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Form */}
            <div>
              <h2 className="text-[24px] md:text-[30px] font-semibold text-brio-navy font-heading mb-6 uppercase tracking-wide">
                Get In Touch
              </h2>
              <LeadForm source="bathroom-remodeling" service="bathroom" variant="stacked" />
            </div>

            {/* Right: FAQ */}
            <div>
              <FAQ items={FAQ_ITEMS} compact />
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. Newsletter ── */}
      <Newsletter />

      {/* ── 11. Footer ── */}
      <Footer />
    </>
  );
}
