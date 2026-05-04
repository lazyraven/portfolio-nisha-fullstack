import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FiArrowLeft,
  FiArrowRight,
  FiBookOpen,
  FiChevronRight,
  FiCode,
  FiDatabase,
  FiExternalLink,
  FiHome,
  FiLayers,
  FiServer,
  FiShield,
  FiTarget,
  FiZap,
} from 'react-icons/fi';
import {
  nodeCommonMistakes,
  nodeInterviewTopics,
  nodeLearningLoop,
  nodeProjects,
  nodeReferences,
  nodeRoadmapSections,
  nodeStack,
  type NodeAccent,
} from '../data/nodeRoadmap';

const accentMap: Record<NodeAccent, string> = {
  node: 'from-lime-300/90 via-emerald-400/90 to-green-300/90',
  cyan: 'from-cyan-300/85 via-teal-400/85 to-emerald-300/85',
  blue: 'from-blue-300/85 via-sky-400/85 to-cyan-300/85',
  amber: 'from-amber-300/85 via-orange-400/85 to-yellow-300/85',
  pink: 'from-pink-300/85 via-rose-400/85 to-fuchsia-300/85',
  violet: 'from-violet-300/85 via-fuchsia-400/85 to-indigo-300/85',
  yellow: 'from-yellow-300/85 via-amber-400/85 to-lime-300/85',
  rose: 'from-rose-300/85 via-red-400/85 to-orange-300/85',
  teal: 'from-teal-300/85 via-cyan-400/85 to-emerald-300/85',
  sky: 'from-sky-300/85 via-cyan-400/85 to-blue-300/85',
};

