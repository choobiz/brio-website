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

      {/* ── Title ── */}
      <section className="pt-10 md:pt-16 pb-6 md:pb-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-[28px] md:text-[42px] font-semibold text-brio-navy uppercase tracking-wider mb-4">
            {project.name}
          </h1>
          <p className="font-heading text-[16px] md:text-[18px] italic text-text-body mb-3">{project.subtitle}</p>
          <p className="text-text-muted text-[13px]">Project Type: {project.type}</p>
          <p className="text-text-muted text-[13px]">Project Year: {project.year}</p>
        </div>
      </section>

      {/* ── Image left + Description right on dark bg ── */}
      <section className="bg-brio-navy">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left — image */}
          <div className="relative h-[300px] md:h-auto md:min-h-[420px]">
            <Image src={img[0] || heroImage} alt={`${project.name} interior`} fill className="object-cover" sizes="50vw" priority />
          </div>
          {/* Right — description text on dark bg */}
          <div className="py-10 md:py-16 px-6 md:px-12 flex items-center">
            <div className="text-white/90 text-[14px] leading-relaxed">
              {project.description.split("\n\n").map((p, i) => (
                <p key={i} className="mb-4 last:mb-0">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Full-width showcase image (PAUL LE CAFÉ counter) ── */}
      {img[1] && (
        <section className="relative w-full h-[300px] md:h-[450px]">
          <Image src={img[1]} alt={`${project.name} counter view`} fill className="object-cover" sizes="100vw" />
        </section>
      )}

      {/* ── Content sections: alternating image/text two-column ── */}

      {/* Design Intent — image LEFT, text RIGHT */}
      {s[0] && (
        <section className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="relative h-[280px] md:h-auto md:min-h-[380px]">
              <Image src={img[2] || img[0]} alt={s[0].heading} fill className="object-cover" sizes="50vw" />
            </div>
            <div className="py-10 md:py-16 px-6 md:px-12 flex flex-col justify-center">
              <SectionHeading>{s[0].heading}</SectionHeading>
              <SectionText text={s[0].content} />
            </div>
          </div>
        </section>
      )}

      {/* Materials & Finishes — text LEFT, image RIGHT */}
      {s[1] && (
        <section className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="py-10 md:py-16 px-6 md:px-12 flex flex-col justify-center md:order-1">
              <SectionHeading>{s[1].heading}</SectionHeading>
              <SectionText text={s[1].content} />
            </div>
            <div className="relative h-[280px] md:h-auto md:min-h-[380px] md:order-2">
              <Image src={img[3] || img[0]} alt={s[1].heading} fill className="object-cover" sizes="50vw" />
            </div>
          </div>
        </section>
      )}

      {/* Lighting & Seating — image LEFT, text RIGHT */}
      {s[2] && (
        <section className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="relative h-[280px] md:h-auto md:min-h-[380px]">
              <Image src={img[4] || img[0]} alt={s[2].heading} fill className="object-cover" sizes="50vw" />
            </div>
            <div className="py-10 md:py-16 px-6 md:px-12 flex flex-col justify-center">
              <SectionHeading>{s[2].heading}</SectionHeading>
              <SectionText text={s[2].content} />
            </div>
          </div>
        </section>
      )}

      {/* Functional Enhancements — text LEFT, image RIGHT */}
      {s[3] && (
        <section className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="py-10 md:py-16 px-6 md:px-12 flex flex-col justify-center md:order-1">
              <SectionHeading>{s[3].heading}</SectionHeading>
              <SectionText text={s[3].content} />
            </div>
            <div className="relative h-[280px] md:h-auto md:min-h-[380px] md:order-2">
              <Image src={img[5] || img[0]} alt={s[3].heading} fill className="object-cover" sizes="50vw" />
            </div>
          </div>
        </section>
      )}

      {/* Brand Integration — image LEFT, text RIGHT */}
      {s[4] && (
        <section className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="relative h-[280px] md:h-auto md:min-h-[380px]">
              <Image src={img[6] || img[0]} alt={s[4].heading} fill className="object-cover" sizes="50vw" />
            </div>
            <div className="py-10 md:py-16 px-6 md:px-12 flex flex-col justify-center">
              <SectionHeading>{s[4].heading}</SectionHeading>
              <SectionText text={s[4].content} />
            </div>
          </div>
        </section>
      )}

      {/* Remaining sections for other projects */}
      {s.slice(5).map((section, i) => (
        <section key={i + 5} className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {i % 2 === 0 ? (
              <>
                <div className="py-10 md:py-16 px-6 md:px-12 flex flex-col justify-center">
                  <SectionHeading>{section.heading}</SectionHeading>
                  <SectionText text={section.content} />
                </div>
                <div className="relative h-[280px] md:h-auto md:min-h-[380px] bg-brio-light-gray" />
              </>
            ) : (
              <>
                <div className="relative h-[280px] md:h-auto md:min-h-[380px] bg-brio-light-gray" />
                <div className="py-10 md:py-16 px-6 md:px-12 flex flex-col justify-center">
                  <SectionHeading>{section.heading}</SectionHeading>
                  <SectionText text={section.content} />
                </div>
              </>
            )}
          </div>
        </section>
      ))}

      {/* ── "Built with Intention" — text LEFT, image RIGHT (two-column, NOT dark overlay) ── */}
      <section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="py-10 md:py-16 px-6 md:px-12 flex flex-col justify-center">
            <h2 className="font-heading text-[20px] md:text-[26px] font-semibold text-brio-navy mb-4 italic uppercase tracking-wide">
              Built with Intention, Delivered with Care
            </h2>
            <p className="text-text-body text-[14px] leading-relaxed mb-4">
              At BRIO Construction, we know that the best spaces are the ones that reflect the people who use them.
              Whether we&apos;re building a home, an office, or something in between, we lead with collaboration, clarity, and care.
              That&apos;s how we turn unique ideas into inspiring spaces.
            </p>
            <p className="text-text-body text-[14px] leading-relaxed font-bold mb-4">
              {project.ctaText} Let&apos;s build something that works for you&mdash;functionally and beautifully.
            </p>
            <Link href={project.ctaLink} className="text-brio-navy text-[14px] font-semibold underline hover:no-underline">
              Contact BRIO Construction
            </Link>
          </div>
          <div className="relative h-[300px] md:h-auto md:min-h-[400px]">
            <Image src={img[img.length - 1] || heroImage} alt="BRIO project showcase" fill className="object-cover" sizes="50vw" />
          </div>
        </div>
      </section>

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
