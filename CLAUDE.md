# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

GitProfile-based portfolio site for GitHub Pages. React 18 + TypeScript + Vite, styled with Tailwind CSS + DaisyUI. All portfolio content is configured in `gitprofile.config.ts`.

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server (localhost:5173) |
| `npm run build` | TypeScript check + Vite production build |
| `npm run lint` | ESLint (ts/tsx files) |
| `npm run lint:fix` | Auto-fix lint issues |
| `npm run prettier` | Check formatting |
| `npm run prettier:fix` | Auto-fix formatting |
| `npm run preview` | Preview production build |

No test framework is configured.

## Architecture

**Configuration-driven**: `gitprofile.config.ts` is the single source of truth for all portfolio content (GitHub username, social links, skills, experience, education, projects, blog, theme, SEO). Type definitions live in `src/interfaces/sanitized-config.tsx`. The `getSanitizedConfig()` utility in `src/utils/index.tsx` validates and normalizes config values.

**Main component**: `src/components/gitprofile.tsx` is the orchestrator — fetches GitHub API data (via axios), merges it with config, and renders card components.

**Card-based UI**: Each portfolio section is a self-contained component in `src/components/` (avatar-card, skill-card, experience-card, education-card, certification-card, publication-card, github-project-card, external-project-card, blog-card).

**Theming**: 33 DaisyUI themes configured in `tailwind.config.js`. Theme list comes from config. Runtime switching via `src/components/theme-changer/`.

**Build pipeline**: Vite with React plugin, HTML plugin (injects SEO meta tags from config), and optional PWA plugin. Base path is set from config.

**Deployment**: GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages on push to `main`.

## Code Style

- Prettier: 80 char width, single quotes, 2-space tabs, always arrow parens
- ESLint: TypeScript strict, React hooks rules, React Refresh plugin
- TSConfig: strict mode, no unused locals/parameters (ES2020 target)
