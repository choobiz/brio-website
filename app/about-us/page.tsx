import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ContactForm from "@/components/service/ContactForm";

export const metadata: Metadata = {
  title: "About Us",
  description: "Discover expert custom home builders in Vancouver dedicated to crafting your dream home with quality and precision.",
};

const VALUES = [
  { title: "Craftsmanship & Excellence", desc: "We take pride in delivering high-quality construction with precision and attention to detail. Every project is built to last." },
  { title: "Transparency & Integrity", desc: "Honesty and open communication guide our approach. We keep clients informed and involved every step of the way." },
  { title: "Innovation & Efficiency", desc: "We embrace new building techniques and materials to ensure smarter, more efficient, and sustainable construction." },
  { title: "Safety & Responsibility", desc: "A safe job site is a productive one. We uphold the highest standards of safety for our team and clients." },
  { title: "Client-Centered Approach", desc: "Your vision is our priority. We listen, collaborate, and tailor our services to meet your specific needs." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <section className="bg-brio-light-gray py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading mb-8">Our Core Values</h1>
          <p className="text-text-body text-[16px] leading-relaxed mb-12">
            At BRIO Construction, our values shape everything we do from the way we build to the relationships we cultivate with clients, partners, and our community.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {VALUES.map((v, i) => (
              <div key={i} className="bg-white p-6">
                <h3 className="text-brio-navy text-[17px] font-semibold mb-2">{v.title}</h3>
                <p className="text-text-body text-[14px]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-[24px] font-semibold text-brio-navy font-heading mb-4">Our Mission</h3>
            <p className="text-text-body text-[15px] leading-relaxed">
              To build exceptional homes and commercial spaces that reflect quality, durability, and innovative design, while providing an efficient and stress-free construction experience for our clients.
            </p>
          </div>
          <div>
            <h3 className="text-[24px] font-semibold text-brio-navy font-heading mb-4">Our Vision</h3>
            <p className="text-text-body text-[15px] leading-relaxed">
              To become a trusted leader in the Vancouver construction industry, known for our expertise, integrity, and commitment to building spaces that enhance the way people live and work.
            </p>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </>
  );
}
