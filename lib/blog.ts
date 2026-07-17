import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const POSTS_DIR = path.join(process.cwd(), 'content/blog');

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  seoTitle?: string;
  date: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  author: string;
  faq?: FaqItem[];
}

export interface Post extends PostMeta {
  contentHtml: string;
}

function readPostFile(filename: string): { meta: PostMeta; content: string } {
  const raw = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf8');
  const { data, content } = matter(raw);
  return {
    meta: {
      slug: filename.replace(/\.md$/, ''),
      title: data.title,
      seoTitle: data.seoTitle,
      date: data.date,
      excerpt: data.excerpt,
      category: data.category,
      categorySlug: data.categorySlug,
      author: data.author || 'Dillon & Bird',
      faq: data.faq,
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
