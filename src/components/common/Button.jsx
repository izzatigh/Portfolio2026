import { Link } from 'react-router-dom';

const variants = {
  primary:
    'bg-[#4d6953] text-white font-semibold hover:opacity-85',
  secondary:
    'border-2 border-[#324d44] text-[#324d44] hover:bg-[#324d44] hover:text-white',
  ghost: 'text-ink hover:text-[#4d6953]',
};

function Button({ to, href, variant = 'primary', className = '', children }) {
  const classes = `inline-flex items-center justify-center rounded-[8px] px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-200 ${variants[variant]} ${className}`;

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
