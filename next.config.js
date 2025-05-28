/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Configure paths for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/next-cv-main' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/next-cv-main/' : '',
}

module.exports = nextConfig
