import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface Post {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  coverImage: string;
  category: string;
  tags: string[];
  readingTime: string;
  featured: boolean;
  draft: boolean;
  content: string;
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
      const { data, content } = matter(raw);

      return {
        slug,
        title:       data.title      ?? "Untitled",
        description: data.excerpt    ?? data.description ?? "",
        excerpt:     data.excerpt    ?? "",
        date:        data.date       ?? new Date().toISOString().split("T")[0],
        author:      data.author     ?? "Creative Wired",
        image:       data.coverImage ?? data.image ?? "",
        coverImage:  data.coverImage ?? "",
        category:    data.category   ?? data.tags?.[0] ?? "General",
        tags:        Array.isArray(data.tags) ? data.tags : [],
        readingTime: readingTime(content).text,
        featured:    data.featured   ?? false,
        draft:       data.draft      ?? false,
        content,
      };
    })
    .filter((p) => !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | null {
  return getAllPosts().find((p) => p.slug === slug) ?? null;
}

// Keep old exports for any existing pages that still use them
export const getAllBlogs  = getAllPosts;
export const getPostBySlug_ = getPostBySlug;