export default function NodeRoadmapPage() {
  return (
    <div className="app-shell roadmap-mesh relative min-h-screen overflow-hidden bg-slate-50 text-slate-950 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animated-blob top-8 left-6 h-72 w-72 bg-lime-400/18" />
        <div className="animated-blob right-8 top-40 h-80 w-80 bg-cyan-400/18" />
        <div className="animated-blob bottom-0 left-1/3 h-72 w-72 bg-fuchsia-500/14" />
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(132,204,22,0.18),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,0.14),transparent_26%),linear-gradient(135deg,rgba(15,23,42,0.02),transparent)] dark:bg-[radial-gradient(circle_at_top_left,rgba(132,204,22,0.14),transparent_24%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,0.12),transparent_24%),linear-gradient(135deg,rgba(15,23,42,0.15),transparent)]" />
          <div className="relative">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/65 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-500 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-400">
              <FiServer className="h-3.5 w-3.5" />
              Backend developer path
            </div>

            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <h1 className="font-serif text-5xl font-black leading-[0.92] tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
                  <span className="block bg-gradient-to-r from-lime-300 via-emerald-400 to-cyan-300 bg-clip-text text-transparent">
                    Node.js
                  </span>
                  <span className="block">Backend Roadmap</span>
                  <span className="mt-2 block text-2xl font-semibold tracking-[0.18em] text-slate-400 dark:text-slate-500 sm:text-3xl">
                    2026
                  </span>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
                  A portfolio-native version of the Node.js backend roadmap, rebuilt from the standalone HTML into the same glass, motion, dark-light theme system used across your project.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:w-[25rem]">
                {[
                  { label: 'Modules', value: '11+' },
                  { label: 'Focus', value: 'Backend' },
                  { label: 'Ready', value: 'Projects' },
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
              {['Event Loop', 'Express', 'Auth', 'Databases', 'DevOps'].map((pill, index) => {
                const styles = [
                  'border-lime-300/40 bg-lime-400/10 text-lime-700 dark:text-lime-300',
                  'border-cyan-300/40 bg-cyan-400/10 text-cyan-700 dark:text-cyan-300',
                  'border-pink-300/40 bg-pink-400/10 text-pink-700 dark:text-pink-300',
                  'border-amber-300/40 bg-amber-400/10 text-amber-700 dark:text-amber-300',
                  'border-violet-300/40 bg-violet-400/10 text-violet-700 dark:text-violet-300',
                ];

                return (
                  <span key={pill} className={`rounded-full border px-4 py-2 text-sm font-medium ${styles[index]}`}>
                    {pill}
                  </span>
                );
              })}
            </div>
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-8 grid gap-4 rounded-[1.75rem] border border-slate-200/70 bg-white/70 p-3 shadow-lg shadow-slate-900/5 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/55 md:grid-cols-5"
        >
          {nodeLearningLoop.map((item) => (
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
          {nodeRoadmapSections.map((section, sectionIndex) => (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 + sectionIndex * 0.04 }}
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
                          <FiChevronRight className="mt-1 h-4 w-4 shrink-0 text-emerald-500 dark:text-emerald-300" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    {card.note && (
                      <div className="mt-5 rounded-2xl border border-white/50 bg-slate-100/70 p-4 dark:border-white/10 dark:bg-slate-950/55">
                        <p className="text-sm font-semibold text-lime-700 dark:text-lime-300">{card.note.title}</p>
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

        <div className="mt-12 grid gap-6 xl:grid-cols-[1fr_1fr]">
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.42 }}
            className="card-glass p-7"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-gradient-to-br from-lime-400/20 to-cyan-400/20 p-3 text-lime-600 dark:text-lime-300">
                <FiTarget className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">Focus</p>
                <h2 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">Must-cover interview topics</h2>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {nodeInterviewTopics.map((topic) => (
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
            transition={{ duration: 0.55, delay: 0.46 }}
            className="card-glass p-7"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 p-3 text-emerald-600 dark:text-emerald-300">
                <FiDatabase className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">Industry</p>
                <h2 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">Most used in real projects</h2>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {nodeStack.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 dark:border-white/10 dark:bg-slate-950/45"
                >
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.5 }}
          className="mt-10"
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-400/20 p-3 text-cyan-600 dark:text-cyan-300">
              <FiCode className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">Build Order</p>
              <h2 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">Project roadmap</h2>
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {nodeProjects.map((project) => (
              <article
                key={project.title}
                className="card-glass flex flex-col gap-4 p-6 sm:flex-row sm:items-start"
              >
                <span className={`inline-flex rounded-2xl bg-gradient-to-r ${project.accent} px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-slate-950`}>
                  {project.level}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.54 }}
          className="mt-10 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="card-glass p-7">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-2xl bg-gradient-to-br from-rose-400/20 to-amber-400/20 p-3 text-rose-600 dark:text-rose-300">
                <FiShield className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">Watch Out</p>
                <h2 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">Common mistakes to avoid</h2>
              </div>
            </div>
            <ul className="space-y-4">
              {nodeCommonMistakes.map((mistake) => (
                <li
                  key={mistake.title}
                  className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 dark:border-white/10 dark:bg-slate-950/45"
                >
                  <p className="font-semibold text-slate-900 dark:text-white">{mistake.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{mistake.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-glass p-7">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-2xl bg-gradient-to-br from-lime-400/20 to-cyan-400/20 p-3 text-lime-600 dark:text-lime-300">
                <FiLayers className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">References</p>
                <h2 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">Best places to keep learning</h2>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {nodeReferences.map((ref) => (
                <a
                  key={ref.title}
                  href={ref.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200/70 bg-white/70 p-5 transition hover:-translate-y-1 dark:border-white/10 dark:bg-slate-950/45"
                >
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">{ref.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{ref.subtitle}</p>
                  </div>
                  <FiArrowRight className="h-5 w-5 shrink-0 text-emerald-500 dark:text-emerald-300" />
                </a>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.footer
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.58 }}
          className="py-10 text-center text-sm text-slate-500 dark:text-slate-500"
        >
          <a
            href="https://nodejs.org/docs/latest/api/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-medium text-emerald-600 transition hover:text-emerald-700 dark:text-emerald-300 dark:hover:text-emerald-200"
          >
            <FiExternalLink className="h-4 w-4" />
            Node.js Roadmap 2026 - beginner to advanced
          </a>
        </motion.footer>
      </div>
    </div>
  );
}
