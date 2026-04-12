import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FAQ from "@/components/shared/FAQ";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kitchen Remodeling",
  description:
    "Transform your kitchen with BRIO Construction's expert kitchen remodeling services, creating a modern or cozy design tailored to your needs.",
};

const PACKAGES = [
  {
    name: "The Essential Kitchen",
    tagline: "Modern Style Meets Smart Value",
    price: "$42,000",
    features: [
      "Stock Shaker or Slab-Door cabinets with soft-close hardware",
      "Designer Series laminate countertops",
      "Classic ceramic subway tile backsplash",
      "Standard stainless steel appliance package",
      "Luxury vinyl plank flooring",
      "Stainless steel undermount sink & chrome faucet",
      "Standard LED pot lights",
      "Full BRIO construction service & project management",
    ],
    financing: "$450/month",
  },
  {
    name: "The Designer Kitchen",
    tagline: "Your Vision, Brought to Life",
    price: "$65,000",
    features: [
      "Semi-custom painted MDF or wood veneer cabinetry",
      "Quartz countertops (Caesarstone or Silestone)",
      "Porcelain, glass, or marble mosaic backsplash",
      "Mid-range appliances (Bosch or KitchenAid)",
      "Engineered hardwood or high-end LVP flooring",
      "Silgranit or large stainless sink & upgraded faucet",
      "Layered lighting plan with pendants & under-cabinet LEDs",
      "Full BRIO construction service & project management",
    ],
    financing: "$700/month",
    popular: true,
  },
  {
    name: "The Luxe Kitchen",
    tagline: "Uncompromising Quality. Bespoke Design.",
    price: "$98,000+",
    features: [
      "Fully custom solid wood or premium veneer cabinetry",
      "Premium quartz, granite, or marble with waterfall edges",
      "Full-height slab or intricate custom tile backsplash",
      "Professional-grade appliances (Sub-Zero, Wolf, Miele)",
      "Wide-plank hardwood or large-format tile with in-floor heating",
      "Integrated or apron-front sink with high-end faucet",
      "Comprehensive custom dimmable lighting throughout",
      "White-glove BRIO construction service & project management",
    ],
    financing: "$1,050/month",
  },
];

type ComparisonRow = {
  feature: string;
  essential: string;
  designer: string;
  luxe: string;
};

const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: "Best For",
    essential:
      "First-time renovators, rental properties, or those seeking maximum value and modern function.",
    designer:
      "Homeowners seeking a personalized, high-style kitchen with premium materials and enhanced functionality. The most popular choice.",
    luxe: "The ultimate culinary experience with bespoke craftsmanship, professional-grade appliances, and uncompromising quality.",
  },
  {
    feature: "Cabinetry",
    essential:
      "Stock Shaker or Slab-Door Cabinets: High-quality melamine or thermofoil finish. Durable, easy to clean, with soft-close hardware standard.",
    designer:
      "Semi-Custom Cabinetry: Painted MDF or high-quality wood veneer. Greater choice of styles, colours, and custom storage solutions (e.g., pantry pull-outs).",
    luxe: "Fully Custom Cabinetry: Solid wood or premium veneer construction. Bespoke design, handcrafted details, and unlimited finishing options.",
  },
  {
    feature: "Countertops",
    essential:
      "Laminate (Designer Series): Modern, high-definition laminate mimicking stone or wood. Highly durable and stain-resistant.",
    designer:
      "Quartz (Group 1-2): Brands like Caesarstone or Silestone. Non-porous, highly durable, and stain/scratch resistant. Wide range of modern colours.",
    luxe: "Premium Quartz, Granite, or Marble: Unique, high-end natural stone slabs or top-tier quartz with dramatic veining. Waterfall edges included.",
  },
  {
    feature: "Backsplash",
    essential:
      "Classic Ceramic Subway Tile: Timeless, affordable, and easy to maintain. Professional installation.",
    designer:
      "Porcelain, Glass, or Marble Mosaic Tile: A wider selection of shapes, sizes, and textures to create a designer focal point.",
    luxe: "Full-Height Slab Backsplash: A seamless, dramatic look matching the countertops. Or, intricate custom tile work (e.g., herringbone).",
  },
  {
    feature: "Appliances",
    essential:
      "Standard Appliance Package: Reliable brands like Whirlpool or Frigidaire (stainless steel fridge, range, dishwasher, OTR microwave).",
    designer:
      "Mid-Range Appliance Package: Upgraded brands like Bosch or KitchenAid. Features like induction cooktops, counter-depth fridges, and quieter dishwashers.",
    luxe: "Professional-Grade Appliance Suite: Luxury brands such as Sub-Zero, Wolf, or Miele. Integrated refrigeration, gas ranges, steam ovens, and wine fridges.",
  },
  {
    feature: "Flooring",
    essential:
      "Luxury Vinyl Plank (LVP): 100% waterproof, highly durable, and comfortable underfoot. Wide range of realistic wood looks.",
    designer:
      "Engineered Hardwood or High-End LVP: Matches existing hardwood or provides a premium, durable surface.",
    luxe: "High-End Engineered Hardwood or Tile: Wide-plank hardwood or large-format porcelain tile, often with in-floor heating.",
  },
  {
    feature: "Sink & Faucet",
    essential:
      "Stainless Steel Undermount Sink: Quality single or double bowl sink. Chrome pull-down faucet from a reputable brand like Moen.",
    designer:
      "Silgranit or Large Stainless Sink: High-end composite or 16-gauge stainless steel sink. Upgraded faucet with multiple spray functions in matte black or brass.",
    luxe: "Integrated or Apron-Front Sink: Custom-integrated sink or iconic farmhouse style. Paired with a high-end faucet (e.g., Brizo, Kohler Karbon).",
  },
  {
    feature: "Lighting",
    essential:
      "Standard LED Pot Lights: Clean, efficient ceiling lighting. Includes one fixture over the sink or island.",
    designer:
      "Layered Lighting Plan: LED pot lights, under-cabinet LED task lighting, and a budget for two decorative pendant lights.",
    luxe: "Comprehensive Custom Lighting: Dimmable layered lighting, including under-cabinet, in-cabinet, toe-kick, and statement pendant/chandelier lighting.",
  },
  {
    feature: "Labor & Project Mgmt.",
    essential:
      "Full BRIO Construction Service: Includes all demolition, installation, trade coordination, site protection, cleanup, and dedicated project management.",
    designer:
      "Full BRIO Construction Service: Same comprehensive management with more complex installation requirements.",
    luxe: "White-Glove BRIO Construction Service: Meticulous project management for high-end finishes and coordination with interior designers.",
  },
];

