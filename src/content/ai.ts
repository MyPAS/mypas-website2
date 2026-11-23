import type {
  AgentCase,
  ContactInfo,
  Feature,
  Hero,
  QA,
  RichText,
  SectionHead,
  Step,
} from "./types";
import type { Localized } from "@/lib/i18n";

export const hero: Hero = {
  eyebrow: {
    he: "MyPAS AI · סוכנים תפעוליים",
    en: "MyPAS AI · Operational agents",
  },
  title: {
    he: [
      { text: "תוכנה שמריצה את העסק. " },
      { text: "לא מתעדת אותו.", hl: true, line: true },
    ],
    en: [
      { text: "Software that runs the business. " },
      { text: "Not software that records it.", hl: true, line: true },
    ],
  },
  lead: {
    he: "ה-ERP שלכם יודע מה קרה. הגיליון יודע מה קרה. ביניהם יושב אדם שמעתיק, בודק ורודף אחרי אנשים כדי שהחודש ייסגר. את התפקיד הזה אנחנו מוחקים.",
    en: "Your ERP knows what happened. Your spreadsheet knows what happened. Between them sits a person who copies, checks and chases people so the month can close. That is the job we delete.",
  },
  primaryCta: {
    label: { he: "הסוכנים שרצים עכשיו", en: "Agents running today" },
    href: "#agents",
  },
  secondaryCta: {
    label: { he: "דברו איתנו", en: "Talk to us" },
    href: "#contact",
  },
};

export const quote: Localized<RichText> = {
  he: [
    { text: "„בארגון ענק יש אגף שלם שדואג שהמערכות ידברו זו עם זו. " },
    { text: "בעסק שלכם זה אדם אחד, והוא עושה את זה בשבע בערב.", hl: true },
    { text: "”" },
  ],
  en: [
    { text: "“A large enterprise has a whole division making its systems talk. " },
    { text: "In your business it is one person, doing it at seven in the evening.", hl: true },
    { text: "”" },
  ],
};

/* ---------------- the agents ---------------- */

export const agentsHead: SectionHead = {
  kicker: { he: "סוכנים בפעולה", en: "Agents at work" },
  title: {
    he: "שלושה סוכנים. כולם רצים על עבודה אמיתית.",
    en: "Three agents. All of them running real work.",
  },
  subtitle: {
    he: "לא הדגמות ולא צ׳אטבוטים. שלושת אלה קוראים נתונים, מתכתבים עם בני אדם, ומוציאים בסוף את הקבצים שמישהו היה צריך להכין ביד.",
    en: "Not demos, and not chatbots. These three read data, correspond with people, and produce the files somebody used to prepare by hand.",
  },
};

