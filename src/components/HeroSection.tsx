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
  const words = heroStatement ? heroStatement.split(" ") : ["YOUR", "IDENTITY", "IS", "THE", "STRATEGY."];
  const auditUrl = auditCtaUrl || BLIND_SPOT_URL;

  const kyeImageSrc = heroImage?.asset
    ? urlFor(heroImage.asset).width(900).height(1100).fit("crop").url()
    : "/images/kye-hero.png";

  const kyeImageAlt = heroImage?.alt || "Kye Simmons";

  // Subtext + CTAs start animating while last few words are still coming in
  const subtextDelay = `${Math.max(words.length - 2, 1) * 0.08 + 0.2}s`;
  const ctaDelay     = `${Math.max(words.length - 2, 1) * 0.08 + 0.35}s`;
  const labelDelay   = `${Math.max(words.length - 2, 1) * 0.08 + 0.48}s`;

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--cream)", paddingTop: "64px", minHeight: "100vh" }}
    >
      {/* Exact-viewport grid — locks everything in one screen on desktop */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-0 lg:h-[calc(100vh-64px)] lg:items-center">

        {/* ── LEFT: text content ── */}
        <div className="py-8 lg:py-0 relative z-10 flex flex-col justify-center">

          {/* Stacked heading — each word flies up independently */}
          <div className="overflow-hidden">
            <h1 className="font-display font-black leading-[0.92] mb-5" style={{ color: "var(--pink)" }}>
              {words.map((word, i) => (
                <span
                  key={i}
                  className="block text-[clamp(2rem,4.8vw,4.4rem)] uppercase animate-hero-word"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  {word}
                </span>
              ))}
            </h1>
          </div>

          {/* Pink accent line — draws in after heading */}
          <div
            className="h-[3px] mb-5 animate-hero-line"
            style={{
              backgroundColor: "var(--pink)",
              animationDelay: `${(words.length - 1) * 0.08 + 0.1}s`,
            }}
          />

          {/* Subtext */}
          {heroSubtext && (
            <p
              className="font-serif italic text-base lg:text-lg leading-relaxed mb-6 max-w-sm animate-hero-fade"
              style={{
                color: "var(--mid-grey)",
                textWrap: "pretty",
                animationDelay: subtextDelay,
              } as React.CSSProperties}
            >
              {heroSubtext}
            </p>
          )}

          {/* CTAs */}
          <div
            className="flex flex-wrap items-center gap-4 mb-3 animate-hero-fade"
            style={{ animationDelay: ctaDelay } as React.CSSProperties}
          >
            <Link
              href={auditUrl}
              className="font-display text-sm tracking-widest uppercase font-black px-7 py-3.5 transition-all hover:opacity-90 hover:scale-[1.02] inline-block"
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
            <p
              className="text-xs font-semibold tracking-widest uppercase animate-hero-fade"
              style={{
                color: "var(--gold)",
                animationDelay: labelDelay,
              } as React.CSSProperties}
            >
              {heroAuditLabel}
            </p>
          )}
        </div>

        {/* ── MOBILE image — below text, portrait ── */}
        <div className="block lg:hidden relative w-full overflow-hidden animate-hero-image" style={{ aspectRatio: "3/4", animationDelay: "0.1s" } as React.CSSProperties}>
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
          <div className="absolute bottom-0 left-0 px-5 py-3" style={{ backgroundColor: "var(--black)" }}>
            <p className="font-display font-black text-base tracking-widest uppercase" style={{ color: "#fff" }}>KYE SIMMONS</p>
            <p className="font-display text-xs tracking-widest uppercase" style={{ color: "var(--gold)" }}>Identity + Expansion Strategist</p>
          </div>
        </div>

        {/* ── DESKTOP image — right panel, full height ── */}
        <div
          className="relative hidden lg:block h-full overflow-hidden animate-hero-image"
          style={{ animationDelay: "0.05s" } as React.CSSProperties}
        >
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
          <div className="absolute bottom-10 left-0 px-6 py-4" style={{ backgroundColor: "var(--black)" }}>
            <p className="font-display font-black text-lg tracking-widest uppercase" style={{ color: "#fff" }}>KYE SIMMONS</p>
            <p className="font-display text-xs tracking-widest uppercase" style={{ color: "var(--gold)" }}>Identity + Expansion Strategist</p>
          </div>
        </div>

      </div>

      {/* Marquee ticker */}
      {heroBannerItems.length > 0 && <MarqueeTicker items={heroBannerItems} />}
    </section>
  );
}
