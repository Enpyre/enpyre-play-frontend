/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: '/login/github',
        destination: `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_CLIENT_ID_GITHUB}&scope=user%3Aemail read%3Auser`,
      },
    ];
  },
};

module.exports = nextConfig;
