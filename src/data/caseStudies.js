import jetMockUpCover from '../Images/JET mock up.png';

export const caseStudies = [
  {
    slug: 'jet-group-ordering',
    pageBg: '#F9F9F9',
    title: 'How Group Ordering Feature Simplifies Decision-Making',
    category: 'Native App · E-Commerce',
    year: '2023',
    role: 'Lead UI/UX Designer',
    timeline: '10 weeks',
    summary:
      'Designed a native app group ordering experience that helps people decide faster, stay aligned on preferences, and complete shared purchases with less back-and-forth.',
    challenge:
      'Group orders often broke down in chat threads and screenshots. One person had to collect preferences manually, resolve duplicate picks, and keep everyone updated, which slowed decisions and introduced avoidable mistakes.',
    approach:
      'I mapped the full decision-making journey from invite to checkout, identified the moments where confusion built up, and designed a shared cart flow with item notes, lightweight voting, and clear status markers so every participant could see what was selected and what still needed a decision.',
    impact:
      'Usability sessions showed faster consensus during shared orders and less confusion about who chose what. The feature turned group purchasing into a clearer, more confident experience instead of a manual coordination task.',
    tags: ['Native App', 'Mobile UX', 'E-Commerce', 'Group Ordering'],
    coverImage: jetMockUpCover,
    coverImageAlt: 'JET group ordering app mockup',
    coverImageWidth: 792,
    coverImageHeight: 500,
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
