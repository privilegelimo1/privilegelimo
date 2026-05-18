"use client"

import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import {
  Plus, Pencil, Trash2, X, Eye, EyeOff,
  Bold, Italic, Underline, Heading1, Heading2,
  Heading3, List, ListOrdered, Quote, Link,
  Image, Code, Minus, AlignLeft, Loader2, FileText, Star,
} from "lucide-react"

const roseGold = "linear-gradient(135deg, #b76e79, #e8a4a0, #c9956c)"

type Blog = {
  id?:           string
  slug:          string
  title:         string
  meta_desc:     string
  seo_keywords:  string
  excerpt:       string
  content:       string
  cover_image:   string
  cover_alt:     string
  author:        string
  category:      string
  tags:          string[]
  published:     boolean
  featured:      boolean
  published_at?: string | null
}

const CATEGORIES = [
  "", "Travel Tips", "Dubai Guide", "Airport Transfers",
  "Corporate Travel", "Luxury Vehicles", "Events", "News", "General",
]

const emptyBlog = (): Blog => ({
  slug: "", title: "", meta_desc: "", seo_keywords: "",
  excerpt: "", content: "", cover_image: "", cover_alt: "",
  author: "Chauffeur Dubai", category: "", tags: [],
  published: false, featured: false, published_at: null,
})

