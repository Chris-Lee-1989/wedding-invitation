/** @type {import('next').NextConfig} */

import pwa from 'next-pwa';
const prod = process.env.NODE_ENV === 'production';
const withPWA = pwa({
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching: [],
    disable: prod ? false : true
});

const nextConfig = {
    reactStrictMode: false,
};

export default withPWA(nextConfig);
