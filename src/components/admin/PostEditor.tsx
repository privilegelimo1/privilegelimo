"use client";

import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Loader2, Save, Eye, ArrowLeft, Plus, Trash2,
  Image as ImageIcon, Link2, AlignLeft, AlignCenter, AlignRight,
} from "lucide-react";
import { Undo2, Redo2 } from "lucide-react"; 
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import TiptapImage from "@tiptap/extension-image";
import TiptapLink from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { marked } from "marked";
import slugifyLib from "slugify";

type FAQ = { question: string; answer: string };

interface PostData {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
}

interface Props {
  initialData?: Partial<PostData>;
  isEditing?: boolean;
}

function slugify(text: string) {
  return slugifyLib(text, { lower: true, strict: true });
}

function mdToHtml(md: string): string {
  if (!md) return "";
  if (md.trimStart().startsWith("<")) return md;
  return marked.parse(md) as string;
}

function ToolbarBtn({
  onClick, active, title, children,
}: {
  onClick: () => void;
  active?: boolean;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className="px-2 py-1.5 rounded-lg text-xs font-medium transition-all"
      style={
        active
          ? { background: "rgba(171,84,97,0.15)", color: "#AB5461", border: "1px solid rgba(171,84,97,0.25)" }
          : { color: "rgba(255,255,255,0.3)", border: "1px solid transparent" }
      }
      onMouseEnter={(e) => {
        if (!active) {
          e.currentTarget.style.background = "rgba(255,255,255,0.05)";
          e.currentTarget.style.color = "rgba(255,255,255,0.7)";
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "rgba(255,255,255,0.3)";
        }
      }}
    >
      {children}
    </button>
  );
}

async function compressToWebP(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      let { width, height } = img;
      const MAX = 1200;
      if (width > MAX) { height = Math.round((height * MAX) / width); width = MAX; }
      const canvas = document.createElement("canvas");
      canvas.width = width; canvas.height = height;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0, width, height);
      const tryQuality = (q: number) => {
        const dataUrl = canvas.toDataURL("image/webp", q);
        const bytes = Math.round((dataUrl.length * 3) / 4);
        if (bytes > 100000 && q > 0.4) tryQuality(Math.round((q - 0.15) * 100) / 100);
        else { URL.revokeObjectURL(url); resolve(dataUrl); }
      };
      tryQuality(0.85);
    };
    img.onerror = reject;
    img.src = url;
  });
}

