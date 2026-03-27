function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-copy ${alignment}`}>
      {eyebrow ? (
        <p className="text-sm uppercase tracking-[0.24em] text-muted">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-muted">{description}</p> : null}
    </div>
  );
}

export default SectionHeading;
