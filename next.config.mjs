/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                hostname: "res.cloudinary.com",
                protocol: "https",
            },
        ],

    }

};

export default nextConfig;
