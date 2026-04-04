"use client";

import { useState } from "react";

type FormState = {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  tags: string;
  featuredImage: string;
  featuredImageAlt: string;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  keywords: string;
  ogImage: string;
  index: boolean;
  draft: boolean;
  content: string;
};

const initialState: FormState = {
  title: "",
  slug: "",
  excerpt: "",
  date: new Date().toISOString().split("T")[0],
  author: "",
  category: "",
  tags: "",
  featuredImage: "",
  featuredImageAlt: "",
  metaTitle: "",
  metaDescription: "",
  canonical: "",
  keywords: "",
  ogImage: "",
  index: true,
  draft: true,
  content: "",
};

export default function AdminBlogCMS() {
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function generateSlug(value: string) {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const payload = {
      ...form,
      slug: form.slug || generateSlug(form.title),
      tags: form.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
    };

    const res = await fetch("/api/blog/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setMessage(data.error || "Something went wrong");
      return;
    }

    setMessage("Blog saved to GitHub successfully.");
  }

  return (
    <section className="cms-shell">
      <div className="cms-head">
        <p className="eyebrow">Admin</p>
        <h1>Blog CMS</h1>
        <p className="subtext">Write, optimize, and publish MDX blog posts.</p>
      </div>

      <form className="cms-form" onSubmit={handleSubmit}>
        <div className="grid-two">
          <input
            placeholder="Title"
            value={form.title}
            onChange={(e) => updateField("title", e.target.value)}
          />
          <input
            placeholder="Slug"
            value={form.slug}
            onChange={(e) => updateField("slug", e.target.value)}
          />
        </div>

        <textarea
          placeholder="Excerpt"
          value={form.excerpt}
          onChange={(e) => updateField("excerpt", e.target.value)}
          rows={3}
        />

        <div className="grid-two">
          <input
            type="date"
            value={form.date}
            onChange={(e) => updateField("date", e.target.value)}
          />
          <input
            placeholder="Author"
            value={form.author}
            onChange={(e) => updateField("author", e.target.value)}
          />
        </div>

        <div className="grid-two">
          <input
            placeholder="Category"
            value={form.category}
            onChange={(e) => updateField("category", e.target.value)}
          />
          <input
            placeholder="Tags (comma separated)"
            value={form.tags}
            onChange={(e) => updateField("tags", e.target.value)}
          />
        </div>

        <div className="grid-two">
          <input
            placeholder="Featured image URL"
            value={form.featuredImage}
            onChange={(e) => updateField("featuredImage", e.target.value)}
          />
          <input
            placeholder="Featured image alt"
            value={form.featuredImageAlt}
            onChange={(e) => updateField("featuredImageAlt", e.target.value)}
          />
        </div>

        <div className="grid-two">
          <input
            placeholder="Meta title"
            value={form.metaTitle}
            onChange={(e) => updateField("metaTitle", e.target.value)}
          />
          <input
            placeholder="Canonical URL"
            value={form.canonical}
            onChange={(e) => updateField("canonical", e.target.value)}
          />
        </div>

        <textarea
          placeholder="Meta description"
          value={form.metaDescription}
          onChange={(e) => updateField("metaDescription", e.target.value)}
          rows={3}
        />

        <div className="grid-two">
          <input
            placeholder="Keywords"
            value={form.keywords}
            onChange={(e) => updateField("keywords", e.target.value)}
          />
          <input
            placeholder="OG image URL"
            value={form.ogImage}
            onChange={(e) => updateField("ogImage", e.target.value)}
          />
        </div>

        <div className="checkbox-row">
          <label>
            <input
              type="checkbox"
              checked={form.index}
              onChange={(e) => updateField("index", e.target.checked)}
            />
            Index this post
          </label>

          <label>
            <input
              type="checkbox"
              checked={form.draft}
              onChange={(e) => updateField("draft", e.target.checked)}
            />
            Save as draft
          </label>
        </div>

        <textarea
          placeholder="Write MDX content here..."
          value={form.content}
          onChange={(e) => updateField("content", e.target.value)}
          rows={18}
        />

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Publishing..." : "Publish to GitHub"}
        </button>

        {message ? <p className="cms-message">{message}</p> : null}
      </form>
    </section>
  );
}