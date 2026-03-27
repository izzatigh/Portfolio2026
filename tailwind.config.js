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
      },
      spacing: {
        gutter: 'clamp(1.25rem, 3vw, 2rem)',
        section: 'clamp(4rem, 10vw, 7rem)',
        hero: 'clamp(5rem, 12vw, 9rem)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui'],
      },
      maxWidth: {
        copy: '72ch',
      },
      boxShadow: {
        card: '0 24px 60px rgba(0, 0, 0, 0.4)',
        glow: '0 0 20px rgba(0, 212, 255, 0.15)',
        'glow-lg': '0 0 40px rgba(0, 212, 255, 0.2), 0 0 80px rgba(0, 212, 255, 0.05)',
      },
      borderRadius: {
        card: '4px',
      },
    },
  },
  plugins: [],
};
