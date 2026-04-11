import type { Metadata } from "next";
import ServicePageLayout from "@/components/service/ServicePageLayout";

export const metadata: Metadata = {
  title: "Home Renovations",
  description: "Beautiful, functional, and smart renovations designed for you. 15+ years of experience making renovations stress-free.",
};

export default function HomeRenovationsPage() {
  return (
    <ServicePageLayout
      title="Beautiful, Functional, and Smart Renovations Designed for You"
      description="Your home should reflect your lifestyle, personality, and needs. Whether it's a kitchen that inspires your inner chef, a cozy basement retreat, or a complete home transformation, BRIO Construction is here to bring your vision to life. With 15+ years of experience, we make renovations stress-free, exciting, and rewarding."
      features={["Love Your Home Again — Upgrade your space for comfort, function, and beauty", "Personalized to You — Every renovation is customized to fit your needs and style", "Smart Investment — Boost your home's value, efficiency, and long-term appeal", "Energy Savings — Enjoy a cozier, more efficient home while cutting utility costs", "On-Time & On-Budget Execution — We deliver without compromising on quality"]}
      faq={[
        { q: "How much does a home renovation cost?", a: "Every project is unique! We offer custom pricing based on your vision, space, and materials. We'll walk you through options that fit your budget." },
        { q: "How long does a renovation take?", a: "Timelines depend on the project, but most renovations take a few weeks to a few months. We give you a clear timeline upfront." },
        { q: "Do I need permits for my renovation?", a: "Some projects require permits, and we handle all approvals and paperwork to make the process easy for you." },
        { q: "Can I live in my home during the renovation?", a: "In most cases, yes! We work to minimize disruption so you can continue with daily life." },
        { q: "What kind of warranty does BRIO offer?", a: "We stand by our work and offer comprehensive warranties covering structural integrity and craftsmanship." },
      ]}
    />
  );
}
