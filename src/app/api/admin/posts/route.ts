import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getAllPosts } from "@/lib/blog";

async function isAuthenticated() {
  const cookieStore = await cookies();
  return cookieStore.get("admin_session")?.value === "authenticated";
}

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  }

  try {
    const posts = getAllPosts().map(({ slug, title, date, description, tags, image, category, featured }) => ({
      slug,
      title,
      date,
      excerpt: description,
      tags,
      image,
      category,
      featured,
    }));

    return NextResponse.json(posts);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to list posts";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}