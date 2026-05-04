export type NodeAccent =
  | 'node'
  | 'cyan'
  | 'blue'
  | 'amber'
  | 'pink'
  | 'violet'
  | 'yellow'
  | 'rose'
  | 'teal'
  | 'sky';

export interface NodeRoadmapCard {
  label: string;
  title: string;
  accent: NodeAccent;
  points: string[];
  note?: {
    title: string;
    body: string;
  };
}

export interface NodeRoadmapSection {
  id: string;
  title: string;
  caption: string;
  accent: NodeAccent;
  cards: NodeRoadmapCard[];
  code?: string;
}

export const nodeLearningLoop = [
  {
    step: '01',
    title: 'Understand',
    description: 'Learn the runtime, event loop, modules, and async model before adding frameworks.',
    accent: 'from-lime-300/80 via-emerald-400/80 to-cyan-300/80',
  },
  {
    step: '02',
    title: 'Build',
    description: 'Create raw HTTP servers, CLIs, Express APIs, auth flows, and database-backed projects.',
    accent: 'from-cyan-300/80 via-blue-400/80 to-sky-300/80',
  },
  {
    step: '03',
    title: 'Harden',
    description: 'Add validation, centralized errors, logging, security headers, and production configuration.',
    accent: 'from-pink-300/80 via-rose-400/80 to-orange-300/80',
  },
  {
    step: '04',
    title: 'Scale',
    description: 'Use Redis, queues, streams, clustering, containers, CI/CD, and observability.',
    accent: 'from-violet-300/80 via-fuchsia-400/80 to-indigo-300/80',
  },
  {
    step: '05',
    title: 'Ship',
    description: 'Deploy documented APIs with tests, monitoring, environment secrets, and maintainable structure.',
    accent: 'from-yellow-300/80 via-amber-400/80 to-emerald-300/80',
  },
];

