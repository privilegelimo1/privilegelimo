"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import {
  Save, ArrowLeft, Eye, EyeOff, Loader2,
  Upload, Trash2, ImageIcon,
} from "lucide-react"
import RichEditor from "@/components/admin/RichEditor"

const roseGold = "linear-gradient(135deg, #b76e79, #e8a4a0, #c9956c)"

const CATEGORIES = [
  "", "Travel Tips", "Dubai Guide", "Airport Transfers",
  "Corporate Travel", "Luxury Vehicles", "Events", "News", "General",
]

type NewBlog = {
  slug:         string
  title:        string
  meta_desc:    string
  seo_keywords: string
  excerpt:      string
  content:      string
  cover_image:  string
  cover_alt:    string
  author:       string
  category:     string
  tags:         string[]
  published:    boolean
  featured:     boolean
}

function Field({ label, value, onChange, rows, mono, hint, counter }: {
  label: string; value: string; onChange: (v: string) => void
  rows?: number; mono?: boolean; hint?: string; counter?: number
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider">
          {label}
          {hint && <span className="normal-case font-normal text-zinc-400 ml-1">{hint}</span>}
        </label>
        {counter !== undefined && (
          <span className={`text-[10px] font-mono ${value.length > counter ? "text-red-500" : "text-zinc-400"}`}>
            {value.length}/{counter}
          </span>
        )}
      </div>
      {rows && rows > 1 ? (
        <textarea rows={rows} value={value} onChange={(e) => onChange(e.target.value)}
          className={`w-full border border-zinc-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-100 resize-none transition-all ${mono ? "font-mono" : ""}`}
        />
      ) : (
        <input type="text" value={value} onChange={(e) => onChange(e.target.value)}
          className={`w-full border border-zinc-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-100 transition-all ${mono ? "font-mono" : ""}`}
        />
      )}
    </div>
  )
}

const empty = (): NewBlog => ({
  slug: "", title: "", meta_desc: "", seo_keywords: "",
  excerpt: "", content: "", cover_image: "", cover_alt: "",
  author: "Chauffeur Dubai", category: "", tags: [],
  published: false, featured: false,
})

