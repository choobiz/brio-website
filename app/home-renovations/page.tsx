import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FAQ from "@/components/shared/FAQ";
import PartnersCarousel from "@/components/shared/PartnersCarousel";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Home Renovations",
  description:
    "Transform your space with home renovations tailored to your lifestyle. Discover how we can create your perfect retreat today.",
};

const RENOVATION_SERVICES = [
  {
    title: "Kitchen Remodeling",
    desc: "Custom kitchens designed for function and style, from layout optimization to premium finishes.",
    href: "/kitchen-remodeling",
  },
  {
    title: "Bathroom Remodeling",
    desc: "Spa-inspired bathrooms with modern fixtures, elegant tile work, and smart storage solutions.",
    href: "/bathroom-remodeling",
  },
  {
    title: "Garage Conversion",
    desc: "Transform your garage into a functional living space, studio, or home office.",
    href: "/home-additions-extensions",
  },
  {
    title: "Basement Remodeling",
    desc: "Turn your basement into a game room, wet bar, home theater, or legal rental suite.",
    href: "/basement-remodeling",
  },
  {
    title: "Home Addition",
    desc: "Expand your home with seamless additions that blend perfectly with your existing architecture.",
    href: "/home-additions-extensions",
  },
  {
    title: "High Performance Builds",
    desc: "Energy-efficient homes built with advanced materials and systems for superior comfort and savings.",
    href: "/high-performance-homes",
  },
  {
    title: "Laneway Home Construction",
    desc: "Custom laneway homes designed to maximize your property value and provide flexible living options.",
    href: "/laneway-home-construction",
  },
];

const WHY_RENOVATE = [
  {
    title: "Love Your Home Again",
    desc: "Upgrade your space for comfort, function, and beauty. A renovation breathes new life into your home and makes every day more enjoyable.",
  },
  {
    title: "Personalized to You",
    desc: "Every renovation is customized to fit your needs and style. We listen to your vision and bring it to life with expert craftsmanship.",
  },
  {
    title: "Smart Investment",
    desc: "Boost your home's value, efficiency, and long-term appeal. Renovations are one of the best investments you can make in your property.",
  },
  {
    title: "Energy Savings",
    desc: "Enjoy a cozier, more efficient home while cutting utility costs. Modern materials and systems reduce your energy footprint.",
  },
  {
    title: "On-Time & On-Budget",
    desc: "We deliver without compromising on quality. Our experienced project managers keep everything on track from start to finish.",
  },
];

const FAQ_ITEMS = [
  {
    q: "How much does a home renovation cost?",
    a: "Every project is unique! We offer custom pricing based on your vision, space, and materials. During our free consultation, we'll walk you through options that fit your budget.",
  },
  {
    q: "How long does a renovation take?",
    a: "Timelines depend on the scope of the project, but most renovations take a few weeks to a few months. We give you a clear timeline upfront and keep you updated throughout.",
  },
  {
    q: "Do I need permits for my renovation?",
    a: "Some projects require permits, and we handle all approvals and paperwork to make the process easy for you. Our team ensures everything meets local building codes.",
  },
  {
    q: "Can I live in my home during the renovation?",
    a: "In most cases, yes! We work to minimize disruption so you can continue with daily life. For larger projects, we'll discuss the best plan to keep things comfortable.",
  },
  {
    q: "What kind of warranty does BRIO offer?",
    a: "We stand by our work and offer comprehensive warranties covering structural integrity and craftsmanship, giving you peace of mind long after your renovation is complete.",
  },
];

