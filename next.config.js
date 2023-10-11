/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "aws-chicken.s3.ap-southeast-1.amazonaws.com",
      "localhost",
      "127.0.0.1",
    ],
  },
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
};

module.exports = nextConfig;
