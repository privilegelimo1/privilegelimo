"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import {
  Save, Trash2, ArrowLeft, Eye, EyeOff,
  Loader2, ExternalLink, Star, Upload, ImageIcon,
} from "lucide-react"
import RichEditor from "@/components/admin/RichEditor"

const roseGold = "linear-gradient(135deg, #b76e79, #e8a4a0, #c9956c)"

const CATEGORIES = [
  "", "Travel Tips", "Dubai Guide", "Airport Transfers",
  "Corporate Travel", "Luxury Vehicles", "Events", "News", "General",
]

type Blog = {
  id:           string
  slug:         string
  title:        string
  meta_title:   string
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
  published_at: string | null
}

function Field({
  label, value, onChange, rows, mono, hint, counter,
}: {
  label:    string
  value:    string
  onChange: (v: string) => void
  rows?:    number
  mono?:    boolean
  hint?:    string
  counter?: number
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
        <textarea
          rows={rows} value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full border border-zinc-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-100 resize-none transition-all ${mono ? "font-mono" : ""}`}
        />
      ) : (
        <input
          type="text" value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full border border-zinc-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-100 transition-all ${mono ? "font-mono" : ""}`}
        />
      )}
    </div>
  )
}

export default function EditBlogPage() {
  const params   = useParams()
  const router   = useRouter()
  const supabase = createClient()
  const slug     = params.slug as string

  const [post,           setPost]           = useState<Blog | null>(null)
  const [loading,        setLoading]        = useState(true)
  const [saving,         setSaving]         = useState(false)
  const [deleting,       setDeleting]       = useState(false)
  const [confirmDel,     setConfirmDel]     = useState(false)
  const [msg,            setMsg]            = useState<{ text: string; ok: boolean } | null>(null)
  const [dirty,          setDirty]          = useState(false)
  const [uploadingImage, setUploadingImage] = useState(false)
  const [dragOver,       setDragOver]       = useState(false)

  useEffect(() => {
    async function load() {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("slug", slug)
        .single()
      if (error || !data) { router.replace("/admin/blogs"); return }
      setPost(data as Blog)
      setLoading(false)
    }
    load()
  }, [slug])

  function update<K extends keyof Blog>(key: K, value: Blog[K]) {
    setPost((p) => p ? { ...p, [key]: value } : p)
    setDirty(true)
  }

  async function handleImageUpload(file: File) {
    if (!post) return
    if (file.size > 5 * 1024 * 1024) {
      setMsg({ text: "Image must be under 5MB", ok: false })
      return
    }
    setUploadingImage(true)
    const ext      = file.name.split(".").pop()
    const filename = `blog-covers/${post.id}-${Date.now()}.${ext}`

    const { error: uploadError } = await supabase.storage
      .from("blog-images")                       
      .upload(filename, file, { upsert: true })

    if (uploadError) {
      setMsg({ text: "Upload failed: " + uploadError.message, ok: false })
      setUploadingImage(false)
      return
    }

    const { data } = supabase.storage.from("blog-images").getPublicUrl(filename)
    const bustUrl = `${data.publicUrl}?t=${Date.now()}`
    update("cover_image", data.publicUrl)
    setUploadingImage(false)
    setDirty(true)
  }

  async function save() {
    if (!post) return
    setSaving(true); setMsg(null)
    if (post.featured) {
      await supabase.from("blogs").update({ featured: false }).neq("id", post.id)
    }
    const { error } = await supabase
      .from("blogs")
      .update({
        ...post,
        published_at: post.published && !post.published_at
          ? new Date().toISOString() : post.published_at,
        updated_at: new Date().toISOString(),
      })
      .eq("id", post.id)
    setSaving(false)
    if (error) { setMsg({ text: "Error: " + error.message, ok: false }); return }
    setMsg({ text: "Saved successfully ✓", ok: true })
    setDirty(false)
    setTimeout(() => setMsg(null), 3000)
  }

  async function handleDelete() {
    if (!post) return
    setDeleting(true)
    await supabase.from("blogs").delete().eq("id", post.id)
    router.push("/admin/blogs")
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] gap-3 text-zinc-400">
        <Loader2 size={20} className="animate-spin" style={{ color: "#b76e79" }} />
        <span className="text-sm">Loading post…</span>
      </div>
    )
  }

  if (!post) return null

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
            <h1 className="text-xl font-bold text-zinc-900 leading-none">Edit Post</h1>
            <p className="text-xs text-zinc-400 font-mono mt-0.5">/{post.slug}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {post.published && (
            <a
              href={`/blog/${post.slug}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 transition-all"
            >
              <ExternalLink size={13} /> View Live
            </a>
          )}

          <button
            type="button"
            onClick={() => update("published", !post.published)}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl border transition-all"
            style={post.published
              ? { background: "#fff0f0", color: "#b76e79", borderColor: "#fcd5d5" }
              : { background: "#f4f4f5", color: "#71717a", borderColor: "#e4e4e7" }}
          >
            {post.published ? <><Eye size={13} /> Published</> : <><EyeOff size={13} /> Draft</>}
          </button>

          {confirmDel ? (
            <div className="flex items-center gap-1.5">
              <button
                onClick={handleDelete} disabled={deleting}
                className="text-xs font-bold bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-xl transition-all disabled:opacity-60 flex items-center gap-1.5"
              >
                {deleting && <Loader2 size={11} className="animate-spin" />}
                Confirm Delete
              </button>
              <button
                onClick={() => setConfirmDel(false)}
                className="text-xs font-semibold border border-zinc-200 text-zinc-500 px-3 py-2 rounded-xl hover:bg-zinc-50 transition-all"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setConfirmDel(true)}
              className="p-2 rounded-xl text-zinc-400 hover:text-red-500 hover:bg-red-50 transition-all"
              title="Delete post"
            >
              <Trash2 size={16} />
            </button>
          )}

          <button
            onClick={save} disabled={saving || !dirty}
            className="flex items-center gap-2 text-white font-semibold text-sm px-5 py-2 rounded-xl shadow-md disabled:opacity-50 transition-all"
            style={{ background: roseGold }}
          >
            {saving
              ? <><Loader2 size={14} className="animate-spin" /> Saving…</>
              : <><Save size={14} /> Save</>
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

        {/* ── Left: Main content ── */}
        <div className="lg:col-span-2 space-y-5">

          <div className="bg-white rounded-2xl border border-rose-100 shadow-sm p-5">
            <Field label="Title" value={post.title} onChange={(v) => update("title", v)} />
          </div>

          <div className="bg-white rounded-2xl border border-rose-100 shadow-sm p-5">
            <Field label="Excerpt" value={post.excerpt} onChange={(v) => update("excerpt", v)} rows={3} />
          </div>

          <div className="bg-white rounded-2xl border border-rose-100 shadow-sm p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">Content</p>
            <RichEditor value={post.content} onChange={(v) => update("content", v)} />
          </div>
        </div>

        {/* ── Right: Sidebar ── */}
        <div className="space-y-5">

          {/* Status card */}
          <div className="bg-white rounded-2xl border border-rose-100 shadow-sm p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Status</p>

            {/* Published toggle */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => update("published", !post.published)}
                className="relative w-11 h-6 rounded-full transition-colors shrink-0"
                style={post.published ? { background: roseGold } : { background: "#d4d4d8" }}
              >
                <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${post.published ? "translate-x-5" : ""}`} />
              </button>
              <div>
                <p className="text-sm font-semibold text-zinc-800">
                  {post.published ? "Published" : "Draft"}
                </p>
                {post.published && post.published_at && (
                  <p className="text-xs text-zinc-400">
                    {new Date(post.published_at).toLocaleDateString("en-AE", {
                      day: "numeric", month: "short", year: "numeric",
                    })}
                  </p>
                )}
              </div>
            </div>

            <div className="border-t border-zinc-100 my-4" />

            {/* Featured toggle */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => update("featured", !post.featured)}
                className="relative w-11 h-6 rounded-full transition-colors shrink-0"
                style={post.featured ? { background: "#f5c842" } : { background: "#d4d4d8" }}
              >
                <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${post.featured ? "translate-x-5" : ""}`} />
              </button>
              <div className="flex-1">
                <div className="flex items-center gap-1.5">
                  <p className="text-sm font-semibold text-zinc-800">
                    {post.featured ? "Featured" : "Not Featured"}
                  </p>
                  {post.featured && <Star size={12} fill="#f5c842" stroke="#f5c842" />}
                </div>
                <p className="text-xs text-zinc-400">
                  {post.featured ? "Shown in featured section" : "Only one post can be featured"}
                </p>
              </div>
            </div>
          </div>

          {/* Post details */}
          <div className="bg-white rounded-2xl border border-rose-100 shadow-sm p-5 space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Post Details</p>
            <Field label="Slug" value={post.slug} onChange={(v) => update("slug", v)} mono hint="(URL)" />
            <div>
              <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">
                Category
              </label>
              <select
                value={post.category}
                onChange={(e) => update("category", e.target.value)}
                className="w-full border border-zinc-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-rose-300 bg-white"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c || "— Select —"}</option>
                ))}
              </select>
            </div>
            <Field label="Author" value={post.author} onChange={(v) => update("author", v)} />
            <Field
              label="Tags" hint="(comma separated)"
              value={post.tags?.join(", ") ?? ""}
              onChange={(v) => update("tags", v.split(",").map((t) => t.trim()).filter(Boolean))}
            />
          </div>

          {/* ── Cover Image ── */}
          <div className="bg-white rounded-2xl border border-rose-100 shadow-sm p-5 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Cover Image</p>

            {post.cover_image ? (
              /* Preview + replace/remove */
              <div className="relative group rounded-xl overflow-hidden border border-rose-100">
                <img
                  src={post.cover_image}
                  alt={post.cover_alt}
                  className="w-full aspect-video object-cover"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <label className="cursor-pointer flex items-center gap-1.5 text-xs font-semibold text-white bg-white/20 hover:bg-white/30 px-3 py-2 rounded-xl transition-all border border-white/30">
                    <Upload size={13} /> Replace
                    <input
                      type="file" accept="image/*" className="hidden"
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

                {/* Upload progress overlay */}
                {uploadingImage && (
                  <div className="absolute inset-0 bg-white/80 flex flex-col items-center justify-center gap-2">
                    <Loader2 size={20} className="animate-spin" style={{ color: "#b76e79" }} />
                    <p className="text-xs font-medium text-zinc-500">Uploading…</p>
                  </div>
                )}
              </div>
            ) : (
              /* Drag & drop upload zone */
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
                <input
                  type="file" accept="image/*" className="hidden"
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

            {/* Alt text — only when image is set */}
            {post.cover_image && !uploadingImage && (
              <Field
                label="Alt Text"
                value={post.cover_alt}
                onChange={(v) => update("cover_alt", v)}
              />
            )}
          </div>

          {/* SEO */}
          <div className="bg-white rounded-2xl border border-rose-100 shadow-sm p-5 space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">SEO</p>
            <Field
              label="Meta Title" value={post.meta_title}
              onChange={(v) => update("meta_title", v)}
              rows={3} counter={160}
            />
            <Field
              label="Meta Description" value={post.meta_desc}
              onChange={(v) => update("meta_desc", v)}
              rows={3} counter={160}
            />
            <Field
              label="SEO Keywords" hint="(comma separated)"
              value={post.seo_keywords}
              onChange={(v) => update("seo_keywords", v)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}