// ── Rich Text Editor ──────────────────────────────────────────────────────────
function RichEditor({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [tab, setTab] = useState<"write" | "preview">("write")

  function wrap(before: string, after = before, placeholder = "text") {
    const ta = textareaRef.current
    if (!ta) return
    const start = ta.selectionStart
    const end   = ta.selectionEnd
    const sel   = ta.value.slice(start, end) || placeholder
    const next  = ta.value.slice(0, start) + before + sel + after + ta.value.slice(end)
    onChange(next)
    setTimeout(() => {
      ta.focus()
      ta.setSelectionRange(start + before.length, start + before.length + sel.length)
    }, 0)
  }

  function insertLine(prefix: string, placeholder = "text") {
    const ta = textareaRef.current
    if (!ta) return
    const start  = ta.selectionStart
    const end    = ta.selectionEnd
    const sel    = ta.value.slice(start, end) || placeholder
    const before = start > 0 && ta.value[start - 1] !== "\n" ? "\n" : ""
    const insert = `${before}${prefix}${sel}\n`
    const next   = ta.value.slice(0, start) + insert + ta.value.slice(end)
    onChange(next)
    setTimeout(() => {
      ta.focus()
      const s = start + before.length + prefix.length
      ta.setSelectionRange(s, s + sel.length)
    }, 0)
  }

  function insertLink() {
    const url = prompt("Enter URL:", "https://")
    if (!url) return
    const ta  = textareaRef.current
    if (!ta) return
    const sel = ta.value.slice(ta.selectionStart, ta.selectionEnd) || "link text"
    wrap(`<a href="${url}">`, "</a>", sel)
  }

  function insertImage() {
    const url = prompt("Enter image URL:")
    if (!url) return
    const alt = prompt("Enter alt text:", "") ?? ""
    const ta  = textareaRef.current
    if (!ta) return
    const start = ta.selectionStart
    const ins   = `<img src="${url}" alt="${alt}" />`
    onChange(ta.value.slice(0, start) + ins + ta.value.slice(start))
  }

  const tools: { label: string; icon: React.ElementType; action: () => void; divider?: boolean }[] = [
    { label: "Bold",          icon: Bold,        action: () => wrap("<strong>", "</strong>") },
    { label: "Italic",        icon: Italic,      action: () => wrap("<em>", "</em>") },
    { label: "Underline",     icon: Underline,   action: () => wrap("<u>", "</u>") },
    { label: "H1",            icon: Heading1,    action: () => wrap("<h1>", "</h1>"), divider: true },
    { label: "H2",            icon: Heading2,    action: () => wrap("<h2>", "</h2>") },
    { label: "H3",            icon: Heading3,    action: () => wrap("<h3>", "</h3>") },
    { label: "Bullet list",   icon: List,        action: () => insertLine("<ul>\n  <li>", "</li>\n</ul>"), divider: true },
    { label: "Numbered list", icon: ListOrdered, action: () => insertLine("<ol>\n  <li>", "</li>\n</ol>") },
    { label: "Blockquote",    icon: Quote,       action: () => wrap("<blockquote>", "</blockquote>") },
    { label: "Code",          icon: Code,        action: () => wrap("<code>", "</code>"), divider: true },
    { label: "Paragraph",     icon: AlignLeft,   action: () => wrap("<p>", "</p>") },
    { label: "Divider",       icon: Minus,       action: () => {
      const ta = textareaRef.current; if (!ta) return
      const s  = ta.selectionStart
      onChange(ta.value.slice(0, s) + "\n<hr />\n" + ta.value.slice(s))
    }},
    { label: "Link",  icon: Link,  action: insertLink,  divider: true },
    { label: "Image", icon: Image, action: insertImage },
  ]

  return (
    <div className="border border-zinc-200 rounded-xl overflow-hidden focus-within:border-rose-300 transition-colors">
      {/* Toolbar — scrollable on mobile */}
      <div className="flex items-center border-b border-zinc-100 bg-zinc-50">
        <div className="flex items-center gap-0.5 px-2 py-1.5 flex-1 overflow-x-auto scrollbar-none">
          {tools.map(({ label, icon: Icon, action, divider }) => (
            <span key={label} className="flex items-center shrink-0">
              {divider && <span className="w-px h-5 bg-zinc-200 mx-1" />}
              <button type="button" title={label} onClick={action}
                className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200 active:bg-zinc-300 transition-all">
                <Icon size={14} />
              </button>
            </span>
          ))}
        </div>
        {/* Write / Preview toggle — pinned right */}
        <div className="flex items-center gap-1 border-l border-zinc-100 px-2 py-1.5 shrink-0 bg-zinc-50">
          {(["write", "preview"] as const).map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)}
              className={`text-xs font-semibold px-2.5 py-1 rounded-md transition-all capitalize ${
                tab === t ? "text-white shadow-sm" : "text-zinc-500 hover:text-zinc-700"
              }`}
              style={tab === t ? { background: roseGold } : {}}>
              {t}
            </button>
          ))}
        </div>
      </div>

      {tab === "write" && (
        <textarea ref={textareaRef} value={value} onChange={(e) => onChange(e.target.value)}
          rows={12}
          placeholder="Write your content using HTML tags, or use the toolbar above..."
          className="w-full px-3 py-3 text-sm font-mono text-zinc-800 resize-y focus:outline-none bg-white leading-relaxed"
        />
      )}

      {tab === "preview" && (
        <div className="min-h-[200px] max-h-[400px] overflow-y-auto px-4 py-4 bg-white">
          {value
            ? <div className="prose-preview" dangerouslySetInnerHTML={{ __html: value }} />
            : <p className="text-zinc-400 text-sm italic">Nothing to preview yet.</p>
          }
        </div>
      )}

      <style>{`
        .scrollbar-none { scrollbar-width: none; }
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .prose-preview { color:#3f3f46; font-size:0.9375rem; line-height:1.8; }
        .prose-preview h1 { font-size:1.75rem; }
        .prose-preview h2 { font-size:1.375rem; border-bottom:2px solid #fce7e7; padding-bottom:0.4rem; }
        .prose-preview h3 { font-size:1.125rem; color:#b76e79; }
        .prose-preview li::marker { color:#b76e79; }
        .prose-preview a  { color:#b76e79; text-decoration:underline; text-underline-offset:3px; }
        .prose-preview blockquote { border-left:4px solid #b76e79; padding:0.75rem 1rem; background:#fdf4f0; border-radius:0 0.5rem 0.5rem 0; margin:1.25rem 0; font-style:italic; color:#52525b; }
        .prose-preview code { background:#f4f4f5; color:#b76e79; padding:0.1em 0.35em; border-radius:0.25rem; font-size:0.85em; }
        .prose-preview strong { color:#18181b; font-weight:700; }
        .prose-preview em { font-style:italic; color:#71717a; }
        .prose-preview hr {
  border: none;
  border-top: 1px solid #fce7e7;
  margin: 1.5rem 0;
}
      `}</style>
    </div>
  )
}

// ── Field helper ──────────────────────────────────────────────────────────────
function Field({ label, value, onChange, rows, mono, hint }: {
  label: string; value: string; onChange: (v: string) => void
  rows?: number; mono?: boolean; hint?: string
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">
        {label}
        {hint && <span className="normal-case font-normal text-zinc-400 ml-1">{hint}</span>}
      </label>
      {rows && rows > 1 ? (
        <textarea rows={rows} value={value} onChange={(e) => onChange(e.target.value)}
          className={`w-full border border-zinc-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-rose-400 resize-none transition-colors ${mono ? "font-mono" : ""}`}
        />
      ) : (
        <input type="text" value={value} onChange={(e) => onChange(e.target.value)}
          className={`w-full border border-zinc-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-rose-400 transition-colors ${mono ? "font-mono" : ""}`}
        />
      )}
    </div>
  )
}

