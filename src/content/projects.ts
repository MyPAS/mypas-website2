import type { ArmId } from "@/lib/arms";
import type { Localized } from "@/lib/i18n";
import type { SectionHead } from "./types";

/** What the client said, in their words. */
export type Testimonial = {
  quote: Localized<string>;
  author: Localized<string>;
  /** role and company, e.g. "CFO, Lumenis" */
  role?: Localized<string>;
};

export type Project = {
  slug: string;
  /** a project can belong to more than one arm (first one drives the theme) */
  arms: ArmId[];
  title: Localized<string>;
  client: Localized<string>;
  summary: Localized<string>;
  tech: string[];
  features: Localized<string>[];
  /**
   * The fixed story every project page tells: the problem, what we built,
   * what it changed, and what the client said about it. Each one is optional
   * and a missing one renders nothing at all — no placeholder copy, and no
   * invented numbers standing in for a result nobody measured yet.
   */
  challenge?: Localized<string>;
  solution?: Localized<string>;
  result?: Localized<string>;
  testimonial?: Testimonial;
  image?: {
    src: string;
    width: number;
    height: number;
    caption: Localized<string>;
  };
  /** when present the image above doubles as the video poster */
  video?: {
    youtubeId: string;
    title: string;
  };
  /** further screenshots, shown under the hero on the project page */
  shots?: {
    src: string;
    width: number;
    height: number;
    caption: Localized<string>;
  }[];
};

