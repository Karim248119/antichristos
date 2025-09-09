import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  swcMinify: false,
  transpilePackages: [
    "api",
    "react-tilt",
    "@react-three/fiber",
    "@react-three/drei",
  ],
};

export default nextConfig;
