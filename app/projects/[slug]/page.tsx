import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { PROJECTS, getProjectBySlug } from "@/lib/projects";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.name} | BRIO Construction`,
    description: project.subtitle,
  };
}

/* ── Reusable sub-components ── */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-heading text-[16px] md:text-[18px] font-semibold text-brio-navy italic mb-3 uppercase tracking-wide">
      {children}
    </h3>
  );
}

function SectionText({ text }: { text: string }) {
  return (
    <>
      {text.split("\n\n").map((p, i) => (
        <p key={i} className="text-text-body text-[14px] leading-relaxed mb-3 last:mb-0">{p}</p>
      ))}
    </>
  );
}

function ImagePair({ a, b, altA, altB }: { a?: string; b?: string; altA: string; altB: string }) {
  if (!a && !b) return null;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
      {a && <div className="relative aspect-[4/3] overflow-hidden"><Image src={a} alt={altA} fill className="object-cover" sizes="50vw" /></div>}
      {b && <div className="relative aspect-[4/3] overflow-hidden"><Image src={b} alt={altB} fill className="object-cover" sizes="50vw" /></div>}
    </div>
  );
}

function FullImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[16/9] overflow-hidden">
      <Image src={src} alt={alt} fill className="object-cover" sizes="100vw" />
    </div>
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const heroImage = project.heroImage || `/images/projects/${slug.split("-")[0]}.jpg`;
  const img = project.images || [];
  const s = project.sections;
  const related = PROJECTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />

      {/* ── Hero image ── */}
      <section className="relative w-full h-[300px] md:h-[450px]">
        <Image src={heroImage} alt={project.name} fill className="object-cover" sizes="100vw" priority />
      </section>

      {/* ── Title ── */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-[26px] md:text-[36px] font-semibold text-brio-navy uppercase tracking-wider mb-3">
            {project.name}
          </h1>
          <p className="text-text-body text-[15px] italic mb-2">{project.subtitle}</p>
          <p className="text-text-muted text-[13px]">Project Type: {project.type} &nbsp;|&nbsp; Project Year: {project.year}</p>
        </div>
      </section>

      {/* ── Image left + Description right ── */}
      <section className="pb-10 md:pb-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {img[0] && (
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={img[0]} alt={`${project.name} detail`} fill className="object-cover" sizes="50vw" />
              </div>
            )}
            <div>
              <SectionText text={project.description} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Content sections ── */}
      <section className="py-6 md:py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section 0: Design Intent — single column + single image */}
          {s[0] && (
            <div className="mb-12">
              <SectionHeading>{s[0].heading}</SectionHeading>
              <SectionText text={s[0].content} />
              {img[1] && <div className="mt-6"><FullImage src={img[1]} alt={s[0].heading} /></div>}
            </div>
          )}

          {/* Sections 1+2: Materials & Finishes + Lighting & Seating — side by side */}
          {s[1] && s[2] && (
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-6">
                <div>
                  <SectionHeading>{s[1].heading}</SectionHeading>
                  <SectionText text={s[1].content} />
                </div>
                <div>
                  <SectionHeading>{s[2].heading}</SectionHeading>
                  <SectionText text={s[2].content} />
                </div>
              </div>
              <ImagePair a={img[2]} b={img[3]} altA={s[1].heading} altB={s[2].heading} />
            </div>
          )}

          {/* Section 3: Functional Enhancements — single column + two images */}
          {s[3] && (
            <div className="mb-12">
              <SectionHeading>{s[3].heading}</SectionHeading>
              <SectionText text={s[3].content} />
              <ImagePair a={img[4]} b={img[5]} altA={`${s[3].heading} 1`} altB={`${s[3].heading} 2`} />
            </div>
          )}

          {/* Section 4: Brand Integration — single column + two images */}
          {s[4] && (
            <div className="mb-12">
              <SectionHeading>{s[4].heading}</SectionHeading>
              <SectionText text={s[4].content} />
              <ImagePair a={img[6]} b={img[0]} altA={`${s[4].heading} 1`} altB={`${s[4].heading} 2`} />
            </div>
          )}

          {/* Remaining sections (for other projects with different structure) */}
          {s.slice(5).map((section, i) => (
            <div key={i + 5} className="mb-12">
              <SectionHeading>{section.heading}</SectionHeading>
              <SectionText text={section.content} />
            </div>
          ))}
        </div>
      </section>

      {/* ── "Built with Intention" CTA ── */}
      <section className="relative py-16 md:py-24">
        <Image src={img[img.length - 1] || heroImage} alt="Project showcase" fill className="object-cover" />
        <div className="absolute inset-0 bg-brio-navy/70" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-[18px] md:text-[24px] font-semibold text-white mb-3 italic">
            Built with Intention, Delivered with Care
          </h2>
          <p className="text-white/90 text-[13px] leading-relaxed mb-4 max-w-2xl mx-auto">
            At BRIO Construction, we know that the best spaces are the ones that reflect the people who use them.
            Whether we&apos;re building a home, an office, or something in between, we lead with collaboration, clarity, and care.
            That&apos;s how we turn unique ideas into inspiring spaces.
          </p>
          <p className="text-white font-semibold text-[14px] mb-6">{project.ctaText}</p>
          <Link href={project.ctaLink} className="inline-block bg-white text-brio-navy text-[13px] font-semibold uppercase tracking-wide px-8 py-3.5 hover:bg-gray-100 transition-colors">
            Contact BRIO Construction
          </Link>
        </div>
      </section>

      {/* ── Standalone full-width image ── */}
      {img[5] && (
        <section className="relative w-full h-[300px] md:h-[400px]">
          <Image src={img[5]} alt={`${project.name} interior`} fill className="object-cover" sizes="100vw" />
        </section>
      )}

      {/* ── YouTube Video (coffeeshop only) ── */}
      {slug === "downtown-coffeeshop" && (
        <section className="py-10 md:py-14 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/L4tiI0Xdgss"
                title="Downtown Coffeeshop Renovation Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </section>
      )}

      {/* ── More Related Content ── */}
      <section className="py-14 md:py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-[22px] md:text-[28px] font-semibold text-brio-navy text-center mb-10 uppercase tracking-wider">
            More Related Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="group">
                <div className="relative aspect-[4/3] overflow-hidden mb-3">
                  <Image src={p.heroImage || `/images/projects/${p.slug.split("-")[0]}.jpg`} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="33vw" />
                </div>
                <h3 className="text-brio-navy text-[15px] font-bold font-heading mb-1">{p.name}</h3>
                <p className="text-text-body text-[12px] leading-relaxed line-clamp-2">{p.subtitle}</p>
                <span className="text-brio-navy text-[12px] font-semibold uppercase tracking-wide mt-2 inline-block">Read More &raquo;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-10 md:py-14 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="text-text-muted text-[11px] uppercase tracking-widest mb-1">Subscribe</p>
              <h2 className="font-heading text-[22px] md:text-[26px] font-bold text-brio-navy mb-2">The Inside Look</h2>
              <p className="text-text-body text-[13px] leading-relaxed mb-4 max-w-md">
                The email newsletter that delivers curated home decor and furniture picks, expert design advice, and more. Join 4,000+ subscribers.
              </p>
              <form className="flex gap-2 max-w-md">
                <input type="email" placeholder="Your email address..." className="flex-1 h-10 px-4 border border-gray-300 text-sm bg-white focus:outline-none focus:border-brio-navy" />
                <button type="submit" className="h-10 px-5 bg-brio-navy text-white font-semibold uppercase tracking-wide text-[12px] hover:bg-brio-navy/90 transition-colors shrink-0">Sign Me Up</button>
              </form>
            </div>
            <div className="hidden md:block relative w-[200px] h-[240px] rounded-t-full overflow-hidden">
              <Image src="/images/newsletter.png" alt="Builder overlooking a construction site" fill className="object-cover" sizes="200px" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