export const PROJECTS: Project[] = [
  {
    slug: "finance-platform",
    arms: ["finance"],
    title: {
      he: "מערכת הניהול הפיננסי של MyPAS",
      en: "The MyPAS financial management platform",
    },
    client: { he: "לקוחות ריטיינר", en: "Retainer clients" },
    summary: {
      he: "המערכת שכל לקוח ריטיינר מקבל אליה משתמש: תזרים ותחזית עד 120 יום, התאמה אוטומטית של תנועות בנק לחשבוניות, זיהוי חריגות בהוצאות מול אשתקד, יעדים עם אחראי ותאריך, הערכת שווי מפורקת לרכיביה ותמונת שוק מאומתת מול מקורות. רובה נבנית מתנועות הבנק עצמן, בלי לחכות לסוף החודש.",
      en: "The platform every retainer client gets a login to: cash flow and forecasting out to 120 days, automatic matching of bank movements to invoices, spend anomalies against last year, goals with an owner and a date, a valuation broken into its parts, and a market picture verified against its sources. Most of it is built from the bank movements themselves, with no wait for month-end.",
    },
    tech: ["Open Banking", "React", "Python", "PostgreSQL"],
    features: [
      {
        he: "תחזית יתרה יומית מול מסגרת האשראי, ל-14 עד 120 יום",
        en: "A projected daily balance against the credit line, 14 to 120 days out",
      },
      {
        he: "התאמה אוטומטית של תנועת בנק לחשבונית, עם ציון ביטחון — רק החריגים מגיעים לאישור",
        en: "Automatic bank-movement-to-invoice matching with a confidence score — only the exceptions need approval",
      },
      {
        he: "חריגה בקטגוריית הוצאה עולה לראש המסך עם המספר וההקשר, וניתנת לפירוק עד התנועה",
        en: "A spend-category anomaly surfaces with the figure and the context, and drills down to the movement",
      },
      {
        he: "יעדים עם סטטוס, שלבים, תאריך ואחראי — יעד שלא בכיוון מסומן במהלך השנה",
        en: "Goals with a status, milestones, a date and an owner — an off-track goal turns red during the year",
      },
      {
        he: "הערכת שווי אינדיקטיבית עם פירוק מלא של המכפיל, לא מספר מקופסה שחורה",
        en: "An indicative valuation with the multiple broken down in full, not a number out of a black box",
      },
      {
        he: "תמונת שוק שכל פריט בה מקושר למקור ונבדק מולו; מה שנפל בבדיקה לא מוצג",
        en: "A market picture where every item links to its source and is checked against it; whatever fails is not shown",
      },
    ],
    image: {
      src: "/finance/dashboard.png",
      width: 2000,
      height: 1489,
      caption: {
        he: "מסך הסקירה: רצועת התראות, תחזית ל-14 יום, שווי החברה, השוואת קטגוריות הוצאה, יעדי השנה וטבלת תזרים",
        en: "The overview screen: an alerts strip, a 14-day forecast, company value, a spend-category comparison, this year's goals and a cash-flow table",
      },
    },
    shots: [
      {
        src: "/finance/cashflow.png",
        width: 2000,
        height: 638,
        caption: {
          he: "מסך התזרים: גרף יתרה יומית צפויה, בחירת טווח של 14 עד 120 יום, ורשימת תנועות הבנק האחרונות",
          en: "The cash-flow screen: a projected daily balance chart, a 14-to-120-day range selector and recent bank movements",
        },
      },
      {
        src: "/finance/matching.png",
        width: 2000,
        height: 672,
        caption: {
          he: "מסך מעקב תשלומים: תנועות הממתינות לאישור, כל אחת עם ציון ביטחון ההתאמה",
          en: "The payment-tracking screen: movements awaiting approval, each with a match-confidence score",
        },
      },
      {
        src: "/finance/anomalies.png",
        width: 1519,
        height: 640,
        caption: {
          he: "פירוט הוצאות משכורות: התראה על עלייה של 289,312 ש\u05f4ח (10%) מול 2025, ומתחתיה רשימת התנועות",
          en: "The payroll drill-down: an alert about a \u20aa289,312 (10%) rise against 2025, with the movements below it",
        },
      },
      {
        src: "/finance/valuation.png",
        width: 2000,
        height: 584,
        caption: {
          he: "מסך שווי החברה: הערכה, פירוק המכפיל לרכיביו, והנתונים שמאחורי השווי",
          en: "The company-value screen: the estimate, the multiple broken into its parts, and the data behind it",
        },
      },
      {
        src: "/finance/market.png",
        width: 2000,
        height: 985,
        caption: {
          he: "מסך תמונת שוק: מכרזים, חברות דומות, משרות ומהלכים — כל אחד עם אימות מול המקור",
          en: "The market-picture screen: tenders, similar companies, jobs and market moves — each verified against its source",
        },
      },
    ],
  },
  {
    slug: "israel-invoices",
    arms: ["sap"],
    title: {
      he: "חשבוניות ישראל — אינטגרציה עם רשות המיסים",
      en: "Israel Invoices — Tax Authority integration",
    },
    client: { he: "מעל 20 לקוחות", en: "20+ clients" },
    summary: {
      he: "פתרון מקיף לעמידה בתקנת רשות המיסים למספרי הקצאה בחשבוניות. המערכת מבצעת אינטגרציה מלאה עם רשות המיסים באמצעות REST API עם OAuth 2.0, וכוללת מוניטור חכם לטיפול בשגיאות.",
      en: "A complete solution for meeting the Israeli Tax Authority's allocation-number regulation. It integrates directly with the Tax Authority over REST API with OAuth 2.0, and ships with a smart monitor for handling errors.",
    },
    tech: ["ABAP", "REST API", "OAuth 2.0", "SAP FI/SD"],
    features: [
      {
        he: "מספרי הקצאה אוטומטיים בחשבוניות לקוח",
        en: "Automatic allocation numbers on customer invoices",
      },
      {
        he: "ולידציה למספרי הקצאה בחשבונית ספק",
        en: "Validation of allocation numbers on vendor invoices",
      },
      {
        he: "מוניטור חכם לטיפול בשגיאות ואישורים",
        en: "A smart monitor for errors and approvals",
      },
      {
        he: "שידור קובץ PCN יחד עם מספרי ההקצאה הרלוונטיים",
        en: "PCN file submission together with the relevant allocation numbers",
      },
      {
        he: "הוספת מספרי ההקצאה על פלטי החשבונית",
        en: "Allocation numbers printed on invoice output",
      },
    ],
    image: {
      src: "/projects/israel-invoices.png",
      width: 1024,
      height: 513,
      caption: {
        he: "ממשק ניהול האינטגרציה מול רשות המיסים",
        en: "Tax Authority integration management screen",
      },
    },
  },
  {
    slug: "agent-marketplace",
    arms: ["ai", "sap"],
    title: {
      he: "Agent Marketplace — סוכני AI תפעוליים ל‑SAP",
      en: "Agent Marketplace — operational AI agents for SAP",
    },
    client: { he: "MyPAS — פיתוח פנימי", en: "MyPAS — in-house" },
    summary: {
      he: "מרקטפלייס של סוכני AI, שכל אחד מהם מומחה לתחום SAP אחד — מכירות, רכש, כספים, משאבי אנוש ופיתוח. כל סוכן מקבל רק את ה-Skills והכלים שהתפקיד שלו מצדיק, עובד מול נתוני ה-SAP החיים, ואומר במפורש כשהתשובה חלקית — במקום להגיש ניחוש כעובדה.",
      en: "A marketplace of AI agents, each an expert in a single SAP domain — sales, procurement, finance, HR and development. Every agent gets only the Skills and tools its role justifies, works against live SAP data, and says plainly when an answer is partial instead of serving a guess as fact.",
    },
    tech: [
      "Azure AI Foundry",
      "SAP SD",
      "SAP MM",
      "SAP FI",
      "SAP HCM",
      "ABAP",
      "Function calling",
      "RAG",
    ],
    features: [
      {
        he: "חמישה סוכנים, כל אחד תחום לעולם התוכן שלו — SD, MM, FI, HCM ופיתוח",
        en: "Five agents, each scoped to its own domain — SD, MM, FI, HCM and development",
      },
      {
        he: "7 Skills עסקיים ו-20 כלים מאובטחים, שמוקצים לסוכן לפי התפקיד ולא לפי מה שאפשר",
        en: "7 business Skills and 20 secured tools, assigned to each agent by role rather than by what is technically possible",
      },
      {
        he: "שאלות בשפה חופשית מול נתוני SAP אמיתיים — מק\"טים, מלאי, מחירים והזמנות",
        en: "Plain-language questions against real SAP data — materials, stock, prices and orders",
      },
      {
        he: "הסוכן מציין בעצמו כשהחיפוש אינו מדויק או כשהתוצאות נחתכו, ומציע איך לחדד",
        en: "The agent flags by itself when a search is inexact or results were truncated, and suggests how to narrow it",
      },
      {
        he: "כתיבה ל-SAP עוברת אישור אנושי — הסוכן מציע, מנהל מאשר",
        en: "Writes to SAP go through human approval — the agent proposes, a manager approves",
      },
      {
        he: "מעקב, הערכה וניטור של כל שיחה — לפני העלייה לאוויר ואחריה",
        en: "Tracing, evaluation and monitoring of every conversation — before go-live and after",
      },
      {
        he: "ממשק צ'אט או קולי, משולב במערכות שהארגון כבר עובד איתן",
        en: "A chat or voice interface, embedded in the systems the organisation already uses",
      },
    ],
    image: {
      src: "/projects/agent-marketplace.png",
      width: 2000,
      height: 1437,
      caption: {
        he: "ה-Marketplace — חמישה סוכנים, כל אחד עם ה-Skills והכלים של התפקיד שלו",
        en: "The marketplace — five agents, each with the Skills and tools of its role",
      },
    },
    shots: [
      {
        src: "/projects/agent-marketplace-chat.png",
        width: 1906,
        height: 952,
        caption: {
          he: "סוכן המכירות עונה מתוך נתוני SAP — ומציין מיוזמתו שהחיפוש היה חופשי ושהתוצאות הוגבלו ל-50",
          en: "The sales agent answers from SAP data — and notes unprompted that the search was free-text and the results were capped at 50",
        },
      },
      {
        src: "/projects/ai-agents.png",
        width: 1872,
        height: 1053,
        caption: {
          he: "הגדרת סוכן ב-Azure AI Foundry — הוראות, כלים, מעקב והערכה",
          en: "Configuring an agent in Azure AI Foundry — instructions, tools, tracing and evaluation",
        },
      },
    ],
  },
  {
    slug: "vendor-onboarding",
    arms: ["sap"],
    title: {
      he: "דיגיטציה לתהליך הקמת ספק ב‑SAP",
      en: "Digitizing vendor onboarding in SAP",
    },
    client: { he: "לומיניס", en: "Lumenis" },
    summary: {
      he: "פיתוח מערכת מקיפה לניהול תהליך הקמת ספקים חדשים במערכת SAP, כולל ממשק משתמש אינטואיטיבי, תהליכי אישור מתקדמים ואינטגרציה מלאה עם SAP.",
      en: "An end-to-end system for onboarding new vendors in SAP — an intuitive interface, advanced approval flows and full SAP integration.",
    },
    tech: ["ABAP", "UI5", "FIORI", "Workflow"],
    features: [
      {
        he: "ממשק דיגיטלי מלא לניהול בקשות",
        en: "A fully digital interface for managing requests",
      },
      {
        he: "תהליכי אישור חכמים ואוטומטיים",
        en: "Smart, automated approval flows",
      },
      {
        he: "אינטגרציה מלאה עם SAP Backend",
        en: "Full integration with the SAP backend",
      },
      { he: "דשבורד ניהולי מתקדם", en: "Advanced management dashboard" },
      {
        he: "תמיכה ב-AI Assistant מובנה",
        en: "Built-in AI assistant support",
      },
    ],
    image: {
      src: "/projects/vendor-onboarding.png",
      width: 1024,
      height: 678,
      caption: { he: "דשבורד ראשי", en: "Main dashboard" },
    },
  },
  {
    slug: "field-sales-app",
    arms: ["sap"],
    title: {
      he: "אפליקציית מכירות לסוכני שטח",
      en: "Field sales app for sales agents",
    },
    client: { he: "תנובה", en: "Tnuva" },
    summary: {
      he: "אפליקציה מתקדמת לסוכני מכירות בשטח המאפשרת ניהול הזמנות, מעקב אחר לקוחות, סנכרון מלאי ואינטגרציה מלאה עם מערכת SAP. האפליקציה מותאמת לעבודה אופליין עם סנכרון אוטומטי.",
      en: "A field-ready app for sales agents: order management, customer tracking, inventory sync and full SAP integration — built to keep working offline and sync automatically.",
    },
    tech: ["FIORI", "UI5", "ABAP", "Mobile"],
    features: [
      {
        he: "ממשק מותאם למובייל וטאבלט",
        en: "An interface tuned for mobile and tablet",
      },
      {
        he: "עבודה במצב אופליין עם סנכרון אוטומטי",
        en: "Offline mode with automatic sync",
      },
      {
        he: "ניהול הזמנות ומלאי בזמן אמת",
        en: "Real-time order and inventory management",
      },
      {
        he: "מעקב אחר לקוחות ויעדי מכירה",
        en: "Customer and sales-target tracking",
      },
      { he: "אינטגרציה מלאה עם SAP SD", en: "Full integration with SAP SD" },
    ],
    image: {
      src: "/projects/field-sales-app.png",
      width: 1024,
      height: 492,
      caption: { he: "מסך ניהול הזמנות", en: "Order management screen" },
    },
  },
  {
    slug: "ui5-portal",
    arms: ["sap"],
    title: {
      he: "החלפת פורטל Web Dynpro Java לפורטל UI5",
      en: "Replacing a Web Dynpro Java portal with UI5",
    },
    client: { he: "בזק", en: "Bezeq" },
    summary: {
      he: "שדרוג מקיף של פורטל עובדים ישן מטכנולוגיית Web Dynpro Java לפורטל מודרני מבוסס UI5 לקראת שדרוג ל-S/4 HANA. הפרויקט כלל התאמה מלאה למובייל ושיפור משמעותי בחוויית המשתמש ובביצועים.",
      en: "A full upgrade of a legacy employee portal from Web Dynpro Java to a modern UI5 portal ahead of an S/4HANA migration — mobile-ready, with a markedly better experience and performance.",
    },
    tech: ["UI5", "FIORI", "ABAP", "S/4 HANA"],
    features: [
      {
        he: "החלפת פורטל ישן בטכנולוגיה מודרנית לפני שדרוג S/4",
        en: "Replacing the legacy portal with modern tech ahead of the S/4 upgrade",
      },
      {
        he: "התאמה מלאה למובייל וטאבלט",
        en: "Full mobile and tablet support",
      },
      {
        he: "ממשק משתמש משופר וחוויה מודרנית",
        en: "A refreshed interface and modern experience",
      },
      {
        he: "ביצועים משופרים ומהירות טעינה גבוהה",
        en: "Improved performance and faster load times",
      },
      {
        he: "תמיכה מלאה בעברית וממשק RTL",
        en: "Full Hebrew and RTL support",
      },
    ],
    image: {
      src: "/projects/ui5-portal.png",
      width: 1024,
      height: 466,
      caption: { he: "פורטל עובדים מודרני", en: "The modern employee portal" },
    },
  },
  {
    slug: "ai-hub",
    arms: ["ai", "sap"],
    title: {
      he: "AI-HUB — עיבוד מסמכים חכם",
      en: "AI-HUB — intelligent document processing",
    },
    client: { he: "לקוחות בארץ ובעולם", en: "Clients in Israel and abroad" },
    summary: {
      he: "פתרון אוטומציה מתקדם לעיבוד מסמכים המשלב בינה מלאכותית של Microsoft AI Hub עם אינטגרציה מלאה למערכות SAP. המערכת מאפשרת חילוץ אוטומטי של נתונים מחשבוניות וטפסים בדיוק גבוה.",
      en: "A document-processing automation solution that pairs Microsoft AI Hub with full SAP integration, extracting data from invoices and forms automatically and with high accuracy.",
    },
    tech: ["AI Hub", "Azure AI OCR", "ABAP", "SAP Integration"],
    features: [
      {
        he: "אוטומציה מלאה לחילוץ נתונים מחשבוניות, טפסים ומסמכים",
        en: "Full automation for extracting data from invoices, forms and documents",
      },
      {
        he: "Azure AI OCR מבטיח דיוק גבוה ותמיכה בשפות מרובות",
        en: "Azure AI OCR delivers high accuracy and multi-language support",
      },
      {
        he: "אינטגרציה פשוטה עם מערכות SAP לתהליכי עבודה חלקים",
        en: "Simple integration with SAP systems for smooth workflows",
      },
      {
        he: "ניתן להרחבה לטיפול בכמויות גדולות של מסמכים",
        en: "Scales to high document volumes",
      },
    ],
    image: {
      src: "/projects/ai-hub.png",
      width: 1280,
      height: 720,
      caption: {
        he: "AI-HUB — חשבונית ספק מגיעה במייל או בסריקה, עוברת עיבוד, ונכנסת ל-SAP",
        en: "AI-HUB — a vendor invoice arrives by mail or scan, is processed, and lands in SAP",
      },
    },
    video: {
      youtubeId: "auUQz2VF8ug",
      title: "AI-HUB",
    },
  },
  {
    slug: "sap-mcp",
    arms: ["ai", "sap"],
    title: {
      he: "MCP — שאילתות ופעולות ב‑SAP בשפה טבעית",
      en: "MCP — natural-language queries and actions in SAP",
    },
    client: { he: "MyPAS — פיתוח פנימי", en: "MyPAS — in-house" },
    summary: {
      he: "שרת MCP שחושף תהליכי SAP ככלים שמודל שפה יכול להפעיל. במקום להיכנס לטרנזקציה, המשתמש מבקש בשפה חופשית — והמודל מריץ את הפעולה מול ה-SAP דרך ממשק מבוקר, עם אותן הרשאות ואותן ולידציות של המערכת.",
      en: "An MCP server that exposes SAP processes as tools a language model can call. Instead of navigating a transaction, the user asks in plain language and the model runs the operation against SAP through a controlled interface — with the system's own authorisations and validations.",
    },
    tech: ["MCP", "Claude", "Azure AI", "SAP AI Core", "OData"],
    features: [
      {
        he: "שאילתות על נתוני SAP בשפה חופשית, בעברית או באנגלית",
        en: "Plain-language queries over SAP data, in Hebrew or English",
      },
      {
        he: "הפעלת תהליכים עסקיים — למשל פתיחת שותף עסקי — ישירות מהשיחה",
        en: "Running business processes — creating a business partner, for example — straight from the conversation",
      },
      {
        he: "כל כלי עובר דרך ממשק מוגדר, עם ההרשאות והבדיקות של SAP",
        en: "Every tool goes through a defined interface, under SAP's own authorisations and checks",
      },
      {
        he: "אותו שרת משרת מודלים שונים — Claude, Azure AI ו-SAP AI Core",
        en: "One server serves different models — Claude, Azure AI and SAP AI Core",
      },
    ],
    image: {
      src: "/projects/sap-mcp.png",
      width: 2052,
      height: 1276,
      caption: {
        he: "פתיחת שותף עסקי ב-SAP מתוך שיחה, דרך כלי MCP",
        en: "Creating a business partner in SAP from a conversation, through an MCP tool",
      },
    },
  },
];

export const projectsHead: SectionHead = {
  kicker: { he: "פרויקטים", en: "Projects" },
  title: { he: "פרויקטים נבחרים", en: "Selected projects" },
  subtitle: {
    he: "הצצה לפתרונות שפיתחנו ללקוחותינו — מה נבנה, באיזו טכנולוגיה, ומה זה נתן.",
    en: "A look at what we built for our clients — what it does, what it runs on, and what it changed.",
  },
};

export const moreProjectsHead: SectionHead = {
  title: { he: "פרויקטים נוספים", en: "More projects" },
};

export function projectsForArm(arm: ArmId): Project[] {
  return PROJECTS.filter((project) => project.arms.includes(arm));
}

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
