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
  // PostHog EU cloud, proxied through our own domain so ad blockers drop
  // fewer events. The legal pages promise EU processing: keep these on eu.
  async rewrites() {
    return [
      {
        source: '/ingest/static/:path*',
        destination: 'https://eu-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://eu.i.posthog.com/:path*',
      },
    ];
  },
  // PostHog API paths end in a slash; don't let Next redirect them away.
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
