import type { ContactInfo, Feature, Hero, QA, SectionHead, Step } from "./types";
import type { Localized } from "@/lib/i18n";

export const hero: Hero = {
  eyebrow: { he: "MyPAS SAP · מערכות ליבה", en: "MyPAS SAP · Core Systems" },
  title: {
    he: [{ text: "הופכים SAP " }, { text: "למנוע צמיחה", hl: true }],
    en: [{ text: "We turn SAP into a " }, { text: "growth engine", hl: true }],
  },
  lead: {
    he: "פיתוח, הדרכה ומרכז פיתוח שלא עוצר — הטכנולוגיה שגורמת לתפעול שלכם פשוט לרוץ. מלווים ארגונים מובילים בישראל ובעולם משנת 2007.",
    en: "Development, training and a delivery center that never stops — the technology that makes your operations simply run. Trusted by leading enterprises in Israel and worldwide since 2007.",
  },
  primaryCta: {
    label: { he: "השירותים שלנו", en: "Our services" },
    href: "#services",
  },
  secondaryCta: {
    label: { he: "דברו איתנו", en: "Talk to us" },
    href: "#contact",
  },
};

export const codeWall: {
  caption: Localized<string>;
  subtitle: Localized<string>;
} = {
  caption: {
    he: "הטכנולוגיה שמשנה איך עסקים עובדים",
    en: "The technology that changes how businesses work",
  },
  subtitle: {
    he: "ABAP · UI5 / FIORI · S/4HANA",
    en: "ABAP · UI5 / FIORI · S/4HANA",
  },
};

export const servicesHead: SectionHead = {
  kicker: { he: "מה אנחנו עושים", en: "What we do" },
  title: {
    he: "שלוש דרכים שבהן אנחנו מספקים SAP",
    en: "Three ways we deliver SAP",
  },
};

export const services: Feature[] = [
  {
    icon: "code",
    title: { he: "פיתוח", en: "Development" },
    body: {
      he: "פיתוח מקצועי ב-ABAP וב-UI5/FIORI בכל המודולים (MM, HR-HCM, PM, CO, WM, FI, SD, PP) והמערכות (ERP-ECC, BW/BI, SRM, CRM, SolMan, GRC), עם תכנון ארכיטקטורה מומלץ וליווי מתמשך.",
      en: "Professional ABAP and UI5/FIORI development across all modules (MM, HR-HCM, PM, CO, WM, FI, SD, PP) and systems (ERP-ECC, BW/BI, SRM, CRM, SolMan, GRC), with recommended architecture and ongoing support.",
    },
  },
  {
    icon: "graduation",
    title: { he: "הדרכה", en: "Training" },
    body: {
      he: "קורסי ABAP / UI5 / FIORI ברמות בסיס ומתקדם למתכנתים, מטמיעים ומנהלים — בהתאמה מלאה וליווי אישי מקצועי.",
      en: "ABAP / UI5 / FIORI courses at basic and advanced levels for programmers, implementers and managers — fully tailored, with personal professional guidance.",
    },
  },
  {
    icon: "support",
    title: { he: "מרכז פיתוח", en: "Development Center" },
    body: {
      he: "מרכז פיתוח מרוחק עם מענה מהיר ויעיל מסביב לשעון, 24/7, בעלות תחרותית במיוחד.",
      en: "A remote development center with fast, efficient responses around the clock, 24/7, at highly competitive cost.",
    },
  },
];

export const processHead: SectionHead = {
  kicker: { he: "איך אנחנו עובדים", en: "How we work" },
  title: {
    he: "מהאפיון ועד האוויר, בלי הפתעות",
    en: "From brief to live, without drama",
  },
};

export const steps: Step[] = [
  {
    title: { he: "אבחון", en: "Discovery" },
    body: {
      he: "ממפים את הצורך, המערכות והיעדים עוד לפני שורת קוד.",
      en: "We map your needs, systems and goals before a line of code.",
    },
  },
  {
    title: { he: "אפיון וארכיטקטורה", en: "Design & architecture" },
    body: {
      he: "פתרון שמתוכנן סביב ארכיטקטורה מומלצת שמחזיקה לאורך זמן.",
      en: "A solution planned around recommended, future-proof architecture.",
    },
  },
  {
    title: { he: "פיתוח", en: "Development" },
    body: {
      he: "ABAP ו-UI5/FIORI נקיים ומתוחזקים, בנויים להחזיק.",
      en: "Clean, maintainable ABAP and UI5/FIORI built to last.",
    },
  },
  {
    title: { he: "בדיקות והטמעה", en: "Test & deploy" },
    body: {
      he: "QA, אינטגרציה והטמעה חלקה לסביבת הייצור.",
      en: "QA, integration and a smooth rollout into production.",
    },
  },
  {
    title: { he: "תמיכה שוטפת", en: "Ongoing support" },
    body: {
      he: "ליווי מתמשך ומרכז פיתוח 24/7 מאחוריכם.",
      en: "Continuous support and a 24/7 development center behind you.",
    },
  },
];

