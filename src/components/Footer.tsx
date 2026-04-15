export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/90 py-8 text-slate-600 shadow-2xl shadow-slate-900/10 dark:border-white/10 dark:bg-slate-950/90 dark:text-slate-400 dark:shadow-slate-950/30">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-6 lg:flex-row lg:px-8">
        <p className="text-sm text-slate-600 dark:text-slate-400">© 2026 Nisha Yadav. Premium SaaS portfolio experience.</p>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a target="_blank" href="https://www.linkedin.com/in/nishayadav1703" className="transition text-slate-700 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-300">LinkedIn</a>
          <a target="_blank" href="https://github.com/lazyraven" className="transition text-slate-700 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-300">GitHub</a>
          <a target="_blank" href="https://lifecodewithnisha.in/" className="transition text-slate-700 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-300">Portfolio</a>
        </div>
      </div>
    </footer>
  );
}
