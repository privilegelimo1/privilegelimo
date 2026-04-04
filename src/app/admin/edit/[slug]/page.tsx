"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import PostForm from "@/components/admin/PostForm";

export default function EditPostPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const [post, setPost] = useState<Record<string, string> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/admin/post/${slug}`)
      .then((r) => {
        if (r.status === 401) { router.push("/admin"); return null; }
        if (!r.ok) { router.push("/admin/dashboard"); return null; }
        return r.json();
      })
      .then((data) => {
        if (data) setPost(data);
        setLoading(false);
      });
  }, [slug, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white/30 text-sm tracking-widest animate-pulse">Loading post…</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(20px)" }}
        className="sticky top-0 z-10 bg-black/80 px-6 py-4"
      >
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <Link
            href="/admin/dashboard"
            className="text-white/30 hover:text-white/70 text-sm transition-colors"
          >
            ← Dashboard
          </Link>
          <span className="text-white/10">|</span>
          <span className="text-white/50 text-sm tracking-wider">Editing: {slug}</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-light text-white mb-8 tracking-wide">Edit post</h1>
        {post && (
          <PostForm
            mode="edit"
            initial={{
              title: post.title,
              slug: post.slug,
              date: post.date,
              excerpt: post.excerpt,
              tags: Array.isArray(post.tags) ? post.tags.join(", ") : post.tags,
              author: post.author,
              coverImage: post.coverImage,
              content: post.content,
            }}
          />
        )}
      </main>
    </div>
  );
}
