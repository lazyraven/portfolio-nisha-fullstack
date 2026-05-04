export interface ReactRoadmapCard {
  label: string;
  title: string;
  points: string[];
  accent: string;
  note?: {
    title: string;
    body: string;
  };
}

export interface ReactRoadmapSection {
  id: string;
  title: string;
  caption: string;
  accent: string;
  cards: ReactRoadmapCard[];
}

export const reactLearningLoop = [
  { step: '01', title: 'JavaScript First', description: 'Lock in ES6+, async code, closures, and array methods.', accent: 'from-cyan-400 to-sky-500' },
  { step: '02', title: 'Core React', description: 'Build components, props, state, effects, and forms.', accent: 'from-emerald-400 to-teal-500' },
  { step: '03', title: 'Project Flow', description: 'Add routing, APIs, styling, and clean component structure.', accent: 'from-violet-400 to-fuchsia-500' },
  { step: '04', title: 'Production Skills', description: 'Practice performance, testing, Next.js, and TypeScript.', accent: 'from-amber-400 to-orange-500' },
  { step: '05', title: 'Interview Polish', description: 'Explain rendering, hooks, state choices, and real app tradeoffs.', accent: 'from-pink-400 to-rose-500' },
];

export const reactRoadmapSections: ReactRoadmapSection[] = [
  {
    id: '01',
    title: 'Strong Foundations',
    caption: 'The pre-React checklist that keeps hooks and components from feeling mysterious.',
    accent: 'react',
    cards: [
      {
        label: 'Must-have before React',
        title: 'JS Prerequisites',
        accent: 'react',
        points: [
          'ES6+: arrow functions, destructuring, spread, and rest',
          'Promises and async/await for API-heavy apps',
          'Closures and the event loop so hooks make sense',
          'Array methods: map, filter, reduce, find, and some',
          'DOM basics for refs, events, and debugging',
        ],
        note: {
          title: 'Important',
          body: 'If these are weak, React feels confusing. Solid JavaScript makes the React learning curve much smoother.',
        },
      },
      {
        label: 'Why these matter',
        title: 'Foundation to Framework',
        accent: 'react',
        points: [
          'React heavily uses destructuring in props',
          'async/await appears in almost every API flow',
          'Closures underpin useState, useEffect, and custom hooks',
          'map() renders lists in almost every component',
          'DOM knowledge helps debug refs and browser behavior',
        ],
      },
    ],
  },
  {
    id: '02',
    title: 'Core React',
    caption: 'The essential building blocks: components, JSX, local state, forms, and effects.',
    accent: 'green',
    cards: [
      {
        label: 'Building blocks',
        title: 'Components & JSX',
        accent: 'green',
        points: [
          'Functional components as the modern standard',
          'JSX syntax: HTML-like structure inside JavaScript',
          'Props for parent-to-child data flow',
          'PropTypes or TypeScript for type safety',
          'Keys for correct and stable list rendering',
        ],
      },
      {
        label: 'State management local',
        title: 'useState & Forms',
        accent: 'green',
        points: [
          'useState for reactive component state',
          'Derived state computed from existing state',
          'Controlled components with input tied to state',
          'Batched updates in React 18+',
          'Lazy state initializers for expensive setup',
        ],
      },
      {
        label: 'Side effects',
        title: 'useEffect',
        accent: 'green',
        points: [
          'Runs after render to sync with external systems',
          'Cleanup functions prevent leaks and stale subscriptions',
          'Dependency arrays control when effects run',
          'Empty array runs once; listed values rerun on change',
          'No dependency array runs after every render',
        ],
        note: {
          title: 'Interview favorite',
          body: 'useEffect runs after paint. Cleanup runs before the next effect and when the component unmounts.',
        },
      },
    ],
  },
  {
    id: '03-04',
    title: 'Component Architecture & Routing',
    caption: 'Reusable UI, shared state decisions, and routes that make projects feel like real apps.',
    accent: 'cyan',
    cards: [
      {
        label: 'Reusability',
        title: 'Component Design',
        accent: 'cyan',
        points: [
          'Reusable components with single responsibility',
          'Lifting state up when siblings need shared data',
          'Prop drilling and when it becomes painful',
          'Composition over inheritance',
          'children prop for flexible layouts',
        ],
        note: {
          title: 'Shared state answer',
          body: 'Start by lifting state up, then use Context or a store like Redux or Zustand when app scale justifies it.',
        },
      },
      {
        label: 'Must for projects',
        title: 'React Router',
        accent: 'cyan',
        points: [
          'BrowserRouter, Routes, and Route setup',
          'Dynamic routes like /post/:id',
          'Nested routes for layouts',
          'Protected routes for auth guards',
          'useNavigate, useParams, and useLocation',
        ],
      },
    ],
  },
  {
    id: '05',
    title: 'State Management',
    caption: 'Know local, shared, global, and server state so every tool has a clear job.',
    accent: 'purple',
    cards: [
      {
        label: 'Start with',
        title: 'Context API',
        accent: 'purple',
        points: [
          'createContext to define a context',
          'Provider wraps components with shared data',
          'useContext consumes data in any child',
          'Good for theme, auth, and language',
          'Can trigger broad re-renders when values change',
        ],
      },
      {
        label: 'Industry standard',
        title: 'Redux Toolkit',
        accent: 'purple',
        points: [
          'createSlice keeps reducers and actions together',
          'configureStore creates a single source of truth',
          'useSelector reads state',
          'useDispatch triggers actions',
          'RTK Query handles structured data fetching',
        ],
      },
      {
        label: 'Lightweight alternative',
        title: 'Zustand',
        accent: 'purple',
        points: [
          'create() defines a store in one function',
          'Less boilerplate than Redux',
          'Selective subscriptions reduce re-renders',
          'Middleware supports persist and devtools',
          'Great for small and medium projects',
        ],
      },
    ],
  },
  {
    id: '06-07',
    title: 'Forms, Validation, and API Handling',
    caption: 'The daily work of React apps: collect input, validate it, fetch data, and show states clearly.',
    accent: 'orange',
    cards: [
      {
        label: 'Forms',
        title: 'React Hook Form + Yup',
        accent: 'orange',
        points: [
          'Controlled vs uncontrolled components',
          'React Hook Form for minimal re-renders',
          'register, handleSubmit, and formState',
          'Yup schemas for validation rules',
          'Error messages, touched states, and disabled states',
        ],
      },
      {
        label: 'Modern approach',
        title: 'TanStack Query',
        accent: 'orange',
        points: [
          'useQuery for fetch, cache, and sync',
          'useMutation for POST, PUT, PATCH, and DELETE',
          'Automatic background refetching',
          'Built-in loading, error, and success states',
          'Stale-while-revalidate caching model',
        ],
      },
    ],
  },
  {
    id: '08-09',
    title: 'Styling and Performance',
    caption: 'Ship interfaces that look consistent and stay responsive as the app grows.',
    accent: 'pink',
    cards: [
      {
        label: 'Most popular now',
        title: 'Tailwind CSS',
        accent: 'pink',
        points: [
          'Utility-first styling with fewer custom CSS files',
          'Responsive prefixes like sm, md, and lg',
          'Dark mode with dark: variants',
          'JIT compiler ships only used classes',
          'Common choice in modern teams and portfolios',
        ],
      },
      {
        label: 'Memoization',
        title: 'React.memo & useMemo',
        accent: 'yellow',
        points: [
          'React.memo skips re-render when props are equal',
          'useMemo caches expensive calculations',
          'useCallback stabilizes function references',
          'Use optimization only for actual bottlenecks',
          'Check parent renders, prop identity, context, and mutations',
        ],
      },
      {
        label: 'Code loading',
        title: 'Lazy Loading & Splitting',
        accent: 'yellow',
        points: [
          'React.lazy loads components on demand',
          'Suspense shows fallback UI while loading',
          'Dynamic import() enables splitting',
          'Route-based splitting loads each page separately',
          'Bundle analysis identifies heavy chunks',
        ],
      },
    ],
  },
  {
    id: '10-11',
    title: 'Advanced React and Next.js',
    caption: 'Level up from component usage to patterns, frameworks, testing, and production tooling.',
    accent: 'teal',
    cards: [
      {
        label: 'Custom hooks',
        title: 'Advanced Patterns',
        accent: 'teal',
        points: [
          'Custom hooks for reusable stateful logic',
          'useReducer for complex state transitions',
          'Error boundaries for render errors',
          'Portals for UI outside the DOM tree',
          'Suspense for async rendering patterns',
        ],
      },
      {
        label: 'Framework layer',
        title: 'Next.js',
        accent: 'teal',
        points: [
          'App Router and file-based routing',
          'SSR for server-side rendering',
          'SSG for static site generation',
          'API routes for backend features in the same repo',
          'Server Components in React 18+ apps',
        ],
      },
      {
        label: 'Testing and build',
        title: 'Testing & Tools',
        accent: 'teal',
        points: [
          'Jest or Vitest for unit tests',
          'React Testing Library for user-centric testing',
          'Vite for fast HMR and modern builds',
          'TypeScript as a near-mandatory industry skill',
          'ESLint and Prettier for code quality',
        ],
      },
    ],
  },
];

