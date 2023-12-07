/** @type {import('next').NextConfig} */
const nextConfig = {
  
  images: {
    
 
    remotePatterns: [

      
        {
            protocol: 'https',
            hostname: 'm.media-amazon.com',
            port: '',
            pathname: '**',
        },
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