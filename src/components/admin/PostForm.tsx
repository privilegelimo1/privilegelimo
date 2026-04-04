"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RichEditor from "./RichEditor";

interface PostData {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  tags: string;
  author: string;
  coverImage: string;
  content: string;
}

interface PostFormProps {
  initial?: Partial<PostData>;
  mode: "new" | "edit";
}

function slugify(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function PostForm({ initial, mode }: PostFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [form, setForm] = useState<PostData>({
    title: initial?.title || "",
    slug: initial?.slug || "",
    date: initial?.date || new Date().toISOString().slice(0, 10),
    excerpt: initial?.excerpt || "",
    tags: initial?.tags || "",
    author: initial?.author || "Privilege Limo Team",
    coverImage: initial?.coverImage || "",
    content: initial?.content || "",
  });

  function set(field: keyof PostData, value: string) {
    setForm((f) => {
      const updated = { ...f, [field]: value };
      // Auto-generate slug from title in new mode
      if (field === "title" && mode === "new") {
        updated.slug = slugify(value);
      }
      return updated;
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");
    setSuccess("");

    if (!form.title || !form.slug || !form.content) {
      setError("Title, slug, and content are required.");
      setSaving(false);
      return;
    }

    const endpoint =
      mode === "new"
        ? "/api/admin/posts"
        : `/api/admin/post/${initial?.slug}`;

    const method = mode === "new" ? "POST" : "PUT";

    const res = await fetch(endpoint, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSuccess(mode === "new" ? "Post published!" : "Post updated!");
      setTimeout(() => router.push("/admin/dashboard"), 1200);
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Something went wrong. Check your GitHub token.");
    }
    setSaving(false);
  }

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm " +
    "placeholder-white/20 focus:outline-none focus:border-[#AB5461]/50 transition-all duration-300";

  const labelClass = "block text-xs tracking-widest uppercase text-white/40 mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Row 1: Title */}
      <div>
        <label className={labelClass}>Post Title *</label>
        <input
          type="text"
          value={form.title}
          onChange={(e) => set("title", e.target.value)}
          placeholder="e.g. Top 5 Luxury Cars for Dubai Airport Transfers"
          className={inputClass}
          required
        />
      </div>

      {/* Row 2: Slug + Date */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>URL Slug *</label>
          <input
            type="text"
            value={form.slug}
            onChange={(e) => set("slug", slugify(e.target.value))}
            placeholder="auto-generated-from-title"
            className={inputClass}
            required
            readOnly={mode === "edit"}
          />
          <p className="text-white/20 text-xs mt-1">/blog/{form.slug || "your-post-slug"}</p>
        </div>
        <div>
          <label className={labelClass}>Publish Date *</label>
          <input
            type="date"
            value={form.date}
            onChange={(e) => set("date", e.target.value)}
            className={inputClass}
            required
          />
        </div>
      </div>

      {/* Row 3: Excerpt */}
      <div>
        <label className={labelClass}>Excerpt (shown on blog listing)</label>
        <textarea
          value={form.excerpt}
          onChange={(e) => set("excerpt", e.target.value)}
          placeholder="A short description of the post — 1-2 sentences."
          className={inputClass + " resize-none"}
          rows={2}
        />
      </div>

      {/* Row 4: Tags + Author + Cover Image */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className={labelClass}>Tags (comma separated)</label>
          <input
            type="text"
            value={form.tags}
            onChange={(e) => set("tags", e.target.value)}
            placeholder="Dubai, luxury, chauffeur"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Author</label>
          <input
            type="text"
            value={form.author}
            onChange={(e) => set("author", e.target.value)}
            placeholder="Privilege Limo Team"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Cover Image Path</label>
          <input
            type="text"
            value={form.coverImage}
            onChange={(e) => set("coverImage", e.target.value)}
            placeholder="/images/blog/cover.webp"
            className={inputClass}
          />
        </div>
      </div>

      {/* Content Editor */}
      <div>
        <label className={labelClass}>Content *</label>
        <div
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          <RichEditor
            value={form.content}
            onChange={(v) => set("content", v)}
            placeholder="Write your blog post here…"
          />
        </div>
      </div>

      {/* Status */}
      {error && (
        <div className="text-red-400/80 text-xs tracking-wide bg-red-400/5 border border-red-400/10 rounded-xl px-4 py-3">
          ⚠ {error}
        </div>
      )}
      {success && (
        <div className="text-green-400/80 text-xs tracking-wide bg-green-400/5 border border-green-400/10 rounded-xl px-4 py-3">
          ✓ {success}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="px-8 py-3 rounded-xl text-sm tracking-widest uppercase transition-all duration-200 disabled:opacity-50"
          style={{
            background: saving ? "rgba(171,84,97,0.3)" : "rgba(171,84,97,0.9)",
            border: "1px solid rgba(171,84,97,0.5)",
            color: "white",
          }}
        >
          {saving
            ? "Publishing…"
            : mode === "new"
            ? "Publish Post"
            : "Save Changes"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/dashboard")}
          className="px-6 py-3 rounded-xl text-sm text-white/30 hover:text-white/60 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
