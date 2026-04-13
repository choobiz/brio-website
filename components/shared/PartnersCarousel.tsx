"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const PARTNERS = [
  { src: "/images/partners/havan.png", alt: "HAVAN", width: 120 },
  { src: "/images/partners/travelers.png", alt: "Travelers", width: 140 },
  { src: "/images/partners/renomark.png", alt: "RenoMark", width: 110 },
  { src: "/images/partners/warranty-2510.png", alt: "2-5-10 Home Warranty", width: 100 },
  { src: "/images/partners/centra-new.png", alt: "Centra Windows", width: 120 },
  { src: "/images/partners/standard-building-new.png", alt: "Standard Building Supplies", width: 130 },
  { src: "/images/partners/bbb-badge.png", alt: "BBB Accredited", width: 90 },
];

export default function PartnersCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.5;

    function animate() {
      if (!el) return;
      scrollPos += speed;
      if (scrollPos >= el.scrollWidth / 2) {
        scrollPos = 0;
      }
      el.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);

    const handleEnter = () => cancelAnimationFrame(animationId);
    const handleLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      cancelAnimationFrame(animationId);
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section className="py-10 md:py-14 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-[18px] md:text-[22px] font-semibold text-brio-navy uppercase tracking-wider text-center mb-8">
          Our Partners
        </h2>
        <div
          ref={scrollRef}
          className="flex gap-10 overflow-hidden"
          style={{ maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)" }}
        >
          {/* Duplicate the list for seamless infinite scroll */}
          {[...PARTNERS, ...PARTNERS].map((p, i) => (
            <div key={i} className="shrink-0 flex items-center justify-center h-16">
              <Image
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={60}
                className="h-10 md:h-14 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
