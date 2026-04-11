import type { Metadata } from "next";
import ServicePageLayout from "@/components/service/ServicePageLayout";

export const metadata: Metadata = {
  title: "Kitchen Refinishing & Cabinet Refresh",
  description: "Refresh your kitchen cabinets and surfaces without the cost and disruption of a full remodel. BRIO Construction delivers stunning kitchen refinishing ",
};

export default function KitchenRefinishingPage() {
  return (
    <ServicePageLayout
      title="Upgrade Your Kitchen Without a Full Renovation"
      description="Refresh your kitchen cabinets and surfaces without the cost and disruption of a full remodel. BRIO Construction delivers stunning kitchen refinishing that transforms your space quickly."
      features={["Cabinet refinishing and painting", "Hardware and fixture upgrades", "Countertop resurfacing", "Backsplash updates"]}
      faq={[{ q: "How long will my project take?", a: "Every project is different, but we provide a clear timeline during the planning phase. We keep you informed at every step to ensure there are no surprises." }, { q: "Do you handle permits?", a: "Yes, we take care of the entire permit process, ensuring your project meets local building codes and regulations." }, { q: "What kind of warranty do you offer?", a: "We stand by our craftsmanship and offer a 12-month warranty on all construction work, ensuring peace of mind long after completion." }, { q: "Can I make changes after construction starts?", a: "Yes, but changes may impact the timeline and cost. We always discuss adjustments with you first." }]}
    />
  );
}
