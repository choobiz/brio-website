import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FAQ from "@/components/shared/FAQ";
import PartnersCarousel from "@/components/shared/PartnersCarousel";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "High Performance Homes",
  description:
    "Explore high performance homes with superior insulation and solar energy for enhanced efficiency and investment protection.",
};

const WHY_CHOOSE = [
  {
    title: "Leading Experts in Energy-Efficient Homes",
    description:
      "Our team specializes in high-performance building science, including BC Energy Step Code, Passive House principles, and net-zero construction.",
  },
  {
    title: "Custom Design Solutions",
    description:
      "Every home is designed to match your lifestyle, aesthetic preferences, and energy goals. No cookie-cutter builds.",
  },
  {
    title: "Future-Proof Technology",
    description:
      "We integrate the latest in smart home automation, renewable energy, and building envelope technology to ensure your home stays ahead of the curve.",
  },
  {
    title: "End-to-End Project Management",
    description:
      "From initial design and permits to construction and final commissioning, we manage every detail so you don't have to.",
  },
  {
    title: "Transparent Communication",
    description:
      "You will always know the status of your project. Dedicated project manager, same-day responses, and weekly progress updates.",
  },
];

const SERVICE_TYPES = [
  {
    title: "High-Performance Home Construction",
    items: [
      "Superior insulation and airtight building envelopes for maximum energy efficiency",
      "Advanced windows and doors engineered for thermal performance",
      "Energy-efficient HVAC systems, heat pumps, and smart climate controls",
    ],
  },
  {
    title: "Net-Zero Home Design & Build",
    items: [
      "Solar panel integration for on-site energy generation",
      "Energy storage solutions (battery systems) for grid independence",
      "Efficient water heating and heat recovery ventilation systems",
    ],
  },
  {
    title: "Deep Energy Retrofits",
    items: [
      "Upgrade insulation, air sealing, and windows in existing homes",
      "Convert to energy-efficient heating and cooling systems",
      "Install renewable energy systems like solar panels and heat pumps",
    ],
  },
  {
    title: "Smart Home & Automation",
    items: [
      "Energy monitoring systems to track and optimize consumption",
      "Automated lighting, heating, and ventilation controls",
      "Integrated security and air filtration systems",
    ],
  },
];

const WHY_HIGH_PERFORMANCE = [
  {
    title: "Unmatched Energy Efficiency",
    description:
      "High-performance homes use up to 80% less energy than conventional homes through superior insulation, airtight envelopes, and efficient mechanical systems.",
  },
  {
    title: "Lower Utility Bills",
    description:
      "Dramatically reduce your monthly energy costs. Many net-zero homeowners see utility bills drop to near zero.",
  },
  {
    title: "Eco-Friendly Living",
    description:
      "Reduce your carbon footprint and contribute to a more sustainable future with renewable energy and responsible building practices.",
  },
  {
    title: "Long-Term Savings",
    description:
      "While the upfront investment may be higher, the long-term savings on energy, maintenance, and increased home value more than pay for themselves.",
  },
  {
    title: "Healthier Indoor Air Quality",
    description:
      "Advanced ventilation systems with heat recovery ensure a constant supply of fresh, filtered air, reducing allergens and improving comfort year-round.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What is a net-zero home?",
    a: "A net-zero home is designed to produce as much energy as it consumes over the course of a year. This is achieved through a combination of superior insulation, airtight construction, energy-efficient systems, and renewable energy generation such as solar panels.",
  },
  {
    q: "How much can I save on energy bills?",
    a: "High-performance homes typically reduce energy consumption by 50-80% compared to conventional construction. Net-zero homes can virtually eliminate energy bills, with many homeowners seeing costs drop to near zero annually.",
  },
  {
    q: "How much does a high-performance home cost to build?",
    a: "High-performance homes typically cost 5-15% more than conventional construction, depending on the level of performance and features. However, the long-term savings on energy, maintenance, and increased resale value often offset the additional upfront investment within a few years.",
  },
  {
    q: "Can you retrofit an existing home for high performance?",
    a: "Absolutely. Our deep energy retrofit services upgrade your existing home with improved insulation, air sealing, high-performance windows, energy-efficient heating and cooling systems, and renewable energy. The result is a dramatically more comfortable and efficient home.",
  },
  {
    q: "Are there government rebates available?",
    a: "Yes, there are several federal and provincial programs offering rebates and incentives for energy-efficient home construction and retrofits, including the Canada Greener Homes Grant and BC Hydro and FortisBC rebate programs. We can help you navigate available incentives to maximize your savings.",
  },
];