export const nodeRoadmapSections: NodeRoadmapSection[] = [
  {
    id: '01',
    title: 'Foundations',
    caption: 'Start with JavaScript, Node itself, and the built-in modules that explain how backend code really runs.',
    accent: 'node',
    cards: [
      {
        label: 'Prerequisite',
        title: 'JavaScript for Node',
        accent: 'node',
        points: [
          'Variables, functions, objects, arrays, destructuring, and modules.',
          'Closures, this, prototypes, and scope behavior.',
          'Promises, async/await, error handling, and try/catch discipline.',
          'ES modules versus CommonJS and when each appears in projects.',
        ],
      },
      {
        label: 'Runtime',
        title: 'Node.js Core',
        accent: 'cyan',
        points: [
          'V8 runtime, libuv, non-blocking I/O, and the single-threaded event loop model.',
          'NPM scripts, package.json, semantic versions, lockfiles, and dependency hygiene.',
          'Process object, environment variables, stdin/stdout, and exit codes.',
          'Debugging with node inspect, console tooling, and source maps.',
        ],
      },
      {
        label: 'Core Modules',
        title: 'Built-in APIs',
        accent: 'blue',
        points: [
          'fs and fs/promises for files, directories, and streams.',
          'path and url for safe file paths and request parsing.',
          'http and https for servers without Express.',
          'events, buffer, crypto, zlib, and stream fundamentals.',
        ],
      },
    ],
    code: `import http from 'node:http';

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ ok: true }));
    return;
  }

  res.writeHead(404, { 'content-type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});`,
  },
  {
    id: '02',
    title: 'Event Loop and Async',
    caption: 'This is the part interviewers love because it separates memorized Node from understood Node.',
    accent: 'cyan',
    cards: [
      {
        label: 'Event Loop',
        title: 'Phases and Queues',
        accent: 'cyan',
        points: [
          'Timers, pending callbacks, poll, check, and close callbacks.',
          'Microtasks versus macrotasks: Promise callbacks before timers.',
          'process.nextTick priority and why it can starve the loop.',
          'setTimeout, setImmediate, and how ordering depends on context.',
        ],
        note: {
          title: 'Interview shortcut',
          body: 'Be able to explain why CPU-heavy synchronous work blocks every request even though Node handles I/O asynchronously.',
        },
      },
      {
        label: 'Async Patterns',
        title: 'Callbacks to Async/Await',
        accent: 'teal',
        points: [
          'Callback conventions: error-first callbacks and avoiding callback nesting.',
          'Promise chaining, Promise.all, Promise.allSettled, Promise.race, and Promise.any.',
          'Async/await with proper try/catch and predictable return values.',
          'Concurrent execution versus sequential awaits.',
        ],
      },
      {
        label: 'Streams',
        title: 'Large Data Handling',
        accent: 'sky',
        points: [
          'Readable, writable, duplex, and transform streams.',
          'Backpressure and why streams protect memory for large files.',
          'pipe and pipeline for safe composition.',
          'Buffers and binary data basics.',
        ],
      },
    ],
  },
  {
    id: '03',
    title: 'Backend Development',
    caption: 'Move from raw Node to practical HTTP APIs with Express and production-minded routing.',
    accent: 'blue',
    cards: [
      {
        label: 'Framework',
        title: 'Express.js',
        accent: 'blue',
        points: [
          'Routes, route params, query strings, request body parsing, and response helpers.',
          'Middleware order and how req, res, and next flow through the stack.',
          'Routers for splitting features by domain.',
          'Centralized error handling middleware.',
        ],
      },
      {
        label: 'API Design',
        title: 'REST and HTTP',
        accent: 'cyan',
        points: [
          'HTTP methods: GET, POST, PUT, PATCH, DELETE.',
          'Status codes: 200, 201, 204, 400, 401, 403, 404, 409, 500.',
          'Resource naming, pagination, filtering, sorting, and consistent error shapes.',
          'OpenAPI or Swagger for documentation.',
        ],
      },
      {
        label: 'Validation',
        title: 'Request Safety',
        accent: 'pink',
        points: [
          'Validate incoming bodies, params, and query strings.',
          'Use schema validators such as Zod, Joi, or express-validator.',
          'Normalize API errors so clients can handle them cleanly.',
          'Never trust client-side validation alone.',
        ],
      },
    ],
    code: `import express from 'express';

const app = express();
app.use(express.json());

app.get('/api/tasks', async (_req, res, next) => {
  try {
    const tasks = await taskService.list();
    res.json({ data: tasks });
  } catch (error) {
    next(error);
  }
});

app.use((error, _req, res, _next) => {
  res.status(error.status ?? 500).json({
    error: error.message ?? 'Internal server error',
  });
});`,
  },
  {
    id: '04',
    title: 'Databases',
    caption: 'Learn one document database, one SQL database, and the modeling tradeoffs between them.',
    accent: 'amber',
    cards: [
      {
        label: 'NoSQL',
        title: 'MongoDB and Mongoose',
        accent: 'amber',
        points: [
          'Documents, collections, schemas, models, and indexes.',
          'CRUD with Mongoose, schema validation, references, and population.',
          'Aggregation pipeline basics for reporting and transformation.',
          'Avoid unbounded documents and missing indexes on hot queries.',
        ],
      },
      {
        label: 'SQL',
        title: 'PostgreSQL and Prisma',
        accent: 'blue',
        points: [
          'Tables, relations, joins, constraints, and transactions.',
          'Migrations and generated client usage with Prisma.',
          'Connection pooling and environment-based connection strings.',
          'Choose SQL when relational integrity matters.',
        ],
      },
      {
        label: 'Cache',
        title: 'Redis',
        accent: 'teal',
        points: [
          'Key-value caching for expensive reads and external API responses.',
          'TTL, invalidation, cache-aside pattern, and avoiding stale data.',
          'Session storage and rate-limit counters.',
          'Foundation for queues with Bull or BullMQ.',
        ],
      },
    ],
  },
  {
    id: '05',
    title: 'Authentication and Security',
    caption: 'Backend credibility comes from getting auth, secrets, and request safety right.',
    accent: 'pink',
    cards: [
      {
        label: 'JWT',
        title: 'Token Authentication',
        accent: 'pink',
        points: [
          'JWT structure: header, payload, and signature.',
          'Access tokens, refresh tokens, expiry, and rotation.',
          'Auth middleware that verifies tokens on protected routes.',
          'Never store sensitive secrets in token payloads.',
        ],
      },
      {
        label: 'Passwords',
        title: 'Hashing and Cookies',
        accent: 'rose',
        points: [
          'Hash passwords with bcrypt or argon2 before storing.',
          'Use HttpOnly, Secure, SameSite cookies for browser sessions.',
          'Understand server-side sessions with express-session.',
          'Protect login and reset flows from brute force.',
        ],
      },
      {
        label: 'Hardening',
        title: 'Security Basics',
        accent: 'yellow',
        points: [
          'CORS configuration, Helmet security headers, and rate limiting.',
          'Input sanitization and parameterized SQL queries.',
          'Secrets in environment variables or secret managers.',
          'Audit dependencies and avoid leaking stack traces in production.',
        ],
      },
    ],
  },
  {
    id: '06',
    title: 'Architecture',
    caption: 'Organize code so it stays readable after the third feature and testable after the tenth.',
    accent: 'violet',
    cards: [
      {
        label: 'Structure',
        title: 'MVC and Service Layers',
        accent: 'violet',
        points: [
          'Separate routes, controllers, services, repositories, and models.',
          'Keep business logic out of route handlers.',
          'Use dependency direction that keeps core logic framework-light.',
          'Prefer small modules with clear ownership.',
        ],
      },
      {
        label: 'Resilience',
        title: 'Errors and Logging',
        accent: 'rose',
        points: [
          'Custom error classes with HTTP status and stable error codes.',
          'Async wrappers or Express 5 promise-aware handlers.',
          'Structured logging with Winston or Pino.',
          'Request logging, correlation IDs, and useful production traces.',
        ],
      },
      {
        label: 'Files',
        title: 'Uploads and Storage',
        accent: 'amber',
        points: [
          'Multer for multipart file handling.',
          'Cloudinary or S3 for durable asset storage.',
          'Validate file size, type, and user permissions.',
          'Use streaming uploads for large files when possible.',
        ],
      },
    ],
  },
  {
    id: '07',
    title: 'Performance and Real-Time',
    caption: 'Handle load, long work, live connections, and background tasks without blocking users.',
    accent: 'yellow',
    cards: [
      {
        label: 'Performance',
        title: 'Scaling Techniques',
        accent: 'yellow',
        points: [
          'Avoid blocking the event loop with CPU-heavy work.',
          'Use clustering, PM2, or process managers for multi-core utilization.',
          'Profile bottlenecks with Node flags and application metrics.',
          'Use compression, pagination, caching, and efficient database indexes.',
        ],
      },
      {
        label: 'CPU Work',
        title: 'Workers and Processes',
        accent: 'violet',
        points: [
          'Worker threads for parallel CPU-bound tasks.',
          'Child processes for isolated external work.',
          'Queues for deferring email, image, and report jobs.',
          'Streams for memory-safe file and data processing.',
        ],
      },
      {
        label: 'Real Time',
        title: 'WebSockets and Queues',
        accent: 'rose',
        points: [
          'Socket.io rooms, namespaces, events, and connection lifecycle.',
          'WebSocket authentication and reconnect behavior.',
          'BullMQ with Redis for background jobs.',
          'Event-driven architecture for decoupled systems.',
        ],
      },
    ],
  },
  {
    id: '08',
    title: 'Testing and DevOps',
    caption: 'Turn a working API into something other people can trust, deploy, and maintain.',
    accent: 'teal',
    cards: [
      {
        label: 'Testing',
        title: 'Jest and Supertest',
        accent: 'teal',
        points: [
          'Unit tests for utilities and services.',
          'Integration tests for Express routes with Supertest.',
          'Mock external APIs and isolate database state per test.',
          'Test auth, validation, happy paths, and failure paths.',
        ],
      },
      {
        label: 'Deployment',
        title: 'Docker and CI/CD',
        accent: 'sky',
        points: [
          'Dockerfile and docker-compose for repeatable local services.',
          'GitHub Actions for lint, typecheck, test, and build pipelines.',
          'Deploy on Render, Railway, Fly.io, AWS, or VPS environments.',
          'Manage production environment variables and health checks.',
        ],
      },
      {
        label: 'Modern Tools',
        title: 'TypeScript and Tooling',
        accent: 'blue',
        points: [
          'TypeScript types for requests, responses, services, and repositories.',
          'ESLint and Prettier for code consistency.',
          'OpenAPI documentation generated from schemas where possible.',
          'GraphQL as an optional alternative when clients need flexible queries.',
        ],
      },
    ],
  },
];

