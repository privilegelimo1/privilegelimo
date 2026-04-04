import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="text-xs tracking-widest uppercase text-white/40 
                     hover:text-[--color-gold] transition-colors mb-10 inline-block"
        >
          ← Back to Blog
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
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
          <h1 className="text-3xl md:text-4xl font-light text-white mb-3">
            {post.title}
          </h1>
          {post.author && (
            <p className="text-white/40 text-sm">By {post.author}</p>
          )}
        </div>

        {/* MDX content rendered with Tailwind typography */}
        <article className="prose prose-invert prose-gold max-w-none
                            prose-headings:font-light prose-headings:text-white
                            prose-a:text-[--color-gold] prose-strong:text-white
                            prose-p:text-white/70 prose-li:text-white/70">
          <MDXRemote source={post.content} />
        </article>
      </div>
    </main>
  );
}