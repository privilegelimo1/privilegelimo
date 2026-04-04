import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Luxury Travel Insights Dubai",
  description: "Tips and insights on luxury chauffeur and limo services in Dubai.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light tracking-widest text-[--color-gold] mb-2">
          Our Blog
        </h1>
        <p className="text-white/50 mb-12 text-sm tracking-wider uppercase">
          Insights on luxury travel in Dubai
        </p>

        <div className="grid gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="glass-card rounded-2xl p-6 hover:border-[--color-gold]/40 
                         border border-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs text-white/40 tracking-widest uppercase">
                  {new Date(post.date).toLocaleDateString("en-AE", {
                    year: "numeric", month: "long", day: "numeric",
                  })}
                </span>
                {post.tags?.map((tag) => (
                  <span key={tag} className="text-xs text-[--color-gold]/70 
                                             border border-[--color-gold]/30 
                                             rounded-full px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-xl font-light text-white group-hover:text-[--color-gold] 
                             transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-white/50 text-sm leading-relaxed">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}