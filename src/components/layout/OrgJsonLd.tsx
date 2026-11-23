import { BRAND, CONTACT } from "@/content/site";
import { ARM_LIST } from "@/lib/arms";
import { href, type Locale } from "@/lib/i18n";
import { SITE_URL } from "@/lib/metadata";

/**
 * Organization structured data for the home page. Everything in here is a
 * fact already published elsewhere on the site — no invented address,
 * founding date or employee count, since a wrong value in structured data is
 * worse than a missing one.
 */
export default function OrgJsonLd({ locale }: { locale: Locale }) {
  const url = new URL(href(locale, "/"), SITE_URL).toString();
  const linkedin = CONTACT.linkedinUrl.trim();

  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND.name,
    alternateName: BRAND.groupName[locale],
    url,
    logo: new URL("/logo.png", SITE_URL).toString(),
    image: new URL("/og/home.png", SITE_URL).toString(),
    email: CONTACT.defaultEmail,
    telephone: CONTACT.phone.href,
    ...(linkedin ? { sameAs: [linkedin] } : {}),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: CONTACT.phone.href,
        email: CONTACT.defaultEmail,
        availableLanguage: ["he", "en"],
      },
    ],
    subOrganization: ARM_LIST.map((arm) => ({
      "@type": "Organization",
      name: arm.name[locale],
      url: new URL(href(locale, arm.path), SITE_URL).toString(),
      description: arm.description[locale],
    })),
  };

  return (
    <script
      type="application/ld+json"
      /* JSON.stringify output is data we just built, not user input */
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
