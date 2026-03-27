import { Link, Outlet } from 'react-router-dom';
import NavBar from '../components/common/NavBar';
import Container from '../components/common/Container';
import { caseStudyNavigation } from '../data/navigation';

function RootLayout() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <NavBar />
      <Outlet />
      <footer className="border-t border-border/30 py-8">
        <Container className="flex flex-col gap-4 text-sm text-muted lg:flex-row lg:items-center lg:justify-between">
          <p>© 2026 Izzati Gufrani · UI/UX Designer</p>
          <div className="flex flex-wrap gap-4">
            {caseStudyNavigation.map((item) => (
              <Link className="transition-colors hover:text-accent" to={item.to} key={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default RootLayout;
