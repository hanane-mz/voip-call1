/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.clerk.com'], // Ajoutez ici tous les domaines nécessaires
  },
};

module.exports = nextConfig;
