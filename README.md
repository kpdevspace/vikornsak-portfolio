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

Repository: https://github.com/Vikornsak/vikornsak-portfolio

Expected URL: https://vikornsak.github.io/vikornsak-portfolio/

1. Open the repository's **Settings → Pages**.
2. Select **GitHub Actions** as the build and deployment source.
3. Push to `main`. `.github/workflows/deploy.yml` runs `npm ci`, checks TypeScript, builds, uploads `dist`, and deploys to the `github-pages` environment.
4. Monitor the Actions run. Deployment requires Pages to be enabled and repository/organization policy to allow GitHub Actions and Pages.

Manual deployment is also available through **Actions → Build and deploy portfolio → Run workflow** on `main`.

The build uses relative asset URLs (`base: './'`), supporting both repository Pages paths and a root/custom domain. Navigation uses section anchors, so no SPA rewrite or 404 workaround is needed. No custom token or secret is required: deployment uses the workflow's scoped `GITHUB_TOKEN` and OIDC.

## Editing content

- `src/data.ts`: biography, project details, experience and skills.
- `src/main.tsx`: page sections and interactive features.
- `src/styles.css`: Tailwind import, theme and responsive styles.
- `public/resume.html`: standalone English résumé with browser print/save-to-PDF.

Features: mobile navigation, project category filters, accessible native project dialogs with Escape handling, email link and clipboard action, print-ready résumé, reduced-motion support and skip navigation.

## Content sources

Content was summarized and translated from the supplied `ประวัติและผลงานวิกรศักดิ์ V2024-1.pdf` and `Resume VIKORNSAK UPDATE 2021.pdf`. The 2024 portfolio takes precedence where dates differ. Employment is presented as historical. Consulting roles reported as “present” in old documents have no implied current end date. Graduate study is explicitly recorded as incomplete in the résumé. No project outcome metrics or testimonials have been invented.

Project visuals are original CSS illustrations, not screenshots of client systems. Source PDFs, residential address and reference contacts are not published.

## References

- Tailwind Vite integration: https://tailwindcss.com/docs/installation/using-vite
- Vite GitHub Pages deployment: https://vite.dev/guide/static-deploy.html
