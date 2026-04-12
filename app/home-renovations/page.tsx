import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FAQ from "@/components/shared/FAQ";
import ContactForm from "@/components/service/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home Renovations",
  description:
    "Transform your space with home renovations tailored to your lifestyle. Discover how we can create your perfect retreat today.",
};

const RENOVATION_SERVICES = [
  {
    title: "Kitchen Remodeling",
    desc: "Custom kitchens designed for function and style, from layout optimization to premium finishes.",
    href: "/kitchen-remodeling",
  },
  {
    title: "Bathroom Remodeling",
    desc: "Spa-inspired bathrooms with modern fixtures, elegant tile work, and smart storage solutions.",
    href: "/bathroom-remodeling",
  },
  {
    title: "Garage Conversion",
    desc: "Transform your garage into a functional living space, studio, or home office.",
    href: "/home-additions-extensions",
  },
  {
    title: "Basement Remodeling",
    desc: "Turn your basement into a game room, wet bar, home theater, or legal rental suite.",
    href: "/basement-remodeling",
  },
  {
    title: "Home Addition",
    desc: "Expand your home with seamless additions that blend perfectly with your existing architecture.",
    href: "/home-additions-extensions",
  },
  {
    title: "High Performance Builds",
    desc: "Energy-efficient homes built with advanced materials and systems for superior comfort and savings.",
    href: "/high-performance-homes",
  },
  {
    title: "Laneway Home Construction",
    desc: "Custom laneway homes designed to maximize your property value and provide flexible living options.",
    href: "/laneway-home-construction",
  },
];

const WHY_RENOVATE = [
  {
    title: "Love Your Home Again",
    desc: "Upgrade your space for comfort, function, and beauty. A renovation breathes new life into your home and makes every day more enjoyable.",
  },
  {
    title: "Personalized to You",
    desc: "Every renovation is customized to fit your needs and style. We listen to your vision and bring it to life with expert craftsmanship.",
  },
  {
    title: "Smart Investment",
    desc: "Boost your home's value, efficiency, and long-term appeal. Renovations are one of the best investments you can make in your property.",
  },
  {
    title: "Energy Savings",
    desc: "Enjoy a cozier, more efficient home while cutting utility costs. Modern materials and systems reduce your energy footprint.",
  },
  {
    title: "On-Time & On-Budget",
    desc: "We deliver without compromising on quality. Our experienced project managers keep everything on track from start to finish.",
  },
];

const FAQ_ITEMS = [
  {
    q: "How much does a home renovation cost?",
    a: "Every project is unique! We offer custom pricing based on your vision, space, and materials. During our free consultation, we'll walk you through options that fit your budget.",
  },
  {
    q: "How long does a renovation take?",
    a: "Timelines depend on the scope of the project, but most renovations take a few weeks to a few months. We give you a clear timeline upfront and keep you updated throughout.",
  },
  {
    q: "Do I need permits for my renovation?",
    a: "Some projects require permits, and we handle all approvals and paperwork to make the process easy for you. Our team ensures everything meets local building codes.",
  },
  {
    q: "Can I live in my home during the renovation?",
    a: "In most cases, yes! We work to minimize disruption so you can continue with daily life. For larger projects, we'll discuss the best plan to keep things comfortable.",
  },
  {
    q: "What kind of warranty does BRIO offer?",
    a: "We stand by our work and offer comprehensive warranties covering structural integrity and craftsmanship, giving you peace of mind long after your renovation is complete.",
  },
];

export default function HomeRenovationsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-brio-light-gray py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading mb-4">
            Beautiful, Functional, and Smart Renovations Designed for You
          </h1>
          <p className="text-text-body text-[16px] leading-relaxed mb-8 max-w-2xl mx-auto">
            Your home should reflect your lifestyle, personality, and needs.
            Whether it&rsquo;s a kitchen that inspires your inner chef, a cozy
            basement retreat, or a complete home transformation, BRIO
            Construction is here to bring your vision to life. With 15+ years of
            experience, we make renovations stress-free, exciting, and rewarding.
          </p>
          <Link
            href="#get-in-touch"
            className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide"
          >
            Book Your Free Consultation Now!
          </Link>
        </div>
      </section>

      {/* Renovation Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12">
            Our Renovation Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RENOVATION_SERVICES.map((svc) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="bg-brio-light-gray p-8 group transition-colors hover:bg-brio-navy"
              >
                <h3 className="text-brio-navy text-[18px] font-semibold font-heading mb-3 group-hover:text-white">
                  {svc.title}
                </h3>
                <p className="text-text-body text-[14px] leading-relaxed group-hover:text-white/80">
                  {svc.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Renovate with BRIO */}
      <section className="py-16 md:py-24 bg-brio-light-gray">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12">
            Why Renovate with BRIO?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WHY_RENOVATE.map((item) => (
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

      {/* Make Your Home Work for You */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading mb-6">
            Make Your Home Work for You
          </h2>
          <div className="space-y-4 text-text-body text-[16px] leading-relaxed mb-10 max-w-2xl mx-auto">
            <p>
              <strong className="text-brio-navy">Need more space?</strong> We
              design additions and conversions that seamlessly expand your living
              area.
            </p>
            <p>
              <strong className="text-brio-navy">Want to modernize?</strong>{" "}
              From outdated kitchens to tired bathrooms, we bring your home into
              the present with style.
            </p>
            <p>
              <strong className="text-brio-navy">
                Looking to save on energy?
              </strong>{" "}
              Our high-performance builds and smart upgrades reduce your
              footprint and your bills.
            </p>
          </div>
          <Link
            href="#get-in-touch"
            className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide"
          >
            Let&rsquo;s Talk About Your Project
          </Link>
        </div>
      </section>

      <ContactForm />
      <FAQ items={FAQ_ITEMS} />
      <Footer />
    </>
  );
}
