import { notFound } from "next/navigation";

/** Any unmatched path under a locale renders the branded not-found page with a real 404. */
export default function CatchAll() {
  notFound();
}
