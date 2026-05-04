import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FiArrowLeft,
  FiArrowRight,
  FiBookOpen,
  FiChevronRight,
  FiCode,
  FiExternalLink,
  FiHome,
  FiLayers,
  FiTarget,
  FiZap,
} from 'react-icons/fi';
import {
  javascriptInterviewTopics,
  javascriptLearningLoop,
  javascriptNextSteps,
  javascriptRealWorldFocus,
  javascriptReferences,
  javascriptRoadmapSections,
} from '../data/javascriptRoadmap';

const accentMap: Record<string, string> = {
  amber: 'from-amber-300/80 via-orange-400/80 to-yellow-300/80',
  orange: 'from-orange-300/80 via-rose-400/80 to-amber-300/80',
  emerald: 'from-emerald-300/80 via-teal-400/80 to-lime-300/80',
  sky: 'from-sky-300/80 via-cyan-400/80 to-blue-300/80',
  violet: 'from-violet-300/80 via-fuchsia-400/80 to-indigo-300/80',
  pink: 'from-pink-300/80 via-rose-400/80 to-fuchsia-300/80',
  teal: 'from-teal-300/80 via-cyan-400/80 to-emerald-300/80',
  rose: 'from-rose-300/80 via-pink-400/80 to-red-300/80',
  blue: 'from-blue-300/80 via-sky-400/80 to-cyan-300/80',
  lime: 'from-lime-300/80 via-emerald-400/80 to-yellow-300/80',
};

