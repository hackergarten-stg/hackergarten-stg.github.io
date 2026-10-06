## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Routing & i18n

- **URLs are always in English**, in every language. Use `/projects`, never `/projekte` — only the
  visible labels are translated (via `src/i18n/ui.ts`).
- German is the default locale and is served unprefixed (`/projects`); English lives under `/en/`
  (`/en/projects`). See `getLocalePath()` and `stripLocale()` in `src/i18n/ui.ts`.
- **Every page must exist in both languages**: adding `src/pages/foo.astro` means also adding
  `src/pages/en/foo.astro`.
- Add new routes to `navRoutes` in `src/config/site.ts` — the header nav and its active state are
  generated from it. All external URLs belong in `links` in the same file, never inline in a component.

## Structure

- `src/styles/` — `global.css` is the only entry point; it imports `tokens.css` (all design constants
  and the `[data-theme="dark"]` overrides), `reset.css` and `base.css`. Component CSS lives in each
  component's scoped `<style>` block and must reference tokens rather than literal colors or sizes.
  Spacing goes through role tokens (`--gap*`, `--card-*`, `--button-*`, …) built on the 4px `--space-N`
  base scale; use a base step directly only for one-off nudges. Add missing values to `tokens.css`.
  `pnpm lint` (Stylelint) fails on literal colors, spacing, sizes, font sizes, font weights, line
  heights, letter spacing, radii, border widths, filters, grid tracks and durations outside
  `tokens.css`. Breakpoints are `@custom-media` in `tokens.css` (e.g. `@media (--mobile)`), made
  available to every component by `postcss.config.mjs`.
- `src/components/ui/` — reusable, content-free primitives (`Section`, `Card`, `Button`, `Eyebrow`,
  `SectionHeading`, `LogoPlaceholder`).
- `src/components/layout/` — page chrome (`Header`, `Footer` and their parts).
- `src/components/sections/` — the content bands composed from the primitives.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
