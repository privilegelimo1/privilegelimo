"use client";

import { useState } from "react";

const CATEGORIES = [
  "Airport Transfers",
  "Luxury Travel",
  "Corporate Travel",
  "Wedding Transport",
  "Dubai Guide",
  "Fleet & Vehicles",
  "Travel Tips",
  "UAE News",
];

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_CMS_PASSWORD || "privilege2024";

function slugify(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function buildMDX(fields: Record<string, string | boolean | string[]>) {
  const fm = [
    `---`,
    `title: "${fields.title}"`,
    `description: "${fields.description}"`,
    `date: "${fields.date}"`,
    `author: "${fields.author}"`,
    `category: "${fields.category}"`,
    `tags: [${(fields.tags as string[]).map((t) => `"${t.trim()}"`).join(", ")}]`,
    `image: "${fields.image}"`,
    `imageAlt: "${fields.imageAlt}"`,
    `published: ${fields.published}`,
    ``,
    `# SEO`,
    `seoTitle: "${fields.seoTitle}"`,
    `seoDescription: "${fields.seoDescription}"`,
    `canonicalUrl: "${fields.canonicalUrl}"`,
    `ogImage: "${fields.ogImage || fields.image}"`,
    `noIndex: ${fields.noIndex}`,
    `focusKeyword: "${fields.focusKeyword}"`,
    `keywords: [${(fields.keywords as string[]).map((k) => `"${k.trim()}"`).join(", ")}]`,
    `---`,
    ``,
    fields.content as string,
  ].join("\n");
  return fm;
}

export default function AdminBlogCMS() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [pwError, setPwError] = useState(false);

  // Form fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [author, setAuthor] = useState("Privilege Limo");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [tagsRaw, setTagsRaw] = useState("");
  const [image, setImage] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [published, setPublished] = useState(true);
  const [content, setContent] = useState("");

  // SEO fields
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [focusKeyword, setFocusKeyword] = useState("");
  const [keywordsRaw, setKeywordsRaw] = useState("");
  const [noIndex, setNoIndex] = useState(false);
  const [customSlug, setCustomSlug] = useState("");

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const slug = customSlug || slugify(title);
  const canonicalUrl = `https://privilegelimo.com/blog/${slug}`;

  // SEO analysis
  const seoTitleLen = seoTitle.length;
  const seoDescLen = seoDescription.length;
  const seoTitleOk = seoTitleLen >= 40 && seoTitleLen <= 60;
  const seoDescOk = seoDescLen >= 120 && seoDescLen <= 160;
  const hasFocusKw = focusKeyword.length > 0;
  const kwInTitle = hasFocusKw && seoTitle.toLowerCase().includes(focusKeyword.toLowerCase());
  const kwInDesc = hasFocusKw && seoDescription.toLowerCase().includes(focusKeyword.toLowerCase());
  const kwInContent = hasFocusKw && content.toLowerCase().includes(focusKeyword.toLowerCase());

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (pw === ADMIN_PASSWORD) {
      setAuthed(true);
    } else {
      setPwError(true);
    }
  }

  async function handlePublish(e: React.FormEvent) {
    e.preventDefault();
    if (!title || !content || !slug) return;

    setStatus("loading");
    setErrorMsg("");

    const tags = tagsRaw.split(",").map((t) => t.trim()).filter(Boolean);
    const keywords = keywordsRaw.split(",").map((k) => k.trim()).filter(Boolean);

    const mdxContent = buildMDX({
      title, description, date, author, category,
      tags, image, imageAlt, published,
      seoTitle: seoTitle || title,
      seoDescription: seoDescription || description,
      canonicalUrl,
      ogImage: image,
      noIndex, focusKeyword, keywords,
      content,
    });

    try {
      const res = await fetch("/api/blog/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, content: mdxContent }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to publish");
      }

      setStatus("success");
      // Reset form
      setTitle(""); setDescription(""); setContent("");
      setTagsRaw(""); setImage(""); setImageAlt("");
      setSeoTitle(""); setSeoDescription(""); setFocusKeyword("");
      setKeywordsRaw(""); setCustomSlug(""); setNoIndex(false);
      setDate(new Date().toISOString().split("T")[0]);
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Unknown error");
    }
  }

  const inputClass = "w-full px-4 py-3 rounded-2xl border border-[#efefef] bg-white text-sm text-[#0a0a0a] font-light placeholder:text-[#c0c0c0] focus:outline-none focus:border-[#AB5461] transition-colors duration-200";
  const labelClass = "block text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] font-light mb-2";
  const sectionClass = "bg-white rounded-3xl border border-[#efefef] p-8 flex flex-col gap-5";

  // ── LOGIN ──
  if (!authed) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-6">
        <form onSubmit={handleLogin} className="w-full max-w-sm bg-white rounded-3xl border border-[#efefef] p-10 shadow-[0_4px_30px_rgba(0,0,0,0.06)] flex flex-col gap-5">
          <div>
            <p className="text-[10px] tracking-[0.45em] uppercase text-[#AB5461] mb-3">Privilege Limo</p>
            <h1 className="text-2xl font-light text-[#0a0a0a] tracking-tight">Blog CMS</h1>
            <p className="text-xs text-[#9a9a9a] font-light mt-1">Enter your admin password to continue.</p>
          </div>
          <div>
            <label className={labelClass}>Password</label>
            <input
              type="password"
              value={pw}
              onChange={(e) => { setPw(e.target.value); setPwError(false); }}
              className={`${inputClass} ${pwError ? "border-red-300" : ""}`}
              placeholder="••••••••"
              autoFocus
            />
            {pwError && <p className="text-xs text-red-400 mt-2 font-light">Incorrect password.</p>}
          </div>
          <button type="submit" className="w-full py-3.5 rounded-full bg-[#0a0a0a] text-white text-[11px] tracking-[0.25em] uppercase font-medium hover:bg-[#AB5461] transition-colors">
            Sign In
          </button>
        </form>
      </div>
    );
  }

  // ── CMS ──
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <div className="border-b border-[#efefef] bg-white px-6 py-5 flex items-center justify-between">
        <div>
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#AB5461] font-light">Privilege Limo</p>
          <h1 className="text-lg font-light text-[#0a0a0a] tracking-tight">Blog CMS</h1>
        </div>
        <a href="/blog" target="_blank" className="text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] hover:text-[#AB5461] transition-colors">
          View Blog
        </a>
      </div>

      <form onSubmit={handlePublish} className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-8">

        {/* Post Details */}
        <div className={sectionClass}>
          <h2 className="text-[10px] tracking-[0.4em] uppercase text-[#b0b0b0] font-light">Post Details</h2>

          <div>
            <label className={labelClass}>Title *</label>
            <input required type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Best Airport Transfer Tips in Dubai" className={inputClass} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Slug (auto-generated)</label>
              <input type="text" value={slug} onChange={(e) => setCustomSlug(slugify(e.target.value))} placeholder={slugify(title) || "post-slug"} className={inputClass} />
              <p className="text-[9px] text-[#b0b0b0] mt-1.5 font-light">/blog/{slug || "..."}</p>
            </div>
            <div>
              <label className={labelClass}>Category *</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className={`${inputClass} appearance-none cursor-pointer`}>
                {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className={labelClass}>Excerpt / Description *</label>
            <textarea required rows={3} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Short description shown on the blog listing page and in search results..." className={`${inputClass} resize-none`} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Date *</label>
              <input required type="date" value={date} onChange={(e) => setDate(e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Author</label>
              <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className={inputClass} />
            </div>
          </div>

          <div>
            <label className={labelClass}>Tags (comma separated)</label>
            <input type="text" value={tagsRaw} onChange={(e) => setTagsRaw(e.target.value)} placeholder="dubai, airport transfer, luxury car" className={inputClass} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Featured Image URL</label>
              <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="/images/blog/post-image.jpg" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Image Alt Text</label>
              <input type="text" value={imageAlt} onChange={(e) => setImageAlt(e.target.value)} placeholder="Descriptive alt text for the image" className={inputClass} />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setPublished(!published)}
              className={`w-10 h-6 rounded-full transition-colors duration-200 relative ${published ? "bg-[#AB5461]" : "bg-[#e5e5e5]"}`}
            >
              <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${published ? "translate-x-5" : "translate-x-1"}`} />
            </button>
            <span className="text-sm text-[#0a0a0a] font-light">{published ? "Published" : "Draft"}</span>
          </div>
        </div>

        {/* SEO */}
        <div className={sectionClass}>
          <div className="flex items-center justify-between">
            <h2 className="text-[10px] tracking-[0.4em] uppercase text-[#b0b0b0] font-light">SEO Settings</h2>
            {/* SEO Score */}
            <div className="flex items-center gap-2">
              {[
                seoTitleOk, seoDescOk, hasFocusKw,
                kwInTitle, kwInDesc, kwInContent
              ].filter(Boolean).length >= 5 ? (
                <span className="text-[9px] tracking-[0.3em] uppercase text-green-500 bg-green-50 px-3 py-1 rounded-full">Good SEO</span>
              ) : (
                <span className="text-[9px] tracking-[0.3em] uppercase text-[#AB5461] bg-[#AB5461]/5 px-3 py-1 rounded-full">Needs Work</span>
              )}
            </div>
          </div>

          <div>
            <label className={labelClass}>
              Focus Keyword
              <span className={`ml-2 text-[9px] normal-case tracking-normal font-normal ${hasFocusKw ? "text-green-500" : "text-[#b0b0b0]"}`}>
                {hasFocusKw ? "Set" : "Not set"}
              </span>
            </label>
            <input type="text" value={focusKeyword} onChange={(e) => setFocusKeyword(e.target.value)} placeholder="e.g. luxury chauffeur dubai" className={inputClass} />
          </div>

          <div>
            <label className={labelClass}>
              SEO Title
              <span className={`ml-2 text-[9px] normal-case tracking-normal font-normal ${seoTitleOk ? "text-green-500" : seoTitleLen > 0 ? "text-orange-400" : "text-[#b0b0b0]"}`}>
                {seoTitleLen}/60 {seoTitleOk ? "✓" : seoTitleLen < 40 ? "too short" : "too long"}
              </span>
            </label>
            <input
              type="text"
              value={seoTitle}
              onChange={(e) => setSeoTitle(e.target.value)}
              placeholder={title || "SEO optimized title (40–60 chars)"}
              className={inputClass}
            />
            {hasFocusKw && (
              <p className={`text-[9px] mt-1.5 font-light ${kwInTitle ? "text-green-500" : "text-orange-400"}`}>
                {kwInTitle ? "✓ Focus keyword found in SEO title" : "✗ Add focus keyword to SEO title"}
              </p>
            )}
          </div>

          <div>
            <label className={labelClass}>
              Meta Description
              <span className={`ml-2 text-[9px] normal-case tracking-normal font-normal ${seoDescOk ? "text-green-500" : seoDescLen > 0 ? "text-orange-400" : "text-[#b0b0b0]"}`}>
                {seoDescLen}/160 {seoDescOk ? "✓" : seoDescLen < 120 ? "too short" : "too long"}
              </span>
            </label>
            <textarea
              rows={3}
              value={seoDescription}
              onChange={(e) => setSeoDescription(e.target.value)}
              placeholder={description || "Meta description (120–160 chars)"}
              className={`${inputClass} resize-none`}
            />
            {hasFocusKw && (
              <p className={`text-[9px] mt-1.5 font-light ${kwInDesc ? "text-green-500" : "text-orange-400"}`}>
                {kwInDesc ? "✓ Focus keyword found in meta description" : "✗ Add focus keyword to meta description"}
              </p>
            )}
          </div>

          <div>
            <label className={labelClass}>Keywords (comma separated)</label>
            <input type="text" value={keywordsRaw} onChange={(e) => setKeywordsRaw(e.target.value)} placeholder="luxury chauffeur dubai, airport transfer dubai, ..." className={inputClass} />
          </div>

          <div>
            <label className={labelClass}>Canonical URL</label>
            <input type="text" value={canonicalUrl} readOnly className={`${inputClass} bg-[#fafafa] text-[#9a9a9a] cursor-default`} />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setNoIndex(!noIndex)}
              className={`w-10 h-6 rounded-full transition-colors duration-200 relative ${noIndex ? "bg-[#AB5461]" : "bg-[#e5e5e5]"}`}
            >
              <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${noIndex ? "translate-x-5" : "translate-x-1"}`} />
            </button>
            <span className="text-sm text-[#0a0a0a] font-light">
              No Index{" "}
              <span className="text-[#b0b0b0] text-xs">(hides from search engines)</span>
            </span>
          </div>

          {/* SEO Checklist */}
          <div className="pt-4 border-t border-[#f5f5f5]">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#b0b0b0] font-light mb-4">SEO Checklist</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "SEO title 40–60 chars", ok: seoTitleOk },
                { label: "Meta description 120–160 chars", ok: seoDescOk },
                { label: "Focus keyword set", ok: hasFocusKw },
                { label: "Keyword in SEO title", ok: kwInTitle },
                { label: "Keyword in meta description", ok: kwInDesc },
                { label: "Keyword in content", ok: kwInContent },
                { label: "Featured image set", ok: image.length > 0 },
                { label: "Image alt text set", ok: imageAlt.length > 0 },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className={`text-xs ${item.ok ? "text-green-500" : "text-[#d0d0d0]"}`}>
                    {item.ok ? "✓" : "○"}
                  </span>
                  <span className={`text-xs font-light ${item.ok ? "text-[#5a5a5a]" : "text-[#b0b0b0]"}`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={sectionClass}>
          <div className="flex items-center justify-between">
            <h2 className="text-[10px] tracking-[0.4em] uppercase text-[#b0b0b0] font-light">Content (MDX) *</h2>
            {hasFocusKw && (
              <span className={`text-[9px] font-light ${kwInContent ? "text-green-500" : "text-orange-400"}`}>
                {kwInContent ? `✓ "${focusKeyword}" found in content` : `✗ "${focusKeyword}" not found in content`}
              </span>
            )}
          </div>
          <textarea
            required
            rows={20}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={`## Introduction\n\nStart writing your blog post here using Markdown...\n\n## Section Heading\n\nParagraph text goes here.\n\n- Bullet point one\n- Bullet point two\n\n## Conclusion`}
            className={`${inputClass} resize-y font-mono text-xs leading-relaxed`}
          />
          <p className="text-[9px] text-[#b0b0b0] font-light -mt-2">
            Supports full MDX — Markdown headings, lists, bold, italic, links, images, and React components.
          </p>
        </div>

        {/* Submit */}
        <div className="flex flex-col gap-3">
          {status === "success" && (
            <div className="p-5 rounded-2xl bg-green-50 border border-green-100 text-center">
              <p className="text-sm text-green-600 font-light">
                Post published successfully. Vercel is deploying now — live in ~30 seconds.
              </p>
              <a href="/blog" target="_blank" className="text-[10px] tracking-[0.3em] uppercase text-green-500 hover:underline mt-2 block">
                View Blog
              </a>
            </div>
          )}

          {status === "error" && (
            <div className="p-5 rounded-2xl bg-red-50 border border-red-100">
              <p className="text-sm text-red-500 font-light">{errorMsg}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading" || !title || !content}
            className="w-full py-4 rounded-full bg-[#0a0a0a] text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#AB5461] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Publishing to GitHub..." : published ? "Publish Post" : "Save as Draft"}
          </button>
        </div>

      </form>
    </div>
  );
}