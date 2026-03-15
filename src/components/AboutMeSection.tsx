import Image from "next/image";
import Link from "next/link";
import { BLIND_SPOT_URL } from "@/lib/constants";

export default function AboutMeSection() {
  return (
    <section
      id="about-me"
      className="py-24"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <span style={{ display: "block", width: "40px", height: "2px", backgroundColor: "var(--gold)" }} />
          <p className="font-display text-xs tracking-[0.3em] uppercase text-center" style={{ color: "var(--dark-grey)" }}>
            About Me
          </p>
          <span style={{ display: "block", width: "40px", height: "2px", backgroundColor: "var(--gold)" }} />
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16 mt-10">

          {/* Round photo */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <div
              className="relative overflow-hidden"
              style={{
                width: "clamp(200px, 28vw, 320px)",
                height: "clamp(200px, 28vw, 320px)",
                borderRadius: "50%",
                border: "4px solid var(--pink)",
              }}
            >
              <Image
                src="/images/kye-about.jpg"
                alt="Kye Simmons"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1">
            <h2
              className="font-display font-black uppercase mb-6"
              style={{ color: "var(--pink)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              I&apos;m Kye
            </h2>

            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--dark-grey)" }}>
              <p>
                After years inside high-performance environments — from elite sport to business — I noticed a pattern.
                Brilliant, capable founders doing everything &ldquo;right&rdquo;&hellip; and still plateauing.
              </p>
              <p>
                Not because they lacked effort. But because they had reached the edge of their identity.
              </p>
              <p style={{ fontStyle: "italic", color: "var(--mid-grey)" }}>
                I&apos;ve stood there myself.
              </p>
              <p>
                Revenue ceilings are rarely structural. They are perceptual. You don&apos;t stall because you need another tactic.
                You stall because your self-concept hasn&apos;t caught up with your ambition. I work with purpose-driven leaders
                to recalibrate the identity driving their visibility, pricing, and leadership — so growth becomes stabilised,
                not sporadic.
              </p>
              <p className="font-semibold" style={{ color: "var(--dark-grey)" }}>
                Scaling isn&apos;t about doing more. It&apos;s about embodying authority.
              </p>
              <p className="font-semibold" style={{ color: "var(--pink)" }}>
                When identity expands, strategy finally works.
              </p>
              <p>
                If you&apos;re ready to identify the invisible friction shaping your business, begin with the Blind Spot Audit.
                It&apos;s a free tool designed to uncover the business gaps between where you are and where you&apos;re fully
                capable of operating.
              </p>
            </div>

            <Link
              href={BLIND_SPOT_URL}
              className="inline-block mt-8 font-display text-sm tracking-widest uppercase font-black px-8 py-4 transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--pink)", color: "#fff" }}
            >
              Take the Free Blind Spot Audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
