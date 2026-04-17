import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Image from "next/image";
import ProjectsGrid, {
  type ProjectCard,
  type ProjectFilter,
} from "@/components/projects/ProjectsGrid";

function normalizeFilter(param: string | undefined): ProjectFilter {
  const v = (param ?? "").toLowerCase();
  if (v === "commercial") return "Commercial";
  if (v === "residential") return "Residential";
  return "All";
}

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore BRIO Construction's portfolio of residential and commercial projects across Greater Vancouver.",
};

const PROJECTS: ProjectCard[] = [
  {
    name: "Downtown Coffeeshop Renovation",
    type: "Commercial",
    year: "2024-25",
    projectType: "Commercial Tenant Improvement",
    image: "/images/projects/coffeeshop.jpg",
    slug: "downtown-coffeeshop",
    excerpt:
      "Bringing a refined European café experience to the heart of Downtown Vancouver.",
  },
  {
    name: "Richmond Dental Office Renovation",
    type: "Commercial",
    year: "2024-25",
    projectType: "Commercial Tenant Improvement",
    image: "/images/projects/dental.jpg",
    slug: "richmond-dental",
    excerpt:
      "Where Comfort Meets Commerce — A Hybrid Office Built for Flexibility.",
  },
  {
    name: "North Van Brokerage Renovation",
    type: "Commercial",
    year: "2024-25",
    projectType: "Commercial Tenant Improvement",
    image: "/images/projects/brokerage.jpg",
    slug: "north-van-brokerage",
    excerpt:
      "From Optics to Opportunity — A Real Estate Office Transformation in North Vancouver.",
  },
  {
    name: "Trinity Duplex",
    type: "Residential",
    year: "2022-24",
    projectType: "New Duplex Construction",
    image: "/images/projects/trinity.jpg",
    slug: "trinity-duplex",
    excerpt:
      "From Vision to Value — Building a Profitable Duplex with Purpose.",
  },
  {
    name: "East Broadway Condo",
    type: "Residential",
    year: "2022",
    projectType: "Condo Renovation",
    image: "/images/projects/east-broadway.jpg",
    slug: "east-broadway-condo",
    excerpt:
      "First Home, First Dream — A Thoughtful Condo Renovation in Vancouver.",
  },
  {
    name: "LoLo Duplex",
    type: "Residential",
    year: "2021-22",
    projectType: "New Duplex Construction",
    image: "/images/projects/lolo.jpg",
    slug: "lolo-duplex",
    excerpt:
      "A Home for Today, Security for Tomorrow — Building a Custom Duplex in North Vancouver.",
  },
  {
    name: "Jefferson Residence",
    type: "Residential",
    year: "2021",
    projectType: "Home Renovation",
    image: "/images/projects/jefferson.jpg",
    slug: "jefferson-residence",
    excerpt:
      "A Thoughtful Home Renovation That Turned a House Into a Home.",
  },
];

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const sp = await searchParams;
  const initialFilter = normalizeFilter(sp.type);

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

      {/* Filter tabs + Project grid (interactive client component) */}
      <ProjectsGrid projects={PROJECTS} initialFilter={initialFilter} />

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
