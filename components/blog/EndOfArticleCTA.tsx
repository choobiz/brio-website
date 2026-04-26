import LeadForm from "@/components/shared/LeadForm";

const SERVICE_HEADLINES: Record<string, { headline: string; subhead: string; submitLabel: string }> = {
  kitchen: {
    headline: "Ready to start your kitchen renovation?",
    subhead: "Get a free in-home estimate. We respond within 24 hours.",
    submitLabel: "Get My Free Kitchen Estimate",
  },
  bathroom: {
    headline: "Ready to transform your bathroom?",
    subhead: "Get a free in-home estimate. We respond within 24 hours.",
    submitLabel: "Get My Free Bathroom Estimate",
  },
  basement: {
    headline: "Ready to add a legal basement suite?",
    subhead: "Get a free in-home consultation. We respond within 24 hours.",
    submitLabel: "Get My Free Basement Estimate",
  },
  laneway: {
    headline: "Ready to build your laneway home?",
    subhead: "Get a free in-home consultation. We respond within 24 hours.",
    submitLabel: "Get My Free Laneway Estimate",
  },
  "home-renovations": {
    headline: "Ready to renovate your home?",
    subhead: "Get a free in-home estimate. We respond within 24 hours.",
    submitLabel: "Get My Free Renovation Estimate",
  },
  general: {
    headline: "Ready to start your project?",
    subhead: "Get a free in-home estimate from BRIO. We respond within 24 hours.",
    submitLabel: "Get My Free Estimate",
  },
};

interface EndOfArticleCTAProps {
  service?: string;
  source: string;
}

export default function EndOfArticleCTA({ service = "general", source }: EndOfArticleCTAProps) {
  const copy = SERVICE_HEADLINES[service] ?? SERVICE_HEADLINES.general;
  return (
    <section id="blog-end" className="my-16 bg-brio-navy text-white p-8 md:p-12 scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-white text-[26px] md:text-[34px] font-semibold leading-tight mb-3">
          {copy.headline}
        </h2>
        <p className="text-white/85 text-[16px] md:text-[17px] leading-relaxed mb-7">
          {copy.subhead}
        </p>
        <div className="bg-white p-5 md:p-7">
          <LeadForm
            source={`blog-end-${source}`}
            service={service}
            variant="stacked"
            submitLabel={copy.submitLabel}
          />
        </div>
      </div>
    </section>
  );
}
