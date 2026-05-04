export interface JavaScriptRoadmapCard {
  label: string;
  title: string;
  points: string[];
  accent: string;
  note?: {
    title: string;
    body: string;
  };
}

export interface JavaScriptRoadmapSection {
  id: string;
  title: string;
  caption: string;
  accent: string;
  cards: JavaScriptRoadmapCard[];
  code?: string;
}

export const javascriptLearningLoop = [
  { step: '01', title: 'Learn Concept', description: 'Read the why, not just the syntax.', accent: 'from-amber-400 to-orange-500' },
  { step: '02', title: 'Practice', description: 'Use tiny problems to lock in the pattern.', accent: 'from-emerald-400 to-teal-500' },
  { step: '03', title: 'Build Project', description: 'Apply the idea in UI, APIs, or tooling.', accent: 'from-sky-400 to-cyan-500' },
  { step: '04', title: 'Revise', description: 'Turn weak spots into interview answers.', accent: 'from-violet-400 to-fuchsia-500' },
  { step: '05', title: 'Repeat', description: 'Cycle again until it feels natural.', accent: 'from-pink-400 to-rose-500' },
];

export const javascriptRoadmapSections: JavaScriptRoadmapSection[] = [
  {
    id: '01',
    title: 'Core Fundamentals',
    caption: 'Build the execution model first',
    accent: 'amber',
    cards: [
      {
        label: 'Variables & Types',
        title: 'Data Foundation',
        accent: 'amber',
        points: [
          'var, let, const and how scope changes their behavior',
          'Primitive values vs reference values',
          'Type coercion and == vs ===',
          'Operators, expressions, and control flow',
          'Loops with for, while, for...of, and for...in',
        ],
      },
      {
        label: 'Execution Model',
        title: 'How JavaScript Runs',
        accent: 'amber',
        points: [
          'Execution context: global and function scope',
          'Call stack and LIFO execution order',
          'Hoisting for declarations and function definitions',
          'Block scope and the temporal dead zone',
          'Reading code by tracing what exists when',
        ],
      },
      {
        label: 'Functions Basics',
        title: 'Function Types',
        accent: 'amber',
        points: [
          'Function declaration vs function expression',
          'Arrow functions and lexical this',
          'Parameters, defaults, and return values',
          'Start practice with reverse string and FizzBuzz',
          'Move quickly into array-based exercises',
        ],
      },
    ],
  },
  {
    id: '02',
    title: 'Functions & Advanced Concepts',
    caption: 'The material that keeps showing up in real interviews',
    accent: 'orange',
    code: `function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}`,
    cards: [
      {
        label: 'Interview Core',
        title: 'Closures & Scope',
        accent: 'orange',
        points: [
          'Closures as a function plus its lexical environment',
          'Higher-order functions and callback composition',
          'Private state, memoization, and module patterns',
          'Practice with counters and simple factories',
        ],
        note: {
          title: 'Why this matters',
          body: 'Closures power debounce, throttle, memoization, hooks, and a lot of the "how does this actually work?" interview questions.',
        },
      },
      {
        label: 'Critical for Interviews',
        title: 'this, bind, call, apply',
        accent: 'orange',
        points: [
          'this in global, method, constructor, and arrow contexts',
          'bind for a permanent context',
          'call and apply for immediate invocation',
          'Write a tiny custom bind implementation',
        ],
      },
      {
        label: 'Performance Pattern',
        title: 'Debounce & Throttle',
        accent: 'orange',
        points: [
          'Debounce delays work until input settles',
          'Throttle limits how often work can run',
          'Use them in search, resize, and scroll interactions',
          'Treat them as closure plus timing problems',
        ],
      },
    ],
  },
  {
    id: '03',
    title: 'Arrays & Objects',
    caption: 'Daily-driver data skills',
    accent: 'emerald',
    cards: [
      {
        label: 'Heavy Usage',
        title: 'Array Methods',
        accent: 'emerald',
        points: [
          'map, filter, reduce, find, some, and every',
          'sort, slice, splice, flat, and flatMap',
          'Group, transform, and flatten real data',
          'Practice with grouping by property and deduping',
        ],
      },
      {
        label: 'Data Handling',
        title: 'Objects & Spread',
        accent: 'emerald',
        points: [
          'Object.keys, values, and entries',
          'Destructuring for arrays and objects',
          'Spread and rest syntax',
          'Shallow copy vs deep copy',
          'Merge patterns you will use constantly in React',
        ],
      },
    ],
  },
  {
    id: '04',
    title: 'Asynchronous JavaScript',
    caption: 'Where the language starts to feel alive',
    accent: 'sky',
    cards: [
      {
        label: 'Foundation',
        title: 'Callbacks to Promises',
        accent: 'sky',
        points: [
          'Callbacks and the shape of async control flow',
          'Promise chaining with then, catch, and finally',
          'Promise.all, race, allSettled, and any',
          'Chaining vs nesting',
        ],
      },
      {
        label: 'Modern Standard',
        title: 'async / await',
        accent: 'sky',
        points: [
          'async functions always return a promise',
          'await reads sequentially while staying non-blocking',
          'Use try/catch around async flows',
          'Combine fetch with Promise.all for parallel work',
        ],
      },
      {
        label: 'Deep Internals',
        title: 'Event Loop',
        accent: 'sky',
        points: [
          'Call stack, Web APIs, and task queues',
          'Microtasks vs macrotasks',
          'Why promises resolve before setTimeout(0)',
          'Single-threaded but non-blocking execution',
        ],
        note: {
          title: 'Interview favorite',
          body: 'If a promise callback and a setTimeout callback are both ready, the promise callback runs first because microtasks flush before the next macrotask.',
        },
      },
    ],
  },
  {
    id: '05-08',
    title: 'Engine, OOP, Modern JS, and Browser APIs',
    caption: 'The stuff that separates memorizing from understanding',
    accent: 'violet',
    cards: [
      {
        label: 'Internals',
        title: 'Engine & Memory',
        accent: 'violet',
        points: [
          'V8 at a high level: parse, optimize, run',
          'Stack vs heap memory',
          'Garbage collection and common leak patterns',
          'Detached DOM nodes and runaway closures',
        ],
      },
      {
        label: 'Prototype Chain',
        title: 'OOP in JavaScript',
        accent: 'pink',
        points: [
          'prototype vs __proto__ and property lookup',
          'class syntax, constructors, extends, and super',
          'Encapsulation with private fields',
          'Know the model under the syntax sugar',
        ],
      },
      {
        label: 'Used Everywhere',
        title: 'ES6+ Syntax',
        accent: 'teal',
        points: [
          'Template literals and destructuring',
          'Modules with import and export',
          'Optional chaining and nullish coalescing',
          'Dynamic imports and lazy loading',
          'WeakMap, WeakSet, and Symbol when needed',
        ],
      },
      {
        label: 'UI Building',
        title: 'DOM & Browser APIs',
        accent: 'rose',
        points: [
          'querySelector and DOM traversal',
          'Event handling and delegation',
          'Forms, validation, localStorage, and sessionStorage',
          'Build a todo app, modal, and form validator',
        ],
      },
    ],
  },
  {
    id: '09-14',
    title: 'Performance, Patterns, APIs, Testing, Tooling',
    caption: 'How JavaScript becomes production-ready',
    accent: 'lime',
    cards: [
      {
        label: 'Better UX',
        title: 'Performance',
        accent: 'blue',
        points: [
          'Revisit debounce and throttle with intent',
          'Lazy loading and code splitting',
          'Memoization and caching',
          'Virtualization for large lists',
        ],
      },
      {
        label: 'Scalable Apps',
        title: 'Design Patterns',
        accent: 'lime',
        points: [
          'Module, factory, singleton, observer, and strategy',
          'Pick patterns that reduce complexity, not add ceremony',
          'Map patterns to real UI and data problems',
        ],
      },
      {
        label: 'Real Projects',
        title: 'Working with APIs',
        accent: 'sky',
        points: [
          'REST verbs, headers, JSON, and auth basics',
          'Retry and fallback thinking',
          'Build with weather, GitHub, or search APIs',
        ],
      },
      {
        label: 'Optional but Valuable',
        title: 'Testing & Tooling',
        accent: 'violet',
        points: [
          'Unit testing with Jest or Vitest',
          'Mocking API calls',
          'Vite, Babel, ESLint, and Prettier',
          'Use tooling to tighten feedback loops',
        ],
      },
    ],
  },
];

