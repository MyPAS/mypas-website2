import { notFound } from "next/navigation";
import Shell from "@/components/layout/Shell";
import { ArmHero, SapVisual, OtherArms } from "@/components/sections/arm";
import { Statement } from "@/components/sections/home";
import {
  Cards,
  Contact,
  Faq,
  HeadSection,
  Process,
  ProjectsSection,
  Rows,
} from "@/components/sections/shared";
import { SectionHead } from "@/components/ui/primitives";
import { projectsForArm, projectsHead } from "@/content/projects";
import * as sap from "@/content/sap";
import { HEADS } from "@/content/site";
import { ARMS } from "@/lib/arms";
import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

const arm = ARMS.sap;

export async function generateMetadata({ params }: PageProps<"/[lang]/sap">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return buildMetadata({
    locale: lang,
    path: "/sap",
    title: { he: "MyPAS SAP — SAP ו-ERP כמו שצריך", en: "MyPAS SAP — SAP & ERP, done right" },
    description: sap.hero.lead,
  });
}

export default async function SapPage({ params }: PageProps<"/[lang]/sap">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <Shell locale={lang} path="/sap" theme={arm}>
      <ArmHero hero={sap.hero} arm={arm} locale={lang} visual={<SapVisual locale={lang} />} />

      <section className="section" id="services">
        <div className="wrap">
          <SectionHead head={sap.servicesHead} locale={lang} index="01" />
          <Rows items={sap.services} locale={lang} />
        </div>
      </section>

      <Statement
        parts={[{ text: sap.codeWall.caption[lang] }]}
        sub={sap.codeWall.subtitle[lang]}
        kicker={arm.pill}
      />

      <ProjectsSection
        head={projectsHead}
        projects={projectsForArm("sap")}
        locale={lang}
        index="02"
        bento={false}
        limit={6}
      />

      <Process head={sap.processHead} steps={sap.steps} locale={lang} index="03" />

      <section className="section tone-paper2">
        <div className="wrap">
          <SectionHead head={sap.whyHead} locale={lang} index="04" />
          <Cards items={sap.why} locale={lang} cols={4} />
        </div>
      </section>

      <HeadSection head={sap.teamHead} person={HEADS.sap} locale={lang} index="05" />

      <Faq head={sap.faqHead} items={sap.faq} locale={lang} index="06" />

      <OtherArms current="sap" locale={lang} />

      <Contact info={sap.contact} locale={lang} />
    </Shell>
  );
}
