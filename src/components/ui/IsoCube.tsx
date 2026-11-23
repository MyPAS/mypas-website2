import Link from "next/link";
import type { CSSProperties } from "react";
import { ARMS, type ArmId } from "@/lib/arms";
import { href, type Locale } from "@/lib/i18n";

/* Isometric cube geometry (centre at 0,0; edge s = 150). */
const S = 150;
const R = 129.9;
const P = (pts: [number, number][]) => pts.map((p) => p.join(",")).join(" ");

const FACES: Record<
  "top" | "left" | "right",
  { points: string; text: string; center: [number, number] }
> = {
  top: {
    points: P([[0, -S], [R, -S / 2], [0, 0], [-R, -S / 2]]),
    text: `matrix(0.866 0.5 -0.866 0.5 0 -75)`,
    center: [0, -75],
  },
  left: {
    points: P([[-R, -S / 2], [0, 0], [0, S], [-R, S / 2]]),
    text: `matrix(0.866 0.5 0 1 -64.95 37.5)`,
    center: [-64.95, 37.5],
  },
  right: {
    points: P([[0, 0], [R, -S / 2], [R, S / 2], [0, S]]),
    text: `matrix(0.866 -0.5 0 1 64.95 37.5)`,
    center: [64.95, 37.5],
  },
};

/** Which arm lives on which face — intelligence on top, systems and numbers as the base. */
const FACE_ARM: Record<keyof typeof FACES, ArmId> = {
  top: "ai",
  left: "sap",
  right: "finance",
};

const BASE: Record<keyof typeof FACES, string> = {
  top: "var(--cobalt)",
  left: "var(--cobalt-deep)",
  right: "var(--graphite-d)",
};

const FACE_GLYPH: Record<ArmId, string> = { ai: "AI", sap: "SAP", finance: "FIN" };

const LABELS: Record<keyof typeof FACES, { x: number; y: number; anchor: "start" | "end" | "middle" }> = {
  top: { x: 0, y: -232, anchor: "middle" },
  left: { x: -200, y: 190, anchor: "middle" },
  right: { x: 200, y: 190, anchor: "middle" },
};

export default function IsoCube({ locale }: { locale: Locale }) {
  return (
    <div className="cube-wrap">
    <svg className="cube" viewBox="-280 -270 560 540">
      <ellipse className="cube__shadow" cx="0" cy="222" rx="150" ry="22" />

      {/* isometric orbit + satellites (behind the cube) */}
      <g transform="translate(0 30) scale(1 0.577)">
        <circle className="cube__orbit" r="250" />
        <circle className="cube__orbit cube__orbit--dash" r="214" />
        <g className="cube__sat">
          <rect x="244" y="-6" width="12" height="12" fill="var(--cobalt)" transform="rotate(45 250 0)" />
        </g>
        <g className="cube__sat" style={{ animationDuration: "46s", animationDirection: "reverse" } as CSSProperties}>
          <rect x="-218" y="-5" width="10" height="10" fill="var(--graphite)" transform="rotate(45 -213 0)" />
        </g>
      </g>

      <g className="cube__float">
        {(Object.keys(FACES) as (keyof typeof FACES)[]).map((face) => {
          const arm = ARMS[FACE_ARM[face]];
          const f = FACES[face];
          const l = LABELS[face];
          return (
            <Link
              key={face}
              href={href(locale, arm.path)}
              className="cube__link"
              style={{ "--face-accent": arm.accent } as CSSProperties}
              aria-label={arm.name[locale]}
            >
              <line
                className="cube__line"
                x1={f.center[0]}
                y1={f.center[1]}
                x2={l.x}
                y2={l.y + (face === "top" ? 10 : -16)}
              />

              <g className={`cube__face cube__face--${face}`}>
                <polygon className="cube__poly" fill={BASE[face]} points={f.points} />
                <polygon className="cube__edge" points={f.points} />
                <text
                  transform={f.text}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="#fff"
                  fillOpacity="0.92"
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: 26,
                    letterSpacing: "0.12em",
                  }}
                >
                  {FACE_GLYPH[arm.id]}
                </text>
              </g>
            </Link>
          );
        })}
      </g>
    </svg>
      {/* Labels live in HTML, not SVG <text>: Safari reverses Hebrew in SVG text with letter-spacing. */}
      {(Object.keys(FACES) as (keyof typeof FACES)[]).map((face) => {
        const arm = ARMS[FACE_ARM[face]];
        const l = LABELS[face];
        return (
          <Link
            key={face}
            href={href(locale, arm.path)}
            className="cube__tag"
            tabIndex={-1}
            aria-hidden="true"
            style={{ left: `${((l.x + 280) / 560) * 100}%`, top: `${((l.y + 270) / 540) * 100}%` }}
          >
            {arm.tag[locale]}
          </Link>
        );
      })}
    </div>
  );
}

/** A small cube with a single face lit in the arm accent — used as the arm icon. */
export function MiniCube({ arm }: { arm: ArmId }) {
  const lit = (Object.keys(FACE_ARM) as (keyof typeof FACES)[]).find((f) => FACE_ARM[f] === arm);
  return (
    <svg viewBox="-140 -160 280 320" className="arm__icon" aria-hidden="true">
      {(Object.keys(FACES) as (keyof typeof FACES)[]).map((face) => (
        <polygon
          key={face}
          points={FACES[face].points}
          fill={face === lit ? "var(--a)" : "currentColor"}
          fillOpacity={face === lit ? 1 : face === "top" ? 0.1 : face === "left" ? 0.18 : 0.26}
          stroke="currentColor"
          strokeOpacity="0.25"
          transform={
            face === lit
              ? face === "top"
                ? "translate(0 -16)"
                : face === "left"
                  ? "translate(-14 8)"
                  : "translate(14 8)"
              : undefined
          }
        />
      ))}
    </svg>
  );
}
