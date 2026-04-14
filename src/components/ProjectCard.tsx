import type { Project } from '../data';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const imageStyles = project.image
    ? {
        backgroundImage: `url(${project.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : undefined;

  return (
    <article className="transform-gpu rounded-[2rem] border border-white/10 bg-slate-900/80 shadow-2xl shadow-slate-950/40 transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-cyan-300 hover:shadow-[0_35px_90px_-25px_rgba(56,189,248,0.35)]">
      <div className="relative mb-6 h-56 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-indigo-600 via-purple-700 to-cyan-500" style={imageStyles}>
        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs uppercase tracking-[0.3em] text-cyan-300 shadow-[0_0_18px_rgba(56,189,248,0.12)]">
          {project.highlight ? 'Featured Project' : 'Project'}
        </div>
        {!project.image && (
          <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-white/90">
            Preview
          </div>
        )}
      </div>

      <div className="px-6 pb-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          {project.highlight && (
            <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
              Featured
            </span>
          )}
        </div>
        <p className="text-slate-300">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="glow-badge bg-slate-900/80 text-slate-100">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.github}
            className="btn-secondary inline-flex items-center justify-center"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href={project.live}
            className="btn-primary inline-flex items-center justify-center"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}
