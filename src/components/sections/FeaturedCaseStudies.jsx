import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

function FeaturedCaseStudies({ caseStudies }) {
  return (
    <section className="py-section bg-grid">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects that shaped products and drove real outcomes."
          description="From e-commerce mobile apps to SaaS platforms — here’s how I approach design challenges end-to-end."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <article
              className="card-futuristic rounded-card border border-border bg-surface p-6 shadow-card"
              key={caseStudy.slug}
            >
              <p className="text-xs uppercase tracking-[0.28em] text-accent font-medium">{caseStudy.category}</p>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink">{caseStudy.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{caseStudy.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-[0.16em] text-muted">
                {caseStudy.tags.map((tag) => (
                  <span className="rounded-[4px] border border-border px-3 py-2 transition-colors duration-300 hover:border-accent/30 hover:text-accent" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                className="mt-8 inline-flex text-sm font-medium text-accent-alt transition-all duration-300 hover:text-accent hover:tracking-wider"
                to={`/case-studies/${caseStudy.slug}`}
              >
                View case study →
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeaturedCaseStudies;
