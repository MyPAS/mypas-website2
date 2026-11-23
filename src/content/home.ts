import type { Hero, SectionHead } from "./types";
import type { Localized } from "@/lib/i18n";
import type { RichText } from "./types";

export const homeHero: Hero = {
  eyebrow: { he: "קבוצת MyPAS", en: "MyPAS Group" },
  title: {
    he: [{ text: "כל דרך מובילה ל" }, { text: "עסק טוב יותר", hl: true }],
    en: [{ text: "Every Way to a " }, { text: "Better Business", hl: true }],
  },
  lead: {
    he: "מותג אחד במרכז, וזרועות מתמחות שממשיכות לגדול סביבו — כוח אחד שלוקח עסקים רחוק יותר, מקצה לקצה.",
    en: "One brand at the center, and a growing family of specialized arms around it — together forming an end-to-end envelope that makes companies better.",
  },
  primaryCta: {
    label: { he: "לגלות את הזרועות", en: "Explore the arms" },
    href: "#arms",
  },
  secondaryCta: {
    label: { he: "דברו איתנו", en: "Talk to us" },
    href: "#contact",
  },
};

export const armsHead: SectionHead = {
  kicker: { he: "הזרועות", en: "The arms" },
  title: { he: "הזרועות של MyPAS", en: "The MyPAS arms" },
  subtitle: {
    he: "כל זרוע היא עולם שלם של מומחיות. יחד הן עוטפות את העסק מכל כיוון — והמשפחה רק גדלה.",
    en: "Each arm is a specialty in its own right. Together they cover a company end to end — and the family keeps growing.",
  },
};

export const clientsHead: SectionHead = {
  kicker: { he: "סומכים עלינו", en: "Trusted by" },
  title: {
    he: "ארגונים מובילים בוחרים ב‑MyPAS",
    en: "Leading organizations choose MyPAS",
  },
};

export const teamHead: SectionHead = {
  kicker: { he: "מי אנחנו", en: "Who we are" },
  title: { he: "האנשים שמאחורי MyPAS", en: "The people behind MyPAS" },
  subtitle: {
    he: "ההנהלה שמנהלת את הקבוצה, ראש המחלקה שילווה אתכם, והאנשים שהקימו את זה.",
    en: "The leadership running the group, the department head who will be on your account, and the people who founded it.",
  },
};

export const stripTitle: Localized<RichText> = {
  he: [
    { text: "ממערכות הליבה ועד הבינה — " },
    { text: "שותף אחד. כל הדרך.", hl: true },
  ],
  en: [
    { text: "From core systems to intelligence: " },
    { text: "one partner, end to end.", hl: true },
  ],
};

export const stripSub: Localized<string> = {
  he: "הטכנולוגיה שמשנה את האופן שבו העסק שלכם עובד.",
  en: "Technology that makes business better.",
};
