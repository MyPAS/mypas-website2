import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Arrow, delay, idx } from "@/components/ui/primitives";
import { UI } from "@/content/site";
import type { AgentCase, Artifact } from "@/content/types";
import { T } from "@/content/ui";
import { href, type Locale } from "@/lib/i18n";

/**
 * Three agents, each told as a claim backed by one piece of its own output.
 * Chats and scorecards are live DOM (sharp, translatable, screen-reader friendly);
 * only the marketplace is a real screenshot.
 */
export default function Agents({ cases, locale }: { cases: AgentCase[]; locale: Locale }) {
  return (
    <>
      <nav className="agents__index" aria-label={UI.agentsIndex[locale]} data-reveal>
        {cases.map((c, i) => (
          <a key={c.id} href={`#agent-${c.id}`} className="agents__tab has-arrow">
            <span className="mono">{idx(i + 1)}</span>
            <span>
              <b>{c.name[locale]}</b>
              <small>{c.role[locale]}</small>
            </span>
          </a>
        ))}
      </nav>

      <div className="agents">
        {cases.map((c, i) => (
          <article key={c.id} id={`agent-${c.id}`} className="agent">
            <div className="agent__copy">
              <p className="agent__name" data-reveal>
                <span className="mono">{idx(i + 1)}</span> {c.name[locale]}
              </p>
              <h3 className="agent__claim" data-reveal style={delay(1)}>
                {c.claim[locale]}
              </h3>
              <p className="agent__role" data-reveal style={delay(1)}>
                {c.role[locale]}
              </p>
              <p className="body mt-m" data-reveal style={delay(2)}>
                {c.body[locale]}
              </p>
              <dl className="agent__stats" data-reveal style={delay(3)}>
                {c.stats.map((s, k) => (
                  <div key={k}>
                    <dt className="ltr">{s.value[locale]}</dt>
                    <dd>{s.label[locale]}</dd>
                  </div>
                ))}
              </dl>
              {c.href ? (
                <Link href={href(locale, c.href)} className="link mt-m" data-reveal>
                  {T.view[locale]}
                  <Arrow />
                </Link>
              ) : null}
            </div>
            <div className="agent__proof" data-reveal style={delay(2)}>
              <ArtifactView artifact={c.artifact} locale={locale} />
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

function ArtifactView({ artifact, locale }: { artifact: Artifact; locale: Locale }) {
  if (artifact.kind === "chat") {
    return (
      <figure className="frame frame--dark transcript">
        <figcaption className="transcript__head">
          <span className="transcript__dot" aria-hidden="true" />
          {artifact.title[locale]}
        </figcaption>
        <ol className="transcript__body" tabIndex={0} aria-label={artifact.title[locale]}>
          {artifact.turns.map((turn, i) => (
            <li
              key={i}
              className={`bubble bubble--${turn.from}`}
              style={{ "--l": i } as CSSProperties}
            >
              {turn.lines.map((line, k) => (
                <p key={k} className={k === 0 && turn.lines.length > 1 && turn.from === "agent" ? "bubble__first" : undefined}>
                  {line[locale]}
                </p>
              ))}
              {turn.at ? <time className="bubble__at">{turn.at[locale]}</time> : null}
            </li>
          ))}
        </ol>
      </figure>
    );
  }

  if (artifact.kind === "score") {
    const r = 46;
    const c = 2 * Math.PI * r;
    return (
      <figure className="score">
        <figcaption className="score__head">
          <span>{artifact.title[locale]}</span>
        </figcaption>
        <div className="score__top">
          <svg viewBox="0 0 120 120" className="score__ring" aria-hidden="true">
            <circle cx="60" cy="60" r={r} className="score__track" />
            <circle
              cx="60"
              cy="60"
              r={r}
              className="score__value"
              strokeDasharray={`${(artifact.score / 100) * c} ${c}`}
              transform="rotate(-90 60 60)"
            />
          </svg>
          <div>
            <p className="score__num ltr">
              {artifact.score}
              <small>/100</small>
            </p>
            <p className="score__verdict">{artifact.verdict[locale]}</p>
          </div>
        </div>
        <ul className="score__list">
          {artifact.findings.map((f, i) => (
            <li key={i} className={`finding finding--${f.kind}`}>
              <span className="finding__tag">{(f.kind === "strength" ? UI.strength : UI.gap)[locale]}</span>
              <p className="finding__title">{f.title[locale]}</p>
              <p className="finding__quote">{f.quote[locale]}</p>
            </li>
          ))}
        </ul>
      </figure>
    );
  }

  return (
    <figure className="frame">
      <div className="frame__bar" aria-hidden="true">
        <span className="frame__dot" />
        <span className="frame__dot" />
        <span className="frame__dot" />
        <span className="frame__url">{artifact.title[locale]}</span>
      </div>
      <Image
        src={artifact.src}
        width={artifact.width}
        height={artifact.height}
        alt={artifact.alt[locale]}
        sizes="(min-width: 1024px) 55vw, 100vw"
      />
    </figure>
  );
}
