# Design Direction: Cek Di Sini Aja

## Design Goals

Cek Di Sini Aja should feel calm, friendly, simple, and easy to use. The design should support quick discovery of applications without making the page feel crowded.

The design should be:

- Calm and soft.
- Clean and readable.
- Mobile-first.
- Friendly, not too corporate.
- Lightweight and practical for an MVP.
- Focused on application discovery.

## Target Device or Platform

Primary target:

- Mobile browser.

Secondary target:

- Desktop browser.
- Tablet browser.

Most visitors are expected to come from social media or shared links, so the mobile experience must be prioritized.

## Layout Principles

### Overall layout

- Use a centered page container with comfortable horizontal padding.
- Keep the homepage scannable from top to bottom.
- Put primary content above optional support links where possible.
- Use generous spacing between sections.
- Avoid dense multi-column layouts on mobile.

### Homepage catalog

- Start with a simple hero/header explaining the purpose of the site.
- Place search and filter controls near the top of the catalog section.
- Display app cards in a single column on mobile.
- Use a responsive grid on wider screens.
- Each app card should show thumbnail, title, short description, access badge, and actions.

### Detail page

- Show the app thumbnail and title prominently.
- Show access badge near the title.
- Show full description in a readable content block.
- Make primary CTA `Buka Aplikasi` easy to find.
- Donation and affiliate links should be clear but not visually overwhelming.

## Main Screens or Interfaces

### 1. Homepage Catalog

Purpose:

- Help visitors quickly browse, search, filter, and open applications.

Key elements:

- Site title: `Cek Di Sini Aja`.
- Short intro text in Indonesian.
- Search input.
- Access type filters.
- Application cards.
- Homepage donation link.
- Optional homepage affiliate links.

### 2. Application Detail Page

Purpose:

- Help visitors understand one application before opening it.

Key elements:

- Thumbnail image.
- Application title.
- Access badge.
- Full description.
- `Buka Aplikasi` CTA.
- `Dukung / Donasi` link.
- Affiliate link list when available.
- Back link to homepage.

### 3. Empty State

Purpose:

- Explain clearly when there are no matching applications.

Example Indonesian copy:

- `Aplikasi tidak ditemukan.`
- `Coba ubah kata kunci atau filter aksesnya.`

### 4. Not Found State

Purpose:

- Handle invalid or unpublished app slugs.

Example Indonesian copy:

- `Aplikasi tidak tersedia.`
- `Aplikasi ini mungkin belum dipublikasikan atau link-nya tidak valid.`

## Interaction Rules

### Search

- Placeholder should be Indonesian, for example `Cari aplikasi...`.
- Search filters by app title.
- Search should be case-insensitive.
- Search should work together with access-type filters.

### Filter

Use Indonesian labels:

- `Semua`
- `Gratis`
- `Freemium`
- `Berbayar`

Database values remain:

- `free`
- `freemium`
- `paid`

### Buttons and links

Recommended labels:

- `Buka Aplikasi`
- `Lihat Detail`
- `Dukung / Donasi`
- `Kembali`
- `Cari aplikasi...`

External links must:

- Open in a new tab.
- Use safe attributes such as `rel="noopener noreferrer"`.

Optional links:

- If an app has no active affiliate links, hide the affiliate section.
- If homepage has no active affiliate links, hide the homepage affiliate section.

### Cards

- Entire card does not need to be clickable.
- Keep action buttons explicit to avoid accidental external navigation.
- Use the app title as image alt text context.

## Accessibility Notes

- Use semantic HTML where possible.
- Ensure text has enough contrast against the background.
- Do not rely only on color to communicate access type.
- Keep tap targets large enough on mobile.
- Provide visible focus states for keyboard navigation.
- Use descriptive link labels.
- Add alt text for thumbnails, for example: `Thumbnail aplikasi [title]`.

## Visual Constraints

### Color direction

Use calm, soft colors. Avoid neon colors, harsh gradients, and dark tech-startup styling.

Suggested palette:

| Role | Suggested color | Description |
|---|---:|---|
| Background | `#FAF7F0` | Warm off-white / soft cream. |
| Surface | `#FFFFFF` | Clean card background. |
| Primary | `#5F7F73` | Soft sage green. |
| Primary dark | `#3F5F55` | Stronger text or hover state. |
| Secondary | `#E8DFD2` | Soft beige / sand. |
| Accent | `#B98568` | Muted terracotta for warm CTA accents. |
| Text | `#2E2E2E` | Dark gray, not pure black. |
| Muted text | `#6F6A64` | Secondary readable text. |
| Border | `#E5DED3` | Soft border. |

### Badge direction

Suggested badge meanings:

- `Gratis`: soft green badge.
- `Freemium`: soft beige or muted blue-green badge.
- `Berbayar`: muted terracotta badge.

Badges should include text labels, not color alone.

### Typography

- Use a clean sans-serif font.
- Prioritize readability.
- Avoid overly decorative fonts.
- Keep body text comfortable on mobile.

### Imagery

- Every published app should have a thumbnail.
- Use consistent aspect ratios for card thumbnails.
- Avoid stretched images.
- Use object-fit behavior if needed.

## Out-of-Scope Design Items

Do not design or implement the following in MVP:

- Dark mode.
- Complex animations.
- Custom illustrations.
- Full brand identity system.
- Advanced motion design.
- User profile screens.
- Admin dashboard UI.
- Payment UI.
- Rating or review UI.
- Analytics dashboard.
