import LeadForm from "@/components/shared/LeadForm";

interface InlineLeadFormProps {
  /** Service slug for GHL routing. Defaults to "general" if not provided. */
  service?: string;
  /** Source identifier for GHL attribution. Auto-prefixed with "blog-inline-". */
  source: string;
  /** Headline above the form. */
  headline?: string;
  /** Subhead under the headline. */
  subhead?: string;
  /** Submit button label. */
  submitLabel?: string;
}

/**
 * Mid-article lead-capture insert. Use sparingly — once per long-form (>1200 word)
 * post, after the first or second H2.
 */
export default function InlineLeadForm({
  service = "general",
  source,
  headline = "Thinking about a project like this?",
  subhead = "Get a free in-home estimate from BRIO. We respond within 24 hours.",
  submitLabel = "Get My Free Estimate",
}: InlineLeadFormProps) {
  return (
    <aside className="my-12 md:my-14 md:-mx-12 bg-brio-light-gray p-6 md:p-8 not-prose">
      <h3 className="font-heading text-brio-navy text-[22px] md:text-[26px] font-semibold mb-2 leading-tight">
        {headline}
      </h3>
      <p className="text-text-body text-[15px] mb-6 leading-relaxed">{subhead}</p>
      <LeadForm
        source={`blog-inline-${source}`}
        service={service}
        variant="compact"
        submitLabel={submitLabel}
      />
    </aside>
  );
}
