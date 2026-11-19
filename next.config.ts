import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  cacheLife: {
    'dev-default': {
      stale: 0,
      revalidate: 10,
      expire: 10,
    },
  },
  distDir: 'out',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
