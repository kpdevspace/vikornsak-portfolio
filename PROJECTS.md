# Projects & Development Directions

A curated portfolio of 24 documented projects from GitHub, ChatGPT and Codex, alongside the seven historical projects shown on the website. Reviewed 13 October 2026.

[Explore the interactive project directory](https://kpdevspace.github.io/vikornsak-portfolio/#projects)

## Development directions

### Enterprise systems: Connect the whole workflow

Model business operations, approvals and data relationships across sales, purchasing, inventory and service.

### Healthcare & mobile: Design around care & access

Build web and mobile experiences with role boundaries, clinical workflows and device-aware architecture.

### AI & automation: Make information actionable

Explore document extraction, conversational data access and streaming AI, with explicit review and integration boundaries.

### Data & governance: Make systems explainable

Connect strategy, capabilities, processes and data through architecture models and traceable governance.

### Platforms & services: Turn a service into a product

Translate product ideas into user roles, end-to-end journeys, modular systems and practical MVPs.

### Teaching & tooling: Build, teach & reuse

Create learning pathways, reusable engineering patterns and accessible tools for communicating complex information.

## Project directory

Each website entry opens a project-detail dialog with a closable image gallery. Archived screenshots are used where available; other images are explicitly labeled workflow concepts and capability maps. These illustrations are not runtime verification.

### KP Enterprise ERP

**Enterprise systems · Development** | Sources: GitHub, Codex

A modular enterprise platform connecting customer inquiries, supplier sourcing, pricing approval and quotations, with continuing work across inventory, after-sales and accounting.

**Approach:** Start with a bounded business workflow, preserve document relationships, and extend modules through shared data and authorization.

**Capabilities demonstrated:** .NET 10, EF Core, React, SQL Server, Azure Blob, Workflow design.

**Evidence & stage:** Repository README and development conversations document implementation and local tests. Current production rollout was not assessed.

Project overview; source materials are not public.

### KP Mobile Suites

**Healthcare & mobile · Development** | Sources: Codex

A mobile extension of KP Enterprise for backoffice staff, storefront customers and direct-sales partners, including field-service and approval notification work.

**Approach:** Reuse the ERP API and business rules across three app audiences instead of creating a separate mobile business database.

**Capabilities demonstrated:** React Native, Expo, TypeScript, API contracts, Field service, Push notifications.

**Evidence & stage:** Local workspace and mobile runbooks document app shells, backoffice functionality and push infrastructure. Storefront/direct-sale contracts and physical-device delivery remain separate completion gates.

Project overview; source materials are not public.

### CareOne Clinic Backoffice

**Healthcare & mobile · Development** | Sources: GitHub, Codex

Clinic operations spanning patients, appointments, care queues, finance, pharmacy and clinical documents, with role-aware access and cross-clinic consent boundaries.

**Approach:** Design around the service journey and keep access to patient and operational information aligned with each clinic role.

**Capabilities demonstrated:** Next.js, .NET API, SQL Server, Role-based access, Clinical workflows.

**Evidence & stage:** Clinic repository metadata and Codex development records document local web/API operation and permission checks. Production service readiness was not assessed.

Project overview; source materials are not public.

### EQA SAR Extractor

**AI & automation · Development** | Sources: GitHub, Codex

A document-processing application for extracting school profiles, contacts and assessment indicators from SAR PDFs, with per-school and consolidated Excel output.

**Approach:** Use PDF text and extraction rules first, apply OCR where needed, and retain job history and reviewable exports.

**Capabilities demonstrated:** C#, Windows Forms, PDF extraction, OCR, SQLite, Excel export.

**Evidence & stage:** AnalysisSAR repository metadata and EQA development records describe extraction and export checks. The packaged Windows UI still requires target-device validation.

Project overview; source materials are not public.

### SolaS — Solar Service Platform

**Platforms & services · Prototype** | Sources: ChatGPT, Codex

A Thai/English solar-service MVP connecting homeowners and providers through discovery, comparison, quotations, project milestones and after-sales care.

**Approach:** Define a full service lifecycle in ChatGPT, then implement a phased MVP in Codex with a modular, integration-ready architecture.

**Capabilities demonstrated:** Product design, Bilingual UX, Marketplace workflows, API design, Audit trails.

**Evidence & stage:** Product-direction chat and MVP development conversation document the brief, successful API/build checks and incomplete browser journey validation. Payments, signing and future AI integrations are not claimed as live.

Project overview; source materials are not public.

### Self-Service Report Intelligence

**Data & governance · Concept** | Sources: Codex

A reporting product blueprint and development plan for helping users explore data and prepare reports through a structured self-service experience.

**Approach:** Clarify the core reporting experience, define architecture and delivery phases, and turn the design into an implementation brief.

**Capabilities demonstrated:** Requirements analysis, Reporting architecture, Roadmap planning, Project formulation.

**Evidence & stage:** The SSRI conversation documents system-design and proposal artifacts. A running reporting service was not verified.

Project overview; source materials are not public.

### KP-GovEA Architecture Portal

**Data & governance · Prototype** | Sources: GitHub

A government enterprise architecture MVP mapping strategy, capabilities, processes, data, applications and technology, with dashboards, matrices and exports.

**Approach:** Keep architecture relationships in a central model, then expose graphs, matrix views and gap-analysis surfaces.

**Capabilities demonstrated:** Python, Flask, SQLAlchemy, Architecture mapping, Excel / PDF.

**Evidence & stage:** The public README describes the MVP, tests and a simplified demo login. Production SSO/IAM is a future integration.

[Public repository](https://github.com/kpdevspace/EA)

### AI-Assisted Assessment Governance

**Data & governance · Concept** | Sources: Codex

BPMN 2.0 models for an education quality-assessment process, connecting AI analysis with human review, corrections, approvals and publication.

**Approach:** Represent responsibilities and decision points explicitly, with a main process and an AI subprocess that can be inspected and revised.

**Capabilities demonstrated:** BPMN 2.0, Process modeling, Human review, AI governance.

**Evidence & stage:** The BPMN design conversation documents editable models and schema/render checks. Statistical methodology and approval authority require confirmation before operational use.

Project overview; source materials are not public.

### Education Data Architecture Blueprint

**Data & governance · Concept** | Sources: ChatGPT

A seven-layer data-management concept spanning source inventories, ingestion, preparation, analytics, consumption and cross-cutting governance.

**Approach:** Define datasets, owners, handoffs and acceptance criteria before translating the architecture into technical work packages.

**Capabilities demonstrated:** Data architecture, Data ownership, Data quality, Integration design.

**Evidence & stage:** The Data Management conversation develops the architecture and responsibilities. It is a planning concept, not an implemented data platform.

Project overview; source materials are not public.

### AI-Native Digital Business Platform

**Platforms & services · Concept** | Sources: ChatGPT

A platform concept combining a shared core with healthcare, logistics, agriculture and community-commerce verticals, supported by a phased development pack.

**Approach:** Separate reusable platform capabilities from industry-specific modules, and validate the foundation before expanding verticals.

**Capabilities demonstrated:** Platform architecture, Multi-tenant design, Product strategy, Architecture decisions.

**Evidence & stage:** The Enterprise Architecture conversation documents the concept and development pack. The proposed ecosystem is not presented as a deployed product.

Project overview; source materials are not public.

### Data Chatbot MVP

**AI & automation · Prototype** | Sources: GitHub

A Thai-first conversational interface for business data, displaying query results as tables and charts with datasource administration and role concepts.

**Approach:** Prototype the natural-language interaction with template queries and mock data before connecting real databases and a semantic layer.

**Capabilities demonstrated:** Node.js, Conversational UX, Query guardrails, Data visualization.

**Evidence & stage:** Repository README explicitly describes template-query/mock-data MVP mode. Live database integration and security hardening are future work.

Project overview; source materials are not public.

### Voice AI Low-Latency Template

**AI & automation · Prototype** | Sources: GitHub

A reusable backend template for partial/final transcript streaming, fast intent routing, deeper AI calls and response caching.

**Approach:** Separate lightweight partial-transcript handling from the final request path to avoid repeated expensive model calls.

**Capabilities demonstrated:** Python, FastAPI, WebSocket, Redis, Async processing.

**Evidence & stage:** Public README documents the pipeline, modules, test client and CI. The model endpoint is an integration point; no measured latency claim is made.

[Public repository](https://github.com/kpdevspace/voice-ai-template)

### Med AI Connect

**Healthcare & mobile · Prototype** | Sources: GitHub

A repository-described medical web application exploring pose analysis for rehabilitation, patient history and communication.

**Approach:** Explore browser-based pose estimation alongside the patient-facing workflow, separating a technical prototype from clinical validation.

**Capabilities demonstrated:** React, Tailwind CSS, TensorFlow.js, MoveNet, Drizzle ORM.

**Evidence & stage:** Description and language metadata support the stated project scope. Runtime behavior and clinical effectiveness were not independently verified.

Project overview; source materials are not public.

### NCD Learning & Webinar Platform

**Teaching & tooling · Development** | Sources: GitHub, Codex

A web platform with public course and webinar pages, speaker profiles and administrative content management.

**Approach:** Connect public learning content to its administration workflow, and verify content rendering and deployable release artifacts.

**Capabilities demonstrated:** ASP.NET, PostgreSQL, Content management, Secure media, IIS packaging.

**Evidence & stage:** Repository metadata and the NCD development conversation document course/webinar fixes and an IIS package. Installation of that package in production was not confirmed.

Project overview; source materials are not public.

### Build 1 Real App in 10 Missions

**Teaching & tooling · Learning** | Sources: GitHub

A SwiftUI learning pathway for secondary-school students, progressing from basic UI to state, persistence, APIs, notifications and a final demonstration.

**Approach:** Teach through small connected missions that grow into a complete app, supported by student materials and an instructor pack.

**Capabilities demonstrated:** SwiftUI, Curriculum design, Project-based learning, E-learning.

**Evidence & stage:** Public README describes all ten missions and the accompanying e-learning MVP. Learner outcomes were not measured.

[Public repository](https://github.com/kpdevspace/Build_1_Real_App_in_10_Missions)

### Space Weather Early Warning Demo

**Teaching & tooling · Prototype** | Sources: GitHub

A dashboard demo connecting NOAA space-weather data to a Thailand province map, timeline and incident view.

**Approach:** Translate external scientific signals into an understandable dashboard and keep fallback data separate from live source data.

**Capabilities demonstrated:** JavaScript, Node.js, API integration, Geospatial UI, Data visualization.

**Evidence & stage:** Public README documents NOAA inputs, 77-province mapping and fallback behavior. This is a dashboard demonstration, not an operational warning authority.

[Public repository](https://github.com/kpdevspace/space-weather-demo)

### ERP Flask Skeleton

**Enterprise systems · Prototype** | Sources: GitHub

A reusable ERP starter with document modules, role-based access, CRUD pages, REST APIs and dashboard summaries.

**Approach:** Establish shared document and module patterns before expanding business-specific workflows.

**Capabilities demonstrated:** Python, Flask, PostgreSQL, Bulma, Docker.

**Evidence & stage:** Public README identifies the project as a starter skeleton and lists its implemented scaffold. Production operations were not assessed.

[Public repository](https://github.com/kpdevspace/erp-flask)

### .NET MVC + htmx Multi-Card Forms

**Teaching & tooling · Learning** | Sources: GitHub

An engineering example for adding, removing and submitting mixed product, service and note rows in a server-rendered form.

**Approach:** Use server-rendered partials and indexed input names to create dynamic form interactions with a simple request flow.

**Capabilities demonstrated:** .NET MVC, C#, htmx, Bootstrap, Model binding.

**Evidence & stage:** Public README explains the request lifecycle, model binding and total calculations.

[Public repository](https://github.com/kpdevspace/DotNetMvc_Htmx_MultiCard)

### Competency Assessment Prototype

**Platforms & services · Prototype** | Sources: GitHub

A web prototype for seven core competencies, connecting employee self-assessment, manager evaluation and result visualization.

**Approach:** Convert an evaluation framework into separate participant and reviewer journeys with comparable results.

**Capabilities demonstrated:** TypeScript, Assessment workflows, Role-based UX, Result visualization.

**Evidence & stage:** Repository description explicitly calls this a prototype built with AI assistance. Runtime and organization-wide adoption were not verified.

Project overview; source materials are not public.

### Employee Performance Management

**Platforms & services · Prototype** | Sources: GitHub

A repository-described application for OKR/KPI tracking, feedback, performance reviews and role-specific employee/manager dashboards.

**Approach:** Connect goal setting, feedback and review into a continuous employee-development journey.

**Capabilities demonstrated:** TypeScript, OKR / KPI modeling, Review workflows, Dashboard design.

**Evidence & stage:** Repository description provides the intended functionality. Live integrations and implementation completeness were not audited.

Project overview; source materials are not public.

### Prompt Knowledge Management

**AI & automation · Prototype** | Sources: GitHub

A knowledge-management product exploring prompt creation, storage and sharing, with community and membership concepts.

**Approach:** Treat prompts as reusable knowledge assets with a product experience for creation, discovery and sharing.

**Capabilities demonstrated:** TypeScript, Knowledge management, Community design, Prompt workflows.

**Evidence & stage:** Repository description documents the scope and AI-assisted origin. Membership and monetization are product concepts, not verified live services.

Project overview; source materials are not public.

### Online Course Registration

**Platforms & services · Prototype** | Sources: GitHub

A course-registration product covering course discovery, booking and administration, with planned payment and confirmation flows.

**Approach:** Design the customer registration journey alongside the operator workflow, with external service boundaries stated explicitly.

**Capabilities demonstrated:** TypeScript, Registration workflows, Admin UX, Integration planning.

**Evidence & stage:** Repository description lists the product scope. Real payment, email and meeting integrations were not verified.

Project overview; source materials are not public.

### Strategy & KPI Dashboard

**Data & governance · Prototype** | Sources: GitHub

A dashboard product for presenting education quality-assurance strategies and performance indicators to stakeholders.

**Approach:** Turn strategic objectives and measures into a clear stakeholder-facing monitoring experience.

**Capabilities demonstrated:** TypeScript, KPI communication, Dashboard design, Stakeholder UX.

**Evidence & stage:** Repository description documents the dashboard purpose. Datasource freshness and production use were not assessed.

Project overview; source materials are not public.

### Vikornsak Portfolio

**Teaching & tooling · Live** | Sources: GitHub, Codex

This responsive English portfolio, built with React and Tailwind CSS and deployed through GitHub Actions to GitHub Pages.

**Approach:** Combine source-backed content, accessible interactions and repeatable build/deploy automation in a lightweight static website.

**Capabilities demonstrated:** React, TypeScript, Tailwind CSS, Responsive design, GitHub Actions.

**Evidence & stage:** The public repository and successful Pages deployment provide a working example of the delivery workflow.

[Public repository](https://github.com/kpdevspace/vikornsak-portfolio)

## Reading the stages

- **Development:** implementation work; no production-readiness claim.
- **Prototype:** MVP or experiment.
- **Concept:** architecture, product planning or design.
- **Learning:** teaching materials or reusable engineering examples.
- **Live:** this deployed portfolio.

Capability descriptions summarize the work demonstrated; they are not certifications or independently measured skill ratings. Repository descriptions establish intended scope where implementation was not audited. ChatGPT and Codex work includes AI-assisted ideation, specification and development. Forked repositories are excluded, and versions of the same product are consolidated. Private source code, chat transcripts, internal URLs and operational details are not published.
