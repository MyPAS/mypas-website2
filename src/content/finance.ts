import type {
  ContactInfo,
  Feature,
  Hero,
  QA,
  SectionHead,
  Showcase,
  Step,
} from "./types";
import type { Localized } from "@/lib/i18n";

export const hero: Hero = {
  eyebrow: {
    he: "MyPAS Finance · ניהול פיננסי",
    en: "MyPAS Finance · Better Numbers",
  },
  title: {
    he: [
      { text: "אתם מנהלים עסק. " },
      { text: "אנחנו את המספרים.", hl: true, line: true },
    ],
    en: [
      { text: "You run the business. " },
      { text: "We run the numbers.", hl: true, line: true },
    ],
  },
  lead: {
    he: "ניהול פיננסי מבוסס-טכנולוגיה ו-CFO במיקור חוץ שנותנים לכם שליטה, שקט וראש פנוי לצמוח — עוצמה פיננסית של חברות גדולות, בדיוק במידה שלכם.",
    en: "Tech-driven financial management and outsourced CFO that bring control, transparency and readiness to grow — enterprise-grade financial thinking, sized for your business.",
  },
  primaryCta: {
    label: { he: "הפתרונות שלנו", en: "Our solutions" },
    href: "#solutions",
  },
  secondaryCta: {
    label: { he: "דברו איתנו", en: "Talk to us" },
    href: "#contact",
  },
};

export const platformHead: SectionHead = {
  kicker: { he: "המערכת שלנו", en: "Our platform" },
  title: {
    he: "לא רק מנהלים את המספרים — נותנים לכם לראות אותם",
    en: "We don't just run your numbers — we let you see them",
  },
  subtitle: {
    he: "לכל לקוח ריטיינר יש משתמש משלו למערכת שבנינו — תזרים ותחזית, מעקב תשלומים, חריגות בהוצאות, יעדים, שווי חברה ותמונת שוק. רובה נבנית מתנועות הבנק עצמן, בלי לחכות לסוף החודש.",
    en: "Every retainer client gets their own login to the platform we built — cash flow and forecasting, payment tracking, spend anomalies, goals, a company valuation and a market picture. Most of it is built from the bank movements themselves, with no wait for month-end.",
  },
};

export const platformShot = {
  src: "/finance/dashboard.png",
  width: 2000,
  height: 1489,
  alt: {
    he: "מסך הסקירה במערכת: רצועת התראות, תחזית ל-14 יום, שווי החברה, השוואת קטגוריות הוצאה, יעדי השנה וטבלת תזרים",
    en: "The platform overview screen: an alerts strip, a 14-day forecast, company value, a spend-category comparison, this year's goals and a cash-flow table",
  },
};

