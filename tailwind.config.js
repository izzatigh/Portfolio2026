/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        lg: '2rem',
      },
    },
    extend: {
      colors: {
        canvas: 'rgb(var(--color-canvas) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        'accent-alt': 'rgb(var(--color-accent-alt) / <alpha-value>)',
        accentSoft: 'rgb(var(--color-accent-soft) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        'retro-green': '#4d6953',
        'retro-green-dark': '#324d44',
        'retro-red': '#c94b2b',
        'retro-cream': '#efe8cb',
        'retro-cream-dark': '#e5dab6',
      },
      spacing: {
        gutter: 'clamp(1.25rem, 3vw, 2rem)',
        section: 'clamp(4rem, 10vw, 7rem)',
        hero: 'clamp(4rem, 10vw, 7rem)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui'],
      },
      maxWidth: {
        copy: '72ch',
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
      },
      boxShadow: {
        card: '0 4px 24px rgba(26, 23, 17, 0.12)',
        'card-hover': '0 8px 32px rgba(26, 23, 17, 0.18)',
      },
      borderRadius: {
        card: '8px',
      },
    },
  },
  plugins: [],
};