const FAQ_ITEMS = [
  {
    q: "How does the design and selection process work?",
    a: "The process starts with an initial consultation to discuss your vision, needs, and budget. Our design team assists you in selecting materials, fixtures, and finishes that align with your preferences. We also provide a complimentary 3D rendering so you can visualize your new kitchen before construction begins.",
  },
  {
    q: "How long does a kitchen remodel take?",
    a: "Most kitchen renovations take 8-12 weeks, depending on complexity. We create a clear timeline and keep you informed every step of the way.",
  },
  {
    q: "What measures ensure quality craftsmanship?",
    a: "We have a network of reputable contractors that adhere to industry standards, employ skilled tradespeople, and use high-quality materials. We also provide a 12-month warranty on all workmanship.",
  },
  {
    q: "Do I need permits for a kitchen remodel?",
    a: "Some renovations may require permits, especially if moving plumbing or electrical. We take care of all necessary permits to ensure a hassle-free process.",
  },
  {
    q: "Do I need design ideas before starting?",
    a: "While having a vision is beneficial, it's not mandatory. Our experienced design team can collaborate with you to develop a design that aligns with your preferences and budget.",
  },
];

const TRUST_ITEMS = [
  { title: "Licensed & Insured", text: "Fully licensed and insured to protect your investment. You can expect professional service from start to finish." },
  { title: "Industry Recognized", text: "Recognized by industry associations for our commitment to excellence, quality standards, and ethical business practices." },
  { title: "Proven Expertise", text: "Years of experience delivering high-quality kitchen renovations across Greater Vancouver with a track record of satisfied clients." },
  { title: "Transparent Processes", text: "No hidden fees or surprises. We provide detailed quotes, clear timelines, and keep you informed every step of the way." },
  { title: "Quality Craftsmanship", text: "We use premium materials and skilled tradespeople to ensure your kitchen renovation is built to last a lifetime." },
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
    text: "From start to finish, the BRIO team was professional, transparent, and delivered outstanding results. Our full home renovation was completed on time and on budget. We couldn't be happier with the final outcome.",
  },
  {
    name: "K.M.",
    location: "Vancouver",
    project: "Bathroom Remodeling",
    text: "We hired BRIO for our bathroom remodel and were blown away by the quality of work. The team was respectful of our home, cleaned up daily, and the finished product looks absolutely stunning. Highly recommend!",
  },
];

