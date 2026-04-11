import Link from "next/link";

interface CTAProps {
  text?: string;
  href?: string;
}

export default function CTA({
  text = "Contact us today!",
  href = "/about-us#get-in-touch",
}: CTAProps) {
  return (
    <div className="text-center py-6">
      <p className="text-text-body text-base">
        Still have questions?{" "}
        <Link href={href} className="text-brio-navy font-bold hover:underline">
          {text}
        </Link>
      </p>
    </div>
  );
}
