export function Input({ className = '', ...props }) {
  return (
    <input
      className={`h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-950 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100 ${className}`}
      {...props}
    />
  );
}
