import { createContext, useContext, useEffect, useState } from 'react';

/**
 * VIBES — the four design themes.
 * `bg` and `accent` are hex values used only for the swatch preview UI.
 * All actual styling is driven by CSS custom properties in tokens.css.
 */
export const VIBES = [
  {
    key: 'woodland-harvest',
    name: 'Woodland Harvest',
    description: 'Grounded & organic. Warm wheat earth, forest-green CTA, burnt-rust accent.',
    bg: '#DCC9A9',
    accent: '#4e6851',
  },
  {
    key: 'terracotta-dusk',
    name: 'Terracotta Dusk',
    description: 'Mediterranean warmth. Dusty blush, slate-blue CTA, burnt-orange energy.',
    bg: '#e8d8c9',
    accent: '#4b607f',
  },
  {
    key: 'coastal-sands',
    name: 'Coastal Sands',
    description: 'Breezy & fresh. Sun-bleached linen, teal-water CTA, warm coral accent.',
    bg: '#f2e8d1',
    accent: '#3da0ab',
  },
  {
    key: 'midnight-gold',
    name: 'Midnight Gold',
    description: 'Dark luxe & dramatic. Obsidian canvas, warm-gold CTA, crimson tension.',
    bg: '#1A1A1A',
    accent: '#FAE3AD',
  },
];

const DEFAULT_VIBE = 'woodland-harvest';
const STORAGE_KEY = 'portfolio-vibe';

const VibeContext = createContext(null);

export function VibeProvider({ children }) {
  const [currentVibe, setCurrentVibe] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return VIBES.some((v) => v.key === stored) ? stored : DEFAULT_VIBE;
  });

  // Keep the data-vibe attribute on <html> in sync with state
  useEffect(() => {
    document.documentElement.dataset.vibe = currentVibe;
  }, [currentVibe]);

  function setVibe(key) {
    setCurrentVibe(key);
    localStorage.setItem(STORAGE_KEY, key);
  }

  return (
    <VibeContext.Provider value={{ currentVibe, setVibe, vibes: VIBES }}>
      {children}
    </VibeContext.Provider>
  );
}

export function useVibe() {
  const ctx = useContext(VibeContext);
  if (!ctx) throw new Error('useVibe must be used inside <VibeProvider>');
  return ctx;
}
