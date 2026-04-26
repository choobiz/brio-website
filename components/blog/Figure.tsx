import Image from "next/image";

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  /** Full-bleed escapes the article column on desktop. */
  fullBleed?: boolean;
  /** Defaults to 16:9 (1600x900). Override for portraits or odd ratios. */
  width?: number;
  height?: number;
}

export default function Figure({
  src,
  alt,
  caption,
  fullBleed = false,
  width = 1600,
  height = 900,
}: FigureProps) {
  return (
    <figure className={`my-8 ${fullBleed ? "md:-mx-24 lg:-mx-32" : ""}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={fullBleed ? "(max-width: 768px) 100vw, 1280px" : "(max-width: 768px) 100vw, 720px"}
        className="h-auto w-full"
      />
      {caption && (
        <figcaption className="mt-2 text-text-muted text-[13px] italic text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
