"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ({ items, title = "Frequently Asked Questions" }: { items: FAQItem[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-brio-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-brio-navy font-heading text-center mb-10">{title}</h2>
        <div className="divide-y divide-border">
          {items.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="text-brio-navy text-[16px] font-semibold pr-4 group-hover:text-brio-blue transition-colors">{item.q}</span>
                <ChevronDown className={`w-5 h-5 text-text-muted shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-96 pb-5" : "max-h-0"}`}>
                <p className="text-text-secondary text-[15px] leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
