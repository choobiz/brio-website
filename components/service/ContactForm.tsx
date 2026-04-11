"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="get-in-touch" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-2">
          Let&apos;s discuss your project!
        </h3>
        <p className="text-text-body text-center mb-8">
          Send us your request for consultation and a member of our team will get back to you quickly!
        </p>

        {submitted ? (
          <div className="text-center py-12 bg-brio-light-gray">
            <h4 className="text-brio-navy text-2xl font-semibold font-heading mb-2">Thank You!</h4>
            <p className="text-text-body">We&apos;ll be in touch within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" required placeholder="Name" className="w-full h-12 px-4 border border-border text-sm focus:outline-none focus:border-brio-navy" />
            <input type="tel" required placeholder="Phone" className="w-full h-12 px-4 border border-border text-sm focus:outline-none focus:border-brio-navy" />
            <input type="email" required placeholder="Email" className="w-full h-12 px-4 border border-border text-sm focus:outline-none focus:border-brio-navy" />
            <input type="text" placeholder="Service Address" className="w-full h-12 px-4 border border-border text-sm focus:outline-none focus:border-brio-navy" />
            <textarea placeholder="Description of Work" rows={4} className="w-full px-4 py-3 border border-border text-sm focus:outline-none focus:border-brio-navy resize-none" />
            <button type="submit" className="w-full h-12 bg-brio-navy text-white font-semibold uppercase tracking-wide text-sm hover:bg-brio-navy/90 transition-colors">
              Book Now!
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
