/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";

const withNextPWA = withPWA({
  dest: "public",
});

const nextConfig = {
  reactStrictMode: true,
};

export default withNextPWA(nextConfig);