export default function PostEditor({ initialData, isEditing = false }: Props) {
  const router = useRouter();

  const [title, setTitle] = useState(initialData?.title ?? "");
  const [slug, setSlug] = useState(initialData?.slug ?? "");
  const [date, setDate] = useState(initialData?.date ?? new Date().toISOString().split("T")[0]);
  const [excerpt, setExcerpt] = useState(initialData?.excerpt ?? "");
  const [tagsInput, setTagsInput] = useState((initialData?.tags ?? []).join(", "));
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [preview, setPreview] = useState(false);
  const [uploadingImg, setUploadingImg] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [, forceUpdate] = useState(0);

  function handleTitleChange(val: string) {
    setTitle(val);
    if (!isEditing) setSlug(slugify(val));
  }

  function autoGenerateSEO() {
    if (title && !metaTitle) setMetaTitle(title.slice(0, 60));
    if (excerpt && !metaDescription) setMetaDescription(excerpt.slice(0, 160));
  }

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      TiptapImage.configure({ inline: false, allowBase64: true }),
      TiptapLink.configure({ openOnClick: false }),
      Placeholder.configure({ placeholder: "Start writing your post…" }),
    ],
    content: mdToHtml(initialData?.content ?? ""),
    editorProps: {
      attributes: {
        class:
          "prose prose-invert prose-sm max-w-none focus:outline-none min-h-[400px] px-5 py-5 text-sm leading-relaxed",
      },
    },
  });

  useEffect(() => {
    if (!editor) return;
    const update = () => forceUpdate((n) => n + 1);
    editor.on("selectionUpdate", update);
    editor.on("transaction", update);
    return () => {
      editor.off("selectionUpdate", update);
      editor.off("transaction", update);
    };
  }, [editor]);

  function insertLink() {
    const url = window.prompt("Enter URL (use /blog/slug for internal links)");
    if (!url || !editor) return;
    if (editor.state.selection.empty) {
      const text = window.prompt("Link text") ?? url;
      editor.chain().focus().insertContent(`<a href="${url}">${text}</a>`).run();
    } else {
      editor.chain().focus().setLink({ href: url }).run();
    }
  }

  const handleInlineImage = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file || !editor) return;
      setUploadingImg(true);
      try {
        const dataUrl = await compressToWebP(file);
        editor.chain().focus().setImage({ src: dataUrl }).run();
      } catch { alert("Image compression failed."); }
      setUploadingImg(false);
      e.target.value = "";
    },
    [editor]
  );

  async function handleFeaturedImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingImg(true);
    try {
      const dataUrl = await compressToWebP(file);
      setFeaturedImage(dataUrl);
    } catch { alert("Image compression failed."); }
    setUploadingImg(false);
    e.target.value = "";
  }

  function addFaq() { setFaqs((f) => [...f, { question: "", answer: "" }]); }
  function removeFaq(i: number) { setFaqs((f) => f.filter((_, idx) => idx !== i)); }
  function updateFaq(i: number, k: keyof FAQ, v: string) {
    setFaqs((f) => f.map((faq, idx) => (idx === i ? { ...faq, [k]: v } : faq)));
  }

  const isHeadingActive = (level: 1 | 2 | 3 | 4 | 5) =>
    editor?.isActive("heading", { level }) ?? false;
  const isParaActive = editor
    ? !isHeadingActive(1) && !isHeadingActive(2) && !isHeadingActive(3) &&
      !isHeadingActive(4) && !isHeadingActive(5) &&
      !editor.isActive("bulletList") && !editor.isActive("orderedList") &&
      !editor.isActive("blockquote") && !editor.isActive("codeBlock")
    : false;

  function buildMDX() {
    const tags = tagsInput.split(",").map((t) => t.trim()).filter(Boolean);
    const html = editor?.getHTML() ?? "";
    const content = html
      .replace(/<h1[^>]*>(.*?)<\/h1>/gi, "# $1\n")
      .replace(/<h2[^>]*>(.*?)<\/h2>/gi, "## $1\n")
      .replace(/<h3[^>]*>(.*?)<\/h3>/gi, "### $1\n")
      .replace(/<h4[^>]*>(.*?)<\/h4>/gi, "#### $1\n")
      .replace(/<h5[^>]*>(.*?)<\/h5>/gi, "##### $1\n")
      .replace(/<strong[^>]*>(.*?)<\/strong>/gi, "**$1**")
      .replace(/<em[^>]*>(.*?)<\/em>/gi, "*$1*")
      .replace(/<u[^>]*>(.*?)<\/u>/gi, "$1")
      .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, "[$2]($1)")
      .replace(/<img[^>]*src="([^"]*)"[^>]*/gi, "![]($1)")
      .replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, "> $1")
      .replace(/<li[^>]*>(.*?)<\/li>/gi, "- $1\n")
      .replace(/<ul[^>]*>|<\/ul>|<ol[^>]*>|<\/ol>/gi, "")
      .replace(/<p[^>]*>(.*?)<\/p>/gi, "$1\n\n")
      .replace(/<hr[^>]*\/?>/gi, "---\n")
      .replace(/<br[^>]*\/?>/gi, "\n")
      .replace(/<[^>]+>/g, "")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&nbsp;/g, " ")
      .trim();

    const faqBlock =
      faqs.filter((f) => f.question && f.answer).length > 0
        ? `\n\n## Frequently Asked Questions\n\n${faqs
            .filter((f) => f.question && f.answer)
            .map((f) => `**${f.question}**\n\n${f.answer}`)
            .join("\n\n")}`
        : "";

    return [
      "---",
      `title: "${title.replace(/"/g, "'")}"`,
      `date: "${date}"`,
      excerpt ? `excerpt: "${excerpt.replace(/"/g, "'")}"` : "",
      tags.length ? `tags: [${tags.map((t) => `"${t}"`).join(", ")}]` : "",
      featuredImage ? `image: "${featuredImage}"` : "",
      metaTitle ? `metaTitle: "${metaTitle.replace(/"/g, "'")}"` : "",
      metaDescription ? `metaDescription: "${metaDescription.replace(/"/g, "'")}"` : "",
      "---",
      "",
      content + faqBlock,
    ]
      .filter((l) => l !== undefined && l !== null && !(l === "" && false))
      .join("\n");
  }

  async function handleSave() {
  if (!title.trim()) { setError("Title is required."); return; }
  if (!editor?.getText().trim()) { setError("Content is required."); return; }
  setSaving(true);
  setError(null);

const res = await fetch(
  isEditing ? `/api/admin/post/${slug}` : "/api/blog/publish",
  {
    method: isEditing ? "PUT" : "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      filename: slug,
      title,
      date,
      excerpt,
      tags: tagsInput.split(",").map((t) => t.trim()).filter(Boolean),
      author: "Creative Wired",
      coverImage: featuredImage,
      content: buildMDX(),
    }),
  }
);

