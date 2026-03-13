"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { BLIND_SPOT_URL } from "@/lib/constants";

interface HeadingLine {
  _key: string;
  text: string;
  color: "white" | "pink" | "gold";
}

interface AboutItem {
  _key: string;
  number: string;
  label: string;
  body: string;
}

interface AboutSectionProps {
  headingLines?: HeadingLine[];
  blockquote?: string;
  bodyIntro?: string;
  body?: string[];
  items?: AboutItem[];
  auditCtaUrl?: string;
}

const colorMap: Record<string, string> = {
  white: "#ffffff",
  pink: "var(--pink)",
  gold: "var(--gold)",
};

const defaultHeadingLines: HeadingLine[] = [
  { _key: "a", text: "I'VE STOOD", color: "white" },
  { _key: "b", text: "exactly", color: "white" },
  { _key: "c", text: "WHERE", color: "pink" },
  { _key: "d", text: "YOU", color: "gold" },
  { _key: "e", text: "ARE.", color: "pink" },
];

const defaultItems: AboutItem[] = [
  {
    _key: "01",
    number: "01",
    label: "The Pattern I Kept Seeing",
    body: "Revenue ceilings are rarely structural — they're perceptual. You don't stall because you need another tactic. You stall because your self-concept hasn't caught up with your ambition.",
  },
  {
    _key: "02",
    number: "02",
    label: "What I Do About It",
    body: "I work with purpose-driven leaders to recalibrate the identity driving their visibility, pricing, and leadership — so growth becomes stabilised, not sporadic. Scaling isn't about doing more. It's about embodying authority.",
  },
  {
    _key: "03",
    number: "03",
    label: "Who This Is For",
    body: "Coaches, creators and CEOs who are already capable of operating at a higher level — but something invisible keeps pulling them back to where they've always been. When identity expands, strategy finally works.",
  },
];

const statItems = [
  { stat: "ELITE", sub: "SPORT BACKGROUND" },
  { stat: "2×", sub: "HIGH-PERFORMANCE ARENAS" },
];

