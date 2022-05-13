/** @type {import('next').NextConfig} */
module.exports = {
  // 严格模式
  reactStrictMode: true,
  // 相对路径部署
  assetPrefix: '.',
  // webpack 配置
  webpack(config) {
    // svg loader
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}
