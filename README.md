# MyPAS Group — redesign (v2)

Next.js 16 · React 19 · TypeScript · Tailwind 4. Content and assets are synced as-is from github.com/MyPAS/mypas-website (`src/content/*`, `public/`).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

## Design system
- **Art direction:** engineered editorial — paper `#f3f2ee` + ink, one cobalt brand colour (`#1f2cff`, from the logo), dark chapters for rhythm.
- **Motif:** the isometric cube from the logo. In the home hero each face is an arm (top = AI, left = SAP, right = Finance) and is clickable.
- **Type:** Noto Sans Hebrew (variable, condensed `wdth` for display), Frank Ruhl Libre for highlighted words, IBM Plex Mono for indices/labels.
- **Per-arm accent:** `src/lib/arms.ts` (`accent` for light sections, `accentLight` for dark ones), injected by `<Shell>`.
- All styles live in `src/app/globals.css` (tokens at the top). Reveal-on-scroll via `[data-reveal]`; respects `prefers-reduced-motion`.

## Structure
- `src/components/layout` — Header (floating, hides on scroll, mobile menu), Footer, Shell, Reveal
- `src/components/sections` — `home.tsx` (hero, marquee, arm panels, statement), `shared.tsx` (projects, team, rows, cards, process, FAQ, contact), `arm.tsx` (arm hero + SAP/Finance/AI visuals)
- `src/components/ui` — primitives + `IsoCube`
