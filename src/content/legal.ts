import type { Localized } from "@/lib/i18n";

export type DocSection = {
  heading: Localized<string>;
  paragraphs?: Localized<string>[];
  bullets?: Localized<string>[];
  /** rendered as a visibly marked gap for MyPAS to fill in */
  todo?: Localized<string>;
};

export type LegalDoc = {
  title: Localized<string>;
  intro: Localized<string>;
  /** ISO date, rendered in the reader's language */
  updated: string;
  sections: DocSection[];
};

/* ------------------------------------------------------------------ */

export const accessibility: LegalDoc = {
  title: { he: "הצהרת נגישות", en: "Accessibility statement" },
  intro: {
    he: "קבוצת MyPAS רואה חשיבות במתן שירות שוויוני לכלל הלקוחות, ופועלת להנגשת האתר בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), תשע״ג-2013, ולתקן הישראלי ת״י 5568 ברמת AA, המבוסס על הנחיות WCAG 2.0.",
    en: "MyPAS Group is committed to serving all of its clients equally, and works to keep this site accessible in line with the Israeli Equal Rights for Persons with Disabilities Regulations (Service Accessibility Adjustments), 2013, and Israeli Standard 5568 at level AA, which is based on the WCAG 2.0 guidelines.",
  },
  updated: "2026-11-09",
  sections: [
    {
      heading: { he: "מה הונגש באתר", en: "What has been made accessible" },
      paragraphs: [
        {
          he: "האתר נבנה מהיסוד עם מבנה סמנטי, ולא הונגש בדיעבד בעזרת תוסף חיצוני. ההתאמות שבוצעו כוללות:",
          en: "The site was built with a semantic structure from the start, rather than retrofitted with an overlay plugin. The adjustments in place include:",
        },
      ],
      bullets: [
        {
          he: "מבנה כותרות היררכי ותקין בכל עמוד, ואזורי ניווט, תוכן וסיום מסומנים סמנטית.",
          en: "A valid, hierarchical heading structure on every page, with navigation, main content and footer marked up semantically.",
        },
        {
          he: "הפעלה מלאה במקלדת: כל קישור, כפתור, שדה ורכיב נפתח נגישים בטאב, בסדר הגיוני, עם סימון מיקוד חזותי ברור.",
          en: "Full keyboard operation: every link, button, field and expandable component is reachable by Tab, in a logical order, with a clearly visible focus indicator.",
        },
        {
          he: "קישור ״דילוג לתוכן״ בתחילת כל עמוד.",
          en: "A “skip to content” link at the start of every page.",
        },
        {
          he: "טקסט חלופי לכל התמונות התוכניות, וסימון תמונות דקורטיביות כך שקורא מסך מדלג עליהן.",
          en: "Alternative text on every meaningful image, with decorative images marked so a screen reader skips them.",
        },
        {
          he: "יחסי ניגודיות העומדים ברמה AA בכל רכיבי הטקסט, כולל כפתורי הפעולה ובורר השפה.",
          en: "Contrast ratios meeting level AA across all text, including the action buttons and the language switcher.",
        },
        {
          he: "תמיכה מלאה בהגדלה ל-200% ללא גלילה אופקית וללא אובדן תוכן, ועד לרוחב מסך של 320 פיקסלים.",
          en: "Full support for 200% zoom with no horizontal scrolling and no loss of content, down to a 320-pixel viewport.",
        },
        {
          he: "כיבוד העדפת המערכת להפחתת תנועה (prefers-reduced-motion): כל האנימציות נעצרות.",
          en: "The system preference for reduced motion (prefers-reduced-motion) is honoured: all animation stops.",
        },
        {
          he: "לרצועת הלקוחות הנעה יש כפתור השהיה נגיש במקלדת, בנוסף להשהיה במעבר עכבר.",
          en: "The moving client strip has a keyboard-reachable pause button, in addition to pausing on hover.",
        },
        {
          he: "רכיבי השאלות והתשובות וחלון הגדלת התמונה מדווחים את מצבם לטכנולוגיה מסייעת (aria-expanded, חלון מודאלי תקני עם מלכוד מיקוד ויציאה במקש Esc).",
          en: "The FAQ accordions and the image lightbox report their state to assistive technology (aria-expanded, and a native modal dialog with focus trapping and Escape to close).",
        },
        {
          he: "האתר מוגש בעברית ובאנגלית, וכל עמוד מסומן בשפה ובכיוון הכתיבה הנכונים שלו.",
          en: "The site is served in Hebrew and English, and every page declares its correct language and writing direction.",
        },
      ],
    },
    {
      heading: { he: "כיצד נבדק", en: "How it was tested" },
      paragraphs: [
        {
          he: "הבדיקה האחרונה בוצעה בתאריך שמופיע בתחתית עמוד זה, וכללה:",
          en: "The most recent audit was carried out on the date shown at the foot of this page, and covered:",
        },
      ],
      bullets: [
        {
          he: "בדיקה אוטומטית בכלי axe-core מול כללי WCAG 2.0 ו-2.1 ברמות A ו-AA, בכל סוגי העמודים, בשתי השפות, ברוחב מסך 1440 ו-390 פיקסלים — כולל מצבים פתוחים של רכיבי השאלות והתשובות וחלון התמונה. לא נמצאו ליקויים.",
          en: "An automated audit with axe-core against the WCAG 2.0 and 2.1 rules at levels A and AA, across every page type, in both languages, at 1440 and 390 pixels wide — including the open states of the FAQ accordions and the image lightbox. No violations were found.",
        },
        {
          he: "ניווט ידני במקלדת בלבד, ובדיקה שכל רכיב הניתן למיקוד נושא שם נגיש.",
          en: "Manual keyboard-only navigation, and a check that every focusable element carries an accessible name.",
        },
        {
          he: "מדידה ידנית של ניגודיות במקומות שכלי אוטומטי אינו יכול למדוד, כגון טקסט מעל מעבר צבע. הכפתור הראשי תוקן בעקבות בדיקה זו.",
          en: "Hand measurement of contrast where an automated tool cannot measure it, such as text over a gradient. The primary button was corrected as a result of this check.",
        },
        {
          he: "בדיקת הגדלה ל-200% ובדיקת רוחבי מסך של 320, 390 ו-640 פיקסלים.",
          en: "A 200% zoom check and checks at 320, 390 and 640-pixel viewport widths.",
        },
        {
          he: "בדיקת עץ הנגישות של הדפדפן, לאימות השמות והתפקידים שטכנולוגיה מסייעת מקבלת.",
          en: "An inspection of the browser's accessibility tree, verifying the names and roles that assistive technology receives.",
        },
      ],
    },
    {
      heading: { he: "מגבלות ידועות", en: "Known limitations" },
      paragraphs: [
        {
          he: "אנחנו מעדיפים לומר במפורש מה עדיין לא הושלם:",
          en: "We would rather say plainly what is not yet done:",
        },
      ],
      bullets: [
        {
          he: "בדיקה ידנית מקצה לקצה עם קורא מסך (VoiceOver ו-NVDA) טרם הושלמה. הבדיקות שבוצעו מאמתות את המבנה והשמות שקורא מסך מקבל, אך אינן תחליף לבדיקה בפועל.",
          en: "An end-to-end manual test with a screen reader (VoiceOver and NVDA) has not yet been completed. The checks performed verify the structure and names a screen reader receives, but they are not a substitute for the real thing.",
        },
        {
          he: "סרטון ההדגמה מתנגן בנגן YouTube מוטמע. הנגן הוא רכיב של צד שלישי ואיננו שולטים ברמת הנגישות שלו. עד להפעלת הנגן לא נטען ממנו דבר.",
          en: "The demo video plays in an embedded YouTube player. The player is a third-party component whose accessibility is outside our control. Nothing is loaded from it until it is started.",
        },
        {
          he: "צילומי מסך של מערכות הם תמונות. הם נושאים תיאור טקסטואלי ואפשר להגדיל אותם, אך הנתונים שבתוכם אינם נקראים על ידי קורא מסך.",
          en: "Product screenshots are images. They carry a text description and can be enlarged, but the data inside them is not read out by a screen reader.",
        },
      ],
    },
    {
      heading: {
        he: "רכז הנגישות בארגון",
        en: "Accessibility coordinator",
      },
      paragraphs: [
        {
          he: "נתקלתם בקושי בגלישה באתר? נשמח לשמוע ולתקן. אפשר לפנות לרכז הנגישות שלנו:",
          en: "Ran into a problem using the site? We would like to hear about it and fix it. You can reach our accessibility coordinator:",
        },
      ],
      todo: {
        he: "שם רכז הנגישות · טלפון ישיר · כתובת דוא״ל · שעות מענה",
        en: "Coordinator name · direct phone · email address · hours",
      },
    },
    {
      heading: {
        he: "נגישות במשרדי החברה",
        en: "Accessibility at our offices",
      },
      todo: {
        he: "כתובת המשרד · פרטי נגישות הבניין (חניה, כניסה, מעלית, שירותים) · שעות קבלת קהל",
        en: "Office address · building accessibility details (parking, entrance, lift, toilets) · public reception hours",
      },
    },
  ],
};

