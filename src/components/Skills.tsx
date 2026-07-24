import type { ElementType } from 'react';
import { FiCode, FiServer, FiTool } from 'react-icons/fi';
import { skills } from '../data';


const iconMap: Record<string, ElementType> = {
  Frontend: FiCode,
  Backend: FiServer,
  Tools: FiTool,
  'Tools & DevOps': FiTool,
};

export default function Skills() {
  return (
    <section id="skills">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Skills</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
            Resume-backed skill stack for responsive product development.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((group) => {
            const Icon = iconMap[group.category] ?? FiTool;
            return (
              <div key={group.category} className="card-glass p-8">
                <div className="flex items-center gap-3 text-cyan-300">
                  <Icon className="h-5 w-5" />
                  <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{group.category}</h3>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {group.items.map((skill) => (
                    <span key={skill} className="glow-badge bg-slate-100/90 text-slate-950 dark:bg-slate-950/70 dark:text-slate-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
