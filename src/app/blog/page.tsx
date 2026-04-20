import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blog | Privilege Limo",
  description:
    "Insights, guides, and updates from Dubai's premier luxury chauffeur service.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="pt-36 pb-20 px-6 border-b border-[#efefef]">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#AB5461]" />
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#AB5461] font-light">
              Journal
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1 className="text-5xl md:text-7xl font-extralight text-[#0a0a0a] tracking-tight leading-[1.05]">
              Insights &amp;
              <br />
              <span className="text-[#AB5461] italic font-extralight">
                Stories
              </span>
            </h1>
            <p className="text-sm text-[#9a9a9a] font-light max-w-sm leading-relaxed md:text-right">
              Luxury travel guides, chauffeur tips, and updates from
              Dubai&apos;s premier limousine service.
              <br />
              <span className="text-[#AB5461]">{posts.length} articles</span>
            </p>
          </div>
        </div>
      </section>

      {posts.length === 0 ? (
        /* ── EMPTY STATE ───────────────────────────────────────── */
        <section className="py-40 px-6 text-center">
          <div className="text-5xl mb-6">✦</div>
          <h2 className="text-2xl font-light text-[#0a0a0a] mb-3">
            No articles yet
          </h2>
          <p className="text-sm text-[#9a9a9a] font-light">
            Check back soon — stories are on their way.
          </p>
        </section>
      ) : (
        <div className="max-w-7xl mx-auto px-6">

          {/* ── FEATURED POST ──────────────────────────────────── */}
          {featured && (
            <section className="py-16 border-b border-[#efefef]">
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              >
                {/* Image */}
                <div className="relative h-[320px] md:h-[420px] rounded-[2rem] overflow-hidden bg-[#f8f4f5]">
                  {featured.coverImage ? (
                    <Image
                      src={featured.coverImage}
                      alt={featured.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-[10px] tracking-[0.3em] uppercase text-[#d5d5d5]">
                        Privilege Limo
                      </span>
                    </div>
                  )}
                  <span className="absolute top-5 left-5 rounded-full bg-[#AB5461] px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase text-white">
                    Featured
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <span className="text-[10px] tracking-[0.4em] uppercase text-[#AB5461] mb-4 font-light">
                    {featured.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-[1.2] mb-5 group-hover:text-[#AB5461] transition-colors duration-300">
                    {featured.title}
                  </h2>
                  <p className="text-sm text-[#7a7a7a] font-light leading-relaxed mb-8 line-clamp-3">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-[#b0b0b0] font-light tracking-wide">
                      {featured.date} · {featured.readingTime}
                    </span>
                    <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-[#0a0a0a] group-hover:text-[#AB5461] transition-colors duration-300">
                      Read article
                      <svg
                        className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </section>
          )}

          {/* ── POST GRID ──────────────────────────────────────── */}
          {rest.length > 0 && (
            <section className="py-16">
              <div className="flex items-center gap-3 mb-12">
                <div className="h-px w-8 bg-[#efefef]" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#b0b0b0] font-light">
                  All Articles
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {rest.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col rounded-[1.75rem] border border-[#efefef] bg-white overflow-hidden hover:shadow-[0_4px_24px_rgba(171,84,97,0.10)] hover:border-[#AB5461]/20 transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative h-[200px] bg-[#f8f4f5] overflow-hidden">
                      {post.coverImage ? (
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-[10px] tracking-[0.3em] uppercase text-[#d5d5d5]">
                            Privilege Limo
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-7">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[9px] tracking-[0.35em] uppercase text-[#AB5461] border border-[#AB5461]/30 px-3 py-1 rounded-full font-light">
                          {post.category}
                        </span>
                        <span className="text-[10px] text-[#c0c0c0] font-light">
                          {post.readingTime}
                        </span>
                      </div>

                      <h2 className="text-base font-light text-[#0a0a0a] tracking-tight leading-snug mb-3 flex-1 group-hover:text-[#AB5461] transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="text-[13px] text-[#9a9a9a] font-light leading-relaxed mb-6 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-5 border-t border-[#f4f4f4]">
                        <span className="text-[10px] text-[#c0c0c0] font-light">
                          {post.date}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase text-[#0a0a0a] group-hover:text-[#AB5461] transition-colors duration-300">
                          Read
                          <svg
                            className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      )}

      <Footer />
    </main>
  );
}