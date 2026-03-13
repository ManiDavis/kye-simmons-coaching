"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;
      setIsDark(window.scrollY >= hero.offsetTop + hero.offsetHeight - 64);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        backgroundColor: isDark ? "var(--black)" : "var(--cream)",
        borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)",
        transition: "background-color 0.35s ease, border-color 0.35s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-[3px] no-underline">
          <span
            className="font-display text-xl tracking-widest font-normal"
            style={{
              color: isDark ? "var(--black)" : "var(--cream)",
              backgroundColor: isDark ? "var(--cream)" : "var(--black)",
              padding: "2px 6px",
              transition: "color 0.35s ease, background-color 0.35s ease",
            }}
          >
            KYE
          </span>
          <span
            className="font-display text-xl tracking-widest font-black uppercase"
            style={{
              color: isDark ? "#fff" : "var(--black)",
              transition: "color 0.35s ease",
            }}
          >
            SIMMONS
          </span>
        </Link>

        {/* Nav links + CTA */}
        <div className="flex items-center gap-8">
          <Link
            href="#about"
            className="font-display text-sm tracking-widest uppercase font-semibold hover:opacity-60"
            style={{
              color: isDark ? "rgba(255,255,255,0.85)" : "var(--black)",
              transition: "color 0.35s ease",
            }}
          >
            About
          </Link>
          <Link
            href="#services"
            className="font-display text-sm tracking-widest uppercase font-semibold hover:opacity-60"
            style={{
              color: isDark ? "rgba(255,255,255,0.85)" : "var(--black)",
              transition: "color 0.35s ease",
            }}
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