export default function HighPerformanceHomesPage() {
  return (
    <>
      <Navbar />

      {/* ── 1. Hero — Two-column, white background ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
            {/* Left — text */}
            <div className="py-16 md:py-24 md:pr-12">
              <h1 className="text-[32px] md:text-[44px] font-semibold italic text-brio-navy font-heading mb-6 leading-tight">
                Build a Smarter, Greener Future with BRIO
              </h1>
              <p className="text-text-body text-[15px] leading-relaxed mb-4">
                Imagine a home that produces as much energy as it consumes
                &mdash; reducing your utility bills, creating a healthier indoor
                environment, and increasing the long-term value of your
                investment. At BRIO Construction, we specialize in building
                high-performance and net-zero homes that do exactly that.
              </p>
              <p className="text-text-body text-[15px] leading-relaxed mb-8">
                Using cutting-edge building technology and eco-friendly design
                principles, we create homes that deliver superior comfort and
                efficiency &mdash; from superior insulation and airtight
                envelopes to solar energy and smart home automation.
              </p>
              <div>
                <Link
                  href="#get-in-touch"
                  className="inline-block bg-brio-navy text-white text-[13px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
                >
                  Book A Free Consultation Today!
                </Link>
              </div>
            </div>
            {/* Right — image */}
            <div className="relative h-[300px] md:h-auto md:min-h-[480px]">
              <Image
                src="/images/city/img-05.webp"
                alt="High-performance home by BRIO Construction"
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

      {/* ── 3. Why Choose BRIO — Checkmark bullets ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[24px] md:text-[32px] font-semibold text-brio-navy font-heading mb-2 uppercase tracking-wide">
            Why Choose BRIO?
          </h2>
          <p className="text-text-muted text-[15px] mb-10">
            What Sets Us Apart?
          </p>
          <div className="space-y-4">
            {WHY_CHOOSE.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="w-5 h-5 bg-brio-navy shrink-0 mt-0.5 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                </div>
                <p className="text-text-body text-[15px] leading-relaxed">
                  <span className="font-bold text-brio-navy">
                    {item.title}
                  </span>{" "}
                  &ndash; {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Service Types — Sticky CTA left, categories right ── */}
      <section className="py-16 md:py-24 bg-brio-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — sticky CTA */}
            <div className="lg:sticky lg:top-32">
              <h2 className="text-[24px] md:text-[32px] font-semibold text-brio-navy font-heading mb-4 uppercase tracking-wide">
                Our High-Performance Home Services
              </h2>
              <p className="text-text-body text-[15px] leading-relaxed mb-8">
                From new construction to deep energy retrofits and smart home
                automation, we deliver homes that are built for the future.
              </p>
              <Link
                href="#get-in-touch"
                className="inline-block bg-brio-navy text-white text-[13px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
              >
                Start Your High-Performance Home Project
              </Link>
            </div>

            {/* Right — service categories */}
            <div className="space-y-0 divide-y divide-gray-300">
              {SERVICE_TYPES.map((service) => (
                <div key={service.title} className="py-8 first:pt-0 last:pb-0">
                  <h3 className="text-brio-navy text-[18px] font-semibold italic font-heading uppercase tracking-wide mb-4">
                    {service.title}
                  </h3>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="text-text-body text-[14px] leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-text-muted mt-0.5">&ndash;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Why Choose High-Performance — Checkmark bullets + CTA ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[24px] md:text-[32px] font-semibold text-brio-navy font-heading mb-10 uppercase tracking-wide">
            Why Choose a High-Performance or Net-Zero Home?
          </h2>
          <div className="space-y-6 mb-10">
            {WHY_HIGH_PERFORMANCE.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="w-5 h-5 bg-brio-navy shrink-0 mt-0.5 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                </div>
                <div>
                  <p className="text-text-body text-[15px] leading-relaxed">
                    <span className="font-bold text-brio-navy">
                      {item.title}
                    </span>{" "}
                    &ndash; {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <Link
              href="#get-in-touch"
              className="inline-block bg-brio-navy text-white text-[13px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
            >
              Start Your High-Performance Home Project
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. Contact + FAQ side by side ── */}
      <section id="get-in-touch" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Form */}
            <div>
              <h2 className="text-[24px] md:text-[30px] font-semibold text-brio-navy font-heading mb-6 uppercase tracking-wide">
                Get In Touch
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-text-body text-[13px] font-semibold uppercase tracking-wide mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full h-12 px-4 border border-border text-sm focus:outline-none focus:border-brio-navy"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-text-body text-[13px] font-semibold uppercase tracking-wide mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="Your phone number"
                      className="w-full h-12 px-4 border border-border text-sm focus:outline-none focus:border-brio-navy"
                    />
                  </div>
                  <div>
                    <label className="block text-text-body text-[13px] font-semibold uppercase tracking-wide mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full h-12 px-4 border border-border text-sm focus:outline-none focus:border-brio-navy"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-text-body text-[13px] font-semibold uppercase tracking-wide mb-1">
                    Service Address
                  </label>
                  <input
                    type="text"
                    placeholder="Project address"
                    className="w-full h-12 px-4 border border-border text-sm focus:outline-none focus:border-brio-navy"
                  />
                </div>
                <div>
                  <label className="block text-text-body text-[13px] font-semibold uppercase tracking-wide mb-1">
                    Description
                  </label>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full px-4 py-3 border border-border text-sm focus:outline-none focus:border-brio-navy resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-brio-navy text-white py-4 text-[14px] font-semibold uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
                >
                  Book Now
                </button>
              </form>
            </div>

            {/* Right: FAQ */}
            <div>
              <FAQ items={FAQ_ITEMS} compact />
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Newsletter ── */}
      <section className="py-10 md:py-14 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="text-text-muted text-[11px] uppercase tracking-widest mb-1">
                Subscribe
              </p>
              <h2 className="font-heading text-[22px] md:text-[26px] font-bold text-brio-navy mb-2">
                The Inside Look
              </h2>
              <p className="text-text-body text-[13px] leading-relaxed mb-4 max-w-md">
                The email newsletter that delivers curated home decor and
                furniture picks, expert design advice, and more. Join 4,000+
                subscribers.
              </p>
              <form className="flex gap-2 max-w-md">
                <input
                  type="email"
                  placeholder="Your email address..."
                  className="flex-1 h-10 px-4 border border-gray-300 text-sm bg-white focus:outline-none focus:border-brio-navy"
                />
                <button
                  type="submit"
                  className="h-10 px-5 bg-brio-navy text-white font-semibold uppercase tracking-wide text-[12px] hover:bg-brio-navy/90 transition-colors shrink-0"
                >
                  Sign Me Up
                </button>
              </form>
            </div>
            <div className="hidden md:block relative w-[200px] h-[240px] rounded-t-full overflow-hidden">
              <Image
                src="/images/newsletter.png"
                alt="Builder overlooking a construction site"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Footer ── */}
      <Footer />
    </>
  );
}
