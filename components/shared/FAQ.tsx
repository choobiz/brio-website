"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ({ items, title = "Frequently asked questions" }: { items: FAQItem[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="py-16 md:py-24 bg-brio-faq-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading text-center mb-10">{title}</h2>
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="border border-border bg-white">
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-brio-navy text-[15px] font-semibold pr-4">{item.q}</span>
                <ChevronDown className={`w-5 h-5 text-text-muted shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-96" : "max-h-0"}`}>
                <div className="px-5 pb-5">
                  <p className="text-text-body text-[14px] leading-relaxed">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
