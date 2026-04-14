import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { listFiles, getFile } from "@/lib/github";
import { parseMdxFrontmatter } from "@/lib/mdxUtils";

async function isAuthenticated() {
  const cookieStore = await cookies();
  return cookieStore.get("admin_session")?.value === "authenticated";
}

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  }

  try {
    const files = await listFiles("content/blog");

    const posts = await Promise.all(
      files
        .filter((f) => f.name.endsWith(".mdx"))
        .map(async (f) => {
          const slug = f.name.replace(/\.mdx$/, "");
          const file = await getFile(f.path);
          if (!file) return null;
          const { title, date, excerpt, tags } = parseMdxFrontmatter(file.content);
          return { slug, title, date, excerpt, tags };
        })
    );

    return NextResponse.json(posts.filter(Boolean));
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to list posts";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}