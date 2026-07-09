# Cek Di Sini Aja

Cek Di Sini Aja is a public, mobile-first web catalog for displaying self-made applications in one centralized place. Visitors can browse applications, search by name, filter by access type, open an application directly, or read the detail page first. The catalog also supports donation and affiliate links.

The product UI must use Indonesian for all static labels, buttons, states, and messages. Application titles should be displayed exactly as stored in the database.

## MVP Scope

The MVP includes:

- Public homepage catalog.
- Published applications only.
- Manual ordering using `sort_order`.
- Search by application title.
- Filter by access type: `free`, `freemium`, `paid`.
- Application detail pages by slug.
- External app links.
- Multiple affiliate links per application.
- Donation link per application detail page.
- Global homepage donation link.
- Optional homepage affiliate links.
- Supabase PostgreSQL as the database.
- Supabase Storage for app thumbnails.
- Supabase Dashboard for data management.
- Vercel deployment.

The MVP does not include login, custom admin panel, payment processing, feedback, rating, analytics, user submissions, or internal transaction tracking.

## Documentation Map

| File | Purpose |
|---|---|
| `docs/master-prd.md` | Product requirements, scope, assumptions, success metrics, constraints, and tech considerations. |
| `docs/work-units.md` | Dependency-based work breakdown by flow and unit, including definition of done and manual verification steps. |
| `docs/database-schema.md` | Conceptual data model for Supabase, including entities, fields, relationships, constraints, and confirmation points. |
| `docs/task-pre-flow-project-foundation.md` | Flow Brief for project setup, design foundation, Supabase environment, and data-access foundation. |
| `docs/task-flow-01-public-catalog.md` | Flow Brief for the public catalog, search, filter, app detail, affiliate, and donation experience. |
| `docs/task-post-flow-release-readiness.md` | Flow Brief for QA, Vercel deployment readiness, and post-deploy smoke testing. |
| `DESIGN.md` | UI, UX, layout, interaction, accessibility, and visual direction. |

## How to Use These Planning Docs with Codex

Use these documents as the source of truth when asking Codex to implement the project.

For every work unit, provide Codex with:

- `docs/master-prd.md`
- `docs/work-units.md`
- `docs/database-schema.md`
- The relevant `docs/task-*.md` Flow Brief
- `DESIGN.md` if the unit involves UI

Do not paste the entire project idea without referencing the planning docs. The docs are designed to keep Codex focused on the current unit.

## Rule: Implement One Work Unit at a Time

Only implement one unit from `docs/work-units.md` at a time.

Each unit must be:

1. Runnable.
2. Verifiable.
3. Non-breaking for previous units.

Do not continue to the next unit until the current unit has been manually reviewed.

## Rule: Do Not Implement Features Outside PRD/Work Units

Codex must not implement features outside `docs/master-prd.md` and `docs/work-units.md`.

Do not add:

- Login.
- Admin panel.
- Payment integration.
- Ratings or reviews.
- Analytics or click tracking.
- User-generated content.
- Extra data tables not listed in `docs/database-schema.md`.

## Rule: Review Manually Before Continuing

After each Codex implementation:

- Read the changed files.
- Run the app locally.
- Verify the unit manually using the steps in `docs/work-units.md`.
- Confirm previous units still work.
- Commit only after manual review.

## Suggested Codex Workflow

1. Choose the next unit from `docs/work-units.md`.
2. Open the relevant Flow Brief.
3. Ask Codex to implement only that unit.
4. Review the generated changes.
5. Run the app and manually verify the unit.
6. Ask Codex to fix only issues found in the current unit.
7. Commit after the unit passes manual verification.
8. Start a new Codex session or provide a short recap before moving to the next unit.

## Recommended Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Optional shadcn/ui
- Supabase PostgreSQL
- Supabase Storage
- Vercel

## UI Language Rule

All static product UI copy must be Indonesian.

Examples:

- `Search` → `Cari aplikasi...`
- `View details` → `Lihat Detail`
- `Open app` → `Buka Aplikasi`
- `Donate` → `Dukung / Donasi`
- `No apps found` → `Aplikasi tidak ditemukan`
- `free` → `Gratis`
- `freemium` → `Freemium`
- `paid` → `Berbayar`

Application titles are not translated and should be displayed as stored.
