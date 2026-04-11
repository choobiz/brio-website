import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FAQ from "@/components/shared/FAQ";
import ContactForm from "@/components/service/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bathroom Remodeling",
  description: "Transform your bathroom with BRIO Construction. Complete remodel in just 2 weeks. Three packages starting from $15,000.",
};

const PACKAGES = [
  { name: "The Refresh Package", tagline: "A Clean Slate. A Modern Space.", price: "$15,000", features: ["New acrylic tub/surround", "Durable porcelain tile", "Professional installation", "Quality fixtures upgrade", "12-month warranty"], financing: "$160/month" },
  { name: "The Retreat", tagline: "Your Daily Escape, Designed for You.", price: "$25,000", features: ["Tiled soaker tub surround", "Quartz countertops", "Upgraded fixtures", "Designer tile selection", "Enhanced lighting", "Personal style consultation"], financing: "$270/month", popular: true },
  { name: "The Spa", tagline: "Experience Ultimate In-Home Luxury.", price: "$50,000", features: ["Custom walk-in shower", "Heated flooring system", "Custom vanity design", "Frameless glass enclosure", "Premium natural materials", "Luxury spa features"], financing: "$550/month" },
];

const FAQ_ITEMS = [
  { q: "How long does a bathroom remodel take?", a: "After our design and selection phase, we need 2 weeks from demo until handover." },
  { q: "How does the design process work?", a: "It starts with an initial consultation to discuss your vision, needs, and budget. Our design team helps you select materials, fixtures, and finishes." },
  { q: "What ensures quality craftsmanship?", a: "We adhere to industry standards, employ skilled tradespeople, and use high-quality materials. We also provide a 12-month warranty." },
  { q: "Do I need design ideas before starting?", a: "Not mandatory. Our experienced design team can collaborate with you to develop a design that aligns with your preferences and budget." },
  { q: "How can I prepare for a bathroom remodel?", a: "Clear out personal items, protect adjacent areas from dust, and set up alternative facilities if needed. Ask our team about prep and cleanup services." },
];

export default function BathroomPage() {
  return (
    <>
      <Navbar />
      <section className="bg-brio-light-gray py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading mb-6">Transform Your Bathroom in Record Time!</h1>
          <p className="text-brio-navy font-semibold text-[18px] mb-2">Complete Remodel in Just 2 Weeks!</p>
          <p className="text-text-body text-[16px] leading-relaxed mb-4">Complimentary 3D Rendering — See your new bathroom before construction begins!</p>
          <Link href="#get-in-touch" className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide">Book Your Free Consultation</Link>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12">BRIO Bathroom Packages</h2>
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