export const agents: AgentCase[] = [
  {
    id: "hours",
    name: { he: "סוכן השעות", en: "The Hours Agent" },
    role: {
      he: "סוגר מחזור שכר וחיוב לקוחות, מקצה לקצה",
      en: "Closes the payroll and client-billing cycle, end to end",
    },
    claim: {
      he: "23 עובדים, 68 קבצים, אף אחד שרודף אחרי אף אחד",
      en: "23 employees, 68 files, nobody chasing anybody",
    },
    body: {
      he: "בתחילת כל חודש הסוכן אוסף את דוחות השעות, בודק פורמט, ימי עבודה ופערים, ומצליב ימי חופשה מול האישורים בפועל. למי שחסר משהו הוא שולח מייל אישי, מחכה, ובודק מחדש כשהקובץ מגיע. בסוף הוא מוציא את קובץ השכר ואת קובץ החיוב ללקוחות — ומריץ בדיקה פנימית משלו לפני שמשהו יוצא.",
      en: "At the start of each month the agent collects the timesheets, checks format, working days and gaps, and cross-checks reported leave against the approvals that actually exist. Anyone with something missing gets a personal email, and the agent waits and re-checks when the file arrives. At the end it produces the payroll file and the client billing file — after running its own internal audit on them.",
    },
    stats: [
      {
        value: { he: "23", en: "23" },
        label: { he: "עובדים במחזור חודשי", en: "employees in the monthly cycle" },
      },
      {
        value: { he: "68", en: "68" },
        label: { he: "קבצי שעות שנבדקו אחד-אחד", en: "timesheets checked one by one" },
      },
      {
        value: { he: "0", en: "0" },
        label: {
          he: "אנשים שרודפים אחרי אישורי חופשה",
          en: "people chasing anyone for leave approvals",
        },
      },
    ],
    artifact: {
      kind: "chat",
      title: {
        he: "קבוצת התפעול, מחזור ספטמבר",
        en: "The operations group, September cycle",
      },
      turns: [
        {
          from: "agent",
          at: { he: "7 באוקטובר · 01:38", en: "7 Oct · 01:38" },
          lines: [
            { he: "דוח סיכום מחזור — ספטמבר", en: "Cycle summary — September" },
            { he: "16 מתוך 23 עובדים תקינים. 7 בבירור:", en: "16 of 23 employees clean. 7 in clarification:" },
            { he: "• 3 ממתינים לאישורי חופשה", en: "• 3 waiting on leave approvals" },
            { he: "• 1 עם 6 פערים יומיים", en: "• 1 with 6 daily gaps" },
            { he: "• 1 עם 3 ימים ריקים", en: "• 1 with 3 empty days" },
            { he: "• 1 קובץ פגום", en: "• 1 corrupted file" },
            { he: "קבצי פלט מוכנים: סיכום שכר · חיוב לקוחות · טבלת נתוני שכר", en: "Output files ready: payroll summary · client billing · payroll data table" },
            { he: "✅ audit פנימי עבר — T0=T1=T2 מאומת", en: "✅ Internal audit passed — T0=T1=T2 verified" },
          ],
        },
        {
          from: "human",
          at: { he: "09:15", en: "09:15" },
          lines: [
            {
              he: "תודה, ביקשתי מהם להעביר את האישורים",
              en: "Thanks, I asked them to send the approvals over",
            },
          ],
        },
        {
          from: "agent",
          at: { he: "09:15", en: "09:15" },
          lines: [
            { he: "👍 אעקוב ואעדכן כשיגיעו.", en: "👍 I'll track it and update you when they land." },
          ],
        },
        {
          from: "human",
          at: { he: "11 באוקטובר · 11:42", en: "11 Oct · 11:42" },
          lines: [{ he: "📎 דוח שעות.xlsx", en: "📎 timesheet.xlsx" }],
        },
        {
          from: "agent",
          at: { he: "11:43", en: "11:43" },
          lines: [
            { he: "✅ הקובץ התקבל ונבדק", en: "✅ File received and checked" },
            { he: "✓ פורמט Excel תקין", en: "✓ Excel format valid" },
            { he: "✓ 13 ימי עבודה מזוהים", en: "✓ 13 working days identified" },
            { he: "✓ 12 ימי מילואים", en: "✓ 12 reserve-duty days" },
            { he: "⚠️ 45.02 שעות חוסר — נדרש בירור", en: "⚠️ 45.02 hours short — needs clarification" },
            { he: "📂 הועבר ל-Drive", en: "📂 Filed to Drive" },
          ],
        },
        {
          from: "human",
          at: { he: "12:10", en: "12:10" },
          lines: [{ he: "מה הסטטוס הכללי?", en: "What's the overall status?" }],
        },
        {
          from: "agent",
          at: { he: "12:10", en: "12:10" },
          lines: [
            { he: "📊 ספטמבר — 17 מתוך 23 הושלמו", en: "📊 September — 17 of 23 complete" },
            { he: "⏳ 4 בתהליך (חסרים אישורים)", en: "⏳ 4 in progress (approvals missing)" },
            { he: "❌ 2 חסרים לחלוטין", en: "❌ 2 still missing entirely" },
            { he: "🔔 תזכורת אחרונה נשלחה 08/10 · הבאה מתוזמנת 12/10", en: "🔔 Last reminder sent 08/10 · next scheduled 12/10" },
          ],
        },
      ],
    },
  },

  {
    id: "interviews",
    name: { he: "סוכן הראיונות", en: "The Interview Agent" },
    role: {
      he: "מראיין מועמדים טכניים — ומזהה מי נשען על AI",
      en: "Interviews technical candidates — and spots who is leaning on AI",
    },
    claim: {
      he: "שואל את שאלת ההמשך שלמראיין האנושי לא נשאר זמן לשאול",
      en: "Asks the follow-up a human interviewer never gets around to",
    },
    body: {
      he: "נותנים לו את תיאור המשרה ואת מה שבאמת רוצים לבדוק, והוא בונה תוכנית ראיון שאפשר לערוך לפני שמפרסמים. הוא מראיין בעברית או באנגלית, חופר בדיוק במקום שבו התשובה הייתה דקה, מסמן תשובות שנשמעות מיוצרות ולא חיות, ומחזיר דוח שבו כל ממצא נשען על משפט שהמועמד באמת אמר.",
      en: "You give it the role and what you actually want to find out, and it drafts an interview plan you can edit before publishing. It interviews in Hebrew or English, digs exactly where an answer was thin, flags answers that sound generated rather than lived, and returns a report where every finding rests on a sentence the candidate actually said.",
    },
    stats: [
      {
        value: { he: "0", en: "0" },
        label: { he: "פגישות יומן למגייס", en: "calendar slots from the recruiter" },
      },
      {
        value: { he: "24/7", en: "24/7" },
        label: { he: "המועמד נכנס מתי שנוח לו", en: "the candidate sits down when it suits them" },
      },
      {
        value: { he: "100%", en: "100%" },
        label: {
          he: "מהממצאים מגובים בציטוט מהראיון",
          en: "of findings backed by a quote from the interview",
        },
      },
    ],
    artifact: {
      kind: "score",
      title: { he: "דוח ראיון · מפתח/ת ABAP", en: "Interview report · ABAP developer" },
      score: 56,
      verdict: { he: "לא מתאים למשרה הזו", en: "Not a fit for this role" },
      findings: [
        {
          kind: "strength",
          title: {
            he: "דיבאג אמיתי ומסודר על קוד שלא הכיר",
            en: "Genuine, structured debugging on code he had never seen",
          },
          quote: {
            he: "„הייתי שם breakpoint לפני הלולאה ובודק מה ה-internal table מחזיקה בסיבוב הראשון.”",
            en: "“I'd set a breakpoint before the loop and look at what the internal table holds on the first pass.”",
          },
        },
        {
          kind: "strength",
          title: {
            he: "מבקש הבהרה על אפיון חלקי במקום לנחש",
            en: "Asks for clarification on an incomplete spec instead of guessing",
          },
          quote: {
            he: "„לפני שאני כותב משהו — ההזמנה הזו אמורה להיסגר אוטומטית או שמישהו מאשר ידנית?”",
            en: "“Before I write anything — is this order meant to close automatically, or does someone approve it by hand?”",
          },
        },
        {
          kind: "strength",
          title: {
            he: "ישר לגבי גבולות הניסיון שלו",
            en: "Honest about the limits of his own experience",
          },
          quote: {
            he: "„עבדתי מול זה, אבל לא אני בניתי את זה. אני לא רוצה להישמע כאילו כן.”",
            en: "“I worked against it, but I didn't build it. I don't want to sound like I did.”",
          },
        },
        {
          kind: "gap",
          title: {
            he: "לא כתב בעצמו תוכנית שרצה בפרודקשן",
            en: "Has not authored a program that ran in production",
          },
          quote: {
            he: "אחרי שלוש שאלות המשך לא הצליח לתאר תוכנית אחת שהוא כתב מאפס והופעלה אצל לקוח.",
            en: "After three follow-ups he could not describe one program he wrote from scratch that went live at a customer.",
          },
        },
        {
          kind: "gap",
          title: {
            he: "טעות במבני ABAP בסיסיים",
            en: "Got basic ABAP constructs wrong",
          },
          quote: {
            he: "בלבל בין SELECT בתוך לולאה לבין FOR ALL ENTRIES, וחזר על הבלבול גם אחרי רמז.",
            en: "Confused a SELECT inside a loop with FOR ALL ENTRIES, and repeated it after a hint.",
          },
        },
        {
          kind: "gap",
          title: {
            he: "תשובה אחת נראתה מיוצרת, לא מנוסה",
            en: "One answer read as generated rather than lived",
          },
          quote: {
            he: "תשובה ארוכה ומסודרת מדי שהתפרקה בשאלת ההמשך הראשונה על מקרה קצה אמיתי.",
            en: "A long, suspiciously tidy answer that fell apart on the first follow-up about a real edge case.",
          },
        },
      ],
    },
  },

  {
    id: "marketplace",
    name: { he: "Agent Marketplace", en: "Agent Marketplace" },
    role: {
      he: "סוכנים תפעוליים שעובדים בתוך SAP",
      en: "Operational agents working inside SAP",
    },
    claim: {
      he: "הסוכן לא יושב ליד SAP. הוא עובד בתוכו.",
      en: "The agent doesn't sit beside SAP. It works inside it.",
    },
    body: {
      he: "חמישה סוכנים, כל אחד תחום לעולם אחד — מכירות, רכש, כספים, משאבי אנוש ופיתוח. כל אחד מקבל רק את הכלים שהתפקיד שלו מצדיק, שואלים אותו בשפה חופשית והוא עונה מתוך נתוני SAP החיים. כשהחיפוש לא מדויק או שהתוצאות נחתכו — הוא אומר את זה מיוזמתו, במקום להגיש ניחוש כעובדה.",
      en: "Five agents, each scoped to one domain — sales, procurement, finance, HR and development. Each gets only the tools its role justifies; you ask in plain language and it answers from live SAP data. When a search was inexact or results were truncated it says so unprompted, instead of serving a guess as fact.",
    },
    stats: [
      {
        value: { he: "5", en: "5" },
        label: { he: "סוכנים, כל אחד תחום לתחום שלו", en: "agents, each scoped to its domain" },
      },
      {
        value: { he: "20", en: "20" },
        label: { he: "כלים מאובטחים, מוקצים לפי תפקיד", en: "secured tools, assigned by role" },
      },
      {
        value: { he: "0", en: "0" },
        label: {
          he: "כתיבות ל-SAP בלי אישור של אדם",
          en: "writes into SAP without a human approving",
        },
      },
    ],
    artifact: {
      kind: "shot",
      title: { he: "ה‑Marketplace", en: "The marketplace" },
      src: "/projects/agent-marketplace.png",
      width: 2000,
      height: 1437,
      alt: {
        he: "מסך ה-Agent Marketplace — חמישה סוכנים, כל אחד עם הכלים של התפקיד שלו",
        en: "The Agent Marketplace screen — five agents, each with the tools of its role",
      },
    },
    href: "/projects/agent-marketplace",
  },
];

