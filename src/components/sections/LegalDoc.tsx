import { Kicker } from "@/components/ui/primitives";
import type { LegalDoc as Doc } from "@/content/legal";
import { CONTACT, UI } from "@/content/site";
import type { Locale } from "@/lib/i18n";

export default function LegalDoc({ doc, locale }: { doc: Doc; locale: Locale }) {
  const updated = new Intl.DateTimeFormat(locale === "he" ? "he-IL" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(doc.updated));

  return (
    <>
      <section className="ahero" style={{ paddingBottom: 40 }}>
        <div className="isogrid" aria-hidden="true" />
        <div className="wrap" style={{ position: "relative" }}>
          <Kicker>
            {UI.updatedOn[locale]} · <time dateTime={doc.updated}>{updated}</time>
          </Kicker>
          <h1 className="h1 hero__title">{doc.title[locale]}</h1>
          <p className="lead hero__lead">{doc.intro[locale]}</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap legal">
          {doc.sections.map((section, i) => (
            <section key={section.heading.en} className="legal__sec">
              <h2 className="h3">
                <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                {section.heading[locale]}
              </h2>
              <div>
                {section.paragraphs?.map((p) => <p key={p.en}>{p[locale]}</p>)}
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((b) => (
                      <li key={b.en}>{b[locale]}</li>
                    ))}
                  </ul>
                ) : null}
                {section.todo ? (
                  /* deliberately conspicuous: a legally required detail MyPAS still has to fill */
                  <p className="legal__todo">
                    <b>{UI.toFill[locale]}</b>
                    {section.todo[locale]}
                  </p>
                ) : null}
              </div>
            </section>
          ))}
          <p className="legal__foot">
            <a className="link ltr" href={`mailto:${CONTACT.defaultEmail}`}>
              {CONTACT.defaultEmail}
            </a>
            <span aria-hidden="true">·</span>
            <a className="link" href={`tel:${CONTACT.phone.href}`} dir="ltr">
              {CONTACT.phone.display}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
