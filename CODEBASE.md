# Portfolio2026 Codebase Reference

## Stack

- Vite + React 18
- React Router for page routing
- Tailwind CSS with CSS custom properties for theming
- PostCSS + Autoprefixer

## Project Structure

```text
Portfolio2026/
|- index.html
|- package.json
|- tailwind.config.js
|- vite.config.js
|- src/
|  |- App.jsx
|  |- main.jsx
|  |- components/
|  |  |- common/
|  |  |  |- Button.jsx
|  |  |  |- Container.jsx
|  |  |  |- NavBar.jsx
|  |  |  |- SectionHeading.jsx
|  |  |  `- VibeSwitcher.jsx
|  |  `- sections/
|  |- context/
|  |  `- VibeContext.jsx
|  |- data/
|  |  |- caseStudies.js
|  |  `- navigation.js
|  |- layouts/
|  |  `- RootLayout.jsx
|  |- pages/
|  |  |- AboutPage.jsx
|  |  |- CaseStudyPage.jsx
|  |  |- HomePage.jsx
|  |  `- PreviewPage.jsx
|  `- styles/
|     |- index.css
|     `- tokens.css
`- public/
```

## App Architecture

### Boot Flow

1. `src/main.jsx` mounts the app.
2. `BrowserRouter` enables route handling.
3. `VibeProvider` wraps the app and owns active theme state.
4. `src/App.jsx` declares routes.
5. `RootLayout` provides the persistent shell: navigation, page outlet, and footer.

### Route Model

- `/` -> `HomePage`
- `/about` -> `AboutPage`
- `/preview` -> `PreviewPage`
- `/case-studies/:slug` -> `CaseStudyPage`
- fallback route -> inline 404 state

The case study routes are generated from `src/data/caseStudies.js`, so routing is data-driven rather than hardcoded one page at a time.

## Design System

### Source of Truth

The design system is defined in two layers:

- `src/styles/tokens.css` holds the actual theme tokens as CSS custom properties.
- `tailwind.config.js` maps those tokens into semantic Tailwind utilities such as `bg-canvas`, `text-ink`, and `border-border`, and also defines the shared `display` and `sans` font utilities.

This means the app does not swap class names per theme. It swaps the active token set by changing `data-vibe` on the root HTML element.

### Theme Engine

Each vibe is activated through:

```css
[data-vibe="theme-key"] {
  --color-canvas: ...;
  --color-surface: ...;
  --color-ink: ...;
  --color-accent: ...;
}
```

The default vibe is also defined at `:root`, so the site has a valid theme before React hydration completes.

### Typography

- `--font-display: 'Poppins'`
- `--font-sans: 'Inter'`
- `font-display` in Tailwind resolves to `['"Poppins"', 'sans-serif']`.
- `font-sans` in Tailwind resolves to `['"Inter"', 'ui-sans-serif', 'system-ui']`.
- Body copy uses `font-family: var(--font-sans), ui-sans-serif, system-ui`.
- Headings and the wordmark use the display family.

### Typography Rules Used in the UI

- Navigation labels are uppercase, bold, and heavily tracked.
- Buttons are uppercase, bold, extra-small, and use wide letter spacing.
- Section headings are uppercase with display font and tightened hierarchy.
- Eyebrows use tiny uppercase labels with muted color.

In practice, the visual voice is editorial, compact, and high-contrast rather than soft or minimal.

### Color Tokens

Shared semantic token names:

- `--color-canvas`: page background
- `--color-surface`: elevated panels and cards
- `--color-ink`: primary text
- `--color-muted`: secondary text
- `--color-accent`: primary action color
- `--color-accent-alt`: secondary accent or highlight color
- `--color-accent-soft`: softer supporting accent
- `--color-accent-deep`: darker accent anchor
- `--color-border`: border color
- `--color-glow`: glow or accent-effect source
- `--color-text-on-dark`: text to place on dark or saturated surfaces
- `--color-text-on-light`: text to place on light surfaces
- `--color-cta-text`: text color specifically for CTA buttons

### Vibes

| Vibe | Mood | Canvas | Surface | Ink | Accent | Accent Alt |
| --- | --- | --- | --- | --- | --- | --- |
| Woodland Harvest | Grounded, organic, harvest afternoon | `#DCC9A9` | `#CBBA96` | `#1A1711` | `#4E6851` | `#B8312D` |
| Terracotta Dusk | Mediterranean warmth, dusty blush, slate structure | `#E8D8C9` | `#D8C5B0` | `#1A1409` | `#4B607F` | `#F3701E` |
| Coastal Sands | Breezy, fresh, sun-bleached, seaside | `#F2E8D1` | `#E5D5BC` | `#1A1411` | `#3DA0AB` | `#DD664E` |
| Midnight Gold | Dark luxe, dramatic, gold on obsidian | `#1A1A1A` | `#252525` | `#EFE8CB` | `#FAE3AD` | `#D02329` |

