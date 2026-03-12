"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{ backgroundColor: "var(--cream)" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-black/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-[3px] no-underline">
          <span
            className="font-display text-xl tracking-widest font-normal"
            style={{ color: "var(--cream)", backgroundColor: "var(--black)", padding: "2px 6px" }}
          >
            KYE
          </span>
          <span
            className="font-display text-xl tracking-widest font-black uppercase"
            style={{ color: "var(--black)" }}
          >
            SIMMONS
          </span>
        </Link>

        {/* Nav links + CTA */}
        <div className="flex items-center gap-8">
          <Link
            href="#about"
            className="font-display text-sm tracking-widest uppercase font-semibold transition-opacity hover:opacity-60"
            style={{ color: "var(--black)" }}
          >
            About
          </Link>
          <Link
            href="#services"
            className="font-display text-sm tracking-widest uppercase font-semibold transition-opacity hover:opacity-60"
            style={{ color: "var(--black)" }}
          >
            Work With Me
          </Link>
          <Link
            href="#audit"
            className="font-display text-sm tracking-widest uppercase font-black px-5 py-2 transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--pink)", color: "#fff" }}
          >
            Blind Spot Audit
          </Link>
        </div>
      </div>
    </nav>
  );
}
