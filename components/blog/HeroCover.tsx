import Image from "next/image";

interface HeroCoverProps {
  src: string;
  alt: string;
  title: string;
  excerpt?: string;
  category?: string;
}

/**
 * Full-bleed cover image with title + dek overlaid on a navy gradient.
 * Title is in serif heading font for editorial feel.
 */
export default function HeroCover({ src, alt, title, excerpt, category }: HeroCoverProps) {
  return (
    <header className="relative w-full bg-brio-navy">
      <div className="relative aspect-[16/10] md:aspect-[21/9] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brio-navy via-brio-navy/70 to-brio-navy/30" />
      </div>
      <div className="absolute inset-0 flex items-end">
        <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-10 md:pb-16">
          {category && (
            <p className="text-white/85 text-[12px] font-semibold uppercase tracking-[0.2em] mb-3">
              {category}
            </p>
          )}
          <h1 className="font-heading text-white text-[28px] md:text-[44px] lg:text-[52px] font-semibold leading-[1.15] mb-4 max-w-3xl">
            {title}
          </h1>
          {excerpt && (
            <p className="text-white/85 text-[16px] md:text-[18px] leading-relaxed max-w-2xl">
              {excerpt}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}
