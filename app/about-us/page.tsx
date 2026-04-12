import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { Phone, Mail, MapPin, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover expert custom home builders in Vancouver dedicated to crafting your dream home with quality and precision. Transform your vision into reality!",
};

const VALUES = [
  {
    title: "Craftsmanship & Excellence",
    desc: "We take pride in delivering high-quality construction with precision and attention to detail. Every project is built to last.",
  },
  {
    title: "Transparency & Integrity",
    desc: "Honesty and open communication guide our approach. We keep clients informed and involved every step of the way.",
  },
  {
    title: "Innovation & Efficiency",
    desc: "We embrace new building techniques and materials to ensure smarter, more efficient, and sustainable construction.",
  },
  {
    title: "Safety & Responsibility",
    desc: "A safe job site is a productive one. We uphold the highest standards of safety for our team and clients.",
  },
  {
    title: "Client-Centered Approach",
    desc: "Your vision is our priority. We listen, collaborate, and tailor our services to meet your specific needs.",
  },
];

const REVIEWS = [
  {
    name: "Sam S",
    location: "Vancouver",
    text: "BRIO Team built a stunning duplex for our investment group in 2021, and they absolutely delivered on time and on budget. The final product was top-notch, with great attention to detail and solid craftsmanship.",
  },
  {
    name: "Ron M",
    location: "North Vancouver",
    text: "We bought a fixer-upper and had BRIO do a full renovation in 2020. It was a huge project, but they handled everything so well. They stuck to the timeline, kept us updated, and the results were incredible.",
  },
  {
    name: "K. M.",
    location: "Vancouver",
    text: "We had BRIO Team redo our master bathroom in 2023, and honestly, it\u2019s like having a spa at home now. The finishes are stunning, and they made sure everything was done to a high standard.",
  },
];

