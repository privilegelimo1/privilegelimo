"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FileText, Star, Tag, Plus, Edit, Trash2, Eye, Loader2 } from "lucide-react";

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  tags?: string[];
}

function isPost(value: Post | null): value is Post {
  return value !== null;
}

export default function AdminDashboard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/admin/posts");
        if (res.status === 401) {
          router.push("/admin");
          return;
        }
        const data = await res.json();
        if (!res.ok) {
          setError(data.error ?? "Failed to load posts");
          setPosts([]);
          return;
        }
        setPosts(Array.isArray(data) ? data.filter(isPost) : []);
      } catch (err) {
        console.error(err);
        setError("Network error — could not load posts");
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [router]);

  async function handleDelete(slug: string, title: string) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    setDeleting(slug);
    const res = await fetch(`/api/admin/post/${slug}`, { method: "DELETE" });
    if (res.ok) {
      setPosts((p) => p.filter((post) => post.slug !== slug));
    } else {
      alert("Failed to delete post");
    }
    setDeleting(null);
  }

  const stats = [
    {
      label: "Total Posts",
      value: posts.length,
      icon: FileText,
    },
    {
      label: "This Month",
      value: posts.filter((p) => {
        const d = new Date(p.date);
        const now = new Date();
        return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
      }).length,
      icon: Star,
    },
    {
      label: "Total Tags",
      value: new Set(posts.flatMap((p) => p.tags ?? [])).size,
      icon: Tag,
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex items-center gap-3 text-white/20">
          <Loader2 size={16} className="animate-spin" />
          <span className="text-sm tracking-widest">Loading…</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-8 py-10">
      {/* Page header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-white text-lg font-light tracking-wide mb-1">
            Dashboard
          </h1>
          <p className="text-white/25 text-xs tracking-wider">
            Welcome back — here's what's going on
          </p>
        </div>
        <Link
          href="/admin/new"
          className="flex items-center gap-2 text-xs tracking-widest uppercase px-4 py-2.5 rounded-xl transition-all duration-200"
          style={{
            background: "rgba(171,84,97,0.85)",
            border: "1px solid rgba(171,84,97,0.4)",
          }}
        >
          <Plus size={13} />
          New Post
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        {stats.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="px-6 py-5 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-white/25 text-[10px] tracking-widest uppercase">
                {label}
              </span>
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{
                  background: "rgba(171,84,97,0.1)",
                  border: "1px solid rgba(171,84,97,0.2)",
                }}
              >
                <Icon size={13} color="#AB5461" />
              </div>
            </div>
            <p className="text-white text-3xl font-extralight tracking-tight">
              {value}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Posts */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white/50 text-xs tracking-widest uppercase">
            Recent Posts
          </h2>
          <Link
            href="/admin/posts"
            className="text-[10px] tracking-widest uppercase transition-colors"
            style={{ color: "#AB5461" }}
          >
            View All
          </Link>
        </div>

        {/* Error */}
        {error ? (
          <div
            className="px-6 py-5 rounded-2xl text-center"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,80,80,0.15)",
            }}
          >
            <p className="text-red-400/60 text-sm mb-3">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="text-xs text-white/30 hover:text-white/60 tracking-wider underline underline-offset-4 transition-colors"
            >
              Try again
            </button>
          </div>
        ) : posts.length === 0 ? (
          /* Empty state */
          <div
            className="px-6 py-16 rounded-2xl text-center"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <FileText size={28} className="mx-auto mb-3" color="rgba(255,255,255,0.1)" />
            <p className="text-white/20 text-sm tracking-widest mb-5">
              No posts yet
            </p>
            <Link
              href="/admin/new"
              className="text-xs tracking-widest uppercase px-5 py-2.5 rounded-xl transition-all duration-200"
              style={{
                background: "rgba(171,84,97,0.2)",
                border: "1px solid rgba(171,84,97,0.3)",
                color: "#AB5461",
              }}
            >
              Write your first post
            </Link>
          </div>
        ) : (
          /* Posts list — show 5 most recent */
          <div className="space-y-2">
            {posts.slice(0, 5).map((post) => (
              <div
                key={post.slug}
                className="flex items-center justify-between gap-4 px-5 py-4 rounded-2xl group transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-white text-sm font-light truncate mb-1">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-white/25 text-xs">
                      {post.date
                        ? new Date(post.date).toLocaleDateString("en-AE", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })
                        : "No date"}
                    </span>
                    {post.tags?.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] tracking-wide px-2 py-0.5 rounded-full"
                        style={{
                          color: "rgba(171,84,97,0.7)",
                          border: "1px solid rgba(171,84,97,0.2)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Link
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                    style={{
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.3)",
                    }}
                    title="Preview"
                  >
                    <Eye size={13} />
                  </Link>
                  <Link
                    href={`/admin/edit/${post.slug}`}
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                    style={{
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.3)",
                    }}
                    title="Edit"
                  >
                    <Edit size={13} />
                  </Link>
                  <button
                    onClick={() => handleDelete(post.slug, post.title)}
                    disabled={deleting === post.slug}
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 disabled:opacity-30"
                    style={{
                      border: "1px solid rgba(255,80,80,0.15)",
                      color: "rgba(255,100,100,0.5)",
                    }}
                    title="Delete"
                  >
                    {deleting === post.slug ? (
                      <Loader2 size={13} className="animate-spin" />
                    ) : (
                      <Trash2 size={13} />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}