export const reactTodoExample = `import { useEffect, useState } from 'react';

export default function TodoApp() {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem('todos') || '[]');
  });
  const [input, setInput] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  return (
    <div>
      <input value={input} onChange={(event) => setInput(event.target.value)} />
      <button onClick={addTodo}>Add</button>
      {todos.map((todo) => (
        <div key={todo.id} onClick={() => toggleTodo(todo.id)}>
          {todo.text} {todo.done ? 'done' : ''}
        </div>
      ))}
    </div>
  );
}`;

export const reactInterviewTopics = [
  'Virtual DOM',
  'Reconciliation',
  'useEffect behavior',
  'State vs Props',
  'Controlled vs Uncontrolled',
  'useMemo / useCallback',
  'React.memo',
  'Custom Hooks',
  'Context API',
  'Redux vs Zustand',
  'Protected Routes',
  'Performance optimization',
  'Error Boundaries',
  'Lazy Loading',
  'Server Components',
  'useReducer',
];

export const reactStack = [
  { title: 'React + Next.js', description: 'Core UI library plus fullstack framework with SSR and SSG.', accent: 'react' },
  { title: 'Redux Toolkit / Zustand', description: 'Global state management for complex apps.', accent: 'purple' },
  { title: 'TanStack Query', description: 'Server state, caching, and API syncing.', accent: 'green' },
  { title: 'Tailwind CSS', description: 'Utility-first styling and fast responsive UI work.', accent: 'cyan' },
  { title: 'React Hook Form', description: 'High-performance forms with schema validation.', accent: 'orange' },
  { title: 'TypeScript', description: 'Type safety for large codebases and better refactoring.', accent: 'yellow' },
];

