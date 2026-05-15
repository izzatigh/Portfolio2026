import { Link } from 'react-router-dom';
import Container from '../common/Container';

const TOOLS = ['Figma', 'FigJam', 'Notion', 'Jira', 'Miro', 'Zeplin', 'Maze', 'Hotjar'];

/* Geometric / architectural SVG pattern for the photo area of card 3 */
function ArchPattern() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 340 220"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <rect width="340" height="220" fill="rgb(var(--color-ink))" />
      {/* subtle grid */}
      <line x1="0" y1="110" x2="340" y2="110" stroke="rgb(var(--color-canvas) / 0.07)" strokeWidth="1" />
      <line x1="170" y1="0" x2="170" y2="220" stroke="rgb(var(--color-canvas) / 0.07)" strokeWidth="1" />
      {/* left building block */}
      <rect x="30" y="30" width="100" height="160" fill="none" stroke="rgb(var(--color-canvas) / 0.18)" strokeWidth="1" />
      <rect x="48" y="50" width="64" height="90" fill="none" stroke="rgb(var(--color-canvas) / 0.1)" strokeWidth="0.75" />
      <line x1="80" y1="30" x2="80" y2="190" stroke="rgb(var(--color-canvas) / 0.1)" strokeWidth="0.75" />
      {/* window rows */}
      {[0, 1, 2].map((r) =>
        [0, 1].map((c) => (
          <rect
            key={`${r}-${c}`}
            x={52 + c * 22}
            y={56 + r * 28}
            width={14}
            height={18}
            fill="rgb(var(--color-canvas) / 0.06)"
            stroke="rgb(var(--color-canvas) / 0.12)"
            strokeWidth="0.5"
          />
        ))
      )}
      {/* right building block */}
      <rect x="200" y="15" width="120" height="185" fill="none" stroke="rgb(var(--color-canvas) / 0.22)" strokeWidth="1" />
      <line x1="260" y1="15" x2="260" y2="200" stroke="rgb(var(--color-canvas) / 0.1)" strokeWidth="0.75" />
      {[0, 1, 2, 3].map((r) =>
        [0, 1].map((c) => (
          <rect
            key={`r${r}-c${c}`}
            x={210 + c * 26}
            y={30 + r * 36}
            width={18}
            height={22}
            fill="rgb(var(--color-canvas) / 0.06)"
            stroke="rgb(var(--color-canvas) / 0.12)"
            strokeWidth="0.5"
          />
        ))
      )}
      {/* accent stripe at base */}
      <rect x="30" y="188" width="100" height="3" fill="rgb(var(--color-accent-soft) / 0.45)" />
      <rect x="200" y="198" width="120" height="3" fill="rgb(var(--color-accent-soft) / 0.35)" />
    </svg>
  );
}

/* Card tag — the small label in the top-right corner */
function Tag({ children, variant = 'filled' }) {
  if (variant === 'filled') {
    return (
      <div
        className="absolute right-0 top-5 z-10 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.16em]"
        style={{ background: 'rgb(var(--color-accent))', color: 'rgb(var(--color-cta-text))' }}
      >
        {children}
      </div>
    );
  }
  if (variant === 'outline-dark') {
    return (
      <div
        className="absolute right-0 top-5 z-10 border-l-2 border-y-2 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.16em]"
        style={{ borderColor: 'rgb(var(--color-ink))', color: 'rgb(var(--color-ink))' }}
      >
        {children}
      </div>
    );
  }
  // outline-light — for dark backgrounds
  return (
    <div
      className="absolute right-0 top-5 z-10 border-l-2 border-y-2 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.16em]"
      style={{ borderColor: 'rgb(var(--color-text-on-dark) / 0.45)', color: 'rgb(var(--color-text-on-dark))' }}
    >
      {children}
    </div>
  );
}

