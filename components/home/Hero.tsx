"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const SLIDES = [
  "/images/hero-slides/slide-1.jpg",
  "/images/hero-slides/slide-2.jpg",
  "/images/hero-slides/slide-3.jpg",
  "/images/hero-slides/slide-4.jpg",
  "/images/hero-slides/slide-5.jpg",
  "/images/hero-slides/slide-6.jpg",
  "/images/hero-slides/slide-7.jpg",
  "/images/hero-slides/slide-8.jpg",
];

const SLIDE_DURATION = 5000; // 5 seconds per slide

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isZooming, setIsZooming] = useState(true);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;

    const start = () => {
      if (timer) return;
      timer = setInterval(() => {
        setIsZooming(false);
        setTimeout(() => {
          setCurrent((prev) => (prev + 1) % SLIDES.length);
          setIsZooming(true);
        }, 800);
      }, SLIDE_DURATION);
    };

    const stop = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") stop();
      else start();
    };

    if (document.visibilityState === "visible") start();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <section className="relative min-h-[650px] md:min-h-[750px] flex items-center overflow-hidden">
      {/* Background slideshow */}
      {SLIDES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={src}
            alt=""
            fill
            priority={i === 0}
            className={`object-cover transition-transform duration-[6000ms] ease-out ${
              i === current && isZooming ? "scale-110" : "scale-100"
            }`}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark overlay — strong enough to make white text readable on any slide */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-28 lg:py-36 w-full">
        <div className="max-w-3xl">
          <h1 className="!text-white text-[32px] sm:text-[42px] md:text-[56px] lg:text-[68px] font-semibold leading-[1.1] mb-6 font-heading drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            From Concept to Completion—Together
          </h1>
          <p className="text-white/90 text-[18px] md:text-[20px] leading-relaxed mb-10 max-w-2xl">
            At BRIO, we create spaces that inspire, endure, and elevate. Whether renovating, building custom homes, or developing spec projects, our expert team ensures precision in every detail. With a streamlined process, clear communication, and expert execution, we make construction stress-free—delivering on time, on budget, and hassle-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/about-us#get-in-touch"
              className="inline-flex items-center justify-center bg-brio-navy text-white text-[15px] font-semibold px-8 py-4 hover:bg-brio-navy/90 transition-colors tracking-wide uppercase"
            >
              Book Your Free Consultation
            </Link>
            {/* Mobile-only inline tap-to-call as a second hero CTA */}
            <a
              href={`tel:${COMPANY.phoneClean}`}
              className="sm:hidden inline-flex items-center justify-center gap-2 border-2 border-white text-white text-[15px] font-semibold px-8 py-4 hover:bg-white/10 transition-colors tracking-wide uppercase"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Call BRIO
            </a>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); setIsZooming(true); }}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-white w-6" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
