export function Checkbox({ className = '', ...props }) {
  return (
    <input
      type="checkbox"
      className={`h-4 w-4 rounded border-slate-300 text-slate-950 focus:ring-slate-950 ${className}`}
      {...props}
    />
  );
}

export function CheckboxField({ className = '', children, ...props }) {
  return (
    <label className={`flex items-center gap-3 text-sm text-slate-700 ${className}`} {...props}>
      {children}
    </label>
  );
}
