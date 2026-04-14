// src/app/not-found.tsx

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── WA ICON ─────────────────────────────────────────────────────────────────

function WAIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── 404 PAGE ─────────────────────────────────────────────────────────────────

export default function NotFound() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navbar />

      {/* ── MAIN CONTENT ──────────────────────────────────────────── */}
      <section className="flex-1 flex items-center justify-center py-28 px-6">
        <div className="max-w-2xl w-full">

          {/* ── BREADCRUMB STYLE LABEL ── */}
          <div className="flex items-center gap-2 mb-12">
            <Link
              href="/"
              className="text-[10px] tracking-[0.3em] uppercase text-[#b0b0b0] font-light hover:text-[#AB5461] transition-colors"
            >
              Home
            </Link>
            <span className="text-[#ddd]">/</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#AB5461] font-light">
              Page Not Found
            </span>
          </div>

          {/* ── 404 NUMBER ── */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-8 bg-[#AB5461]" />
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#AB5461] font-light">
              Error 404
            </span>
          </div>

          {/* ── HEADING ── */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-light text-[#0a0a0a] tracking-tight leading-[1.1] mb-6">
            Page Not Found
            <br />
            <span className="text-[#AB5461] italic font-extralight">
              but we can still help you
            </span>
          </h1>

          {/* ── DESCRIPTION ── */}
          <p className="text-sm leading-[1.9] text-[#7a7a7a] font-light max-w-lg mb-10">
            The page you are looking for may have been moved, renamed or is no longer available. Let us take you back to where you need to be — our team is always available to assist you directly.
          </p>

          {/* ── CTA BUTTONS ── */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#0a0a0a] px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium text-white hover:bg-[#AB5461] transition-colors duration-300"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back to Homepage
            </Link>
            <a
              href="https://wa.me/971509852818"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium text-white hover:bg-[#20bd5a] transition-colors"
            >
              <WAIcon />
              Contact Us
            </a>
            <a
              href="tel:+971509852818"
              className="inline-flex items-center gap-2 rounded-full border border-[#e5e5e5] px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium text-[#0a0a0a] hover:border-[#AB5461] hover:text-[#AB5461] transition-colors"
            >
              +971 50 985 2818
            </a>
          </div>

          {/* ── QUICK LINKS ── */}
          <div className="border-t border-[#efefef] pt-8">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
              You might be looking for
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Chauffeur Service", href: "/luxury-chauffeur-service-in-dubai" },
                { label: "Airport Transfer", href: "/airport-transfer-dubai" },
                { label: "Monthly Rental", href: "/services/monthly-car-rental-with-driver" },
                { label: "Sightseeing Tour", href: "/services/private-driver-for-sightseeing-dubai" },
                { label: "Our Fleet", href: "/fleet" },
                { label: "Services", href: "/services" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full bg-[#f9f4f5] border border-[#f0e8ea] px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase font-light text-[#AB5461] hover:bg-[#AB5461] hover:text-white transition-all duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}