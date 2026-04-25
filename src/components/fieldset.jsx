export function Field({ children }) {
  return <div className="grid gap-3">{children}</div>;
}

export function Label({ htmlFor, children, className = '' }) {
  return (
    <label htmlFor={htmlFor} className={`text-sm font-medium text-slate-950 ${className}`}>
      {children}
    </label>
  );
}
