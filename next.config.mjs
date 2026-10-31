/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Allows serving local assets reliably and static exports if needed
  },
};

export default nextConfig;
