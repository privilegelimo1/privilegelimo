import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOGS_DIR = path.join(process.cwd(), "content/blogs");

export type BlogFrontmatter = {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  featuredImage: string;
  featuredImageAlt: string;
  draft: boolean;
  seo: {
    metaTitle: string;
    metaDescription: string;
    canonical: string;
    keywords: string;
    ogImage: string;
    index: boolean;
  };
};

export type BlogPost = BlogFrontmatter & {
  content: string;
  readingTime: string;
};

export function getBlogSlugs() {
  if (!fs.existsSync(BLOGS_DIR)) return [];
  return fs.readdirSync(BLOGS_DIR).filter((file) => file.endsWith(".mdx"));
}

export function getBlogBySlug(slug: string): BlogPost | null {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(BLOGS_DIR, `${realSlug}.mdx`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    ...(data as BlogFrontmatter),
    content,
    readingTime: readingTime(content).text,
  };
}

export function getAllBlogs(): BlogPost[] {
  const slugs = getBlogSlugs();

  const posts = slugs
    .map((slug) => getBlogBySlug(slug))
    .filter(Boolean) as BlogPost[];

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPublishedBlogs(): BlogPost[] {
  return getAllBlogs().filter((post) => !post.draft);
}