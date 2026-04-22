export const navLinks = [
  { title: 'Home', href: '#home' },
  { title: 'About', href: '#about' },
  { title: 'Skills', href: '#skills' },
  // { title: 'Blog', href: '#blog' },
  { title: 'Blog', href: 'blog' },
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

// export type BlogPost = {
//   id: string;
//   title: string;
//   excerpt: string;
//   content: string;
//   date: string;
//   author: string;
//   tags: string[];
//   readTime: number;
// };

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
