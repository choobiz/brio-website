const TESTIMONIALS = [
  {
    quote:
      "BRIO Team built a stunning duplex for our investment group in 2021, and they absolutely delivered on time and on budget, even with all the challenges of COVID. With supply chain delays and labor shortages everywhere, Amir & BRIO Team kept things moving smoothly and handled every obstacle like pros. The final product was top-notch, with great attention to detail and solid craftsmanship. The units sold quickly, and we'll definitely be working with BRIO again for future projects!",
    name: "Sam S",
    location: "Vancouver",
    projectType: "Spec Home Construction",
  },
  {
    quote:
      "We bought a fixer-upper and had BRIO do a full renovation in 2020. It was a huge project, but they handled everything so well. They stuck to the timeline, kept us updated, and the results were incredible. It feels like a brand-new home, and we love it!",
    name: "Ron M",
    location: "North Vancouver",
    projectType: "Full House Renovation",
  },
  {
    quote:
      "We had Sam & BRIO Team redo our master bathroom in 2023, and honestly, it's like having a spa at home now. The finishes are stunning, and they made sure everything was done to a high standard. The process was smooth, and they took care of all the little details. Highly recommend!",
    name: "K. M.",
    location: "Vancouver",
    projectType: "Bathroom Remodeling",
  },
];

export default function Testimonials({ heading }: { heading?: string }) {
  return (
    <section className="py-16 md:py-24 bg-brio-light-gray">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {heading && (
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12">
            {heading}
          </h2>
        )}
        <div className="space-y-8">
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.name} className="bg-white p-6 md:p-8">
              <p className="text-text-body text-[15px] leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="border-t border-border pt-4">
                <p className="text-brio-navy font-semibold text-[14px]">
                  Client Name: {t.name}
                </p>
                <p className="text-text-muted text-[13px]">Location: {t.location}</p>
                <p className="text-text-muted text-[13px]">Project Type: {t.projectType}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
