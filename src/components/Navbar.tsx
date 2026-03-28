"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const services = [
  {
    label: "Luxury Chauffeur Service",
    href: "/services/luxury-chauffeur-service-in-dubai",
    desc: "Premium chauffeur driven cars",
  },
  {
    label: "Bus & Van Rental",
    href: "/services/bus-and-van-rental-in-dubai",
    desc: "Dubai, Sharjah & Abu Dhabi",
  },
  {
    label: "Mercedes Sprinter Van Rental",
    href: "/services/mercedes-sprinter-van-rental",
    desc: "Hourly & full-day hire",
  },
  {
    label: "Mercedes Van Rental",
    href: "/services/mercedes-van-rental-dubai",
    desc: "Stretch limos & luxury rides",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Fleet", href: "/fleet" },
  { label: "Why Us", href: "/why-us" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLLIElement>(null);

  const isHome = pathname === "/";
  const solid = !isHome || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isServiceActive = services.some((s) => pathname === s.href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-white/95 backdrop-blur-xl border-b border-black/5 py-4"
          : "bg-transparent py-7"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* ── LOGO ──────────────────────────────────────────────── */}
        <Link href="/" className="flex items-center gap-1 shrink-0">
          <span className="text-lg font-light tracking-[0.25em] uppercase text-[#0a0a0a]">
            Privilege
          </span>
          <span className="text-lg font-semibold tracking-[0.25em] uppercase text-[#c9a84c]">
            Limo
          </span>
        </Link>

        {/* ── DESKTOP NAV ───────────────────────────────────────── */}
        <ul className="hidden md:flex items-center gap-8">

          {/* Home — first */}
          {navLinks.slice(0, 1).map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-[11px] tracking-widest uppercase transition-colors duration-300 relative group ${
                    active ? "text-[#c9a84c]" : "text-[#1a1a1a] hover:text-[#c9a84c]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-[#c9a84c] transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            );
          })}

          {/* Services Dropdown — after Home */}
          <li ref={dropdownRef} className="relative h-3.5">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`flex items-center gap-1.5 text-[11px] tracking-widest uppercase transition-colors duration-300 relative group ${
                isServiceActive ? "text-[#c9a84c]" : "text-[#1a1a1a] hover:text-[#c9a84c]"
              }`}
            >
              Services
              <svg
                className={`w-3 h-3 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
              <span
                className={`absolute -bottom-1 left-0 h-px bg-[#c9a84c] transition-all duration-300 ${
                  isServiceActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>

            {/* Dropdown Panel */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[480px] bg-white rounded-[1.5rem] border border-[#efefef] shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-4 transition-all duration-300 ${
                servicesOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              {/* Arrow */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-[#efefef] rotate-45" />

              <div className="grid grid-cols-2 gap-2">
                {services.map((s) => {
                  const active = pathname === s.href;
                  return (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setServicesOpen(false)}
                      className={`group flex flex-col gap-1 p-3 rounded-2xl transition-all duration-200 ${
                        active
                          ? "bg-[#fdf8ec] border border-[#e8d9a0]"
                          : "hover:bg-[#fafafa] border border-transparent hover:border-[#efefef]"
                      }`}
                    >
                      <div
                        className={`text-[11px] tracking-wide font-medium transition-colors ${
                          active ? "text-[#c9a84c]" : "text-[#0a0a0a] group-hover:text-[#c9a84c]"
                        }`}
                      >
                        {s.label}
                      </div>
                      <div className="text-[10px] text-[#9a9a9a] font-light">
                        {s.desc}
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Bottom CTA */}
              <div className="mt-3 pt-3 border-t border-[#f5f5f5] flex items-center justify-between px-1">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#b0b0b0] font-light">
                  Available 24/7 across UAE
                </span>
                <a
                  href="https://wa.me/971509200818"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setServicesOpen(false)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#25D366] text-white text-[9px] tracking-[0.25em] uppercase font-medium hover:bg-[#20bd5a] transition-colors"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Book Now
                </a>
              </div>
            </div>
          </li>

          {/* Fleet, Why Us, Testimonials, Contact */}
          {navLinks.slice(1).map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-[11px] tracking-widest uppercase transition-colors duration-300 relative group ${
                    active ? "text-[#c9a84c]" : "text-[#1a1a1a] hover:text-[#c9a84c]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-[#c9a84c] transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── CTA BUTTONS ───────────────────────────────────────── */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/971509200818"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase px-5 py-2.5 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all duration-300"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
          <Link
            href="/contact-us"
            className="text-[11px] tracking-[0.25em] uppercase px-6 py-2.5 rounded-full border border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
          >
            Book Now
          </Link>
        </div>

        {/* ── MOBILE HAMBURGER ──────────────────────────────────── */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className={`block h-px w-6 bg-[#0a0a0a] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block h-px w-6 bg-[#0a0a0a] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-[#0a0a0a] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      {/* ── MOBILE MENU ───────────────────────────────────────────── */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl mx-4 mt-2 rounded-2xl p-6 border border-black/5 shadow-2xl">
          <ul className="flex flex-col gap-4">

            {/* Home — first */}
            {navLinks.slice(0, 1).map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-[11px] tracking-widest uppercase transition-colors ${
                      active ? "text-[#c9a84c]" : "text-[#1a1a1a] hover:text-[#c9a84c]"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}

            {/* Mobile Services accordion — after Home */}
            <li>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between text-[11px] tracking-widest uppercase text-[#1a1a1a] hover:text-[#c9a84c] transition-colors"
              >
                Services
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  mobileServicesOpen ? "max-h-[400px] opacity-100 mt-3" : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-col gap-1 pl-2">
                  {services.map((s) => {
                    const active = pathname === s.href;
                    return (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setMenuOpen(false)}
                        className={`flex flex-col gap-0.5 px-3 py-2.5 rounded-xl transition-colors ${
                          active ? "bg-[#fdf8ec] text-[#c9a84c]" : "hover:bg-[#fafafa] text-[#4a4a4a]"
                        }`}
                      >
                        <div className="text-[11px] tracking-wide font-medium">{s.label}</div>
                        <div className="text-[9px] text-[#9a9a9a] font-light">{s.desc}</div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </li>

            {/* Fleet, Why Us, Testimonials, Contact */}
            {navLinks.slice(1).map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-[11px] tracking-widest uppercase transition-colors ${
                      active ? "text-[#c9a84c]" : "text-[#1a1a1a] hover:text-[#c9a84c]"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}

            {/* Mobile CTAs */}
            <li className="pt-3 border-t border-[#f0f0f0] flex flex-col gap-3">
              <a
                href="https://wa.me/971509200818"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 text-[11px] tracking-[0.25em] uppercase px-7 py-3 rounded-full bg-[#25D366] text-white"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <Link
                href="/contact-us"
                onClick={() => setMenuOpen(false)}
                className="block text-center text-[11px] tracking-[0.25em] uppercase px-7 py-3 rounded-full border border-[#0a0a0a] text-[#0a0a0a]"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
