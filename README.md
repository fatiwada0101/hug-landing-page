# Huda University Gusau landing page

A Next.js 14 / React 18 / TypeScript landing page for Huda University Gusau.

## Design

The existing green-and-orange Tailwind design is retained: sticky utility/navigation bars, split hero, overlapping Start Here card, rounded cards, cream section backgrounds and dark green feature sections. The reference website supplies content and imagery rather than a replacement design.

## Content and assets

Content was checked against https://hug.edu.ng/ on 28 October 2026. A source snapshot is retained at `docs/hug-reference.html`.

- `src/app/page.tsx`: original section composition, shared modal state and programme search.
- `src/components/`: page sections and shared UI.
- `src/components/UniversityContent.tsx`: university information, partners, gallery, leadership, departments, FAQs and contact sections using the existing visual style.
- `src/data/university.ts`: university information, departments, partners and all 18 source header slides.
- `src/data/programs.ts`: 15 programme names across three faculties.
- `src/data/leadership.ts`, `src/data/faqs.ts`, `src/data/news.ts`: source-aligned content.
- `public/hug/`: 31 downloaded source images, including 14 matriculation photographs, four campus/header photographs, leadership portraits, six intervention-body logos, testimonial image, logo and favicon.

All reference images are served locally. Some older, unused components and assets remain available in the project; the homepage imports determine the live sections.

## Run locally

```sh
npm install
npm run dev
```

For production:

```sh
npm run build
npm start
```

## Interaction boundaries

Admissions and library links lead to the university's external services. Local forms do not provide admission decisions or authentication. The contact form opens an email draft; newsletter requests also use email because this project has no connected email or subscription backend. The reference homepage supplied placeholder FAQs rather than detailed fee and accommodation policies, so enquiries are directed to the university.

## Validation

Production build and TypeScript checks pass. The homepage and all 31 local image assets returned HTTP 200. Browser-based visual and interaction checks could not be completed because the browser-control connection was unavailable.

Navigation uses deployment-relative links (for example, /#programmes). Admissions, ePortal and Library have local sections; only explicitly labelled service launch links open the external university systems. The header uses a continuous green photographic overlay, and the quick access cards describe the university's main content and services.

## Library route and mobile layouts

`/library` is the local university library page, with shared navigation and footer, locally stored library photography, a searchable directory of 24 resources, subject filters, open-resource filtering, library services, study-space information and contact assistance. Its metadata lives in `src/app/library/page.tsx`; the interface lives in `src/components/LibraryExperience.tsx` and the directory in `src/data/library.ts`.

Library content and resource destinations were read from https://library.hug.edu.ng/. A snapshot is saved at `docs/library-reference.html`; five photographs are stored in `public/hug/library/`. Resource-provider links open externally. The directory searches the listed resources rather than a live book catalogue.

The navigation switches to a collapsible menu below 1280px to prevent tablet crowding. Mobile controls have larger touch targets; the menu scrolls within the visible screen and supports Escape to close. The layouts stack cards and forms on small screens; form fields use 16px text on phones, and hero controls have dedicated spacing. Automated resource filtering checks and route/link checks pass. Browser-based viewport checks remain unavailable because the browser connection is closed.

The homepage header advances every six seconds with crossfade/zoom transitions and pause/play controls. Autoplay pauses while the tab is hidden and starts paused for reduced-motion preferences. The next header image is preloaded. The Vice-Chancellor welcome uses the supplied full wording, with the opening paragraph visible and the rest available through Read more / Read less.

The library page now includes Maryam Saleh's portrait, the exact user-supplied welcome message with Read more, the published library opening hours, all five library facility photos and eight resource logos. The directory now contains 28 resources. Library enquiries use info@library.hug.edu.ng. The Library / ePortal / Get support utility links remain visible on mobile and route to /library, /#portal and /#contact respectively.

Apply actions now navigate directly to https://portal.hug.edu.ng in the same tab. The homepage no longer mounts the application popup; navbar, hero, admission-section and programme-card Apply links use the portal directly.

The admissions banner's Apply now and Start Application links are direct anchors to the admission portal with target=_blank and rel=noopener noreferrer. They do not use a callback or popup.
