# Repository Guidelines

## Project Structure & Module Organization
- Root focus: design documentation and planning — no runtime code.
- Versioned design folders: `Design 1/`, `Design 2/`, `Design 3/`, `Design 4/`.
  - Each typically contains `design-system.md` and `ui-ux-design-plan.md`.
- Reference docs at root: `web-inspiration-examples.md`, `Sidekick Air Landing Page Draft Ideas.md` (plus a PDF).
- Add new iterations as `Design <n>/` with the same two core files.

## Build, Test, and Development Commands
- No build step required. Edit and preview Markdown in your editor.
- Optional lint (if you use markdownlint locally):
  - Preview: `markdownlint "**/*.md"` — check for style issues.

## Coding Style & Naming Conventions
- Markdown: one `#` H1 per file; use sentence case headings; wrap lines at ~100 chars.
- Bullets: use `-` with concise phrases; prefer fenced code blocks for commands and paths.
- File structure: keep `design-system.md` and `ui-ux-design-plan.md` in each `Design <n>/`.
- New explorations: `Design <n>/exploration-<topic>.md` (kebab-case topics).

## Testing Guidelines
- Treat reviews as “tests”. Before opening a PR:
  - Check links, image paths, and relative references.
  - Ensure each design file has a clear H1, updated date, and summary.
  - Cross-reference changes between `design-system.md` and `ui-ux-design-plan.md`.

## Commit & Pull Request Guidelines
- Commit convention: Conventional Commits (recommended).
  - Examples: `feat(design-4): add color tokens v2`, `docs: refine landing-page hero copy`.
- PRs should include:
  - Purpose and scope, linked issues (if any).
  - Before/after screenshots or annotated mockups when visuals change.
  - A checklist of updated files (e.g., both design docs for a given iteration).

## Security & Configuration Tips
- Do not commit secrets or private user data.
- Keep large binaries out of the repo; store externally and link from Markdown.
- Prefer relative links within the repo so previews work across environments.
