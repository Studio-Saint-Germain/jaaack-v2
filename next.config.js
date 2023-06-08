/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'api.jaaack.fr',
            port: '',
            pathname: '/wp-content/uploads/*/*/**',
          },
        ],
    },
    videos: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'api.jaaack.fr',
          port: '',
          pathname: '/wp-content/uploads/*/*/**',
        },
      ],
    }
}

module.exports = nextConfig
