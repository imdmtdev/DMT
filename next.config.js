/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/DMT',
  trailingSlash: true,
}

module.exports = nextConfig
