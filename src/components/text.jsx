export function Text({ children, className = '' }) {
  return <p className={`text-sm leading-6 text-slate-600 ${className}`}>{children}</p>;
}

export function TextLink({ children, className = '', ...props }) {
  return (
    <a className={`font-semibold text-sky-600 transition hover:text-sky-700 ${className}`} {...props}>
      {children}
    </a>
  );
}

export function Strong({ children, className = '' }) {
  return <strong className={`font-semibold text-slate-950 ${className}`}>{children}</strong>;
}
