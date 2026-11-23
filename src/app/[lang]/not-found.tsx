import Link from "next/link";
import type { CSSProperties } from "react";
import { MiniCube } from "@/components/ui/IsoCube";
import { Arrow } from "@/components/ui/primitives";
import { CONTACT, NAV } from "@/content/site";
import { T } from "@/content/ui";
import { ARM_LIST } from "@/lib/arms";
import { href, type Locale } from "@/lib/i18n";

/**
 * not-found.tsx receives no params, so it cannot know the visitor's language.
 * Both languages are shown — each block carries its own lang/dir.
 */
function Block({ locale }: { locale: Locale }) {
  return (
    <section lang={locale} dir={locale === "he" ? "rtl" : "ltr"} className="nf__block">
      <h2 className="h2">{T.notFoundTitle[locale]}</h2>
      <p className="lead mt-s">{T.notFoundBody[locale]}</p>
      <ul className="nf__links">
        {[NAV[0], ...ARM_LIST.map((a) => ({ path: a.path, label: a.name })), NAV[4]].map((item) => (
          <li key={item.path}>
            <Link href={href(locale, item.path)} className="link">
              {item.label[locale]}
              <Arrow />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function NotFound() {
  return (
    <main id="main" className="nf">
      <div className="isogrid" aria-hidden="true" />
      <div className="wrap nf__wrap">
        <Link href="/" className="brand" aria-label="MyPAS">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="" width={30} height={30} />
          <span>MyPAS</span>
        </Link>
        <div className="nf__hero">
          <h1 className="nf__code ltr">
            <span aria-hidden="true">404</span>
            <span className="sr-only">העמוד לא נמצא · Page not found</span>
          </h1>
          <div style={{ color: "var(--ink)", width: 120, "--a": "var(--cobalt)" } as CSSProperties}>
            <MiniCube arm="ai" />
          </div>
        </div>
        <div className="nf__grid">
          <Block locale="he" />
          <Block locale="en" />
        </div>
        <p className="nf__contact">
          <a className="link ltr" href={`mailto:${CONTACT.defaultEmail}`}>
            {CONTACT.defaultEmail}
          </a>
          <span aria-hidden="true">·</span>
          <a className="link" href={`tel:${CONTACT.phone.href}`} dir="ltr">
            {CONTACT.phone.display}
          </a>
        </p>
      </div>
    </main>
  );
}
