import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FAQ from "@/components/shared/FAQ";
import { SERVICES } from "@/lib/constants";

const HERO_IMAGES = [
  { src: "/images/city/hero-1.jpg", alt: "Modern bathroom renovation" },
  { src: "/images/city/hero-2.jpg", alt: "Kitchen interior design" },
  { src: "/images/city/hero-3.jpg", alt: "Home renovation in progress" },
  { src: "/images/city/hero-4.webp", alt: "Custom home interior" },
];

const TRUST_ITEMS = [
  {
    title: "Clear Communication",
    text: "We aim to maintain clear communication with you throughout the entire project, to help ensure your renovation is a success.",
  },
  {
    title: "Transparent Pricing",
    text: "There shouldn\u2019t be any mystery as to where or how your money is being spent. That\u2019s why we provide transparent pricing.",
  },
  {
    title: "Project Schedule",
    text: "From start to finish, we\u2019ll keep you up to date as your home renovation progresses. So you\u2019re not guessing what\u2019s going on.",
  },
  {
    title: "Permits & Inspections",
    text: "We don\u2019t take short cuts or leave things to chance. We ensure all permits and inspections are properly completed.",
  },
  {
    title: "Quality Materials",
    text: "We want to ensure your home renovation lasts a lifetime. That\u2019s why we use the best materials based on your requirements.",
  },
  {
    title: "Safety First",
    text: "Safety comes first on our job sites. This not only helps prevent accidents, but it help keep the project on budget and schedule.",
  },
  {
    title: "Clean Up",
    text: "Things can get messy during a renovation, but you have no need to worry. Your home will be cleaned upon completion.",
  },
  {
    title: "License & Insurance",
    text: "We are licensed and insured to protect your investment and our people. You can expect professional service from us.",
  },
  {
    title: "Warranty",
    text: "We stand behind our work with a twelve month warranty on all workmanship. If you have a problem, we\u2019ll take care of it.",
  },
] as const;

const SERVICES_LEFT = SERVICES.slice(0, 7);
const SERVICES_RIGHT = SERVICES.slice(7);

function buildFaq(cityName: string) {
  return [
    {
      q: `Do I need a building permit for a home renovation or new construction in ${cityName}?`,
      a: `Yes, most renovations, home additions, and new construction projects in ${cityName} require a permit from the City of ${cityName}. Permits ensure that your project complies with local zoning, safety, and environmental regulations. Our team at BRIO Construction can handle the entire permit application process for you.`,
    },
    {
      q: `What are ${cityName}\u2019s zoning restrictions for duplexes and multi-family housing?`,
      a: `${cityName} has specific zoning bylaws that determine where duplexes, townhouses, and multi-family homes can be built. The ever-changing landscape of zoning bylaws in ${cityName} requires a team that\u2019s active in the area and has the latest updates on zoning and bylaw changes. If you\u2019re unsure about your property\u2019s zoning, BRIO Construction can review your lot and help you maximize its potential.`,
    },
    {
      q: `How long does it take to build or renovate a home in ${cityName}?`,
      a: "Project timelines depend on the scope, permitting process, and weather conditions. On average: Custom Home Construction: 12-16 months, Major Home Renovation: 4-8 months, Duplex or Townhouse: 12-18 months. BRIO Construction ensures efficient project management and timely completion.",
    },
    {
      q: "Can BRIO Construction help with laneway home or secondary suite construction?",
      a: `Yes! ${cityName} encourages laneway homes and secondary suites to increase housing availability. We offer design-build services including laneway home construction, basement suite renovations & legal conversions, and coach houses & accessory dwelling units (ADUs).`,
    },
    {
      q: "How much will my renovation cost?",
      a: "Costs depend on factors like project size, materials, and labor. We provide transparent quotes and help you stay within budget without compromising quality.",
    },
  ];
}

interface CityPageLayoutProps {
  cityName: string;
}

