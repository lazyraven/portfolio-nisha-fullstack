import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

type Toast = {
  type: "success" | "error";
  text: string;
};

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [toast, setToast] = useState<Toast | null>(null);

  useEffect(() => {
    if (!toast) return;

    const timeout = window.setTimeout(() => {
      setToast(null);
    }, 4000);

    return () => window.clearTimeout(timeout);
  }, [toast]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        "service_yiqnzlc",
        "template_goy78wv",
        formRef.current,
        "9PXE7kH6KkoaQuyJJ"
      );
      setToast({ type: "success", text: "Thank you for your message! I will get back to you soon." });
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS send error:", error);
      setToast({ type: "error", text: "Unable to send message right now. Please try again later." });
    }
  };

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
                Email: <span className="font-semibold text-white">nishayadav1703@gmail.com</span>
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
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-cyan-300/10 bg-slate-950/90 p-8 shadow-[0_40px_120px_-45px_rgba(14,165,233,0.35)] backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-1"
          >
            <input type="hidden" name="name" value="Nisha" />
            <div className="mb-6 space-y-2">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Message</p>
              <h3 className="text-2xl font-semibold text-white">Send me a note</h3>
              <p className="text-sm text-slate-400">
                Share your project details and I’ll respond as soon as possible.
              </p>
            </div>
            <label className="block">
              <span className="text-sm font-semibold text-slate-200">Name</span>
              <input
                name="from_name"
                type="text"
                placeholder="Your name"
                className="mt-3 w-full rounded-[1.5rem] border border-slate-700 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition duration-300 ease-out hover:border-cyan-300/70 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20 placeholder:text-slate-500"
                required
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-slate-200">Email</span>
              <input
                name="from_email"
                type="email"
                placeholder="you@example.com"
                className="mt-3 w-full rounded-[1.5rem] border border-slate-700 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition duration-300 ease-out hover:border-cyan-300/70 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20 placeholder:text-slate-500"
                required
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-slate-200">Message</span>
              <textarea
                name="from_message"
                placeholder="Tell me about your project"
                rows={5}
                className="mt-3 w-full rounded-[1.5rem] border border-slate-700 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition duration-300 ease-out hover:border-cyan-300/70 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20 placeholder:text-slate-500"
                required
              />
            </label>
            <button
              type="submit"
              className="btn-primary mt-4 inline-flex w-full items-center justify-center rounded-[1.5rem] px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      {toast && (
        <div
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 max-w-xs rounded-2xl px-4 py-3 text-sm font-medium shadow-xl"
        >
          <div
            className={`rounded-2xl px-4 py-3 text-white shadow-lg ${
              toast.type === "success"
                ? "bg-emerald-500/95"
                : "bg-rose-500/95"
            }`}
          >
            {toast.text}
          </div>
        </div>
      )}
    </section>
  );
}
