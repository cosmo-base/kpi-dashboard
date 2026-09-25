/** @type {import('next').NextConfig} */
// GitHub Pages のプロジェクトサイトとして https://cosmo-base.github.io/kpi-dashboard/ 配下で
// 配信されるため、全アセットのパスにこのサブパスを付与する必要がある。
const basePath = '/kpi-dashboard';

const nextConfig = {
  output: 'export',
  basePath,
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