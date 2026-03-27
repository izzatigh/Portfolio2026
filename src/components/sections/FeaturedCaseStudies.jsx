import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

function FeaturedCaseStudies({ caseStudies }) {
  return (
    <section className="py-section">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Three case study routes backed by structured content data."
          description="Keep the content in src/data while swapping presentation components as your portfolio evolves."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <article
              className="rounded-card border border-border bg-surface p-6 shadow-card transition-transform duration-300 hover:-translate-y-1"
              key={caseStudy.slug}
            >
              <p className="text-sm uppercase tracking-[0.24em] text-muted">{caseStudy.category}</p>
              <h3 className="mt-4 font-display text-2xl text-ink">{caseStudy.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{caseStudy.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-[0.16em] text-muted">
                {caseStudy.tags.map((tag) => (
                  <span className="rounded-full border border-border px-3 py-2" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                className="mt-8 inline-flex text-sm font-medium text-ink transition-colors hover:text-accent"
                to={`/case-studies/${caseStudy.slug}`}
              >
                View case study
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeaturedCaseStudies;
