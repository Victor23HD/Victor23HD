# Content editing guide

This file explains how to update portfolio content without touching React components.

## Profile photo

Replace `public/images/profile.jpg` with your professional headshot (square crop works best). The hero shows it in a circular frame with a light grayscale filter, similar to [Adarsh's portfolio](https://portfolio-e7gt.onrender.com/#/).

## Locales (`content/locales/`)

UI labels and narrative text live in `pt.json`, `en.json`, `de.json`, and `fr.json`.

Each file has:

- `ui` — navigation, buttons, section titles
- `narrative` — headline, summary, experience bullets, project copy, education, skills

When adding a new experience entry or project, update **all four** locale files.

## Structured data (`content/data/`)

Language-neutral identifiers and links:

| File | Purpose |
|------|---------|
| `profile.json` | Name, email, social links |
| `experience.json` | Job IDs and tags |
| `projects.json` | Slugs, URLs, repos, `published` flag |
| `education.json` | Education IDs |
| `volunteering.json` | Volunteering IDs |

## Blog (`content/blog/{locale}/`)

Add MDX posts as `slug.mdx` with frontmatter:

```mdx
---
title: Post title
excerpt: Short summary
date: 2026-07-14
tags: [embedded, c]
---

Your content here.
```

Empty blog directories show a “coming soon” message on `/pt/blog/` (and other locales).

## CV PDF

Replace `public/CV_MEIW_Victor_Caporici.pdf` to update the downloadable CV.

## Publishing a project

1. Add an entry to `content/data/projects.json` with `"published": true`
2. Add narrative copy under `narrative.projects` in each locale file
3. Rebuild: `npm run build`

## Deploy

Pushes to `main` trigger GitHub Actions (`.github/workflows/deploy-pages.yml`) and publish the `out/` folder to GitHub Pages.
