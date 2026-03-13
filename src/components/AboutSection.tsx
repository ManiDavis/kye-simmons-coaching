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
  const auditUrl = auditCtaUrl || BLIND_SPOT_URL;

  return (
    <section id="about" className="py-24" style={{ backgroundColor: "var(--cream)" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* ── BLOCK 1: Image + Dark panel — contained, equal height ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch mb-12">

          {/* Image — stretches to match dark panel height */}
          <div className="relative overflow-hidden" style={{ minHeight: "420px" }}>
            <Image
              src="/images/kye-about.jpg"
              alt="Kye Simmons"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Dark panel — label → heading → blockquote → stats */}
          <div
            className="flex flex-col justify-between"
            style={{ backgroundColor: "var(--black)", padding: "2.5rem" }}
          >
            <div>
              {/* Label */}
              <p
                className="font-display text-xs tracking-[0.25em] uppercase mb-8 flex items-center gap-3"
                style={{ color: "var(--gold)" }}
              >
                <span className="block h-px w-8 shrink-0" style={{ backgroundColor: "var(--gold)" }} />
                Kye Simmons — The Person Behind the Work
              </p>

              {/* Heading */}
              <div className="mb-8">
                {headingLines.map((line) => (
                  <span
                    key={line._key}
                    className={`block leading-none ${
                      line.text.toLowerCase() === "exactly"
                        ? "font-serif italic font-bold text-[clamp(2.2rem,4vw,4rem)]"
                        : "font-display font-black text-[clamp(2.2rem,4vw,4rem)] uppercase"
                    }`}
                    style={{ color: colorMap[line.color] || "#fff" }}
                  >
                    {line.text}
                  </span>
                ))}
              </div>
            </div>

            <div>
              {/* Blockquote */}
              <blockquote className="border-l-4 pl-4 mb-6" style={{ borderColor: "var(--pink)" }}>
                <p className="font-serif italic text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
                  {blockquote}
                </p>
              </blockquote>

              {/* Stat boxes */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { stat: "ELITE", sub: "SPORT BACKGROUND" },
                  { stat: "2×", sub: "HIGH-PERFORMANCE ARENAS" },
                ].map((item, i) => (
                  <div key={i} className="p-4 border" style={{ borderColor: "rgba(201,168,76,0.3)" }}>
                    <p className="font-display font-black text-xl" style={{ color: "var(--gold)" }}>
                      {item.stat}
                    </p>
                    <p className="font-display text-xs tracking-widest uppercase mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {item.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── BLOCK 2: Body + items + CTAs — full width below ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: intro copy */}
          <div>
            <p
              className="font-display text-xs tracking-[0.25em] uppercase font-semibold mb-5"
              style={{ color: "var(--pink)" }}
            >
              I'm Kye Simmons
            </p>
            <p className="text-base leading-relaxed font-semibold mb-4" style={{ color: "var(--dark-grey)" }}>
              <strong>I'm Kye</strong> — {bodyIntro}
            </p>
            {body.map((para, i) => (
              <p key={i} className="text-base leading-relaxed mb-4" style={{ color: "var(--dark-grey)" }}>
                {para}
              </p>
            ))}

          </div>

          {/* Right: numbered items */}
          <div>
            {items.map((item, index) => (
              <div
                key={item._key}
                className="flex gap-4 py-5"
                style={index > 0 ? { borderTop: "1px solid rgba(0,0,0,0.12)" } : undefined}
              >
                <span
                  className="font-display font-black text-2xl shrink-0 w-10"
                  style={{ color: "var(--pink)", opacity: 0.4 }}
                >
                  {item.number}
                </span>
                <div>
                  <p
                    className="font-display text-xs tracking-[0.2em] uppercase font-black mb-1"
                    style={{ color: "var(--pink)" }}
                  >
                    {item.label}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--dark-grey)" }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ── CTAs — full width, centred below both columns ── */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-4">
          <Link
            href={auditUrl}
            className="font-display text-sm tracking-widest uppercase font-black px-8 py-4 transition-opacity hover:opacity-90 inline-block"
            style={{ backgroundColor: "var(--pink)", color: "#fff" }}
          >
            Take the Blind Spot Audit →
          </Link>
          <Link
            href={BLIND_SPOT_URL}
            className="font-display text-sm tracking-widest uppercase font-semibold border-b-2 pb-0.5 transition-opacity hover:opacity-60"
            style={{ color: "var(--black)", borderColor: "var(--black)" }}
          >
            Book a Free Strategy Call
          </Link>
        </div>

      </div>
    </section>
  );
}
