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

/** Renders a headline whose highlighted segments switch to the serif accent. */
export function Rich({ parts }: { parts: RichText }) {
  return (
    <>
      {parts.map((part, i) => (
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
