import { NavLink } from 'react-router-dom';
import Container from './Container';
import { caseStudyNavigation, primaryNavigation } from '../../data/navigation';

function getNavClasses({ isActive }) {
  return [
    'transition-colors hover:text-accent',
    isActive ? 'text-accent' : 'text-muted',
  ].join(' ');
}

function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-canvas/90 backdrop-blur">
      <Container className="flex items-center justify-between gap-6 py-4">
        <NavLink className="font-display text-xl tracking-wide text-ink" to="/">
          Izzati Portfolio
        </NavLink>
        <nav className="flex flex-wrap items-center gap-5 text-sm">
          {primaryNavigation.map((item) => (
            <NavLink key={item.to} className={getNavClasses} to={item.to}>
              {item.label}
            </NavLink>
          ))}
          <div className="hidden items-center gap-3 border-l border-border/70 pl-5 lg:flex">
            {caseStudyNavigation.map((item) => (
              <NavLink key={item.to} className={getNavClasses} to={item.to}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default NavBar;
