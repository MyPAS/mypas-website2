import Link from "next/link";
import type { CSSProperties } from "react";
import Cube3D from "@/components/ui/Cube3D";
import { MiniCube } from "@/components/ui/IsoCube";
import MotionToggle from "./MotionToggle";
import { Arrow, Kicker, Rich, delay, idx, joinWords } from "@/components/ui/primitives";
import type { Hero as HeroT, RichText, SectionHead } from "@/content/types";
import type { Client } from "@/content/clients";
import { BRAND } from "@/content/site";
import { STATS, T } from "@/content/ui";
import { ARM_LIST } from "@/lib/arms";
import { href, type Locale } from "@/lib/i18n";

/** The visible 12-column grid that runs behind the hero, like a drawing sheet. */
export function ColGrid() {
  return (
    <div className="colgrid" aria-hidden="true">
      <div className="wrap">
        {Array.from({ length: 12 }, (_, i) => (
          <span key={i} />
        ))}
      </div>
    </div>
  );
}

export function HomeHero({ hero, locale }: { hero: HeroT; locale: Locale }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <ColGrid />
      <div className="wrap hero__inner">
        <div className="hero__meta" data-reveal>
          <span>
            <b>{BRAND.tagline.en}</b>
          </span>
          <span>SAP · Finance · AI</span>
          <span>
            Since <b>2007</b>
          </span>
        </div>

        <div className="hero__main">
          <div>
            <div data-reveal style={delay(1)}>
              <Kicker>{hero.eyebrow[locale]}</Kicker>
            </div>
            <h1 id="hero-title" className="display hero__title" data-reveal style={delay(2)}>
              <Rich parts={hero.title[locale]} />
            </h1>
            <p className="lead hero__lead" data-reveal style={delay(3)}>
              {hero.lead[locale]}
            </p>
            <div className="hero__ctas" data-reveal style={delay(4)}>
              <a className="btn btn--accent" href={hero.primaryCta.href}>
                {hero.primaryCta.label[locale]}
                <Arrow />
              </a>
              <a className="btn btn--ghost" href={hero.secondaryCta.href}>
                {hero.secondaryCta.label[locale]}
              </a>
            </div>
          </div>
          <div className="hero__visual">
            <Cube3D locale={locale} />
          </div>
        </div>

        <dl className="stats">
          {STATS.map((s, i) => (
            <div className="stat" key={s.value} data-reveal style={delay(i + 4)}>
              <span className="stat__idx" aria-hidden="true">
                {idx(i + 1)}
              </span>
              <dt className="stat__num">{s.value}</dt>
              <dd className="stat__label">{s.label[locale]}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/** Client wall: names set in a hairline table, the way a register lists them. */
export function Clients({
  head,
  clients,
  locale,
}: {
  head: SectionHead;
  clients: Client[];
  locale: Locale;
}) {
  return (
    <section className="clients" aria-labelledby="clients-title">
      <div className="wrap">
        <div className="clients__head">
          <div data-reveal>
            <Kicker>{head.kicker?.[locale]}</Kicker>
          </div>
          <h2 id="clients-title" className="clients__title" data-reveal style={delay(1)}>
            {head.title[locale]}
          </h2>
        </div>
        <ul className="clients__grid">
          {clients.map((c, i) => (
            <li key={c.id} className="clients__cell" data-reveal style={delay(i % 5)}>
              <span className="clients__n" aria-hidden="true">
                {idx(i + 1)}
              </span>
              <span className="clients__name">{c.name[locale]}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** The arms as an index: one full-width row each, the name set large. */
export function ArmIndex({ locale }: { locale: Locale }) {
  return (
    <ol className="index">
      {ARM_LIST.map((arm, i) => (
        <li
          key={arm.id}
          className="index__row"
          data-reveal
          style={{ "--a": arm.accent, "--al": arm.accentLight, "--i": i } as CSSProperties}
        >
          <span className="index__n mono" aria-hidden="true">
            {idx(i + 1)}
          </span>
          <div className="index__title">
            <span className="index__pill mono">{arm.pill}</span>
            <h3 className="index__name">
              <Link href={href(locale, arm.path)} className="index__link">
                <span className="index__brand">MyPAS</span> {arm.shortName[locale]}
              </Link>
            </h3>
          </div>
          <div className="index__copy">
            <p className="index__tag">{arm.tagline[locale]}</p>
            <p className="index__desc">{arm.description[locale]}</p>
          </div>
          <div className="index__side" aria-hidden="true">
            <MiniCube arm={arm.id} />
            <span className="index__go">
              <span className="index__go-label">{T.enter[locale]}</span>
              <Arrow />
            </span>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function Marquee({
  items,
  label,
  pause,
}: {
  items: string[];
  label: string;
  pause: { pause: string; resume: string };
}) {
  const track = (hidden: boolean) => (
    <ul className="marquee__track" aria-hidden={hidden || undefined}>
      {items.map((name) => (
        <li key={name} className="marquee__item">
          {name}
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee-wrap">
      <div className="marquee" title={label}>
        {track(false)}
        {track(true)}
      </div>
      <MotionToggle pauseLabel={pause.pause} resumeLabel={pause.resume} />
    </div>
  );
}

/** Big manifesto line; each word brightens as it scrolls through the viewport. */
export function Statement({
  parts,
  sub,
  kicker,
}: {
  parts: RichText;
  sub?: string;
  kicker?: string;
}) {
  let n = 0;
  return (
    <section className="section statement tone-dark">
      <ColGrid />
      <div className="statement__glow" aria-hidden="true" />
      <div className="wrap" style={{ position: "relative" }}>
        {kicker ? (
          <div data-reveal style={{ marginBottom: 40 }}>
            <Kicker>{kicker}</Kicker>
          </div>
        ) : null}
        <p className="statement__text">
          {joinWords(parts).map((part, i) => {
            const words = part.text.split(/(\s+)/);
            const nodes = words.map((w, j) =>
              /^\s+$/.test(w) || w === "" ? (
                w
              ) : (
                <span key={`${i}-${j}`} className="word" style={{ "--w": n++ } as CSSProperties}>
                  {w}
                </span>
              ),
            );
            const br = part.line && i > 0 ? <br /> : null;
            return part.hl ? (
              <em key={i} className="hl">
                {br}
                {nodes}
              </em>
            ) : (
              <span key={i}>
                {br}
                {nodes}
              </span>
            );
          })}
        </p>
        {sub ? (
          <p className="lead statement__sub" data-reveal>
            {sub}
          </p>
        ) : null}
      </div>
    </section>
  );
}
