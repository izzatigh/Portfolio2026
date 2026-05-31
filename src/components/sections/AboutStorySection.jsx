import Button from '../common/Button';
import Container from '../common/Container';
import Reveal from '../common/Reveal';

const journeyItems = [
  {
    color: 'bg-accent',
    title: 'The hustle',
    period: '2022 – 2023',
    description:
      'After completing my Ironhack bootcamp and a graduation project with Just Eat Takeaway (JET), I joined JET as a Courier Coordinator. I balanced logistics by day and freelance UI/UX by night until I realized I needed to go all-in on design.',
  },
  {
    color: 'bg-accent-alt',
    title: 'Mentoring & Teaching',
    period: '2024',
    description:
      'I stepped into a Teacher Assistant role for the Saudi Digital Academy x Ironhack in Riyadh. After returning to the Netherlands, I continued as a TA for Ironhack\'s European market. Teaching others how to design only sharpened my own ability to build and problem-solve.',
  },
  {
    color: 'bg-accent-soft',
    title: 'Building at CLMBS',
    period: 'Present',
    description:
      'Today, I\'m a UI/UX Developer at CLMBS, a consultancy in Naaldwijk. This is where my design and development skills fully intersect. I build directly alongside the dev team, leverage Agentic AI to scale and maintain our design systems, and cross the aisle to assist the backend with data-driven tasks.',
  },
];

const tools = ['Figma', 'React', 'Tailwind', 'Vite', 'Framer', 'Cursor', 'Notion'];

function ImagePlaceholder({ className = '' }) {
  return (
    <div className={`rounded-card border border-border bg-surface ${className}`} />
  );
}

function AboutStorySection() {
  return (
    <div className="bg-canvas">

      {/* ── Hero ── */}
      <section className="py-section">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal as="h1" animation="fadeUp" className="font-display text-5xl font-bold leading-[1.12] tracking-tight text-ink lg:text-6xl">
              Hi I am Izzati.<br />
              I am a designer who<br />
              actually builds.
            </Reveal>
            <Reveal animation="fadeRight" delay={150}>
              <ImagePlaceholder className="aspect-[4/3] w-full" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── Tools row ── */}
      <section className="border-y border-border py-5">
        <Container>
          <div className="grid grid-cols-7 gap-3">
            {tools.map((tool, i) => (
              <Reveal
                key={tool}
                delay={i * 70}
                animation="fadeUp"
                className="flex items-center justify-center rounded-card border border-border bg-surface px-3 py-4 text-xs font-medium text-muted"
              >
                {tool}
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── The Designer Who Builds ── */}
      <section className="py-section">
        <Container>
          <Reveal as="h2" animation="fadeUp" className="font-display text-3xl font-bold text-ink lg:text-4xl">
            The Designer Who Builds
          </Reveal>
          <Reveal animation="fadeUp" delay={120} className="mt-6 max-w-copy text-base leading-8 text-muted">
            <p>
              I&rsquo;m a designer who takes full ownership of the frontend experience. My title is UI/UX Dev,
              but my work goes way beyond Figma. I rely heavily on &ldquo;vibe coding&rdquo; to move fast and
              intuitively translate UI concepts into functional code. But moving fast doesn&rsquo;t mean being
              reckless. I know exactly where my boundaries are, which is why I work hand-in-hand with backend
              developers. They guide the security and architecture, ensuring the system is bulletproof, while
              I focus on delivering high-fidelity, functional frontend experiences at speed.
            </p>
          </Reveal>
          <Reveal animation="scaleIn" delay={200} className="mt-14">
            <ImagePlaceholder className="aspect-[16/7] w-full" />
          </Reveal>
        </Container>
      </section>

      {/* ── A Forgotten Dream, Reclaimed ── */}
      <section className="py-section">
        <Container>
          <Reveal as="h2" animation="fadeUp" className="font-display text-3xl font-bold text-ink lg:text-4xl">
            A Forgotten Dream, Reclaimed
          </Reveal>
          <div className="mt-6 max-w-copy space-y-6">
            <Reveal as="p" animation="fadeUp" delay={100} className="text-base leading-8 text-muted">
              My path to design wasn&rsquo;t a straight line. In 2020, I graduated with a Master&rsquo;s in
              Innovative Dairy Chain Management from Van Hall Larenstein Hogeschool. I was working in the dairy
              industry, but a teenage dream of becoming a designer was quietly running in the background.
            </Reveal>
            <Reveal as="p" animation="fadeUp" delay={200} className="text-base leading-8 text-muted">
              Eventually, I decided to stop ignoring it. I taught myself the basics, decoded the industry, and
              dove headfirst into an Ironhack bootcamp. That leap sparked a whirlwind journey — from the
              logistics of food delivery to mentoring the next generation of designers, and finally, to building
              enterprise software.
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── The Journey ── */}
      <section className="py-section">
        <Container>
          <Reveal as="h2" animation="fadeUp" className="font-display text-3xl font-bold text-ink lg:text-4xl">
            The journey
          </Reveal>
          <div className="mt-10 space-y-10">
            {journeyItems.map((item, i) => (
              <div key={item.title} className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <Reveal animation="fadeLeft" delay={i * 80}>
                  <div className="flex gap-5">
                    <div className="mt-1.5 flex-shrink-0">
                      <span className={`block h-3 w-3 rounded-full ${item.color}`} />
                    </div>
                    <div>
                      <p className="font-display text-lg font-semibold text-ink">
                        {item.title}{' '}
                        <span className="text-base font-normal text-muted">({item.period})</span>
                      </p>
                      <p className="mt-2 text-sm leading-7 text-muted">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal animation="fadeRight" delay={i * 80 + 100}>
                  <ImagePlaceholder className="aspect-[4/3] w-full bg-ink/80" />
                </Reveal>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="py-section">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <Reveal as="p" animation="fadeUp" className="font-display text-xl font-medium text-ink">
              See the same vision ?
            </Reveal>
            <Reveal animation="fadeUp" delay={120}>
              <Button to="/contact" variant="primary">Let&rsquo;s Talk</Button>
            </Reveal>
          </div>
        </Container>
      </section>

    </div>
  );
}

export default AboutStorySection;
