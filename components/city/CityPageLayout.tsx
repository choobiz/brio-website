import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FAQ from "@/components/shared/FAQ";
import { SERVICES } from "@/lib/constants";
import {
  MessageSquare,
  DollarSign,
  CalendarCheck,
  ClipboardCheck,
  Gem,
  ShieldCheck,
  Sparkles,
  FileCheck,
  Wrench,
} from "lucide-react";

const HERO_IMAGES = [
  { src: "/images/city/hero-1.jpg", alt: "Modern bathroom renovation" },
  { src: "/images/city/hero-2.jpg", alt: "Kitchen interior design" },
  { src: "/images/city/hero-3.jpg", alt: "Home renovation in progress" },
  { src: "/images/city/hero-4.jpg", alt: "Custom home interior" },
];

const TRUST_ITEMS = [
  {
    icon: MessageSquare,
    title: "Clear Communication",
    text: "We aim to maintain clear communication with you throughout the entire project, to help ensure your renovation is a success.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    text: "There shouldn\u2019t be any mystery as to where or how your money is being spent. That\u2019s why we provide transparent pricing.",
  },
  {
    icon: CalendarCheck,
    title: "Project Schedule",
    text: "From start to finish, we\u2019ll keep you up to date as your home renovation progresses. So you\u2019re not guessing what\u2019s going on.",
  },
  {
    icon: ClipboardCheck,
    title: "Permits & Inspections",
    text: "We don\u2019t take short cuts or leave things to chance. We ensure all permits and inspections are properly completed.",
  },
  {
    icon: Gem,
    title: "Quality Materials",
    text: "We want to ensure your home renovation lasts a lifetime. That\u2019s why we use the best materials based on your requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    text: "Safety comes first on our job sites. This not only helps prevent accidents, but it help keep the project on budget and schedule.",
  },
  {
    icon: Sparkles,
    title: "Clean Up",
    text: "Things can get messy during a renovation, but you have no need to worry. Your home will be cleaned upon completion.",
  },
  {
    icon: FileCheck,
    title: "License & Insurance",
    text: "We are licensed and insured to protect your investment and our people. You can expect professional service from us.",
  },
  {
    icon: Wrench,
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

      {/* Hero */}
      <section className="bg-brio-light-gray py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading mb-4">
            Achieve Your Dream Home in {cityName}
          </h1>
          <p className="text-text-body text-[16px] leading-relaxed mb-8 max-w-2xl mx-auto">
            Remodel with BRIO Construction, get transparent pricing, expert
            guidance, and turn your ideas into reality.
          </p>
          <Link
            href="#get-in-touch"
            className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
          >
            Contact Us for a Free Quotation
          </Link>
        </div>

        {/* Image carousel row */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {HERO_IMAGES.map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learn More */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[26px] md:text-[32px] font-semibold text-brio-navy font-heading text-center mb-12 uppercase tracking-wide">
            Learn More About Building in {cityName} with BRIO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <ClipboardCheck className="w-8 h-8 text-brio-navy" />
              </div>
              <h3 className="text-brio-navy text-[16px] font-semibold font-heading mb-3 uppercase">
                {cityName}&apos;s Renovation Regulations
              </h3>
              <p className="text-text-body text-[14px] leading-relaxed">
                Renovating in {cityName} requires understanding local building
                codes, permits, and zoning regulations. Our experts ensure your
                project meets all legal requirements for a hassle-free
                experience.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Gem className="w-8 h-8 text-brio-navy" />
              </div>
              <h3 className="text-brio-navy text-[16px] font-semibold font-heading mb-3 uppercase">
                Smart Design for {cityName} Homes
              </h3>
              <p className="text-text-body text-[14px] leading-relaxed">
                Maximize space, enhance energy efficiency, and incorporate modern
                design elements tailored to {cityName}&apos;s climate and
                lifestyle. We help you create a stylish, functional, and
                sustainable home.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-brio-navy" />
              </div>
              <h3 className="text-brio-navy text-[16px] font-semibold font-heading mb-3 uppercase">
                Quality Craftsmanship &amp; Trusted Contractors
              </h3>
              <p className="text-text-body text-[14px] leading-relaxed">
                At BRIO Construction, we partner with experienced professionals
                who deliver top-tier craftsmanship, transparent pricing, and
                on-time project completion&mdash;so you can renovate with
                confidence.
              </p>
            </div>
          </div>
          <p className="text-center text-text-body text-[15px]">
            <span className="font-semibold">
              Ready to start your {cityName} project?
            </span>{" "}
            <Link
              href="#get-in-touch"
              className="text-brio-navy font-semibold underline hover:no-underline"
            >
              Contact BRIO today for a free consultation!
            </Link>
          </p>
        </div>
      </section>

      {/* Services - Two Column Links */}
      <section className="py-12 md:py-16 bg-brio-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
            <ul className="space-y-2">
              {SERVICES_LEFT.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="text-brio-navy text-[14px] hover:underline"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {SERVICES_RIGHT.map((s) => (
                <li key={s.slug}>
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

      {/* Dark CTA Banner */}
      <section className="bg-brio-navy py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[24px] md:text-[32px] font-semibold text-white font-heading mb-6 uppercase tracking-wide">
            No Matter the Project, You Can Begin Your Build Today
          </h2>
          <Link
            href="#get-in-touch"
            className="inline-block bg-white text-brio-navy text-[14px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-gray-100 transition-colors"
          >
            Contact Us for a Free Consultation Today!
          </Link>
        </div>
      </section>

      {/* Build with Confidence */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[26px] md:text-[32px] font-semibold text-brio-navy font-heading text-center mb-12 uppercase tracking-wide">
            Build with Confidence
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {TRUST_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4">
                  <div className="shrink-0">
                    <Icon className="w-6 h-6 text-brio-navy mt-0.5" />
                  </div>
                  <div>
                    <h3 className="text-brio-navy text-[15px] font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-text-body text-[13px] leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <Link
              href="#get-in-touch"
              className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
            >
              Schedule Your Free Consultation Today!
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form + FAQ side by side */}
      <section id="get-in-touch" className="py-16 md:py-24 bg-brio-light-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h3 className="text-[24px] md:text-[28px] font-semibold text-brio-navy font-heading mb-2 uppercase">
                Let&apos;s Discuss Your Project
              </h3>
              <p className="text-text-body text-[14px] mb-6">
                Ready to explore the possibilities for your project? We&apos;d
                love to hear your ideas! Taking the first step is easy. Share a
                few details below, and our team will get in touch to schedule a
                friendly, no-obligation consultation.
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  required
                  placeholder="Name"
                  className="w-full h-12 px-4 border border-border text-sm bg-white focus:outline-none focus:border-brio-navy"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone"
                  className="w-full h-12 px-4 border border-border text-sm bg-white focus:outline-none focus:border-brio-navy"
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full h-12 px-4 border border-border text-sm bg-white focus:outline-none focus:border-brio-navy"
                />
                <input
                  type="text"
                  placeholder="Service Address"
                  className="w-full h-12 px-4 border border-border text-sm bg-white focus:outline-none focus:border-brio-navy"
                />
                <textarea
                  placeholder="Description of Work"
                  rows={4}
                  className="w-full px-4 py-3 border border-border text-sm bg-white focus:outline-none focus:border-brio-navy resize-none"
                />
                <button
                  type="submit"
                  className="w-full h-12 bg-brio-navy text-white font-semibold uppercase tracking-wide text-sm hover:bg-brio-navy/90 transition-colors"
                >
                  Book Now!
                </button>
              </form>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="text-[24px] md:text-[28px] font-semibold text-brio-navy font-heading mb-6 uppercase">
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
