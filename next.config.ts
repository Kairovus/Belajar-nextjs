import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: "incremental",
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oduazxrrwygcxxidnjhy.supabase.co",
        pathname: "/storage/v1/object/public/supabucket/customers/**",
      },
    ],
  },
};

export default nextConfig;
