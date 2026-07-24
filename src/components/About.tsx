export default function About() {
  return (
    <section id="about">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">About Me</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
              Full-stack developer with a strong front-end foundation.
            </h2>
          </div>
          <div className="inline-flex rounded-full border border-slate-200/70 bg-slate-100/90 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_25px_rgba(56,189,248,0.08)] dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100">
            5+ years experience
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="card-glass p-10">
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
              Experienced Front-End Developer with 5+ years of expertise in developing responsive web applications using Angular, Vue.js, JavaScript, HTML/CSS, and TypeScript.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-700 dark:text-slate-300">
              Proficient in UI/UX optimization, unit testing with Karma and Jasmine, Agile methodologies, Jenkins CI/CD, and version control with Git/GitLab. Actively enhancing skills in React.js, Node.js, and MongoDB.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-slate-200/70 bg-slate-100/90 p-5 dark:border-white/10 dark:bg-slate-950/75">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Education</p>
                <p className="mt-3 text-lg font-semibold text-slate-950 dark:text-white">B. Tech - RTU Kota</p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200/70 bg-slate-100/90 p-5 dark:border-white/10 dark:bg-slate-950/75">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Focus</p>
                <p className="mt-3 text-lg font-semibold text-slate-950 dark:text-white">Responsive enterprise web apps</p>
              </div>
            </div>
          </div>
          <div className="space-y-6 rounded-[2rem] border border-slate-200/70 bg-white/90 p-8 shadow-[0_25px_60px_-30px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-slate-950/70 dark:shadow-[0_25px_60px_-30px_rgba(0,0,0,0.7)]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Core strengths</p>
              <ul className="mt-5 space-y-4 text-slate-700 dark:text-slate-300">
                <li>Angular Material component implementation and responsive UI work</li>
                <li>Backend feature and API work using Node.js and MongoDB</li>
                <li>Agile collaboration with cross-functional, QA, and backend teams</li>
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-gradient-to-r from-indigo-500/10 to-cyan-400/10 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-500">Reliable delivery</p>
                <p className="mt-3 text-lg font-semibold text-slate-950 dark:text-white">Karma, Jasmine, Jenkins</p>
              </div>
              <div className="rounded-[1.5rem] bg-gradient-to-r from-fuchsia-500/10 to-pink-400/10 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-pink-500">Design</p>
                <p className="mt-3 text-lg font-semibold text-slate-950 dark:text-white">Angular, Vue.js, React</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
