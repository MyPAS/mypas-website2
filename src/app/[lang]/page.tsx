import { notFound } from "next/navigation";
import Shell from "@/components/layout/Shell";
import { ArmIndex, Clients, HomeHero, Statement } from "@/components/sections/home";
import OrgJsonLd from "@/components/layout/OrgJsonLd";
import { Contact, Org, ProjectsSection } from "@/components/sections/shared";
import { SectionHead } from "@/components/ui/primitives";
import { armsHead, clientsHead, homeHero, stripSub, stripTitle, teamHead } from "@/content/home";
import { PROJECTS, projectsHead } from "@/content/projects";
import { CLIENTS } from "@/content/clients";
import { CONTACT } from "@/content/site";
import { GROUP_THEME } from "@/lib/arms";
import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

const title = {
  he: "קבוצת MyPAS — כל דרך מובילה לעסק טוב יותר",
  en: "MyPAS Group — Every Way to a Better Business",
};

export async function generateMetadata({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return buildMetadata({ locale: lang, path: "/", title, description: homeHero.lead });
}

/** Featured order on the home page: the strongest visuals lead the bento. */
const FEATURED = [
  "agent-marketplace",
  "finance-platform",
  "israel-invoices",
  "sap-mcp",
  "ai-hub",
  "vendor-onboarding",
];

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const featured = FEATURED.map((slug) => PROJECTS.find((p) => p.slug === slug)!).filter(Boolean);

  return (
    <Shell locale={lang} path="/" theme={GROUP_THEME}>
      <OrgJsonLd locale={lang} />
      <HomeHero hero={homeHero} locale={lang} />

      <Clients head={clientsHead} clients={CLIENTS} locale={lang} />

      <section className="section" id="arms">
        <div className="wrap">
          <SectionHead head={armsHead} locale={lang} index="01" split />
          <ArmIndex locale={lang} />
        </div>
      </section>

      <Statement parts={stripTitle[lang]} sub={stripSub[lang]} kicker="MyPAS" />

      <ProjectsSection head={projectsHead} projects={featured} locale={lang} index="02" />

      <Org head={teamHead} locale={lang} index="03" />

      <Contact info={{ email: CONTACT.defaultEmail }} locale={lang} />
    </Shell>
  );
}
