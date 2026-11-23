import Image from "next/image";
import { notFound } from "next/navigation";
import Shell from "@/components/layout/Shell";
import { ArmHero, FinanceVisual, OtherArms } from "@/components/sections/arm";
import {
  Cards,
  Contact,
  Faq,
  HeadSection,
  Process,
  ProjectsSection,
} from "@/components/sections/shared";
import { Arrow, SectionHead, delay, idx } from "@/components/ui/primitives";
import * as finance from "@/content/finance";
import { projectsForArm, projectsHead } from "@/content/projects";
import { CONTACT, HEADS } from "@/content/site";
import { ARMS } from "@/lib/arms";
import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

const arm = ARMS.finance;

export async function generateMetadata({ params }: PageProps<"/[lang]/finance">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return buildMetadata({
    locale: lang,
    path: "/finance",
    title: {
      he: "MyPAS Finance — אתם מנהלים עסק, אנחנו את המספרים",
      en: "MyPAS Finance — You run the business, we run the numbers",
    },
    description: finance.hero.lead,
  });
}

export default async function FinancePage({ params }: PageProps<"/[lang]/finance">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const shot = finance.platformShot;
  const rows = finance.platformRows;

  return (
    <Shell locale={lang} path="/finance" theme={arm}>
      <ArmHero
        hero={finance.hero}
        arm={arm}
        locale={lang}
        visual={
          <FinanceVisual
            src={shot.src}
            width={shot.width}
            height={shot.height}
            alt={shot.alt[lang]}
            locale={lang}
          />
        }
      />

      <section className="section tone-dark grain" id="platform">
        <div className="isogrid" aria-hidden="true" />
        <div className="wrap" style={{ position: "relative" }}>
          <SectionHead head={finance.platformHead} locale={lang} index="01" />
          <div className="showcase">
            {rows.map((row, i) => (
              <article key={i} className="show">
                <div className="show__copy" data-reveal>
                  <span className="show__n">
                    {idx(i + 1)} / {idx(rows.length)}
                  </span>
                  <h3 className="show__title">{row.title[lang]}</h3>
                  <p className="show__body">{row.body[lang]}</p>
                </div>
                <div className="frame" data-reveal style={delay(1)}>
                  <div className="frame__bar" aria-hidden="true">
                    <span className="frame__dot" />
                    <span className="frame__dot" />
                    <span className="frame__dot" />
                  </div>
                  <Image
                    src={row.image.src}
                    width={row.image.width}
                    height={row.image.height}
                    alt={row.image.alt[lang]}
                    sizes="(min-width: 1024px) 60vw, 100vw"
                  />
                </div>
              </article>
            ))}
          </div>
          <div className="center-cta" data-reveal>
            <p>{finance.platformCta[lang]}</p>
            <a className="btn btn--accent" href="#contact">
              {CONTACT.button[lang]}
              <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="solutions">
        <div className="wrap">
          <SectionHead head={finance.solutionsHead} locale={lang} index="02" />
          <ul className="sol" data-reveal>
            {finance.solutions.map((s, i) => (
              <li key={i}>
                <span className="mono">{idx(i + 1)}</span>
                {s[lang]}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProjectsSection
        head={projectsHead}
        projects={projectsForArm("finance")}
        locale={lang}
        index="03"
        bento={false}
      />

      <Process head={finance.processHead} steps={finance.steps} locale={lang} index="04" />

      <section className="section tone-paper2">
        <div className="wrap">
          <SectionHead head={finance.advantagesHead} locale={lang} index="05" />
          <Cards items={finance.advantages} locale={lang} cols={4} />
        </div>
      </section>

      <HeadSection head={finance.teamHead} person={HEADS.finance} locale={lang} index="06" />

      <Faq head={finance.faqHead} items={finance.faq} locale={lang} index="07" />

      <OtherArms current="finance" locale={lang} />

      <Contact info={finance.contact} locale={lang} />
    </Shell>
  );
}
