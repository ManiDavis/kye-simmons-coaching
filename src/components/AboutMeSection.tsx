import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { BLIND_SPOT_URL } from "@/lib/constants";

interface AboutMeSectionProps {
  sectionTitle?: string;
  image?: { asset: SanityImageSource & { url: string; metadata?: { lqip?: string } }; alt?: string };
  body?: string[];
  ctaLabel?: string;
  ctaUrl?: string;
}

const defaultBody = [
  "After years inside high-performance environments — from elite sport to business — I noticed a pattern. Brilliant, capable founders doing everything \"right\"… and still plateauing.",
  "Not because they lacked effort. But because they had reached the edge of their identity.",
  "I've stood there myself.",
  "Revenue ceilings are rarely structural. They are perceptual. You don't stall because you need another tactic. You stall because your self-concept hasn't caught up with your ambition. I work with purpose-driven leaders to recalibrate the identity driving their visibility, pricing, and leadership — so growth becomes stabilised, not sporadic.",
  "Scaling isn't about doing more. It's about embodying authority.",
  "When identity expands, strategy finally works.",
  "If you're ready to identify the invisible friction shaping your business, begin with the Blind Spot Audit. It's a free tool designed to uncover the business gaps between where you are and where you're fully capable of operating.",
];

export default function AboutMeSection({
  sectionTitle = "I'm Kye",
  image,
  body = defaultBody,
  ctaLabel = "Take the Free Blind Spot Audit",
  ctaUrl = BLIND_SPOT_URL,
}: AboutMeSectionProps) {
  const imgSrc = image?.asset
    ? urlFor(image.asset).width(640).height(640).fit("crop").url()
    : "/images/kye-about.jpg";

  return (
    <section
      id="about-me"
      className="py-24"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <span style={{ display: "block", width: "40px", height: "2px", backgroundColor: "var(--gold)" }} />
          <p className="font-display text-xs tracking-[0.3em] uppercase text-center" style={{ color: "var(--dark-grey)" }}>
            About Me
          </p>
          <span style={{ display: "block", width: "40px", height: "2px", backgroundColor: "var(--gold)" }} />
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16 mt-10">

          {/* Round photo */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <div
              className="relative overflow-hidden"
              style={{
                width: "clamp(200px, 28vw, 320px)",
                height: "clamp(200px, 28vw, 320px)",
                borderRadius: "50%",
                border: "4px solid var(--gold)",
              }}
            >
              <Image
                src={imgSrc}
                alt={image?.alt || "Kye Simmons"}
                fill
                className="object-cover object-top"
                placeholder={image?.asset?.metadata?.lqip ? "blur" : "empty"}
                blurDataURL={image?.asset?.metadata?.lqip}
              />
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1">
            <h2
              className="font-display font-black uppercase mb-6"
              style={{ color: "var(--pink)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              {sectionTitle}
            </h2>

            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--dark-grey)" }}>
              {(body ?? defaultBody).map((para, i) => (
                <p
                  key={i}
                  style={
                    para === "I've stood there myself."
                      ? { fontStyle: "italic", color: "var(--mid-grey)" }
                      : para === "Scaling isn't about doing more. It's about embodying authority."
                      ? { fontWeight: 600 }
                      : para === "When identity expands, strategy finally works."
                      ? { fontWeight: 600, color: "var(--pink)" }
                      : undefined
                  }
                >
                  {para}
                </p>
              ))}
            </div>

            <Link
              href={ctaUrl}
              className="inline-block mt-8 font-display text-sm tracking-widest uppercase font-black px-8 py-4 transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--pink)", color: "#fff" }}
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
