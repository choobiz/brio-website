import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FAQ from "@/components/shared/FAQ";
import PartnersCarousel from "@/components/shared/PartnersCarousel";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Land Development & Pre-Construction",
  description:
    "Expert land development and pre-construction planning services by BRIO Construction.",
};

const SERVICE_CATEGORIES = [
  {
    title: "Site Assessment & Feasibility Studies",
    items: [
      "Land suitability analysis",
      "Environmental impact assessments",
      "Soil testing and geotechnical surveys",
    ],
  },
  {
    title: "Zoning, Permits & Regulatory Approvals",
    items: [
      "Rezoning and variance requests",
      "Permit coordination with local authorities",
      "Building code compliance",
    ],
  },
  {
    title: "Infrastructure & Land Preparation",
    items: [
      "Roads, utilities, and drainage systems",
      "Excavation, grading, and clearing",
      "Stormwater management and erosion control",
    ],
  },
  {
    title: "Pre-Construction Planning & Project Management",
    items: [
      "Cost analysis and budgeting",
      "Blueprint and architectural coordination",
      "Construction scheduling and logistics",
    ],
  },
];

const FAQ_ITEMS = [
  {
    q: "What does land development involve?",
    a: "Land development includes everything from initial site assessment and feasibility studies to zoning approvals, infrastructure installation, and preparing the land for construction. We manage the entire process from raw land to a build-ready site.",
  },
  {
    q: "How long does the pre-construction process take?",
    a: "Timelines vary depending on the project scope, site conditions, and permitting requirements. A typical pre-construction phase can take anywhere from a few weeks to several months. We provide a detailed timeline during the initial consultation.",
  },
  {
    q: "Can you help with rezoning applications?",
    a: "Yes, our team has extensive experience navigating municipal zoning regulations. We handle rezoning applications, variance requests, and all regulatory approvals to ensure your project moves forward smoothly.",
  },
  {
    q: "What types of projects do you work on?",
    a: "We work on a wide range of projects including single-family homes, multi-family developments, townhouse complexes, mixed-use buildings, and commercial properties. Whether you are a homeowner, developer, or investor, we tailor our services to your goals.",
  },
  {
    q: "How do I get started with a land development project?",
    a: "Getting started is easy. Book a free consultation with our team and we will assess your property, discuss your vision, and outline a clear plan with timelines and budget estimates to bring your project to life.",
  },
];

export default function LandDevelopmentPreConstructionPage() {
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
                Expert Land Development &amp; Pre-Construction Services By BRIO
              </h1>
              <p className="text-text-body text-[15px] leading-relaxed mb-8">
                Whether you&apos;re a homeowner, developer, or investor, BRIO
                Construction helps you transform vacant land into valuable,
                build-ready sites. From site assessments and feasibility studies
                to infrastructure planning and permit coordination, we handle
                every detail so your project starts on the right foundation.
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
                src="/images/city/img-03.jpg"
                alt="Land development project by BRIO Construction"
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

      {/* ── 3. Why Choose BRIO — Image left, checkmarks right ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — image */}
            <div className="relative h-[350px] lg:h-[500px]">
              <Image
                src="/images/city/img-13.jpg"
                alt="BRIO Construction land development project"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Right — heading + checkmarks */}
            <div>
              <h2 className="text-[24px] md:text-[32px] font-semibold text-brio-navy font-heading mb-4 uppercase tracking-wide">
                Why Choose BRIO For Land Development
              </h2>
              <p className="text-text-body text-[15px] leading-relaxed mb-8">
                Turning raw land into a thriving community takes expertise,
                precision, and a partner you can trust. BRIO brings all three to
                every project.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Proven Expertise",
                    desc: "over 15 years of experience in land development and construction across the Greater Vancouver area",
                  },
                  {
                    title: "Tailored Strategies",
                    desc: "every project is unique, and we develop custom plans to match your goals and budget",
                  },
                  {
                    title: "Regulatory Experts",
                    desc: "we navigate complex zoning, permitting, and compliance requirements so you don\u2019t have to",
                  },
                  {
                    title: "Cost-Effective Planning",
                    desc: "we optimize every phase for maximum ROI and minimize unexpected costs",
                  },
                  {
                    title: "Sustainable Development",
                    desc: "incorporating eco-friendly practices and energy-efficient solutions into every project",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-brio-navy shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                    </div>
                    <p className="text-text-body text-[15px] leading-relaxed">
                      <span className="font-bold text-brio-navy">
                        {item.title}
                      </span>{" "}
                      &ndash; {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
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
                Our Land Development &amp; Pre-Construction Services
              </h2>
              <p className="text-text-body text-[15px] leading-relaxed mb-8">
                From initial feasibility studies to infrastructure installation,
                BRIO manages every phase of land development and pre-construction
                planning.
              </p>
              <Link
                href="#get-in-touch"
                className="inline-block bg-brio-navy text-white text-[13px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
              >
                Book A Free Consultation Today!
              </Link>
            </div>

            {/* Right — service categories */}
            <div className="space-y-0 divide-y divide-gray-300">
              {SERVICE_CATEGORIES.map((cat) => (
                <div key={cat.title} className="py-8 first:pt-0 last:pb-0">
                  <h3 className="text-brio-navy text-[18px] font-semibold italic font-heading uppercase tracking-wide mb-4">
                    {cat.title}
                  </h3>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
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

      {/* ── 5. Why Invest — Checkmarks + CTA ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[24px] md:text-[32px] font-semibold text-brio-navy font-heading mb-10 uppercase tracking-wide">
            Why Invest In Professional Land Development
          </h2>
          <div className="space-y-6 mb-10">
            {[
              {
                title: "Maximize Land Value",
                desc: "unlock the full potential of your property with expert site planning",
              },
              {
                title: "Smooth Approvals & Permitting",
                desc: "avoid delays with experienced regulatory navigation",
              },
              {
                title: "Efficient Project Execution",
                desc: "streamlined processes from planning to ground-breaking",
              },
              {
                title: "Cost Savings & Risk Reduction",
                desc: "proactive planning that prevents costly surprises down the road",
              },
              {
                title: "Sustainable & Future-Proof Development",
                desc: "build with long-term value and environmental responsibility in mind",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="w-5 h-5 bg-brio-navy shrink-0 mt-0.5 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                </div>
                <p className="text-text-body text-[15px] leading-relaxed">
                  <span className="font-bold text-brio-navy">
                    {item.title}
                  </span>{" "}
                  &ndash; {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div>
            <Link
              href="#get-in-touch"
              className="inline-block bg-brio-navy text-white text-[13px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
            >
              Book A Free Consultation Today!
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

      {/* ── 8. Footer ── */}
      <Footer />
    </>
  );
}
