"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Our Fleet", href: "/fleet" },
  { label: "Why Us", href: "/why-us" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/booking" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  // On non-home pages, always treat as "scrolled" (solid white)
  const solid = !isHome || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-white/90 backdrop-blur-xl border-b border-black/5 py-4"
          : "bg-transparent py-7"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span
            className={`text-lg font-light tracking-[0.25em] uppercase transition-colors duration-300 ${
              solid ? "text-[#0a0a0a]" : "text-white"
            }`}
          >
            Privilege{" "}
          </span>
          <span
            className={`text-lg font-semibold tracking-[0.25em] uppercase transition-colors duration-300 ${
              solid ? "text-[#0a0a0a]" : "text-white"
            }`}
          >
            Limo
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-[11px] tracking-widest uppercase transition-colors duration-300 ${
                  solid
                    ? "text-[#1a1a1a] hover:text-[#c9a84c]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Book Now */}
        <div className="hidden md:block">
          <a
            href="/#booking"
            className={`text-[11px] tracking-[0.25em] uppercase px-7 py-3 rounded-full border transition-all duration-300 ${
              solid
                ? "border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white"
                : "border-white/50 text-white hover:border-white hover:bg-white/10"
            }`}
          >
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {[
            menuOpen ? "rotate-45 translate-y-[7px]" : "",
            menuOpen ? "opacity-0" : "",
            menuOpen ? "-rotate-45 -translate-y-[7px]" : "",
          ].map((extra, i) => (
            <span
              key={i}
              className={`block h-px w-6 transition-all duration-300 ${
                solid ? "bg-[#0a0a0a]" : "bg-white"
              } ${extra}`}
            />
          ))}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl mx-4 mt-2 rounded-2xl p-6 border border-black/5 shadow-2xl">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[11px] tracking-widest uppercase text-[#1a1a1a] hover:text-[#c9a84c] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/#booking"
                onClick={() => setMenuOpen(false)}
                className="block text-center text-[11px] tracking-[0.25em] uppercase px-7 py-3 rounded-full bg-[#0a0a0a] text-white"
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
