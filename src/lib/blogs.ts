import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOGS_DIR = path.join(process.cwd(), "content/blogs");

export type BlogMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  image: string;
  imageAlt: string;
  readingTime: string;
  published: boolean;
  // SEO
  seoTitle: string;
  seoDescription: string;
  canonicalUrl: string;
  ogImage: string;
  noIndex: boolean;
  focusKeyword: string;
  keywords: string[];
};

export type BlogPost = BlogMeta & { content: string };

export function getAllBlogs(): BlogMeta[] {
  if (!fs.existsSync(BLOGS_DIR)) return [];
  const files = fs.readdirSync(BLOGS_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const raw = fs.readFileSync(path.join(BLOGS_DIR, file), "utf-8");
      const { data } = matter(raw);
      const rt = readingTime(raw);
      return {
        slug,
        title: data.title || "",
        description: data.description || "",
        date: data.date || "",
        author: data.author || "Privilege Limo",
        category: data.category || "General",
        tags: data.tags || [],
        image: data.image || "",
        imageAlt: data.imageAlt || data.title || "",
        readingTime: rt.text,
        published: data.published !== false,
        seoTitle: data.seoTitle || data.title || "",
        seoDescription: data.seoDescription || data.description || "",
        canonicalUrl: data.canonicalUrl || `https://privilegelimo.com/blog/${slug}`,
        ogImage: data.ogImage || data.image || "",
        noIndex: data.noIndex || false,
        focusKeyword: data.focusKeyword || "",
        keywords: data.keywords || [],
      } as BlogMeta;
    })
    .filter((b) => b.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOGS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const rt = readingTime(raw);
  return {
    slug,
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",
    author: data.author || "Privilege Limo",
    category: data.category || "General",
    tags: data.tags || [],
    image: data.image || "",
    imageAlt: data.imageAlt || data.title || "",
    readingTime: rt.text,
    published: data.published !== false,
    seoTitle: data.seoTitle || data.title || "",
    seoDescription: data.seoDescription || data.description || "",
    canonicalUrl: data.canonicalUrl || `https://privilegelimo.com/blog/${slug}`,
    ogImage: data.ogImage || data.image || "",
    noIndex: data.noIndex || false,
    focusKeyword: data.focusKeyword || "",
    keywords: data.keywords || [],
    content,
  };
}