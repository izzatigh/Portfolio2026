import { Link } from 'react-router-dom';

const variants = {
  primary:
    'bg-accent text-canvas font-semibold hover:bg-accent/80 hover:shadow-[0_0_20px_rgba(0,212,255,0.35)]',
  secondary:
    'border border-accent bg-canvas text-ink hover:bg-accent/10 hover:text-accent',
  ghost: 'text-ink hover:text-accent',
};

function Button({ to, href, variant = 'primary', className = '', children }) {
  const classes = `inline-flex items-center justify-center rounded-[4px] px-6 py-3 text-sm font-medium transition-all duration-300 ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link className={classes} to={to}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }

  return <button className={classes} type="button">{children}</button>;
}

export default Button;
