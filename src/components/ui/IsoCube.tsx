import type { ArmId } from "@/lib/arms";

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
