/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [],
    unoptimized: true,
  },
  experimental: {
    // Branded 404 shared by both root layouts ((es) and /en)
    globalNotFound: true,
  },
};

export default nextConfig;