Important contrast rule:

- `Midnight Gold` uses a light gold CTA, so its CTA text switches to dark text instead of white.
- The dedicated `--color-cta-text` token prevents button contrast from being guessed from the background.

### Tailwind Semantic Mapping

The Tailwind config exposes the token system as semantic utilities:

```js
colors: {
  canvas: 'rgb(var(--color-canvas) / <alpha-value>)',
  surface: 'rgb(var(--color-surface) / <alpha-value>)',
  ink: 'rgb(var(--color-ink) / <alpha-value>)',
  muted: 'rgb(var(--color-muted) / <alpha-value>)',
  accent: 'rgb(var(--color-accent) / <alpha-value>)',
  'accent-alt': 'rgb(var(--color-accent-alt) / <alpha-value>)',
  'accent-soft': 'rgb(var(--color-accent-soft) / <alpha-value>)',
  'accent-deep': 'rgb(var(--color-accent-deep) / <alpha-value>)',
  border: 'rgb(var(--color-border) / <alpha-value>)',
  'on-dark': 'rgb(var(--color-text-on-dark) / <alpha-value>)',
  'on-light': 'rgb(var(--color-text-on-light) / <alpha-value>)',
  'cta-text': 'rgb(var(--color-cta-text) / <alpha-value>)',
}
```

This keeps component code theme-agnostic. Components ask for intent, not hardcoded color values.

### Layout and Sizing Rules

Defined in `tailwind.config.js` and the shared layout primitives:

- Container is centered.
- Container padding is `1.25rem` by default and `2rem` on large screens.
- Shared section spacing uses `clamp(4rem, 10vw, 7rem)`.
- `max-w-copy` is `72ch` for readable text blocks.
- Shared border radius for cards is `8px`.

Shared spacing tokens:

- `gutter: clamp(1.25rem, 3vw, 2rem)`
- `section: clamp(4rem, 10vw, 7rem)`
- `hero: clamp(4rem, 10vw, 7rem)`

### Shadow Rules

- `shadow-card`: `0 4px 24px rgba(26, 23, 17, 0.12)`
- `shadow-card-hover`: `0 8px 32px rgba(26, 23, 17, 0.18)`

These values create restrained depth rather than glossy or highly elevated surfaces.

### Global UI Rules

Declared in `src/styles/index.css`:

- `html { scroll-behavior: smooth; }`
- Body background uses `canvas`.
- Body text uses `ink`.
- Links inherit color by default.
- Images are block-level and responsive.
- Text selection uses `accent` at 25% opacity.
- `.metric-value` uses `accent-alt` and bold weight.

### Shared Component Rules

#### Button

Variants in `src/components/common/Button.jsx`:

- `primary`: accent background with `cta-text`
- `secondary`: 2px ink border, inverts to ink background on hover
- `ghost`: text-only action that shifts toward accent on hover

Button shape and voice:

- `rounded-[8px]`
- `px-8 py-4`
- `text-xs`
- `font-bold`
- uppercase
- wide tracking
- `transition-all duration-200`

#### Container

`src/components/common/Container.jsx` standardizes page width:

