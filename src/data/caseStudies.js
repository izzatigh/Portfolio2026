export const caseStudies = [
  {
    slug: 'northstar-banking',
    title: 'Northstar Banking',
    category: 'Product Design',
    year: '2026',
    role: 'Lead Product Designer',
    timeline: '12 weeks',
    summary:
      'A mobile-first redesign for onboarding and savings activation, focused on clarity, trust, and conversion.',
    challenge:
      'The bank had strong acquisition but weak first-week activation because onboarding felt dense and generic.',
    approach:
      'I simplified the information hierarchy, introduced behavioral prompts, and aligned product copy with confidence-building UI states.',
    impact:
      'Prototype testing suggested a 22% improvement in task completion and a faster path to first deposit.',
    tags: ['UX Strategy', 'Visual Systems', 'Prototype Testing'],
  },
  {
    slug: 'frameflow-studio',
    title: 'Frameflow Studio',
    category: 'Brand + Web',
    year: '2026',
    role: 'Design Systems Designer',
    timeline: '8 weeks',
    summary:
      'A modular marketing site for a motion studio, built to scale quickly across campaigns and portfolio launches.',
    challenge:
      'The studio needed a distinct visual identity without sacrificing maintainability for future page generation.',
    approach:
      'I built a flexible component library, defined semantic tokens, and paired editorial layouts with reusable CMS-ready sections.',
    impact:
      'The resulting system reduced one-off page design overhead and made campaign launches materially faster.',
    tags: ['Design System', 'Art Direction', 'Marketing UX'],
  },
  {
    slug: 'pulseos-health',
    title: 'PulseOS Health',
    category: 'Service Design',
    year: '2026',
    role: 'Senior UX Designer',
    timeline: '10 weeks',
    summary:
      'A care coordination dashboard concept that translates clinical complexity into calm, usable workflows.',
    challenge:
      'Operational dashboards were overloaded with urgent information, making routine follow-up harder than it should be.',
    approach:
      'I grouped related signals, introduced triage logic, and designed a layout system that prioritized action without alarm fatigue.',
    impact:
      'Stakeholder review sessions reported clearer prioritization and stronger confidence in the dashboard direction.',
    tags: ['Dashboard UX', 'Information Architecture', 'Workflow Design'],
  },
];

export function getCaseStudyBySlug(slug) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
