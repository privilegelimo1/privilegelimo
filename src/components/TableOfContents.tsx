"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

interface Heading {
  id:    string;
  text:  string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings]     = useState<Heading[]>([]);
  const [activeId, setActiveId]     = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const article = document.getElementById("blog-article");
    if (!article) return;

    const els = Array.from(article.querySelectorAll("h2, h3")) as HTMLElement[];
    const parsed: Heading[] = els.map((el) => {
      if (!el.id) {
        el.id = el.textContent?.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "") ?? Math.random().toString(36).slice(2);
      }
      return { id: el.id, text: el.textContent ?? "", level: parseInt(el.tagName[1]) };
    });
    setHeadings(parsed);
  }, []);

  useEffect(() => {
    if (headings.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "0px 0px -60% 0px", threshold: 0.1 }
    );
    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  const TocList = () => (
    <ul className="space-y-1">
      {headings.map(({ id, text, level }) => (
        <li key={id}>
          <button
            onClick={() => scrollTo(id)}
            className={`w-full text-left text-xs leading-snug py-1 transition-colors ${
              level === 3 ? "pl-4" : "pl-0"
            } ${
              activeId === id
                ? "text-neutral-900 font-medium"
                : "text-neutral-400 hover:text-neutral-700"
            }`}
          >
            {text}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* ── Mobile TOC — accordion below featured image ── */}
      <div className="md:hidden w-full border border-neutral-100 rounded-2xl overflow-hidden">
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="w-full flex items-center justify-between px-5 py-4 bg-white text-left"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-medium">
            Table of Contents
          </span>
          <ChevronDown
            className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${
              mobileOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {mobileOpen && (
          <div className="px-5 pb-5 bg-white border-t border-neutral-100">
            <TocList />
          </div>
        )}
      </div>

      {/* ── Desktop TOC — sticky sidebar ── */}
      <div className="hidden md:block rounded-2xl border border-neutral-100 p-5 sticky top-24">
        <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-4">
          Table of Contents
        </p>
        <TocList />
      </div>
    </>
  );
}