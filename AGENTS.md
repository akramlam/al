# Repository Guidelines

## Project Structure & Module Organization
- App Router lives in `src/app` (e.g., `layout.tsx`, `page.tsx`). Client components use `"use client"`.
- Reusable UI in `src/components/ui` (PascalCase files like `Button.tsx`, `Card.tsx`).
- Page sections in `src/components/sections` (e.g., `Hero.tsx`, `Footer.tsx`).
- Hooks in `src/hooks` (camelCase, prefixed with `use`, e.g., `useScrollAnimation.ts`).
- Utilities and data in `src/lib` (`utils.ts`, `data.ts`). Shared types in `src/types`.
- Static assets served from `public/`.

## Build, Test, and Development Commands
- `npm run dev` — start Next.js dev server (Turbopack) for local development.
- `npm run build` — production build.
- `npm start` — run the production server.
- `npm run lint` — run ESLint; append `-- --fix` to auto-fix issues.

## Coding Style & Naming Conventions
- TypeScript-first. 2-space indent; single quotes preferred; trailing commas where sensible.
- React components: PascalCase file and export names; pages/layouts are default exports.
- Functions/variables use camelCase; types/interfaces use PascalCase.
- Place `"use client"` at the top of files that use hooks or browser APIs.
- ESLint extends `next/core-web-vitals` and `next/typescript` (see `eslint.config.mjs`).

## Testing Guidelines
- No test runner is configured yet. Contributions adding tests are welcome.
- Prefer Vitest for unit tests and Playwright for e2e.
- Co-locate tests as `*.test.ts(x)` or under `__tests__/` near the source.
- Focus on `src/lib` utilities and `src/hooks` behavior; aim for meaningful coverage over raw percentage.

## Commit & Pull Request Guidelines
- Use Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:` (e.g., `feat(ui): add Button variants`).
- Keep subjects ≤ 72 chars; include scope when helpful.
- PRs should include: clear description, linked issues, screenshots/GIFs for UI, and notes on testing.
- Before opening a PR, run `npm run lint` and `npm run build` locally.

## Security & Configuration Tips
- Store secrets in `.env.local` (git-ignored). Prefix client-exposed vars with `NEXT_PUBLIC_`.
- Avoid importing server-only modules into client components.

## Agent-Specific Instructions
- Preserve directory conventions; place new code where it logically belongs.
- Reuse existing utilities and patterns; avoid new dependencies without discussion.
- Update types when changing data shapes; keep changes minimal and focused.