const IG_POSTS = [
  {
    image: "/images/about/ig-1.webp",
    url: "https://www.instagram.com/p/DMk0bS-oSwC/",
    alt: "Bathtub or shower: Which suits your lifestyle best?",
  },
  {
    image: "/images/about/ig-2.webp",
    url: "https://www.instagram.com/p/DMiPuiDI800/",
    alt: "Spray foam vs fiberglass insulation comparison",
  },
  {
    image: "/images/about/ig-3.webp",
    url: "https://www.instagram.com/reel/DMfq7DJh6Jm/",
    alt: "Client renovation story and transformation",
  },
  {
    image: "/images/about/ig-4.webp",
    url: "https://www.instagram.com/p/DMeAOqModld/",
    alt: "Moisture and ventilation tips for bathrooms",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero Image */}
      <section>
        <div className="relative w-full aspect-[21/9] md:aspect-[3/1]">
          <Image
            src="/images/about/hero.png"
            alt="BRIO Construction van in front of a custom home"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-brio-light-gray py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-6">
            Our Core Values
          </h2>
          <p className="text-text-body text-[15px] leading-relaxed text-center mb-10">
            At BRIO Construction, our values shape everything we do from the way
            we build to the relationships we cultivate with clients, partners,
            and our community.
          </p>
          <ul className="space-y-4 max-w-3xl mx-auto">
            {VALUES.map((v) => (
              <li key={v.title} className="flex items-start gap-3">
                <span className="text-brio-navy font-bold mt-0.5">
                  &#x2022;
                </span>
                <p className="text-text-body text-[15px]">
                  <span className="font-semibold text-brio-navy">
                    {v.title}
                  </span>{" "}
                  &mdash; {v.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12">
            What Are Our Customers Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-brio-light-gray p-6">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-text-body text-[14px] leading-relaxed mb-4 italic">
                  &ldquo;{r.text}&rdquo;
                </p>
                <p className="text-brio-navy text-[14px] font-semibold">
                  {r.name}
                </p>
                <p className="text-text-muted text-[12px]">{r.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16 md:py-20 bg-brio-light-gray">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile header */}
          <div className="flex items-center gap-4 mb-8">
            <Image
              src="/images/logo.png"
              alt="builtbybrio"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-contain bg-brio-navy p-1"
            />
            <div>
              <a
                href="https://www.instagram.com/builtbybrio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brio-navy font-semibold text-[15px] hover:underline"
              >
                builtbybrio
              </a>
              <p className="text-text-muted text-[13px]">
                Renovations | Custom Homes | Inspiring spaces built with quality
                &amp; care
              </p>
            </div>
          </div>
          {/* Post grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {IG_POSTS.map((post) => (
              <a
                key={post.url}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square overflow-hidden group"
              >
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </a>
            ))}
          </div>
          {/* Follow button */}
          <div className="flex justify-center mt-6">
            <a
              href="https://www.instagram.com/builtbybrio/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brio-navy text-white text-[13px] font-semibold px-6 py-3 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/about/mission.jpg"
                alt="BRIO Construction project"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading mb-6">
                Our Mission
              </h2>
              <p className="text-text-body text-[15px] leading-relaxed">
                To build exceptional homes and commercial spaces that reflect
                quality, durability, and innovative design, while providing an
                efficient and stress-free construction experience for our
                clients. We are committed to setting new standards in the
                industry by combining skilled craftsmanship with modern
                construction practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 md:py-20 bg-brio-light-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="md:order-2 relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/about/vision.jpg"
                alt="BRIO Construction team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="md:order-1">
              <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading mb-6">
                Our Vision
              </h2>
              <p className="text-text-body text-[15px] leading-relaxed">
                To become a trusted leader in the Vancouver construction
                industry, known for our expertise, integrity, and commitment to
                building spaces that enhance the way people live and work. We aim
                to create a lasting impact by delivering projects that stand the
                test of time, improve communities, and inspire future generations
                of builders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section id="get-in-touch" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading mb-2">
                Let&apos;s Discuss Your Project!
              </h3>
              <p className="text-text-body text-[15px] mb-8">
                Send us your request for consultation and a member of our team
                will get back to you quickly!
              </p>
              <ContactFormInline />
            </div>

            {/* Get in Touch + Map */}
            <div>
              <h3 className="text-[24px] font-semibold text-brio-navy font-heading mb-6">
                Get in Touch
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-text-body text-[15px]">
                  <MapPin className="w-5 h-5 text-brio-navy shrink-0 mt-0.5" />
                  {COMPANY.address}
                </li>
                <li>
                  <a
                    href={`tel:${COMPANY.phoneClean}`}
                    className="flex items-center gap-3 text-text-body text-[15px] hover:text-brio-navy transition-colors"
                  >
                    <Phone className="w-5 h-5 text-brio-navy shrink-0" />
                    {COMPANY.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="flex items-center gap-3 text-text-body text-[15px] hover:text-brio-navy transition-colors"
                  >
                    <Mail className="w-5 h-5 text-brio-navy shrink-0" />
                    {COMPANY.email}
                  </a>
                </li>
              </ul>
              {/* Google Map */}
              <div className="w-full aspect-[4/3] bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2600.5!2d-123.0777!3d49.3127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548671a4e8c0a8e1%3A0x7f1234567890!2s267+Esplanade+W%2C+North+Vancouver%2C+BC+V7M+1A5!5e0!3m2!1sen!2sca!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BRIO Construction office location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function ContactFormInline() {
  return (
    <form className="space-y-4">
      <input
        type="text"
        required
        placeholder="Name"
        className="w-full h-12 px-4 border border-border text-sm focus:outline-none focus:border-brio-navy"
      />
      <div className="grid grid-cols-2 gap-4">
        <input
          type="tel"
          required
          placeholder="Phone"
          className="w-full h-12 px-4 border border-border text-sm focus:outline-none focus:border-brio-navy"
        />
        <input
          type="email"
          required
          placeholder="Email"
          className="w-full h-12 px-4 border border-border text-sm focus:outline-none focus:border-brio-navy"
        />
      </div>
      <input
        type="text"
        placeholder="Service Address"
        className="w-full h-12 px-4 border border-border text-sm focus:outline-none focus:border-brio-navy"
      />
      <textarea
        placeholder="Description of Work"
        rows={4}
        className="w-full px-4 py-3 border border-border text-sm focus:outline-none focus:border-brio-navy resize-none"
      />
      <button
        type="submit"
        className="w-full h-12 bg-brio-navy text-white font-semibold uppercase tracking-wide text-sm hover:bg-brio-navy/90 transition-colors"
      >
        Book Now!
      </button>
    </form>
  );
}
