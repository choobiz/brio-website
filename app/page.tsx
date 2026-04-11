import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/home/Hero";
import PartnersCarousel from "@/components/home/PartnersCarousel";
import ServicesGrid from "@/components/home/ServicesGrid";
import ProcessSteps from "@/components/home/ProcessSteps";
import TrustSignals from "@/components/home/TrustSignals";
import Newsletter from "@/components/home/Newsletter";
import FAQ from "@/components/shared/FAQ";
import CTA from "@/components/shared/CTA";
import Image from "next/image";
import Link from "next/link";

const HOME_FAQ = [
  { q: "How long will my renovation or construction project take?", a: "Every project is different, but we provide a clear timeline during the planning phase. The duration depends on the scope, permit approvals, and material availability, but we keep you informed at every step to ensure there are no surprises." },
  { q: "Do I need permits for my project, and do you handle them?", a: "Yes, many renovations and all new construction projects require permits. We take care of the entire permit process, ensuring your project meets local building codes and regulations." },
  { q: "How do you ensure my project stays within budget?", a: "We provide a detailed, transparent estimate upfront and maintain clear communication throughout the project. If unexpected issues arise, we discuss solutions with you first—no hidden costs or surprises." },
  { q: "Can I make changes to my project after construction has started?", a: "Yes, but changes may impact the timeline and cost. We'll always discuss any adjustments with you beforehand to ensure you're comfortable with the next steps." },
  { q: "What kind of warranty do you offer on your work?", a: "We stand by our craftsmanship and offer a warranty on all construction work. We'll provide details specific to your project, ensuring peace of mind long after completion." },
];

const PROJECTS = [
  { name: "East Broadway Condo", desc: "Our client, a first-time homeowner, wanted to make their new condo feel like home while working within a strict budget.", image: "/images/projects/east-broadway-thumb.jpg", slug: "east-broadway-condo" },
  { name: "Richmond Dental Office Renovation", desc: "Where Comfort Meets Commerce — A Hybrid Office Built for Flexibility.", image: "/images/projects/dental-office-thumb.jpg", slug: "richmond-dental-office-renovation" },
  { name: "North Van Brokerage Renovation", desc: "A once dated optical store from the 1990s reimagined into a bright, modern real estate brokerage office.", image: "/images/projects/brokerage-thumb.jpg", slug: "north-van-brokerage-renovation" },
  { name: "Trinity Duplex", desc: "From Vision to Value — Building a Profitable Duplex with Purpose.", image: "/images/projects/trinity-thumb.jpg", slug: "trinity-duplex" },
  { name: "LoLo Duplex", desc: "A Home for Today, Security for Tomorrow — Building a Custom Duplex in North Vancouver.", image: "/images/projects/lolo-thumb.jpg", slug: "lolo-duplex" },
  { name: "Jefferson Residence", desc: "A modern and functional upgrade, ensuring the new house met lifestyle and design preferences.", image: "/images/projects/jefferson-thumb.jpg", slug: "jefferson-residence" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <PartnersCarousel />

      {/* Building Confidence Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading mb-6">
                Building Confidence in Every project
              </h2>
              <p className="text-text-body text-[16px] leading-relaxed mb-4">
                At BRIO, we believe that every building project should be a smooth and stress-free experience. Finding a reliable contractor can be overwhelming, so we simplify the process by connecting you with a vetted network of professionals. Whether you&apos;re building from the ground up or reimagining an existing space, our team is dedicated to delivering excellence at every stage. From concept to completion, we work side by side with homeowners, architects, and businesses to craft spaces that are not only functional but also inspiring. At BRIO, we don&apos;t just build structures—we build trust, relationships, and lasting impressions. Let&apos;s create something exceptional together.
              </p>
              <p className="text-text-body text-[16px] leading-relaxed">
                Our goal is to remove uncertainty from building projects, making the process efficient, predictable, and enjoyable. Trust BRIO to bring your vision to life with professionalism and ease.
              </p>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="/images/projects/brokerage-thumb.jpg"
                alt="BRIO Construction project"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Latest Projects - Carousel style */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading text-center mb-12">
            Our Latest Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <div key={project.slug} className="bg-brio-light-gray">
                <div className="relative h-[220px]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-brio-navy text-[18px] font-semibold font-heading mb-2">{project.name}</h3>
                  <p className="text-text-body text-[14px] leading-relaxed mb-4 line-clamp-3">{project.desc}</p>
                  <Link href={`/projects/${project.slug}`} className="text-brio-navy text-[14px] font-semibold hover:underline">
                    View project gallery →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesGrid />
      <ProcessSteps />
      <TrustSignals />
      <FAQ items={HOME_FAQ} />
      <CTA />
      <Newsletter />
      <Footer />
    </>
  );
}
