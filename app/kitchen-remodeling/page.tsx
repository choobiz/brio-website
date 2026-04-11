import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FAQ from "@/components/shared/FAQ";
import ContactForm from "@/components/service/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kitchen Remodeling",
  description: "Transform your kitchen with BRIO Construction's expert kitchen remodeling services. Three packages starting from $42,000.",
};

const PACKAGES = [
  { name: "The Essential Kitchen", tagline: "Modern Style Meets Smart Value", price: "$42,000", features: ["Quality stock cabinetry", "Durable laminate countertops", "Full project management", "Professional installation", "12-month warranty"], financing: "$450/month" },
  { name: "The Designer Kitchen", tagline: "Your Vision, Brought to Life", price: "$65,000", features: ["Semi-custom cabinetry", "Quartz countertops", "Designer fixture allowance", "Under-cabinet lighting", "Upgraded appliances", "Color customization"], financing: "$700/month", popular: true },
  { name: "The Luxe Kitchen", tagline: "Uncompromising Quality. Bespoke Design", price: "$98,000+", features: ["Fully custom handcrafted cabinetry", "Natural stone or premium quartz", "Professional-grade appliances", "Waterfall island option", "Seamless slab backsplash", "Bespoke design consultation"], financing: "$1,050/month" },
];

const FAQ_ITEMS = [
  { q: "How does the design and selection process work?", a: "The process starts with an initial consultation to discuss your vision, needs, and budget. Our design team assists you in selecting materials, fixtures, and finishes that align with your preferences." },
  { q: "How long does a kitchen remodel take?", a: "Most kitchen renovations take 8-12 weeks, depending on complexity. We create a clear timeline and keep you informed every step of the way." },
  { q: "What measures ensure quality craftsmanship?", a: "We have a network of reputable contractors that adhere to industry standards, employ skilled tradespeople, and use high-quality materials. We also provide a 12-month warranty." },
  { q: "Do I need permits for a kitchen remodel?", a: "Some renovations may require permits, especially if moving plumbing or electrical. We take care of all necessary permits to ensure a hassle-free process." },
  { q: "Do I need design ideas before starting?", a: "While having a vision is beneficial, it's not mandatory. Our experienced design team can collaborate with you to develop a design that aligns with your preferences and budget." },
];

export default function KitchenPage() {
  return (
    <>
      <Navbar />
      <section className="bg-brio-light-gray py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading mb-6">Breathe New Life Into Your Kitchen</h1>
          <p className="text-text-body text-[16px] md:text-[18px] leading-relaxed mb-4">The kitchen is the heart of your home. Whether you dream of a sleek modern kitchen, a cozy farmhouse design, or a chef-inspired space, we bring your vision to life.</p>
          <p className="text-brio-navy font-semibold mb-8">Complimentary 3D Rendering — See your new kitchen before construction begins!</p>
          <Link href="#get-in-touch" className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide">Get My Free Estimate</Link>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12">BRIO Kitchen Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PACKAGES.map((pkg) => (
              <div key={pkg.name} className={`bg-brio-light-gray p-8 ${pkg.popular ? "ring-2 ring-brio-navy" : ""}`}>
                <h3 className="text-brio-navy text-[20px] font-semibold font-heading mb-1">{pkg.name}</h3>
                <p className="text-text-muted text-[13px] italic mb-4">{pkg.tagline}</p>
                <p className="text-text-muted text-xs uppercase tracking-wider mb-1">Starting from</p>
                <p className="text-brio-navy text-[32px] font-bold mb-4">{pkg.price}<span className="text-[14px] font-normal">*</span></p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="text-text-body text-[14px] flex items-start gap-2">
                      <span className="text-brio-navy">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <div className="bg-white p-3 text-center mb-4">
                  <p className="text-text-muted text-xs">Financing Available</p>
                  <p className="text-brio-navy font-bold">{pkg.financing}</p>
                  <p className="text-text-muted text-[11px]">12-month interest-free financing</p>
                </div>
                <Link href="#get-in-touch" className="block w-full text-center bg-brio-navy text-white py-3 text-[13px] font-semibold uppercase tracking-wide">Get Started</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
      <FAQ items={FAQ_ITEMS} />
      <Footer />
    </>
  );
}