// ── Toggle row helper ─────────────────────────────────────────────────────────
function ToggleRow({
  checked, onChange, label, sub, color,
}: {
  checked: boolean; onChange: () => void
  label: string; sub?: string; color?: string
}) {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={onChange}
        className="relative w-11 h-6 rounded-full transition-colors shrink-0"
        style={{ background: checked ? (color ?? roseGold) : "#d4d4d8" }}
      >
        <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${checked ? "translate-x-5" : ""}`} />
      </button>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-zinc-700 leading-tight">{label}</p>
        {sub && <p className="text-xs text-zinc-400 mt-0.5">{sub}</p>}
      </div>
    </div>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function AdminBlogsPage() {
  const supabase = createClient()
  const router   = useRouter()

  const [blogs,     setBlogs]     = useState<Blog[]>([])
  const [edit,      setEdit]      = useState<Blog | null>(null)
  const [saving,    setSaving]    = useState(false)
  const [loading,   setLoading]   = useState(true)
  const [msg,       setMsg]       = useState("")
  const [search,    setSearch]    = useState("")
  const [confirmId, setConfirmId] = useState<string | null>(null)

  async function load() {
    setLoading(true)
    const { data } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false })
    setBlogs(data ?? [])
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  async function save() {
    if (!edit) return
    setSaving(true); setMsg("")
    if (edit.featured) {
      await supabase.from("blogs").update({ featured: false }).neq("id", edit.id ?? "")
    }
    const payload = {
      ...edit,
      published_at: edit.published && !edit.published_at
        ? new Date().toISOString() : edit.published_at,
      updated_at: new Date().toISOString(),
    }
    const { error } = edit.id
      ? await supabase.from("blogs").update(payload).eq("id", edit.id)
      : await supabase.from("blogs").insert(payload)
    setSaving(false)
    if (error) { setMsg("Error: " + error.message); return }
    setMsg("Saved ✓"); setEdit(null); load()
  }

  async function deleteBlog(id: string) {
    await supabase.from("blogs").delete().eq("id", id)
    setConfirmId(null); load()
  }

  async function togglePublish(blog: Blog) {
    await supabase.from("blogs").update({
      published:    !blog.published,
      published_at: !blog.published ? new Date().toISOString() : blog.published_at,
      updated_at:   new Date().toISOString(),
    }).eq("id", blog.id!)
    load()
  }

  async function toggleFeatured(blog: Blog) {
    if (!blog.featured) {
      await supabase.from("blogs").update({ featured: false }).neq("id", blog.id!)
    }
    await supabase.from("blogs").update({
      featured:   !blog.featured,
      updated_at: new Date().toISOString(),
    }).eq("id", blog.id!)
    load()
  }

  const filtered = blogs.filter((b) =>
    b.title?.toLowerCase().includes(search.toLowerCase()) ||
    b.category?.toLowerCase().includes(search.toLowerCase())
  )

  const published = blogs.filter((b) => b.published).length

  return (
    <div className="max-w-5xl mx-auto">

      {/* ── Header ── */}
      <div className="flex items-center justify-between mb-4 gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-zinc-900">Blog Manager</h1>
          <p className="text-xs text-zinc-400 mt-0.5">
            {published} published · {blogs.length - published} drafts
          </p>
        </div>
        <button
          onClick={() => router.push("/admin/blogs/new")}
          className="flex items-center gap-1.5 text-white font-semibold text-sm px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all shrink-0"
          style={{ background: roseGold }}
        >
          <Plus size={15} />
          <span className="hidden sm:inline">New Post</span>
          <span className="sm:hidden">New</span>
        </button>
      </div>

      {/* ── Search ── */}
      <div className="mb-4">
        <input
          type="text" placeholder="Search posts..." value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-rose-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-rose-300 bg-white shadow-sm"
        />
      </div>

      {/* ── Blog List ── */}
      {loading ? (
        <div className="flex items-center justify-center py-20 gap-3 text-zinc-400">
          <Loader2 size={18} className="animate-spin" style={{ color: "#b76e79" }} />
          <span className="text-sm">Loading posts…</span>
        </div>
      ) : filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-zinc-400">
          <FileText size={32} className="mb-3 opacity-30" />
          <p className="text-sm font-medium">No posts found</p>
          <p className="text-xs mt-1">Create your first blog post to get started</p>
        </div>
      ) : (
        <div className="space-y-2.5">
          {filtered.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl border border-rose-100 shadow-sm px-4 py-3 flex flex-col gap-3 hover:border-rose-200 transition-colors"
            >
              {/* Top row: thumbnail + info */}
              <div className="flex items-start gap-3">
                {/* Thumbnail */}
                {blog.cover_image ? (
                  <img
                    src={blog.cover_image} alt={blog.cover_alt}
                    className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl object-cover shrink-0 border border-rose-100"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                ) : (
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-rose-50 border border-rose-100 shrink-0 flex items-center justify-center">
                    <FileText size={16} style={{ color: "#b76e79" }} />
                  </div>
                )}

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-1.5 flex-wrap">
                    <p className="font-bold text-zinc-900 text-sm leading-snug">{blog.title || "Untitled"}</p>
                    {blog.featured && (
                      <span className="shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded-full border"
                        style={{ background: "#fff8e1", color: "#c9956c", borderColor: "#f5d98a" }}>
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-zinc-400 font-mono mt-0.5 truncate">{blog.slug}</p>
                  <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
                    {blog.category && (
                      <span className="text-[10px] bg-rose-50 border border-rose-100 text-zinc-500 font-semibold px-2 py-0.5 rounded-full">
                        {blog.category}
                      </span>
                    )}
                    {blog.tags?.slice(0, 2).map((t) => (
                      <span key={t} className="text-[10px] bg-zinc-100 text-zinc-400 px-2 py-0.5 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom row: actions — always full width, properly spaced */}
              <div className="flex items-center gap-1.5 border-t border-rose-50 pt-2.5">
                {/* Featured */}
                <button
                  onClick={() => toggleFeatured(blog)}
                  title={blog.featured ? "Remove featured" : "Set as featured"}
                  className="p-2 rounded-lg transition-all"
                  style={blog.featured
                    ? { background: "#fff8e1", color: "#c9956c" }
                    : { color: "#d4d4d8" }}
                >
                  <Star size={14} fill={blog.featured ? "#c9956c" : "none"} />
                </button>

                {/* Publish */}
                <button
                  onClick={() => togglePublish(blog)}
                  className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-all"
                  style={blog.published
                    ? { background: "#fff0f0", color: "#b76e79" }
                    : { background: "#f4f4f5", color: "#71717a" }}
                >
                  {blog.published
                    ? <><Eye size={12} /> Live</>
                    : <><EyeOff size={12} /> Draft</>
                  }
                </button>

                {/* Edit */}
                <button
                  onClick={() => router.push(`/admin/blogs/edit/${blog.slug}`)}
                  className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-all"
                  title="Edit"
                >
                  <Pencil size={13} />
                  Edit
                </button>

                {/* Delete — pushed to right */}
                <div className="ml-auto">
                  {confirmId === blog.id ? (
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => deleteBlog(blog.id!)}
                        className="text-xs font-bold bg-red-500 text-white px-3 py-1.5 rounded-lg hover:bg-red-600 transition-all"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => setConfirmId(null)}
                        className="text-xs font-medium border border-zinc-200 text-zinc-500 px-3 py-1.5 rounded-lg hover:bg-zinc-50 transition-all"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setConfirmId(blog.id!)}
                      className="p-2 rounded-lg text-zinc-400 hover:text-red-500 hover:bg-red-50 transition-all"
                      title="Delete"
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── New Post Modal ── */}
      {edit && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-start justify-center sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl w-full sm:max-w-4xl sm:my-8 max-h-[95dvh] sm:max-h-none flex flex-col">

            {/* Modal header — sticky */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-zinc-100 bg-white z-10 rounded-t-3xl sm:rounded-t-2xl shrink-0">
              {/* Mobile drag handle */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-zinc-200 rounded-full sm:hidden" />
              <h2 className="font-bold text-zinc-900">New Post</h2>
              <button onClick={() => setEdit(null)}
                className="p-2 rounded-lg text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 transition-all">
                <X size={16} />
              </button>
            </div>

            {/* Modal body — scrollable */}
            <div className="overflow-y-auto flex-1 px-4 sm:px-6 py-5 space-y-5">

              {/* Basic Info */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-3">Basic Info</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Field label="Title"  value={edit.title}  onChange={(v) => setEdit((p) => ({ ...p!, title: v }))} />
                  <Field label="Slug"   value={edit.slug}   onChange={(v) => setEdit((p) => ({ ...p!, slug: v }))} mono hint="(URL path)" />
                  <div>
                    <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Category</label>
                    <select value={edit.category}
                      onChange={(e) => setEdit((p) => ({ ...p!, category: e.target.value }))}
                      className="w-full border border-zinc-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-rose-400 bg-white">
                      {CATEGORIES.map((c) => <option key={c} value={c}>{c || "— Select category —"}</option>)}
                    </select>
                  </div>
                  <Field label="Author" value={edit.author} onChange={(v) => setEdit((p) => ({ ...p!, author: v }))} />
                </div>
              </div>

              {/* Cover Image */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-3">Cover Image</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Field label="Cover Image URL" value={edit.cover_image} onChange={(v) => setEdit((p) => ({ ...p!, cover_image: v }))} />
                  <Field label="Cover Image Alt"  value={edit.cover_alt}  onChange={(v) => setEdit((p) => ({ ...p!, cover_alt: v }))} />
                </div>
                {edit.cover_image && (
                  <img src={edit.cover_image} alt={edit.cover_alt}
                    className="mt-3 w-full max-h-36 object-cover rounded-xl border border-rose-100"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                )}
              </div>

              {/* SEO */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-3">SEO</p>
                <div className="grid grid-cols-1 gap-3">
                  <Field label={`Meta Description ${edit.meta_desc.length}/160`} value={edit.meta_desc}
                    onChange={(v) => setEdit((p) => ({ ...p!, meta_desc: v }))} rows={2} />
                  <Field label="SEO Keywords" hint="(comma separated)" value={edit.seo_keywords}
                    onChange={(v) => setEdit((p) => ({ ...p!, seo_keywords: v }))} />
                  <Field label="Tags" hint="(comma separated)" value={edit.tags.join(", ")}
                    onChange={(v) => setEdit((p) => ({ ...p!, tags: v.split(",").map((t) => t.trim()).filter(Boolean) }))} />
                </div>
              </div>

              {/* Excerpt */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-3">Excerpt</p>
                <Field label="" value={edit.excerpt} onChange={(v) => setEdit((p) => ({ ...p!, excerpt: v }))} rows={3} />
              </div>

              {/* Content */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-3">Content</p>
                <RichEditor value={edit.content} onChange={(v) => setEdit((p) => ({ ...p!, content: v }))} />
              </div>

              {/* Toggles */}
              <div className="space-y-4 pt-2 border-t border-zinc-100">
                <ToggleRow
                  checked={edit.published}
                  onChange={() => setEdit((p) => ({ ...p!, published: !p!.published }))}
                  label={edit.published ? "Published — Live on site" : "Draft — Hidden from public"}
                />
                <ToggleRow
                  checked={edit.featured}
                  onChange={() => setEdit((p) => ({ ...p!, featured: !p!.featured }))}
                  label={edit.featured ? "Featured post" : "Not featured"}
                  sub="Only one post can be featured at a time"
                  color="#f5c842"
                />
              </div>
            </div>

            {/* Modal footer — sticky, safe area aware */}
            <div className="px-4 sm:px-6 py-4 border-t border-zinc-100 bg-white rounded-b-2xl shrink-0 pb-[calc(1rem+env(safe-area-inset-bottom))]">
              {msg && (
                <p className={`text-sm font-medium mb-3 ${msg.startsWith("Error") ? "text-red-500" : "text-green-600"}`}>{msg}</p>
              )}
              <div className="flex items-center gap-3">
                <button onClick={() => setEdit(null)}
                  className="flex-1 sm:flex-none text-sm font-semibold text-zinc-500 px-5 py-2.5 rounded-xl border border-zinc-200 hover:bg-zinc-50 transition-all text-center">
                  Cancel
                </button>
                <button onClick={save} disabled={saving}
                  className="flex-1 sm:flex-none text-white font-semibold text-sm px-6 py-2.5 rounded-xl shadow-md disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                  style={{ background: roseGold }}>
                  {saving && <Loader2 size={14} className="animate-spin" />}
                  {saving ? "Saving…" : "Save Post"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}