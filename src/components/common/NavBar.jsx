import { NavLink, useNavigate } from 'react-router-dom';
import Container from './Container';
import VibeSwitcher from './VibeSwitcher';
import { primaryNavigation } from '../../data/navigation';

function getNavClasses({ isActive }) {
  return [
    'font-bold uppercase tracking-widest text-xs transition-colors hover:text-accent',
    isActive ? 'text-accent' : 'text-ink',
  ].join(' ');
}

function NavBar() {
  const navigate = useNavigate();

  function handleNavClick(e, item) {
    if (item.to === '/#selected-works') {
      e.preventDefault();
      const el = document.getElementById('selected-works');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          document.getElementById('selected-works')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-canvas/95 backdrop-blur-sm">
      <Container className="flex items-center justify-between gap-6 py-4">
        <NavLink
          className="font-display text-lg font-bold uppercase tracking-widest text-ink hover:text-accent transition-colors"
          style={{ letterSpacing: '0.18em' }}
          to="/"
        >
          Izzati<span className="text-accent-alt">.</span>
        </NavLink>
        <nav className="flex flex-wrap items-center gap-6 text-xs">
          {primaryNavigation.map((item) => (
            <NavLink
              key={item.to}
              className={getNavClasses}
              style={{ letterSpacing: '0.14em' }}
              to={item.to}
              onClick={(e) => handleNavClick(e, item)}
            >
              {item.label}
            </NavLink>
          ))}
          <a
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-accent"
            href="https://www.linkedin.com/in/izzatigufrani"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <VibeSwitcher />
        </nav>
      </Container>
    </header>
  );
}

export default NavBar;