export const platformRows: Showcase[] = [
  {
    title: {
      he: "תדעו היום מה יהיה בבנק בעוד חודש",
      en: "Know today what the bank will look like in a month",
    },
    body: {
      he: "המערכת מושכת את תנועות הבנק ומחברת אליהן את מה שעוד צפוי — חשבוניות, הלוואות, שכר — ומציירת את היתרה היומית קדימה מול מסגרת האשראי. 14, 30, 60, 90 או 120 יום, לבחירתכם.",
      en: "The platform pulls your bank movements, layers on what is still expected — invoices, loans, payroll — and draws the daily balance forward against your credit line. 14, 30, 60, 90 or 120 days, your choice.",
    },
    image: {
      src: "/finance/cashflow.png",
      width: 2000,
      height: 638,
      alt: {
        he: "מסך התזרים: גרף יתרה יומית צפויה, בחירת טווח של 14 עד 120 יום, ורשימת תנועות הבנק האחרונות",
        en: "The cash-flow screen: a projected daily balance chart, a 14-to-120-day range selector and a list of recent bank movements",
      },
    },
  },
  {
    title: {
      he: "רק החריגים מגיעים אליכם",
      en: "Only the exceptions reach you",
    },
    body: {
      he: "כל תנועת בנק מותאמת אוטומטית לחשבונית שהיא אמורה לסגור, עם ציון ביטחון. מה שברור נסגר לבד; מה שלא — מחכה לכם במסך אחד, עם סכום, מקור וכפתור אישור. גם מה שבאיחור ומה שצפוי בשבוע הקרוב יושבים שם.",
      en: "Every bank movement is matched automatically to the invoice it should close, with a confidence score. What is clear closes itself; what is not waits on a single screen with the amount, the source and an approve button — alongside what is overdue and what is due this week.",
    },
    image: {
      src: "/finance/matching.png",
      width: 2000,
      height: 672,
      alt: {
        he: "מסך מעקב תשלומים: תנועות הממתינות לאישור, כל אחת עם ציון ביטחון ההתאמה וכפתורי אישור או התאמה אחרת",
        en: "The payment-tracking screen: movements awaiting approval, each with a match-confidence score and approve or re-match buttons",
      },
    },
  },
  {
    title: {
      he: "המערכת מספרת לכם מה השתנה, לפני שתשאלו",
      en: "The platform tells you what changed, before you ask",
    },
    body: {
      he: "כל קטגוריית הוצאה נמדדת מול אותה תקופה בשנה שעברה. כשמשהו זז, זה עולה לראש המסך עם המספר ועם ההקשר — המשכורות עלו ב-289,312 ש״ח (10%), וזו העלייה השלישית ברציפות. משם יורדים לתנועות עצמן ורואים בדיוק ממה זה מורכב.",
      en: "Every spend category is measured against the same period last year. When something moves it surfaces at the top of the screen with the figure and the context — payroll up ₪289,312 (10%), and the third consecutive rise. From there you drill into the movements themselves and see exactly what it is made of.",
    },
    image: {
      src: "/finance/anomalies.png",
      width: 1519,
      height: 640,
      alt: {
        he: "פירוט הוצאות משכורות: התראה על עלייה של 289,312 ש״ח (10%) מול 2025, ומתחתיה רשימת התנועות החודשיות",
        en: "The payroll expense drill-down: an alert about a ₪289,312 (10%) rise against 2025, with the monthly movements listed below it",
      },
    },
  },
  {
    title: {
      he: "יעדים שמישהו באמת עוקב אחריהם",
      en: "Goals someone actually tracks",
    },
    body: {
      he: "הכנסות, רווחיות, תקרת הוצאה לקטגוריה, ניצול מסגרת, גיוס עובדים — כל יעד עם המספר שבו אתם עומדים היום, סטטוס, ושלבים עם תאריך ואחראי. יעד שלא בכיוון מסומן באדום במהלך השנה, לא בדיעבד אחריה.",
      en: "Revenue, margin, a spend ceiling per category, credit utilisation, hiring — every goal carries the number you are actually at, a status, and milestones with a date and an owner. A goal that is off track turns red during the year, not in hindsight after it.",
    },
    image: {
      src: "/finance/goals.png",
      width: 2000,
      height: 627,
      alt: {
        he: "מסך היעדים: הכנסות שנתיות, שיעור רווח תפעולי, תקרת הוצאה לקטגוריה וניצול מסגרת, כל אחד עם סטטוס ושלבים",
        en: "The goals screen: annual revenue, operating margin, a category spend ceiling and credit utilisation, each with a status and milestones",
      },
    },
  },
  {
    title: {
      he: "כמה שווה העסק שלכם — ולמה בדיוק",
      en: "What your business is worth — and exactly why",
    },
    body: {
      he: "הערכת שווי אינדיקטיבית לפי רווח ולפי מחזור, עם פירוק מלא של המכפיל: ×3 בסיס לעסק שירותים, ‎+0.25 על צמיחה, ‎+0.5 על הכנסות קבועות מעל 60%. לא מספר שיוצא מקופסה שחורה — מספר שאפשר להתווכח איתו.",
      en: "An indicative valuation by profit and by revenue, with the multiple broken down in full: ×3 base for a services business, +0.25 for growth, +0.5 for recurring revenue above 60%. Not a number out of a black box — a number you can argue with.",
    },
    image: {
      src: "/finance/valuation.png",
      width: 2000,
      height: 584,
      alt: {
        he: "מסך שווי החברה: הערכה של 5.4 מיליון ש״ח, פירוק המכפיל לרכיביו, והנתונים שמאחורי השווי",
        en: "The company-value screen: a ₪5.4M estimate, the multiple broken into its parts, and the data behind the value",
      },
    },
  },
  {
    title: {
      he: "מה שקורה מחוץ לדוחות שלכם",
      en: "What is happening outside your own books",
    },
    body: {
      he: "המערכת סורקת מכרזים פתוחים, חברות דומות, משרות ומהלכים בשוק שלכם, ומסבירה מה כל ממצא אומר עליכם. כל פריט מקושר למקור ונבדק מולו, ומה שלא עמד בבדיקה פשוט לא מוצג — עם יומן שאומר כמה פריטים הוסרו. אפשר גם לשאול שאלה חופשית ולחבר אותה למספרים שלכם.",
      en: "The platform scans open tenders, similar companies, job postings and moves in your market, and explains what each finding means for you. Every item links to its source and is checked against it, and whatever fails the check is simply not shown — with a log saying how many were dropped. You can also ask a free-text question and have it answered against your own numbers.",
    },
    image: {
      src: "/finance/market.png",
      width: 2000,
      height: 985,
      alt: {
        he: "מסך תמונת שוק: מכרזים פתוחים, חברות דומות, משרות ומהלכים בשוק — כל אחד עם אימות מול המקור ויומן אימות — ותיבת שאלה חופשית",
        en: "The market-picture screen: open tenders, similar companies, jobs and market moves — each with source verification and a verification log — and a free-text question box",
      },
    },
  },
];

