import { notFound } from "next/navigation";
import Shell from "@/components/layout/Shell";
import { ArmPanels, HomeHero, Marquee, Statement } from "@/components/sections/home";
import OrgJsonLd from "@/components/layout/OrgJsonLd";
import { Contact, Org, ProjectsSection } from "@/components/sections/shared";
import { Kicker, SectionHead } from "@/components/ui/primitives";
import { armsHead, clientsHead, homeHero, stripSub, stripTitle, teamHead } from "@/content/home";
import { PROJECTS, projectsHead } from "@/content/projects";
import { CLIENTS } from "@/content/clients";
import { CONTACT, UI } from "@/content/site";
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

      <section className="clients" aria-labelledby="clients-title">
        <div className="wrap clients__label">
          <h2 id="clients-title" className="sr-only">
            {clientsHead.title[lang]}
          </h2>
          <Kicker>{clientsHead.kicker?.[lang]}</Kicker>
          <span className="kicker" aria-hidden="true">
            {clientsHead.title[lang]}
          </span>
        </div>
        <Marquee
          items={CLIENTS.map((c) => c.name[lang])}
          label={clientsHead.title[lang]}
          pause={{ pause: UI.pauseMotion[lang], resume: UI.resumeMotion[lang] }}
        />
      </section>

      <section className="section" id="arms">
        <div className="wrap">
          <SectionHead head={armsHead} locale={lang} index="01" split />
          <ArmPanels locale={lang} />
        </div>
      </section>

      <Statement parts={stripTitle[lang]} sub={stripSub[lang]} kicker="MyPAS" />

      <ProjectsSection head={projectsHead} projects={featured} locale={lang} index="02" />

      <Org head={teamHead} locale={lang} index="03" />

      <Contact info={{ email: CONTACT.defaultEmail }} locale={lang} />
    </Shell>
  );
}
