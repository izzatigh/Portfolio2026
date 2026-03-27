import { useParams } from 'react-router-dom';
import CaseStudyDetail from '../components/sections/CaseStudyDetail';
import { getCaseStudyBySlug } from '../data/caseStudies';

function CaseStudyPage({ slug: routeSlug }) {
  const { slug } = useParams();
  const caseStudy = getCaseStudyBySlug(routeSlug ?? slug);

  if (!caseStudy) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-copy items-center px-5 py-section text-ink">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Missing case study</p>
          <h1 className="mt-3 font-display text-4xl font-bold">Case study not found</h1>
        </div>
      </main>
    );
  }

  return <CaseStudyDetail caseStudy={caseStudy} />;
}

export default CaseStudyPage;
