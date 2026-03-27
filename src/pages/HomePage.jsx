import FeaturedCaseStudies from '../components/sections/FeaturedCaseStudies';
import HeroSection from '../components/sections/HeroSection';
import { caseStudies } from '../data/caseStudies';

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCaseStudies caseStudies={caseStudies} />
    </>
  );
}

export default HomePage;
