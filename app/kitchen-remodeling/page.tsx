import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FAQ from "@/components/shared/FAQ";
import ContactForm from "@/components/service/ContactForm";
import TrustSignals from "@/components/service/TrustSignals";
import Testimonials from "@/components/service/Testimonials";
import Link from "next/link";

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

export default function KitchenPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-brio-light-gray py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading mb-6">
            Breathe New Life Into Your Kitchen
          </h1>
          <p className="text-text-body text-[16px] md:text-[18px] leading-relaxed mb-4">
            The kitchen is the heart of your home. Whether you dream of a sleek
            modern kitchen, a cozy farmhouse design, or a chef-inspired space, we
            bring your vision to life.
          </p>
          <p className="text-brio-navy font-semibold mb-8">
            Complimentary 3D Rendering &mdash; See your new kitchen before
            construction begins!
          </p>
          <Link
            href="#get-in-touch"
            className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide"
          >
            Get My Free, Detailed Estimate
          </Link>
        </div>
      </section>

      {/* 3 Packages */}
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

      {/* Comparison Table */}
      <section className="py-16 md:py-24 bg-brio-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12">
            Compare Kitchen Packages
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr className="bg-brio-navy text-white">
                  <th className="text-left p-4 text-[14px] font-semibold uppercase tracking-wide w-[160px]">
                    Feature
                  </th>
                  <th className="text-left p-4 text-[14px] font-semibold uppercase tracking-wide">
                    Essential &mdash; $42,000
                  </th>
                  <th className="text-left p-4 text-[14px] font-semibold uppercase tracking-wide">
                    Designer &mdash; $65,000
                  </th>
                  <th className="text-left p-4 text-[14px] font-semibold uppercase tracking-wide">
                    Luxe &mdash; $98,000+
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

      {/* Trust Signals */}
      <TrustSignals />

      {/* Testimonials */}
      <Testimonials heading="Love Your Kitchen Again, Let's Build Something Beautiful!" />

      {/* Contact Form */}
      <ContactForm />

      {/* FAQ */}
      <FAQ items={FAQ_ITEMS} />

      {/* Footer */}
      <Footer />
    </>
  );
}
