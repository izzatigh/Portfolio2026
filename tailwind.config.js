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
        accentSoft: 'rgb(var(--color-accent-soft) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
      },
      spacing: {
        gutter: 'clamp(1.25rem, 3vw, 2rem)',
        section: 'clamp(4rem, 10vw, 7rem)',
        hero: 'clamp(5rem, 12vw, 9rem)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-display)', 'ui-serif', 'Georgia'],
      },
      maxWidth: {
        copy: '72ch',
      },
      boxShadow: {
        card: '0 24px 60px rgba(15, 23, 42, 0.08)',
      },
      borderRadius: {
        card: '1.5rem',
      },
    },
  },
  plugins: [],
};
