import Button from '../common/Button';
import Container from '../common/Container';

function HeroSection() {
  return (
    <section className="relative overflow-hidden py-hero">
      <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top_left,_rgba(197,102,61,0.18),_transparent_48%),radial-gradient(circle_at_top_right,_rgba(238,220,209,0.8),_transparent_42%)]" />
      <Container>
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.32em] text-muted">Senior Product & Visual Designer</p>
          <h1 className="mt-6 font-display text-5xl leading-[0.95] text-ink sm:text-6xl lg:text-7xl">
            Designing calm, editorial digital experiences with a systems mindset.
          </h1>
          <p className="mt-6 max-w-copy text-lg leading-8 text-muted">
            This scaffold is built for portfolio storytelling, reusable section design, and fast AI-assisted UI iteration from Figma MCP inputs.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button to="/about">About me</Button>
            <Button to="/case-studies/northstar-banking" variant="secondary">
              Open a case study
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
