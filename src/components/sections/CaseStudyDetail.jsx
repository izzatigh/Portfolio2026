import Reveal from '../common/Reveal';

/* Two-column editorial row: bold label on the left, body text on the right */
function SectionRow({ label, children }) {
  return (
    <Reveal animation="fadeUp">
      <div className="flex flex-col gap-5 sm:flex-row sm:gap-14">
        <h3
          className="font-display font-bold text-ink sm:w-44 sm:shrink-0"
          style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)' }}
        >
          {label}
        </h3>
        <p className="text-base leading-8 text-muted sm:text-lg">{children}</p>
      </div>
    </Reveal>
  );
}

const NAV_SECTIONS = [
  { id: 'cs-intro',     label: 'Intro' },
  { id: 'cs-challenge', label: 'Challenge' },
  { id: 'cs-approach',  label: 'Approach' },
  { id: 'cs-impact',    label: 'Impact' },
];

function CaseStudyDetail({ caseStudy }) {
  const chips = [caseStudy.year, ...caseStudy.tags];
  const hasCoverImage = Boolean(caseStudy.coverImage);

  return (
    /* Dark outer wrapper — p-6 = 24 px dark gap on every side */
    <div id="cs-top" className="p-6" style={{ background: caseStudy.pageBg ?? 'rgb(var(--color-ink))' }}>

      {/* Card — overflow-clip clips corners without breaking position:sticky
          (overflow-hidden would break sticky on the side nav) */}
      <div className="flex overflow-clip rounded-xl bg-canvas">

        {/* ── Sticky side nav (desktop only) ───────────────── */}
        <aside className="hidden lg:block w-44 shrink-0 border-r border-ink/10">
          <div className="sticky top-6 px-6 py-14">
            <p className="text-[9px] font-bold tracking-[0.08em] text-muted">
              Contents
            </p>
            <nav className="mt-6" aria-label="Case study contents">
              <ul className="space-y-5">
                {NAV_SECTIONS.map(({ id, label }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="group flex items-center gap-3 text-muted transition-colors hover:text-ink"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted transition-colors group-hover:bg-accent" />
                      <span className="text-[11px] font-bold tracking-[0.04em]">
                        {label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <a
              href="#cs-top"
              className="mt-10 flex items-center gap-2 text-[10px] font-bold tracking-[0.06em] text-muted transition-colors hover:text-ink"
            >
              ↑ Top
            </a>
          </div>
        </aside>

        {/* ── Main content ──────────────────────────────────── */}
        <div className="min-w-0 flex-1 px-8 py-14 sm:px-12 lg:px-16 lg:py-20">

          {/* ── Title — centred ─────────────────────────────── */}
          <Reveal as="h1" animation="fadeUp" className="text-center font-display font-bold leading-tight text-ink" style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}>
            {caseStudy.title}
          </Reveal>

          {/* ── Chips / Tags — centred ───────────────────────── */}
          <Reveal animation="fadeUp" delay={100} className="mt-8 flex flex-wrap justify-center gap-3">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full bg-ink px-5 py-2 text-sm font-medium text-canvas"
              >
                {chip}
              </span>
            ))}
          </Reveal>

          {/* ── Hero image area ──────────────────────────────── */}
          <Reveal animation="scaleIn" delay={180} className="mt-10">
            <div
              className="overflow-hidden rounded-[8px] border-2 border-accent"
              style={{ background: 'rgb(var(--color-surface))' }}
            >
              {hasCoverImage ? (
                <img
                  src={caseStudy.coverImage}
                  alt={caseStudy.coverImageAlt ?? `${caseStudy.title} cover`}
                  width={caseStudy.coverImageWidth}
                  height={caseStudy.coverImageHeight}
                  className="block h-auto w-full"
                />
              ) : (
                <div
                  className="flex items-center justify-center"
                  style={{ aspectRatio: '21 / 9' }}
                >
                  <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-muted">
                    Case Study Cover
                  </p>
                </div>
              )}
            </div>
          </Reveal>

          {/* ── Editorial text sections ──────────────────────── */}
          <div className="mt-16 space-y-12">

            <div id="cs-intro">
              <SectionRow label="Intro">{caseStudy.summary}</SectionRow>
            </div>

            <hr style={{ borderColor: 'rgb(var(--color-ink) / 0.1)' }} />

            <div id="cs-challenge">
              <SectionRow label="Challenge">{caseStudy.challenge}</SectionRow>
            </div>

            <hr style={{ borderColor: 'rgb(var(--color-ink) / 0.1)' }} />

            <div id="cs-approach">
              <SectionRow label="Approach">{caseStudy.approach}</SectionRow>
            </div>

            <hr style={{ borderColor: 'rgb(var(--color-ink) / 0.1)' }} />

            <div id="cs-impact">
              <SectionRow label="Impact">{caseStudy.impact}</SectionRow>
            </div>

          </div>

          {/* ── Project meta strip ───────────────────────────── */}
          <Reveal animation="fadeUp" delay={80} className="mt-16">
            <div
              className="grid gap-6 rounded-[8px] border p-6 sm:grid-cols-3"
              style={{ borderColor: 'rgb(var(--color-ink) / 0.1)' }}
            >
              <div>
                <p className="text-[10px] font-bold tracking-[0.06em] text-accent">Role</p>
                <p className="mt-2 font-medium text-ink">{caseStudy.role}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.06em] text-accent">Timeline</p>
                <p className="mt-2 font-medium text-ink">{caseStudy.timeline}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.06em] text-accent">Year</p>
                <p className="mt-2 font-medium text-ink">{caseStudy.year}</p>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </div>
  );
}

export default CaseStudyDetail;


