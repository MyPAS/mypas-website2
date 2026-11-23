import Link from "next/link";
import { BRAND, CONTACT, FOOTER, LEGAL_NAV, NAV } from "@/content/site";
import { T } from "@/content/ui";
import { ARM_LIST } from "@/lib/arms";
import { href, type Locale } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();
  return (
    <footer className="ftr tone-dark">
      <div className="wrap">
        <div className="ftr__cols">
          <div>
            <p className="h3" style={{ maxWidth: "16ch" }}>
              {locale === "he" ? "כל דרך מובילה " : "Every way to a "}
              <em className="hl">{locale === "he" ? "לעסק טוב יותר" : "better business"}</em>
            </p>
            <p className="body mt-s">{BRAND.tagline[locale]}</p>
          </div>
          <div>
            <p className="ftr__h">{FOOTER.armsTitle[locale]}</p>
            <ul>
              {ARM_LIST.map((arm) => (
                <li key={arm.id}>
                  <Link href={href(locale, arm.path)}>{arm.name[locale]}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="ftr__h">{FOOTER.siteTitle[locale]}</p>
            <ul>
              {NAV.filter((n) => !ARM_LIST.some((a) => a.path === n.path)).map((item) => (
                <li key={item.path}>
                  <Link href={href(locale, item.path)}>{item.label[locale]}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="ftr__h">{FOOTER.reachTitle[locale]}</p>
            <ul>
              <li>
                <a className="ltr" href="mailto:info@MyPAS.co.il">
                  info@MyPAS.co.il
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phone.href}`} dir="ltr">
                  {CONTACT.phone.display}
                </a>
              </li>
              {CONTACT.bookingUrl ? (
                <li>
                  <a href={CONTACT.bookingUrl} target="_blank" rel="noopener noreferrer">
                    {CONTACT.bookingButton[locale]} ↗
                  </a>
                </li>
              ) : null}
              {CONTACT.linkedinUrl.trim() ? (
                <li>
                  <a href={CONTACT.linkedinUrl} target="_blank" rel="noopener noreferrer">
                    {FOOTER.linkedin[locale]} ↗
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <p className="ftr__mark" aria-hidden="true">
          MyPAS
        </p>

        <div className="ftr__bottom">
          <span>
            © {year} {BRAND.groupName[locale]}. {T.rights[locale]}.
          </span>
          <nav className="ftr__legal" aria-label={FOOTER.legalTitle[locale]}>
            {LEGAL_NAV.map((item) => (
              <Link key={item.path} href={href(locale, item.path)}>
                {item.label[locale]}
              </Link>
            ))}
          </nav>
          <a href="#top" className="link">
            {T.backTop[locale]} ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
