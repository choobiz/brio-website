import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FAQ from "@/components/shared/FAQ";
import ContactForm from "@/components/service/ContactForm";
import { SERVICES } from "@/lib/constants";

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

      {/* Hero */}
      <section className="bg-brio-light-gray py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading mb-6">
            Achieve Your Dream Home in {cityName}
          </h1>
          <p className="text-text-body text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-3xl mx-auto">
            Remodel with BRIO Construction, get transparent pricing, expert guidance, and turn your ideas into reality.
          </p>
          <Link
            href="#get-in-touch"
            className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
          >
            Contact Us for a Free Quotation
          </Link>
        </div>
      </section>

      {/* Learn More */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12">
            Learn More About Building in {cityName} with BRIO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-brio-light-gray p-8">
              <h3 className="text-brio-navy text-[18px] font-semibold font-heading mb-4">
                {cityName}&apos;s Renovation Regulations
              </h3>
              <p className="text-text-body text-[15px] leading-relaxed">
                Renovating in {cityName} requires understanding local building codes, permits, and zoning regulations. Our experts ensure your project meets all legal requirements for a hassle-free experience.
              </p>
            </div>
            <div className="bg-brio-light-gray p-8">
              <h3 className="text-brio-navy text-[18px] font-semibold font-heading mb-4">
                Smart Design for {cityName} Homes
              </h3>
              <p className="text-text-body text-[15px] leading-relaxed">
                Maximize space, enhance energy efficiency, and incorporate modern design elements tailored to {cityName}&apos;s climate and lifestyle. We help you create a stylish, functional, and sustainable home.
              </p>
            </div>
            <div className="bg-brio-light-gray p-8">
              <h3 className="text-brio-navy text-[18px] font-semibold font-heading mb-4">
                Quality Craftsmanship & Trusted Contractors
              </h3>
              <p className="text-text-body text-[15px] leading-relaxed">
                At BRIO Construction, we partner with experienced professionals who deliver top-tier craftsmanship, transparent pricing, and on-time project completion—so you can renovate with confidence.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="#get-in-touch"
              className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
            >
              Ready to Start Your {cityName} Project?
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-brio-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-10">
            Our Services in {cityName}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="bg-white p-5 text-center hover:shadow-md transition-shadow"
              >
                <p className="text-brio-navy text-[13px] font-semibold uppercase tracking-wide">
                  {s.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Build with Confidence */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12">
            Build with Confidence
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TRUST_ITEMS.map((item) => (
              <div key={item.title}>
                <h3 className="text-brio-navy text-[16px] font-semibold font-heading mb-2">
                  {item.title}
                </h3>
                <p className="text-text-body text-[14px] leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
      <FAQ items={faq} />
      <Footer />
    </>
  );
}
