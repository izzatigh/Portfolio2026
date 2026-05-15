import FeaturedCaseStudies from '../components/sections/FeaturedCaseStudies';
import GetToKnowSection from '../components/sections/GetToKnowSection';
import HeroSection from '../components/sections/HeroSection';
import { caseStudies } from '../data/caseStudies';

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCaseStudies caseStudies={caseStudies} />
      <GetToKnowSection />
    </>
  );
}

export default HomePage;
