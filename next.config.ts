import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Redirect old static-export paths and section URLs to the homepage
  async redirects() {
    return [
      // /index.html was the old static export entry point
      {
        source: "/index.html",
        destination: "/",
        permanent: true, // 308
      },
      // Hash-fragment sections that Google may try to crawl as paths
      {
        source: "/approach",
        destination: "/#approach",
        permanent: true,
      },
      {
        source: "/pipeline",
        destination: "/#pipeline",
        permanent: true,
      },
      {
        source: "/publications",
        destination: "/#publications",
        permanent: true,
      },
      {
        source: "/gdf11-science",
        destination: "/#gdf11-science",
        permanent: true,
      },
      {
        source: "/team",
        destination: "/#team",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/#contact",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/#approach",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/unmet-need",
        destination: "/#unmet-need",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
