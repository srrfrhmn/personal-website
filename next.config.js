/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  turbopack: {
    resolveAlias: {
      // Drop Next.js's legacy polyfills (flagged by Lighthouse as legacy JavaScript).
      '../build/polyfills/polyfill-module': './src/lib/empty-polyfills.js',
    },
  },
  async redirects() {
    return ['career', 'gallery', 'blog'].map((section) => ({
      source: `/${section}`, destination: `/#${section}`, permanent: false,
    }))
  },
}
