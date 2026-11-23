import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import Shell from "@/components/layout/Shell";
import VideoEmbed from "@/components/sections/VideoEmbed";
import { Contact } from "@/components/sections/shared";
import { Arrow, Kicker, delay } from "@/components/ui/primitives";
import { PROJECTS, getProject, projectsHead } from "@/content/projects";
import { CONTACT, HEADS, UI } from "@/content/site";
import { T } from "@/content/ui";
import { ARMS } from "@/lib/arms";
import { LOCALES, href, isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => PROJECTS.map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/projects/[slug]">) {
  const { lang, slug } = await params;
  const project = getProject(slug);
  if (!isLocale(lang) || !project) notFound();
  return buildMetadata({
    locale: lang,
    path: `/projects/${slug}`,
    title: { he: `${project.title.he} — MyPAS`, en: `${project.title.en} — MyPAS` },
    description: project.summary,
    image: project.image?.src,
  });
}

export default async function ProjectPage({ params }: PageProps<"/[lang]/projects/[slug]">) {
  const { lang, slug } = await params;
  const project = getProject(slug);
  if (!isLocale(lang) || !project) notFound();

  const arm = ARMS[project.arms[0]];
  const i = PROJECTS.indexOf(project);
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  const path = `/projects/${slug}`;
  const lead = HEADS[project.arms[0]];
  const beats = (
    [
      [UI.challenge, project.challenge],
      [UI.solution, project.solution],
      [UI.result, project.result],
    ] as const
  ).filter(([, body]) => body);

  return (
    <Shell locale={lang} path={path} theme={arm}>
      <section className="ahero" style={{ paddingBottom: 56 }}>
        <div className="isogrid" aria-hidden="true" />
        <div className="hero__glow" aria-hidden="true" style={{ top: "-30%" }} />
        <div className="wrap" style={{ position: "relative" }}>
          <nav className="crumbs" aria-label="breadcrumb" data-reveal>
            <Link href={href(lang, "/")}>MyPAS</Link>
            <span className="crumbs__sep" aria-hidden="true" />
            <Link href={href(lang, "/projects")}>{projectsHead.kicker?.[lang]}</Link>
            <span className="crumbs__sep" aria-hidden="true" />
            <span aria-current="page">{project.client[lang]}</span>
          </nav>
          <div data-reveal>
            <Kicker index={String(i + 1).padStart(2, "0")}>{arm.name[lang]}</Kicker>
          </div>
          <h1 className="h1 hero__title" data-reveal style={{ ...delay(1), maxWidth: "20ch" }}>
            {project.title[lang]}
          </h1>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          {project.image ? (
            <figure data-reveal style={{ marginBottom: "clamp(56px, 8vw, 112px)" }}>
              <div className="frame">
                <div className="frame__bar" aria-hidden="true">
                  <span className="frame__dot" />
                  <span className="frame__dot" />
                  <span className="frame__dot" />
                  <span className="frame__url">{project.title.en}</span>
                </div>
                {project.video ? (
                  <VideoEmbed
                    id={project.video.youtubeId}
                    title={project.video.title}
                    poster={project.image}
                    label={UI.playVideo[lang]}
                  />
                ) : (
                  <Image
                    src={project.image.src}
                    width={project.image.width}
                    height={project.image.height}
                    alt={project.image.caption[lang]}
                    priority
                    sizes="(min-width: 1440px) 1360px, 100vw"
                  />
                )}
              </div>
              <figcaption className="body mt-s" style={{ fontSize: ".9rem" }}>
                {project.image.caption[lang]}
              </figcaption>
            </figure>
          ) : null}

          <div className="pd__grid">
            <div>
              <div data-reveal>
                <Kicker>{T.overview[lang]}</Kicker>
              </div>
              <p className="h3 mt-m" data-reveal style={{ fontWeight: 500, lineHeight: 1.35, maxWidth: "36ch" }}>
                {project.summary[lang]}
              </p>

              <div className="mt-l" data-reveal>
                <Kicker>{UI.keyFeatures[lang]}</Kicker>
              </div>
              <ol className="feat mt-m" data-reveal>
                {project.features.map((f, k) => (
                  <li key={k}>{f[lang]}</li>
                ))}
              </ol>

              {beats.length ? (
                <div className="beats mt-l">
                  {beats.map(([label, body]) => (
                    <div key={label.en} className="beat" data-reveal>
                      <Kicker>{label[lang]}</Kicker>
                      <p className="body mt-s">{body![lang]}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              {project.testimonial ? (
                <figure className="testimonial mt-l" data-reveal>
                  <blockquote className="quote">{project.testimonial.quote[lang]}</blockquote>
                  <figcaption className="mt-m">
                    <b>{project.testimonial.author[lang]}</b>
                    {project.testimonial.role ? <span> · {project.testimonial.role[lang]}</span> : null}
                  </figcaption>
                </figure>
              ) : null}
            </div>

            <aside className="pd__aside" data-reveal style={delay(1)}>
              <dl className="meta">
                <div>
                  <dt>{UI.projectLead[lang]}</dt>
                  <dd className="lead-mini">
                    <Image src={lead.photo} alt="" width={48} height={48} />
                    <span>
                      {lead.name[lang]}
                      <small>{lead.role[lang]}</small>
                    </span>
                  </dd>
                </div>
                <div>
                  <dt>{UI.client[lang]}</dt>
                  <dd>{project.client[lang]}</dd>
                </div>
                <div>
                  <dt>{T.arm[lang]}</dt>
                  <dd className="tags">
                    {project.arms.map((a) => (
                      <Link
                        key={a}
                        href={href(lang, ARMS[a].path)}
                        className="chip"
                        style={{ "--chip": ARMS[a].accent } as CSSProperties}
                      >
                        <span className="chip__dot" />
                        {ARMS[a].shortName[lang]}
                      </Link>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt>{UI.technologies[lang]}</dt>
                  <dd className="tags">
                    {project.tech.map((t) => (
                      <span key={t} className="chip mono ltr">
                        {t}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
              <a className="btn btn--accent mt-m" href="#contact">
                {UI.talkToUs[lang]}
                <Arrow />
              </a>
            </aside>
          </div>

          {project.shots?.length ? (
            <div className="shots mt-l">
              {project.shots.map((shot) => (
                <figure key={shot.src} data-reveal>
                  <div className="frame">
                    <div className="frame__bar" aria-hidden="true">
                      <span className="frame__dot" />
                      <span className="frame__dot" />
                      <span className="frame__dot" />
                    </div>
                    <Image
                      src={shot.src}
                      width={shot.width}
                      height={shot.height}
                      alt={shot.caption[lang]}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                  <figcaption className="body mt-s" style={{ fontSize: ".9rem" }}>
                    {shot.caption[lang]}
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <Link
        href={href(lang, `/projects/${next.slug}`)}
        className="next tone-paper2 has-arrow"
        style={{ "--accent": ARMS[next.arms[0]].accent } as CSSProperties}
      >
        <div className="wrap">
          <Kicker index={String(PROJECTS.indexOf(next) + 1).padStart(2, "0")}>{T.nextProject[lang]}</Kicker>
          <p className="next__title h1 mt-m">{next.title[lang]}</p>
          <span className="link mt-m" style={{ display: "inline-flex" }}>
            {next.client[lang]} <Arrow />
          </span>
        </div>
      </Link>

      <Contact info={{ email: CONTACT.defaultEmail }} locale={lang} />
    </Shell>
  );
}
