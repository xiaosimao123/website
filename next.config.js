/** @type {import('next').NextConfig} */
const path = require('path');
const { withContentlayer } = require('next-contentlayer');

const nextConfig = withContentlayer({
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
});

module.exports = nextConfig;