export default function NewBlogPage() {
  const router   = useRouter()
  const supabase = createClient()

  const [post,           setPost]           = useState<NewBlog>(empty())
  const [saving,         setSaving]         = useState(false)
  const [msg,            setMsg]            = useState<{ text: string; ok: boolean } | null>(null)
  const [uploadingImage, setUploadingImage] = useState(false)
  const [dragOver,       setDragOver]       = useState(false)

  function update<K extends keyof NewBlog>(key: K, value: NewBlog[K]) {
    setPost((p) => ({ ...p, [key]: value }))
  }

  function handleTitleChange(v: string) {
    update("title", v)
    if (!post.slug || post.slug === slugify(post.title)) {
      update("slug", slugify(v))
    }
  }

  function slugify(s: string) {
    return s.toLowerCase().trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
  }

  async function handleImageUpload(file: File) {
    if (file.size > 5 * 1024 * 1024) {
      setMsg({ text: "Image must be under 5MB", ok: false })
      return
    }
    setUploadingImage(true)
    const ext      = file.name.split(".").pop()
    const filename = `blog-covers/new-${Date.now()}.${ext}`

    const { error: uploadError } = await supabase.storage
      .from("blog-images")
      .upload(filename, file, { upsert: true })

    if (uploadError) {
      setMsg({ text: "Upload failed: " + uploadError.message, ok: false })
      setUploadingImage(false)
      return
    }

    const { data } = supabase.storage.from("blog-images").getPublicUrl(filename)
    update("cover_image", `${data.publicUrl}?t=${Date.now()}`)
    setUploadingImage(false)
  }

  async function save() {
    if (!post.slug || !post.title) {
      setMsg({ text: "Title and slug are required.", ok: false })
      return
    }
    setSaving(true); setMsg(null)

    const { error } = await supabase.from("blogs").insert({
      ...post,
      published_at: post.published ? new Date().toISOString() : null,
      created_at:   new Date().toISOString(),
      updated_at:   new Date().toISOString(),
    })

    setSaving(false)
    if (error) { setMsg({ text: "Error: " + error.message, ok: false }); return }
    router.push(`/admin/blogs/edit/${post.slug}`)
  }

  return (
    <div className="max-w-5xl mx-auto">

      {/* ── Top bar ── */}
      <div className="flex items-center justify-between mb-6 gap-3 flex-wrap">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/admin/blogs")}
            className="p-2 rounded-xl text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-all"
          >
            <ArrowLeft size={18} />
          </button>
          <div>
            <h1 className="text-xl font-bold text-zinc-900 leading-none">New Post</h1>
            <p className="text-xs text-zinc-400 font-mono mt-0.5">
              {post.slug ? `/${post.slug}` : "slug will appear here"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => update("published", !post.published)}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl border transition-all"
            style={post.published
              ? { background: "#fff0f0", color: "#b76e79", borderColor: "#fcd5d5" }
              : { background: "#f4f4f5", color: "#71717a", borderColor: "#e4e4e7" }}
          >
            {post.published
              ? <><Eye size={13} /> Published</>
              : <><EyeOff size={13} /> Draft</>
            }
          </button>

          <button
            onClick={save} disabled={saving}
            className="flex items-center gap-2 text-white font-semibold text-sm px-5 py-2 rounded-xl shadow-md disabled:opacity-50 transition-all"
            style={{ background: roseGold }}
          >
            {saving
              ? <><Loader2 size={14} className="animate-spin" /> Saving…</>
              : <><Save size={14} /> Save Post</>
            }
          </button>
        </div>
      </div>

      {/* Toast */}
      {msg && (
        <div className={`mb-5 px-4 py-3 rounded-xl text-sm font-medium border ${
          msg.ok
            ? "bg-green-50 text-green-700 border-green-200"
            : "bg-red-50 text-red-600 border-red-200"
        }`}>
          {msg.text}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        {/* ── Left ── */}
        <div className="lg:col-span-2 space-y-5">

          <div className="bg-white rounded-2xl border border-rose-100 shadow-sm p-5">
            <Field label="Title" value={post.title} onChange={handleTitleChange} />
          </div>

          <div className="bg-white rounded-2xl border border-rose-100 shadow-sm p-5">
            <Field label="Excerpt" value={post.excerpt} onChange={(v) => update("excerpt", v)} rows={3} />
          </div>

          <div className="bg-white rounded-2xl border border-rose-100 shadow-sm p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">Content</p>
            <RichEditor value={post.content} onChange={(v) => update("content", v)} />
          </div>
        </div>

        {/* ── Right ── */}
        <div className="space-y-5">

          {/* Post details */}
          <div className="bg-white rounded-2xl border border-rose-100 shadow-sm p-5 space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Post Details</p>
            <Field label="Slug" value={post.slug} onChange={(v) => update("slug", slugify(v))} mono hint="(URL)" />
            <div>
              <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Category</label>
              <select value={post.category} onChange={(e) => update("category", e.target.value)}
                className="w-full border border-zinc-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-rose-300 bg-white">
                {CATEGORIES.map((c) => <option key={c} value={c}>{c || "— Select —"}</option>)}
              </select>
            </div>
            <Field label="Author" value={post.author} onChange={(v) => update("author", v)} />
            <Field label="Tags" hint="(comma separated)" value={post.tags.join(", ")}
              onChange={(v) => update("tags", v.split(",").map((t) => t.trim()).filter(Boolean))} />
          </div>

          {/* ── Cover Image ── */}
          <div className="bg-white rounded-2xl border border-rose-100 shadow-sm p-5 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Cover Image</p>

            {post.cover_image ? (
              <div className="relative group rounded-xl overflow-hidden border border-rose-100">
                <img
                  src={post.cover_image} alt={post.cover_alt}
                  className="w-full aspect-video object-cover"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <label className="cursor-pointer flex items-center gap-1.5 text-xs font-semibold text-white bg-white/20 hover:bg-white/30 px-3 py-2 rounded-xl transition-all border border-white/30">
                    <Upload size={13} /> Replace
                    <input type="file" accept="image/*" className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) handleImageUpload(file)
                      }}
                    />
                  </label>
                  <button
                    onClick={() => { update("cover_image", ""); update("cover_alt", "") }}
                    className="flex items-center gap-1.5 text-xs font-semibold text-white bg-red-500/80 hover:bg-red-500 px-3 py-2 rounded-xl transition-all"
                  >
                    <Trash2 size={13} /> Remove
                  </button>
                </div>
                {uploadingImage && (
                  <div className="absolute inset-0 bg-white/80 flex flex-col items-center justify-center gap-2">
                    <Loader2 size={20} className="animate-spin" style={{ color: "#b76e79" }} />
                    <p className="text-xs font-medium text-zinc-500">Uploading…</p>
                  </div>
                )}
              </div>
            ) : (
              <label
                className={`block cursor-pointer border-2 border-dashed rounded-xl transition-all ${
                  dragOver
                    ? "border-rose-400 bg-rose-50/60"
                    : "border-rose-200 hover:border-rose-300 hover:bg-rose-50/40"
                }`}
                onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(e) => {
                  e.preventDefault(); setDragOver(false)
                  const file = e.dataTransfer.files?.[0]
                  if (file && file.type.startsWith("image/")) handleImageUpload(file)
                }}
              >
                <input type="file" accept="image/*" className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) handleImageUpload(file)
                  }}
                />
                <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
                  {uploadingImage ? (
                    <>
                      <Loader2 size={22} className="animate-spin mb-2" style={{ color: "#b76e79" }} />
                      <p className="text-sm font-medium text-zinc-500">Uploading…</p>
                    </>
                  ) : (
                    <>
                      <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center mb-3">
                        <ImageIcon size={18} style={{ color: "#b76e79" }} />
                      </div>
                      <p className="text-sm font-semibold text-zinc-700">
                        {dragOver ? "Drop to upload" : "Drop image or click to upload"}
                      </p>
                      <p className="text-xs text-zinc-400 mt-1">PNG, JPG, WebP · max 5MB</p>
                    </>
                  )}
                </div>
              </label>
            )}

            {post.cover_image && !uploadingImage && (
              <Field label="Alt Text" value={post.cover_alt} onChange={(v) => update("cover_alt", v)} />
            )}
          </div>

          {/* SEO */}
          <div className="bg-white rounded-2xl border border-rose-100 shadow-sm p-5 space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">SEO</p>
            <Field label="Meta Description" value={post.meta_desc}
              onChange={(v) => update("meta_desc", v)} rows={3} counter={160} />
            <Field label="SEO Keywords" hint="(comma separated)" value={post.seo_keywords}
              onChange={(v) => update("seo_keywords", v)} />
          </div>
        </div>
      </div>
    </div>
  )
}