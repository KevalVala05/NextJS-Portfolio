/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   webpack: (config, { dev, isServer }) => {
//     if (dev && !isServer) {
//       config.watchOptions = {
//         poll: 1000,
//         aggregateTimeout: 300,
//       };
//     }
//     return config;
//   },
// };

// module.exports = nextConfig;
