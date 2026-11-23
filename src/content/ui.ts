import type { Localized } from "@/lib/i18n";

type L = Localized<string>;

/** Interface copy introduced by the redesign (all derived from the original site). */
export const T = {
  menu: { he: "תפריט", en: "Menu" } satisfies L,
  close: { he: "סגירה", en: "Close" } satisfies L,
  home: { he: "בית", en: "Home" } satisfies L,
  explore: { he: "לעולם של", en: "Explore" } satisfies L,
  enter: { he: "כניסה לזרוע", en: "Enter the arm" } satisfies L,
  view: { he: "לפרטי הפרויקט", en: "View project" } satisfies L,
  allProjects: { he: "לכל הפרויקטים", en: "All projects" } satisfies L,
  all: { he: "הכל", en: "All" } satisfies L,
  video: { he: "כולל הדגמת וידאו", en: "Includes video demo" } satisfies L,
  copy: { he: "העתקת הכתובת", en: "Copy address" } satisfies L,
  copied: { he: "הועתק ✓", en: "Copied ✓" } satisfies L,
  write: { he: "כתבו לנו", en: "Write to us" } satisfies L,
  call: { he: "התקשרו", en: "Call" } satisfies L,
  arms: { he: "הזרועות", en: "The arms" } satisfies L,
  company: { he: "החברה", en: "Company" } satisfies L,
  contact: { he: "קשר", en: "Contact" } satisfies L,
  rights: {
    he: "כל הזכויות שמורות",
    en: "All rights reserved",
  } satisfies L,
  backTop: { he: "חזרה למעלה", en: "Back to top" } satisfies L,
  nextProject: { he: "הפרויקט הבא", en: "Next project" } satisfies L,
  overview: { he: "סקירה", en: "Overview" } satisfies L,
  arm: { he: "זרוע", en: "Arm" } satisfies L,
  scroll: { he: "גללו", en: "Scroll" } satisfies L,
  moreArms: { he: "עוד בקבוצת MyPAS", en: "More from MyPAS" } satisfies L,
  notFoundTitle: { he: "העמוד לא נמצא", en: "Page not found" } satisfies L,
  notFoundBody: {
    he: "ייתכן שהקישור ישן או שהעמוד עבר מקום. אפשר להמשיך מכאן:",
    en: "The link may be old, or the page may have moved. You can continue from here:",
  } satisfies L,
  emailSubject: {
    he: "פנייה מאתר MyPAS",
    en: "Enquiry from the MyPAS website",
  } satisfies L,
};

/** Facts lifted from the original copy, presented as a stats row. */
export const STATS: { value: string; label: L }[] = [
  {
    value: "2007",
    label: {
      he: "השנה שבה התחלנו ללוות ארגונים מובילים",
      en: "The year we started serving leading enterprises",
    },
  },
  {
    value: "24/7",
    label: {
      he: "מרכז פיתוח עם מענה מסביב לשעון",
      en: "Development center, around the clock",
    },
  },
  {
    value: "20+",
    label: {
      he: "לקוחות על פתרון חשבוניות ישראל",
      en: "Clients on our Israel Invoices solution",
    },
  },
  {
    value: "3",
    label: {
      he: "זרועות מתמחות — והמשפחה גדלה",
      en: "Specialised arms — and growing",
    },
  },
];
