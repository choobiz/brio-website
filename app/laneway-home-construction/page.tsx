import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FAQ from "@/components/shared/FAQ";
import PartnersCarousel from "@/components/shared/PartnersCarousel";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import HeroCarousel from "@/components/service/HeroCarousel";

export const metadata: Metadata = {
  title: "Laneway Home Construction",
  description:
    "Explore laneway home construction to boost property value, generate rental income, and expand your living space effectively.",
};

const WHY_CHOOSE = [
  {
    title: "15+ Years of Experience",
    description:
      "BRIO has over 15 years of experience in small-scale residential construction. We understand the unique challenges and opportunities that come with building laneway homes and secondary suites.",
  },
  {
    title: "Custom Design & Functional Spaces",
    description:
      "Every laneway home we build is tailored to your property and lifestyle. We maximize every square foot to create a functional, beautiful living space.",
  },
  {
    title: "Code Compliance & Bylaw Experts",
    description:
      "Navigating zoning bylaws, building codes, and permit requirements can be complex. Our team ensures your laneway home meets all municipal regulations from the start.",
  },
  {
    title: "Investment-Focused Approach",
    description:
      "We design and build with your return on investment in mind — whether you plan to rent out the unit, house family members, or increase your property value.",
  },
  {
    title: "On-Time & On-Budget",
    description:
      "We pride ourselves on delivering projects on schedule and within budget. Our transparent process means no surprises along the way.",
  },
];

const PROCESS_STEPS = [
  {
    step: 1,
    title: "Feasibility Assessment & Zoning Review",
    description:
      "We evaluate your property to determine if a laneway home is possible, reviewing zoning bylaws, lot size requirements, and site conditions.",
  },
  {
    step: 2,
    title: "Custom Design & Planning",
    description:
      "Our design team works with you to create a custom laneway home plan that maximizes your space, suits your needs, and complements your existing property.",
  },
  {
    step: 3,
    title: "Permit Applications & Approvals",
    description:
      "We handle all permit applications and approvals, navigating the municipal process so you don\u2019t have to.",
  },
  {
    step: 4,
    title: "High-Quality Construction & Project Management",
    description:
      "Our experienced team manages every aspect of construction, from foundation to finishing, ensuring quality craftsmanship at every stage.",
  },
  {
    step: 5,
    title: "Rental & Resale Consultation",
    description:
      "Once your laneway home is complete, we can advise on rental strategies and how to maximize your property\u2019s resale value.",
  },
];

const LANEWAY_BENEFITS = [
  {
    title: "Generate Rental Income",
    description:
      "A laneway home can provide a steady stream of rental income, helping you offset your mortgage or fund other investments.",
  },
  {
    title: "Support Multigenerational Living",
    description:
      "Keep your family close while maintaining privacy. A laneway home is perfect for aging parents, adult children, or extended family members.",
  },
  {
    title: "Increase Property Value",
    description:
      "Adding a laneway home significantly increases the overall value of your property, making it a smart long-term investment.",
  },
  {
    title: "Make Use of Unused Space",
    description:
      "Transform your underutilized backyard into a functional, income-generating asset without sacrificing your main home\u2019s footprint.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Can my property accommodate a laneway home?",
    a: "Most properties with lane access in Vancouver, North Vancouver, and surrounding municipalities can accommodate a laneway home. However, it depends on lot size, zoning, and setback requirements. We conduct a thorough feasibility assessment to determine if your property qualifies.",
  },
  {
    q: "How much does it cost to build a laneway home?",
    a: "The cost of building a laneway home varies depending on size, design, finishes, and site conditions. Generally, laneway homes range from $250,000 to $500,000 or more. We provide detailed estimates during the planning phase so you know exactly what to expect.",
  },
  {
    q: "What permits are needed for a laneway home?",
    a: "Building a laneway home requires development permits, building permits, and sometimes additional approvals depending on your municipality. BRIO handles the entire permit process on your behalf, ensuring full compliance with local regulations.",
  },
  {
    q: "How long does it take to build a laneway home?",
    a: "From design to completion, a typical laneway home project takes 6 to 12 months. This includes the design phase, permit approvals, and construction. We provide a clear timeline at the start of every project.",
  },
  {
    q: "Is a laneway home a good investment?",
    a: "Absolutely. Laneway homes generate rental income, increase property value, and provide flexible living space. They are one of the best investments you can make in today\u2019s real estate market, especially in Metro Vancouver where housing demand remains high.",
  },
];

