/** @type {import('next').NextConfig} */
const nextConfig = {
    // Config for Next.js 15
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    }
};

module.exports = nextConfig;
