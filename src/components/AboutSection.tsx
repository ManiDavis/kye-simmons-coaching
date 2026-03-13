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
    <section
      id="about"
      className="py-24"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* LEFT: image + dark panel */}
        <div>
          {/* Kye image */}
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
            <Image
              src="/images/kye-about.jpg"
              alt="Kye Simmons"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Dark panel */}
          <div style={{ backgroundColor: "var(--black)", padding: "2.5rem" }}>
            {/* Small label */}
            <p
              className="font-display text-xs tracking-[0.25em] uppercase mb-6 flex items-center gap-3"
              style={{ color: "var(--gold)" }}
            >
              <span className="block h-px w-8" style={{ backgroundColor: "var(--gold)" }} />
              The Person Behind the Work
            </p>

            {/* Stacked heading */}
            <div className="mb-8">
              {headingLines.map((line) => (
                <span
                  key={line._key}
                  className={`block leading-none ${
                    line.text.toLowerCase() === "exactly"
                      ? "font-serif italic font-bold text-[clamp(2.5rem,6vw,5rem)]"
                      : "font-display font-black text-[clamp(2.5rem,6vw,5rem)] uppercase"
                  }`}
                  style={{ color: colorMap[line.color] || "#fff" }}
                >
                  {line.text}
                </span>
              ))}
            </div>

            {/* Blockquote */}
            <blockquote
              className="border-l-4 pl-4 mb-8"
              style={{ borderColor: "var(--pink)" }}
            >
              <p className="font-serif italic text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
                {blockquote}
              </p>
            </blockquote>

            {/* Stat boxes */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { stat: "ELITE", sub: "SPORT BACKGROUND" },
                { stat: "2×", sub: "HIGH-PERFORMANCE ARENAS" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 border"
                  style={{ borderColor: "rgba(201,168,76,0.3)" }}
                >
                  <p className="font-display font-black text-2xl" style={{ color: "var(--gold)" }}>
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

        {/* RIGHT: body copy */}
        <div className="py-4">
          <p
            className="font-display text-xs tracking-[0.25em] uppercase font-semibold mb-6"
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

          {/* Numbered items */}
          <div className="mt-10 space-y-6">
            {items.map((item) => (
              <div key={item._key} className="flex gap-4">
                <span
                  className="font-display font-black text-2xl shrink-0 w-10"
                  style={{ color: "var(--dark-grey)", opacity: 0.2 }}
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

          <Link
            href={auditUrl}
            className="mt-10 inline-block font-display text-sm tracking-widest uppercase font-black px-8 py-4 transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--pink)", color: "#fff" }}
          >
            Take the Blind Spot Audit →
          </Link>
        </div>
      </div>
    </section>
  );
}
