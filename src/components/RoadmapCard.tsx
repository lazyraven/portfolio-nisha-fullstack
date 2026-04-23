import { Link } from 'react-router-dom';
import { FiArrowRight, FiBookOpen } from 'react-icons/fi';
import type { Roadmap } from '../data/roadmaps';

interface RoadmapCardProps {
  roadmap: Roadmap;
}

export default function RoadmapCard({ roadmap }: RoadmapCardProps) {
  return (
    <Link
      to={`/roadmap/${roadmap.id}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-xl hover:shadow-cyan-500/10 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-slate-950/30 dark:hover:border-cyan-500/30"
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/5 to-fuchsia-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Icon */}
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-fuchsia-500 text-white shadow-lg shadow-cyan-500/25">
        <FiBookOpen className="h-6 w-6" />
      </div>

      {/* Content */}
      <h3 className="mb-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300">
        {roadmap.title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {roadmap.description}
      </p>

      {/* Topics count */}
      <div className="mb-4 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-500">
        <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">
          {roadmap.topics.length} Topics
        </span>
      </div>

      {/* CTA */}
      <div className="flex items-center gap-2 text-sm font-semibold text-cyan-600 transition-colors group-hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300">
        <span>View Roadmap</span>
        <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}