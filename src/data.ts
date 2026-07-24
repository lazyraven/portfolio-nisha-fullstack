export const navLinks = [
  { title: 'Home', href: '#home' },
  { title: 'About', href: '#about' },
  { title: 'Skills', href: '#skills' },
  // { title: 'Blog', href: '#blog' },
  { title: 'Blog', href: 'blog' },
  { title: 'Roadmaps', href: '/roadmaps' },
  { title: 'Experience', href: '#experience' },
  { title: 'Projects', href: '#projects' },
  { title: 'Resume', href: '/resume.pdf', download: true },
  { title: 'Contact', href: '#contact' },
];

export const skills = [
  { category: 'Frontend', items: ['Vue.js', 'React', 'Angular', 'JavaScript', 'TypeScript', 'CSS', 'HTML', 'Tailwind CSS', 'Bootstrap'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'MongoDB'] },
  { category: 'Tools & DevOps', items: ['Git', 'GitLab', 'Azure DevOps', 'Jenkins', 'Rally', 'Swagger'] },
];

export const experience = [
  {
    company: 'Genpact',
    period: "Jun '22 - Present",
    title: 'Software Engineer (Full-Stack Developer)',
    summary: 'Developing and enhancing Angular-based enterprise applications for GE, with frontend components, testing, CI/CD, and backend module work.',
    bullets: [
      'Developed and enhanced features in Angular-based enterprise apps for GE (ARMS & Aero Store), improving usability and performance.',
      'Implemented reusable UI components using Angular Material: mat-select, mat-dialog, mat-table, and mat-paginator.',
      'Conducted unit testing with Karma and Jasmine; integrated CI/CD pipelines using Jenkins.',
      'Worked on backend features and APIs using Node.js and MongoDB for internal modules.',
      'Collaborated with cross-functional teams in Agile sprints using Rally and Azure DevOps.',
    ],
  },
  {
    company: 'R Systems International',
    period: "Feb '20 - Mar '22",
    title: 'Software Engineer (Front-End Developer)',
    summary: 'Built Vue.js and Kendo UI modules for Smart 2.0, integrating APIs and coordinating delivery with QA and backend teams.',
    bullets: [
      'Built core modules for the Smart 2.0 (USMed Equip) application using Vue.js and Kendo UI.',
      'Delivered features for Service Test Manager and Inventory Action modules, ensuring QA approval.',
      'Integrated APIs using Swagger and managed tasks and sprints using Azure DevOps.',
      'Collaborated closely with QA and backend teams to ensure seamless deployments.',
    ],
  },
];

export const education = [
  {
    degree: 'B. Tech in Bachelor of Technology',
    institution: 'Rajasthan Technical University (RTU), Kota',
    period: "Jun '15 - May '19",
    details: 'GPA: 63%. Location: Kota, India.',
  },
];

export const achievements = [
  'Achieved high unit test coverage with Karma and Jasmine on Aero Alliance work.',
  'Delivered QA-approved features for Service Test Manager and Inventory Action modules.',
  'Participated in extracurricular activities in college, including sketching, dancing, and running marathons.',
];

export const strengths = [
  'Responsive web application development',
  'UI/UX optimization',
  'Reusable component implementation',
  'Unit testing with Karma and Jasmine',
  'CI/CD pipeline integration using Jenkins',
];

export const softSkills = [
  'Cross-functional collaboration',
  'Agile sprint participation',
  'QA and backend team coordination',
  'Seamless deployment support',
];

export const careerGoals = [
  'Add Information',
];

export const preferredRoles = [
  'Full Stack Developer',
  'Front-End Developer',
];

export const certifications = [
  'Add Information',
];


export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  highlight?: boolean;
  image?: string;
  period?: string;
};

