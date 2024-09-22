/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        icon: true, // Optional: enables SVG to be used as icons (makes the size inherit from parent element)
                    },
                },
            ],
        });

        return config;
    },
};

export default nextConfig;