export const nodeStack = [
  { title: 'Node.js + Express', description: 'Core runtime plus a minimal, flexible HTTP framework.' },
  { title: 'MongoDB + Mongoose', description: 'Document database with schema modeling for common portfolio APIs.' },
  { title: 'PostgreSQL + Prisma', description: 'Relational database and typed ORM for production CRUD systems.' },
  { title: 'JWT Auth', description: 'Stateless auth with access and refresh token flows.' },
  { title: 'Redis', description: 'Caching, sessions, rate-limit counters, and queue backing store.' },
  { title: 'Docker', description: 'Portable development and deployment environments.' },
  { title: 'TypeScript', description: 'Types that make API contracts clearer and refactors less painful.' },
  { title: 'Jest + Supertest', description: 'Fast service tests and route-level integration tests.' },
];

export const nodeInterviewTopics = [
  'Event loop',
  'Microtasks vs macrotasks',
  'Middleware order',
  'REST API design',
  'JWT authentication',
  'Password hashing',
  'Error handling',
  'Streams and buffers',
  'MongoDB indexes',
  'SQL transactions',
  'Redis caching',
  'Worker threads',
  'Clustering',
  'Docker basics',
  'Testing with Supertest',
];

export const nodeProjects = [
  {
    level: 'Beginner',
    title: 'Raw HTTP JSON Server',
    description: 'Build routing, methods, status codes, and JSON responses with only the built-in http module.',
    accent: 'from-lime-300/80 via-emerald-400/80 to-cyan-300/80',
  },
  {
    level: 'Beginner',
    title: 'File System CLI',
    description: 'Read, write, watch, and stream files using fs, path, process args, and useful terminal output.',
    accent: 'from-lime-300/80 via-emerald-400/80 to-cyan-300/80',
  },
  {
    level: 'Intermediate',
    title: 'Blog or Todo REST API',
    description: 'Build CRUD with Express, MongoDB or PostgreSQL, validation, errors, and API documentation.',
    accent: 'from-cyan-300/80 via-blue-400/80 to-sky-300/80',
  },
  {
    level: 'Advanced',
    title: 'JWT Auth System',
    description: 'Implement register, login, protected routes, refresh tokens, bcrypt hashing, CORS, and rate limits.',
    accent: 'from-pink-300/80 via-rose-400/80 to-orange-300/80',
  },
  {
    level: 'Advanced',
    title: 'Real-Time Chat App',
    description: 'Use Socket.io for rooms, typing indicators, message history, and authenticated connections.',
    accent: 'from-violet-300/80 via-fuchsia-400/80 to-indigo-300/80',
  },
  {
    level: 'Advanced',
    title: 'Scalable API with Jobs',
    description: 'Add Redis caching, BullMQ queues, workers, Docker, tests, and CI/CD deployment.',
    accent: 'from-yellow-300/80 via-amber-400/80 to-emerald-300/80',
  },
];

