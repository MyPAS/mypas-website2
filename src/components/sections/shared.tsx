import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Arrow, Kicker, SectionHead, delay, idx } from "@/components/ui/primitives";
import type { Project } from "@/content/projects";
import Icon from "@/components/ui/Icon";
import {
  CONTACT,
  EXECS,
  FOUNDERS,
  HEAD_LIST,
  ORG_LABELS,
  UI,
  type DeptHead,
  type TeamMember,
} from "@/content/site";
import type {
  ContactInfo,
  Feature,
  PhoneNumber,
  QA,
  SectionHead as Head,
  Step,
} from "@/content/types";
import { T } from "@/content/ui";
import { ARMS } from "@/lib/arms";
import { href, type Locale } from "@/lib/i18n";
import CopyButton from "./CopyButton";

/* ---------- projects ---------- */

export function ProjectCard({
  project,
  locale,
  i = 0,
  sizes = "(min-width: 900px) 40vw, 100vw",
  as: Title = "h3",
}: {
  project: Project;
  locale: Locale;
  i?: number;
  sizes?: string;
  /** h2 when the cards are the top level under the page h1 */
  as?: "h2" | "h3";
}) {
  const arm = ARMS[project.arms[0]];
  return (
    <article
      className="pcard"
      data-reveal
      style={{ "--i": i % 3, "--accent": arm.accent } as CSSProperties}
    >
      {project.image ? (
        <div className="pcard__media">
          <Image
            src={project.image.src}
            width={project.image.width}
            height={project.image.height}
            alt={project.image.caption[locale]}
            sizes={sizes}
          />
          {project.video ? (
            <span className="pcard__video">
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                <circle cx="9" cy="9" r="9" fill="currentColor" fillOpacity=".2" />
                <path d="M7 5.5v7l5.5-3.5z" fill="currentColor" />
              </svg>
              {T.video[locale]}
            </span>
          ) : null}
        </div>
      ) : null}
      <span className="pcard__go" aria-hidden="true">
        <Arrow />
      </span>
      <div className="pcard__body">
        <div className="pcard__meta">
          {project.arms.map((a) => (
            <span
              key={a}
              className="chip"
              style={{ "--chip": ARMS[a].accent } as CSSProperties}
            >
              <span className="chip__dot" />
              {ARMS[a].shortName[locale]}
            </span>
          ))}
          <span>{project.client[locale]}</span>
        </div>
        <Title className="pcard__title">
          <Link className="pcard__link" href={href(locale, `/projects/${project.slug}`)}>
            {project.title[locale]}
          </Link>
        </Title>
      </div>
    </article>
  );
}

