import Container from '../common/Container';

/* Sparkle / star icon */
function Sparkle({ className = '' }) {
  return (
    <svg className={className} fill="none" height="28" viewBox="0 0 28 28" width="28" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 0L15.8 12.2L28 14L15.8 15.8L14 28L12.2 15.8L0 14L12.2 12.2L14 0Z" fill="#4d9fac" />
    </svg>
  );
}

/* Retro computer illustration — replace with actual SVG asset when available */
function RetroComputerIllustration() {
  return (
    <div className="relative flex flex-col items-center">
      {/* Monitor body */}
      <div
        className="relative rounded-[12px] border-4 border-[#3a4f40]"
        style={{ width: 300, height: 248, background: '#b8b09a' }}
      >
        {/* Screen bezel */}
        <div
          className="absolute inset-3 rounded-[6px] border-2 border-[#2d3d2f] overflow-hidden"
          style={{ background: '#c8d4b0' }}
        >
          {/* Sky gradient */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, #7db8cc 0%, #a8d0d8 50%, #c4d4b0 100%)' }}
          />
          {/* Wave layers */}
          <svg className="absolute bottom-0 left-0 right-0 w-full" height="90" viewBox="0 0 300 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 45 Q37.5 12 75 45 Q112.5 78 150 45 Q187.5 12 225 45 Q262.5 78 300 45 L300 90 L0 90 Z" fill="#3b8cb0" />
            <path d="M0 58 Q37.5 28 75 58 Q112.5 88 150 58 Q187.5 28 225 58 Q262.5 88 300 58 L300 90 L0 90 Z" fill="#2a6d8a" />
          </svg>
          {/* Mini surfing computer */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
            <div
              className="border-2 border-[#2d3d2f] rounded-[3px] flex items-center justify-center"
              style={{ width: 44, height: 36, background: '#9aaa82' }}
            >
              <div className="w-7 h-5 bg-[#6a8a70] border border-[#4a6a50] rounded-[2px]" />
            </div>
            <div
              className="mx-auto border-t border-[#2d3d2f]"
              style={{ width: 52, height: 7, background: '#8a9872', borderRadius: '0 0 3px 3px' }}
            />
            {/* Surfboard */}
            <div
              className="mx-auto mt-1 rounded-full"
              style={{ width: 60, height: 8, background: '#c94b2b' }}
            />
          </div>
        </div>
        {/* Floppy drives */}
        <div className="absolute bottom-4 left-5 flex gap-2">
          <div className="w-5 h-2 rounded-[1px] bg-[#2d3d2f]" />
          <div className="w-5 h-2 rounded-[1px] bg-[#2d3d2f]" />
        </div>
        {/* Power LED */}
        <div className="absolute bottom-4 right-5 w-2 h-2 rounded-full bg-[#c94b2b]" />
        {/* Speaker dots */}
        <div className="absolute bottom-3 right-10 grid grid-cols-3 gap-[2px]">
          {Array.from({ length: 9 }).map((_, i) => (
            <div className="w-[3px] h-[3px] rounded-full bg-[#2d3d2f] opacity-50" key={i} />
          ))}
        </div>
      </div>
      {/* Neck */}
      <div className="mx-auto" style={{ width: 64, height: 18, background: '#3a4f40', borderRadius: '0 0 5px 5px' }} />
      {/* Base */}
      <div style={{ width: 100, height: 8, background: '#2d3d2f', borderRadius: 4 }} />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="bg-canvas overflow-hidden">
      {/* Main hero area */}
      <div className="border-b border-border">
        <Container>
          <div className="relative grid min-h-[520px] grid-cols-1 items-center gap-10 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
            {/* Left — retro computer illustration */}
            <div className="relative flex justify-center lg:justify-start">
              <Sparkle className="absolute left-0 top-4 h-7 w-7" />
              <Sparkle className="absolute bottom-12 left-6 h-4 w-4 opacity-60" />
              <RetroComputerIllustration />
              {/* Mouse cursor badge — bottom right */}
              <div className="absolute -bottom-2 right-4 lg:right-8">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#4d6953]"
                  style={{ background: '#c8d4b0' }}
                >
                  <svg fill="none" height="26" viewBox="0 0 26 34" width="26" xmlns="http://www.w3.org/2000/svg">
                    <rect fill="#4d6953" height="20" rx="7" width="14" x="6" y="2" />
                    <rect fill="#c94b2b" height="9" rx="3.5" width="7" x="6" y="2" />
                    <line stroke="#c8d4b0" strokeWidth="1.5" x1="13" x2="13" y1="2" y2="9" />
                    <line stroke="#4d6953" strokeWidth="1.5" x1="6" x2="14" y1="24" y2="30" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right — heading + CTA */}
            <div className="flex flex-col gap-8">
              <div>
                <p
                  className="font-bold text-ink"
                  style={{ fontSize: 'clamp(1.35rem, 2.5vw, 2rem)', letterSpacing: '0.16em' }}
                >
                  Hello, I am Izzati
                </p>
                <h1
                  className="mt-2 font-display font-bold uppercase leading-[1.05] text-ink"
                  style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', letterSpacing: '0.16em' }}
                >
                  A Product Designer
                </h1>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  className="inline-flex items-center justify-center rounded-[8px] px-10 py-5 font-bold uppercase text-white transition-opacity hover:opacity-85 active:opacity-70"
                  href="#contact"
                  style={{ background: '#4d6953', letterSpacing: '0.1em', fontSize: '0.875rem' }}
                >
                  Hire Me
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-[8px] border-2 px-8 py-5 font-bold uppercase transition-all hover:bg-[#324d44] hover:text-white active:bg-[#2a4038]"
                  href="/about"
                  style={{ borderColor: '#324d44', color: '#324d44', letterSpacing: '0.1em', fontSize: '0.875rem' }}
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Skill / tool strip */}
      <div className="border-b border-border py-5">
        <Container>
          <div className="flex flex-wrap items-center gap-3">
            {['Figma', 'UX Research', 'Prototyping', 'Design Systems', 'Mobile UX', 'SaaS Design', 'Data Viz'].map((skill) => (
              <div
                className="flex flex-1 items-center justify-center rounded-[6px] py-4 text-xs font-bold uppercase tracking-widest text-muted"
                key={skill}
                style={{ minWidth: 110, background: '#ddd5b2', border: '1.5px solid #ccc4a4' }}
              >
                {skill}
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}

export default HeroSection;