export default function KitchenPage() {
  return (
    <>
      <Navbar />

      {/* 1. Hero — Two-column layout */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
            {/* Left – text */}
            <div className="py-16 md:py-24 md:pr-12 flex flex-col justify-center">
              <h1 className="font-heading text-[36px] md:text-[46px] font-semibold text-brio-navy leading-[1.15] mb-5">
                Breathe New Life Into Your Kitchen
              </h1>
              <p className="text-text-body text-[15px] leading-relaxed mb-5 max-w-lg">
                The kitchen is the heart of your home. Whether you dream of a sleek
                modern kitchen, a cozy farmhouse design, or a chef-inspired space, we
                bring your vision to life with high-quality craftsmanship, smart layouts,
                and premium finishes.
              </p>
              <p className="text-brio-navy font-semibold text-[15px] mb-2">
                Complimentary 3D Rendering &mdash; See your new Kitchen before
                construction begins!
              </p>
              <p className="text-text-body text-[14px] italic mb-8">
                Limited-Time Offer &ndash; Act Now!
              </p>
              <div>
                <Link
                  href="#get-in-touch"
                  className="inline-block bg-brio-navy text-white text-[13px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
                >
                  Get My Free, Detailed Estimate
                </Link>
              </div>
            </div>
            {/* Right – image */}
            <div className="relative h-[350px] md:h-auto md:min-h-[520px]">
              <Image
                src="/images/city/img-09.webp"
                alt="Beautiful kitchen renovation by BRIO Construction"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Partners */}
      <section className="py-10 md:py-14 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-[18px] md:text-[22px] font-semibold text-brio-navy uppercase tracking-wider">
            Our Partners
          </h2>
        </div>
      </section>

      {/* 3. BRIO Kitchen Packages */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12">
            BRIO Kitchen Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`bg-brio-light-gray p-8 ${pkg.popular ? "ring-2 ring-brio-navy" : ""}`}
              >
                {pkg.popular && (
                  <p className="text-[12px] font-semibold text-white bg-brio-navy inline-block px-3 py-1 uppercase tracking-wide mb-4">
                    Most Popular
                  </p>
                )}
                <h3 className="text-brio-navy text-[20px] font-semibold font-heading mb-1">
                  {pkg.name}
                </h3>
                <p className="text-text-muted text-[13px] italic mb-4">
                  {pkg.tagline}
                </p>
                <p className="text-text-muted text-xs uppercase tracking-wider mb-1">
                  Starting from
                </p>
                <p className="text-brio-navy text-[32px] font-bold mb-4">
                  {pkg.price}
                  <span className="text-[14px] font-normal">*</span>
                </p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className="text-text-body text-[14px] flex items-start gap-2"
                    >
                      <span className="text-brio-navy mt-0.5">&#10003;</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-white p-3 text-center mb-4">
                  <p className="text-text-muted text-xs">Financing Available</p>
                  <p className="text-brio-navy font-bold">{pkg.financing}</p>
                  <p className="text-text-muted text-[11px]">
                    12-month interest-free financing
                  </p>
                  <Link
                    href="/financing"
                    className="text-brio-navy text-[12px] underline"
                  >
                    Learn More
                  </Link>
                </div>
                <Link
                  href="#get-in-touch"
                  className="block w-full text-center bg-brio-navy text-white py-3 text-[13px] font-semibold uppercase tracking-wide"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Before/After placeholder */}
      {/* TODO: Before/After gallery section */}

      {/* 5. Comparison Table */}
      <section className="py-16 md:py-24 bg-brio-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-3">
            Kitchen Renovation Packages
          </h2>
          <p className="text-text-body text-[15px] text-center mb-12">
            Choose the perfect package for your kitchen transformation
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr className="bg-brio-navy text-white">
                  <th className="text-left p-4 text-[14px] font-semibold uppercase tracking-wide w-[160px]">
                    Feature
                  </th>
                  <th className="text-left p-4 text-[14px] font-semibold">
                    <span className="uppercase tracking-wide">Package 1: The Essential</span>
                    <br />
                    <span className="text-[12px] font-normal opacity-80">$42,000 - $60,000</span>
                  </th>
                  <th className="text-left p-4 text-[14px] font-semibold">
                    <span className="uppercase tracking-wide">Package 2: The Designer</span>
                    <br />
                    <span className="text-[12px] font-normal opacity-80">$65,000 - $95,000</span>
                  </th>
                  <th className="text-left p-4 text-[14px] font-semibold">
                    <span className="uppercase tracking-wide">Package 3: The Luxe</span>
                    <br />
                    <span className="text-[12px] font-normal opacity-80">$98,000+</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DATA.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? "bg-white" : "bg-brio-light-gray"}
                  >
                    <td className="p-4 text-brio-navy font-semibold text-[14px] align-top">
                      {row.feature}
                    </td>
                    <td className="p-4 text-text-body text-[13px] leading-relaxed align-top">
                      {row.essential}
                    </td>
                    <td className="p-4 text-text-body text-[13px] leading-relaxed align-top">
                      {row.designer}
                    </td>
                    <td className="p-4 text-text-body text-[13px] leading-relaxed align-top">
                      {row.luxe}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. Trust Signals — Two-column layout */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left – bullet list */}
            <div>
              <ul className="space-y-6">
                {TRUST_ITEMS.map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span className="w-6 h-6 rounded bg-brio-navy flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="text-brio-navy text-[15px] font-semibold mb-1">{item.title}</h3>
                      <p className="text-text-body text-[13px] leading-relaxed">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Right – heading + CTA */}
            <div>
              <h2 className="font-heading text-[24px] md:text-[30px] font-semibold text-brio-navy uppercase tracking-wide leading-snug mb-5">
                Remodel with Confidence &ndash; Choose BRIO
              </h2>
              <p className="text-text-body text-[15px] leading-relaxed mb-8">
                At BRIO Construction, we believe in delivering excellence without compromise.
                Partnering with us is a decision you can trust!
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

      {/* 7. Full-width CTA banner */}
      <section className="bg-brio-navy py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-[24px] md:text-[34px] font-bold text-white uppercase tracking-wide leading-snug">
            Love Your Kitchen Again, Let&apos;s Build Something Beautiful!
          </h2>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-text-body text-[15px] leading-relaxed text-center max-w-3xl mx-auto mb-12">
            At BRIO Construction, we&apos;re all about turning your renovation dreams into
            reality. But don&apos;t just take our word for it&mdash;hear from our satisfied
            clients themselves.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-brio-light-gray p-8">
                <p className="text-text-body text-[14px] leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-brio-navy text-[15px] font-semibold">{t.name}</p>
                  <p className="text-text-muted text-[13px]">{t.location} &mdash; {t.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Contact Form + FAQ side by side */}
      <section id="get-in-touch" className="py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left – form */}
            <div>
              <h3 className="font-heading text-[20px] md:text-[24px] font-semibold text-brio-navy mb-2 uppercase tracking-wide">
                Let&apos;s Discuss Your Project
              </h3>
              <p className="text-text-body text-[13px] leading-relaxed mb-6">
                Ready to explore the possibilities for your project? We&apos;d love to hear your ideas!
                Taking the first step is easy. Share a few details below, and our team will get in touch to schedule a friendly, no-obligation consultation to discuss your project.
              </p>
              <form className="space-y-3">
                <input type="text" required placeholder="Name" className="w-full h-11 px-4 border border-gray-300 text-sm bg-white focus:outline-none focus:border-brio-navy" />
                <div className="grid grid-cols-2 gap-3">
                  <input type="tel" required placeholder="Phone" className="w-full h-11 px-4 border border-gray-300 text-sm bg-white focus:outline-none focus:border-brio-navy" />
                  <input type="email" required placeholder="Email" className="w-full h-11 px-4 border border-gray-300 text-sm bg-white focus:outline-none focus:border-brio-navy" />
                </div>
                <input type="text" placeholder="Service Address" className="w-full h-11 px-4 border border-gray-300 text-sm bg-white focus:outline-none focus:border-brio-navy" />
                <textarea placeholder="Description of Work" rows={4} className="w-full px-4 py-3 border border-gray-300 text-sm bg-white focus:outline-none focus:border-brio-navy resize-none" />
                <button type="submit" className="w-full h-11 bg-brio-navy text-white font-semibold uppercase tracking-wide text-[13px] hover:bg-brio-navy/90 transition-colors">
                  Book Now!
                </button>
              </form>
            </div>

            {/* Right – FAQ */}
            <div>
              <h3 className="font-heading text-[20px] md:text-[24px] font-semibold text-brio-navy mb-6 uppercase tracking-wide">
                Frequently Asked Questions
              </h3>
              <FAQ items={FAQ_ITEMS} compact />
            </div>
          </div>
        </div>
      </section>

      {/* 10. Newsletter */}
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

      {/* 11. Footer */}
      <Footer />
    </>
  );
}
