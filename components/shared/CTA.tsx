import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  heading?: string;
  body?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function CTA({
  heading = "Ready to Start Your Project?",
  body = "Get in touch with our team for a free, no-obligation consultation. We'll discuss your vision, provide expert advice, and give you a clear estimate.",
  ctaText = "Book Your Free Consultation",
  ctaHref = "/about-us#get-in-touch",
}: CTAProps) {
  return (
    <section className="bg-brio-blue py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-white text-[28px] md:text-[40px] font-bold font-heading leading-tight mb-4">
          {heading}
        </h2>
        <p className="text-white/75 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
          {body}
        </p>
        <Link
          href={ctaHref}
          className="inline-flex items-center justify-center h-[52px] px-8 bg-brio-gold text-brio-navy font-bold rounded-lg hover:bg-brio-gold/90 transition-all gap-2 text-[15px]"
        >
          {ctaText}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
