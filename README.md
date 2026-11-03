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
- `src/ProjectGallery.tsx`: historical screenshots and accessible image galleries for the seven selected projects.
- `public/projects/`: fifteen original screenshots extracted from the supplied 2024 portfolio PDF.
- `public/resume.html`: standalone English résumé with browser print/save-to-PDF.

Features: mobile navigation, project category filters, accessible native project dialogs with Escape handling, email link and clipboard action, print-ready résumé, reduced-motion support and skip navigation.



## References

- Tailwind Vite integration: https://tailwindcss.com/docs/installation/using-vite
- Vite GitHub Pages deployment: https://vite.dev/guide/static-deploy.html

## Project directory images

All 24 directory projects open a detail dialog with a reusable screenshot/diagram gallery and a closable enlarged viewer. `src/directory-media.json` maps the images; `src/DirectoryDialog.tsx` renders project approach, capabilities, evidence and source links. Archived development screenshots are used for KP ERP, CareOne (test records), EQA, SolaS (fictional demo providers), the public Space Weather demo and this portfolio. Other entries use explicitly labeled workflow concepts and capability maps based on the documented project summaries. The illustrations are not screenshots or proof of runtime integration. Existing Selected Work illustrations and historical galleries are retained.

## Agentic SDLC examples

The interactive `#agentic-sdlc` section covers six lifecycle stages, with illustrative agent tasks, human decisions, deliverables and twelve links to related project evidence. `src/sdlc.ts` holds the content and mappings; `src/AgenticSdlc.tsx` renders the interactive diagram. Project dialogs include return links to the relevant stage. Deep links support `#projects?project=kp-erp` and `#agentic-sdlc?stage=testing`. The downloadable diagram is `public/agentic-sdlc.svg`; the GitHub-readable guide is [AGENTIC-SDLC.md](AGENTIC-SDLC.md). Examples describe a working approach and do not establish full automation or production completion for linked projects.

## AI cost-reduction examples

The `#ai-costs` section describes six cost-aware processes with twelve project connections. `src/aiCosts.ts` stores the examples, cost drivers, quality gates, measurement proposals and evidence boundaries. `src/AiCostApproach.tsx` provides an interactive diagram; `public/cost-aware-llm.svg` is downloadable and [AI-COST-APPROACH.md](AI-COST-APPROACH.md) is the GitHub-readable guide. Links support `#ai-costs?process=reuse` and return from project dialogs to the relevant process. Content distinguishes documented patterns from proposed extensions, does not claim measured savings, and cites Microsoft/AWS architecture guidance for general methods.
