import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore BRIO Construction's portfolio of residential and commercial projects across Greater Vancouver.",
};

const PROJECTS = [
  { name: "Downtown Coffeeshop Renovation", type: "Commercial", year: "2024-25", image: "/images/projects/coffeeshop-thumb.jpg", slug: "downtown-coffeeshop" },
  { name: "Richmond Dental Office Renovation", type: "Commercial", year: "2024-25", image: "/images/projects/dental-office-thumb.jpg", slug: "richmond-dental" },
  { name: "North Van Brokerage Renovation", type: "Commercial", year: "2024-25", image: "/images/projects/brokerage-thumb.jpg", slug: "north-van-brokerage" },
  { name: "Trinity Duplex", type: "Residential", year: "2022-24", image: "/images/projects/trinity-thumb.jpg", slug: "trinity-duplex" },
  { name: "East Broadway Condo", type: "Residential", year: "2022", image: "/images/projects/east-broadway-thumb.jpg", slug: "east-broadway-condo" },
  { name: "LoLo Duplex", type: "Residential", year: "2021-22", image: "/images/projects/lolo-thumb.jpg", slug: "lolo-duplex" },
  { name: "Jefferson Residence", type: "Residential", year: "2021", image: "/images/projects/jefferson-thumb.jpg", slug: "jefferson-residence" },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <section className="bg-brio-light-gray py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading text-center mb-4">
            Built to Inspire, Built by BRIO
          </h1>
          <p className="text-text-body text-center text-[16px] max-w-2xl mx-auto mb-12">
            Our gallery highlights projects that combine functionality, aesthetics, and lasting value, built with integrity and skill.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <div key={p.slug} className="bg-white overflow-hidden group">
                <div className="relative h-[220px]">
                  <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                  <span className="absolute top-3 left-3 bg-brio-navy text-white text-[10px] font-semibold uppercase tracking-wide px-3 py-1">{p.type}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-brio-navy text-[18px] font-semibold font-heading mb-1">{p.name}</h3>
                  <p className="text-text-muted text-[13px] mb-3">Project Year: {p.year}</p>
                  <Link href={`/projects/${p.slug}`} className="text-brio-navy text-[13px] font-semibold uppercase tracking-wide hover:underline">Learn More →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
