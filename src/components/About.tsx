export default function About() {
  return (
    <section id="about">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">About Me</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Senior developer shaping scalable SaaS-grade products.
            </h2>
          </div>
          <div className="inline-flex rounded-full border border-white/10 bg-slate-900/70 px-5 py-3 text-sm font-semibold text-slate-100 shadow-[0_0_25px_rgba(56,189,248,0.12)]">
            5+ years experience
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="card-glass p-10">
            <p className="text-lg leading-8 text-slate-300">
              As a Full Stack Developer, I deliver polished, maintainable applications with user-first design and robust backend services. My focus is on building resilient React and Node.js systems backed by MongoDB and modern deployment pipelines.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              I thrive on translating complex business needs into elegant software, optimizing performance, and creating interfaces that feel both intuitive and premium.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/75 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Core stack</p>
                <p className="mt-3 text-lg font-semibold text-white">React · Node.js · MongoDB</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/75 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Passion</p>
                <p className="mt-3 text-lg font-semibold text-white">Scalable, performance-driven products</p>
              </div>
            </div>
          </div>
          <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-[0_25px_60px_-30px_rgba(0,0,0,0.7)]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Core strengths</p>
              <ul className="mt-5 space-y-4 text-slate-300">
                <li>React architecture, component systems, and polished UI flows</li>
                <li>Node.js APIs, server-side performance, and MongoDB data models</li>
                <li>Automation, cloud-ready deployments, and strong development workflows</li>
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-gradient-to-r from-indigo-500/20 to-cyan-400/10 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Reliable delivery</p>
                <p className="mt-3 text-lg font-semibold text-white">Enterprise-ready apps</p>
              </div>
              <div className="rounded-[1.5rem] bg-gradient-to-r from-fuchsia-500/20 to-pink-400/10 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-pink-200">Design</p>
                <p className="mt-3 text-lg font-semibold text-white">Clean, SaaS-inspired UI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
