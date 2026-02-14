/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export', // <=== enables static exports
  // Optional: Configure basePath and assetPrefix for the GitHub Pages subpath URL
  basePath: '/gestxr.github.io',
  assetPrefix: '/gestxr.github.io/',
};

export default nextConfig;
