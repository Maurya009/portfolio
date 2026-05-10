/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.jsdelivr.net' },
    ],
  },
  compiler: {
    removeConsole: true,
  },
}
module.exports = nextConfig
