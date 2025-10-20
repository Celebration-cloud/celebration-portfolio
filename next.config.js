/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.jsdelivr.net",
      "upload.wikimedia.org",
      "cdn-icons-png.flaticon.com",
      "raw.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