/* ---------------- what makes an agent real ---------------- */

export const realHead: SectionHead = {
  kicker: { he: "איך לבדוק אותנו", en: "How to test us" },
  title: {
    he: "שישה דברים שמפרידים בין סוכן לבין הדגמה",
    en: "Six things that separate an agent from a demo",
  },
  subtitle: {
    he: "שאלו את זה כל ספק AI שנכנס אליכם לחדר. אותנו כולל.",
    en: "Ask this of every AI vendor who walks into your room. Us included.",
  },
};

export const real: Feature[] = [
  {
    icon: "check-circle",
    title: { he: "הוא מסיים, לא ממליץ", en: "It finishes, it doesn't suggest" },
    body: {
      he: "סוכן אמיתי מוציא קובץ, שולח מייל, מעדכן רשומה. אם בסוף התהליך בנאדם עדיין מעתיק משהו ממסך אחד לשני — זו הדגמה.",
      en: "A real agent produces a file, sends a mail, updates a record. If a person still copies something from one screen to another at the end, it is a demo.",
    },
  },
  {
    icon: "message",
    title: { he: "הוא מתכתב עם בני אדם", en: "It corresponds with people" },
    body: {
      he: "החלק הקשה בתהליך עסקי הוא לא החישוב — אלא לרדוף אחרי מי שלא שלח. סוכן שלא פונה לאנשים בערוץ שהם באמת קוראים נעצר בשלב הראשון.",
      en: "The hard part of a business process is not the arithmetic — it is chasing whoever hasn't sent it. An agent that cannot reach people in the channel they actually read stops at step one.",
    },
  },
  {
    icon: "help-circle",
    title: { he: "הוא יודע מה הוא לא יודע", en: "It knows what it doesn't know" },
    body: {
      he: "כשחסר מידע הוא אומר שחסר, ולא ממציא מספר שנראה סביר. זה ההבדל בין כלי שסומכים עליו לבין כלי שבודקים אחריו.",
      en: "When something is missing it says so, instead of inventing a plausible-looking number. That is the difference between a tool you trust and a tool you check after.",
    },
  },
  {
    icon: "trail",
    title: { he: "הוא משאיר עקבות", en: "It leaves a trail" },
    body: {
      he: "כל פעולה מתועדת, ובדיקה פנימית רצה לפני שמשהו יוצא החוצה. אפשר לשחזר אחורה מאיפה הגיע כל מספר בקובץ.",
      en: "Every action is logged and an internal audit runs before anything leaves. You can trace any number in the file back to where it came from.",
    },
  },
  {
    icon: "pause",
    title: { he: "הוא נעצר במקום הנכון", en: "It stops in the right place" },
    body: {
      he: "החלטות עם משמעות כספית או משפטית מחכות לאישור אדם. אוטונומיה היא לא הפקרות, וסוכן טוב יודע מתי לעצור ולשאול.",
      en: "Decisions with money or legal weight wait for a human. Autonomy is not a free-for-all, and a good agent knows when to stop and ask.",
    },
  },
  {
    icon: "plug",
    title: { he: "הוא חי בתוך המערכות שלכם", en: "It lives inside your systems" },
    body: {
      he: "SAP, מייל, וואטסאפ, Drive, אקסל — הסוכן עובד שם, לא בממשק נפרד שצריך לזכור להיכנס אליו בשביל שמשהו יקרה.",
      en: "SAP, mail, WhatsApp, Drive, Excel — the agent works there, not in a separate console someone has to remember to open.",
    },
  },
];

