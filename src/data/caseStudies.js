export const caseStudies = [
  {
    slug: 'shopflow-mobile',
    title: 'ShopFlow Mobile',
    category: 'E-Commerce · Mobile App',
    year: '2025',
    role: 'Lead UI/UX Designer',
    timeline: '10 weeks',
    summary:
      'Redesigned the mobile shopping experience for an e-commerce platform, improving conversion rates through streamlined checkout and personalized product discovery.',
    challenge:
      'Cart abandonment was high on mobile. Users struggled with a cluttered product browsing experience and a multi-step checkout that felt slow and overwhelming on smaller screens.',
    approach:
      'I led the redesign end-to-end — conducted user interviews, mapped pain points in the funnel, simplified navigation to two taps from browse to buy, and introduced a single-page checkout with smart defaults.',
    impact:
      'Mobile checkout completion improved by 28%. User testing showed a significant reduction in task completion time and higher satisfaction scores for the product discovery flow.',
    tags: ['Mobile UX', 'E-Commerce', 'Checkout Optimization'],
  },
  {
    slug: 'saaspanel-dashboard',
    title: 'SaaSPanel Dashboard',
    category: 'SaaS · Web App',
    year: '2025',
    role: 'UI/UX Designer',
    timeline: '12 weeks',
    summary:
      'Designed a data-rich analytics dashboard for a B2B SaaS platform, balancing information density with clarity for non-technical users.',
    challenge:
      'Stakeholders needed actionable metrics at a glance, but the existing dashboard buried insights under layers of filters and complex tables that confused new users.',
    approach:
      'I defined key user personas, prioritized the top 5 metrics per role, introduced progressive disclosure patterns, and built a component system that scaled across multiple dashboard views.',
    impact:
      'User onboarding time dropped by 40%. Stakeholders praised the clarity of the new information hierarchy during review sessions, and support tickets for “where do I find X” decreased significantly.',
    tags: ['SaaS Design', 'Dashboard UX', 'Design Systems'],
  },
  {
    slug: 'cartly-rebranding',
    title: 'Cartly App Rebrand',
    category: 'E-Commerce · Mobile App',
    year: '2024',
    role: 'UI/UX Designer',
    timeline: '8 weeks',
    summary:
      'Led the visual and interaction redesign of a grocery delivery app, aligning the mobile experience with a new brand identity while preserving usability.',
    challenge:
      'The app’s visual identity felt dated and inconsistent across screens. Repeat users were loyal but new user retention was low — first impressions weren’t converting.',
    approach:
      'I established a refreshed design language with a new color system and typography, redesigned the home and category screens for faster scanning, and introduced micro-interactions that made the experience feel polished.',
    impact:
      'New user 7-day retention improved by 18%. App store ratings increased after the redesign launch, with users frequently citing the “cleaner, easier” experience in reviews.',
    tags: ['Mobile Design', 'Brand Refresh', 'Retention'],
  },
];

export function getCaseStudyBySlug(slug) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
