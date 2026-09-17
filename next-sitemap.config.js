/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://dillonbird.com',
  outDir: './out',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  // The homepage is served from public/index.html rather than an app route,
  // so next-sitemap cannot discover it. Without this the most important URL
  // on the site is missing from the sitemap.
  additionalPaths: async (config) => [await config.transform(config, '/')],
};
