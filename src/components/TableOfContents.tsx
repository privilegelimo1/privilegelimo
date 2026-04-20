"use client";

import { useEffect, useState } from "react";

type Heading = {
  id: string;
  text: string;
  level: number;
};

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const article = document.getElementById("blog-article");
    if (!article) return;

    const nodes = Array.from(article.querySelectorAll("h2, h3"));
    const items: Heading[] = nodes.map((el) => {
      // Auto-generate id if missing
      if (!el.id) {
        el.id = el.textContent
          ?.toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "") ?? "";
      }
      return {
        id: el.id,
        text: el.textContent ?? "",
        level: Number(el.tagName[1]),
      };
    });

    setHeadings(items);
  }, []);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "0% 0% -70% 0%", threshold: 0 }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <div className="rounded-2xl border border-[#efefef] p-6">
      <p className="text-[10px] uppercase tracking-[0.35em] text-[#AB5461] mb-5 font-light">
        Contents
      </p>
      <nav>
        <ul className="space-y-2">
          {headings.map((h) => (
            <li key={h.id} style={{ paddingLeft: h.level === 3 ? "0.75rem" : "0" }}>
              <a
                href={`#${h.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth" });
                  setActiveId(h.id);
                }}
                className={`block text-[12px] leading-snug transition-colors duration-200 font-light py-0.5 ${
                  activeId === h.id
                    ? "text-[#AB5461] font-medium"
                    : "text-[#9a9a9a] hover:text-[#0a0a0a]"
                }`}
              >
                {h.level === 3 && (
                  <span className="inline-block w-3 h-px bg-current mr-1.5 mb-0.5 opacity-40" />
                )}
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}