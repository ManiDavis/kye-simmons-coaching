import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface PhotoHeroProps {
  title?: string;
  subtitle?: string;
  image?: { asset: SanityImageSource & { url: string; metadata?: { lqip?: string } }; alt?: string };
}

export default function PhotoHero({ title, subtitle, image }: PhotoHeroProps) {
  return (
    <section className="relative w-full min-h-[70vh] flex items-end overflow-hidden">
      {/* Background photo */}
      {image?.asset ? (
        <Image
          src={urlFor(image.asset).width(1600).height(900).fit("crop").url()}
          alt={image.alt || "Kye Simmons"}
          fill
          className="object-cover object-center"
          priority
          placeholder={image.asset?.metadata?.lqip ? "blur" : "empty"}
          blurDataURL={image.asset?.metadata?.lqip}
        />
      ) : (
        <div className="absolute inset-0" style={{ backgroundColor: "#1a1a1a" }} />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.78) 45%, rgba(0,0,0,0.3) 100%)" }} />

      {/* Text content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-24 w-full">
        <div className="max-w-2xl">
          <p
            className="font-display font-black text-[clamp(2.2rem,5vw,4.5rem)] leading-tight uppercase mb-2"
            style={{ color: "#fff" }}
          >
            {title || "IDENTITY & BUSINESS\nEXPANSION STRATEGIST."}
          </p>
          <p
            className="font-display font-light italic text-[clamp(1.2rem,2.5vw,2rem)] leading-snug"
            style={{ color: "var(--cream)", opacity: 0.9 }}
          >
            {subtitle || "for Coaches, Creators & CEOs"}
          </p>
        </div>
      </div>
    </section>
  );
}
