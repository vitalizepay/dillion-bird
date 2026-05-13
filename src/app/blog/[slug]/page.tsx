import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '../../../../lib/wordpress';
import styles from './BlogPost.module.css';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  return {
    title: `${post?.title} | Dillon & Bird`,
    description: post?.excerpt?.replace(/<[^>]+>/g, '') || '',
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return (
      <main style={{ textAlign: 'center', padding: '80px 24px' }}>
        <h1>Post not found</h1>
        <Link href="/blog">← Back to Blog</Link>
      </main>
    );
  }

  return (
    <main className={styles.main}>

      {/* Back link */}
      <Link href="/blog" className={styles.back}>
        ← Back to Blog
      </Link>

      {/* Header */}
      <section className={styles.header}>
        {post.categories.nodes[0] && (
          <span className={styles.cat}>
            {post.categories.nodes[0].name}
          </span>
        )}
        <h1 className={styles.h1}>{post.title}</h1>
        <div className={styles.meta}>
          {post.author.node.avatar && (
            <img
              src={post.author.node.avatar.url}
              alt={post.author.node.name}
              className={styles.avatar}
            />
          )}
          <span>{post.author.node.name}</span>
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

      {/* Featured Image */}
      {post.featuredImage && (
        <div className={styles.featuredImg}>
          <img
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || post.title}
          />
        </div>
      )}

      {/* Content */}
      <article className={styles.article}>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* Back to blog */}
      <div className={styles.footer}>
        <Link href="/blog" className={styles.backBtn}>
          ← Back to All Articles
        </Link>
      </div>

    </main>
  );
}