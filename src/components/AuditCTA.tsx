import Link from "next/link";
import { BLIND_SPOT_URL } from "@/lib/constants";

interface AuditCTAProps {
  heading?: string;
  subheading?: string;
  body?: string;
  ctaLabel?: string;
  ctaUrl?: string;
}

export default function AuditCTA({
  heading = "STOP trying to GUESS what isn't working...",
  subheading = "Aren't you tired of the Feast-or-Famine Cycle?",
  body = "This 2-minute audit reveals the invisible patterns quietly shaping your visibility, consistency, and income. You'll receive a personalised breakdown that shows what's actually running the loop, before more strategy is added.",
  ctaLabel = "> Show me my blind spot",
  ctaUrl,
}: AuditCTAProps) {
  const auditUrl = ctaUrl || BLIND_SPOT_URL;
  return (
    <section
      id="audit"
      className="relative py-20 overflow-hidden"
    >
      {/* Gold texture background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.4) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 50%, rgba(201,168,76,0.3) 0%, transparent 60%),
            linear-gradient(135deg, #8B6914 0%, #C9A84C 30%, #F0D060 50%, #C9A84C 70%, #8B6914 100%)
          `,
        }}
      />
      {/* Sparkle overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            rgba(255,255,255,0.15) 0px,
            rgba(255,255,255,0.15) 1px,
            transparent 1px,
            transparent 8px
          )`,
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Dark card */}
        <div
          className="rounded-2xl p-10 md:p-14 text-center"
          style={{ backgroundColor: "var(--black)" }}
        >
          <h2
            className="font-display font-black text-center uppercase mb-6 leading-tight"
            style={{ color: "var(--pink)", fontSize: "clamp(1.6rem,4vw,2.8rem)" }}
          >
            {heading}
          </h2>
          <p
            className="font-display font-black text-center mb-6"
            style={{ color: "var(--gold)", fontSize: "clamp(1.2rem,3vw,2rem)" }}
          >
            {subheading}
          </p>
          <p
            className="font-semibold text-sm mb-4"
            style={{ color: "#fff" }}
          >
            This 2-Minute Audit Reveals Your <em>Invisible</em> Client Blocks.
          </p>
          <p
            className="text-sm leading-relaxed mb-10 max-w-lg mx-auto"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            {body}
          </p>
          <Link
            href={auditUrl}
            className="block w-full font-display text-base tracking-widest uppercase font-black px-8 py-5 text-center transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "var(--pink)",
              color: "#fff",
              borderRadius: "9999px",
            }}
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
