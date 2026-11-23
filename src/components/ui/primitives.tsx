import type { CSSProperties, ReactNode } from "react";
import type { RichText, SectionHead as Head } from "@/content/types";
import type { Locale } from "@/lib/i18n";

export function Arrow({ className = "arrow" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M3 10h13m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Keeps a word whole when a highlight starts inside it. The Hebrew copy often
 * splits on a prefix letter ("…מובילה ל" + "עסק"), and colouring "ל" dim and
 * "עסק" bright breaks the word in two. Any fragment glued to the start of a
 * highlight is moved into it.
 */
export function joinWords(parts: RichText): RichText {
  const out = parts.map((p) => ({ ...p }));
  for (let i = 0; i < out.length - 1; i++) {
    const cur = out[i];
    const next = out[i + 1];
    if (!!cur.hl === !!next.hl || /\s$/.test(cur.text) || /^\s/.test(next.text)) continue;
    const m = cur.text.match(/(\S+)$/);
    if (!m) continue;
    cur.text = cur.text.slice(0, -m[1].length);
    next.text = m[1] + next.text;
  }
  return out.filter((p) => p.text !== "");
}

/** Renders a two-tone headline: the highlighted phrase is lifted to full white. */
export function Rich({ parts }: { parts: RichText }) {
  return (
    <>
      {joinWords(parts).map((part, i) => (
        <span key={i}>
          {part.line && i > 0 ? <br /> : null}
          {part.hl ? <em className="hl">{part.text}</em> : part.text}
        </span>
      ))}
    </>
  );
}

export function Kicker({
  index,
  children,
}: {
  index?: string;
  children: ReactNode;
}) {
  return (
    <p className="kicker">
      {index ? <span className="kicker__idx">{index}</span> : null}
      <span className="kicker__bar" aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}

export function SectionHead({
  head,
  locale,
  index,
  split = false,
  as: Tag = "h2",
}: {
  head: Head;
  locale: Locale;
  index?: string;
  split?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <header className={`head ${split ? "head--split" : ""}`}>
      <div style={{ display: "grid", gap: 22 }}>
        {head.kicker ? (
          <div data-reveal>
            <Kicker index={index}>{head.kicker[locale]}</Kicker>
          </div>
        ) : null}
        <Tag className="h2" data-reveal style={{ "--i": 1 } as CSSProperties}>
          {head.title[locale]}
        </Tag>
      </div>
      {head.subtitle ? (
        <p className="lead" data-reveal style={{ "--i": 2 } as CSSProperties}>
          {head.subtitle[locale]}
        </p>
      ) : null}
    </header>
  );
}

export const idx = (n: number) => String(n).padStart(2, "0");

export const delay = (i: number) => ({ "--i": i }) as CSSProperties;
