"use client";

import Image from "next/image";

const PARTNERS = [
  { src: "/images/partners/aviva.png", alt: "Aviva" },
  { src: "/images/partners/2-5-10-warranty.png", alt: "2-5-10 Home Warranty" },
  { src: "/images/partners/centra.png", alt: "Centra Windows" },
  { src: "/images/partners/standard-building.png", alt: "Standard Building Supplies" },
  { src: "/images/partners/havan.png", alt: "HAVAN" },
  { src: "/images/partners/bbb.png", alt: "BBB Accredited" },
  { src: "/images/partners/renomark.png", alt: "RenoMark" },
];

export default function PartnersCarousel() {
  // Double the logos for seamless infinite scroll
  const logos = [...PARTNERS, ...PARTNERS];

  return (
    <section className="bg-brio-light-gray py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <h2 className="text-center text-text-body text-[16px] md:text-[18px] uppercase tracking-[4px] font-semibold">our partners</h2>
      </div>
      <div className="relative">
        <div className="flex animate-scroll gap-12 items-center">
          {logos.map((partner, i) => (
            <div key={i} className="shrink-0 flex items-center justify-center h-16 w-40">
              <Image
                src={partner.src}
                alt={partner.alt}
                width={160}
                height={60}
                className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
