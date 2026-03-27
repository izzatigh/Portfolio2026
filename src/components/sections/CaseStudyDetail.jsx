import Container from '../common/Container';

function CaseStudyDetail({ caseStudy }) {
  return (
    <main className="py-section bg-grid">
      <Container>
        <div className="card-futuristic rounded-card border border-border bg-surface p-8 shadow-card sm:p-10">
          <p className="text-xs uppercase tracking-[0.34em] text-accent font-medium">
            {caseStudy.category} / {caseStudy.year}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            {caseStudy.title}
          </h1>
          <p className="mt-6 max-w-copy text-lg leading-8 text-muted">{caseStudy.summary}</p>
          <div className="mt-10 grid gap-6 border-t border-border/40 pt-8 md:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">Role</p>
              <p className="mt-3 text-sm leading-7 text-ink">{caseStudy.role}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">Timeline</p>
              <p className="mt-3 text-sm leading-7 text-ink">{caseStudy.timeline}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">Focus</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {caseStudy.tags.map((tag) => (
                  <span className="rounded-[4px] border border-border px-3 py-2 text-xs uppercase tracking-[0.14em] text-ink transition-colors hover:border-accent/30" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <section className="card-futuristic rounded-card border border-border bg-surface p-7 shadow-card lg:col-span-1">
            <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">Challenge</p>
            <p className="mt-4 text-sm leading-7 text-muted">{caseStudy.challenge}</p>
          </section>
          <section className="card-futuristic rounded-card border border-border bg-surface p-7 shadow-card lg:col-span-1">
            <p className="text-xs uppercase tracking-[0.22em] text-accent-alt font-medium">Approach</p>
            <p className="mt-4 text-sm leading-7 text-muted">{caseStudy.approach}</p>
          </section>
          <section className="card-futuristic rounded-card border border-border bg-surface p-7 shadow-card lg:col-span-1">
            <p className="text-xs uppercase tracking-[0.22em] text-accent-alt font-medium">Impact</p>
            <p className="mt-4 text-sm leading-7 text-muted">{caseStudy.impact}</p>
          </section>
        </div>
      </Container>
    </main>
  );
}

export default CaseStudyDetail;
