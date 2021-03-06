// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pageExtensions: ['mdx', 'md', 'jsx', 'tsx', 'api.ts'],
  swcMinify: true,
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
    esmExternals: false
  },
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
