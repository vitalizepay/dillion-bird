import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const POSTS_DIR = path.join(process.cwd(), 'content/blog');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  author: string;
}

export interface Post extends PostMeta {
  contentHtml: string;
}

export interface Category {
  name: string;
  slug: string;
  count: number;
}

function readPostFile(filename: string): { meta: PostMeta; content: string } {
  const raw = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf8');
  const { data, content } = matter(raw);
  return {
    meta: {
      slug: filename.replace(/\.md$/, ''),
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      category: data.category,
      categorySlug: data.categorySlug,
      author: data.author || 'Dillon & Bird',
    },
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter(f => f.endsWith('.md'))
    .map(f => readPostFile(f).meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const { meta, content } = readPostFile(`${slug}.md`);
  return { ...meta, contentHtml: marked.parse(content, { async: false }) };
}

export function getAllCategories(): Category[] {
  const categories = new Map<string, Category>();
  for (const post of getAllPosts()) {
    const existing = categories.get(post.categorySlug);
    if (existing) {
      existing.count++;
    } else {
      categories.set(post.categorySlug, { name: post.category, slug: post.categorySlug, count: 1 });
    }
  }
  return Array.from(categories.values());
}

export function getPostsByCategory(categorySlug: string): PostMeta[] {
  return getAllPosts().filter(p => p.categorySlug === categorySlug);
}
