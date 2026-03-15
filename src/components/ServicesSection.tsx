import type { JSX } from "react";
import Link from "next/link";
import { BLIND_SPOT_URL } from "@/lib/constants";

const serviceIcons: Record<string, JSX.Element> = {
  s1: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8 2 4 6 4 12c0 2 .5 3.5 1.5 5L12 22l6.5-5c1-1.5 1.5-3 1.5-5 0-6-4-10-8-10z"/>
      <circle cx="12" cy="11" r="2.5"/>
      <path d="M8.5 17.5c.5-1.5 1.8-2.5 3.5-2.5s3 1 3.5 2.5"/>
    </svg>
  ),
  s2: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/>
      <circle cx="12" cy="12" r="3"/>
      <line x1="12" y1="3" x2="12" y2="1"/>
      <line x1="12" y1="23" x2="12" y2="21"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    </svg>
  ),
  s3: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  s4: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
};

interface Service {
  _key: string;
  title: string;
  tagline?: string;
  description?: string;
  ctaLabel?: string;
  ctaUrl?: string;
}

const defaultServices: Service[] = [
  {
    _key: "s1",
    title: "LaunchPad Elite",
    tagline: "6-Week 1:1 Intensive",
    description: "Deep-dive identity and strategy work for coaches, creators and CEOs ready to operate at a higher level. Personalised, high-accountability, high-result.",
    ctaLabel: "Learn More",
    ctaUrl: BLIND_SPOT_URL,
  },
  {
    _key: "s2",
    title: "Blind Spot Power Session",
    tagline: "90-Minute Clarity Session",
    description: "One session. One blind spot exposed. Walk away with a precise diagnosis of the invisible friction keeping you stuck — and a clear action plan.",
    ctaLabel: "Book Now",
    ctaUrl: BLIND_SPOT_URL,
  },
  {
    _key: "s3",
    title: "LaunchPad Lite",
    tagline: "30-Day Self-Paced Course",
    description: "The framework that underpins everything Kye does — available in a self-paced format. Identity recalibration meets real business strategy.",
    ctaLabel: "Enrol Now",
    ctaUrl: BLIND_SPOT_URL,
  },
  {
    _key: "s4",
    title: "Launchpad Community",
    tagline: "Ongoing Peer Community",
    description: "A curated community of purpose-driven leaders doing the identity work. Accountability, collaboration, and a space to expand together.",
    ctaLabel: "Join Now",
    ctaUrl: BLIND_SPOT_URL,
  },
];

interface ServicesSectionProps {
  services?: Service[];
  sectionHeading?: string;
}

export default function ServicesSection({ services = defaultServices, sectionHeading = "Work With Kye" }: ServicesSectionProps) {
  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "var(--black)" }}
    >
      {/* Subtle gold texture overlay */}
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
          {sectionHeading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service._key}
              className="flex flex-col"
              style={{ backgroundColor: "var(--cream)" }}
            >
              {/* Pink accent bar */}
              <div style={{ height: "4px", backgroundColor: "var(--pink)" }} />

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {serviceIcons[service._key] && (
                  <div className="mb-3" style={{ color: "var(--pink)" }}>
                    {serviceIcons[service._key]}
                  </div>
                )}
                <p
                  className="font-display font-black text-xl uppercase mb-1 leading-tight"
                  style={{ color: "var(--pink)" }}
                >
                  {service.title}
                </p>
                {service.tagline && (
                  <p
                    className="font-display text-xs tracking-widest uppercase font-bold mb-4"
                    style={{ color: "#8a6000" }}
                  >
                    {service.tagline}
                  </p>
                )}
                {service.description && (
                  <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "var(--mid-grey)" }}>
                    {service.description}
                  </p>
                )}
                <Link
                  href={service.ctaUrl || BLIND_SPOT_URL}
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
