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

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const heroImage =
    project.heroImage || `/images/projects/${slug.split("-")[0]}.jpg`;
  const images = project.images || [];
  const related = PROJECTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />

      {/* Full-width hero image */}
      <section className="relative w-full h-[300px] md:h-[450px]">
        <Image
          src={heroImage}
          alt={project.name}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </section>

      {/* Title section */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-[26px] md:text-[36px] font-semibold text-brio-navy uppercase tracking-wider mb-3">
            {project.name}
          </h1>
          <p className="text-text-body text-[15px] italic mb-2">
            {project.subtitle}
          </p>
          <p className="text-text-muted text-[13px]">
            Project Type: {project.type} | Project Year: {project.year}
          </p>
        </div>
      </section>

      {/* Description + first image */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {images[0] && (
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={images[0]}
                  alt={`${project.name} detail`}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            )}
            <div>
              {project.description.split("\n\n").map((p, i) => (
                <p
                  key={i}
                  className="text-text-body text-[14px] leading-relaxed mb-4 last:mb-0"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content sections with interspersed images */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {project.sections.map((section, i) => {
            const imgA = images[1 + i * 2];
            const imgB = images[2 + i * 2];

            return (
              <div key={i} className="mb-14 last:mb-0">
                {/* Section heading + text */}
                <h3 className="font-heading text-[18px] md:text-[22px] font-semibold text-brio-navy italic mb-3">
                  {section.heading}
                </h3>
                {section.content.split("\n\n").map((p, j) => (
                  <p
                    key={j}
                    className="text-text-body text-[14px] leading-relaxed mb-3 last:mb-0"
                  >
                    {p}
                  </p>
                ))}

                {/* Two images side by side after content */}
                {(imgA || imgB) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                    {imgA && (
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={imgA}
                          alt={`${section.heading} photo 1`}
                          fill
                          className="object-cover"
                          sizes="50vw"
                        />
                      </div>
                    )}
                    {imgB && (
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={imgB}
                          alt={`${section.heading} photo 2`}
                          fill
                          className="object-cover"
                          sizes="50vw"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA — full-width dark image */}
      <section className="relative py-16 md:py-24">
        {images[images.length - 1] && (
          <Image
            src={images[images.length - 1]}
            alt="Project showcase"
            fill
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-brio-navy/70" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-[20px] md:text-[28px] font-semibold text-white mb-4 italic">
            Built with Intention, Delivered with Care
          </h2>
          <p className="text-white/90 text-[14px] leading-relaxed mb-6 max-w-2xl mx-auto">
            {project.ctaText} Let&apos;s build something that works for
            you&mdash;functionally and beautifully.
          </p>
          <Link
            href={project.ctaLink}
            className="inline-block bg-white text-brio-navy text-[13px] font-semibold uppercase tracking-wide px-8 py-3.5 hover:bg-gray-100 transition-colors"
          >
            Contact BRIO Construction
          </Link>
        </div>
      </section>

      {/* More Related Content */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-[22px] md:text-[28px] font-semibold text-brio-navy text-center mb-10 uppercase tracking-wider">
            More Related Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-3">
                  <Image
                    src={
                      p.heroImage ||
                      `/images/projects/${p.slug.split("-")[0]}.jpg`
                    }
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="33vw"
                  />
                </div>
                <h3 className="text-brio-navy text-[15px] font-bold font-heading mb-1">
                  {p.name}
                </h3>
                <p className="text-text-body text-[12px] leading-relaxed line-clamp-2">
                  {p.subtitle}
                </p>
              </Link>
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
