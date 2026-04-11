import type { Metadata } from "next";
import ServicePageLayout from "@/components/service/ServicePageLayout";

export const metadata: Metadata = {
  title: "Spec Home Construction",
  description: "With over 15 years of experience in new home construction, we understand market trends, zoning regulations, and buyer preferences, ensuring that your ",
};

export default function SpecHomeConstructionPage() {
  return (
    <ServicePageLayout
      title="Profitable Spec Home Development"
      description="With over 15 years of experience in new home construction, we understand market trends, zoning regulations, and buyer preferences, ensuring that your investment is built for success."
      features={["Market-driven design and pricing", "Zoning and permit management", "Quality construction for maximum ROI", "Full project management from land to sale"]}
      faq={[{ q: "How long will my project take?", a: "Every project is different, but we provide a clear timeline during the planning phase. We keep you informed at every step to ensure there are no surprises." }, { q: "Do you handle permits?", a: "Yes, we take care of the entire permit process, ensuring your project meets local building codes and regulations." }, { q: "What kind of warranty do you offer?", a: "We stand by our craftsmanship and offer a 12-month warranty on all construction work, ensuring peace of mind long after completion." }, { q: "Can I make changes after construction starts?", a: "Yes, but changes may impact the timeline and cost. We always discuss adjustments with you first." }]}
    />
  );
}