export const platformCta: Localized<string> = {
  he: "רוצים לראות את זה על הנתונים שלכם?",
  en: "Want to see this on your own numbers?",
};

export const solutionsHead: SectionHead = {
  kicker: { he: "הפתרונות שלנו", en: "Our solutions" },
  title: {
    he: "כל מה שהפיננסים שלכם צריכים",
    en: "Everything your finances need",
  },
};

export const solutions: Localized<string>[] = [
  { he: "אסטרטגיה ותכנון פיננסי", en: "Financial strategy & planning" },
  { he: "ניהול תזרים ותקציב", en: "Cash flow & budget management" },
  { he: "ניהול חייבים וגבייה שוטפת", en: "Accounts receivable & collection" },
  { he: "עיבוד וניהול שכר", en: "Payroll processing" },
  { he: "הנהלת חשבונות", en: "Bookkeeping & accounting" },
  { he: "קשרי בנקים ומסגרות אשראי", en: "Bank relations & credit lines" },
  {
    he: "ניהול הקשר מול ספקים, לקוחות ועובדים",
    en: "Managing supplier, customer and employee relationships",
  },
  { he: "תיאום מול רואה חשבון", en: "CPA coordination" },
];

export const advantagesHead: SectionHead = {
  kicker: { he: "למה MyPAS Finance", en: "Why MyPAS Finance" },
  title: { he: "היתרונות", en: "The advantages" },
};

export const advantages: Feature[] = [
  {
    icon: "sliders",
    title: { he: "ריטיינר בהתאמה", en: "Tailored retainer" },
    body: {
      he: "מודל ריטיינר מותאם אישית שנבנה סביב העסק שלכם — לא תבנית אחת לכולם.",
      en: "A customized, retainer-based model built around your business — not a one-size template.",
    },
  },
  {
    icon: "trending",
    title: { he: "ראייה תזרימית", en: "Cash-flow foresight" },
    body: {
      he: "תחזית תזרים מדויקת, כך שצורכי אשראי עתידיים ידועים מראש ולעולם לא מפתיעים.",
      en: "Precise cash-flow forecasting so future credit needs are known in advance, never a surprise.",
    },
  },
  {
    icon: "eye",
    title: { he: "שקיפות מלאה", en: "Full transparency" },
    body: {
      he: "נראות פיננסית מלאה שחושפת הזדמנויות לצמצום עלויות לרוחב כל הפעילות.",
      en: "Complete financial visibility that surfaces cost-reduction opportunities across the board.",
    },
  },
  {
    icon: "shield-check",
    title: { he: "שקט נפשי", en: "Peace of mind" },
    body: {
      he: "ניהול פיננסי מקצועי, כדי שתוכלו להתמקד בניהול ובצמיחה של העסק.",
      en: "Professional financial stewardship, so you can focus on running and growing your business.",
    },
  },
];

