export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90 py-8 text-slate-400 shadow-2xl shadow-slate-950/30">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-6 lg:flex-row lg:px-8">
        <p className="text-sm text-slate-400">© 2026 Nisha Yadav. Premium SaaS portfolio experience.</p>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a href="#" className="transition hover:text-cyan-300">LinkedIn</a>
          <a href="#" className="transition hover:text-cyan-300">GitHub</a>
          <a href="#" className="transition hover:text-cyan-300">Portfolio</a>
        </div>
      </div>
    </footer>
  );
}
