/** @type {import('next').NextConfig} */
const nextConfig = {
distDir: 'build',
server: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: 80,      // Specify the desired port
  },
}

module.exports = nextConfig