// Temporary debug — remove after fixing
console.log("Status:", res.status, res.url);
const text = await res.text();
console.log("Response:", text.slice(0, 300));

let data: { success?: boolean; ok?: boolean; error?: string };
try {
  data = JSON.parse(text);
} catch {
  throw new Error(`Server returned non-JSON (${res.status}): ${text.slice(0, 100)}`);
}

if (!res.ok) throw new Error(data.error ?? "Save failed");    if (res.ok) {
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
      if (!isEditing) router.push("/admin/posts");
    } else {
      const data = await res.json();
      setError(data.error ?? "Failed to save post");
    }
    setSaving(false);
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Top bar */}
      <header
        className="flex items-center justify-between px-6 py-4 shrink-0 sticky top-0 z-20"
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(0,0,0,0.9)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="flex items-center gap-4">
          <Link
            href="/admin/posts"
            className="flex items-center gap-2 text-xs tracking-wider transition-colors"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            <ArrowLeft size={14} />
            Posts
          </Link>
          <div className="w-px h-4" style={{ background: "rgba(255,255,255,0.08)" }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.2)" }}>
            {isEditing ? "Edit Post" : "New Post"}
          </span>
          {slug && (
            <span className="text-[10px] font-mono" style={{ color: "rgba(255,255,255,0.15)" }}>
              /blog/{slug}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          {saved && <span className="text-xs text-green-400/70 tracking-wider">✓ Saved</span>}
          {error && <span className="text-xs text-red-400/70 tracking-wider">{error}</span>}
          <button
            type="button"
            onClick={() => setPreview((v) => !v)}
            className="flex items-center gap-2 text-xs tracking-wider px-3 py-2 rounded-lg transition-all duration-200"
            style={{
              color: "rgba(255,255,255,0.3)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <Eye size={13} />
            {preview ? "Edit" : "Preview"}
          </button>
          {isEditing && (
            <Link
              href={`/blog/${slug}`}
              target="_blank"
              className="text-xs tracking-wider px-3 py-2 rounded-lg transition-all duration-200"
              style={{
                color: "rgba(255,255,255,0.25)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              View ↗
            </Link>
          )}
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 text-xs tracking-widest uppercase px-4 py-2 rounded-xl transition-all duration-200 disabled:opacity-50"
            style={{
              background: "rgba(171,84,97,0.85)",
              border: "1px solid rgba(171,84,97,0.4)",
            }}
          >
            {saving ? <Loader2 size={13} className="animate-spin" /> : <Save size={13} />}
            {saving ? "Saving…" : "Save Post"}
          </button>
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-1 min-h-0">
        {/* Left — Editor */}
        <div
          className="flex-1 flex flex-col min-w-0 overflow-y-auto"
          style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}
        >
          {/* Title */}
          <div className="px-8 pt-8 pb-3">
            <input
              type="text"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Post title…"
              className="w-full bg-transparent text-white text-2xl font-light placeholder-white/10 outline-none border-none"
            />
            <div className="mt-3 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
          </div>

          {/* Excerpt */}
          <div className="px-8 pb-4">
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Brief excerpt / description…"
              rows={2}
              className="w-full bg-transparent text-white/40 text-sm placeholder-white/10 outline-none resize-none leading-relaxed"
            />
            <div className="mt-2 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
          </div>

          {/* Toolbar */}
          {!preview && editor && (
            <div
              className="px-4 py-2 flex flex-wrap items-center gap-0.5"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
            >
              {/* Headings */}
              <div className="flex items-center gap-0.5 pr-2 mr-1" style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}>
                {([1, 2, 3, 4, 5] as const).map((level) => (
                  <ToolbarBtn
                    key={level}
                    title={`Heading ${level}`}
                    active={isHeadingActive(level)}
                    onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
                  >
                    H{level}
                  </ToolbarBtn>
                ))}
                <ToolbarBtn title="Paragraph" active={isParaActive} onClick={() => editor.chain().focus().setParagraph().run()}>
                  P
                </ToolbarBtn>
              </div>

              {/* Format */}
              <div className="flex items-center gap-0.5 pr-2 mr-1" style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}>
                <ToolbarBtn title="Bold" active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()}>
                  <strong>B</strong>
                </ToolbarBtn>
                <ToolbarBtn title="Italic" active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()}>
                  <em>I</em>
                </ToolbarBtn>
                <ToolbarBtn title="Underline" active={editor.isActive("underline")} onClick={() => editor.chain().focus().toggleUnderline().run()}>
                  <span className="underline">U</span>
                </ToolbarBtn>
                <ToolbarBtn title="Strikethrough" active={editor.isActive("strike")} onClick={() => editor.chain().focus().toggleStrike().run()}>
                  <span className="line-through">S</span>
                </ToolbarBtn>
                <ToolbarBtn title="Code" active={editor.isActive("code")} onClick={() => editor.chain().focus().toggleCode().run()}>
                  {"<>"}
                </ToolbarBtn>
              </div>

              {/* Align */}
              <div className="flex items-center gap-0.5 pr-2 mr-1" style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}>
                <ToolbarBtn title="Align Left" active={editor.isActive({ textAlign: "left" })} onClick={() => editor.chain().focus().setTextAlign("left").run()}>
                  <AlignLeft size={13} />
                </ToolbarBtn>
                <ToolbarBtn title="Align Center" active={editor.isActive({ textAlign: "center" })} onClick={() => editor.chain().focus().setTextAlign("center").run()}>
                  <AlignCenter size={13} />
                </ToolbarBtn>
                <ToolbarBtn title="Align Right" active={editor.isActive({ textAlign: "right" })} onClick={() => editor.chain().focus().setTextAlign("right").run()}>
                  <AlignRight size={13} />
                </ToolbarBtn>
              </div>

              {/* Lists + Blocks */}
              <div className="flex items-center gap-0.5 pr-2 mr-1" style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}>
                <ToolbarBtn title="Bullet List" active={editor.isActive("bulletList")} onClick={() => editor.chain().focus().toggleBulletList().run()}>
                  • List
                </ToolbarBtn>
                <ToolbarBtn title="Numbered List" active={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
                  1. List
                </ToolbarBtn>
                <ToolbarBtn title="Blockquote" active={editor.isActive("blockquote")} onClick={() => editor.chain().focus().toggleBlockquote().run()}>
                  "
                </ToolbarBtn>
                <ToolbarBtn title="Code Block" active={editor.isActive("codeBlock")} onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
                  {"{ }"}
                </ToolbarBtn>
                <ToolbarBtn title="Divider" onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                  —
                </ToolbarBtn>
              </div>

              {/* Insert */}
              <div className="flex items-center gap-0.5 pr-2 mr-1" style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}>
                <ToolbarBtn title="Insert Link" active={editor.isActive("link")} onClick={insertLink}>
                  <Link2 size={13} />
                </ToolbarBtn>
                <label
                  title="Insert Image"
                  className="px-2 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1"
                  style={{ color: "rgba(255,255,255,0.3)", border: "1px solid transparent" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.3)"; }}
                >
                  {uploadingImg ? <Loader2 size={13} className="animate-spin" /> : <ImageIcon size={13} />}
                  <input type="file" accept="image/*" className="hidden" onChange={handleInlineImage} />
                </label>
              </div>

              {/* Undo / Redo */}
              <div className="flex items-center gap-0.5 ml-auto">
                <ToolbarBtn title="Undo" onClick={() => editor.chain().focus().undo().run()}>
  <Undo2 size={13} />
</ToolbarBtn>
<ToolbarBtn title="Redo" onClick={() => editor.chain().focus().redo().run()}>
  <Redo2 size={13} />
</ToolbarBtn>
              </div>
            </div>
          )}

          {/* Editor / Preview */}
          <div
            className="flex-1"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
          >
            {preview ? (
              <div
                className="prose prose-invert prose-sm max-w-none px-8 py-6 text-white/70"
                dangerouslySetInnerHTML={{ __html: editor?.getHTML() ?? "" }}
              />
            ) : (
              <EditorContent editor={editor} />
            )}
          </div>

          {/* FAQ section */}
          <div className="px-8 py-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-[10px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.2)" }}>
                FAQ Items
              </p>
              <button
                type="button"
                onClick={addFaq}
                className="flex items-center gap-1 text-[10px] tracking-wider px-3 py-1.5 rounded-lg transition-all duration-200"
                style={{ color: "rgba(255,255,255,0.3)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <Plus size={11} />
                Add FAQ
              </button>
            </div>

            {faqs.length === 0 ? (
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.15)" }}>
                No FAQs yet. FAQs generate FAQ schema for SEO.
              </p>
            ) : (
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl space-y-2.5"
                    style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.2)" }}>
                        FAQ {i + 1}
                      </span>
                      <button type="button" onClick={() => removeFaq(i)}>
                        <Trash2 size={13} style={{ color: "rgba(255,80,80,0.4)" }} />
                      </button>
                    </div>
                    <input
                      type="text"
                      value={faq.question}
                      onChange={(e) => updateFaq(i, "question", e.target.value)}
                      placeholder="Question"
                      className="w-full px-3 py-2 rounded-lg text-xs text-white placeholder-white/10 outline-none"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                    />
                    <textarea
                      value={faq.answer}
                      onChange={(e) => updateFaq(i, "answer", e.target.value)}
                      placeholder="Answer"
                      rows={2}
                      className="w-full px-3 py-2 rounded-lg text-xs text-white placeholder-white/10 outline-none resize-none"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right — Sidebar */}
        <aside className="w-72 shrink-0 overflow-y-auto px-5 py-6 space-y-6">
          {/* Post Settings */}
          <section>
            <h3 className="text-[10px] tracking-widest uppercase mb-4" style={{ color: "rgba(255,255,255,0.2)" }}>
              Post Settings
            </h3>
            <div className="space-y-4">
              {/* Slug */}
              <div>
                <label className="block text-[10px] tracking-wider text-white/25 mb-1.5">Slug</label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(slugify(e.target.value))}
                  placeholder="post-slug"
                  className="w-full px-3 py-2 rounded-lg text-xs text-white placeholder-white/10 outline-none transition-all"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                  onFocus={(e) => (e.currentTarget.style.border = "1px solid rgba(171,84,97,0.3)")}
                  onBlur={(e) => (e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)")}
                />
              </div>

              {/* Date */}
              <div>
                <label className="block text-[10px] tracking-wider text-white/25 mb-1.5">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg text-xs text-white/60 outline-none transition-all"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", colorScheme: "dark" }}
                  onFocus={(e) => (e.currentTarget.style.border = "1px solid rgba(171,84,97,0.3)")}
                  onBlur={(e) => (e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)")}
                />
              </div>

              {/* Tags */}
              <div>
                <label className="block text-[10px] tracking-wider text-white/25 mb-1.5">
                  Tags <span style={{ color: "rgba(255,255,255,0.12)" }}>(comma separated)</span>
                </label>
                <input
                  type="text"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  placeholder="dubai, luxury, limo"
                  className="w-full px-3 py-2 rounded-lg text-xs text-white placeholder-white/10 outline-none transition-all"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                  onFocus={(e) => (e.currentTarget.style.border = "1px solid rgba(171,84,97,0.3)")}
                  onBlur={(e) => (e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)")}
                />
                {tagsInput.trim() && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {tagsInput.split(",").map((t) => t.trim()).filter(Boolean).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-full"
                        style={{ color: "rgba(171,84,97,0.7)", border: "1px solid rgba(171,84,97,0.2)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Featured Image */}
              <div>
                <label className="block text-[10px] tracking-wider text-white/25 mb-1.5">Featured Image</label>
                <label
                  className="flex items-center gap-2 cursor-pointer w-full px-3 py-2.5 rounded-lg transition-all"
                  style={{ border: "1px dashed rgba(255,255,255,0.1)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.border = "1px dashed rgba(171,84,97,0.3)")}
                  onMouseLeave={(e) => (e.currentTarget.style.border = "1px dashed rgba(255,255,255,0.1)")}
                >
                  {uploadingImg ? <Loader2 size={13} className="animate-spin text-white/30" /> : <ImageIcon size={13} style={{ color: "rgba(255,255,255,0.2)" }} />}
                  <span className="text-[10px] tracking-wider" style={{ color: "rgba(255,255,255,0.2)" }}>
                    {featuredImage ? "Change image" : "Upload image"}
                  </span>
                  <input type="file" accept="image/*" className="hidden" onChange={handleFeaturedImage} />
                </label>
                {featuredImage && (
                  <div className="mt-2 relative group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={featuredImage} alt="featured" className="w-full aspect-video object-cover rounded-xl" />
                    <button
                      type="button"
                      onClick={() => setFeaturedImage("")}
                      className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: "rgba(0,0,0,0.6)" }}
                    >
                      <Trash2 size={11} style={{ color: "rgba(255,80,80,0.8)" }} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </section>

          <div className="h-px" style={{ background: "rgba(255,255,255,0.05)" }} />

          {/* Advanced SEO */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[10px] tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.2)" }}>
                Advanced SEO
              </h3>
              <button
                type="button"
                onClick={autoGenerateSEO}
                className="text-[10px] tracking-wider px-2.5 py-1 rounded-lg transition-all"
                style={{ color: "rgba(171,84,97,0.7)", border: "1px solid rgba(171,84,97,0.2)" }}
              >
                Auto-fill
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] tracking-wider mb-1.5 flex items-center justify-between" style={{ color: "rgba(255,255,255,0.25)" }}>
                  Meta Title
                  <span style={{ color: metaTitle.length > 55 ? "rgba(255,160,0,0.7)" : "rgba(255,255,255,0.15)" }}>
                    {metaTitle.length}/60
                  </span>
                </label>
                <input
                  type="text"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  maxLength={60}
                  placeholder="SEO title"
                  className="w-full px-3 py-2 rounded-lg text-xs text-white placeholder-white/10 outline-none transition-all"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                  onFocus={(e) => (e.currentTarget.style.border = "1px solid rgba(171,84,97,0.3)")}
                  onBlur={(e) => (e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)")}
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-wider mb-1.5 flex items-center justify-between" style={{ color: "rgba(255,255,255,0.25)" }}>
                  Meta Description
                  <span style={{ color: metaDescription.length > 145 ? "rgba(255,160,0,0.7)" : "rgba(255,255,255,0.15)" }}>
                    {metaDescription.length}/160
                  </span>
                </label>
                <textarea
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  maxLength={160}
                  rows={3}
                  placeholder="SEO description"
                  className="w-full px-3 py-2 rounded-lg text-xs text-white placeholder-white/10 outline-none resize-none transition-all leading-relaxed"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                  onFocus={(e) => (e.currentTarget.style.border = "1px solid rgba(171,84,97,0.3)")}
                  onBlur={(e) => (e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)")}
                />
              </div>
            </div>
          </section>

          <div className="h-px" style={{ background: "rgba(255,255,255,0.05)" }} />

          {/* Google Preview */}
          <section>
            <h3 className="text-[10px] tracking-widest uppercase mb-3" style={{ color: "rgba(255,255,255,0.2)" }}>
              Google Preview
            </h3>
            <div className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <p className="text-blue-400/60 text-[10px] mb-1 truncate">
                privilegelimo.com/blog/{slug || "post-slug"}
              </p>
              <p className="text-white/70 text-sm font-medium leading-snug mb-1 line-clamp-2">
                {metaTitle || title || "Post Title"}
              </p>
              <p className="text-white/30 text-xs leading-relaxed line-clamp-2">
                {metaDescription || excerpt || "Post description will appear here…"}
              </p>
            </div>
          </section>

          <div className="h-px" style={{ background: "rgba(255,255,255,0.05)" }} />

          {/* Stats */}
          <section>
            <h3 className="text-[10px] tracking-widest uppercase mb-3" style={{ color: "rgba(255,255,255,0.2)" }}>
              Stats
            </h3>
            <div className="space-y-2">
              {[
                { label: "Words", value: editor?.getText().trim().split(/\s+/).filter(Boolean).length ?? 0 },
                { label: "Characters", value: editor?.getText().length ?? 0 },
                {
                  label: "Read time",
                  value: `${Math.max(1, Math.round((editor?.getText().trim().split(/\s+/).filter(Boolean).length ?? 0) / 200))} min`,
                },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between">
                  <span className="text-[10px] tracking-wider" style={{ color: "rgba(255,255,255,0.2)" }}>{label}</span>
                  <span className="text-xs tabular-nums" style={{ color: "rgba(255,255,255,0.4)" }}>{value}</span>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}