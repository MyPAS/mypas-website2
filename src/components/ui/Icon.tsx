import type { ReactNode } from "react";

/**
 * One icon set for the whole site, replacing the mix of emoji (🎓 🛰) and
 * geometric characters (◷ ◆ ❖) that used to stand in for icons. Those render
 * differently on every platform — colour emoji on one, a tofu box on another —
 * and could not take the accent colour. These are drawn on a 24px grid with a
 * single stroke weight, inherit `currentColor`, and are always decorative:
 * every one of them sits next to a real text label.
 */
export type IconName =
  | "code"
  | "graduation"
  | "support"
  | "history"
  | "shield"
  | "layers"
  | "clock"
  | "sliders"
  | "trending"
  | "eye"
  | "shield-check"
  | "check-circle"
  | "message"
  | "help-circle"
  | "trail"
  | "pause"
  | "plug"
  | "check"
  | "diamond"
  | "chevron"
  | "arrow"
  | "zoom"
  | "close";

const PATHS: Record<IconName, ReactNode> = {
  code: (
    <>
      <path d="m9 17-5-5 5-5" />
      <path d="m15 7 5 5-5 5" />
    </>
  ),
  graduation: (
    <>
      <path d="M12 4 2 9l10 5 10-5-10-5Z" />
      <path d="M6 11.5V16c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4.5" />
      <path d="M21 9.5V15" />
    </>
  ),
  support: (
    <>
      <path d="M4 13a8 8 0 0 1 16 0" />
      <path d="M4 13v3a2 2 0 0 0 2 2h1v-5H6a2 2 0 0 0-2 2Z" />
      <path d="M20 13v3a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 2Z" />
      <path d="M17 18v.5a2.5 2.5 0 0 1-2.5 2.5H13" />
    </>
  ),
  history: (
    <>
      <path d="M3 12a9 9 0 1 0 2.6-6.4" />
      <path d="M3 4v4h4" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  shield: <path d="M12 3 5 6v5.5c0 4.2 2.9 7.7 7 9.5 4.1-1.8 7-5.3 7-9.5V6l-7-3Z" />,
  layers: (
    <>
      <path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" />
      <path d="m3.5 12 8.5 4.5 8.5-4.5" />
      <path d="m3.5 16.5 8.5 4.5 8.5-4.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.2 2" />
    </>
  ),
  sliders: (
    <>
      <path d="M4 7h10M18 7h2" />
      <path d="M4 12h3M11 12h9" />
      <path d="M4 17h12M20 17h0" />
      <circle cx="16" cy="7" r="2" />
      <circle cx="9" cy="12" r="2" />
      <circle cx="18" cy="17" r="2" />
    </>
  ),
  trending: (
    <>
      <path d="m4 16 4.5-4.5 3 3L20 6" />
      <path d="M15 6h5v5" />
      <path d="M4 20h16" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  "shield-check": (
    <>
      <path d="M12 3 5 6v5.5c0 4.2 2.9 7.7 7 9.5 4.1-1.8 7-5.3 7-9.5V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  "check-circle": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.5 2.5L16 9.5" />
    </>
  ),
  message: (
    <>
      <path d="M20 5H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v4l4.5-4H20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1Z" />
      <path d="M8 10h8M8 13h5" />
    </>
  ),
  "help-circle": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.5a2.5 2.5 0 1 1 3.3 2.4c-.5.2-.8.7-.8 1.2v.4" />
      <path d="M12 16.8h.01" />
    </>
  ),
  trail: (
    <>
      <path d="M5 6h3M5 12h3M5 18h3" />
      <path d="M12 6h7M12 12h7M12 18h4" />
      <circle cx="6.5" cy="6" r="0.6" fill="currentColor" />
    </>
  ),
  pause: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 9v6M14 9v6" />
    </>
  ),
  plug: (
    <>
      <path d="M9 3v5M15 3v5" />
      <path d="M6 8h12v3a6 6 0 0 1-12 0V8Z" />
      <path d="M12 17v4" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  diamond: <path d="m12 4 8 8-8 8-8-8 8-8Z" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  arrow: (
    <>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  close: <path d="m6 6 12 12M18 6 6 18" />,
  zoom: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
      <path d="M11 8.5v5M8.5 11h5" />
    </>
  ),
};

export default function Icon({
  name,
  size = 24,
  className,
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      className={className ? `icon ${className}` : "icon"}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}
