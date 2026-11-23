import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Locale routing with an "as-needed" prefix:
 *   Hebrew (default) lives on clean paths  ->  /            /sap        /finance
 *   English lives under /en                ->  /en          /en/sap     /en/finance
 *
 * Internally every route is rendered by `app/[lang]/...`, so unprefixed
 * requests are rewritten to `/he/...` (URL stays clean), and any direct hit on
 * `/he/...` is permanently redirected to the canonical clean path.
 */

/** Slugs that moved, so old links and anything already indexed keep working. */
const GONE: Record<string, string> = {
  "/projects/ai-agents": "/projects/agent-marketplace",
};

/**
 * Preview and production-alias deployments on vercel.app serve the same
 * content as the real domain. Without this they compete with it in search.
 */
function guard(response: NextResponse, request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  if (host.endsWith(".vercel.app")) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return response;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // strip the language prefix before matching, so both /x and /en/x redirect
  const withoutLocale = pathname.startsWith("/en/")
    ? pathname.slice(3)
    : pathname === "/en"
      ? "/"
      : pathname;
  const moved = GONE[withoutLocale.replace(/\/$/, "")];
  if (moved) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.startsWith("/en") ? `/en${moved}` : moved;
    return guard(NextResponse.redirect(url, 308), request);
  }

  if (pathname === "/he" || pathname.startsWith("/he/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return guard(NextResponse.redirect(url, 308), request);
  }

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return guard(NextResponse.next(), request);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/he${pathname === "/" ? "" : pathname}`;
  return guard(NextResponse.rewrite(url), request);
}

export const config = {
  // Skip Next internals, static assets and anything with a file extension.
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
