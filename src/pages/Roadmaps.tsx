import { motion } from 'framer-motion';
import RoadmapList from '../components/RoadmapList';
import { FiMap, FiCompass, FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Roadmaps() {
  return (
    <div className="app-shell relative min-h-screen overflow-visible bg-slate-50 text-slate-950 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animated-blob bg-indigo-500/20 top-8 left-6 h-72 w-72"></div>
        <div className="animated-blob bg-cyan-400/20 bottom-12 right-10 h-80 w-80"></div>
        <div className="animated-blob bg-fuchsia-500/20 top-20 right-1/4 h-64 w-64"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex text-center justify-between"
        >
          <div></div>
          <div>
          <div className="mb-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 p-3 text-white shadow-lg shadow-cyan-500/25">
            <FiMap className="h-6 w-6" />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Learning Roadmaps
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Structured learning paths to master different technologies and skills.
            Click on any roadmap to explore topics and detailed notes.
          </p>
          </div>

            <Link
            to="/"
            className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 my-2 text-sm"
          >
            <FiHome className="h-4 w-4" />
            Home
          </Link>
        </motion.div>

        {/* Roadmap List */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <RoadmapList />
        </motion.div>

        {/* Empty state hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-500"
        >
          <FiCompass className="h-4 w-4" />
          <span>More roadmaps coming soon!</span>
        </motion.div>
      </div>
    </div>
  );
}