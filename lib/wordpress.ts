const WP_GRAPHQL_URL = process.env.NEXT_PUBLIC_WP_GRAPHQL_URL 
  || 'https://dillonbird.infinityfreeapp.com/graphql';

async function fetchGraphQL(query: string, variables = {}) {
  try {
    const res = await fetch(WP_GRAPHQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
    });

    const text = await res.text();

    // Debug — remove after fixing
    console.log('GraphQL response:', text.substring(0, 200));

    if (!res.ok) {
      console.error('GraphQL HTTP error:', res.status);
      return null;
    }

    const data = JSON.parse(text);
    return data.data;

  } catch (err) {
    console.error('GraphQL fetch error:', err);
    return null;
  }
}

export async function getAllPosts() {
  const data = await fetchGraphQL(`
    query AllPosts {
      posts(first: 100, where: { status: PUBLISH }) {
        nodes {
          id
          title
          slug
          date
          excerpt
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          categories {
            nodes { name slug }
          }
          author {
            node { name }
          }
        }
      }
    }
  `);
  return data?.posts?.nodes || [];
}

export async function getPostBySlug(slug: string) {
  const data = await fetchGraphQL(`
    query PostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id
        title
        content
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes { name slug }
        }
        author {
          node {
            name
            avatar { url }
          }
        }
      }
    }
  `, { slug });
  return data?.post;
}

export async function getAllCategories() {
  const data = await fetchGraphQL(`
    query AllCategories {
      categories(where: { hideEmpty: true }) {
        nodes {
          id
          name
          slug
          count
        }
      }
    }
  `);
  return data?.categories?.nodes || [];
}

export async function getPostsByCategory(categorySlug: string) {
  const data = await fetchGraphQL(`
    query PostsByCategory($slug: String!) {
      posts(where: { categoryName: $slug, status: PUBLISH }) {
        nodes {
          id
          title
          slug
          date
          excerpt
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          categories {
            nodes { name slug }
          }
          author {
            node { name }
          }
        }
      }
    }
  `, { slug: categorySlug });
  return data?.posts?.nodes || [];
}