export const projects: Project[] = [
  {
    title: 'Aero Alliance',
    description: 'Built reusable Angular Material components, dynamic binding for responsive UIs, complex question matrix flows, drag-and-drop table rows, and in-cell filter modals across Smartshop, ACT, Techpub, EFR, and Routerscope.',
    tech: ['Angular', 'JavaScript', 'Node.js', 'HTML/CSS', 'Bootstrap', 'Karma', 'Jasmine'],
    highlight: true,
    period: 'Present',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'GE ELITE',
    description: 'Developed modular Angular features for Engine Lifecycle Information Tracking, including Tracking Report, Fleet Intelligence, advanced table functionality, dynamic search, filtering, and dashboards.',
    tech: ['Angular', 'Highcharts', 'NGX Data Tables'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'PRISM+',
    description: 'Created CS Risk Management dashboards and admin modules for user management and notifications with search, filtering, and Excel export.',
    tech: ['Highcharts', 'NGX Data Tables', 'Angular'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Smart 2.0 | USMed Equip',
    description: 'Managed medical equipment logistics interfaces using Vue.js and Kendo UI, with API documentation and testing through Swagger.',
    tech: ['Vue.js', 'JavaScript', 'HTML', 'CSS', 'Azure DevOps', 'Swagger'],
    period: "Feb '20 - Mar '22",
    image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'MERN Auth System',
    description: 'Implemented a secure JWT-based authentication system with login, registration, and protected routes. Optimized API response times and MongoDB query performance through indexing and query refactoring.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Open Retro',
    description: 'A learning project built to capture and manage work history details in a structured and user-friendly manner.',
    tech: ['ReactJS', 'Tailwind CSS', 'Firebase', 'Firestore', 'Realtime Database', 'jsPDF'],
    github: 'https://github.com/lazyraven/open-retro-react',
    live: 'https://www.openretro.in/',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'react-hooks-guide',
    title: 'Mastering React Hooks: A Comprehensive Guide',
    excerpt: 'Learn how to use React Hooks effectively in your applications. From useState to useContext, we cover everything you need to know.',
    content: `React Hooks have revolutionized the way we write React components. Introduced in React 16.8, they allow you to use state and other React features without writing class components.

## What Are Hooks?

Hooks are functions that let you "hook into" React features. They let you use state and other React features without writing a class. Some important hooks include:

- **useState**: Lets you add state to functional components
- **useEffect**: Lets you perform side effects in functional components
- **useContext**: Lets you consume context without nesting
- **useReducer**: Alternative to useState for complex state management
- **useCallback**: Memoizes a function definition
- **useMemo**: Memoizes a computed value

## Best Practices

1. Only call hooks at the top level of your function
2. Only call hooks from React function components or custom hooks
3. Use the ESLint plugin to enforce these rules
4. Create custom hooks to share logic between components
5. Keep your hooks small and focused on a single responsibility

## Practical Example

Here's a simple example of using useState:

\`\`\`javascript
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

Hooks make React development more intuitive and help you write cleaner, more maintainable code.`,
    date: '2024-03-15',
    author: 'Nisha Yadav',
    tags: ['React', 'JavaScript', 'Hooks'],
    readTime: 8,
  },
  {
    id: 'nodejs-express-api',
    title: 'Building Scalable REST APIs with Node.js and Express',
    excerpt: 'Discover best practices for building robust REST APIs using Node.js and Express. Learn about middleware, error handling, and deployment.',
    content: `Building APIs is a fundamental skill for modern developers. Node.js with Express makes it simple to create fast, scalable web applications.

## Why Node.js for APIs?

Node.js is perfect for building APIs because:
- Non-blocking, event-driven architecture
- Large ecosystem with npm packages
- JavaScript on both frontend and backend
- Excellent performance for I/O operations
- Easy to deploy and scale

## Setting Up Express

Express is a minimal and flexible web application framework that makes building APIs straightforward.

## Middleware

Middleware functions have access to the request and response objects. Common middleware includes authentication, logging, error handling, CORS handling, and request validation.

## Best Practices

1. Use environment variables for configuration
2. Implement proper error handling
3. Use middleware for cross-cutting concerns
4. Validate input data
5. Use async/await for cleaner code
6. Implement rate limiting
7. Use HTTPS in production
8. Version your APIs

Building scalable APIs takes planning and good practices, but Express makes it accessible for developers of all levels.`,
    date: '2024-03-10',
    author: 'Nisha Yadav',
    tags: ['Node.js', 'Express', 'API'],
    readTime: 10,
  },
  {
    id: 'mongodb-best-practices',
    title: 'MongoDB Best Practices for Production',
    excerpt: 'Essential tips and best practices for using MongoDB in production environments. Learn about indexing, replication, and optimization.',
    content: `MongoDB is a powerful NoSQL database, but like any database, it requires proper configuration and practices to run smoothly in production.

## Indexing Strategy

Indexes are crucial for query performance. Always analyze your queries and create indexes for frequently used fields.

## Data Validation

Use schema validation to ensure data integrity.

## Replication and Sharding

- **Replication**: Use replica sets for high availability
- **Sharding**: Distribute data across multiple servers for scalability

## Security

1. Always use authentication
2. Enable encryption at rest and in transit
3. Use role-based access control
4. Regular backups
5. Monitor database activity

## Performance Optimization

- Monitor slow queries with the profiler
- Use aggregation pipeline for complex queries
- Implement caching strategies
- Regular maintenance tasks (compacting, defragmentation)

Following these practices will help you maintain a healthy MongoDB database in production.`,
    date: '2024-02-28',
    author: 'Nisha Yadav',
    tags: ['MongoDB', 'Database', 'Backend'],
    readTime: 9,
  },
  {
    id: 'typescript-guide',
    title: 'Getting Started with TypeScript',
    excerpt: 'A beginner-friendly guide to TypeScript. Learn how static typing can help you write better, more maintainable JavaScript code.',
    content: `TypeScript adds static typing to JavaScript, helping you catch errors before runtime and write more maintainable code.

## Why TypeScript?

TypeScript provides several advantages:
- **Type Safety**: Catch errors at compile time
- **Better IDE Support**: Improved autocomplete and refactoring
- **Self-Documenting**: Types serve as documentation
- **Large Project Support**: Better tooling for large codebases

## Basic Types

TypeScript supports basic types like string, number, boolean, and arrays.

## Interfaces

Interfaces define the structure of objects, helping you ensure type safety across your application.

## Functions with Types

Functions can be typed with parameter and return types.

## Generics

Generics allow you to write reusable code with flexible types.

## Getting Started

1. Install TypeScript: npm install -g typescript
2. Create a tsconfig.json
3. Write .ts files
4. Compile with tsc

TypeScript might seem like extra work initially, but it pays dividends in larger projects.`,
    date: '2024-02-15',
    author: 'Nisha Yadav',
    tags: ['TypeScript', 'JavaScript', 'Frontend'],
    readTime: 7,
  },
  {
    id: 'tailwind-css-tips',
    title: 'Tailwind CSS: Tips and Tricks for Faster Development',
    excerpt: 'Discover advanced Tailwind CSS techniques to speed up your development process. Learn about customization, utilities, and best practices.',
    content: `Tailwind CSS is a utility-first CSS framework that helps you build modern designs without leaving your HTML.

## What is Tailwind CSS?

Tailwind CSS takes a different approach to styling. Instead of component classes, it provides low-level utility classes.

## Configuration

Customize Tailwind in tailwind.config.js with theme extensions and custom utilities.

## Component Extraction

For repeated patterns, use @apply to create custom component classes.

## Best Practices

1. Use dark mode for accessibility
2. Extract components for reusability
3. Utilize the responsive prefixes (sm:, md:, lg:)
4. Use meaningful color names in your config
5. Keep utility classes organized
6. Use Tailwind's spacing scale consistently

## Performance

Tailwind automatically purges unused styles in production, so don't worry about CSS file size.

Tailwind CSS speeds up development and creates consistent, beautiful designs.`,
    date: '2024-02-01',
    author: 'Nisha Yadav',
    tags: ['CSS', 'Tailwind', 'Frontend'],
    readTime: 6,
  },
];


export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  readTime: number;
};

// export const blogPosts: BlogPost[] = [

//   {
//     id: 'react-hooks-guide',
//     title: 'Mastering React Hooks: A Comprehensive Guide',
//     excerpt: 'Learn how to use React Hooks effectively in your applications. From useState to useContext, we cover everything you need to know.',
//     content: 'React Hooks have revolutionized the way we write React components. Introduced in React 16.8, they allow you to use state and other React features without writing class components.',
//     date: '2024-03-15',
//     author: 'Nisha Yadav',
//     tags: ['React', 'JavaScript', 'Hooks'],
//     readTime: 8,
//   },

//   {
//     id: 'nodejs-express-api',
//     title: 'Building Scalable REST APIs with Node.js and Express',
//     excerpt: 'Discover best practices for building robust REST APIs using Node.js and Express. Learn about middleware, error handling, and deployment.',
//     content: 'Building APIs is a fundamental skill for modern developers. Node.js with Express makes it simple to create fast, scalable web applications.',
//     date: '2024-03-10',
//     author: 'Nisha Yadav',
//     tags: ['Node.js', 'Express', 'API'],
//     readTime: 10,
//   },
//   {
//     id: 'mongodb-best-practices',
//     title: 'MongoDB Best Practices for Production',
//     excerpt: 'Essential tips and best practices for using MongoDB in production environments. Learn about indexing, replication, and optimization.',
//     content: 'MongoDB is a powerful NoSQL database, but like any database, it requires proper configuration and practices to run smoothly in production.',
//     date: '2024-02-28',
//     author: 'Nisha Yadav',
//     tags: ['MongoDB', 'Database', 'Backend'],
//     readTime: 9,
//   },
//   {
//     id: 'typescript-guide',
//     title: 'Getting Started with TypeScript',
//     excerpt: 'A beginner-friendly guide to TypeScript. Learn how static typing can help you write better, more maintainable JavaScript code.',
//     content: 'TypeScript adds static typing to JavaScript, helping you catch errors before runtime and write more maintainable code.',
//     date: '2024-02-15',
//     author: 'Nisha Yadav',
//     tags: ['TypeScript', 'JavaScript', 'Frontend'],
//     readTime: 7,
//   },
//   {
//     id: 'tailwind-css-tips',
//     title: 'Tailwind CSS: Tips and Tricks for Faster Development',
//     excerpt: 'Discover advanced Tailwind CSS techniques to speed up your development process. Learn about customization, utilities, and best practices.',
//     content: 'Tailwind CSS is a utility-first CSS framework that helps you build modern designs without leaving your HTML.',
//     date: '2024-02-01',
//     author: 'Nisha Yadav',
//     tags: ['CSS', 'Tailwind', 'Frontend'],
//     readTime: 6,
//   },
// ];