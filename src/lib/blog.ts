import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

// ── Types ──────────────────────────────────────────────────────────────────

export interface Post {
  slug:        string;
  title:       string;
  description: string;
  date:        string;
  author:      string;
  image:       string;
  coverImage:  string;
  category:    string;
  tags:        string[];
  readingTime: string;
  featured:    boolean;
  draft:       boolean;
  content:     string;
}

export type PostMeta = Omit<Post, "content">;

// ── Module-level cache ─────────────────────────────────────────────────────
// In dev, this module stays in memory between requests (Node.js module cache).
// In prod, it's populated once at build time or first request per worker.

let metaCache:    PostMeta[] | null = null;
let contentCache: Map<string, string> = new Map();

// Invalidate cache in dev when files change
function shouldBust(): boolean {
  return process.env.NODE_ENV === "development";
}

// ── Core file reader ───────────────────────────────────────────────────────

function readFileMeta(filename: string): PostMeta {
  const slug = filename.replace(/\.mdx$/, "");
  const raw  = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");

  // Only parse frontmatter — skip full content parse for list views
  const { data: fm, content } = matter(raw);

  // Cache content separately, keyed by slug
  contentCache.set(slug, content);

  return {
  slug,
  title:       fm.title                          ?? "Untitled",
  description: fm.excerpt ?? fm.description      ?? "",
  date:        fm.date                           ?? new Date().toISOString().split("T")[0],
  author:      fm.author                         ?? "Privilege Limo",
  image:       fm.coverImage ?? fm.image         ?? "",
  coverImage:  fm.coverImage                     ?? "",   // ← add this line
  category:    fm.category                       ?? fm.tags?.[0] ?? "General",
  tags:        Array.isArray(fm.tags) ? fm.tags  : [],
  readingTime: readingTime(content).text,
  featured:    fm.featured                       ?? false,
  draft:       fm.draft                          ?? false,
};
}

// ── Public API ─────────────────────────────────────────────────────────────

/**
 * Returns all post metadata (no content body).
 * Result is cached — reads files only once per process lifetime in prod,
 * or once per cold start in dev.
 */
export function getAllPosts(): PostMeta[] {
  if (metaCache && !shouldBust()) return metaCache;

  if (!fs.existsSync(BLOG_DIR)) return [];

  metaCache = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map(readFileMeta)
    .filter((p) => !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return metaCache;
}

/**
 * Returns a single post with full content.
 * Content is cached after first read.
 */
export function getPostBySlug(slug: string): Post | null {
  const file = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;

  // Get meta (from cache or fresh read)
  const allMeta = getAllPosts();
  const meta    = allMeta.find((p) => p.slug === slug);

  // If somehow not in meta cache (e.g. draft), parse fresh
  if (!meta) {
    const raw = fs.readFileSync(file, "utf-8");
    const { data: fm, content } = matter(raw);
    return {
  slug,
  title:       fm.title                          ?? "Untitled",
  description: fm.excerpt ?? fm.description      ?? "",
  date:        fm.date                           ?? new Date().toISOString().split("T")[0],
  author:      fm.author                         ?? "Privilege Limo",
  image:       fm.coverImage ?? fm.image         ?? "",
  coverImage:  fm.coverImage                     ?? "",   // ← add this
  category:    fm.category                       ?? fm.tags?.[0] ?? "General",
  tags:        Array.isArray(fm.tags) ? fm.tags  : [],
  readingTime: readingTime(content).text,
  featured:    fm.featured                       ?? false,
  draft:       fm.draft                          ?? false,
  content,
};
  }

  // Pull content from cache — already parsed during getAllPosts()
  const content = contentCache.get(slug) ?? (() => {
    const raw = fs.readFileSync(file, "utf-8");
    const { content: c } = matter(raw);
    contentCache.set(slug, c);
    return c;
  })();

  return { ...meta, content };
}

/**
 * Explicitly clear cache — call this after creating/updating a post
 * from your admin API routes so the new content is reflected immediately.
 */
export function clearPostCache() {
  metaCache    = null;
  contentCache = new Map();
}

// ── Filtered helpers ───────────────────────────────────────────────────────

export function getFeaturedPosts(): PostMeta[] {
  return getAllPosts().filter((p) => p.featured);
}

export function getPostsByCategory(category: string): PostMeta[] {
  return getAllPosts().filter((p) => p.category === category);
}

export function getPostsByTag(tag: string): PostMeta[] {
  return getAllPosts().filter((p) => p.tags.includes(tag));
}

// ── MDX file builder ───────────────────────────────────────────────────────

export function buildMdx(data: {
  title:      string;
  date:       string;
  excerpt:    string;
  tags:       string | string[];
  author:     string;
  category?:  string;
  coverImage: string;
  featured?:  boolean;
  content:    string;
}): string {
  const tagsArr = Array.isArray(data.tags)
    ? data.tags
    : data.tags.split(",").map((t) => t.trim()).filter(Boolean);

  const lines = [
    "---",
    `title: "${data.title.replace(/"/g, '\\"')}"`,
    `date: "${data.date}"`,
    data.excerpt    ? `excerpt: "${data.excerpt.replace(/"/g, '\\"')}"` : "",
    tagsArr.length  ? `tags: [${tagsArr.map((t) => `"${t}"`).join(", ")}]` : "",
    data.author     ? `author: "${data.author}"` : "",
    data.category   ? `category: "${data.category}"` : "",
    data.coverImage ? `coverImage: "${data.coverImage}"` : "",
    data.featured   ? `featured: true` : "",
    "---",
  ].filter(Boolean);

  return `${lines.join("\n")}\n\n${data.content}`;
}

// ── Legacy aliases ─────────────────────────────────────────────────────────

export const getAllBlogs       = getAllPosts;
export const getPublishedBlogs = getAllPosts;