/* ------------------------------------------------------------------ */

export const privacy: LegalDoc = {
  title: { he: "מדיניות פרטיות", en: "Privacy policy" },
  intro: {
    he: "המדיניות הזו מסבירה איזה מידע נאסף כשאתם גולשים באתר MyPAS, מה נעשה בו ומה הזכויות שלכם. היא מתארת את האתר הזה בלבד, ולא שירותים אחרים שאנחנו מספקים ללקוחותינו.",
    en: "This policy explains what information is collected when you browse the MyPAS site, what is done with it and what your rights are. It describes this website only, not the other services we provide to our clients.",
  },
  updated: "2026-11-09",
  sections: [
    {
      heading: { he: "איזה מידע נאסף", en: "What is collected" },
      bullets: [
        {
          he: "האתר אינו כולל טופס יצירת קשר ואינו מבקש מכם להירשם. אם לא יצרתם איתנו קשר ביוזמתכם, לא מסרתם לנו כאן שום פרט מזהה.",
          en: "The site has no contact form and does not ask you to register. If you have not contacted us of your own accord, you have given us no identifying detail here.",
        },
        {
          he: "כשאתם שולחים אלינו דוא״ל או מתקשרים, המידע שבפנייה נשמר אצלנו לצורך הטיפול בה ולצורך קשר עסקי המשכי.",
          en: "When you email or call us, the content of that approach is kept so we can handle it and continue the business conversation.",
        },
        {
          he: "שרתי האירוח שומרים יומני גישה טכניים — כתובת IP, סוג דפדפן, העמוד שנצפה והמועד — לצורך אבטחה ותפעול תקין.",
          en: "Our hosting servers keep technical access logs — IP address, browser type, the page viewed and the time — for security and correct operation.",
        },
      ],
    },
    {
      heading: { he: "עוגיות ושירותי צד שלישי", en: "Cookies and third parties" },
      bullets: [
        {
          he: "האתר אינו מציב עוגיות מעקב ואינו מריץ כלי אנליטיקה של צד שלישי.",
          en: "The site sets no tracking cookies and runs no third-party analytics.",
        },
        {
          he: "הגופנים נטענים משירות Google Fonts, שמקבל בעת הטעינה את כתובת ה-IP שלכם.",
          en: "Fonts are loaded from Google Fonts, which receives your IP address when they are fetched.",
        },
        {
          he: "סרטון ההדגמה מוטמע מ-YouTube במצב מוגן פרטיות, ואינו נטען כלל עד שתלחצו על הפעלה. מרגע ההפעלה חלים תנאי השימוש ומדיניות הפרטיות של Google.",
          en: "The demo video is embedded from YouTube in privacy-enhanced mode and is not loaded at all until you press play. From that point Google's terms and privacy policy apply.",
        },
        {
          he: "כפתור ״תאמו פגישה״ מוביל לשירות Calendly. קביעת פגישה שם כפופה למדיניות הפרטיות של Calendly.",
          en: "The “Book a meeting” button leads to Calendly. Booking there is subject to Calendly's privacy policy.",
        },
      ],
    },
    {
      heading: { he: "שימוש ושמירה", en: "Use and retention" },
      bullets: [
        {
          he: "מידע שמסרתם משמש אך ורק למענה לפנייתכם ולקשר עסקי. איננו מוכרים מידע ואיננו מעבירים אותו לצדדים שלישיים לצורכי שיווק.",
          en: "Information you provide is used solely to answer your approach and to maintain a business relationship. We do not sell information and do not pass it to third parties for marketing.",
        },
        {
          he: "המידע נשמר כל עוד הוא נחוץ למטרה שלשמה נמסר, או כנדרש על פי דין.",
          en: "Information is kept for as long as it is needed for the purpose it was given for, or as required by law.",
        },
      ],
    },
    {
      heading: { he: "הזכויות שלכם", en: "Your rights" },
      paragraphs: [
        {
          he: "על פי חוק הגנת הפרטיות, התשמ״א-1981, אתם רשאים לעיין במידע שנשמר עליכם, לבקש לתקן אותו ולבקש למחוק אותו. לפנייה בנושא אפשר לכתוב אלינו לכתובת שבתחתית העמוד, ונשיב בתוך זמן סביר.",
          en: "Under the Israeli Protection of Privacy Law, 1981, you may review the information held about you, ask for it to be corrected and ask for it to be deleted. To do so, write to us at the address at the foot of this page and we will respond within a reasonable time.",
        },
      ],
    },
    {
      heading: { he: "שינויים במדיניות", en: "Changes to this policy" },
      paragraphs: [
        {
          he: "נעדכן את המדיניות הזו אם ישתנה האופן שבו האתר עובד. תאריך העדכון האחרון מופיע בתחתית העמוד.",
          en: "We will update this policy if the way the site works changes. The date of the last update appears at the foot of the page.",
        },
      ],
    },
  ],
};