export const stripTitle: Localized<string> = {
  he: "איזה תהליך אצלכם נסגר כל חודש רק בזכות אדם אחד שזוכר הכל?",
  en: "Which process in your business closes each month only because one person remembers everything?",
};

/* ---------------- how we start ---------------- */

export const processHead: SectionHead = {
  kicker: { he: "איך מתחילים", en: "How we start" },
  title: {
    he: "תהליך אחד. מחזור אחד. ואז מחליטים.",
    en: "One process. One cycle. Then you decide.",
  },
};

export const steps: Step[] = [
  {
    title: { he: "בוחרים תהליך אחד שכואב", en: "Pick one process that hurts" },
    body: {
      he: "לא אסטרטגיית AI. תהליך אחד שחוזר כל חודש ושורף ימים.",
      en: "Not an AI strategy. One process that repeats monthly and burns days.",
    },
  },
  {
    title: { he: "מפרקים אותו לצעדים ולהחלטות", en: "Break it into steps and decisions" },
    body: {
      he: "מה המערכת כבר יודעת, מה בנאדם מחליט, ואיפה בדיוק זה נתקע.",
      en: "What the system already knows, what a person decides, and exactly where it jams.",
    },
  },
  {
    title: { he: "בונים סוכן שסוגר אותו", en: "Build an agent that closes it" },
    body: {
      he: "מחובר למערכות שכבר יש לכם. בלי להחליף כלום.",
      en: "Connected to the systems you already run. Nothing gets replaced.",
    },
  },
  {
    title: { he: "מריצים חודש לצד הדרך הישנה", en: "Run a month alongside the old way" },
    body: {
      he: "משווים תוצאות. אם הסוכן טועה — רואים את זה לפני שזה עולה כסף.",
      en: "Compare the output. If the agent is wrong, you see it before it costs anything.",
    },
  },
  {
    title: { he: "עוברים לתהליך הבא", en: "Move to the next process" },
    body: {
      he: "כשהראשון רץ לבד, השני לוקח חלק קטן מהזמן.",
      en: "Once the first one runs itself, the second takes a fraction of the time.",
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
    q: { he: "ומה קורה כשהסוכן טועה?", en: "And what happens when the agent is wrong?" },
    a: {
      he: "רואים איפה בדיוק, כי כל פעולה מתועדת. בתהליכים עם משמעות כספית הוא לא מוציא כלום בלי אישור אדם, ובחודש הראשון הוא רץ במקביל לדרך הישנה — כך שטעות מתגלה מול התוצאה הנכונה, ולא מול הבנק.",
      en: "You see exactly where, because every action is logged. In anything with financial weight it releases nothing without human approval, and in the first month it runs alongside the old way — so a mistake shows up against the correct result, not against your bank account.",
    },
  },
  {
    q: { he: "כמה זמן עד שרואים משהו רץ?", en: "How long until something is actually running?" },
    a: {
      he: "המדד שלנו הוא מחזור עסקי אחד. אם אחרי מחזור אחד הסוכן לא סגר תהליך אמיתי מקצה לקצה — בנינו את הדבר הלא נכון, וזה הזמן להגיד את זה.",
      en: "Our yardstick is one business cycle. If after one cycle the agent has not closed a real process end to end, we built the wrong thing — and that is the moment to say so.",
    },
  },
  {
    q: { he: "מה קורה עם הנתונים שלנו?", en: "What happens to our data?" },
    a: {
      he: "זו השאלה הראשונה שצריך לשאול כל ספק, ולכן היא נסגרת אצלנו באפיון ולא בנספח: איפה הנתונים יושבים, מי ניגש אליהם, מה נשמר ולכמה זמן. בלי שזה כתוב, אין מה להתחיל.",
      en: "It is the first question to ask any vendor, so we settle it in the design phase rather than in an annex: where the data sits, who can reach it, what is retained and for how long. Until that is written down there is nothing to start.",
    },
  },
  {
    q: { he: "זה יחליף לנו עובדים?", en: "Will this replace our people?" },
    a: {
      he: "סוכן השעות לא החליף אף אחד. הוא לקח את החלק שבו מישהו יושב ורודף אחרי 23 אנשים בשביל אישורי חופשה. מי שעשה את זה קודם עושה עכשיו דברים שדורשים שיקול דעת.",
      en: "The hours agent replaced nobody. It took over the part where someone sits and chases 23 people for leave approvals. Whoever used to do that now does the work that needs judgement.",
    },
  },
  {
    q: { he: "אנחנו לא על SAP. זה רלוונטי לנו?", en: "We're not on SAP. Is this relevant to us?" },
    a: {
      he: "כן. SAP הוא המקום שבו אנחנו הכי עמוקים, אבל סוכן השעות עובד מול מייל, וואטסאפ, אקסל ו-Drive. מה שצריך זה מערכות שאפשר לקרוא ולכתוב אליהן — לא מותג מסוים.",
      en: "Yes. SAP is where we go deepest, but the hours agent works against mail, WhatsApp, Excel and Drive. What it needs is systems it can read from and write to — not a particular brand.",
    },
  },
];

export const teamHead: SectionHead = {
  kicker: { he: "מי מוביל", en: "Who leads it" },
  title: {
    he: "מי בונה את הסוכנים האלה",
    en: "Who builds these agents",
  },
  subtitle: {
    he: "מהנדסים שמכירים מבפנים גם את המודלים וגם את מערכות הליבה שהם צריכים לעבוד מולן.",
    en: "Engineers who know both the models and the core business systems they have to work against.",
  },
};

export const contact: ContactInfo = { email: "info@MyPAS.co.il" };
