import { useState } from 'react';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';
import { navLinks } from '../data';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-6 z-50 px-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/80 px-5 py-4 shadow-2xl shadow-slate-950/40 backdrop-blur-2xl transition">
        <a href="#home" className="text-lg font-semibold tracking-tight text-white">
          Nisha Yadav
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-cyan-300">
              {link.title}
            </a>
          ))}
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-slate-100 transition hover:border-cyan-300 hover:text-cyan-300"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </nav>
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-slate-100 transition hover:border-cyan-300 hover:text-cyan-300 md:hidden"
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {mobileOpen && (
        <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-slate-950/90 p-5 shadow-2xl shadow-slate-950/40 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-base text-slate-200 transition hover:text-cyan-300" onClick={() => setMobileOpen(false)}>
                {link.title}
              </a>
            ))}
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
