import { notFound } from "next/navigation";
import Shell from "@/components/layout/Shell";
import LegalDoc from "@/components/sections/LegalDoc";
import { privacy } from "@/content/legal";
import { GROUP_THEME } from "@/lib/arms";
import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return buildMetadata({
    locale: lang,
    path: "/privacy",
    title: { he: `${privacy.title.he} — MyPAS`, en: `${privacy.title.en} — MyPAS` },
    description: privacy.intro,
  });
}

export default async function Page({ params }: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <Shell locale={lang} path="/privacy" theme={GROUP_THEME}>
      <LegalDoc doc={privacy} locale={lang} />
    </Shell>
  );
}
