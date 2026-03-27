import { caseStudies } from './caseStudies';

export const primaryNavigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
];

export const caseStudyNavigation = caseStudies.map((caseStudy) => ({
  label: caseStudy.title,
  to: `/case-studies/${caseStudy.slug}`,
}));
