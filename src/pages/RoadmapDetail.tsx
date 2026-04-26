import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight, FiBookOpen, FiAlertCircle, FiHome, FiEye } from 'react-icons/fi';
import { roadmaps } from '../data/roadmaps';
import TopicAccordion from '../components/TopicAccordion';

export default function RoadmapDetail() {
  const { skillName } = useParams<{ skillName: string }>();
  const roadmap = roadmaps.find((r) => r.id === skillName);

  if (!roadmap) {
    return (
      <div className="app-shell relative min-h-screen overflow-visible bg-slate-50 text-slate-950 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-32">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
            <FiAlertCircle className="h-10 w-10" />
          </div>
          <h1 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
            Roadmap Not Found
          </h1>
          <p className="mb-8 text-center text-slate-600 dark:text-slate-400">
            The roadmap you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/roadmaps"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-cyan-700"
          >
            <FiArrowLeft className="h-4 w-4" />
            Back to Roadmaps
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="app-shell relative min-h-screen overflow-visible bg-slate-50 text-slate-950 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animated-blob bg-indigo-500/20 top-8 left-6 h-72 w-72"></div>
        <div className="animated-blob bg-cyan-400/20 bottom-12 right-10 h-80 w-80"></div>
        <div className="animated-blob bg-fuchsia-500/20 top-20 right-1/4 h-64 w-64"></div>
      </div>
      {/* <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8"> */}

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Navigation Buttons - Show for iframe */}
        {
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 flex items-center justify-between"
          >
            <Link
              to="/roadmaps"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
            >
              <FiArrowLeft className="h-4 w-4" />
              Back to Roadmaps
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
            >
              <FiHome className="h-4 w-4" />
              Home
            </Link>
          </motion.div>
        // )
        }

        {/* Iframe for external roadmap content - Full page */}
        {/* {
        roadmap.iframeUrl && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-xl shadow-slate-900/10 dark:border-white/10 dark:bg-slate-900 dark:shadow-slate-950/30"
          >
            <iframe
              src={roadmap.iframeUrl}
              title={roadmap.title}
              className="h-[85vh] w-full rounded-2xl border-0"
              sandbox="allow-scripts allow-same-origin"
            />
          </motion.div>
        )
        } */}

        {/* Show regular roadmap content when no iframe */}
        {
          <>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-fuchsia-500 text-white shadow-lg shadow-cyan-500/25">
                <FiBookOpen className="h-7 w-7" />
              </div>
              <h1 className="mb-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl flex justify-between items-center gap-4">
                {roadmap.title}
                {roadmap.iframeUrl &&
                  (<div className="w-8 h-8 flex items-center justify-center rounded-full 
                        bg-gradient-to-r from-cyan-500 to-purple-500 shadow-lg">
                    <Link to={{ pathname: roadmap.iframeUrl }} target="_blank" rel="noopener noreferrer">
                      <FiEye className="text-white text-2xl" />
                    </Link>
                  </div>)
                }
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                {roadmap.description}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <span className="rounded-full bg-cyan-100 px-4 py-1.5 text-sm font-medium text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">
                  {roadmap.topics.length} Topics
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-500">
                  {roadmap.topics.reduce((acc, t) => acc + (t.subtopics?.length || 0), 0)} subtopics total
                </span>
              </div>
            </motion.div>

            {/* Topics */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              {roadmap.topics.map((topic, index) => (
                <TopicAccordion key={index} topic={topic} index={index} />
              ))}
            </motion.div>
          </>
        // )
        }
      </div>
    </div>
  );
}