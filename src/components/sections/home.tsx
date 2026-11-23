import Link from "next/link";
import type { CSSProperties } from "react";
import IsoCube, { MiniCube } from "@/components/ui/IsoCube";
import MotionToggle from "./MotionToggle";
import { Arrow, Kicker, Rich, delay, idx } from "@/components/ui/primitives";
import type { Hero as HeroT, RichText } from "@/content/types";
import { STATS, T } from "@/content/ui";
import { ARM_LIST } from "@/lib/arms";
import { href, type Locale } from "@/lib/i18n";

export function HomeHero({ hero, locale }: { hero: HeroT; locale: Locale }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="isogrid" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />
      <div className="wrap">
        <div className="hero__grid">
          <div>
            <div data-reveal>
              <Kicker>{hero.eyebrow[locale]}</Kicker>
            </div>
            <h1 id="hero-title" className="display hero__title" data-reveal style={delay(1)}>
              <Rich parts={hero.title[locale]} />
            </h1>
            <p className="lead hero__lead" data-reveal style={delay(2)}>
              {hero.lead[locale]}
            </p>
            <div className="hero__ctas" data-reveal style={delay(3)}>
              <a className="btn btn--accent" href={hero.primaryCta.href}>
                {hero.primaryCta.label[locale]}
                <Arrow />
              </a>
              <a className="btn btn--ghost" href={hero.secondaryCta.href}>
                {hero.secondaryCta.label[locale]}
              </a>
            </div>
          </div>
          <div className="hero__visual" data-reveal style={delay(2)}>
            <IsoCube locale={locale} />
          </div>
        </div>

        <dl className="stats">
          {STATS.map((s, i) => (
            <div className="stat" key={s.value} data-reveal style={delay(i + 3)}>
              <dt className="stat__num">{s.value}</dt>
              <dd className="stat__label">{s.label[locale]}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
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

export function ArmPanels({ locale }: { locale: Locale }) {
  return (
    <div className="arms">
      {ARM_LIST.map((arm, i) => (
        <article
          key={arm.id}
          className="arm"
          data-reveal
          style={{ "--a": arm.accent, "--i": i } as CSSProperties}
        >
          <div className="arm__top">
            <span className="arm__idx">{idx(i + 1)}</span>
            <span className="arm__pill">{arm.pill}</span>
          </div>
          <MiniCube arm={arm.id} />
          <div className="arm__body">
            <h3 className="arm__name">{arm.name[locale]}</h3>
            <p className="arm__tag">{arm.tagline[locale]}</p>
            <p className="arm__desc">{arm.description[locale]}</p>
            <Link href={href(locale, arm.path)} className="arm__cta has-arrow">
              {T.enter[locale]}
              <Arrow />
            </Link>
          </div>
        </article>
      ))}
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
    <section className="section statement tone-dark grain">
      <div className="isogrid" aria-hidden="true" />
      <div className="wrap" style={{ position: "relative" }}>
        {kicker ? (
          <div data-reveal style={{ marginBottom: 32 }}>
            <Kicker>{kicker}</Kicker>
          </div>
        ) : null}
        <p className="statement__text h1">
          {parts.map((part, i) => {
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
