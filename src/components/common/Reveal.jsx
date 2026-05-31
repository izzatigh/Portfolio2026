import { useEffect, useRef, useState } from 'react';

// Map each animation name to its hidden/visible transform
const TRANSFORMS = {
  fadeUp:    { hidden: 'translateY(28px)',  visible: 'translateY(0)' },
  fadeLeft:  { hidden: 'translateX(-36px)', visible: 'translateX(0)' },
  fadeRight: { hidden: 'translateX(36px)',  visible: 'translateX(0)' },
  scaleIn:   { hidden: 'scale(0.96)',       visible: 'scale(1)' },
};

// Keeps watching — toggles inView on every crossing so scroll-up resets the element
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

/**
 * Reveal — wraps any element with a bidirectional scroll reveal.
 *   animation : 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scaleIn'
 *   delay     : enter delay in ms (exit is always instant so re-entry feels fresh)
 *   as        : HTML tag or component to render (default 'div')
 */
function Reveal({ as: Tag = 'div', animation = 'fadeUp', delay = 0, className = '', children }) {
  const [ref, inView] = useInView();
  const { hidden, visible } = TRANSFORMS[animation] ?? TRANSFORMS.fadeUp;

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? visible : hidden,
        transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: inView ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
