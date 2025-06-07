import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'cms-static.asics.com',
      },
      {
        // This is the new one we are adding now
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com', 
      },
    ],
  },
};

export default nextConfig;