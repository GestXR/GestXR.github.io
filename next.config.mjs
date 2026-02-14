/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export', // <=== enables static exports
  distDir: 'build'
};

export default nextConfig;
