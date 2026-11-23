import { ARM_IDS, type ArmId } from "@/lib/arms";
import type { Localized } from "@/lib/i18n";
import type { PhoneNumber } from "./types";

export const BRAND = {
  name: "MyPAS",
  tagline: {
    he: "שירותי ייעוץ מקצועיים",
    en: "Professional Consultancy Services",
  } satisfies Localized<string>,
  groupName: {
    he: "קבוצת MyPAS",
    en: "MyPAS GROUP",
  } satisfies Localized<string>,
};

export const NAV: { path: string; label: Localized<string> }[] = [
  { path: "/", label: { he: "בית", en: "Home" } },
  { path: "/sap", label: { he: "SAP", en: "SAP" } },
  { path: "/finance", label: { he: "Finance", en: "Finance" } },
  { path: "/ai", label: { he: "AI", en: "AI" } },
  { path: "/projects", label: { he: "פרויקטים", en: "Projects" } },
];

export const UI = {
  talkToUs: { he: "דברו איתנו", en: "Talk to us" } satisfies Localized<string>,
  learnMore: {
    he: "לפרטים נוספים",
    en: "Learn more",
  } satisfies Localized<string>,
  skipToContent: {
    he: "דילוג לתוכן",
    en: "Skip to content",
  } satisfies Localized<string>,
  langLabel: {
    he: "שפה",
    en: "Language",
  } satisfies Localized<string>,
  allProjects: {
    he: "כל הפרויקטים",
    en: "All projects",
  } satisfies Localized<string>,
  viewProject: {
    he: "לפרטי הפרויקט",
    en: "View project",
  } satisfies Localized<string>,
  client: { he: "לקוח", en: "Client" } satisfies Localized<string>,
  technologies: {
    he: "טכנולוגיות",
    en: "Technologies",
  } satisfies Localized<string>,
  keyFeatures: {
    he: "תכונות עיקריות",
    en: "Key features",
  } satisfies Localized<string>,
  playVideo: {
    he: "הפעלת הסרטון",
    en: "Play the video",
  } satisfies Localized<string>,
  strength: { he: "חוזקה", en: "Strength" } satisfies Localized<string>,
  gap: { he: "פער", en: "Gap" } satisfies Localized<string>,
  leadership: {
    he: "הנהלת הקבוצה",
    en: "Group leadership",
  } satisfies Localized<string>,
  allFilter: { he: "הכל", en: "All" } satisfies Localized<string>,
  agentsIndex: {
    he: "שלושת הסוכנים",
    en: "The three agents",
  } satisfies Localized<string>,
  toFill: { he: "למילוי: ", en: "To fill in: " } satisfies Localized<string>,
  updatedOn: {
    he: "עודכן לאחרונה",
    en: "Last updated",
  } satisfies Localized<string>,
  pauseMotion: {
    he: "השהיית התנועה",
    en: "Pause motion",
  } satisfies Localized<string>,
  resumeMotion: {
    he: "המשך התנועה",
    en: "Resume motion",
  } satisfies Localized<string>,
  filterLabel: {
    he: "סינון לפי תחום",
    en: "Filter by practice",
  } satisfies Localized<string>,
  challenge: { he: "האתגר", en: "The challenge" } satisfies Localized<string>,
  solution: { he: "הפתרון", en: "The solution" } satisfies Localized<string>,
  result: { he: "התוצאה", en: "The result" } satisfies Localized<string>,
  projectLead: {
    he: "מי הוביל את הפרויקט",
    en: "Who led this project",
  } satisfies Localized<string>,
  enlarge: {
    he: "הגדלת התמונה",
    en: "Enlarge the image",
  } satisfies Localized<string>,
  close: { he: "סגירה", en: "Close" } satisfies Localized<string>,
};

/** Pages that only ever appear in the footer. */
export const LEGAL_NAV: { path: string; label: Localized<string> }[] = [
  { path: "/accessibility", label: { he: "הצהרת נגישות", en: "Accessibility" } },
  { path: "/privacy", label: { he: "מדיניות פרטיות", en: "Privacy policy" } },
];

export const FOOTER = {
  armsTitle: { he: "הזרועות", en: "Arms" } satisfies Localized<string>,
  siteTitle: { he: "האתר", en: "Site" } satisfies Localized<string>,
  reachTitle: { he: "יצירת קשר", en: "Contact" } satisfies Localized<string>,
  legalTitle: { he: "מידע משפטי", en: "Legal" } satisfies Localized<string>,
  linkedin: { he: "לינקדאין", en: "LinkedIn" } satisfies Localized<string>,
};