- centered layout
- `max-w-6xl`
- `px-5 lg:px-8`

#### SectionHeading

`src/components/common/SectionHeading.jsx` defines the default content hierarchy:

- eyebrow in muted uppercase microcopy
- display-font title
- uppercase title styling
- `max-w-copy` for readable description width
- optional center alignment mode

#### NavBar

`src/components/common/NavBar.jsx` sets the shell behavior:

- sticky top navigation
- translucent canvas background with blur
- bottom border using the border token
- active nav item changes to accent
- external LinkedIn icon inherits current text color rules
- includes the `VibeSwitcher`

### Motion and Interaction Rules

- Smooth in-page scroll is enabled globally.
- Buttons use quick opacity or color transitions instead of large animation choreography.
- The vibe switcher adds a celebratory confetti burst to make theme changes feel intentional.
- The confetti palette pulls from all vibe accents, so the interaction previews the larger system instead of a single active theme.

## VibeContext

`src/context/VibeContext.jsx` is the runtime controller for the theme system.

### Exports

- `VIBES`: array describing all available vibes
- `VibeProvider`: context provider mounted near the app root
- `useVibe`: hook for consuming the current vibe and setter

### VIBES Shape

```js
{
  key: 'woodland-harvest',
  name: 'Woodland Harvest',
  description: 'Grounded & organic. Warm wheat earth, forest-green CTA, burnt-rust accent.',
  bg: '#DCC9A9',
  accent: '#4e6851'
}
```

Notes:

- `bg` and `accent` are preview values for UI swatches.
- Actual page styling still comes from CSS custom properties in `tokens.css`.

### State Model

- Default vibe: `woodland-harvest`
- Persistence key: `portfolio-vibe`
- State value: `currentVibe`
- Setter API: `setVibe(key)`

### Behavior

1. On initial render, the provider checks `localStorage` for `portfolio-vibe`.
2. If the stored key matches one of the defined vibes, it becomes the initial state.
3. Otherwise the app falls back to `woodland-harvest`.
4. A `useEffect` syncs `document.documentElement.dataset.vibe = currentVibe`.
5. CSS reacts to the `data-vibe` attribute and swaps the full token set.
6. Calling `setVibe(key)` updates both React state and `localStorage`.

### Context Contract

The provider supplies:

```js
{
  currentVibe,
  setVibe,
  vibes: VIBES
}
```

The guard in `useVibe()` throws an error if a consumer is rendered outside `<VibeProvider>`, which protects the API from silent misuse.

### VibeSwitcher Behavior

`src/components/common/VibeSwitcher.jsx` is the main consumer of the context:

- reads `currentVibe`, `setVibe`, and `vibes`
- chooses a random next vibe that is different from the current one
- spawns confetti from the button center
- calls `setVibe(next.key)`

It uses a multi-color gradient on the button so the control itself visually represents the four-theme system.

## Key Files and Responsibilities

- `src/styles/tokens.css`: all theme tokens and vibe palettes
- `src/styles/index.css`: global CSS rules and base behavior
- `tailwind.config.js`: semantic Tailwind mapping for tokens, spacing, type, and shadows
- `src/context/VibeContext.jsx`: runtime theme state and persistence
- `src/components/common/VibeSwitcher.jsx`: user-facing theme switch control
- `src/components/common/Button.jsx`: shared CTA rules
- `src/components/common/SectionHeading.jsx`: shared heading hierarchy
- `src/components/common/Container.jsx`: shared content width and horizontal padding
- `src/components/common/NavBar.jsx`: app shell header and entry point for theme switching
- `src/layouts/RootLayout.jsx`: persistent page frame
- `src/App.jsx`: route graph
- `src/main.jsx`: bootstrap and provider wiring

## Summary

This project uses a semantic design system built on CSS variables, with Tailwind acting as a thin utility layer over those tokens. `VibeContext` does not directly style components; it switches the active token set by writing the current vibe key to the root HTML dataset. That separation keeps the UI components simple, reusable, and theme-aware without hardcoding palette values into component code.