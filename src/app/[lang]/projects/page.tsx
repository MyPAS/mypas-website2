import { notFound } from "next/navigation";
import Shell from "@/components/layout/Shell";
import ProjectFilter from "@/components/sections/ProjectFilter";
import { Contact, ProjectCard } from "@/components/sections/shared";
import { Kicker, delay } from "@/components/ui/primitives";
import { PROJECTS, projectsHead } from "@/content/projects";
import { CONTACT } from "@/content/site";
import { T } from "@/content/ui";
import { ARM_LIST, GROUP_THEME } from "@/lib/arms";
import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: PageProps<"/[lang]/projects">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return buildMetadata({
    locale: lang,
    path: "/projects",
    title: { he: "פרויקטים נבחרים — MyPAS", en: "Selected projects — MyPAS" },
    description: projectsHead.subtitle!,
  });
}

export default async function ProjectsPage({ params }: PageProps<"/[lang]/projects">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const options = ARM_LIST.map((arm) => ({
    id: arm.id,
    label: arm.shortName[lang],
    count: PROJECTS.filter((p) => p.arms.includes(arm.id)).length,
  })).filter((o) => o.count > 0);

  return (
    <Shell locale={lang} path="/projects" theme={GROUP_THEME}>
      <section className="ahero" style={{ paddingBottom: 48 }}>
        <div className="isogrid" aria-hidden="true" />
        <div className="wrap" style={{ position: "relative" }}>
          <div data-reveal>
            <Kicker index={String(PROJECTS.length).padStart(2, "0")}>{projectsHead.kicker?.[lang]}</Kicker>
          </div>
          <h1 className="display hero__title" data-reveal style={delay(1)}>
            {projectsHead.title[lang]}
          </h1>
          <p className="lead hero__lead" data-reveal style={delay(2)}>
            {projectsHead.subtitle?.[lang]}
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <ProjectFilter
            allLabel={T.all[lang]}
            options={options}
            items={PROJECTS.map((p, i) => ({
              key: p.slug,
              arms: p.arms,
              node: (
                <ProjectCard
                  project={p}
                  locale={lang}
                  i={i}
                  as="h2"
                  sizes="(min-width: 1100px) 30vw, (min-width: 720px) 45vw, 100vw"
                />
              ),
            }))}
          />
        </div>
      </section>

      <Contact info={{ email: CONTACT.defaultEmail }} locale={lang} />
    </Shell>
  );
}
