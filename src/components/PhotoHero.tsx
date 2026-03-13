import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface PhotoHeroProps {
  title?: string;
  subtitle?: string;
  image?: { asset: SanityImageSource & { url: string; metadata?: { lqip?: string } }; alt?: string };
}

export default function PhotoHero({ title, subtitle, image }: PhotoHeroProps) {
  // Desktop: headshot (crops well as landscape, no baked-in text)
  // Mobile: pink suit (portrait, dramatic full-bleed)
  const desktopSrc = image?.asset
    ? urlFor(image.asset).width(1600).height(900).fit("crop").url()
    : "/images/kye-headshot.jpg";
  const mobileSrc = image?.asset
    ? urlFor(image.asset).width(900).height(1100).fit("crop").url()
    : "/images/kye-photo-hero.png";

  return (
    <section className="relative w-full aspect-[4/5] md:aspect-auto md:min-h-[70vh] flex items-end overflow-hidden">
      {/* Desktop background — headshot, landscape crop */}
      <Image
        src={desktopSrc}
        alt={image?.alt || "Kye Simmons"}
        fill
        className="object-cover object-top hidden md:block"
        priority
        sizes="100vw"
        placeholder={image?.asset?.metadata?.lqip ? "blur" : "empty"}
        blurDataURL={image?.asset?.metadata?.lqip}
      />
      {/* Mobile background — pink suit portrait */}
      <Image
        src={mobileSrc}
        alt={image?.alt || "Kye Simmons"}
        fill
        className="object-cover object-center block md:hidden"
        priority
        sizes="100vw"
        placeholder={image?.asset?.metadata?.lqip ? "blur" : "empty"}
        blurDataURL={image?.asset?.metadata?.lqip}
      />

      {/* Dark overlay — dark at bottom (text), fades to transparent at top */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.1) 100%)" }} />

      {/* Text content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-24 w-full">
        <div className="max-w-2xl">
          <p
            className="font-display font-black text-[clamp(2.2rem,5vw,4.5rem)] leading-tight uppercase mb-2"
            style={{ color: "#fff" }}
          >
            {title || "IDENTITY & BUSINESS EXPANSION STRATEGIST."}
          </p>
          <p
            className="font-serif italic text-[clamp(1.2rem,2.5vw,2rem)] leading-snug"
            style={{ color: "var(--cream)", opacity: 0.9 }}
          >
            {subtitle || "for Coaches, Creators & CEOs"}
          </p>
        </div>
      </div>
    </section>
  );
}
