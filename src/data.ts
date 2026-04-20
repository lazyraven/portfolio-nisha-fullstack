export const navLinks = [
  { title: 'Home', href: '#home' },
  { title: 'About', href: '#about' },
  { title: 'Skills', href: '#skills' },
  { title: 'Experience', href: '#experience' },
  { title: 'Projects', href: '#projects' },
  { title: 'Resume', href: '/resume.pdf', download: true },
  { title: 'Contact', href: '#contact' },
];

export const skills = [
  { category: 'Frontend', items: ['React', 'Vue', 'Angular', 'JavaScript'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB'] },
  { category: 'Tools', items: ['Jenkins', 'Azure DevOps', 'Git'] },
];

export const experience = [
  {
    company: 'Genpact',
    period: '2022 – Present',
    title: 'Senior Full Stack Developer',
    summary: 'Driving product delivery with full stack ownership across React interfaces and Node.js services.',
    bullets: ['Leading cross-functional delivery of scalable applications', 'Building modern React dashboards with Node.js APIs', 'Mentoring teams on best practices and cloud deployments'],
  },
  {
    company: 'R Systems International',
    period: '2020 – 2022',
    title: 'Full Stack Developer',
    summary: 'Delivered enterprise-grade web applications with a focus on performance and team collaboration.',
    bullets: ['Delivered enterprise web apps using JavaScript and MongoDB', 'Improved performance and usability across products', 'Collaborated with product and QA teams to ship features quickly'],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  highlight?: boolean;
  image?: string;
};

export const projects: Project[] = [
  {
    title: 'Open Retro',
    description: 'A community-driven retrospective tool for agile teams with engaging UI and collaboration features.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    github: 'https://github.com/lazyraven/open-retro-react',
    live: 'https://www.openretro.in/',
    highlight: true,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Just Vegan | Todo App',
    description: 'A clean marketplace experience for plant-based products, optimized for mobile and conversions.',
    tech: ['React', 'Firebase', 'Stripe'],
    github: 'https://github.com/lazyraven/react-todo-app-cursor/',
    live: 'https://lazyraven.github.io/react-todo-app-cursor/',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'MERN Auth',
    description: 'A full-stack authentication starter with JWT sessions, protected routes, and reusable components.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/lazyraven/mern-ai-features',
    live: 'https://fullstack-interview-roadmap.netlify.app/',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  },
];
