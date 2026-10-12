# Vikornsak Portfolio

English responsive portfolio built with React, TypeScript, Vite and Tailwind CSS v4.

## Local development

Requires Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

Production build and preview:

```sh
npm run build
npm run preview
```

## GitHub Pages

Repository: https://github.com/kpdevspace/vikornsak-portfolio

Expected URL: https://kpdevspace.github.io/vikornsak-portfolio/

1. Open the repository's **Settings → Pages**.
2. Select **GitHub Actions** as the build and deployment source.
3. Push to `main`. `.github/workflows/deploy.yml` runs `npm ci`, checks TypeScript, builds, uploads `dist`, and deploys to the `github-pages` environment.
4. Monitor the Actions run. Deployment requires Pages to be enabled and repository/organization policy to allow GitHub Actions and Pages.

Manual deployment is also available through **Actions → Build and deploy portfolio → Run workflow** on `main`.

The build uses relative asset URLs (`base: './'`), supporting both repository Pages paths and a root/custom domain. Navigation uses section anchors, so no SPA rewrite or 404 workaround is needed. No custom token or secret is required: deployment uses the workflow's scoped `GITHUB_TOKEN` and OIDC.

## Projects & development directions

[Read the 24-project directory](PROJECTS.md) or [explore it on the website](https://kpdevspace.github.io/vikornsak-portfolio/#projects). It groups documented work into six capabilities, with project descriptions, approaches, skill summaries and evidence/stage notes. The website supports keyword search, capability/source filters and expandable project details.

## Editing content

- `src/data.ts`: biography, historical project details, experience and skills.
- `src/catalogue.ts`: recent project directory, development directions and evidence notes.
- `src/ProjectDirectory.tsx`: search, filtering and expandable project rows.
- `PROJECTS.md`: GitHub-readable project directory; update alongside catalogue content.
- `src/main.tsx`: page sections and interactive features.
- `src/styles.css`: Tailwind import, theme and responsive styles.
- `public/resume.html`: standalone English résumé with browser print/save-to-PDF.

Features: mobile navigation, project category filters, accessible native project dialogs with Escape handling, email link and clipboard action, print-ready résumé, reduced-motion support and skip navigation.

## Content sources

Content was summarized and translated from the supplied `ประวัติและผลงานวิกรศักดิ์ V2024-1.pdf` and `Resume VIKORNSAK UPDATE 2021.pdf`. The 2024 portfolio takes precedence where dates differ. Employment for 2024–2026 at the Faculty of Medical Technology, Mahidol University, and the current ONESQA role (2026–present) were supplied by Vikornsak on 13 October 2026. Earlier employment is presented as historical. Consulting roles reported as “present” in old documents have no implied current end date. Graduate study is explicitly recorded as incomplete in the résumé. No project outcome metrics or testimonials have been invented. The recent directory uses current GitHub metadata/READMEs, accessible ChatGPT/Codex development conversations and selected local project documentation, reviewed on 13 October 2026. Each entry distinguishes evidence of scope from actual runtime/deployment verification.

Project visuals are original CSS illustrations, not screenshots of client systems. Source PDFs, residential address and reference contacts are not published.

## References

- Tailwind Vite integration: https://tailwindcss.com/docs/installation/using-vite
- Vite GitHub Pages deployment: https://vite.dev/guide/static-deploy.html
