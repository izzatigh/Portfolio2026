import { Link } from 'react-router-dom';

const variants = {
  primary:
    'btn-animated-border btn-animated-primary font-semibold hover:shadow-lg',
  secondary:
    'btn-animated-border text-ink hover:text-accent',
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
