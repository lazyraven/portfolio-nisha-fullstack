export default function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Let’s connect and build something exceptional.
          </h2>
        </div>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Reach out</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Let’s build your next product.</h3>
            </div>
            <div className="space-y-4 text-slate-300">
              <p>
                Email: <span className="font-semibold text-white">nisha@example.com</span>
              </p>
              <p>
                Phone: <span className="font-semibold text-white">+1 (555) 123-4567</span>
              </p>
              <p>
                LinkedIn:{' '}
                <a href="#" className="text-cyan-300 transition hover:text-cyan-200">
                  linkedin.com/in/nishayadav
                </a>
              </p>
            </div>
            <div className="grid gap-4 rounded-[1.75rem] bg-slate-900/80 p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Availability</p>
                <p className="mt-2 text-lg font-semibold text-white">Open for freelance and full-time work</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Location</p>
                <p className="mt-2 text-lg font-semibold text-white">Remote / Global</p>
              </div>
            </div>
          </div>
          <form className="card-glass space-y-6 p-8">
            <label className="block">
              <span className="text-sm font-semibold text-slate-200">Name</span>
              <input type="text" placeholder="Your name" className="mt-3 w-full rounded-[1.5rem] border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20" />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-slate-200">Email</span>
              <input type="email" placeholder="you@example.com" className="mt-3 w-full rounded-[1.5rem] border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20" />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-slate-200">Message</span>
              <textarea placeholder="Tell me about your project" rows={5} className="mt-3 w-full rounded-[1.5rem] border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20" />
            </label>
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
