import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window === 'undefined') {
      return true;
    }

    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme === 'dark') return true;
    if (savedTheme === 'light') return false;

    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    window.localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="app-shell relative min-h-screen overflow-hidden bg-slate-50 text-slate-950 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="animated-blob bg-indigo-500/20 top-8 left-6 h-72 w-72"></div>
          <div className="animated-blob bg-cyan-400/20 bottom-12 right-10 h-80 w-80"></div>
          <div className="animated-blob bg-fuchsia-500/20 top-20 right-1/4 h-64 w-64"></div>
        </div>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="mx-auto relative max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }} className="space-y-28">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </motion.div>
        </main>
        <Footer />
    </div>
  );
}

export default App;
