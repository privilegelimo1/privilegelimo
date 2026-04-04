import PostForm from "@/components/admin/PostForm";
import Link from "next/link";

export default function NewPostPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(20px)" }}
        className="sticky top-0 z-10 bg-black/80 px-6 py-4"
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/admin/dashboard"
              className="text-white/30 hover:text-white/70 text-sm transition-colors"
            >
              ← Dashboard
            </Link>
            <span className="text-white/10">|</span>
            <span className="text-white/50 text-sm tracking-wider">New Post</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-light text-white mb-8 tracking-wide">
          Write a new post
        </h1>
        <PostForm mode="new" />
      </main>
    </div>
  );
}
