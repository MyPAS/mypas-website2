import { notFound } from "next/navigation";
import Shell from "@/components/layout/Shell";
import Agents from "@/components/sections/Agents";
import { AiVisual, ArmHero, OtherArms } from "@/components/sections/arm";
import { Statement } from "@/components/sections/home";
import {
  Cards,
  Contact,
  Faq,
  HeadSection,
  Process,
  ProjectsSection,
} from "@/components/sections/shared";
import { Kicker, Rich, SectionHead } from "@/components/ui/primitives";
import * as ai from "@/content/ai";
import { projectsForArm, projectsHead } from "@/content/projects";
import { HEADS } from "@/content/site";
import { ARMS } from "@/lib/arms";
import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

const arm = ARMS.ai;

export async function generateMetadata({ params }: PageProps<"/[lang]/ai">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return buildMetadata({
    locale: lang,
    path: "/ai",
    title: { he: "MyPAS AI — סוכנים שמסיימים את העבודה", en: "MyPAS AI — agents that finish the work" },
    description: ai.hero.lead,
  });
}

export default async function AiPage({ params }: PageProps<"/[lang]/ai">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <Shell locale={lang} path="/ai" theme={arm}>
      <ArmHero
        hero={ai.hero}
        arm={arm}
        locale={lang}
        visual={<AiVisual cases={ai.agents} locale={lang} />}
      />

      <section className="section section--tight tone-paper2">
        <div className="wrap">
          <div data-reveal>
            <Kicker>{arm.pill}</Kicker>
          </div>
          <blockquote className="quote mt-m" data-reveal>
            <Rich parts={ai.quote[lang]} />
          </blockquote>
        </div>
      </section>

      <section className="section" id="agents">
        <div className="wrap">
          <SectionHead head={ai.agentsHead} locale={lang} index="01" split />
          <Agents cases={ai.agents} locale={lang} />
        </div>
      </section>

      <ProjectsSection
        head={projectsHead}
        projects={projectsForArm("ai")}
        locale={lang}
        index="02"
        bento={false}
      />

      <Process head={ai.processHead} steps={ai.steps} locale={lang} index="03" />

      <section className="section tone-paper2">
        <div className="wrap">
          <SectionHead head={ai.realHead} locale={lang} index="04" />
          <Cards items={ai.real} locale={lang} cols={3} />
        </div>
      </section>

      <Statement parts={[{ text: ai.stripTitle[lang] }]} kicker={arm.tag[lang]} />

      <HeadSection head={ai.teamHead} person={HEADS.ai} locale={lang} index="05" />

      <Faq head={ai.faqHead} items={ai.faq} locale={lang} index="06" />

      <OtherArms current="ai" locale={lang} />

      <Contact info={ai.contact} locale={lang} />
    </Shell>
  );
}
