import type { Metadata } from "next";
import ServicePageLayout from "@/components/service/ServicePageLayout";

export const metadata: Metadata = {
  title: "Professional Painting Services",
  description: "From full interior repaints to exterior restoration, BRIO Construction delivers flawless painting services with premium materials and expert technique",
};

export default function PaintingServicesPage() {
  return (
    <ServicePageLayout
      title="Expert Interior and Exterior Painting"
      description="From full interior repaints to exterior restoration, BRIO Construction delivers flawless painting services with premium materials and expert technique."
      features={["Full interior painting", "Exterior painting and staining", "Cabinet painting and refinishing", "Drywall repair and texture"]}
      faq={[{ q: "How long will my project take?", a: "Every project is different, but we provide a clear timeline during the planning phase. We keep you informed at every step to ensure there are no surprises." }, { q: "Do you handle permits?", a: "Yes, we take care of the entire permit process, ensuring your project meets local building codes and regulations." }, { q: "What kind of warranty do you offer?", a: "We stand by our craftsmanship and offer a 12-month warranty on all construction work, ensuring peace of mind long after completion." }, { q: "Can I make changes after construction starts?", a: "Yes, but changes may impact the timeline and cost. We always discuss adjustments with you first." }]}
    />
  );
}
