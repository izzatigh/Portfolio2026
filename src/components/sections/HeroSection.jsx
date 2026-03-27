import Button from '../common/Button';
import Container from '../common/Container';

function HeroSection() {
  return (
    <section className="relative overflow-hidden py-hero bg-grid">
      {/* Futuristic gradient orbs */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(ellipse_at_top_left,_rgba(0,212,255,0.12),_transparent_50%),radial-gradient(ellipse_at_top_right,_rgba(0,255,136,0.06),_transparent_45%)]" />
      <div className="absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/5 blur-[100px]" />
      <Container>
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.36em] text-accent font-medium">UI/UX Designer · Mobile &amp; SaaS</p>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[0.92] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Crafting intuitive mobile experiences that drive product growth.
          </h1>
          <p className="mt-6 max-w-copy text-lg leading-8 text-muted">
            I’m Izzati — a UI/UX designer who leads end-to-end design for SaaS and e-commerce mobile apps. I turn business goals into clear, user-centered interfaces and present design decisions to stakeholders with confidence.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button to="/about">About me</Button>
            <Button to="/case-studies/shopflow-mobile" variant="secondary">
              View case study
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