export default function JavaScriptRoadmapPage() {
  return (
    <div className="app-shell roadmap-mesh relative min-h-screen overflow-hidden bg-slate-50 text-slate-950 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animated-blob bg-amber-400/20 top-10 left-6 h-72 w-72" />
        <div className="animated-blob bg-cyan-400/20 right-8 top-40 h-80 w-80" />
        <div className="animated-blob bg-fuchsia-500/15 bottom-0 left-1/3 h-72 w-72" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex items-center justify-between"
        >
          <Link
            to="/roadmaps"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-300"
          >
            <FiArrowLeft className="h-4 w-4" />
            Back to Roadmaps
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-300"
          >
            <FiHome className="h-4 w-4" />
            Home
          </Link>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="floating-panel relative overflow-hidden px-6 py-10 sm:px-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,0.14),transparent_26%),linear-gradient(135deg,rgba(15,23,42,0.02),transparent)] dark:bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.14),transparent_24%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,0.12),transparent_24%),linear-gradient(135deg,rgba(15,23,42,0.15),transparent)]" />
          <div className="relative">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/65 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-500 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-400">
              <FiBookOpen className="h-3.5 w-3.5" />
              Complete developer path
            </div>

            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <h1 className="font-serif text-5xl font-black leading-[0.92] tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
                  <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                    JavaScript
                  </span>
                  <span className="block">Roadmap</span>
                  <span className="mt-2 block text-2xl font-semibold tracking-[0.18em] text-slate-400 dark:text-slate-500 sm:text-3xl">
                    2026
                  </span>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
                  The original HTML roadmap is now rebuilt inside the portfolio with the same layered learning path, but tuned to your existing glass, motion, and dark-light theme system.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:w-[25rem]">
                {[
                  { label: 'Topics', value: '15+' },
                  { label: 'Priority', value: 'Interview' },
                  { label: 'Style', value: 'Real-world' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200/70 bg-white/75 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60"
                  >
                    <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Closures', 'Async/Await', 'Array Methods'].map((pill, index) => (
                <span
                  key={pill}
                  className={`rounded-full border px-4 py-2 text-sm font-medium ${
                    index === 0
                      ? 'border-amber-300/40 bg-amber-400/10 text-amber-700 dark:text-amber-300'
                      : index === 1
                        ? 'border-sky-300/40 bg-sky-400/10 text-sky-700 dark:text-sky-300'
                        : 'border-emerald-300/40 bg-emerald-400/10 text-emerald-700 dark:text-emerald-300'
                  }`}
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-8 grid gap-4 rounded-[1.75rem] border border-slate-200/70 bg-white/70 p-3 shadow-lg shadow-slate-900/5 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/55 md:grid-cols-5"
        >
          {javascriptLearningLoop.map((item) => (
            <div
              key={item.step}
              className="relative overflow-hidden rounded-[1.25rem] border border-slate-200/70 bg-white/80 p-5 dark:border-white/10 dark:bg-slate-950/50"
            >
              <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${item.accent}`} />
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">{item.step}</p>
              <h2 className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.description}</p>
            </div>
          ))}
        </motion.div>

        <div className="mt-10 space-y-10">
          {javascriptRoadmapSections.map((section, sectionIndex) => (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 + sectionIndex * 0.05 }}
              className="space-y-5"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400 dark:text-slate-500">
                    Section {section.id}
                  </p>
                  <h2 className="mt-2 flex items-center gap-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                    <span className={`h-3 w-3 rounded-full bg-gradient-to-r ${accentMap[section.accent]}`} />
                    {section.title}
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400">{section.caption}</p>
              </div>

              <div className="roadmap-grid">
                {section.cards.map((card) => (
                  <article
                    key={`${section.id}-${card.title}`}
                    className="roadmap-card group relative overflow-hidden rounded-[1.5rem] border border-slate-200/70 bg-white/82 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-slate-900/65"
                  >
                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accentMap[card.accent]}`} />
                    <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                      {card.label}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{card.title}</h3>
                    <ul className="mt-5 space-y-3">
                      {card.points.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                          <FiChevronRight className="mt-1 h-4 w-4 shrink-0 text-cyan-500 dark:text-cyan-300" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    {card.note && (
                      <div className="mt-5 rounded-2xl border border-white/50 bg-slate-100/70 p-4 dark:border-white/10 dark:bg-slate-950/55">
                        <p className="text-sm font-semibold text-amber-700 dark:text-amber-300">{card.note.title}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{card.note.body}</p>
                      </div>
                    )}
                  </article>
                ))}
              </div>

              {section.code && (
                <div className="roadmap-code overflow-x-auto rounded-[1.5rem] border border-slate-200/70 bg-slate-950/95 p-5 text-sm shadow-xl shadow-slate-900/15 dark:border-white/10">
                  <pre className="font-mono leading-7 text-slate-200">
                    <code>{section.code}</code>
                  </pre>
                </div>
              )}
            </motion.section>
          ))}
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="card-glass p-7"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-gradient-to-br from-amber-400/20 to-orange-400/20 p-3 text-amber-600 dark:text-amber-300">
                <FiTarget className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">Focus</p>
                <h2 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">Must-know interview topics</h2>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {javascriptInterviewTopics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-slate-200/80 bg-white/75 px-4 py-2 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-slate-950/55 dark:text-slate-200"
                >
                  {topic}
                </span>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4 }}
            className="card-glass p-7"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 p-3 text-emerald-600 dark:text-emerald-300">
                <FiZap className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">Real World</p>
                <h2 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">Most used in projects</h2>
              </div>
            </div>
            <ul className="mt-6 space-y-3">
              {javascriptRealWorldFocus.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  <FiArrowRight className="mt-1 h-4 w-4 shrink-0 text-cyan-500 dark:text-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.45 }}
          className="mt-10"
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-400/20 p-3 text-cyan-600 dark:text-cyan-300">
              <FiLayers className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">Next Step</p>
              <h2 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">Where to go after JavaScript</h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {javascriptNextSteps.map((item) => (
              <div key={item.title} className="card-glass p-6">
                <div className={`inline-flex rounded-2xl bg-gradient-to-r ${item.accent} p-3 text-white`}>
                  <FiCode className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.5 }}
          className="mt-10 pb-10"
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-2xl bg-gradient-to-br from-yellow-400/20 to-cyan-400/20 p-3 text-yellow-600 dark:text-yellow-300">
              <FiExternalLink className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">References</p>
              <h2 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">Best places to keep learning</h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {javascriptReferences.map((ref) => (
              <a
                key={ref.title}
                href={ref.href}
                target="_blank"
                rel="noreferrer"
                className="card-glass flex items-center justify-between gap-4 p-5 transition hover:-translate-y-1"
              >
                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">{ref.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{ref.subtitle}</p>
                </div>
                <FiExternalLink className="h-5 w-5 shrink-0 text-cyan-500 dark:text-cyan-300" />
              </a>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
