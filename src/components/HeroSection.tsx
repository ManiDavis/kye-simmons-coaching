import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import MarqueeTicker from "./MarqueeTicker";

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
  auditCtaUrl = "#audit",
}: HeroSectionProps) {
  const words = heroStatement ? heroStatement.split(" ") : ["YOUR IDENTITY IS THE STRATEGY."];

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--cream)", paddingTop: "64px" }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[90vh] items-center">
        {/* Left content */}
        <div className="py-20 lg:py-24 relative z-10">
          {/* Giant stacked display type */}
          <h1 className="font-display font-black leading-none mb-8" style={{ color: "var(--pink)" }}>
            {words.map((word, i) => (
              <span key={i} className="block text-[clamp(4rem,11vw,9rem)] uppercase">
                {word}
              </span>
            ))}
          </h1>

          {/* Subtext */}
          {heroSubtext && (
            <p
              className="text-base lg:text-lg leading-relaxed mb-8 max-w-md font-light"
              style={{ color: "var(--mid-grey)" }}
            >
              {heroSubtext}
            </p>
          )}

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Link
              href={auditCtaUrl || "#audit"}
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

        {/* Right: Kye's photo */}
        <div className="relative hidden lg:block h-full min-h-[90vh]">
          {heroImage?.asset ? (
            <Image
              src={urlFor(heroImage.asset).width(900).height(1100).fit("crop").url()}
              alt={heroImage.alt || "Kye Simmons"}
              fill
              className="object-cover object-top"
              priority
              placeholder={heroImage.asset?.metadata?.lqip ? "blur" : "empty"}
              blurDataURL={heroImage.asset?.metadata?.lqip}
            />
          ) : (
            /* Placeholder when no image uploaded */
            <div
              className="w-full h-full flex flex-col items-center justify-center"
              style={{ backgroundColor: "#e0d8ce" }}
            >
              <div
                className="w-48 h-48 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "var(--pink)", opacity: 0.15 }}
              />
              <div className="text-center" style={{ color: "var(--mid-grey)" }}>
                <p className="font-display font-black text-2xl tracking-widest uppercase">KYE SIMMONS</p>
                <p className="font-display text-sm tracking-widest uppercase">Identity + Expansion Strategist</p>
              </div>
            </div>
          )}
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
