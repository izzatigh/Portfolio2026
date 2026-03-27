import { Route, Routes } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import AboutPage from './pages/AboutPage';
import CaseStudyPage from './pages/CaseStudyPage';
import HomePage from './pages/HomePage';
import { caseStudies } from './data/caseStudies';

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {caseStudies.map((caseStudy) => (
          <Route
            key={caseStudy.slug}
            path={`/case-studies/${caseStudy.slug}`}
            element={<CaseStudyPage slug={caseStudy.slug} />}
          />
        ))}
        <Route
          path="*"
          element={
            <main className="mx-auto flex min-h-[60vh] max-w-copy items-center px-5 py-section text-ink">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-muted">404</p>
                <h1 className="mt-3 font-display text-4xl">Page not found</h1>
              </div>
            </main>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;