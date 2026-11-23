import type { Localized } from "./i18n";

export const ARM_IDS = ["sap", "finance", "ai"] as const;
export type ArmId = (typeof ARM_IDS)[number];

export type Theme = {
  /** primary accent colour */
  accent: string;
  /** translucent accent used for glows */
  accentSoft: string;
  /** lighter accent with enough contrast on dark chapters */
  accentLight: string;
};

export type Arm = Theme & {
  id: ArmId;
  path: string;
  name: Localized<string>;
  /** compact label used on tags and breadcrumbs */
  shortName: Localized<string>;
  pill: string;
  tagline: Localized<string>;
  description: Localized<string>;
  /** short label used inside the orbit diagram */
  tag: Localized<string>;
};

/** Neutral group theme used on the home page. */
export const GROUP_THEME: Theme = {
  accent: "#1f2cff",
  accentSoft: "rgba(31, 44, 255, 0.14)",
  accentLight: "#8a92ff",
};

export const ARMS: Record<ArmId, Arm> = {
  sap: {
    id: "sap",
    path: "/sap",
    accent: "#a84d08",
    accentSoft: "rgba(226, 115, 31, 0.16)",
    accentLight: "#ff9a4d",
    pill: "Better Systems",
    name: { he: "MyPAS SAP", en: "MyPAS SAP" },
    shortName: { he: "SAP", en: "SAP" },
    tag: { he: "מערכות ליבה", en: "Core Systems" },
    tagline: {
      he: "מערכות ליבה · SAP ו-ERP",
      en: "Core Systems · SAP & ERP",
    },
    description: {
      he: "SAP ו-ERP, כמו שצריך. טכנולוגיה שגורמת לתפעול שלכם לעבוד טוב יותר.",
      en: "SAP and ERP, done right. Technology that makes your operations run better.",
    },
  },
  finance: {
    id: "finance",
    path: "/finance",
    accent: "#0a7452",
    accentSoft: "rgba(14, 159, 110, 0.16)",
    accentLight: "#45d6a0",
    pill: "Better Numbers",
    name: { he: "MyPAS Finance", en: "MyPAS Finance" },
    shortName: { he: "Finance", en: "Finance" },
    tag: { he: "פיננסים", en: "Finance" },
    tagline: {
      he: "ניהול פיננסי ו-CFO במיקור חוץ",
      en: "Financial management & outsourced CFO",
    },
    description: {
      he: "ניהול פיננסי מבוסס-טכנולוגיה ו-CFO במיקור חוץ, שמביאים שליטה ומוכנות לצמיחה.",
      en: "Tech-driven financial management and outsourced CFO that bring control and readiness to grow.",
    },
  },
  ai: {
    id: "ai",
    path: "/ai",
    accent: "#5a3df0",
    accentSoft: "rgba(109, 74, 255, 0.16)",
    accentLight: "#a99aff",
    pill: "Better Intelligence",
    name: { he: "MyPAS AI", en: "MyPAS AI" },
    shortName: { he: "AI", en: "AI" },
    tag: { he: "אינטליגנציה", en: "Intelligence" },
    tagline: {
      he: "AI לתפעול אוטומטי",
      en: "AI for automated operations",
    },
    description: {
      he: "פתרונות AI שהופכים את התפעול לחכם, מהיר ואוטומטי יותר.",
      en: "AI solutions that make operations smarter, faster and more automated.",
    },
  },
};

export const ARM_LIST: Arm[] = ARM_IDS.map((id) => ARMS[id]);
