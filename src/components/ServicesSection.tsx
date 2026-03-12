import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface Service {
  _key: string;
  title: string;
  tagline?: string;
  description?: string;
  ctaLabel?: string;
  ctaUrl?: string;
  image?: { asset: SanityImageSource & { url: string; metadata?: { lqip?: string } }; alt?: string };
}

const defaultServices: Service[] = [
  {
    _key: "s1",
    title: "LaunchPad Elite",
    tagline: "6-Week 1:1 Intensive",
    description: "Deep-dive identity and strategy work for coaches, creators and CEOs ready to operate at a higher level. Personalised, high-accountability, high-result.",
    ctaLabel: "Learn More",
    ctaUrl: "#audit",
  },
  {
    _key: "s2",
    title: "Blind Spot POWER Session",
    tagline: "90-Minute Clarity Session",
    description: "One session. One blind spot exposed. Walk away with a precise diagnosis of the invisible friction keeping you stuck — and a clear action plan.",
    ctaLabel: "Book Now",
    ctaUrl: "#audit",
  },
  {
    _key: "s3",
    title: "LaunchPad Lite",
    tagline: "30-Day Self-Paced Course",
    description: "The framework that underpins everything Kye does — available in a self-paced format. Identity recalibration meets real business strategy.",
    ctaLabel: "Enrol Now",
    ctaUrl: "#audit",
  },
  {
    _key: "s4",
    title: "Launchpad Community",
    tagline: "Ongoing Peer Community",
    description: "A curated community of purpose-driven leaders doing the identity work. Accountability, collaboration, and a space to expand together.",
    ctaLabel: "Join Us",
    ctaUrl: "#audit",
  },
];

interface ServicesSectionProps {
  services?: Service[];
}

export default function ServicesSection({ services = defaultServices }: ServicesSectionProps) {
  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "var(--black)" }}
    >
      {/* Subtle gold texture overlay using CSS */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            var(--gold) 0px,
            var(--gold) 1px,
            transparent 1px,
            transparent 12px
          )`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section label */}
        <p
          className="font-display text-xs tracking-[0.3em] uppercase text-center mb-4"
          style={{ color: "var(--gold)" }}
        >
          Services
        </p>
        <h2
          className="font-display font-black text-center uppercase mb-16"
          style={{ color: "#fff", fontSize: "clamp(2rem,5vw,3.5rem)" }}
        >
          Work With Kye
        </h2>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service._key}
              className="flex flex-col"
              style={{ backgroundColor: "var(--cream)" }}
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-200">
                {service.image?.asset ? (
                  <Image
                    src={urlFor(service.image.asset).width(600).height(450).fit("crop").url()}
                    alt={service.image.alt || service.title}
                    fill
                    className="object-cover"
                    placeholder={service.image.asset?.metadata?.lqip ? "blur" : "empty"}
                    blurDataURL={service.image.asset?.metadata?.lqip}
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ backgroundColor: "#e0d4c8" }}
                  >
                    <span className="font-display font-black text-4xl" style={{ color: "var(--pink)", opacity: 0.3 }}>
                      KS
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <p
                  className="font-display font-black text-xl uppercase mb-1 leading-tight"
                  style={{ color: "var(--pink)" }}
                >
                  {service.title}
                </p>
                {service.tagline && (
                  <p className="font-display text-xs tracking-widest uppercase font-bold mb-3" style={{ color: "var(--dark-grey)" }}>
                    {service.tagline}
                  </p>
                )}
                {service.description && (
                  <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "var(--mid-grey)" }}>
                    {service.description}
                  </p>
                )}
                <Link
                  href={service.ctaUrl || "#audit"}
                  className="font-display text-xs tracking-widest uppercase font-black px-5 py-3 text-center transition-opacity hover:opacity-90 mt-auto"
                  style={{ backgroundColor: "var(--black)", color: "#fff" }}
                >
                  {service.ctaLabel || "Learn More"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
