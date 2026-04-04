import { notFound } from "next/navigation";
import { getFile, listFiles } from "@/lib/github";
import { parseMdxFrontmatter } from "@/lib/mdxUtils";

type BlogPost = {
  slug: string;
  title?: string;
  date?: string;
  excerpt?: string;
  content?: string;
  [key: string]: unknown;
};

function isValidParam(
  value: { slug: string } | null
): value is { slug: string } {
  return !!value && typeof value.slug === "string" && value.slug.trim().length > 0;
}

export async function generateStaticParams() {
  try {
    const files = await listFiles("content/blog");

    const params = files
      .filter((f) => f.name.endsWith(".mdx"))
      .map((f) => {
        const slug = f.name.replace(/\.mdx$/, "").trim();
        if (!slug) return null;
        return { slug };
      })
      .filter(isValidParam);

    return params;
  } catch (error) {
    console.error("generateStaticParams failed:", error);
    return [];
  }
}

async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const file = await getFile(`content/blog/${slug}.mdx`);

  if (!file) return null;

  const parsed = parseMdxFrontmatter(file.content);

  return {
    slug,
    ...parsed,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <article>
        <h1 className="text-4xl font-bold text-[#0a0a0a]">
          {String(post.title ?? "Untitled Post")}
        </h1>

        {post.date ? (
          <p className="mt-3 text-sm text-zinc-500">{String(post.date)}</p>
        ) : null}

        {post.excerpt ? (
          <p className="mt-6 text-lg text-zinc-600">
            {String(post.excerpt)}
          </p>
        ) : null}

        <div className="prose prose-zinc mt-10 max-w-none">
          {"content" in post && typeof post.content === "string"
            ? post.content
            : null}
        </div>
      </article>
    </main>
  );
}