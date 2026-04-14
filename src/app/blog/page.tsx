import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog",
  description: "Latest blog posts",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="blog-page">
      <section className="container">
        <div className="blog-header">
          <p className="eyebrow">Insights</p>
          <h1>Blog</h1>
          <p className="subtext">
            Articles, updates, and useful guides.
          </p>
        </div>

        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.slug} className="blog-card">
              <p className="meta">
                {post.date} · {post.readingTime}
              </p>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <div className="tag-row">
                <span>{post.category}</span>
              </div>
              <Link href={`/blog/${post.slug}`} className="blog-link">
                Read article
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}