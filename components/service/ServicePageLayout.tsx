import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FAQ from "@/components/shared/FAQ";
import ContactForm from "@/components/service/ContactForm";

interface ServicePageProps {
  title: string;
  description: string;
  features?: string[];
  faq: { q: string; a: string }[];
  children?: React.ReactNode;
}

export default function ServicePageLayout({ title, description, features, faq, children }: ServicePageProps) {
  return (
    <>
      <Navbar />
      {/* Hero */}
      <section className="bg-brio-light-gray py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading mb-6">{title}</h1>
          <p className="text-text-body text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-3xl mx-auto">{description}</p>
          <Link href="#get-in-touch" className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors">
            Book Your Free Consultation
          </Link>
        </div>
      </section>

      {/* Features */}
      {features && features.length > 0 && (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-text-body text-[15px]">
                  <span className="text-brio-navy font-bold mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Custom content (packages, before/after, etc.) */}
      {children}

      <ContactForm />
      <FAQ items={faq} />
      <Footer />
    </>
  );
}
