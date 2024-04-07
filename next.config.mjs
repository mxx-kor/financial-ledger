/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";

const isProduct = process.env.NODE_ENV === "production";

const withNextPWA = withPWA({
  dest: "public",
  disable: isProduct ? false : true,
});

const nextConfig = {
  reactStrictMode: true,
};

export default withNextPWA(nextConfig);
