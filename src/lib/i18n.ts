export const LOCALES = ["he", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "he";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function dir(locale: Locale): "rtl" | "ltr" {
  return locale === "he" ? "rtl" : "ltr";
}

/**
 * Locale aware href.
 * Hebrew (default) keeps clean paths: "/", "/sap"
 * English is prefixed:                "/en", "/en/sap"
 */
export function href(locale: Locale, path: string): string {
  const clean = path === "/" ? "" : path;
  if (locale === DEFAULT_LOCALE) return clean || "/";
  return `/en${clean}`;
}

/** A value that exists in every supported language. */
export type Localized<T> = Record<Locale, T>;
