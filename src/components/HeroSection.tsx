import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import MarqueeTicker from "./MarqueeTicker";
import { BLIND_SPOT_URL } from "@/lib/constants";

interface HeroSectionProps {
  heroStatement: string;
  heroSubtext?: string;
  heroAuditLabel?: string;
  heroImage?: { asset: SanityImageSource & { url: string; metadata?: { lqip?: string } }; alt?: string };
  heroBannerItems?: string[];
  auditCtaUrl?: string;
}

export default function HeroSection({
  heroStatement,
  heroSubtext,
  heroAuditLabel,
  heroImage,
  heroBannerItems = [],
  auditCtaUrl,
}: HeroSectionProps) {
  const words = heroStatement ? heroStatement.split(" ") : ["YOUR IDENTITY IS THE STRATEGY."];
  const auditUrl = auditCtaUrl || BLIND_SPOT_URL;

  const kyeImageSrc = heroImage?.asset
    ? urlFor(heroImage.asset).width(900).height(1100).fit("crop").url()
    : "/images/kye-hero.png";

  const kyeImageAlt = heroImage?.alt || "Kye Simmons";

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--cream)", paddingTop: "64px" }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-0 lg:min-h-[90vh] lg:items-center">
        {/* Left content */}
        <div className="py-14 lg:py-24 relative z-10">
          {/* Giant stacked display type */}
          <h1 className="font-display font-black leading-none mb-8" style={{ color: "var(--pink)" }}>
            {words.map((word, i) => (
              <span key={i} className="block text-[clamp(3.5rem,10vw,9rem)] uppercase">
                {word}
              </span>
            ))}
          </h1>

          {/* Subtext — Cormorant Garamond italic for editorial elegance */}
          {heroSubtext && (
            <p
              className="font-serif italic text-lg lg:text-xl leading-relaxed mb-8 max-w-md"
              style={{ color: "var(--mid-grey)", textWrap: "pretty" } as React.CSSProperties}
            >
              {heroSubtext}
            </p>
          )}

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Link
              href={auditUrl}
              className="font-display text-sm tracking-widest uppercase font-black px-8 py-4 transition-opacity hover:opacity-90 inline-block"
              style={{ backgroundColor: "var(--pink)", color: "#fff" }}
            >
              Take the Blind Spot Audit →
            </Link>
            <Link
              href="#services"
              className="font-display text-sm tracking-widest uppercase font-semibold border-b-2 pb-0.5 transition-opacity hover:opacity-60"
              style={{ color: "var(--black)", borderColor: "var(--black)" }}
            >
              See How We Work
            </Link>
          </div>

          {/* Gold label */}
          {heroAuditLabel && (
            <p className="text-xs font-semibold tracking-widest uppercase mt-4" style={{ color: "var(--gold)" }}>
              {heroAuditLabel}
            </p>
          )}
        </div>

        {/* Mobile image — full width, shown only on mobile */}
        <div className="block lg:hidden relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
          <Image
            src={kyeImageSrc}
            alt={kyeImageAlt}
            fill
            sizes="100vw"
            className="object-cover object-top"
            priority
            placeholder={heroImage?.asset?.metadata?.lqip ? "blur" : "empty"}
            blurDataURL={heroImage?.asset?.metadata?.lqip}
          />
          {/* Name tag overlay */}
          <div
            className="absolute bottom-0 left-0 px-5 py-3"
            style={{ backgroundColor: "var(--black)" }}
          >
            <p className="font-display font-black text-base tracking-widest uppercase" style={{ color: "#fff" }}>
              KYE SIMMONS
            </p>
            <p className="font-display text-xs tracking-widest uppercase" style={{ color: "var(--gold)" }}>
              Identity + Expansion Strategist
            </p>
          </div>
        </div>

        {/* Desktop image — right panel, hidden on mobile */}
        <div className="relative hidden lg:block h-full min-h-[90vh]">
          <Image
            src={kyeImageSrc}
            alt={kyeImageAlt}
            fill
            sizes="50vw"
            className="object-cover object-top"
            priority
            placeholder={heroImage?.asset?.metadata?.lqip ? "blur" : "empty"}
            blurDataURL={heroImage?.asset?.metadata?.lqip}
          />
          {/* Name tag overlay */}
          <div
            className="absolute bottom-10 left-0 px-6 py-4"
            style={{ backgroundColor: "var(--black)" }}
          >
            <p className="font-display font-black text-lg tracking-widest uppercase" style={{ color: "#fff" }}>
              KYE SIMMONS
            </p>
            <p className="font-display text-xs tracking-widest uppercase" style={{ color: "var(--gold)" }}>
              Identity + Expansion Strategist
            </p>
          </div>
        </div>
      </div>

      {/* Marquee ticker */}
      {heroBannerItems.length > 0 && <MarqueeTicker items={heroBannerItems} />}
    </section>
  );
}
