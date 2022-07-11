/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // webpack(config, { dev }) {
  //   config.module.rules.push({
  //     test: /\.(js|jsx)$/,
  //     exclude: /node_modules/,
  //     use: {
  //       loader: 'babel-loader',
  //       options: {
  //         presets: ['@babel/preset-env', '@babel/preset-react'],
  //         plugins: ['@babel/plugin-proposal-class-properties'],
  //       },
  //     },
  //   });
  //   if (dev) {
  //     config.devtool = 'cheap-module-source-map';
  //   }
  //   return config;
  // },
  // compiler: {
  //   styledComponents: true,
  // },
};

module.exports = nextConfig;
