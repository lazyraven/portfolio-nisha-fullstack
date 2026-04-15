import type { ElementType } from 'react';
import { FiCode, FiServer, FiTool } from 'react-icons/fi';
import { skills } from '../data';

const iconMap: Record<string, ElementType> = {
  Frontend: FiCode,
  Backend: FiServer,
  Tools: FiTool,
};

function SkillRow({ label, progress }: { label: string; progress: number }) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between text-sm font-medium text-slate-700 dark:text-slate-300">
        <span>{label}</span>
        <span>{progress}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800">
        <div style={{ width: `${progress}%` }} className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500" />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Skills</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
            Skill stack for modern product development.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((group) => {
            const Icon = iconMap[group.category];
            return (
              <div key={group.category} className="card-glass p-8">
                <div className="flex items-center gap-3 text-cyan-300">
                  <Icon className="h-5 w-5" />
                  <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{group.category}</h3>
                </div>
                <div className="mt-6 space-y-5">
                  {group.items.map((skill, index) => (
                    <div key={skill} className="rounded-[1.5rem] border border-slate-200/70 bg-slate-100/90 p-4 dark:border-white/10 dark:bg-slate-950/70">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="glow-badge">{skill}</span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">{90 - index * 15}%</span>
                      </div>
                      <div className="mt-4 h-2 rounded-full bg-slate-200 dark:bg-slate-800">
                        <div style={{ width: `${90 - index * 15}%` }} className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400" />
                      </div>
                    </div>
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
