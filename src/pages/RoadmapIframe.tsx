import { Link, useParams } from 'react-router-dom';
import { FiAlertCircle, FiArrowLeft, FiExternalLink, FiHome } from 'react-icons/fi';
import { roadmaps } from '../data/roadmaps';

export default function RoadmapIframe() {
  const { skillName } = useParams<{ skillName: string }>();
  const roadmap = roadmaps.find((r) => r.id === skillName);
  const RoadmapComponent = roadmap?.component;

  if (RoadmapComponent) {
    return <RoadmapComponent />;
  }

  if (!roadmap?.iframeUrl) {
    return (
      <div className="app-shell relative min-h-screen overflow-visible bg-slate-50 text-slate-950 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-32">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
            <FiAlertCircle className="h-10 w-10" />
          </div>
          <h1 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
            Roadmap Preview Not Found
          </h1>
          <p className="mb-8 text-center text-slate-600 dark:text-slate-400">
            The roadmap preview you're looking for doesn't exist or has been moved.
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
    <div className="app-shell relative min-h-screen overflow-hidden bg-slate-50 text-slate-950 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
      <div className="flex h-screen flex-col">
        <header className="flex items-center justify-between border-b border-slate-200 bg-white/90 px-4 py-3 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-950/90 sm:px-6">
          <Link
            to="/roadmaps"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
          >
            <FiArrowLeft className="h-4 w-4" />
            Back to Roadmaps
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
            >
              <FiHome className="h-4 w-4" />
              Home
            </Link>
            <a
              href={roadmap.iframeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan-600 transition-colors hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
            >
              <FiExternalLink className="h-4 w-4" />
              Open
            </a>
          </div>
        </header>
        <iframe
          src={roadmap.iframeUrl}
          title={`${roadmap.title} preview`}
          className="min-h-0 flex-1 border-0 bg-white"
        />
      </div>
    </div>
  );
}
