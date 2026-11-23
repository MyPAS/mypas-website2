import type { Localized } from "@/lib/i18n";

export type Client = {
  id: string;
  name: Localized<string>;
  /**
   * Path to a monochrome SVG in `public/clients/`, e.g. "/clients/bezeq.svg".
   * When this is set the file is shown in place of the wordmark below, at the
   * same height as every other logo in the strip. Until a real, licensed
   * brand asset is in hand the client is shown as a typographic wordmark,
   * which is honest and localises properly — a fabricated logo would not.
   */
  logo?: string;
};

export const CLIENTS: Client[] = [
  { id: "applied-materials", name: { he: "Applied Materials", en: "Applied Materials" } },
  { id: "medtronic", name: { he: "Medtronic", en: "Medtronic" } },
  { id: "lumenis", name: { he: "Lumenis", en: "Lumenis" } },
  { id: "bezeq", name: { he: "בזק", en: "Bezeq" } },
  { id: "hapoalim", name: { he: "בנק הפועלים", en: "Bank Hapoalim" } },
  { id: "leumi", name: { he: "בנק לאומי", en: "Bank Leumi" } },
  { id: "huji", name: { he: "האוניברסיטה העברית", en: "The Hebrew University" } },
  { id: "clalit", name: { he: "שירותי בריאות כללית", en: "Clalit Health Services" } },
  { id: "mod", name: { he: "משרד הביטחון", en: "Israel Ministry of Defense" } },
  { id: "tnuva", name: { he: "תנובה", en: "Tnuva" } },
];