export const whyHead: SectionHead = {
  kicker: { he: "למה MyPAS SAP", en: "Why MyPAS SAP" },
  title: {
    he: "ניסיון אנטרפרייז, בלי החיכוך של אנטרפרייז",
    en: "Enterprise experience, without the enterprise friction",
  },
};

export const why: Feature[] = [
  {
    icon: "history",
    title: { he: "מאז 2007", en: "Since 2007" },
    body: {
      he: "כמעט שני עשורים של פרויקטי SAP לארגונים תובעניים.",
      en: "Nearly two decades delivering SAP for demanding organizations.",
    },
  },
  {
    icon: "shield",
    title: { he: "רמת אנטרפרייז", en: "Enterprise-grade" },
    body: {
      he: "בנקים, בריאות, ביטחון ויצרנים גלובליים סומכים עלינו.",
      en: "Trusted by banks, healthcare, defense and global manufacturers.",
    },
  },
  {
    icon: "layers",
    title: { he: "כיסוי מלא", en: "Full coverage" },
    body: {
      he: "כל מודול וכל מערכת — צוות אחד שמכיר את כולם.",
      en: "Every module and system — one team that knows them all.",
    },
  },
  {
    icon: "clock",
    title: { he: "אספקה 24/7", en: "24/7 delivery" },
    body: {
      he: "מרכז פיתוח מרוחק עם מענה מהיר מסביב לשעון.",
      en: "A remote development center with fast responses around the clock.",
    },
  },
];

export const faqHead: SectionHead = {
  kicker: { he: "שאלות נפוצות", en: "FAQ" },
  title: {
    he: "שאלות טובות, תשובות ישרות",
    en: "Good questions, straight answers",
  },
};

export const faq: QA[] = [
  {
    q: {
      he: "עובדים גם על S/4HANA וגם על ECC?",
      en: "Do you work on both S/4HANA and ECC?",
    },
    a: {
      he: "כן — יישום, שדרוג ואופטימיזציה בשתי הסביבות.",
      en: "Yes — implementation, upgrade and optimization across both environments.",
    },
  },
  {
    q: {
      he: "אפשר מרכז פיתוח במיקור חוץ בלבד?",
      en: "Can we use the development center on its own?",
    },
    a: {
      he: "בהחלט. צוות מרוחק שמשתלב עם ה-IT שלכם, בעלות תחרותית במיוחד.",
      en: "Absolutely. A remote team that plugs into your IT, at a highly competitive cost.",
    },
  },
  {
    q: {
      he: "נותנים הדרכות מותאמות ארגון?",
      en: "Do you offer organization-tailored training?",
    },
    a: {
      he: "כן — קורסי ABAP / UI5 / FIORI בכל הרמות, בהתאמה מלאה לצוות שלכם.",
      en: "Yes — ABAP / UI5 / FIORI courses at every level, fully customized to your team.",
    },
  },
  {
    q: {
      he: "עובדים מול צוות ה-IT הקיים שלנו?",
      en: "Will you work alongside our existing IT team?",
    },
    a: {
      he: "כמובן. אנחנו משתלבים בתהליכים ובמערכות שכבר יש לכם.",
      en: "Of course. We integrate into the processes and systems you already run.",
    },
  },
];

export const teamHead: SectionHead = {
  kicker: { he: "מי מוביל", en: "Who leads it" },
  title: {
    he: "מי אחראי על הפרויקט שלכם",
    en: "Who owns your project",
  },
  subtitle: {
    he: "ומאחוריו אותם מומחי SAP שבנקים, מערכת הבריאות והביטחון סומכים עליהם.",
    en: "And behind him, the same SAP specialists that banks, healthcare and defense rely on.",
  },
};

export const contact: ContactInfo = { email: "info@MyPAS.co.il" };
