import type { Metadata } from "next";
import { href, LOCALES, type Locale, type Localized } from "./i18n";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mypas.co.il";

/**
 * The picture a link to the site shows in WhatsApp, LinkedIn and Slack.
 * One per arm so a shared arm page is recognisable at a glance; everything
 * else falls back to the group card.
 */
const OG_BY_PATH: Record<string, string> = {
  "/": "/og/home.png",
  "/sap": "/og/sap.png",
  "/finance": "/og/finance.png",
  "/ai": "/og/ai.png",
};

function ogFor(path: string, override?: string) {
  if (override) return override;
  if (OG_BY_PATH[path]) return OG_BY_PATH[path];
  const arm = Object.keys(OG_BY_PATH).find(
    (key) => key !== "/" && path.startsWith(key),
  );
  return arm ? OG_BY_PATH[arm] : "/og/home.png";
}

export function buildMetadata({
  locale,
  path,
  title,
  description,
  image,
}: {
  locale: Locale;
  path: string;
  title: Localized<string>;
  description: Localized<string>;
  /** a project's own screenshot, when it has one */
  image?: string;
}): Metadata {
  const languages = Object.fromEntries(
    LOCALES.map((code) => [code, href(code, path)]),
  );
  const card = ogFor(path, image);

  return {
    metadataBase: new URL(SITE_URL),
    title: title[locale],
    description: description[locale],
    alternates: {
      canonical: href(locale, path),
      languages,
    },
    openGraph: {
      type: "website",
      siteName: "MyPAS",
      locale: locale === "he" ? "he_IL" : "en_US",
      title: title[locale],
      description: description[locale],
      url: href(locale, path),
      images: [{ url: card, width: 1200, height: 630, alt: title[locale] }],
    },
    twitter: {
      card: "summary_large_image",
      title: title[locale],
      description: description[locale],
      images: [card],
    },
  };
}
