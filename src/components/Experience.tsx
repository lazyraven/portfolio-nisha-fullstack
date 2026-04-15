import { useState } from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

function TimelineEntry({ item, index }: { item: (typeof experience)[number]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative pl-14 lg:pl-20">
      <span className="timeline-point" style={{ top: index === 0 ? '1rem' : '0.75rem' }} />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, delay: index * 0.1 }}
        className="rounded-[1.75rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.08)] transition-all duration-300 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.75)]"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">{item.company}</p>
            <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
            <p className="max-w-2xl text-slate-600 dark:text-slate-400">{item.summary}</p>
          </div>
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:border-cyan-300 hover:text-cyan-700 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:text-cyan-300"
          >
            {expanded ? 'Hide details' : 'View details'}
            {expanded ? <FiChevronUp /> : <FiChevronDown />}
          </button>
        </div>

        <div className="mt-6">
          <span className="inline-flex rounded-full bg-slate-100/90 px-4 py-2 text-sm text-slate-700 ring-1 ring-slate-200/70 dark:bg-slate-900/70 dark:text-slate-300 dark:ring-white/10">
            {item.period}
          </span>
        </div>

        {expanded && (
          <div className="mt-6 rounded-[1.5rem] border border-slate-200/70 bg-white/90 p-6 dark:border-white/10 dark:bg-slate-950/80">
            <h4 className="text-sm uppercase tracking-[0.3em] text-cyan-300">Role details</h4>
            <ul className="mt-4 space-y-3 text-slate-700 dark:text-slate-300">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Experience</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
            Timeline of senior product delivery.
          </h2>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/90 p-8 shadow-[0_35px_80px_-40px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-slate-950/75 dark:shadow-[0_35px_80px_-40px_rgba(0,0,0,0.8)]">
          <div className="timeline-line hidden lg:block" />
          <div className="space-y-10">
            {experience.map((item, index) => (
              <TimelineEntry key={item.company} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
