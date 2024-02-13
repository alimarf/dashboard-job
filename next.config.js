/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "epxwqqbowczruvmwdcde.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