export const javascriptInterviewTopics = [
  'Closures',
  'this keyword',
  'Event loop',
  'Promises vs async/await',
  'Hoisting',
  'Prototype chain',
  'Debounce / throttle',
  'Deep vs shallow copy',
  'Garbage collection',
  'Event delegation',
  'Optional chaining',
  'map / filter / reduce',
  'Memoization',
  'Module pattern',
  'OOP and inheritance',
  'var vs let vs const',
];

export const javascriptRealWorldFocus = [
  'Async/await with clean API handling',
  'Array transforms like map, filter, reduce',
  'DOM events and browser-side state',
  'ES6+ syntax that every codebase assumes',
  'Modules and import/export structure',
  'State shaping and immutable updates',
];

export const javascriptNextSteps = [
  {
    title: 'React',
    description: 'Turn core JavaScript into component thinking, hooks, state, and UI composition.',
    accent: 'from-sky-400 to-cyan-500',
  },
  {
    title: 'Node.js',
    description: 'Use the same language on the server for APIs, automation, and backend workflows.',
    accent: 'from-emerald-400 to-lime-500',
  },
  {
    title: 'TypeScript',
    description: 'Add types once the language feels natural so larger codebases stay easier to trust.',
    accent: 'from-indigo-400 to-violet-500',
  },
];

export const javascriptReferences = [
  { title: 'MDN Web Docs', subtitle: 'Best reference for language and browser APIs', href: 'https://developer.mozilla.org/' },
  { title: 'JavaScript.info', subtitle: 'Deep tutorials for modern JavaScript', href: 'https://javascript.info/' },
  { title: 'ECMAScript Spec', subtitle: 'Official language specification', href: 'https://tc39.es/ecma262/' },
  { title: "You Don't Know JS Yet", subtitle: 'Excellent free book series for fundamentals', href: 'https://github.com/getify/You-Dont-Know-JS' },
  { title: 'LeetCode', subtitle: 'Useful when you want timed problem practice', href: 'https://leetcode.com/' },
  { title: 'HackerRank', subtitle: 'Solid drills for syntax and problem solving', href: 'https://www.hackerrank.com/' },
];
