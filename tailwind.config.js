/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      // Mobile-first breakpoints
      // xs  = 390px  → iPhone 17 (no prefix needed; treat as base/default)
      sm:  '640px',
      md:  '768px',   // tablet portrait / landscape mobile
      lg:  '1024px',  // small laptop
      xl:  '1280px',  // 1280×800 tablet / small desktop
      '2xl': '1440px', // primary desktop design target
      '3xl': '1920px', // large / ultrawide desktop
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        md: '2rem',
        xl: '3rem',
        '3xl': '5rem',
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
        'accent-soft': 'rgb(var(--color-accent-soft) / <alpha-value>)',
        'accent-deep': 'rgb(var(--color-accent-deep) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        // Semantic contrast tokens — use for text ON a given background
        'on-dark': 'rgb(var(--color-text-on-dark) / <alpha-value>)',
        'on-light': 'rgb(var(--color-text-on-light) / <alpha-value>)',
        'cta-text': 'rgb(var(--color-cta-text) / <alpha-value>)',
      },
      spacing: {
        gutter: 'clamp(1.25rem, 3vw, 2rem)',
        section: 'clamp(4rem, 10vw, 7rem)',
        hero: 'clamp(4rem, 10vw, 7rem)',
      },
      fontFamily: {
        display: ['"Poppins"', 'sans-serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui'],
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