function GetToKnowSection() {
  return (
    <section className="bg-canvas py-section">
      <Container>
        {/* ── Layout: narrow heading col + 3 cards ───────── */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">

          {/* ── Left: heading ─────────────────────────────── */}
          <div className="lg:w-[220px] lg:shrink-0 lg:pt-6">
            <p
              className="font-bold uppercase text-muted"
              style={{ fontSize: '0.7rem', letterSpacing: '0.28em' }}
            >
              My world
            </p>
            <h2
              className="mt-3 font-display font-bold uppercase leading-tight text-ink"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', letterSpacing: '0.12em' }}
            >
              Get to Know
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              Mid-level UI/UX designer with a bias for business impact — designing products people love, that ship.
            </p>
          </div>

          {/* ── Right: cards ──────────────────────────────── */}
          {/* Mobile: horizontal scroll; desktop: 3-col grid */}
          <div className="-mr-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 pr-5 lg:mr-0 lg:grid lg:flex-1 lg:grid-cols-3 lg:overflow-visible lg:pb-0 lg:pr-0">

            {/* ─── Card 1: Experience ─────────────────── */}
            <article
              className="relative flex-none snap-start overflow-hidden rounded-[8px] border-2"
              style={{
                width: 'min(290px, 78vw)',
                minHeight: 400,
                background: 'rgb(var(--color-surface))',
                borderColor: 'rgb(var(--color-accent))',
              }}
            >
              <Tag variant="filled">Experience</Tag>

              <div className="flex h-full flex-col justify-end p-7 pt-20">
                {/* Stats row */}
                <div className="flex gap-6">
                  {[
                    { label: '3+', sub: 'Years' },
                    { label: 'SaaS', sub: 'Platforms' },
                    { label: 'Apps', sub: 'E-Commerce' },
                  ].map(({ label, sub }) => (
                    <div key={label}>
                      <p
                        className="font-display font-bold text-ink"
                        style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2rem)', letterSpacing: '0.04em', lineHeight: 1 }}
                      >
                        {label}
                      </p>
                      <p className="mt-1 text-[9px] font-bold uppercase tracking-widest text-muted">{sub}</p>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="mt-8 space-y-3">
                  {[
                    'UI/UX Developer · SaaS platform',
                    'Lead Designer · E-Commerce app',
                    'End-to-end product design',
                    'Stakeholder presentations',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs leading-snug text-muted">
                      <span
                        className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: 'rgb(var(--color-accent))' }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* ─── Card 2: Tools ──────────────────────── */}
            <article
              className="relative flex-none snap-start overflow-hidden rounded-[8px]"
              style={{
                width: 'min(290px, 78vw)',
                minHeight: 400,
                background: 'rgb(var(--color-accent-alt))',
              }}
            >
              <Tag variant="outline-dark">Tools</Tag>

              <div className="flex h-full flex-col justify-end p-7 pt-20">
                <p
                  className="font-display font-bold uppercase leading-tight"
                  style={{
                    color: 'rgb(var(--color-text-on-dark))',
                    fontSize: 'clamp(1.3rem, 2vw, 1.6rem)',
                    letterSpacing: '0.1em',
                  }}
                >
                  My Design Stack
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {TOOLS.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-[4px] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em]"
                      style={{
                        background: 'rgb(var(--color-ink) / 0.18)',
                        color: 'rgb(var(--color-text-on-dark))',
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* ─── Card 3: More About Me ──────────────── */}
            <article
              className="relative flex-none snap-start overflow-hidden rounded-[8px]"
              style={{
                width: 'min(290px, 78vw)',
                minHeight: 400,
                background: 'rgb(var(--color-accent))',
              }}
            >
              <Tag variant="outline-light">More About Me</Tag>

              {/* Architectural pattern — top 55% */}
              <div className="absolute inset-x-0 top-0 overflow-hidden" style={{ height: '55%' }}>
                <ArchPattern />
              </div>

              {/* Bottom content — bottom 45% */}
              <div
                className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-7"
                style={{ top: '55%' }}
              >
                <p
                  className="font-display font-bold uppercase leading-tight"
                  style={{
                    color: 'rgb(var(--color-cta-text))',
                    fontSize: 'clamp(1.3rem, 2vw, 1.6rem)',
                    letterSpacing: '0.1em',
                  }}
                >
                  Izzati Gufrani
                </p>
                <p
                  className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em]"
                  style={{ color: 'rgb(var(--color-cta-text) / 0.65)' }}
                >
                  UI/UX Designer
                </p>
                <Link
                  to="/about"
                  className="mt-5 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] transition-opacity hover:opacity-70"
                  style={{ color: 'rgb(var(--color-cta-text))', letterSpacing: '0.16em' }}
                >
                  Read my story →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default GetToKnowSection;
