import { projects } from '../data';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Projects</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
            Showcasing premium web product work.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
