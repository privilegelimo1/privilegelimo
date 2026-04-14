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

export type Frontmatter = {
  title?: string;
  date?: string;
  excerpt?: string;
  description?: string;
  author?: string;
  image?: string;
  coverImage?: string;
  category?: string;
  tags?: string[];
  featured?: boolean;
  draft?: boolean;
  [key: string]: unknown;
};

export function parseFrontmatter(source: string): { content: string } & Frontmatter {
  const { data, content } = matter(source);
  return { ...(data as Frontmatter), content };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
      const parsed = parseFrontmatter(raw);

      return {
        slug,
        title:       parsed.title       ?? "Untitled",
        description: parsed.excerpt     ?? parsed.description ?? "",
        excerpt:     parsed.excerpt     ?? "",
        date:        parsed.date        ?? new Date().toISOString().split("T")[0],
        author:      parsed.author      ?? "Privilege Limo",
        image:       parsed.coverImage  ?? parsed.image ?? "",
        coverImage:  parsed.coverImage  ?? "",
        category:    parsed.category    ?? parsed.tags?.[0] ?? "General",
        tags:        Array.isArray(parsed.tags) ? parsed.tags : [],
        readingTime: readingTime(parsed.content).text,
        featured:    parsed.featured    ?? false,
        draft:       parsed.draft       ?? false,
        content:     parsed.content,
      };
    })
    .filter((p) => !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | null {
  return getAllPosts().find((p) => p.slug === slug) ?? null;
}

// Keep old exports for any existing pages that still use them
export const getAllBlogs     = getAllPosts;
export const getPostBySlug_ = getPostBySlug;
export const getPublishedBlogs = getAllPosts;