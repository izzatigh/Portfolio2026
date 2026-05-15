import { Link } from 'react-router-dom';
import Container from '../common/Container';

/**
 * Card accent colors use CSS custom properties so they respond to vibe changes.
 * Card 0: accent-alt bg  (e.g. rust, orange, coral, crimson)
 * Card 1: accent bg      (e.g. green, slate-blue, teal, gold)
 * Card 2: ink bg         (dark, always)
 */
const CARD_THEMES = [
  {
    bg: 'rgb(var(--color-accent-alt))',
    text: 'rgb(var(--color-text-on-dark))',
    btnBg: 'rgb(var(--color-ink))',
    btnText: 'rgb(var(--color-canvas))',
    labelColor: 'rgb(var(--color-text-on-dark) / 0.65)',
  },
  {
    bg: 'rgb(var(--color-accent))',
    text: 'rgb(var(--color-cta-text))',
    btnBg: 'rgb(var(--color-accent-alt))',
    btnText: 'rgb(var(--color-text-on-dark))',
    labelColor: 'rgb(var(--color-cta-text) / 0.65)',
  },
  {
    bg: 'rgb(var(--color-ink))',
    text: 'rgb(var(--color-canvas))',
    btnBg: 'rgb(var(--color-accent))',
    btnText: 'rgb(var(--color-cta-text))',
    labelColor: 'rgb(var(--color-canvas) / 0.65)',
  },
];

function CaseStudyCard({ caseStudy, index }) {
  const theme = CARD_THEMES[index % CARD_THEMES.length];
  const isWide = index === 1; // second card stretches wider / right-aligned

  return (
    <Link
      className="group block rounded-[8px] overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-card-hover"
      style={{ background: theme.bg, boxShadow: '0 4px 24px rgba(26,23,17,0.10)' }}
      to={`/case-studies/${caseStudy.slug}`}
    >
      {/* Thumbnail area */}
      <div
        className="w-full"
        style={{
          height: isWide ? 220 : 180,
          background: `${theme.bg}cc`,
          borderBottom: `2px solid rgba(255,255,255,0.08)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: theme.labelColor }}>
          {caseStudy.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex items-end justify-between gap-4 p-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: theme.labelColor }}>
            {caseStudy.role}
          </p>
          <h3
            className="mt-2 font-display font-bold uppercase leading-snug"
            style={{ color: theme.text, fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', letterSpacing: '0.06em' }}
          >
            {caseStudy.title}
          </h3>
        </div>
        <div
          className="shrink-0 rounded-[6px] px-5 py-3 text-xs font-bold uppercase tracking-widest transition-opacity hover:opacity-80"
          style={{ background: theme.btnBg, color: theme.btnText, letterSpacing: '0.12em' }}
        >
          Open
        </div>
      </div>
    </Link>
  );
}

function FeaturedCaseStudies({ caseStudies }) {
  const featured = caseStudies.slice(0, 3);

  return (
    <section className="bg-canvas py-section" id="selected-works">
      <Container>
        {/* Section header */}
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p
              className="font-bold uppercase text-muted"
              style={{ fontSize: '0.75rem', letterSpacing: '0.28em' }}
            >
              Selected Work
            </p>
            <h2
              className="mt-2 font-display font-bold uppercase text-ink"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', letterSpacing: '0.1em' }}
            >
              Featured Case Studies
            </h2>
          </div>
          <Link
            className="shrink-0 hidden sm:inline-flex rounded-[6px] border-2 px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all"
            style={{ borderColor: 'rgb(var(--color-ink))', color: 'rgb(var(--color-ink))', letterSpacing: '0.12em' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgb(var(--color-ink))'; e.currentTarget.style.color = 'rgb(var(--color-canvas))'; }}
            onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.color = 'rgb(var(--color-ink))'; }}
            to="/case-studies"
          >
            View All
          </Link>
        </div>

        {/* Staggered cards */}
        <div className="flex flex-col gap-5">
          {/* Row 1: first card full-width */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[3fr_2fr]">
            {featured[0] && <CaseStudyCard caseStudy={featured[0]} index={0} />}
            {/* Right column — compact info card */}
            {featured[1] && (
              <div
                className="flex flex-col justify-between rounded-[8px] p-6"
                style={{ background: 'rgb(var(--color-surface))', border: '1.5px solid rgb(var(--color-border))' }}
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">{featured[1].category}</p>
                  <h3
                    className="mt-3 font-display font-bold uppercase leading-snug text-ink"
                    style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', letterSpacing: '0.06em' }}
                  >
                    {featured[1].title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{featured[1].summary}</p>
                </div>
                <Link
                  className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink transition-opacity hover:opacity-60"
                  style={{ letterSpacing: '0.12em' }}
                  to={`/case-studies/${featured[1].slug}`}
                >
                  Open case study →
                </Link>
              </div>
            )}
          </div>

          {/* Row 2: second card wide */}
          {featured[1] && (
            <CaseStudyCard caseStudy={featured[1]} index={1} />
          )}

          {/* Row 3: third card + label block */}
          {featured[2] && (
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[2fr_3fr]">
              {/* Left — label/year block */}
              <div
                className="flex flex-col justify-between rounded-[8px] p-6"
                style={{ background: 'rgb(var(--color-surface))', border: '1.5px solid rgb(var(--color-border))' }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">{featured[2].year}</p>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">{featured[2].category}</p>
                  <h3
                    className="mt-2 font-display font-bold uppercase leading-snug text-ink"
                    style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', letterSpacing: '0.06em' }}
                  >
                    {featured[2].title}
                  </h3>
                </div>
              </div>
              <CaseStudyCard caseStudy={featured[2]} index={2} />
            </div>
          )}
        </div>

        {/* Mobile view all */}
        <div className="mt-8 sm:hidden">
          <Link
            className="inline-flex w-full items-center justify-center rounded-[6px] border-2 py-4 text-xs font-bold uppercase tracking-widest"
            style={{ borderColor: 'rgb(var(--color-ink))', color: 'rgb(var(--color-ink))', letterSpacing: '0.12em' }}
            to="/case-studies"
          >
            View All Case Studies
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default FeaturedCaseStudies;

