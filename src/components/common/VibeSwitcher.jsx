import { useRef } from 'react';
import { useVibe } from '../../context/VibeContext';

/* ── Piñata confetti burst ───────────────────────────────────── */
const CONFETTI_COLORS = [
  '#4e6851', '#B8312D',   // Woodland Harvest
  '#4b607f', '#f3701e',   // Terracotta Dusk
  '#3da0ab', '#dd664e',   // Coastal Sands
  '#FAE3AD', '#D02329',   // Midnight Gold
];

function spawnConfetti(originX, originY) {
  const count = 60;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    const angle = Math.random() * Math.PI * 2;
    const speed = 5 + Math.random() * 10;
    let vx = Math.cos(angle) * speed;
    let vy = Math.sin(angle) * speed - (4 + Math.random() * 6); // upward bias
    const size = 5 + Math.random() * 9;
    const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
    const isCircle = Math.random() > 0.4;
    const rotationSpeed = (Math.random() - 0.5) * 18;
    let rotation = Math.random() * 360;
    let x = originX;
    let y = originY;
    let opacity = 1;
    let frame = 0;
    const maxFrames = 70 + Math.floor(Math.random() * 30);

    el.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: ${size}px;
      height: ${isCircle ? size : size * 0.5}px;
      background: ${color};
      border-radius: ${isCircle ? '50%' : '2px'};
      pointer-events: none;
      z-index: 9999;
      will-change: transform, opacity;
    `;
    document.body.appendChild(el);

    const delay = Math.random() * 80;

    setTimeout(() => {
      function tick() {
        frame++;
        vy += 0.38;    // gravity
        vx *= 0.985;   // air resistance
        x += vx;
        y += vy;
        rotation += rotationSpeed;
        opacity = Math.max(0, 1 - frame / maxFrames);

        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        el.style.transform = `rotate(${rotation}deg)`;
        el.style.opacity = opacity;

        if (frame < maxFrames) {
          requestAnimationFrame(tick);
        } else {
          el.remove();
        }
      }
      requestAnimationFrame(tick);
    }, delay);
  }
}

/* ── Magic wand icon ─────────────────────────────────────────── */
function MagicWandIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M3 21L13 11" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M13 3L14.5 6.5L18 8L14.5 9.5L13 13L11.5 9.5L8 8L11.5 6.5L13 3Z" fill="white" />
      <circle cx="19" cy="4" r="1" fill="white" />
      <circle cx="20" cy="9" r="0.75" fill="white" />
      <circle cx="4" cy="5" r="0.75" fill="white" />
    </svg>
  );
}

/* ── VibeSwitcher ────────────────────────────────────────────── */
/* Gradient spans all 4 vibe accent colors — always previewing  */
/* all themes. Click cycles to a random different vibe.         */
const BUTTON_GRADIENT =
  'linear-gradient(90deg, #3da0ab 0%, #8e463e 25%, #D02329 50%, #043253 75%, #e1ccaf 100%)';

function VibeSwitcher() {
  const { currentVibe, setVibe, vibes } = useVibe();
  const btnRef = useRef(null);

  function handleClick() {
    // Pick a random vibe that is NOT the current one
    const others = vibes.filter((v) => v.key !== currentVibe);
    const next = others[Math.floor(Math.random() * others.length)];

    // Trigger confetti from button centre
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      spawnConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
    }

    setVibe(next.key);
  }

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      aria-label="Surprise me with a new color"
      style={{
        backgroundImage: BUTTON_GRADIENT,
        backgroundSize: '200% 100%',
        letterSpacing: '0.1em',
      }}
      className="inline-flex items-center gap-2 rounded-[8px] px-4 py-2 text-[11px] font-bold uppercase text-white transition-opacity hover:opacity-90 active:scale-95"
    >
      <MagicWandIcon />
      Change color
    </button>
  );
}

export default VibeSwitcher;


