"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const darkSections = ["about", "services", "audit"];
    const handleScroll = () => {
      const inDark = darkSections.some((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 80 && rect.bottom > 80;
      });
      setIsDark(inDark);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
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

          {/* Desktop Nav links + CTA */}
          <div className="hidden md:flex items-center gap-8">
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

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] focus:outline-none"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className="block w-6 h-[2px] transition-all duration-300 origin-center"
              style={{
                backgroundColor: isDark ? "#fff" : "var(--black)",
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block w-6 h-[2px] transition-all duration-300"
              style={{
                backgroundColor: isDark ? "#fff" : "var(--black)",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-[2px] transition-all duration-300 origin-center"
              style={{
                backgroundColor: isDark ? "#fff" : "var(--black)",
                transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      <div
        className="md:hidden fixed inset-0 z-40 transition-opacity duration-300"
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        onClick={closeMenu}
      />

      {/* Mobile drawer panel */}
      <div
        className="md:hidden fixed top-0 right-0 z-40 h-full flex flex-col"
        style={{
          width: "280px",
          backgroundColor: "var(--black)",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
          borderLeft: "1px solid rgba(201,168,76,0.2)",
        }}
      >
        {/* Drawer header */}
        <div
          className="h-16 flex items-center px-6"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span
            className="font-display text-xs tracking-[0.25em] uppercase"
            style={{ color: "var(--gold)" }}
          >
            Menu
          </span>
        </div>

        {/* Drawer links */}
        <nav className="flex flex-col flex-1 px-6 py-10 gap-1">
          <Link
            href="#about"
            onClick={closeMenu}
            className="font-display text-2xl tracking-widest uppercase font-black py-4 border-b hover:opacity-60 transition-opacity"
            style={{
              color: "#fff",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            About
          </Link>
          <Link
            href="#services"
            onClick={closeMenu}
            className="font-display text-2xl tracking-widest uppercase font-black py-4 border-b hover:opacity-60 transition-opacity"
            style={{
              color: "#fff",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            Work With Me
          </Link>
          <Link
            href="#audit"
            onClick={closeMenu}
            className="font-display text-2xl tracking-widest uppercase font-black py-4 border-b hover:opacity-60 transition-opacity"
            style={{
              color: "var(--gold)",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            Blind Spot Audit
          </Link>

          {/* CTA button at bottom of drawer */}
          <div className="mt-auto pt-10">
            <Link
              href="#audit"
              onClick={closeMenu}
              className="font-display text-sm tracking-widest uppercase font-black px-6 py-4 block text-center transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--pink)", color: "#fff" }}
            >
              Blind Spot Audit →
            </Link>
            <p
              className="font-display text-xs tracking-widest uppercase text-center mt-4"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Identity + Expansion Strategy
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}
