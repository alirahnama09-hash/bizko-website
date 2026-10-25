import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; img-src 'self' data: blob:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; font-src 'self' data:; connect-src 'self'; frame-ancestors 'self'",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // Avoid generating very large variants (e.g. 3840px) for small logos.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    // Single 301 from www to the canonical apex domain.
    // NOTE: for a truly single hop from http://www.bizko.ir, Liara must also
    // enforce the http -> https redirect at the edge (see deployment notes).
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.bizko.ir" }],
        destination: "https://bizko.ir/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
