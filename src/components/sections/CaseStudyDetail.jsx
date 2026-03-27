import Container from '../common/Container';

function CaseStudyDetail({ caseStudy }) {
  return (
    <main className="py-section">
      <Container>
        <div className="rounded-card border border-border bg-surface p-8 shadow-card sm:p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">
            {caseStudy.category} / {caseStudy.year}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
            {caseStudy.title}
          </h1>
          <p className="mt-6 max-w-copy text-lg leading-8 text-muted">{caseStudy.summary}</p>
          <div className="mt-10 grid gap-6 border-t border-border pt-8 md:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-muted">Role</p>
              <p className="mt-3 text-sm leading-7 text-ink">{caseStudy.role}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-muted">Timeline</p>
              <p className="mt-3 text-sm leading-7 text-ink">{caseStudy.timeline}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-muted">Focus</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {caseStudy.tags.map((tag) => (
                  <span className="rounded-full border border-border px-3 py-2 text-xs uppercase tracking-[0.14em] text-ink" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <section className="rounded-card border border-border bg-surface p-7 shadow-card lg:col-span-1">
            <p className="text-xs uppercase tracking-[0.22em] text-muted">Challenge</p>
            <p className="mt-4 text-sm leading-7 text-muted">{caseStudy.challenge}</p>
          </section>
          <section className="rounded-card border border-border bg-surface p-7 shadow-card lg:col-span-1">
            <p className="text-xs uppercase tracking-[0.22em] text-muted">Approach</p>
            <p className="mt-4 text-sm leading-7 text-muted">{caseStudy.approach}</p>
          </section>
          <section className="rounded-card border border-border bg-surface p-7 shadow-card lg:col-span-1">
            <p className="text-xs uppercase tracking-[0.22em] text-muted">Impact</p>
            <p className="mt-4 text-sm leading-7 text-muted">{caseStudy.impact}</p>
          </section>
        </div>
      </Container>
    </main>
  );
}

export default CaseStudyDetail;
