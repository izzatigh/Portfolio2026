import { Link } from 'react-router-dom';
import Container from '../common/Container';

const TOOLS = ['Figma', 'FigJam', 'Notion', 'Jira', 'Miro', 'Zeplin', 'Maze', 'Hotjar'];

/* Geometric / architectural SVG pattern — visual asset in the top half of card 3 */
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
      <line x1="0" y1="110" x2="340" y2="110" stroke="rgb(var(--color-canvas) / 0.07)" strokeWidth="1" />
      <line x1="170" y1="0" x2="170" y2="220" stroke="rgb(var(--color-canvas) / 0.07)" strokeWidth="1" />
      <rect x="30" y="30" width="100" height="160" fill="none" stroke="rgb(var(--color-canvas) / 0.18)" strokeWidth="1" />
      <rect x="48" y="50" width="64" height="90" fill="none" stroke="rgb(var(--color-canvas) / 0.1)" strokeWidth="0.75" />
      <line x1="80" y1="30" x2="80" y2="190" stroke="rgb(var(--color-canvas) / 0.1)" strokeWidth="0.75" />
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
      <rect x="30" y="188" width="100" height="3" fill="rgb(var(--color-accent-soft) / 0.45)" />
      <rect x="200" y="198" width="120" height="3" fill="rgb(var(--color-accent-soft) / 0.35)" />
    </svg>
  );
}

/* Tag anchored to the right edge of a card — matches Figma's top-right label pattern */
function Tag({ children, variant = 'filled' }) {
  const base = 'absolute right-0 top-6 z-10 whitespace-nowrap px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em]';
  if (variant === 'filled') {
    return <div className={`${base} bg-accent text-cta-text`}>{children}</div>;
  }
  if (variant === 'outline-dark') {
    return <div className={`${base} border-y-2 border-l-2 border-ink text-ink`}>{children}</div>;
  }
  // outline-light — for dark card backgrounds
  return (
    <div
      className={`${base} border-y-2 border-l-2`}
      style={{ borderColor: 'rgb(var(--color-text-on-dark) / 0.5)', color: 'rgb(var(--color-text-on-dark))' }}
    >
      {children}
    </div>
  );
}

function GetToKnowSection() {
  return (
    <section className="overflow-hidden bg-canvas py-section">
      <Container>
        {/* Desktop: [heading col] [card 1] [card 2] [card 3]
            Mobile:  heading stacked above a horizontally scrollable card row */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-5">

          {/* ── Heading column ─────────────────────────────── */}
          <div className="flex flex-col justify-center lg:w-52 lg:shrink-0">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-muted">
              My World
            </p>
            <h2
              className="mt-3 font-display font-bold uppercase leading-[1.1] text-ink"
              style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.5rem)', letterSpacing: '0.1em' }}
            >
              Get to Know
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              UI/UX Developer — designing at speed and building it in code.
            </p>
          </div>

          {/* ── Cards ──────────────────────────────────────────
              Mobile:  horizontal scroll, each card is a fixed narrow width
              Desktop: flex row filling remaining space equally (flex-1 per card)
          ─────────────────────────────────────────────────── */}
          <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 lg:mx-0 lg:flex-1 lg:overflow-visible lg:pb-0 lg:px-0">

            {/* Card 1 — Experience */}
            <article
              className="relative flex-none snap-start overflow-hidden rounded-card border-[3px] w-[min(285px,80vw)] lg:w-[unset] lg:flex-1"
              style={{
                height: 430,
                background: 'rgb(var(--color-surface))',
                borderColor: 'rgb(var(--color-accent))',
              }}
            >
              <Tag variant="filled">Experience</Tag>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                {/* Stats */}
                <div className="flex gap-5">
                  {[
                    { label: '3+', sub: 'Years' },
                    { label: 'SaaS', sub: 'Platforms' },
                    { label: 'Apps', sub: 'E-Commerce' },
                  ].map(({ label, sub }) => (
                    <div key={label}>
                      <p
                        className="font-display font-bold text-ink"
                        style={{ fontSize: '1.75rem', letterSpacing: '0.04em', lineHeight: 1 }}
                      >
                        {label}
                      </p>
                      <p className="mt-1 text-[9px] font-bold uppercase tracking-widest text-muted">{sub}</p>
                    </div>
                  ))}
                </div>
                {/* Highlights */}
                <ul className="mt-6 space-y-2.5">
                  {[
                    'UI/UX Developer · SaaS platform',
                    'Lead Designer · E-Commerce app',
                    'End-to-end product design',
                    'Stakeholder presentations',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs leading-snug text-muted">
                      <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Card 2 — Tools */}
            <article
              className="relative flex-none snap-start overflow-hidden rounded-card w-[min(285px,80vw)] lg:w-[unset] lg:flex-1"
              style={{
                height: 430,
                background: 'rgb(var(--color-accent-alt))',
              }}
            >
              <Tag variant="outline-dark">Tools</Tag>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <p
                  className="font-display font-bold uppercase leading-tight text-ink"
                  style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.45rem)', letterSpacing: '0.1em' }}
                >
                  My Design Stack
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {TOOLS.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-[4px] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em]"
                      style={{ background: 'rgb(var(--color-ink) / 0.14)', color: 'rgb(var(--color-ink))' }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Card 3 — More About Me */}
            <article
              className="relative flex-none snap-start overflow-hidden rounded-card w-[min(285px,80vw)] lg:w-[unset] lg:flex-1"
              style={{
                height: 430,
                background: 'rgb(var(--color-accent))',
              }}
            >
              <Tag variant="outline-light">More About Me</Tag>

              {/* Architectural pattern — top 55% of card */}
              <div className="absolute inset-x-0 top-0 overflow-hidden" style={{ height: '55%' }}>
                <ArchPattern />
              </div>

              {/* Content — bottom 45% */}
              <div
                className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-6"
                style={{ top: '55%' }}
              >
                <p
                  className="font-display font-bold uppercase leading-tight text-on-dark"
                  style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.45rem)', letterSpacing: '0.1em' }}
                >
                  Izzati Gufrani
                </p>
                <p
                  className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em]"
                  style={{ color: 'rgb(var(--color-text-on-dark) / 0.65)' }}
                >
                  UI/UX Developer
                </p>
                <Link
                  to="/about"
                  className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-on-dark transition-opacity hover:opacity-70"
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
