import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/metadata";

/**
 * Only the live production deployment invites crawlers. Vercel builds a fresh
 * URL for every branch and every commit; without this, those preview copies
 * compete with the real site in search results for the same content.
 */
const isProduction = process.env.VERCEL_ENV
  ? process.env.VERCEL_ENV === "production"
  : true;

export default function robots(): MetadataRoute.Robots {
  if (!isProduction) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", SITE_URL).toString(),
  };
}
