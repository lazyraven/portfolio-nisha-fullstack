import { FiArrowRight } from 'react-icons/fi';

const typingPhrases = ['React + Node.js', 'MERN applications', 'SaaS product experiences'];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/90 px-6 py-16 shadow-2xl shadow-slate-900/10 backdrop-blur-2xl transition duration-500 dark:border-white/10 dark:bg-slate-950/80 dark:shadow-slate-950/40 sm:px-10 sm:py-24">
      <div className="absolute left-0 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute right-0 top-16 h-64 w-64 translate-x-1/3 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute left-20 bottom-10 h-60 w-60 -translate-y-1/2 rounded-full bg-pink-500/20 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-slate-200/70 bg-slate-100/90 px-4 py-2 text-xs uppercase tracking-[0.32em] text-cyan-700 shadow-[0_0_24px_rgba(56,189,248,0.08)] dark:border-white/10 dark:bg-slate-900/70 dark:text-cyan-300 dark:shadow-[0_0_24px_rgba(56,189,248,0.12)]">
              Full Stack Developer
            </span>
            <div className="mt-6 space-y-4">
              <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl dark:text-white">
                Nisha Yadav
              </h1>
              <p className="max-w-xl text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 sm:text-4xl dark:from-cyan-300 dark:via-purple-300 dark:to-pink-300">
                Building modern web products with premium polish.
              </p>
            </div>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">
              Crafting scalable, performant SaaS applications with strong UX, clean architecture, and fast delivery.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary inline-flex items-center gap-2">
                View Projects <FiArrowRight />
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </div>
            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-slate-200/70 bg-slate-100/90 px-5 py-3 text-sm text-slate-700 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300">
              <span className="text-cyan-300">Typing:</span>
              <span className="hero-typing">{typingPhrases[0]}</span>
              {/* Building premium SaaS experiences for modern teams */}
            </div>
          </div>
          <div className="space-y-6">
            <div className="card-glass p-7">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Design</p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-950 dark:text-white">Glassmorphism with motion-ready polish.</h2>
              <p className="mt-3 text-slate-600 dark:text-slate-400">A modern portfolio aesthetic featuring soft gradients, blurred depth, and interactive cards.</p>
            </div>
            <div className="card-glass p-7">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Scale</p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-950 dark:text-white">Reliable frontend and backend systems.</h2>
              <p className="mt-3 text-slate-600 dark:text-slate-400">Built for performance with React, Node.js, and scalable data flows.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
