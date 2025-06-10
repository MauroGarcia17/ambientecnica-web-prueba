/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '/lrigu76hy/**', // ¡Usa ** para subcarpetas!
      },
    ],
  },
};
module.exports = nextConfig;