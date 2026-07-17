import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '../../../lib/blog';
import styles from './Blog.module.css';

export const metadata: Metadata = {
  title: 'Blog | Dillon & Bird',
  description: 'Expert insights on business strategy, market entry, finance and growth across the GCC — from the Dillon & Bird team.',
  keywords: ['Dillon & Bird Blog', 'GCC Business Insights', 'UAE Market Entry', 'GCC Strategy Blog'],
  openGraph: {
    title: 'Blog | Dillon & Bird',
    description: 'Expert insights on business strategy, market entry, finance and growth across the GCC.',
    type: 'website',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'The Dillon & Bird Blog',
    url: 'https://dillonbird.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Dillon & Bird',
      logo: {
        '@type': 'ImageObject',
        url: 'https://dillonbird.com/t-logo.png',
      },
    },
    blogPost: posts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `https://dillonbird.com/blog/${post.slug}`,
      datePublished: post.date,
    })),
  };

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.eyebrow}>
          <span className={styles.rule} />
          <span>Insights & Ideas</span>
        </div>
        <h1 className={styles.h1}>
          The Dillon &amp; Bird <em>Blog</em>
        </h1>
        <p className={styles.sub}>
          Expert insights on business strategy, market entry,
          finance and growth across the GCC.
        </p>
      </section>

      {/* Posts grid */}
      {posts.length === 0 ? (
        <p className={styles.empty}>No posts published yet.</p>
      ) : (
        <div className={styles.grid}>
          {posts.map((post, i) => (
            <article
              key={post.slug}
              className={`${styles.card} ${i === 0 ? styles.cardFeatured : ''}`}
            >
              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                <div className={styles.cardMeta}>
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
                <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}

    </main>
  );
}
