import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*'
      }
    ]
  },
  ppr: 'incremental',
  devIndicators: {
    appIsrStatus: true, 
    buildActivity: true,
    buildActivityPosition: 'bottom-right'
  }
};

export default nextConfig;