export default function HomeRenovationsPage() {
  return (
    <>
      <Navbar />

      {/* ── 1. Hero — Two-column: text left, image right ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
            {/* Left — text */}
            <div className="py-16 md:py-24 md:pr-12 flex flex-col justify-center">
              <h1 className="font-heading text-[36px] md:text-[46px] font-semibold italic text-brio-navy leading-[1.15] mb-5">
                Beautiful, Functional, and Smart Renovations Designed for You
              </h1>
              <p className="text-text-body text-[15px] leading-relaxed mb-5 max-w-lg">
                Your home should reflect your lifestyle, personality, and needs.
                Whether it&apos;s a kitchen that inspires your inner chef, a cozy
                basement retreat, or a complete home transformation, BRIO
                Construction is here to bring your vision to life.
              </p>
              <p className="text-text-body text-[15px] leading-relaxed mb-8 max-w-lg">
                With 15+ years of experience, we make renovations stress-free,
                exciting, and rewarding.
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
            <div className="relative h-[350px] md:h-auto md:min-h-[520px]">
              <Image
                src="/images/city/img-02.jpg"
                alt="Home renovation by BRIO Construction"
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

      {/* ── 3. Renovation Services — service links ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-[24px] md:text-[32px] font-semibold text-brio-navy uppercase tracking-wide text-center mb-12">
            Our Renovation Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RENOVATION_SERVICES.map((svc) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="bg-brio-light-gray p-8 group transition-colors hover:bg-brio-navy"
              >
                <h3 className="text-brio-navy text-[16px] font-semibold font-heading uppercase tracking-wide italic mb-3 group-hover:text-white">
                  {svc.title}
                </h3>
                <p className="text-text-body text-[14px] leading-relaxed group-hover:text-white/80">
                  {svc.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Why Renovate with BRIO — checkmark bullets ── */}
      <section className="py-16 md:py-24 bg-brio-light-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — checkmarks */}
            <div>
              <h2 className="font-heading text-[24px] md:text-[30px] font-semibold text-brio-navy uppercase tracking-wide leading-snug mb-8">
                Why Renovate with BRIO?
              </h2>
              <ul className="space-y-5">
                {WHY_RENOVATE.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded bg-brio-navy flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </span>
                    <div>
                      <h3 className="text-brio-navy text-[15px] font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-text-body text-[13px] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Right — CTA block */}
            <div>
              <h3 className="font-heading text-[24px] md:text-[30px] font-semibold text-brio-navy uppercase tracking-wide leading-snug mb-5">
                Remodel with Confidence &mdash; Choose BRIO
              </h3>
              <p className="text-text-body text-[15px] leading-relaxed mb-6">
                At BRIO Construction, we believe in delivering excellence
                without compromise. Our licensed, insured team brings 15+ years
                of experience to every project, backed by transparent pricing
                and a 12-month workmanship warranty on every job.
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

      {/* ── 5. Make Your Home Work for You ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — image */}
            <div className="relative h-[350px] md:h-[440px] overflow-hidden">
              <Image
                src="/images/city/img-02.jpg"
                alt="BRIO renovation project"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Right — content */}
            <div>
              <h2 className="font-heading text-[24px] md:text-[30px] font-semibold text-brio-navy uppercase tracking-wide leading-snug mb-6">
                Make Your Home Work for You
              </h2>
              <div className="space-y-4 text-text-body text-[15px] leading-relaxed mb-8">
                <p>
                  <strong className="text-brio-navy">Need more space?</strong>{" "}
                  We design additions and conversions that seamlessly expand
                  your living area.
                </p>
                <p>
                  <strong className="text-brio-navy">Want to modernize?</strong>{" "}
                  From outdated kitchens to tired bathrooms, we bring your home
                  into the present with style.
                </p>
                <p>
                  <strong className="text-brio-navy">
                    Looking to save on energy?
                  </strong>{" "}
                  Our high-performance builds and smart upgrades reduce your
                  footprint and your bills.
                </p>
              </div>
              <Link
                href="#get-in-touch"
                className="inline-block bg-brio-navy text-white text-[13px] font-semibold px-7 py-3.5 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
              >
                Let&apos;s Talk About Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Contact + FAQ side by side ── */}
      <section id="get-in-touch" className="py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left — form */}
            <div>
              <h3 className="font-heading text-[20px] md:text-[24px] font-semibold text-brio-navy mb-2 uppercase tracking-wide">
                Let&apos;s Discuss Your Project
              </h3>
              <p className="text-text-body text-[13px] leading-relaxed mb-6">
                Ready to explore the possibilities for your renovation? Share a
                few details below, and our team will get in touch to schedule a
                friendly, no-obligation consultation.
              </p>
              <form className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Name"
                  className="w-full h-11 px-4 border border-gray-300 text-sm bg-white focus:outline-none focus:border-brio-navy"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="tel"
                    required
                    placeholder="Phone"
                    className="w-full h-11 px-4 border border-gray-300 text-sm bg-white focus:outline-none focus:border-brio-navy"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    className="w-full h-11 px-4 border border-gray-300 text-sm bg-white focus:outline-none focus:border-brio-navy"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Service Address"
                  className="w-full h-11 px-4 border border-gray-300 text-sm bg-white focus:outline-none focus:border-brio-navy"
                />
                <textarea
                  placeholder="Description of Work"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 text-sm bg-white focus:outline-none focus:border-brio-navy resize-none"
                />
                <button
                  type="submit"
                  className="w-full h-11 bg-brio-navy text-white font-semibold uppercase tracking-wide text-[13px] hover:bg-brio-navy/90 transition-colors"
                >
                  Book Now!
                </button>
              </form>
            </div>

            {/* Right — FAQ */}
            <div>
              <h3 className="font-heading text-[20px] md:text-[24px] font-semibold text-brio-navy mb-6 uppercase tracking-wide">
                Frequently Asked Questions
              </h3>
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
