import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FAQ from "@/components/shared/FAQ";
import ContactForm from "@/components/service/ContactForm";
import Link from "next/link";

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

      {/* ── Hero ── */}
      <section className="bg-brio-light-gray py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading mb-6">
            Build a Smarter, Greener Future with BRIO
          </h1>
          <p className="text-text-body text-[16px] md:text-[18px] leading-relaxed mb-4">
            Imagine a home that produces as much energy as it consumes &mdash;
            reducing your utility bills, creating a healthier indoor
            environment, and increasing the long-term value of your investment.
            At BRIO Construction, we specialize in building high-performance and
            net-zero homes that do exactly that.
          </p>
          <p className="text-text-body text-[16px] md:text-[18px] leading-relaxed mb-8">
            Using cutting-edge building technology and eco-friendly design
            principles, we create homes that deliver superior comfort and
            efficiency &mdash; from superior insulation and airtight envelopes
            to solar energy and smart home automation.
          </p>
          <Link
            href="#get-in-touch"
            className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
          >
            Book a Free Consultation Today!
          </Link>
        </div>
      </section>

      {/* ── Why Choose BRIO ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-2">
            Why Choose BRIO?
          </h2>
          <p className="text-text-muted text-[16px] text-center mb-12">
            What Sets Us Apart?
          </p>
          <div className="space-y-6">
            {WHY_CHOOSE.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="text-brio-navy font-bold text-[18px] mt-0.5">
                  &#10003;
                </span>
                <div>
                  <h3 className="text-brio-navy text-[18px] font-semibold font-heading">
                    {item.title}
                  </h3>
                  <p className="text-text-body text-[15px] leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Types ── */}
      <section className="py-16 md:py-24 bg-brio-light-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12">
            Our High-Performance Home Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICE_TYPES.map((service) => (
              <div key={service.title} className="bg-white p-8">
                <h3 className="text-brio-navy text-[20px] font-semibold font-heading mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="text-text-body text-[14px] leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-brio-navy font-bold mt-0.5">
                        &#x2022;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose High-Performance / Net-Zero ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12">
            Why Choose a High-Performance or Net-Zero Home?
          </h2>
          <div className="space-y-6 mb-10">
            {WHY_HIGH_PERFORMANCE.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="text-brio-navy font-bold text-[18px] mt-0.5">
                  &#10003;
                </span>
                <div>
                  <h3 className="text-brio-navy text-[18px] font-semibold font-heading">
                    {item.title}
                  </h3>
                  <p className="text-text-body text-[15px] leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="#get-in-touch"
              className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
            >
              Start Your High-Performance Home Project
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contact Form ── */}
      <ContactForm />

      {/* ── FAQ ── */}
      <FAQ items={FAQ_ITEMS} />

      {/* ── Footer ── */}
      <Footer />
    </>
  );
}
