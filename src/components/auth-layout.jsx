export function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 sm:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-md items-center justify-center">
        <div className="w-full rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
          {children}
        </div>
      </div>
    </div>
  );
}
