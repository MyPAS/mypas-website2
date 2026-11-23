import { notFound } from "next/navigation";
import Shell from "@/components/layout/Shell";
import LegalDoc from "@/components/sections/LegalDoc";
import { accessibility } from "@/content/legal";
import { GROUP_THEME } from "@/lib/arms";
import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: PageProps<"/[lang]/accessibility">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return buildMetadata({
    locale: lang,
    path: "/accessibility",
    title: { he: `${accessibility.title.he} — MyPAS`, en: `${accessibility.title.en} — MyPAS` },
    description: accessibility.intro,
  });
}

export default async function Page({ params }: PageProps<"/[lang]/accessibility">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <Shell locale={lang} path="/accessibility" theme={GROUP_THEME}>
      <LegalDoc doc={accessibility} locale={lang} />
    </Shell>
  );
}
