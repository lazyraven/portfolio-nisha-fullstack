import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { achievements, careerGoals, certifications, education, preferredRoles, softSkills, strengths } from './data';
import ShareButton from './components/ShareButton';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Roadmaps from './pages/Roadmaps';
import RoadmapDetail from './pages/RoadmapDetail';
import RoadmapIframe from './pages/RoadmapIframe';


function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;

    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme === 'dark') return true;
    if (savedTheme === 'light') return false;

    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    window.localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
    //     <Route path="/roadmaps" element={<Roadmaps />} />
    //     <Route path="/roadmaps/iframe/:skillName" element={<RoadmapIframe />} />
    //     <Route path="/roadmap/:skillName" element={<RoadmapDetail />} />
    //     <Route path="/blog" element={<Blog />} />
    //     <Route path="/blog/:id" element={<BlogPost />} />
    //   </Routes>
    // </Router>
    <div className={darkMode ? 'dark' : ''}>
      <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="animated-blob bg-indigo-500/20 top-8 left-6 h-72 w-72"></div>
          <div className="animated-blob bg-cyan-400/20 bottom-12 right-10 h-80 w-80"></div>
          <div className="animated-blob bg-fuchsia-500/20 top-20 right-1/4 h-64 w-64"></div>
        </div>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <ShareButton />
        <main className="mx-auto relative max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }} className="space-y-28">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <section id="profile-snapshot">
              <div className="mx-auto max-w-6xl">
                <div className="mb-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Profile snapshot</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
                    Education, achievements, and growth direction.
                  </h2>
                </div>
                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-[2rem] border border-slate-200/70 bg-white/90 p-8 shadow-[0_25px_70px_-30px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-slate-950/70">
                    <div className="space-y-6">
                      <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Education</p>
                        {education.map((item) => (
                          <div key={item.degree} className="mt-4 rounded-[1.5rem] border border-slate-200/70 bg-slate-100/90 p-5 dark:border-white/10 dark:bg-slate-900/70">
                            <p className="text-lg font-semibold text-slate-950 dark:text-white">{item.degree}</p>
                            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.institution}</p>
                            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{item.period}</p>
                            <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">{item.details}</p>
                          </div>
                        ))}
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Achievements</p>
                        <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                          {achievements.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="rounded-[2rem] border border-slate-200/70 bg-slate-100/90 p-8 dark:border-white/10 dark:bg-slate-950/70">
                      <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Strengths</p>
                      <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                        {strengths.map((item) => (
                          <li key={item} className="rounded-[1rem] border border-slate-200/70 bg-white/80 px-4 py-3 dark:border-white/10 dark:bg-slate-900/70">{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-[2rem] border border-slate-200/70 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 p-8 dark:border-white/10">
                      <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Soft skills</p>
                      <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                        {softSkills.map((item) => (
                          <li key={item} className="rounded-[1rem] border border-white/50 bg-white/70 px-4 py-3 dark:border-white/10 dark:bg-slate-900/60">{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-[2rem] border border-slate-200/70 bg-white/90 p-8 shadow-[0_25px_70px_-30px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-slate-950/70">
                      <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Preferred roles</p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        {preferredRoles.map((item) => (
                          <span key={item} className="glow-badge">{item}</span>
                        ))}
                      </div>
                  </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 dark:border-white/10 dark:bg-slate-950/70">
                        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Certifications</p>
                        <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
                          {certifications.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 dark:border-white/10 dark:bg-slate-950/70">
                        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Career goals</p>
                        <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
                          {careerGoals.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Projects />
            <Contact />
          </motion.div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;