export const teamHead: SectionHead = {
  kicker: { he: "מי מוביל", en: "Who leads it" },
  title: {
    he: "מי מנהל את המספרים שלכם",
    en: "Who runs your numbers",
  },
  subtitle: {
    he: "ומאחוריה צוות שמנהל את הפיננסים שלכם כאילו זה שלו.",
    en: "And behind her, a team that runs your finances like they're their own.",
  },
};

export const processHead: SectionHead = {
  kicker: { he: "איך אנחנו עובדים", en: "How we work" },
  title: {
    he: "משיחה ראשונה — לשליטה מלאה",
    en: "From first call to full control",
  },
};

export const steps: Step[] = [
  {
    title: { he: "היכרות ואבחון", en: "Intro & diagnosis" },
    body: {
      he: "מכירים את העסק וממפים את התמונה הפיננסית.",
      en: "We get to know your business and map the financial picture.",
    },
  },
  {
    title: { he: "מודל ריטיינר", en: "Retainer model" },
    body: {
      he: "בונים היקף חודשי מותאם סביב הצרכים האמיתיים שלכם.",
      en: "We build a tailored monthly scope around your real needs.",
    },
  },
  {
    title: { he: "הקמה וסדר", en: "Setup & order" },
    body: {
      he: "מכניסים מבנה, תהליכים ודיווח מסודר.",
      en: "We put structure, processes and reporting in place.",
    },
  },
  {
    title: { he: "ניהול שוטף", en: "Ongoing management" },
    body: {
      he: "ניהול פיננסי יומיומי עם דיווח ברור וקבוע.",
      en: "Day-to-day financial management with clear, regular reporting.",
    },
  },
  {
    title: { he: "ראייה קדימה", en: "Forward view" },
    body: {
      he: "תחזית תזרים וליווי למימון צמיחה בביטחון.",
      en: "Cash-flow foresight and guidance to fund growth with confidence.",
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
      he: "זה מתאים לעסק בגודל שלנו?",
      en: "Is this right for a business our size?",
    },
    a: {
      he: "כן — הריטיינר מותאם אישית, ומתאים גם לעסקים קטנים וגם בינוניים.",
      en: "Yes — the retainer is tailored, so it fits small and mid-size businesses alike.",
    },
  },
  {
    q: {
      he: "אתם מחליפים את רואה החשבון?",
      en: "Do you replace our accountant (CPA)?",
    },
    a: {
      he: "לא. אנחנו עובדים לצד רואה החשבון שלכם ומתאמים איתו הכל.",
      en: "No. We work alongside your CPA and coordinate everything with them.",
    },
  },
  {
    q: { he: "איך עובד הריטיינר?", en: "How does the retainer work?" },
    a: {
      he: "חבילה חודשית מותאמת להיקף שלכם — בלי תבנית אחת לכולם.",
      en: "A customized monthly package sized to your scope — no one-size template.",
    },
  },
  {
    q: { he: "תוך כמה זמן מתחילים?", en: "How fast can we start?" },
    a: {
      he: "אחרי אבחון קצר אנחנו מקימים במהירות ומורידים מכם את העומס.",
      en: "After a short diagnosis we set up quickly and take the load off your desk.",
    },
  },
];

export const contact: ContactInfo = {
  email: "Finance@MyPAS.co.il",
  phones: [
    {
      display: "054-9121400",
      href: "+972549121400",
      label: { he: "טלפון מחלקת Finance", en: "Finance desk" },
    },
  ],
};
