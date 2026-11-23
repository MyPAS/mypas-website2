"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BRAND, CONTACT, NAV, UI } from "@/content/site";
import { T } from "@/content/ui";
import { href, type Locale } from "@/lib/i18n";
import { Arrow, idx } from "@/components/ui/primitives";

export default function Header({
  locale,
  path,
  overDark = false,
}: {
  locale: Locale;
  path: string;
  overDark?: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const last = useRef(0);
  const burger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 480 && y > last.current + 4);
      if (y < last.current - 4 || y < 480) setHidden(false);
      last.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        burger.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const other: Locale = locale === "he" ? "en" : "he";
  const isActive = (p: string) =>
    p === "/" ? path === "/" : path === p || path.startsWith(`${p}/`);

  const cls = [
    "hdr",
    scrolled || open ? "is-scrolled" : "",
    hidden && !open ? "is-hidden" : "",
    overDark ? "hdr--over-dark" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header className={cls}>
        <div className="wrap">
          <div className="hdr__bar">
            <Link href={href(locale, "/")} className="brand" aria-label={BRAND.groupName[locale]}>
              <Image src="/logo.png" alt="" width={30} height={30} priority />
              <span>MyPAS</span>
              <span className="brand__group">GROUP</span>
            </Link>

            <nav className="nav" aria-label={T.menu[locale]}>
              {NAV.map((item) => (
                <Link
                  key={item.path}
                  href={href(locale, item.path)}
                  aria-current={isActive(item.path) ? "page" : undefined}
                >
                  {item.label[locale]}
                </Link>
              ))}
            </nav>

            <div className="hdr__actions">
              <Link
                className="lang"
                href={href(other, path)}
                hrefLang={other}
                lang={other}
                aria-label={`${UI.langLabel[locale]}: ${other === "he" ? "עברית" : "English"}`}
              >
                {other === "he" ? "עב" : "EN"}
              </Link>
              <a className="btn" href="#contact">
                {UI.talkToUs[locale]}
                <Arrow />
              </a>
              <button
                ref={burger}
                type="button"
                className="burger"
                aria-expanded={open}
                aria-controls="menu"
                aria-label={open ? T.close[locale] : T.menu[locale]}
                onClick={() => setOpen((v) => !v)}
              >
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div id="menu" className={`menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label={T.menu[locale]}>
          {NAV.map((item, i) => (
            <Link
              key={item.path}
              className="menu__item"
              href={href(locale, item.path)}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              <span className="mono">{idx(i + 1)}</span>
              {item.label[locale]}
            </Link>
          ))}
        </nav>
        <div className="menu__foot">
          <span style={{ display: "grid", gap: 4 }}>
            <a href={`mailto:${CONTACT.defaultEmail}`} tabIndex={open ? 0 : -1} className="ltr">
              {CONTACT.defaultEmail}
            </a>
            <a href={`tel:${CONTACT.phone.href}`} tabIndex={open ? 0 : -1} dir="ltr">
              {CONTACT.phone.display}
            </a>
          </span>
          {CONTACT.bookingUrl ? (
            <a
              className="btn btn--accent"
              href={CONTACT.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
            >
              {CONTACT.bookingButton[locale]}
              <Arrow />
            </a>
          ) : null}
        </div>
      </div>
    </>
  );
}
