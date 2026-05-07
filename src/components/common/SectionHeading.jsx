function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-copy ${alignment}`}>
      {eyebrow ? (
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-muted" style={{ letterSpacing: '0.22em' }}>{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight text-ink sm:text-4xl" style={{ letterSpacing: '0.08em' }}>{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-muted">{description}</p> : null}
    </div>
  );
}

export default SectionHeading;