export default function LanewayHomeConstructionPage() {
  return (
    <>
      <Navbar />

      {/* ── 1. Hero — Two-column: dark navy left, image fills right edge-to-edge ── */}
      <section className="bg-brio-navy">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left — text on dark navy */}
          <div className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 flex flex-col justify-center text-center">
            <h1 className="text-[32px] md:text-[44px] font-semibold italic text-white font-heading mb-6 leading-tight">
              Laneway Homes - Maximize Your Property&apos;s Potential
            </h1>
            <p className="text-white/90 text-[14px] leading-relaxed mb-2">
              Looking to <span className="font-bold">add value to your property</span>, create a <span className="font-bold">rental income stream</span>, or build <span className="font-bold">additional living space</span>?
            </p>
            <p className="text-white/90 text-[14px] leading-relaxed mb-2">
              At <span className="font-bold">BRIO Construction</span>, we specialize in designing and building <span className="font-bold">coach houses, laneway homes, and secondary suites</span>, providing homeowners with high-quality, efficient, and modern housing solution
            </p>
            <p className="text-white/90 text-[14px] leading-relaxed mb-2">
              Our team handles <span className="font-bold">everything from permits and design to full construction</span>, ensuring a seamless and stress-free building experience.
            </p>
            <p className="text-white/90 text-[14px] leading-relaxed mb-8">
              Let&apos;s transform your property with a beautifully designed coach house!
            </p>
            <div>
              <Link
                href="#get-in-touch"
                className="inline-block bg-white text-brio-navy text-[13px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-gray-100 transition-colors"
              >
                Book Your Free Consultation Now!
              </Link>
            </div>
          </div>
          {/* Right — image carousel, fills entire right half edge-to-edge */}
          <HeroCarousel
            images={[
              { src: "/images/laneway/hero.webp", alt: "Modern laneway home exterior" },
              { src: "/images/laneway/laneway-02.webp", alt: "Laneway house in Burnaby" },
              { src: "/images/laneway/laneway-04.webp", alt: "Laneway house in East Vancouver" },
              { src: "/images/laneway/laneway-05.webp", alt: "Laneway house in Kitsilano" },
              { src: "/images/laneway/laneway-07.webp", alt: "Laneway house in North Vancouver" },
            ]}
          />
        </div>
      </section>

      {/* ── 2. Partners ── */}
      <PartnersCarousel />

      {/* ── 3. Why Choose BRIO — Full-width text, no image ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-[26px] md:text-[34px] font-semibold text-brio-navy text-center mb-8 uppercase tracking-wider">
            Why Choose BRIO For Your Laneway Home?
          </h2>
          <p className="text-text-body text-[15px] leading-relaxed mb-6 text-center">
            When building a home that&apos;s uniquely yours, you need a construction
            partner you can trust. BRIO Construction stands out with our dedication
            to craftsmanship, client satisfaction, and superior project management.
          </p>
          <h3 className="text-brio-navy text-[16px] font-semibold font-heading mb-5">
            What Sets Us Apart?
          </h3>
          <div className="space-y-3 mb-8">
            {WHY_CHOOSE.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded bg-brio-navy shrink-0 mt-0.5 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                </div>
                <p className="text-text-body text-[14px]">
                  <span className="font-bold">{item.title}</span>
                  {" "}&ndash; {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-text-body text-[14px]">
            Let&apos;s make the most of your property &mdash; schedule your consultation today!
          </p>
        </div>
      </section>

      {/* ── 4. The BRIO Laneway Home Services — CTA left, process steps right ── */}
      <section className="py-16 md:py-24 bg-brio-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — sticky CTA */}
            <div className="lg:sticky lg:top-32">
              <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading mb-4">
                The BRIO Laneway Home Services
              </h2>
              <p className="text-text-body text-[15px] leading-relaxed mb-8">
                At Brio Construction, we offer turnkey solutions for homeowners
                looking to build a coach house, laneway home, or backyard suite.
              </p>
              <Link
                href="#get-in-touch"
                className="inline-block bg-brio-navy text-white text-[13px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
              >
                Book Your Free Consultation Now!
              </Link>
            </div>

            {/* Right — process steps */}
            <div className="space-y-0">
              {PROCESS_STEPS.map((s, i) => (
                <div key={s.step}>
                  <div className="py-6">
                    <h3 className="text-brio-navy text-[18px] font-semibold italic uppercase font-heading mb-2">
                      {s.step}. {s.title}
                    </h3>
                    <p className="text-text-body text-[14px] leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                  {i < PROCESS_STEPS.length - 1 && (
                    <hr className="border-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. What Is A Laneway House? — Text left, image right ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
            {/* Left — text */}
            <div className="py-14 md:py-20 md:pr-12">
              <h2 className="font-heading text-[28px] md:text-[34px] font-semibold text-brio-navy leading-tight mb-5">
                What Is A Laneway House?
              </h2>
              <p className="text-text-body text-[15px] leading-relaxed mb-6">
                A <span className="font-bold">laneway home</span> (also known as a{" "}
                <span className="font-bold">coach house, backyard suite, or garden suite</span>)
                is a <span className="font-bold">self-contained secondary dwelling</span> built
                on the same lot as your primary home. It&apos;s an excellent way to:
              </p>
              <div className="space-y-3 mb-6">
                {LANEWAY_BENEFITS.map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded bg-brio-navy shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                    </div>
                    <p className="text-text-body text-[14px]">
                      <span className="font-bold">{benefit.title}</span>
                      {" "}&ndash; {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-text-body text-[15px] font-semibold mb-7">
                Thinking about adding a coach house to your property?
              </p>
              <Link
                href="#get-in-touch"
                className="inline-block bg-brio-navy text-white text-[13px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
              >
                Book Your Free Consultation Now!
              </Link>
            </div>
            {/* Right — image */}
            <div className="relative h-[300px] md:h-full md:min-h-[480px]">
              <Image
                src="/images/laneway/laneway-03.webp"
                alt="Laneway house in Dunbar"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Contact + FAQ side by side ── */}
      <section id="get-in-touch" className="py-16 md:py-24 bg-brio-light-gray">
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
                    className="w-full h-12 px-4 border border-border text-sm focus:outline-none focus:border-brio-navy bg-white"
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
                      className="w-full h-12 px-4 border border-border text-sm focus:outline-none focus:border-brio-navy bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-text-body text-[13px] font-semibold uppercase tracking-wide mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full h-12 px-4 border border-border text-sm focus:outline-none focus:border-brio-navy bg-white"
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
                    className="w-full h-12 px-4 border border-border text-sm focus:outline-none focus:border-brio-navy bg-white"
                  />
                </div>
                <div>
                  <label className="block text-text-body text-[13px] font-semibold uppercase tracking-wide mb-1">
                    Description
                  </label>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full px-4 py-3 border border-border text-sm focus:outline-none focus:border-brio-navy resize-none bg-white"
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
      <section className="bg-white py-10 md:py-14 border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Image */}
            <div className="shrink-0 hidden md:block">
              <Image
                src="/images/newsletter.png"
                alt="BRIO Construction newsletter"
                width={200}
                height={200}
                className="object-cover w-[180px] h-[180px]"
              />
            </div>

            {/* Content + form */}
            <div className="flex-1">
              <p className="text-text-muted text-[10px] uppercase tracking-[3px] mb-1">
                Subscribe
              </p>
              <h3 className="text-brio-navy text-[22px] md:text-[26px] font-semibold font-heading mb-2">
                The Inside Look
              </h3>
              <p className="text-text-body text-[14px] mb-4">
                Curated home decor picks, expert design advice, and construction
                tips. Join 4,000+ subscribers.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address..."
                  className="flex-1 h-11 px-4 border border-border text-sm focus:outline-none focus:border-brio-navy"
                />
                <button
                  type="submit"
                  className="h-11 px-5 bg-brio-navy text-white text-xs font-semibold uppercase tracking-wide hover:bg-brio-navy/90 transition-colors whitespace-nowrap"
                >
                  Sign Me Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Footer ── */}
      <Footer />
    </>
  );
}
