/** @type {import('next').NextConfig} */
// GitHub Pages のプロジェクトサイトとして https://cosmo-base.github.io/kpi-dashboard/ 配下で
// 配信されるため、全アセットのパスにこのサブパスを付与する必要がある。
const basePath = '/kpi-dashboard';

const nextConfig = {
  output: 'export',
  // GitHub Actions の actions/configure-pages@v5 が next.config.mjs 内の
  // basePath 指定を文字列置換で書き換えようとするため、ショートハンド記法
  // （`basePath,`）だとキー名ごと壊れてしまう。明示的な key: value で書く。
  basePath: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig