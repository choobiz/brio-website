import type { Metadata } from "next";
import ServicePageLayout from "@/components/service/ServicePageLayout";

export const metadata: Metadata = {
  title: "Custom Home Construction",
  description: "Your dream home deserves expert craftsmanship and meticulous attention to detail. BRIO Construction works with you from concept to completion, buildin",
};

export default function CustomHomeConstructionPage() {
  return (
    <ServicePageLayout
      title="Build Your Dream Home From the Ground Up"
      description="Your dream home deserves expert craftsmanship and meticulous attention to detail. BRIO Construction works with you from concept to completion, building custom homes that reflect your lifestyle and exceed your expectations."
      features={["Complete custom home builds", "Architectural design collaboration", "Premium materials and finishes", "On-time, on-budget delivery"]}
      faq={[{ q: "How long will my project take?", a: "Every project is different, but we provide a clear timeline during the planning phase. We keep you informed at every step to ensure there are no surprises." }, { q: "Do you handle permits?", a: "Yes, we take care of the entire permit process, ensuring your project meets local building codes and regulations." }, { q: "What kind of warranty do you offer?", a: "We stand by our craftsmanship and offer a 12-month warranty on all construction work, ensuring peace of mind long after completion." }, { q: "Can I make changes after construction starts?", a: "Yes, but changes may impact the timeline and cost. We always discuss adjustments with you first." }]}
    />
  );
}
