import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Pricing was retired; what we offer is described on the services page.
      { source: '/pricing', destination: '/services', permanent: false },
      // The old per-service pages collapsed into one services page.
      { source: '/services/:slug', destination: '/services', permanent: false },
      // Careers was retired.
      { source: '/careers', destination: '/about', permanent: false },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/ingest/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://us.i.posthog.com/:path*',
      },
      {
        source: '/ingest/decide',
        destination: 'https://us.i.posthog.com/decide',
      },
    ];
  },
};

export default nextConfig;
