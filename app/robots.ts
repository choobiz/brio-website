import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://builtbybrio.com/sitemap.xml",
    host: "https://builtbybrio.com",
  };
}
