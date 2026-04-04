"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
}

export default function AdminDashboard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/admin/posts")
      .then((r) => {
        if (r.status === 401) {
          router.push("/admin");
          return null;
        }
        return r.json();
      })
      .then((data) => {
        if (data) setPosts(data);
        setLoading(false);
      });
  }, [router]);

  async function handleDelete(slug: string) {
    if (!confirm(`Delete "${slug}"? This cannot be undone.`)) return;
    setDeleting(slug);
    const res = await fetch(`/api/admin/post/${slug}`, { method: "DELETE" });
    if (res.ok) {
      setPosts((p) => p.filter((post) => post.slug !== slug));
    } else {
      alert("Failed to delete post");
    }
    setDeleting(null);
  }

  async function handleLogout() {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin");
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white/30 text-sm tracking-widest animate-pulse">
          Loading…
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(0,0,0,0.8)",
          backdropFilter: "blur(20px)",
        }}
        className="sticky top-0 z-10 px-6 py-4"
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "rgba(171,84,97,0.15)", border: "1px solid rgba(171,84,97,0.3)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  stroke="#AB5461" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <span className="text-white text-sm font-light tracking-wider">Content Studio</span>
              <span className="text-white/20 text-xs ml-2">· {posts.length} posts</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/blog"
              target="_blank"
              className="text-xs text-white/30 hover:text-white/60 tracking-wider transition-colors"
            >
              View Blog ↗
            </Link>
            <Link
              href="/admin/new"
              className="text-xs tracking-widest uppercase px-4 py-2 rounded-lg transition-all duration-200"
              style={{
                background: "rgba(171,84,97,0.85)",
                border: "1px solid rgba(171,84,97,0.4)",
              }}
            >
              + New Post
            </Link>
            <button
              onClick={handleLogout}
              className="text-xs text-white/20 hover:text-white/50 tracking-wider transition-colors"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-10">
        {posts.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-white/20 text-sm tracking-widest mb-6">No posts yet</p>
            <Link
              href="/admin/new"
              className="text-xs tracking-widest uppercase px-6 py-3 rounded-xl"
              style={{ background: "rgba(171,84,97,0.2)", border: "1px solid rgba(171,84,97,0.3)" }}
            >
              Write your first post
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {posts.map((post) => (
              <div
                key={post.slug}
                className="flex items-center justify-between gap-4 px-5 py-4 rounded-2xl
                           transition-all duration-300 group"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white text-sm font-light truncate">{post.title}</h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white/30 text-xs">
                      {new Date(post.date).toLocaleDateString("en-AE", {
                        year: "numeric", month: "short", day: "numeric",
                      })}
                    </span>
                    {post.tags?.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs text-[#AB5461]/60 border border-[#AB5461]/20 rounded-full px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    className="text-xs text-white/20 hover:text-white/50 transition-colors px-3 py-1.5"
                  >
                    Preview ↗
                  </Link>
                  <Link
                    href={`/admin/edit/${post.slug}`}
                    className="text-xs tracking-wider px-3 py-1.5 rounded-lg transition-all duration-200"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(post.slug)}
                    disabled={deleting === post.slug}
                    className="text-xs tracking-wider px-3 py-1.5 rounded-lg transition-all duration-200
                               text-red-400/60 hover:text-red-400 disabled:opacity-30"
                    style={{ border: "1px solid rgba(255,80,80,0.1)" }}
                  >
                    {deleting === post.slug ? "…" : "Delete"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
