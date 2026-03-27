import { Link } from 'react-router-dom';

const variants = {
  primary: 'bg-ink text-canvas hover:bg-accent',
  secondary: 'border border-border bg-surface text-ink hover:border-accent hover:text-accent',
  ghost: 'text-ink hover:text-accent',
};

function Button({ to, href, variant = 'primary', className = '', children }) {
  const classes = `inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-colors ${variants[variant]} ${className}`;

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
