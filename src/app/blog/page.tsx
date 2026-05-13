import Link from 'next/link';
import { getAllPosts, getAllCategories } from '../../../lib/wordpress';
import styles from './Blog.module.css';

export default async function BlogPage() {
  let posts = [];
  let categories = [];

  try {
    [posts, categories] = await Promise.all([
      getAllPosts(),
      getAllCategories(),
    ]);
  } catch (err) {
    console.error('Blog fetch error:', err);
  }

  return (
    <main className={styles.main}>

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

      {/* Category filters */}
      {categories.length > 0 && (
        <div className={styles.filters}>
          <Link href="/blog" className={styles.filterBtn}>All</Link>
          {categories.map(cat => (
            <Link
              key={cat.id}
              href={`/blog/category/${cat.slug}`}
              className={styles.filterBtn}
            >
              {cat.name}
              <span className={styles.filterCount}>{cat.count}</span>
            </Link>
          ))}
        </div>
      )}

      {/* Posts grid */}
      {posts.length === 0 ? (
        <p className={styles.empty}>No posts published yet.</p>
      ) : (
        <div className={styles.grid}>
          {posts.map((post, i) => (
            <article
              key={post.id}
              className={`${styles.card} ${i === 0 ? styles.cardFeatured : ''}`}
            >
              {post.featuredImage && (
                <div className={styles.cardImg}>
                  <img
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.featuredImage.node.altText || post.title}
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              )}
              <div className={styles.cardBody}>
                {post.categories.nodes[0] && (
                  <span className={styles.cardCat}>
                    {post.categories.nodes[0].name}
                  </span>
                )}
                <h2 className={styles.cardTitle}>
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <div
                  className={styles.cardExcerpt}
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />
                <div className={styles.cardMeta}>
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