export function ProjectsSection({
  head,
  projects,
  locale,
  index,
  bento = true,
  limit,
}: {
  head: Head;
  projects: Project[];
  locale: Locale;
  index?: string;
  bento?: boolean;
  limit?: number;
}) {
  if (!projects.length) return null;
  const shown = limit ? projects.slice(0, limit) : projects;
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <SectionHead head={head} locale={locale} index={index} split />
        <div className={bento ? "bento" : "pgrid"}>
          {shown.map((p, i) => (
            <ProjectCard key={p.slug} project={p} locale={locale} i={i} />
          ))}
        </div>
        <div className="mt-l" data-reveal>
          <Link className="btn btn--ghost" href={href(locale, "/projects")}>
            {T.allProjects[locale]}
            <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- people ---------- */

function Person({
  person,
  locale,
  i = 0,
  size = "m",
  arm,
}: {
  person: TeamMember;
  locale: Locale;
  i?: number;
  size?: "l" | "m" | "s";
  arm?: DeptHead["arm"];
}) {
  const a = arm ? ARMS[arm] : null;
  return (
    <li
      className={`member member--${size}`}
      data-reveal
      style={{ "--i": i, ...(a ? { "--accent": a.accent } : {}) } as CSSProperties}
    >
      <div className="member__photo">
        <Image
          src={person.photo}
          alt={person.name[locale]}
          fill
          sizes={size === "s" ? "144px" : "(min-width: 900px) 220px, 180px"}
        />
      </div>
      <div>
        {a ? (
          <Link href={href(locale, a.path)} className="member__arm chip" style={{ "--chip": a.accent } as CSSProperties}>
            <span className="chip__dot" />
            {a.shortName[locale]}
          </Link>
        ) : null}
        <p className="member__name">{person.name[locale]}</p>
        <p className="member__role">{person.role[locale]}</p>
      </div>
    </li>
  );
}

/** The whole company in three tiers: who runs it, who runs each arm, who founded it. */
export function Org({
  head,
  locale,
  index,
}: {
  head: Head;
  locale: Locale;
  index?: string;
}) {
  return (
    <section className="section tone-paper2" id="team">
      <div className="wrap">
        <SectionHead head={head} locale={locale} index={index} split />

        <div className="org">
          <div className="org__tier">
            <p className="org__label" data-reveal>
              <span className="mono">A</span> {ORG_LABELS.execs[locale]}
            </p>
            <ul className="org__row org__row--execs">
              {EXECS.map((p, i) => (
                <Person key={p.slug} person={p} locale={locale} i={i} size="l" />
              ))}
            </ul>
          </div>

          <div className="org__tier">
            <p className="org__label" data-reveal>
              <span className="mono">B</span> {ORG_LABELS.heads[locale]}
            </p>
            <ul className="org__row org__row--heads">
              {HEAD_LIST.map((p, i) => (
                <Person key={p.slug} person={p} locale={locale} i={i} arm={p.arm} />
              ))}
            </ul>
          </div>

          <div className="org__tier org__tier--founders">
            <p className="org__label" data-reveal>
              <span className="mono">C</span> {ORG_LABELS.founders[locale]}
            </p>
            <ul className="org__row org__row--founders">
              {FOUNDERS.map((p, i) => (
                <Person key={p.slug} person={p} locale={locale} i={i} size="s" />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/** On an arm page: the one person who owns your engagement, with a way back to the full org. */
export function HeadSection({
  head,
  person,
  locale,
  index,
}: {
  head: Head;
  person: DeptHead;
  locale: Locale;
  index?: string;
}) {
  return (
    <section className="section tone-paper2" id="team">
      <div className="wrap lead-split">
        <div>
          <SectionHead head={head} locale={locale} index={index} />
          <Link href={`${href(locale, "/")}#team`} className="link" data-reveal>
            {UI.leadership[locale]}
            <Arrow />
          </Link>
        </div>
        <ul className="org__row org__row--single">
          <Person person={person} locale={locale} size="l" />
        </ul>
      </div>
    </section>
  );
}

/* ---------- numbered rows (services) ---------- */

export function Rows({ items, locale }: { items: Feature[]; locale: Locale }) {
  return (
    <ol className="rows">
      {items.map((it, i) => (
        <li key={i} className="row" data-reveal style={delay(i)}>
          <span className="row__n">{idx(i + 1)}</span>
          <h3 className="row__title">{it.title[locale]}</h3>
          <p className="row__body">{it.body[locale]}</p>
        </li>
      ))}
    </ol>
  );
}

/* ---------- feature cards ---------- */

export function Cards({
  items,
  locale,
  cols = 3,
}: {
  items: Feature[];
  locale: Locale;
  cols?: 3 | 4;
}) {
  return (
    <div className={`cards cards--${cols}`}>
      {items.map((it, i) => (
        <article key={i} className="card" data-reveal style={delay(i)}>
          <span className="card__glyph">
            <Icon name={it.icon} size={26} />
          </span>
          <h3 className="card__title">{it.title[locale]}</h3>
          <p className="card__body">{it.body[locale]}</p>
          <span className="card__n" style={{ position: "absolute", top: 32, insetInlineEnd: 32 }}>
            {idx(i + 1)}
          </span>
        </article>
      ))}
    </div>
  );
}

/* ---------- process ---------- */

export function Process({
  head,
  steps,
  locale,
  index,
  tone = "",
}: {
  head: Head;
  steps: Step[];
  locale: Locale;
  index?: string;
  tone?: string;
}) {
  return (
    <section className={`section ${tone}`} id="process">
      <div className="wrap process">
        <div className="process__head">
          <div data-reveal>
            <Kicker index={index}>{head.kicker?.[locale]}</Kicker>
          </div>
          <h2 className="h2 mt-m" data-reveal style={delay(1)}>
            {head.title[locale]}
          </h2>
        </div>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={i} className="step">
              <span className="step__n">{idx(i + 1)}</span>
              <h3 className="step__title">{s.title[locale]}</h3>
              <p className="step__body">{s.body[locale]}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

export function Faq({
  head,
  items,
  locale,
  index,
}: {
  head: Head;
  items: QA[];
  locale: Locale;
  index?: string;
}) {
  return (
    <section className="section" id="faq">
      <div className="wrap process">
        <div className="process__head">
          <div data-reveal>
            <Kicker index={index}>{head.kicker?.[locale]}</Kicker>
          </div>
          <h2 className="h2 mt-m" data-reveal style={delay(1)}>
            {head.title[locale]}
          </h2>
        </div>
        <div className="faq" data-reveal>
          {items.map((qa, i) => (
            <details key={i} name="faq" open={i === 0}>
              <summary>
                {qa.q[locale]}
                <span className="faq__plus" aria-hidden="true" />
              </summary>
              <p className="faq__a">{qa.a[locale]}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- contact ---------- */

export function Contact({ info, locale }: { info: ContactInfo; locale: Locale }) {
  const subject = encodeURIComponent(T.emailSubject[locale]);
  const booking = CONTACT.bookingUrl.trim();
  /* the company line is on every page; a page may add its own desk below it */
  const phones: PhoneNumber[] = [CONTACT.phone, ...(info.phones ?? [])];

  return (
    <section className="section contact tone-dark grain" id="contact">
      <div className="isogrid" aria-hidden="true" />
      <div className="contact__glow" aria-hidden="true" />
      <div className="wrap" style={{ position: "relative" }}>
        <div data-reveal>
          <Kicker>{CONTACT.kicker[locale]}</Kicker>
        </div>
        <h2 className="contact__title mt-m" data-reveal style={delay(1)}>
          {locale === "he" ? (
            <>
              בואו נבנה <em className="hl">עסק טוב יותר</em>
            </>
          ) : (
            <>
              Let&apos;s build a <em className="hl">better business</em>
            </>
          )}
        </h2>
        <p className="lead mt-m" data-reveal style={delay(2)}>
          {CONTACT.subtitle[locale]}
        </p>

        <div className="hero__ctas" data-reveal style={delay(3)}>
          {booking ? (
            <a className="btn btn--accent" href={booking} target="_blank" rel="noopener noreferrer">
              {CONTACT.bookingButton[locale]}
              <Arrow />
            </a>
          ) : null}
          <a
            className={booking ? "btn btn--ghost" : "btn btn--accent"}
            href={`mailto:${info.email}?subject=${subject}`}
          >
            {CONTACT.button[locale]}
          </a>
        </div>
        {booking ? (
          <p className="contact__note" data-reveal style={delay(3)}>
            {CONTACT.bookingNote[locale]}
          </p>
        ) : null}

        <div className="contact__grid">
          <div data-reveal>
            <p className="contact__label">{CONTACT.emailLabel[locale]}</p>
            <a className="contact__mail link" href={`mailto:${info.email}?subject=${subject}`}>
              {info.email}
            </a>
            <div>
              <CopyButton value={info.email} label={T.copy[locale]} done={T.copied[locale]} />
            </div>
          </div>
          {phones.map((phone, i) => (
            <div key={phone.href} data-reveal style={delay(i + 1)}>
              <p className="contact__label">{(phone.label ?? CONTACT.phoneLabel)[locale]}</p>
              <a className="contact__phone link" href={`tel:${phone.href}`} dir="ltr">
                {phone.display}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