export default function CityPageLayout({ cityName }: CityPageLayoutProps) {
  const faq = buildFaq(cityName);

  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-[32px] md:text-[44px] font-semibold text-brio-navy leading-tight mb-3">
            Achieve Your Dream Home In{"\n"}{cityName}
          </h1>
          <p className="text-text-body text-[15px] leading-relaxed mb-7 max-w-xl mx-auto">
            Remodel with BRIO Construction, get transparent pricing, expert
            guidance, and turn your ideas into reality.
          </p>
          <Link
            href="#get-in-touch"
            className="inline-block bg-brio-navy text-white text-[13px] font-semibold px-7 py-3.5 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
          >
            Contact Us for a Free Quotation
          </Link>
        </div>

        {/* 4-image row */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="grid grid-cols-4 gap-2">
            {HERO_IMAGES.map((img) => (
              <div key={img.src} className="relative aspect-square overflow-hidden rounded-sm">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Learn More ── */}
      <section className="py-14 md:py-20 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-[22px] md:text-[28px] font-semibold text-brio-navy text-center mb-12 uppercase tracking-wider">
            Learn More About Building in{"\n"}{cityName} with BRIO
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Block 1 */}
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full border-2 border-brio-navy flex items-center justify-center">
                <svg className="w-6 h-6 text-brio-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                </svg>
              </div>
              <h3 className="text-brio-navy text-[14px] font-bold uppercase tracking-wide mb-3">
                {cityName}&apos;s Renovation Regulations
              </h3>
              <p className="text-text-body text-[13px] leading-relaxed">
                Renovating in {cityName} requires understanding local building
                codes, permits, and zoning regulations. Our experts ensure your
                project meets all legal requirements for a hassle-free
                experience.
              </p>
            </div>

            {/* Block 2 */}
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full border-2 border-brio-navy flex items-center justify-center">
                <svg className="w-6 h-6 text-brio-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <h3 className="text-brio-navy text-[14px] font-bold uppercase tracking-wide mb-3">
                Smart Design for {cityName} Homes
              </h3>
              <p className="text-text-body text-[13px] leading-relaxed">
                Maximize space, enhance energy efficiency, and incorporate modern
                design elements tailored to {cityName}&apos;s climate and
                lifestyle. We help you create a stylish, functional, and
                sustainable home.
              </p>
            </div>

            {/* Block 3 */}
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full border-2 border-brio-navy flex items-center justify-center">
                <svg className="w-6 h-6 text-brio-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-brio-navy text-[14px] font-bold uppercase tracking-wide mb-3">
                Quality Craftsmanship &amp; Trusted Contractors
              </h3>
              <p className="text-text-body text-[13px] leading-relaxed">
                At BRIO Construction, we partner with experienced professionals
                who deliver top-tier craftsmanship, transparent pricing, and
                on-time project completion&mdash;so you can renovate with
                confidence.
              </p>
            </div>
          </div>

          <p className="text-center text-text-body text-[14px] italic">
            Ready to start your {cityName} project?{" "}
            <Link
              href="#get-in-touch"
              className="text-brio-navy font-semibold not-italic underline hover:no-underline"
            >
              Contact BRIO today for a free consultation!
            </Link>
          </p>
        </div>
      </section>

      {/* ── Services – two-column bullet list ── */}
      <section className="py-10 md:py-14 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-1.5">
            <ul className="space-y-1.5">
              {SERVICES_LEFT.map((s) => (
                <li key={s.slug} className="flex items-center gap-2">
                  <span className="text-brio-navy text-[10px]">&#x25CF;</span>
                  <Link
                    href={`/${s.slug}`}
                    className="text-brio-navy text-[14px] hover:underline"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-1.5">
              {SERVICES_RIGHT.map((s) => (
                <li key={s.slug} className="flex items-center gap-2">
                  <span className="text-brio-navy text-[10px]">&#x25CF;</span>
                  <Link
                    href={`/${s.slug}`}
                    className="text-brio-navy text-[14px] hover:underline"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Dark CTA Banner ── */}
      <section className="bg-brio-navy py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-[22px] md:text-[28px] font-semibold text-white mb-5 uppercase tracking-wider">
            No Matter the Project, You Can Begin Your Build Today
          </h2>
          <Link
            href="#get-in-touch"
            className="inline-block border-2 border-white text-white text-[13px] font-semibold px-7 py-3 uppercase tracking-wide hover:bg-white hover:text-brio-navy transition-colors"
          >
            Contact Us for a Free Consultation Today!
          </Link>
        </div>
      </section>

      {/* ── Build with Confidence ── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-[22px] md:text-[28px] font-semibold text-brio-navy text-center mb-12 uppercase tracking-wider">
            Build with Confidence
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 mb-10">
            {TRUST_ITEMS.map((item) => (
              <div key={item.title}>
                <h3 className="text-brio-navy text-[15px] font-bold mb-1.5">
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
              className="inline-block bg-brio-navy text-white text-[13px] font-semibold px-7 py-3.5 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
            >
              Schedule Your Free Consultation Today!
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contact Form + FAQ side-by-side ── */}
      <section id="get-in-touch" className="py-14 md:py-20 bg-brio-light-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left – form */}
            <div>
              <h3 className="font-heading text-[20px] md:text-[24px] font-semibold text-brio-navy mb-2 uppercase tracking-wide">
                Let&apos;s Discuss Your Project
              </h3>
              <p className="text-text-body text-[13px] leading-relaxed mb-6">
                Ready to explore the possibilities for your project? We&apos;d
                love to hear your ideas! Taking the first step is easy. Share a
                few details below, and our team will get in touch to schedule a
                friendly, no-obligation consultation to discuss your project.
              </p>
              <form className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Name"
                  className="w-full h-11 px-4 border border-gray-300 text-sm bg-white focus:outline-none focus:border-brio-navy"
                />
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

      <Footer />
    </>
  );
}
