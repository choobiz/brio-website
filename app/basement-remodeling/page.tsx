import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import LeadForm from "@/components/shared/LeadForm";
import FAQ from "@/components/shared/FAQ";
import PartnersCarousel from "@/components/shared/PartnersCarousel";
import Newsletter from "@/components/home/Newsletter";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";

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
    project: "Basement Remodeling",
    text: "We hired BRIO for our basement remodel and were blown away by the quality of work. The team was respectful of our home, cleaned up daily, and the finished product looks absolutely stunning. Highly recommend!",
  },
];

export default function BasementRemodelingPage() {
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
                Turn Your Basement Into A Sleek, Functional Space With Brio
              </h1>
              <p className="text-brio-navy text-[18px] font-bold mb-4">
                Maximize Your Home&rsquo;s Potential with a Stunning Basement
                Remodel
              </p>
              <p className="text-text-body text-[15px] leading-relaxed mb-8">
                Your basement holds endless possibilities. Whether you envision a
                cozy family retreat, an entertainment hub, a home office, or even
                a rental suite, BRIO Construction transforms underused basements
                into stunning, functional spaces. With expert craftsmanship,
                smart design, and premium finishes, we add real value and comfort
                to your home.
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
                src="/images/city/img-01.jpg"
                alt="Stunning basement remodel by BRIO Construction"
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
                alt="BRIO Construction custom home project"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Right — heading + checkmarks */}
            <div>
              <h2 className="text-[24px] md:text-[32px] font-semibold text-brio-navy font-heading mb-4 uppercase tracking-wide">
                Why Choose BRIO For Your Custom Home?
              </h2>
              <p className="text-text-body text-[15px] leading-relaxed mb-8">
                When it comes to your home, you need a construction partner you
                can trust. BRIO brings the experience, transparency, and
                craftsmanship to make your basement vision a reality.
              </p>
              <div className="space-y-4">
                {WHY_BRIO.map((item) => (
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

      {/* ── 4. The BRIO Basement Services — CTA left (sticky), categories right ── */}
      <section className="py-16 md:py-24 bg-brio-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — sticky CTA */}
            <div className="lg:sticky lg:top-32">
              <h2 className="text-[24px] md:text-[32px] font-semibold text-brio-navy font-heading mb-4 uppercase tracking-wide">
                The BRIO Basement Services
              </h2>
              <p className="text-text-body text-[15px] leading-relaxed mb-8">
                At BRIO Construction, we design and build stunning, practical
                basements that match your needs and style.
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

      {/* ── 5. Why Remodel Your Basement — Checkmark bullets + CTA ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[24px] md:text-[32px] font-semibold text-brio-navy font-heading mb-10 uppercase tracking-wide">
            Why Remodel Your Basement?
          </h2>
          <div className="space-y-6 mb-10">
            {WHY_REMODEL.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="w-5 h-5 bg-brio-navy shrink-0 mt-0.5 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                </div>
                <div>
                  <p className="text-text-body text-[15px] leading-relaxed">
                    <span className="font-bold text-brio-navy">
                      {item.title}
                    </span>{" "}
                    &ndash; {item.desc}
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
              Start Your Basement Transformation
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. Full-width CTA Banner ── */}
      <section className="py-16 md:py-20 bg-brio-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[24px] md:text-[32px] font-semibold text-white font-heading mb-4">
            Ready to Turn Your Renovation Dreams Into Reality?
          </h2>
          <p className="text-white/80 text-[15px] leading-relaxed mb-8 max-w-2xl mx-auto">
            From initial concept to the final walkthrough, BRIO Construction is
            your trusted partner for basement transformations that exceed
            expectations. Let&apos;s build something extraordinary together.
          </p>
          <Link
            href="#get-in-touch"
            className="inline-block bg-white text-brio-navy text-[13px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-gray-100 transition-colors"
          >
            Get Your Free Estimate
          </Link>
        </div>
      </section>

      {/* ── 7. Testimonials ── */}
      <section className="py-16 md:py-24 bg-brio-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12 uppercase tracking-wide">
            What Homeowners Are Saying!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
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
          <div className="text-center">
            <Link
              href="#get-in-touch"
              className="inline-block bg-brio-navy text-white text-[13px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
            >
              Book A Free Consultation Today!
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. Contact + FAQ side by side ── */}
      <section id="get-in-touch" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Form */}
            <div>
              <h2 className="text-[24px] md:text-[30px] font-semibold text-brio-navy font-heading mb-6 uppercase tracking-wide">
                Get In Touch
              </h2>
              <LeadForm source="basement-remodeling" service="basement" variant="stacked" />
            </div>

            {/* Right: FAQ */}
            <div>
              <FAQ items={FAQ_ITEMS} compact />
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. Newsletter ── */}
      <Newsletter />

      {/* ── 10. Footer ── */}
      <Footer />
    </>
  );
}
