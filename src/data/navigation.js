import { caseStudies } from './caseStudies';

export const primaryNavigation = [
  { label: 'Home', to: '/' },
  { label: 'Selected Works', to: '/#selected-works' },
  { label: 'About Me', to: '/about' },
];

export const caseStudyNavigation = caseStudies.map((caseStudy) => ({
  label: caseStudy.title,
  to: `/case-studies/${caseStudy.slug}`,
}));
