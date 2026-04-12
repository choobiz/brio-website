import type { Metadata } from "next";
import Link from "next/link";
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

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-brio-navy py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 text-white text-[11px] font-semibold uppercase tracking-wide px-4 py-1.5 mb-6">
            {project.type} &mdash; {project.year}
          </span>
          <h1 className="text-[28px] md:text-[40px] font-semibold text-white font-heading leading-tight mb-4">
            {project.name}
          </h1>
          <p className="text-white/70 text-[16px] md:text-[18px] leading-relaxed">
            {project.subtitle}
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {project.description.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="text-text-body text-[16px] leading-[1.8] mb-6 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Content Sections */}
      <section className="bg-brio-light-gray py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {project.sections.map((section, i) => (
            <div key={i} className={i < project.sections.length - 1 ? "mb-12" : ""}>
              <h3 className="text-[22px] md:text-[26px] font-semibold text-brio-navy font-heading mb-4">
                {section.heading}
              </h3>
              {section.content.split("\n\n").map((paragraph, j) => (
                <p
                  key={j}
                  className="text-text-body text-[16px] leading-[1.8] mb-4 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[24px] md:text-[32px] font-semibold text-brio-navy font-heading mb-4">
            Built with Intention
          </h2>
          <p className="text-text-body text-[16px] leading-relaxed mb-8 max-w-xl mx-auto">
            {project.ctaText}
          </p>
          <Link
            href={project.ctaLink}
            className="inline-block bg-brio-navy text-white text-[13px] font-semibold uppercase tracking-wide px-8 py-3.5 hover:bg-brio-navy/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Back link */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <Link
          href="/projects"
          className="text-brio-navy text-[13px] font-semibold uppercase tracking-wide hover:underline"
        >
          &larr; Back to Projects
        </Link>
      </div>

      <Footer />
    </>
  );
}
