import type { MetadataRoute } from "next";
import { PROJECTS } from "@/content/projects";
import { LEGAL_NAV, NAV } from "@/content/site";
import { href, LOCALES } from "@/lib/i18n";
import { SITE_URL } from "@/lib/metadata";

const absolute = (path: string) => new URL(path, SITE_URL).toString();

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const paths = [
    ...NAV.map((item) => item.path),
    ...PROJECTS.map((project) => `/projects/${project.slug}`),
    ...LEGAL_NAV.map((item) => item.path),
  ];

  return paths.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: absolute(href(locale, path)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority:
        path === "/"
          ? 1
          : LEGAL_NAV.some((item) => item.path === path)
            ? 0.2
            : path.startsWith("/projects/")
              ? 0.6
              : 0.8,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((code) => [code, absolute(href(code, path))]),
        ),
      },
    })),
  );
}
