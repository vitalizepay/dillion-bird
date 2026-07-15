import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '../../../../lib/blog';
import styles from './BlogPost.module.css';

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllPosts().map(post => ({ slug: post.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Blog | Dillon & Bird' };

  return {
    title: `${post.title} | Dillon & Bird`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
    },
  };
}

export default async function BlogPost(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main className={styles.main}>
      <Link href="/blog" className={styles.back}>
        ← Back to Blog
      </Link>

      <section className={styles.header}>
        <span className={styles.cat}>{post.category}</span>
        <h1 className={styles.h1}>{post.title}</h1>
        <div className={styles.meta}>
          <span>{post.author}</span>
          <span className={styles.dot}>·</span>
          <span>
            {new Date(post.date).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </span>
        </div>
      </section>

      <article className={styles.article}>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>

      <div className={styles.footer}>
        <Link href="/blog" className={styles.backBtn}>
          ← Back to All Articles
        </Link>
      </div>
    </main>
  );
}
