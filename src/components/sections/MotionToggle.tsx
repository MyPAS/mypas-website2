"use client";

import { useState } from "react";

/** WCAG 2.2.2: anything that moves for more than five seconds needs a pause control. */
export default function MotionToggle({
  pauseLabel,
  resumeLabel,
}: {
  pauseLabel: string;
  resumeLabel: string;
}) {
  const [paused, setPaused] = useState(false);
  return (
    <button
      type="button"
      className="motion-toggle"
      aria-pressed={paused}
      onClick={(e) => {
        const next = !paused;
        setPaused(next);
        e.currentTarget.closest(".marquee-wrap")?.classList.toggle("is-paused", next);
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
        {paused ? (
          <path d="M4 2.5v9l7.5-4.5z" fill="currentColor" />
        ) : (
          <path d="M4 2.5h2v9H4zM8 2.5h2v9H8z" fill="currentColor" />
        )}
      </svg>
      <span>{paused ? resumeLabel : pauseLabel}</span>
    </button>
  );
}
