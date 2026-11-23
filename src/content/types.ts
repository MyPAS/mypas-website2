import type { IconName } from "@/components/ui/Icon";
import type { Localized } from "@/lib/i18n";

/**
 * A headline split into plain / highlighted segments (replaces raw innerHTML).
 *
 * `line: true` starts the segment on a line of its own. `text-wrap: balance`
 * evens out line lengths but has no idea where a sentence ends, so on a phone
 * it was happy to leave "לא" alone on a line. Where a headline is two whole
 * sentences, saying so beats hoping the balancer guesses right.
 */
export type RichText = { text: string; hl?: boolean; line?: boolean }[];

export type Hero = {
  eyebrow: Localized<string>;
  title: Localized<RichText>;
  lead: Localized<string>;
  primaryCta: { label: Localized<string>; href: string };
  secondaryCta: { label: Localized<string>; href: string };
};

export type SectionHead = {
  kicker?: Localized<string>;
  title: Localized<string>;
  subtitle?: Localized<string>;
};

export type Feature = {
  icon: IconName;
  title: Localized<string>;
  body: Localized<string>;
};

export type Step = {
  title: Localized<string>;
  body: Localized<string>;
};

export type QA = {
  q: Localized<string>;
  a: Localized<string>;
};

/** A product capability shown as copy beside a real screenshot. */
export type Showcase = {
  title: Localized<string>;
  body: Localized<string>;
  image: {
    src: string;
    width: number;
    height: number;
    alt: Localized<string>;
  };
};

/**
 * A number is stored twice on purpose: the national form people recognise,
 * and the E.164 form a phone actually dials. Deriving one from the other
 * silently produced `tel:0549121400`, which fails from abroad.
 */
export type PhoneNumber = {
  /** as printed, e.g. "054-7984054" */
  display: string;
  /** as dialled, e.g. "+972547984054" */
  href: string;
  /** shown instead of the generic "Phone" label when this is a second line */
  label?: Localized<string>;
};

export type ContactInfo = {
  email: string;
  /** numbers shown in addition to the company line */
  phones?: PhoneNumber[];
};

/** One message in an agent transcript. Status glyphs live inside the text. */
export type ChatTurn = {
  from: "agent" | "human";
  at?: Localized<string>;
  lines: Localized<string>[];
};

/** A single judgement on an interview scorecard, with the line that earned it. */
export type Finding = {
  kind: "strength" | "gap";
  title: Localized<string>;
  quote: Localized<string>;
};

/**
 * The evidence shown beside an agent.
 *
 * `chat` and `score` are drawn as live DOM rather than pasted as screenshots:
 * text the browser renders stays sharp at any zoom, reflows on a phone,
 * translates with the rest of the page and can be read by a screen reader —
 * none of which a picture of a chat window can do.
 */
export type Artifact =
  | { kind: "chat"; title: Localized<string>; turns: ChatTurn[] }
  | {
      kind: "score";
      title: Localized<string>;
      score: number;
      verdict: Localized<string>;
      findings: Finding[];
    }
  | {
      kind: "shot";
      title: Localized<string>;
      src: string;
      width: number;
      height: number;
      alt: Localized<string>;
    };

/** An agent we run, shown as a claim backed by one piece of its own output. */
export type AgentCase = {
  /** anchor target, so the index at the top of the section can link to it */
  id: string;
  name: Localized<string>;
  role: Localized<string>;
  claim: Localized<string>;
  body: Localized<string>;
  stats: { value: Localized<string>; label: Localized<string> }[];
  artifact: Artifact;
  /** Project page with the full write-up, when there is one. */
  href?: string;
};
