/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['mycirclesofcare.com.au'],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // Redirect old long URLs to new clean URLs
      {
        source: '/coordination-of-supports-development-of-life-skills-travel-transport-household-tasks-specialised-disability-accommodation-group-activities-life-stage-transition-personal-activities-an/:path*',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact-2',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
