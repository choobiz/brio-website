import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore BRIO Construction's portfolio of residential and commercial projects across Greater Vancouver.",
};

const PROJECTS = [
  {
    name: "Downtown Coffeeshop Renovation",
    type: "Commercial" as const,
    year: "2024-25",
    projectType: "Commercial Tenant Improvement",
    image: "/images/projects/coffeeshop.jpg",
    slug: "downtown-coffeeshop",
    excerpt:
      "Bringing a refined European café experience to the heart of Downtown Vancouver.",
  },
  {
    name: "Richmond Dental Office Renovation",
    type: "Commercial" as const,
    year: "2024-25",
    projectType: "Commercial Tenant Improvement",
    image: "/images/projects/dental.jpg",
    slug: "richmond-dental",
    excerpt:
      "Where Comfort Meets Commerce — A Hybrid Office Built for Flexibility.",
  },
  {
    name: "North Van Brokerage Renovation",
    type: "Commercial" as const,
    year: "2024-25",
    projectType: "Commercial Tenant Improvement",
    image: "/images/projects/brokerage.jpg",
    slug: "north-van-brokerage",
    excerpt:
      "From Optics to Opportunity — A Real Estate Office Transformation in North Vancouver.",
  },
  {
    name: "Trinity Duplex",
    type: "Residential" as const,
    year: "2022-24",
    projectType: "New Duplex Construction",
    image: "/images/projects/trinity.jpg",
    slug: "trinity-duplex",
    excerpt:
      "From Vision to Value — Building a Profitable Duplex with Purpose.",
  },
  {
    name: "East Broadway Condo",
    type: "Residential" as const,
    year: "2022",
    projectType: "Condo Renovation",
    image: "/images/projects/east-broadway.jpg",
    slug: "east-broadway-condo",
    excerpt:
      "First Home, First Dream — A Thoughtful Condo Renovation in Vancouver.",
  },
  {
    name: "LoLo Duplex",
    type: "Residential" as const,
    year: "2021-22",
    projectType: "New Duplex Construction",
    image: "/images/projects/lolo.jpg",
    slug: "lolo-duplex",
    excerpt:
      "A Home for Today, Security for Tomorrow — Building a Custom Duplex in North Vancouver.",
  },
  {
    name: "Jefferson Residence",
    type: "Residential" as const,
    year: "2021",
    projectType: "Home Renovation",
    image: "/images/projects/jefferson.jpg",
    slug: "jefferson-residence",
    excerpt:
      "A Thoughtful Home Renovation That Turned a House Into a Home.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      {/* Hero — Two-column: image left, text right */}
      <section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left — hero image */}
          <div className="relative h-[280px] md:h-auto md:min-h-[400px]">
            <Image
              src="/images/projects/coffeeshop.jpg"
              alt="BRIO Construction signature project"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          {/* Right — text */}
          <div className="bg-brio-light-gray py-12 md:py-16 px-8 md:px-14 flex flex-col justify-center">
            <h1 className="font-heading text-[28px] md:text-[38px] font-semibold text-brio-navy leading-tight mb-4 italic uppercase tracking-wide">
              Built to Inspire, Built by BRIO: Our Signature Projects
            </h1>
            <p className="text-text-body text-[14px] leading-relaxed">
              At BRIO, we believe that great construction is more than just
              building&mdash;it&apos;s about creating spaces that enhance
              lifestyles. Our gallery highlights projects that combine
              functionality, aesthetics, and lasting value, built with integrity
              and skill.
            </p>
          </div>
        </div>
      </section>

      {/* Filter tabs + Project grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <div className="flex justify-center gap-6 mb-12">
            <span className="text-brio-navy text-[14px] font-semibold border-b-2 border-brio-navy pb-1 cursor-pointer">
              All
            </span>
            <span className="text-text-muted text-[14px] font-medium cursor-pointer hover:text-brio-navy transition-colors">
              Commercial
            </span>
            <span className="text-text-muted text-[14px] font-medium cursor-pointer hover:text-brio-navy transition-colors">
              Residential
            </span>
          </div>

          {/* Project cards — 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((p) => (
              <div key={p.slug} className="group">
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="text-brio-navy text-[16px] font-bold font-heading uppercase tracking-wide mb-1">
                  {p.name}
                </h3>
                <p className="text-text-muted text-[11px] uppercase tracking-wide mb-2">
                  {p.projectType} · {p.year}
                </p>
                <p className="text-text-body text-[13px] leading-relaxed mb-3">
                  {p.excerpt}
                </p>
                <Link
                  href={`/projects/${p.slug}`}
                  className="text-brio-navy text-[13px] font-bold uppercase tracking-wide hover:underline"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-10 md:py-14 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="text-text-muted text-[11px] uppercase tracking-widest mb-1">
                Subscribe
              </p>
              <h2 className="font-heading text-[22px] md:text-[26px] font-bold text-brio-navy mb-2">
                The Inside Look
              </h2>
              <p className="text-text-body text-[13px] leading-relaxed mb-4 max-w-md">
                The email newsletter that delivers curated home decor and
                furniture picks, expert design advice, and more. Join 4,000+
                subscribers.
              </p>
              <form className="flex gap-2 max-w-md">
                <input
                  type="email"
                  placeholder="Your email address..."
                  className="flex-1 h-10 px-4 border border-gray-300 text-sm bg-white focus:outline-none focus:border-brio-navy"
                />
                <button
                  type="submit"
                  className="h-10 px-5 bg-brio-navy text-white font-semibold uppercase tracking-wide text-[12px] hover:bg-brio-navy/90 transition-colors shrink-0"
                >
                  Sign Me Up
                </button>
              </form>
            </div>
            <div className="hidden md:block relative w-[200px] h-[240px] rounded-t-full overflow-hidden">
              <Image
                src="/images/newsletter.png"
                alt="Builder overlooking a construction site"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
