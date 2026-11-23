import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Arrow, Kicker, Rich, delay } from "@/components/ui/primitives";
import type { AgentCase, Hero } from "@/content/types";
import { T } from "@/content/ui";
import { ARM_LIST, type Arm } from "@/lib/arms";
import { MiniCube } from "@/components/ui/IsoCube";
import { href, type Locale } from "@/lib/i18n";

export function ArmHero({
  hero,
  arm,
  locale,
  visual,
}: {
  hero: Hero;
  arm: Arm;
  locale: Locale;
  visual: ReactNode;
}) {
  return (
    <section className="ahero">
      <div className="isogrid" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" style={{ top: "-10%" }} />
      <div className="wrap">
        <div className="ahero__grid">
          <div>
            <nav className="crumbs" aria-label="breadcrumb" data-reveal>
              <Link href={href(locale, "/")}>MyPAS</Link>
              <span className="crumbs__sep" aria-hidden="true" />
              <span aria-current="page">{arm.shortName[locale]}</span>
            </nav>
            <div data-reveal>
              <Kicker>{hero.eyebrow[locale]}</Kicker>
            </div>
            <h1 className="h1 hero__title" data-reveal style={delay(1)}>
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
          <div data-reveal style={delay(2)}>
            {visual}
          </div>
        </div>
      </div>
    </section>
  );
}

function FrameBar({ url }: { url: string }) {
  return (
    <div className="frame__bar" aria-hidden="true">
      <span className="frame__dot" />
      <span className="frame__dot" />
      <span className="frame__dot" />
      <span className="frame__url">{url}</span>
    </div>
  );
}

/* ---------- SAP: an ABAP editor typing itself ---------- */

const ABAP: ReactNode[] = [
  <><span className="tk-c">{"* MyPAS · Israel Invoices — allocation number"}</span></>,
  <><span className="tk-k">REPORT</span> zmypas_invoice_alloc.</>,
  <> </>,
  <><span className="tk-k">DATA</span>(lo_api) = <span className="tk-k">NEW</span> <span className="tk-f">zcl_tax_authority</span>( ).</>,
  <><span className="tk-k">DATA</span>(lv_token) = lo_api-&gt;<span className="tk-f">oauth2_token</span>( ).</>,
  <> </>,
  <><span className="tk-k">LOOP AT</span> lt_invoices <span className="tk-k">INTO DATA</span>(ls_inv).</>,
  <>  ls_inv-alloc_no = lo_api-&gt;<span className="tk-f">request_allocation</span>(</>,
  <>    iv_token  = lv_token</>,
  <>    iv_amount = ls_inv-netwr ).</>,
  <>  <span className="tk-k">MODIFY</span> lt_invoices <span className="tk-k">FROM</span> ls_inv.</>,
  <><span className="tk-k">ENDLOOP</span>.</>,
  <> </>,
  <><span className="tk-f">zcl_monitor</span>=&gt;<span className="tk-f">log</span>( <span className="tk-s">&apos;S/4HANA · FI/SD&apos;</span> ). <span className="caret" /></>,
];

export function SapVisual({ locale }: { locale: Locale }) {
  return (
    <div style={{ position: "relative" }}>
      <div className="frame frame--dark tilt">
        <FrameBar url="ABAP · UI5 / FIORI · S/4HANA" />
        <code className="code" aria-hidden="true" style={{ display: "block", color: "#d8dbef" }}>
          {ABAP.map((line, i) => (
            <span key={i} className="code__line" style={{ "--l": i } as CSSProperties}>
              {line}
            </span>
          ))}
        </code>
      </div>
      <div className="float-chip" style={{ bottom: -22, insetInlineStart: -12 }}>
        <span className="float-chip__icon">24/7</span>
        {locale === "he" ? "מרכז פיתוח פעיל" : "Delivery center online"}
      </div>
    </div>
  );
}

/* ---------- Finance: the real platform ---------- */

export function FinanceVisual({
  src,
  width,
  height,
  alt,
  locale,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  locale: Locale;
}) {
  return (
    <div style={{ position: "relative" }}>
      <div className="frame tilt">
        <FrameBar url="app.mypas.co.il / overview" />
        <Image src={src} width={width} height={height} alt={alt} priority sizes="(min-width: 1024px) 50vw, 100vw" />
      </div>
      <div className="float-chip" style={{ bottom: -22, insetInlineStart: -12 }}>
        <span className="float-chip__icon">14d</span>
        {locale === "he" ? "תחזית תזרים יומית" : "Daily cash-flow forecast"}
      </div>
      <div className="float-chip" style={{ top: -20, insetInlineEnd: -10, animationDelay: "-3s" }}>
        <span className="float-chip__icon">✓</span>
        {locale === "he" ? "התאמה אוטומטית לחשבוניות" : "Auto-matched to invoices"}
      </div>
    </div>
  );
}

/* ---------- AI: the three agents, as a live run board ---------- */

export function AiVisual({ cases, locale }: { cases: AgentCase[]; locale: Locale }) {
  return (
    <div className="frame frame--dark tilt runboard">
      <FrameBar url="MyPAS · agents" />
      <ul className="runboard__list">
        {cases.map((c, i) => (
          <li key={c.id} className="run" style={{ "--l": i } as CSSProperties}>
            <span className="run__pulse" aria-hidden="true" />
            <div className="run__main">
              <a href={`#agent-${c.id}`} className="run__name">
                {c.name[locale]}
              </a>
              <span className="run__role">{c.role[locale]}</span>
            </div>
            <dl className="run__stats">
              {c.stats.slice(0, 2).map((s, k) => (
                <div key={k}>
                  <dt className="ltr">{s.value[locale]}</dt>
                  <dd>{s.label[locale]}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const enterLabel = T.enter;

/** Before the contact chapter: a way sideways to the other arms, so an arm page is never a dead end. */
export function OtherArms({ current, locale }: { current: Arm["id"]; locale: Locale }) {
  return (
    <nav className="section section--tight others" aria-label={T.moreArms[locale]}>
      <div className="wrap">
        <p className="kicker" data-reveal>
          <span className="kicker__bar" aria-hidden="true" />
          {T.moreArms[locale]}
        </p>
        <div className="others__grid">
          {ARM_LIST.filter((a) => a.id !== current).map((a, i) => (
            <Link
              key={a.id}
              href={href(locale, a.path)}
              className="other has-arrow"
              data-reveal
              style={{ "--a": a.accent, "--i": i } as CSSProperties}
            >
              <MiniCube arm={a.id} />
              <span className="other__body">
                <span className="other__name">{a.name[locale]}</span>
                <span className="other__tag">{a.tagline[locale]}</span>
              </span>
              <Arrow />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