export const nodeCommonMistakes = [
  {
    title: 'Skipping the event loop',
    description: 'Without it, async behavior, performance problems, and interview questions stay mysterious.',
  },
  {
    title: 'Only watching tutorials',
    description: 'Build variations from scratch after each tutorial so the concepts become usable.',
  },
  {
    title: 'Ignoring error handling',
    description: 'Unhandled failures create fragile APIs. Centralize errors early and test failure paths.',
  },
  {
    title: 'Storing secrets casually',
    description: 'Keep credentials out of source code and use environment variables or secret managers.',
  },
];

export const nodeReferences = [
  { title: 'Node.js Docs', subtitle: 'Runtime and core APIs', href: 'https://nodejs.org/docs/latest/api/' },
  { title: 'Express Docs', subtitle: 'Routing and middleware', href: 'https://expressjs.com/' },
  { title: 'Mongoose Docs', subtitle: 'MongoDB modeling', href: 'https://mongoosejs.com/docs/' },
  { title: 'Prisma Docs', subtitle: 'Typed SQL workflows', href: 'https://www.prisma.io/docs' },
  { title: 'Jest Docs', subtitle: 'Testing fundamentals', href: 'https://jestjs.io/docs/getting-started' },
  { title: 'Docker Docs', subtitle: 'Containerized apps', href: 'https://docs.docker.com/' },
];
