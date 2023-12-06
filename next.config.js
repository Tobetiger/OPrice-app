/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
  
    serverComponentsExternalPackages: ['mongoose']
  },
  images: {
    domains:['m.media-amazon.com'],
 
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',
            pathname: '/a/**',
        },
        {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
            port: '',
            pathname: '/u/**',
        },
    ],
},

}

module.exports = nextConfig