export const CONTACT = {
  kicker: { he: "יצירת קשר", en: "Contact" } satisfies Localized<string>,
  title: {
    he: "בואו נבנה עסק טוב יותר",
    en: "Let's build a better business",
  } satisfies Localized<string>,
  subtitle: {
    he: "ספרו לנו איפה אתם ולאן אתם רוצים להגיע.",
    en: "Tell us where you are and where you want to be.",
  } satisfies Localized<string>,
  button: { he: "צרו קשר", en: "Get in touch" } satisfies Localized<string>,
  emailLabel: { he: "אימייל", en: "Email" } satisfies Localized<string>,
  phoneLabel: { he: "טלפון", en: "Phone" } satisfies Localized<string>,
  defaultEmail: "info@MyPAS.co.il",

  /** The company line. Shown in the contact section of every page and in the footer. */
  phone: {
    display: "054-7984054",
    href: "+972547984054",
  } satisfies PhoneNumber,

  /**
   * Company LinkedIn page. While this is empty the footer link is not
   * rendered, so the site never ships a social icon that leads nowhere.
   * TODO(MyPAS): paste the company page URL here.
   */
  linkedinUrl: "",

  /**
   * Calendly scheduling link. While this is empty the booking button is not
   * rendered at all, so the site never ships a button that leads nowhere.
   */
  bookingUrl: "https://calendly.com/amit-mypas/30min",
  bookingButton: {
    he: "תאמו פגישה",
    en: "Book a meeting",
  } satisfies Localized<string>,
  bookingNote: {
    he: "שיחת היכרות של 30 דקות, ב-Google Meet או אצלכם",
    en: "A 30-minute intro call, on Google Meet or at your office",
  } satisfies Localized<string>,
};

export type TeamMember = {
  slug: string;
  photo: string;
  initials: string;
  name: Localized<string>;
  role: Localized<string>;
};

/**
 * The company is shown in three tiers rather than as one flat row of
 * "partners": the two people who run it, the three who run an arm, and the
 * two who founded it. A prospect reading the home page can then tell who
 * decides, who will be on their project, and where the firm came from.
 */

/** Runs MyPAS day to day. */
export const EXECS: TeamMember[] = [
  {
    slug: "adi-weisbach",
    photo: "/team/adi-weisbach.webp",
    initials: "AW",
    name: { he: "עדי ויסבך", en: "Adi Weisbach" },
    role: { he: "מנכ״ל", en: "CEO" },
  },
  {
    slug: "amit-weiss",
    photo: "/team/amit-weiss.webp",
    initials: "AW",
    name: { he: "עמית ויס", en: "Amit Weiss" },
    role: { he: "CTO", en: "CTO" },
  },
];

/** Founded MyPAS. Shown as a credit under the people running it today. */
export const FOUNDERS: TeamMember[] = [
  {
    slug: "oded-weisbach",
    photo: "/team/oded-weisbach.webp",
    initials: "OW",
    name: { he: "עודד ויסבך", en: "Oded Weisbach" },
    role: { he: "מייסד", en: "Founder" },
  },
  {
    slug: "michael-yarden",
    photo: "/team/michael-yarden.webp",
    initials: "MY",
    name: { he: "מיכאל (מיקי) ירדן", en: "Michael (Miki) Yarden" },
    role: { he: "מייסד", en: "Founder" },
  },
];

/** The person who runs one arm day to day. */
export type DeptHead = TeamMember & { arm: ArmId };

export const HEADS: Record<ArmId, DeptHead> = {
  sap: {
    slug: "tom-slilat",
    arm: "sap",
    photo: "/team/tom-slilat.webp",
    initials: "TS",
    name: { he: "תום סלילת", en: "Tom Slilat" },
    role: { he: "ראש מחלקת SAP", en: "Head of SAP" },
  },
  finance: {
    slug: "neta-brokman",
    arm: "finance",
    photo: "/team/neta-brokman.webp",
    initials: "NB",
    name: { he: "נטע ברוקמן", en: "Neta Brokman" },
    role: { he: "ראש מחלקת Finance", en: "Head of Finance" },
  },
  ai: {
    slug: "yehonatan-kellner",
    arm: "ai",
    photo: "/team/yehonatan-kellner.webp",
    initials: "YK",
    name: { he: "יהונתן קלנר", en: "Yehonatan Kellner" },
    role: { he: "ראש מחלקת AI", en: "Head of AI" },
  },
};

export const HEAD_LIST: DeptHead[] = ARM_IDS.map((id) => HEADS[id]);

/** Headings for the three tiers of the org section. */
export const ORG_LABELS = {
  execs: { he: "הנהלה", en: "Leadership" } satisfies Localized<string>,
  heads: {
    he: "ראשי המחלקות",
    en: "Department heads",
  } satisfies Localized<string>,
  founders: {
    he: "מייסדי MyPAS",
    en: "MyPAS founders",
  } satisfies Localized<string>,
};