export default function AboutSection({
  headingLines = defaultHeadingLines,
  blockquote = '"The ceiling you keep hitting isn\'t a strategy problem. It\'s an identity problem. I know — because I had to solve it in myself first."',
  bodyIntro = "After years inside high-performance environments — from elite sport to business — I noticed a pattern. Brilliant, capable founders doing everything right… and still plateauing.",
  body = [
    "Not because they lacked effort or intelligence. Because they had reached the edge of their identity. And no tactic in the world will take you past that edge. I've stood there myself. That's what makes this work different.",
  ],
  items = defaultItems,
  auditCtaUrl,
}: AboutSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const auditUrl = auditCtaUrl || BLIND_SPOT_URL;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("about-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative" style={{ backgroundColor: "var(--black)" }}>

      {/* Subtle gold diagonal texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, var(--gold) 0px, var(--gold) 1px, transparent 1px, transparent 16px)`,
        }}
      />

      {/* ══════════════════════════════════════════════
          DESKTOP BLOCK 1: image left / text right
          ══════════════════════════════════════════════ */}
      <div className="relative hidden lg:grid grid-cols-2 items-stretch">

        {/* Left: pink suit photo, constrained and centred */}
        <div className="relative flex items-center justify-center p-10" style={{ minHeight: "620px" }}>
          <div className="relative overflow-hidden" style={{ width: "260px", aspectRatio: "4/5" }}>
            <Image
              src="/images/kye-photo-hero.png"
              alt="Kye Simmons"
              fill
              className="object-cover object-center"
              sizes="260px"
            />
          </div>
        </div>

        {/* Right: all text, right-aligned */}
        <div className="flex flex-col px-14 py-16 text-right">
          <div>
            {headingLines.map((line, i) => (
              <span
                key={line._key}
                className={`about-word block leading-[0.88] ${
                  line.text.toLowerCase() === "exactly"
                    ? "font-serif italic font-bold text-[clamp(3.5rem,7vw,8rem)]"
                    : "font-display font-black text-[clamp(3.5rem,7vw,8rem)] uppercase"
                }`}
                style={{
                  color: colorMap[line.color] || "#fff",
                  animationDelay: `${i * 0.1}s`,
                } as React.CSSProperties}
              >
                {line.text}
              </span>
            ))}
          </div>

          <div className="mt-20">
            <blockquote
              className="about-fade border-r-4 pr-5 mb-8"
              style={{ borderColor: "var(--pink)", animationDelay: "0.55s" } as React.CSSProperties}
            >
              <p className="font-serif italic text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                {blockquote}
              </p>
            </blockquote>

            <div
              className="about-fade grid grid-cols-2 gap-3"
              style={{ animationDelay: "0.7s" } as React.CSSProperties}
            >
              {statItems.map((item, i) => (
                <div key={i} className="p-5 border" style={{ borderColor: "rgba(201,168,76,0.25)" }}>
                  <p className="font-display font-black text-2xl" style={{ color: "var(--gold)" }}>{item.stat}</p>
                  <p className="font-display text-xs tracking-widest uppercase mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          MOBILE BLOCK 1: heading → image → blockquote+stats
          ══════════════════════════════════════════════ */}
      <div className="relative lg:hidden">

        {/* Big heading */}
        <div className="px-6 pt-16 pb-10">
          {headingLines.map((line, i) => (
            <span
              key={line._key}
              className={`about-word block leading-[0.88] ${
                line.text.toLowerCase() === "exactly"
                  ? "font-serif italic font-bold text-[clamp(3.8rem,12vw,8rem)]"
                  : "font-display font-black text-[clamp(3.8rem,12vw,8rem)] uppercase"
              }`}
              style={{
                color: colorMap[line.color] || "#fff",
                animationDelay: `${i * 0.1}s`,
              } as React.CSSProperties}
            >
              {line.text}
            </span>
          ))}
        </div>

        {/* Blockquote + stats */}
        <div className="px-6 pt-10 pb-6">
          <blockquote
            className="about-fade border-l-4 pl-5 mb-8"
            style={{ borderColor: "var(--pink)", animationDelay: "0.55s" } as React.CSSProperties}
          >
            <p className="font-serif italic text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
              {blockquote}
            </p>
          </blockquote>

          <div
            className="about-fade grid grid-cols-2 gap-3"
            style={{ animationDelay: "0.7s" } as React.CSSProperties}
          >
            {statItems.map((item, i) => (
              <div key={i} className="p-4 border" style={{ borderColor: "rgba(201,168,76,0.25)" }}>
                <p className="font-display font-black text-xl" style={{ color: "var(--gold)" }}>{item.stat}</p>
                <p className="font-display text-xs tracking-widest uppercase mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gold divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div style={{ height: "1px", backgroundColor: "rgba(201,168,76,0.2)" }} />
      </div>

      {/* Mobile only: pink suit image between divider and "I'm Kye Simmons" */}
      <div className="lg:hidden relative w-full overflow-hidden mt-10" style={{ aspectRatio: "4/5" }}>
        <Image
          src="/images/kye-photo-hero.png"
          alt="Kye Simmons"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* ══ BLOCK 2: Body + items — full width, black ══ */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">

        <p
          className="about-fade font-display text-xs tracking-[0.3em] uppercase font-semibold mb-10 text-center"
          style={{ color: "var(--gold)", animationDelay: "0.1s" } as React.CSSProperties}
        >
          I'm Kye Simmons
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: body copy */}
          <div>
            <p
              className="about-fade text-base leading-relaxed font-semibold mb-5"
              style={{ color: "#fff", animationDelay: "0.2s" } as React.CSSProperties}
            >
              <strong>I'm Kye</strong> — {bodyIntro}
            </p>
            {body.map((para, i) => (
              <p
                key={i}
                className="about-fade text-base leading-relaxed mb-4"
                style={{ color: "rgba(255,255,255,0.65)", animationDelay: `${0.3 + i * 0.1}s` } as React.CSSProperties}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Right: numbered items */}
          <div>
            {items.map((item, index) => (
              <div
                key={item._key}
                className="about-fade flex gap-5 py-5"
                style={{
                  borderTop: index > 0 ? "1px solid rgba(255,255,255,0.08)" : undefined,
                  animationDelay: `${0.25 + index * 0.12}s`,
                } as React.CSSProperties}
              >
                <span className="font-display font-black text-2xl shrink-0 w-10" style={{ color: "var(--pink)", opacity: 0.5 }}>
                  {item.number}
                </span>
                <div>
                  <p className="font-display text-xs tracking-[0.2em] uppercase font-black mb-1" style={{ color: "var(--pink)" }}>
                    {item.label}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* CTAs — centred */}
        <div className="mt-14 flex flex-wrap justify-center items-center gap-5">
          <Link
            href={auditUrl}
            className="font-display text-sm tracking-widest uppercase font-black px-8 py-4 transition-all hover:opacity-90 hover:scale-[1.02] inline-block"
            style={{ backgroundColor: "var(--pink)", color: "#fff" }}
          >
            Take the Blind Spot Audit →
          </Link>
          <Link
            href={BLIND_SPOT_URL}
            className="font-display text-sm tracking-widest uppercase font-semibold border-b-2 pb-0.5 transition-opacity hover:opacity-60"
            style={{ color: "#fff", borderColor: "rgba(255,255,255,0.5)" }}
          >
            Book a Free Strategy Call
          </Link>
        </div>

      </div>
    </section>
  );
}
