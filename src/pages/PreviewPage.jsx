import { useSearchParams } from 'react-router-dom';
import Container from '../components/common/Container';
import AboutStorySection from '../components/sections/AboutStorySection';
import CaseStudyDetail from '../components/sections/CaseStudyDetail';
import FeaturedCaseStudies from '../components/sections/FeaturedCaseStudies';
import HeroSection from '../components/sections/HeroSection';
import { caseStudies, getCaseStudyBySlug } from '../data/caseStudies';

const previewSections = [
  {
    id: 'hero',
    label: 'Hero Section',
    description: 'Landing page hero with CTA buttons and intro copy.',
  },
  {
    id: 'featured-case-studies',
    label: 'Featured Case Studies',
    description: 'Homepage project cards using the real case study dataset.',
  },
  {
    id: 'about-story',
    label: 'About Story Section',
    description: 'Standalone about section with story and strengths.',
  },
  {
    id: 'case-study-detail',
    label: 'Case Study Detail',
    description: 'Full case study detail layout with switchable mock content.',
  },
];

function PreviewPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeSection = searchParams.get('section') ?? previewSections[0].id;
  const activeCaseStudySlug = searchParams.get('caseStudy') ?? caseStudies[0].slug;
  const activeCaseStudy = getCaseStudyBySlug(activeCaseStudySlug) ?? caseStudies[0];

  function updateSection(sectionId) {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set('section', sectionId);
    setSearchParams(nextParams, { replace: true });
  }

  function updateCaseStudy(caseStudySlug) {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set('caseStudy', caseStudySlug);
    setSearchParams(nextParams, { replace: true });
  }

  function renderPreview() {
    switch (activeSection) {
      case 'featured-case-studies':
        return <FeaturedCaseStudies caseStudies={caseStudies} />;
      case 'about-story':
        return <AboutStorySection />;
      case 'case-study-detail':
        return <CaseStudyDetail caseStudy={activeCaseStudy} />;
      case 'hero':
      default:
        return <HeroSection />;
    }
  }

  return (
    <main className="py-10 bg-grid">
      <Container>
        <div className="grid gap-6 xl:grid-cols-[20rem_minmax(0,1fr)]">
          <aside className="card-futuristic h-fit rounded-card border border-border bg-surface p-6 shadow-card xl:sticky xl:top-24">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">Component Preview</p>
            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink">Live section sandbox</h1>
            <p className="mt-4 text-sm leading-7 text-muted">
              Keep this page open at
              {' '}
              <span className="font-medium text-ink">/preview</span>
              {' '}
              while editing. Vite will refresh this canvas automatically when you save.
            </p>

            <div className="mt-8 space-y-3">
              {previewSections.map((section) => {
                const isActive = section.id === activeSection;

                return (
                  <button
                    type="button"
                    key={section.id}
                    onClick={() => updateSection(section.id)}
                    className={[
                      'w-full rounded-card border px-4 py-4 text-left transition-all duration-300',
                      isActive
                        ? 'border-accent bg-accent/10 shadow-[0_0_0_1px_rgba(0,212,255,0.15)]'
                        : 'border-border bg-canvas/40 hover:border-accent/30 hover:bg-accent/5',
                    ].join(' ')}
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink">{section.label}</p>
                    <p className="mt-2 text-sm leading-6 text-muted">{section.description}</p>
                  </button>
                );
              })}
            </div>

            {activeSection === 'case-study-detail' && (
              <div className="mt-8 border-t border-border/40 pt-6">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent-alt">Case Study Data</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {caseStudies.map((caseStudy) => {
                    const isActive = caseStudy.slug === activeCaseStudy.slug;

                    return (
                      <button
                        type="button"
                        key={caseStudy.slug}
                        onClick={() => updateCaseStudy(caseStudy.slug)}
                        className={[
                          'rounded-[4px] border px-3 py-2 text-xs uppercase tracking-[0.14em] transition-colors',
                          isActive
                            ? 'border-accent-alt bg-accent-alt/10 text-ink'
                            : 'border-border text-muted hover:border-accent-alt/40 hover:text-ink',
                        ].join(' ')}
                      >
                        {caseStudy.title}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </aside>

          <section className="overflow-hidden rounded-card border border-border/70 bg-canvas shadow-card">
            <div className="border-b border-border/40 bg-surface/80 px-6 py-4 backdrop-blur">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">Preview Canvas</p>
              <p className="mt-2 text-sm text-muted">
                Active view:
                {' '}
                <span className="font-medium text-ink">
                  {previewSections.find((section) => section.id === activeSection)?.label}
                </span>
              </p>
            </div>
            <div className="min-h-[70vh] bg-canvas">{renderPreview()}</div>
          </section>
        </div>
      </Container>
    </main>
  );
}

export default PreviewPage;