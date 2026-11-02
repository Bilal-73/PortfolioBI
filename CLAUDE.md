# PortfolioBI: project context for Claude

Bilal Imran's personal portfolio site, live at https://portfoliobilalimran.netlify.app/. Repo: `Bilal-73/PortfolioBI`, default branch `main`. This file is the handoff between machines. Keep it up to date when something important changes.

## Stack and commands

- **Stack:** Vite, React 18, TypeScript, Tailwind CSS 3, shadcn/ui primitives in `src/components/ui/` (mostly unused), Framer Motion, React Router.
- **Install:** `npm install`. A `bun.lockb` also exists; npm is what has been used.
- **Dev server:** `npm run dev` serves on port 8080. `.claude/launch.json` has a `dev` config, but `.claude/` is not committed, so recreate it if needed.
- **Checks:** `npm run build` builds, `npm test` runs vitest (one placeholder test), and `npx tsc -p tsconfig.app.json --noEmit` typechecks.
- **Lint:** `npm run lint` shows 3 errors that predate this work, in `ui/textarea.tsx`, `ui/command.tsx` and the `require()` in `tailwind.config.ts`. Lint the files you change instead: `npx eslint src/components/*.tsx src/pages src/data`.

## Structure

- `src/pages/Index.tsx` is the one-page site: Navbar, Hero, Marquee, About, Projects, Experience, Skills, Education, Contact, Footer.
- `src/pages/CaseStudy.tsx` is the `/work/:id` route. `src/pages/PaidProjects.tsx` is `/paid-projects` (freelance). `NotFound.tsx` is the 404.
- Content lives in `src/data/`. Edit content here, not in components:
  - `profile.ts`: name, role, links
  - `projects.ts`: 12 projects, each with a `category` (drives the filters), `featured`, `caseStudy` and optional `image` (screenshot path in `/public`)
  - `caseStudies.ts`: long-form write-ups for projects with `caseStudy: true`
  - `experience.ts`: jobs, education, certificates
  - `skills.ts`
- Shared pieces:
  - `Section.tsx`: numbered section header with a handwritten note
  - `Reveal.tsx`: spring slide-in on scroll
  - `CustomCursor.tsx`: only on precise pointers; label it via `data-cursor="LABEL"` on any element
  - `TerminalCard.tsx`: the hero Q&A terminal
  - `Marquee.tsx`

## Design system ("playful pop", neo-brutalist)

- **Tokens** are in `src/index.css` as HSL variables:
  - Shadcn names (`--background`, `--foreground`, ...) plus the pop colours `--pop-orange`, `--pop-blue`, `--pop-lime`, `--pop-pink`, `--pop-yellow` and `--pop-sky`, which are the same in both themes.
  - `--on-pop` is always-dark text for use on pop colours. `--paper` is cream.
  - Dark mode works through the `.dark` class on `<html>`, toggled by `useTheme`.
- **Tailwind names:** `bg-pop-*`, `text-onpop`, `bg-paper`, `shadow-pop-sm/pop/pop-lg` (hard offset shadows), and the fonts `font-display` (Bricolage Grotesque), `font-sans` (DM Sans), `font-hand` (Caveat) and `font-mono` (JetBrains Mono).
- **Component classes:** `.pop-box` (outlined card), `.btn-pop` / `.btn-pop-orange`, `.sticker` (pill; add a `bg-pop-*`), `.chip`, `.hl` (tilted marker highlight), `.logo`, `.section-num`, `.section-title`, `.link` and `.container-wide`.
- **Motion:** every animation must respect `prefers-reduced-motion`. The CSS already neutralises it globally, and components check `useReducedMotion()`.

## How Bilal likes to work (important)

- **Questions before code.** Ask a few clarifying questions, then show a **preview or mockup first**, and only write app code after he says "approved". He has said "don't code right now… create the UI frames first… then I will approve it."
- **Mockups are local only.** Mockups go in `mockups/` as standalone HTML. That folder is deliberately **not committed**, so it won't exist on a fresh clone.
- **Git workflow:** feature branch → push → PR into `main` → he approves and merges. Don't commit or push unless he asks. The `gh` CLI was not installed on the first laptop, so PRs were opened with a pre-filled GitHub "compare" URL.
- **No invented facts.** Never invent metrics, roles or dates for case studies. If numbers are missing, describe the method instead.
- **Language:** he writes casual English mixed with Roman Urdu. Reply in plain English.

## History

1. **Editorial redesign** (PR #1, merged): ink-on-paper, one accent colour. Replaced later.
2. **Playful pop redesign** (PR #2, merged 2026-10-15, commit `e91acbe`):
   - The current design, approved from clickable frames.
   - Hero: a rotating highlight word ("sees / reads / reasons / listens", where "ships" was dropped because it duplicated the headline), the terminal, a draggable polaroid photo, and draggable stickers that snap back.
   - Projects: a bento grid with filters, plus case-study pages for **NS-VQA** and **Medical RAG**.
   - The rest: a zigzag experience timeline, sticker skill boards, an education stamp and a big contact section.
3. **Avatar experiment (rejected, removed):** a cartoon SVG avatar was rejected because it didn't look like him and the style was wrong. A real-photo round sticker with a waving hand was rejected for being too big, in the wrong spot, and less liked than the old version. The **original small tilted polaroid was restored**. Don't propose avatars or greeters again unless he asks.
4. **LinkedIn:** short posts were drafted openly saying the site was "vibe coded" with Claude Code. Whether he posted it is unknown.

## Open items / ideas

- **Third case study:** Doculens or Gate Keeper AI. He hasn't decided.
- **Screenshots and real metrics:** he still needs to supply project screenshots (they go in the `image` field in `projects.ts`) and real results numbers for the case studies.
- **Medical RAG details:** Medical RAG's case study says "Personal project" / "Code on GitHub" in the role and timeline boxes, because the real values aren't known. Confirm them with him.

## Gotchas

- **Framer Motion drag:** it overrides Tailwind `rotate-*` classes, so set rotation with `style={{ rotate: n }}` on motion elements. Don't use `dragConstraints` with a ref for the hero stickers (they jump on resize). Use `dragSnapToOrigin`.
- **Body transitions:** never transition `color` on `body`, because inherited text colour can freeze mid-transition. Only `background-color` is transitioned.
- **Hash links:** links like `/#projects` from other pages are re-scrolled after `document.fonts.ready` in `Index.tsx`.
- **Testing in Claude's browser pane:** the built-in browser pane pauses `requestAnimationFrame` while it's hidden, so animations look frozen during automated checks. Take screenshots or stub `requestAnimationFrame` before assuming something is broken.
- **Impeccable plugin:** if installed, its detector ignores live in `.impeccable/config.json`, which is not committed. One project-wide ignore covers the intentional `bounce-easing` overshoot.
