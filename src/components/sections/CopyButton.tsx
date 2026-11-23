"use client";

import { useState } from "react";

export default function CopyButton({
  value,
  label,
  done,
}: {
  value: string;
  label: string;
  done: string;
}) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className="copy"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        } catch {
          /* clipboard unavailable — the mailto link still works */
        }
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="8.5" height="8.5" rx="2" stroke="currentColor" />
        <path d="M10 2.5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h.5" stroke="currentColor" />
      </svg>
      <span aria-live="polite">{copied ? done : label}</span>
    </button>
  );
}
