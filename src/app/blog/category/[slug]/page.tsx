import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllCategories, getPostsByCategory } from '../../../../../lib/blog';
import styles from '../../Blog.module.css';

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllCategories().map(cat => ({ slug: cat.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const category = getAllCategories().find(c => c.slug === slug);
  if (!category) return { title: 'Blog | Dillon & Bird' };

  return {
    title: `${category.name} | Dillon & Bird Blog`,
    description: `Articles on ${category.name} from the Dillon & Bird team — insights on business strategy and growth across the GCC.`,
  };
}

export default async function BlogCategoryPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const categories = getAllCategories();
  const category = categories.find(c => c.slug === slug);

  if (!category) notFound();

  const posts = getPostsByCategory(slug);

  return (
    <main className={styles.main}>

      <section className={styles.hero}>
        <div className={styles.eyebrow}>
          <span className={styles.rule} />
          <span>Insights & Ideas</span>
        </div>
        <h1 className={styles.h1}>
          {category.name}
        </h1>
        <p className={styles.sub}>
          Articles filed under {category.name} from the Dillon &amp; Bird team.
        </p>
      </section>

      <div className={styles.filters}>
        <Link href="/blog" className={styles.filterBtn}>All</Link>
        {categories.map(cat => (
          <Link
            key={cat.slug}
            href={`/blog/category/${cat.slug}`}
            className={`${styles.filterBtn} ${cat.slug === slug ? styles.filterBtnActive : ''}`}
          >
            {cat.name}
            <span className={styles.filterCount}>{cat.count}</span>
          </Link>
        ))}
      </div>

      {posts.length === 0 ? (
        <p className={styles.empty}>No posts in this category yet.</p>
      ) : (
        <div className={styles.grid}>
          {posts.map((post, i) => (
            <article
              key={post.slug}
              className={`${styles.card} ${i === 0 ? styles.cardFeatured : ''}`}
            >
              <div className={styles.cardBody}>
                <span className={styles.cardCat}>{post.category}</span>
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