export const reactLearningOrder = [
  { step: '01', title: 'Core React', subtitle: 'Components + Hooks', accent: 'react' },
  { step: '02', title: 'Routing', subtitle: 'React Router', accent: 'cyan' },
  { step: '03', title: 'Forms + API', subtitle: 'Hook Form + Fetch', accent: 'orange' },
  { step: '04', title: 'State Mgmt', subtitle: 'Redux / Zustand', accent: 'purple' },
  { step: '05', title: 'Styling', subtitle: 'Tailwind CSS', accent: 'pink' },
  { step: '06', title: 'Performance', subtitle: 'Memo + Lazy', accent: 'yellow' },
  { step: '07', title: 'Next.js', subtitle: 'SSR + SSG', accent: 'teal' },
  { step: '08', title: 'TypeScript', subtitle: 'Type safety', accent: 'react' },
  { step: '09', title: 'Testing', subtitle: 'Jest + RTL', accent: 'green' },
];

export const reactCommonGaps = [
  { title: 'Reusable Components', description: 'Write single-purpose, composable components from the start.', accent: 'react' },
  { title: 'Clean Folder Structure', description: 'Use feature-based or atomic structure instead of one giant folder.', accent: 'orange' },
  { title: 'Performance Thinking Early', description: 'Avoid premature optimization but understand re-render triggers.', accent: 'yellow' },
  { title: 'Real-World API Handling', description: 'Loading states, error states, and empty states all matter.', accent: 'green' },
  { title: 'Error Handling', description: 'Use error boundaries, try/catch in async flows, and fallback UIs.', accent: 'purple' },
];

export const reactReferences = [
  { title: 'React Docs', subtitle: 'Official modern React documentation', href: 'https://react.dev/' },
  { title: 'Next.js Docs', subtitle: 'App Router, rendering, and deployment', href: 'https://nextjs.org/docs' },
  { title: 'Frontend Mentor', subtitle: 'Real project practice', href: 'https://www.frontendmentor.io/' },
  { title: 'TanStack Query', subtitle: 'Server state and caching', href: 'https://tanstack.com/query' },
  { title: 'Redux Toolkit', subtitle: 'Modern Redux patterns', href: 'https://redux-toolkit.js.org/' },
  { title: 'React Testing Library', subtitle: 'User-focused component tests', href: 'https://testing-library.com/docs/react-testing-library/intro/' },
];
