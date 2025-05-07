import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dileepadev.blob.core.windows.net",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
