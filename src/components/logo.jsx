export function Logo({ className = '' }) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div className="flex h-10 w-10 items-center justify-center rounded-3xl bg-slate-950 text-white">
        <span className="text-sm font-bold">I</span>
      </div>
      <span className="text-lg font-semibold tracking-tight text-slate-950">Incruiter</span>
    </div>
  );
}
