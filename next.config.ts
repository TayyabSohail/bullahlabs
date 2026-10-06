import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Pricing was retired with the Conscious AI repositioning.
      { source: '/pricing', destination: '/conscious-ai', permanent: false },
      // Services and careers were retired when the company became program-only.
      { source: '/services', destination: '/conscious-ai', permanent: false },
      {
        source: '/services/:slug',
        destination: '/conscious-ai',
        permanent: false,
      },
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
