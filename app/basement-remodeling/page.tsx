import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FAQ from "@/components/shared/FAQ";
import ContactForm from "@/components/service/ContactForm";
import Testimonials from "@/components/service/Testimonials";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Basement Remodeling",
  description:
    "Transform your basement with BRIO Construction's expert basement remodeling services, creating a cozy retreat tailored to your needs.",
};

const WHY_BRIO = [
  {
    title: "15+ Years of Experience",
    desc: "Our team brings extensive knowledge and expertise to every basement remodel, delivering results that stand the test of time.",
  },
  {
    title: "Custom Designs",
    desc: "We create personalized basement layouts tailored to your lifestyle, whether it's a home theater, office, or guest suite.",
  },
  {
    title: "Full-Service Project Management",
    desc: "From initial design to final walkthrough, we handle every detail so you can sit back and watch your basement come to life.",
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden fees or surprise charges. We provide detailed estimates and keep you informed at every stage.",
  },
  {
    title: "High-Quality Craftsmanship",
    desc: "We use premium materials and skilled tradespeople to ensure your basement remodel exceeds expectations.",
  },
];

const SERVICE_CATEGORIES = [
  {
    title: "Entertainment & Family Rooms",
    items: [
      "Home theaters with surround sound and premium seating",
      "Open-concept family lounges for relaxation and gatherings",
      "Game rooms with custom built-ins and themed decor",
    ],
  },
  {
    title: "Home Offices & Personal Spaces",
    items: [
      "Quiet, productive workspaces with built-in desks and shelving",
      "Art studios and creative workshops",
      "Reading nooks and personal retreats",
    ],
  },
  {
    title: "Guest Suites & Basement Apartments",
    items: [
      "Comfortable guest bedrooms with en-suite bathrooms",
      "Legal rental suites with separate entrances",
      "Full bathrooms and kitchenettes for independent living",
    ],
  },
  {
    title: "Fitness & Wellness Spaces",
    items: [
      "Home gyms with rubber flooring and mirrored walls",
      "Yoga and meditation rooms",
      "Spa-like bathrooms and saunas for ultimate relaxation",
    ],
  },
  {
    title: "Basement Bars & Wine Cellars",
    items: [
      "Custom-built bars with seating and entertainment areas",
      "Temperature-controlled wine storage and display",
      "Elegant lighting and finishes for a sophisticated vibe",
    ],
  },
];

const WHY_REMODEL = [
  {
    title: "Expand Your Living Space",
    desc: "Your basement offers untapped square footage that can be converted into valuable living space without expanding your home's footprint.",
  },
  {
    title: "Increase Your Home's Value",
    desc: "A finished basement significantly boosts your property's resale value, making it one of the smartest home investments you can make.",
  },
  {
    title: "Customize for Your Lifestyle",
    desc: "Whether you need a home gym, entertainment hub, or a rental suite for extra income, your basement can be tailored to your exact needs.",
  },
  {
    title: "Improve Energy Efficiency",
    desc: "Proper insulation, moisture control, and modern HVAC systems turn your basement into a comfortable, energy-efficient space year-round.",
  },
];

const FAQ_ITEMS = [
  {
    q: "How much does a basement remodel cost?",
    a: "Costs vary depending on the size of your basement, the scope of work, and the finishes you choose. We provide detailed, transparent estimates during our free consultation so there are no surprises.",
  },
  {
    q: "How long does a basement renovation take?",
    a: "Most basement remodels take 4 to 8 weeks, depending on the complexity of the project. We provide a clear timeline upfront and keep you updated throughout the process.",
  },
  {
    q: "Do I need permits for a basement renovation?",
    a: "Yes, most basement renovations require permits, especially if you're adding plumbing, electrical, or a separate suite. BRIO handles all permits and inspections for you.",
  },
  {
    q: "Can I build a legal rental suite in my basement?",
    a: "In many cases, yes! We can help you navigate local zoning requirements and build a fully compliant rental suite, complete with a separate entrance, kitchen, and bathroom.",
  },
  {
    q: "What kind of warranty does BRIO offer?",
    a: "We stand behind our work with a comprehensive warranty covering structural integrity and craftsmanship, giving you peace of mind long after your project is complete.",
  },
];

export default function BasementRemodelingPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-brio-light-gray py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading mb-4">
            Turn Your Basement into a Sleek, Functional Space with BRIO
          </h1>
          <p className="text-brio-navy font-semibold text-[18px] mb-4">
            Maximize Your Home&rsquo;s Potential with a Stunning Basement Remodel
          </p>
          <p className="text-text-body text-[16px] leading-relaxed mb-8 max-w-2xl mx-auto">
            Your basement holds endless possibilities. Whether you envision a
            cozy family retreat, an entertainment hub, a home office, or even a
            rental suite, BRIO Construction transforms underused basements into
            stunning, functional spaces that add value and comfort to your home.
          </p>
          <Link
            href="#get-in-touch"
            className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide"
          >
            Book a Free Consultation Today!
          </Link>
        </div>
      </section>

      {/* Why Choose BRIO */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12">
            Why Choose BRIO for Your Basement Remodel?
          </h2>
          <div className="space-y-8">
            {WHY_BRIO.map((item) => (
              <div key={item.title}>
                <h3 className="text-brio-navy text-[18px] font-semibold font-heading mb-2">
                  {item.title}
                </h3>
                <p className="text-text-body text-[15px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 md:py-24 bg-brio-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12">
            Our Basement Remodeling Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_CATEGORIES.map((cat) => (
              <div key={cat.title} className="bg-white p-8">
                <h3 className="text-brio-navy text-[18px] font-semibold font-heading mb-4">
                  {cat.title}
                </h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="text-text-body text-[14px] flex items-start gap-2"
                    >
                      <span className="text-brio-navy mt-0.5">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Remodel Your Basement */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12">
            Why Remodel Your Basement?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {WHY_REMODEL.map((item) => (
              <div key={item.title}>
                <h3 className="text-brio-navy text-[18px] font-semibold font-heading mb-2">
                  {item.title}
                </h3>
                <p className="text-text-body text-[15px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="#get-in-touch"
              className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide"
            >
              Start Your Basement Transformation
            </Link>
          </div>
        </div>
      </section>

      <Testimonials heading="What Our Clients Say" />
      <ContactForm />
      <FAQ items={FAQ_ITEMS} />
      <Footer />
    </>
  );
}
