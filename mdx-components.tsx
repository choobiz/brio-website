import type { MDXComponents } from "mdx/types";
import type { ImageProps } from "next/image";
import Image from "next/image";
import Link from "next/link";
import CalloutCard from "@/components/blog/CalloutCard";
import PullQuote from "@/components/blog/PullQuote";
import Figure from "@/components/blog/Figure";
import BeforeAfterSlider from "@/components/service/BeforeAfterSlider";
import InlineLeadForm from "@/components/blog/InlineLeadForm";

// Tailwind v4 doesn't ship a `prose` plugin out of the box. We style the
// generated HTML elements directly here so MDX renders with our typography
// system (Open Sans body / Times New Roman headings, brio-navy accents).
const components: MDXComponents = {
  h2: ({ children, id, ...rest }) => (
    <h2
      id={id}
      className="font-heading text-brio-navy text-[26px] md:text-[30px] font-semibold mt-12 mb-4 leading-tight scroll-mt-24"
      {...rest}
    >
      {children}
    </h2>
  ),
  h3: ({ children, id, ...rest }) => (
    <h3
      id={id}
      className="font-heading text-brio-navy text-[20px] md:text-[22px] font-semibold mt-8 mb-3 leading-snug scroll-mt-24"
      {...rest}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...rest }) => (
    <h4 className="font-heading text-brio-navy text-[17px] font-semibold mt-6 mb-2" {...rest}>
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-text-body text-[17px] leading-[1.7] mb-5">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-6 mb-5 text-text-body text-[17px] leading-[1.7] space-y-1.5">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 mb-5 text-text-body text-[17px] leading-[1.7] space-y-1.5">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-brio-navy pl-5 my-6 italic text-text-body text-[17px] leading-relaxed">
      {children}
    </blockquote>
  ),
  a: ({ href, children, ...rest }) => {
    const isInternal = href?.startsWith("/") || href?.startsWith("#");
    if (isInternal && href) {
      return (
        <Link href={href} className="text-brio-navy underline underline-offset-2 hover:opacity-80">
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-brio-navy underline underline-offset-2 hover:opacity-80"
        {...rest}
      >
        {children}
      </a>
    );
  },
  hr: () => <hr className="my-10 border-border" />,
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse text-[15px]">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border border-border bg-brio-light-gray px-4 py-2 text-left font-semibold text-brio-navy">
      {children}
    </th>
  ),
  td: ({ children }) => <td className="border border-border px-4 py-2 align-top">{children}</td>,
  img: (props) => (
    <Image
      sizes="(max-width: 768px) 100vw, 720px"
      width={720}
      height={480}
      className="my-6 h-auto w-full"
      {...(props as ImageProps)}
      alt={props.alt ?? ""}
    />
  ),
  // Custom MDX components — usable directly inside .mdx files
  CalloutCard,
  PullQuote,
  Figure,
  BeforeAfterSlider,
  InlineLeadForm,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
