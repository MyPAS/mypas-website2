# MyPAS Group — redesign (v2)

Next.js 16 · React 19 · TypeScript · Tailwind 4. Content and assets are synced as-is from github.com/MyPAS/mypas-website (`src/content/*`, `public/`).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

## Design system — v3 "Graphite"
- **Art direction:** quiet authority, in the spirit of the best enterprise-technology sites. Dark-only: graphite field (`#0a0b0d`), warm off-white type, hairline rules and a visible 12-column grid. The previous light version is tagged `v2-paper-cobalt`.
- **Headlines are two-tone:** the sentence is dim, the highlighted phrase (`hl` in `RichText`) is lifted to white. `joinWords()` keeps a word whole when a highlight starts mid-word (Hebrew prefixes).
- **Colour:** cobalt (`#2b37ff`) only for action and state; per-arm accents via `src/lib/arms.ts` (`accent` for fills, `accentLight` for text on dark).
- **Signature object:** `Cube3D` — the logo cube as a real CSS 3D object in exact isometric pose; each visible face is an arm link (top = AI, left = SAP, right = Finance). Assembles on load, leans toward the pointer, still under reduced motion.
- **Type:** Noto Sans Hebrew (variable, `wdth` 92, weight 600 for display), IBM Plex Mono for indices and labels. Sharp corners (`--r-pill: 3px`).
- All styles live in `src/app/globals.css` (tokens at the top). Reveal-on-scroll via `[data-reveal]`; respects `prefers-reduced-motion`.

## Structure
- `src/components/layout` — Header (floating, hides on scroll, mobile menu), Footer, Shell, Reveal
- `src/components/sections` — `home.tsx` (hero, clients wall, arm index, statement), `shared.tsx` (projects, team, rows, cards, process, FAQ, contact), `arm.tsx` (arm hero + SAP/Finance/AI visuals)
- `src/components/ui` — primitives + `IsoCube`
