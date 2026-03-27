import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

function AboutStorySection() {
  return (
    <section className="py-section">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Use this page for process, principles, and how you work with product teams."
          description="Keep long-form narrative here and let the hero or case study pages stay more concise and conversion-oriented."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-card border border-border bg-surface p-8 shadow-card">
            <p className="text-base leading-8 text-muted">
              I design interfaces with an editorial eye and a systems mindset. My practice sits between product thinking, visual direction, and structured component design, which makes this portfolio scaffold a strong base for AI-generated UI work without losing architectural discipline.
            </p>
            <p className="mt-6 text-base leading-8 text-muted">
              When you connect Figma MCP to this project, section-level components are the safest place to generate layout variations. Shared primitives and tokens should stay stable so the whole portfolio remains coherent as you iterate.
            </p>
          </div>
          <div className="rounded-card border border-border bg-accentSoft p-8">
            <p className="text-sm uppercase tracking-[0.22em] text-muted">Suggested Content Blocks</p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-ink">
              <li>Core skills and design principles</li>
              <li>Career timeline or selected roles</li>
              <li>Process snapshots and collaboration style</li>
              <li>Contact or availability details</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutStorySection;
