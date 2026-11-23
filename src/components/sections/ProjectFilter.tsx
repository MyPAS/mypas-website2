"use client";

import { useState, type ReactNode } from "react";

/**
 * Filters server-rendered project cards by arm. Cards arrive as children keyed
 * by their arms, so the markup (and images) stay server components.
 */
export default function ProjectFilter({
  options,
  allLabel,
  items,
}: {
  options: { id: string; label: string; count: number }[];
  allLabel: string;
  items: { arms: string[]; node: ReactNode; key: string }[];
}) {
  const [active, setFilter] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);
  const setActive = (v: string | null) => {
    setTouched(true);
    setFilter(v);
  };
  const shown = active ? items.filter((it) => it.arms.includes(active)) : items;

  return (
    <>
      <div className="filters" role="group">
        <button
          type="button"
          className="filter"
          aria-pressed={active === null}
          onClick={() => setActive(null)}
        >
          {allLabel}
          <span className="filter__n">{items.length}</span>
        </button>
        {options.map((o) => (
          <button
            key={o.id}
            type="button"
            className="filter"
            aria-pressed={active === o.id}
            onClick={() => setActive(o.id)}
          >
            {o.label}
            <span className="filter__n">{o.count}</span>
          </button>
        ))}
      </div>
      <div className="pgrid" aria-live="polite" data-filtered={touched || undefined}>
        {shown.map((it) => (
          <div key={it.key} style={{ display: "contents" }}>
            {it.node}
          </div>
        ))}
      </div>
    </>
  );
}
