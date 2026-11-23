import type { CSSProperties, ReactNode } from "react";
import { UI } from "@/content/site";
import type { Theme } from "@/lib/arms";
import type { Locale } from "@/lib/i18n";
import Footer from "./Footer";
import Header from "./Header";
import Reveal from "./Reveal";

export default function Shell({
  locale,
  path,
  theme,
  overDark = false,
  children,
}: {
  locale: Locale;
  path: string;
  theme: Theme;
  overDark?: boolean;
  children: ReactNode;
}) {
  const vars = {
    "--accent": theme.accent,
    "--accent-light": theme.accentLight,
    "--accent-soft": theme.accentSoft,
    "--hl": theme.accent,
  } as CSSProperties;

  return (
    <div id="top" style={vars}>
      <a className="skip" href="#main">
        {UI.skipToContent[locale]}
      </a>
      <Header locale={locale} path={path} overDark={overDark} />
      <main id="main">{children}</main>
      <Footer locale={locale} />
      <Reveal />
    </div>
  );
}
