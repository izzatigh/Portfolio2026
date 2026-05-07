import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

function AboutStorySection() {
  return (
    <section className="py-section">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Designing products people love to use — and businesses love to ship."
          description="I’m a mid-level UI/UX designer who works as a standalone designer: I lead my own design process, make decisions, and present them directly to stakeholders."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-card border border-border bg-surface p-8 shadow-card" style={{ boxShadow: '0 4px 24px rgba(26,23,17,0.08)' }}>
            <p className="text-base leading-8 text-muted">
              Currently working as a UI/UX developer on a SaaS application, my experience spans both SaaS platforms and e-commerce mobile apps. I’m passionate about the intersection of business strategy and design — understanding not just how something looks, but why it matters to users and the bottom line.
            </p>
            <p className="mt-6 text-base leading-8 text-muted">
              I’m looking for my next role in an e-commerce company focused on mobile apps, where I can contribute to product development from both a business and design perspective. I thrive when I can own the design end-to-end and collaborate closely with product and engineering teams.
            </p>
          </div>
          <div className="rounded-card border border-border bg-surface p-8">
            <p className="text-sm uppercase tracking-[0.22em] text-accent font-medium">What I bring</p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-ink">
              <li><span className="metric-value font-bold">→</span> End-to-end mobile app design (iOS & Android)</li>
              <li><span className="metric-value font-bold">→</span> Stakeholder presentation & design advocacy</li>
              <li><span className="metric-value font-bold">→</span> SaaS & e-commerce UX expertise</li>
              <li><span className="metric-value font-bold">→</span> Product thinking & business-driven design</li>
              <li><span className="metric-value font-bold">→</span> Design systems & component architecture</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutStorySection;
