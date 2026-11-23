import type { Metadata, Viewport } from "next";
import { Frank_Ruhl_Libre, IBM_Plex_Mono, Noto_Sans_Hebrew } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { dir, isLocale, LOCALES } from "@/lib/i18n";
import { SITE_URL } from "@/lib/metadata";

const sans = Noto_Sans_Hebrew({
  subsets: ["hebrew", "latin"],
  axes: ["wdth"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  variable: "--font-serif",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "MyPAS", template: "%s" },
};

export const viewport: Viewport = {
  themeColor: "#f3f2ee",
  colorScheme: "light",
};

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      dir={dir(lang)}
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
