"use client";

import Link from "next/link";
import { useEffect, useRef, type CSSProperties } from "react";
import { Arrow } from "@/components/ui/primitives";
import { ARMS, type ArmId } from "@/lib/arms";
import { href, type Locale } from "@/lib/i18n";

/**
 * The logo's isometric cube, built as a real CSS 3D object.
 *
 * At rest it sits in exact isometric pose (rotateX −35.264°, rotateY 45°), so
 * it reads as the logo. Each of the three visible faces is one arm — AI on
 * top, SAP and Finance as the base, as in the brand mark — and is a link.
 * The three hidden faces are drawn as wireframe so the back edges show
 * through, which is what makes it read as an engineered object rather than a
 * flat icon. The cube leans gently toward the pointer; with reduced motion
 * it stays still.
 */

type Face = "top" | "left" | "front";

/* top = AI, screen-left = SAP, screen-right = Finance (see the logo) */
const FACE_ARM: Record<Face, ArmId> = { top: "ai", left: "sap", front: "finance" };
const GLYPH: Record<ArmId, string> = { ai: "AI", sap: "SAP", finance: "FIN" };
const ORDER: Face[] = ["left", "front", "top"];

export default function Cube3D({ locale }: { locale: Locale }) {
  const rig = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rig.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        el.style.setProperty("--tx", (x * 16).toFixed(2));
        el.style.setProperty("--ty", (y * -8).toFixed(2));
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div className="c3">
      <div className="c3__float">
        <div className="c3__rig" ref={rig}>
          <div className="c3__floor" aria-hidden="true">
            <div className="c3__pool" />
            <div className="c3__ring" />
            <div className="c3__ring c3__ring--inner" />
          </div>

          {(["right", "back", "bottom"] as const).map((f) => (
            <div key={f} className={`c3__face c3__face--${f} c3__face--ghost`} aria-hidden="true" />
          ))}

          {ORDER.map((face, n) => {
            const arm = ARMS[FACE_ARM[face]];
            return (
              <Link
                key={face}
                href={href(locale, arm.path)}
                className={`c3__face c3__face--${face}`}
                style={{ "--fa": arm.accent, "--n": n } as CSSProperties}
                aria-label={arm.name[locale]}
              >
                <span className="c3__glyph" aria-hidden="true">
                  {GLYPH[arm.id]}
                </span>
                <span className="c3__tag" aria-hidden="true">
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                    <span className="c3__dot" />
                    <span className="c3__label">{arm.tag[locale]}</span>
                  </span>
                  <Arrow />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
