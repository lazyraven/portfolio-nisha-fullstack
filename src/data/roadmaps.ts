export interface Topic {
  title: string;
  notes: string;
  subtopics?: string[];
}

export interface Roadmap {
  id: string;
  title: string;
  description: string;
  topics: Topic[];
  iframeUrl?: string;
  viewUrl?: boolean;
}

export const roadmaps: Roadmap[] = [
  {
    id: 'react',
    title: 'React Roadmap',
    description: 'Master frontend development with React - from basics to advanced patterns',
    topics: [
      {
        title: 'Fundamentals',
        notes: `## Core Concepts

Learn the building blocks of React:

- **JSX**: JavaScript XML - write HTML-like syntax in JavaScript
- **Components**: Reusable UI pieces (functional components recommended)
- **Props**: Pass data from parent to child components
- **State**: Internal component data that triggers re-renders

### Code Example
\`\`\`jsx
function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}
\`\`\``,
        subtopics: ['JSX Basics', 'Component Types', 'Props & State', 'Event Handling'],
      },
      {
        title: 'Hooks',
        notes: `## React Hooks

Master the essential hooks:

- **useState**: Manage local component state
- **useEffect**: Handle side effects (data fetching, subscriptions)
- **useContext**: Access context without nesting
- **useRef**: Reference DOM elements or persist values

### Best Practices
- Only call hooks at the top level
- Don't call hooks inside loops or conditions
- Use custom hooks to share logic`,
        subtopics: ['useState', 'useEffect', 'useContext', 'useRef', 'Custom Hooks'],
      },
      {
        title: 'State Management',
        notes: `## Managing Application State

Choose the right state management approach:

### Local State
- useState for component-level state
- useReducer for complex state logic

### Global State
- **Context API**: Built-in solution for simple global state
- **Redux**: Predictable state container for large apps
- **Zustand**: Lightweight alternative with simple API
- **Jotai**: Atomic state management`,
        subtopics: ['Context API', 'Redux Toolkit', 'Zustand', 'Jotai'],
      },
      {
        title: 'Performance',
        notes: `## Optimizing React Apps

### Rendering Optimization
- **React.memo**: Memoize components
- **useMemo**: Cache expensive calculations
- **useCallback**: Stabilize function references

### Code Splitting
- **React.lazy**: Load components on demand
- **Suspense**: Show fallback while loading

### Profiling
- Use React DevTools Profiler
- Identify and fix re-render issues`,
        subtopics: ['React.memo', 'useMemo/useCallback', 'Code Splitting', 'Profiling'],
      },
    ],
  },
  {
    id: 'aws',
    title: 'AWS Cloud Roadmap',
    description: 'Build cloud expertise with Amazon Web Services - from core services to architecture',
    // iframeUrl: '/aws-devops-roadmap.html',
    viewUrl: true,
    topics: [
      {
        title: 'Cloud Fundamentals',
        notes: `## AWS Basics

Understanding cloud computing concepts:

- **Cloud Computing**: On-demand computing resources over the internet
- **Benefits**: Scalability, reliability, pay-as-you-go, global infrastructure

### AWS Global Infrastructure
- **Regions**: Geographic areas (e.g., us-east-1, eu-west-1)
- **Availability Zones**: Isolated data centers within a region
- **Edge Locations**: CDN endpoints for CloudFront

### AWS Core Services
- Compute (EC2, Lambda, ECS)
- Storage (S3, EBS, EFS)
- Database (RDS, DynamoDB, ElastiCache)
- Networking (VPC, Route 53, CloudFront)`,
        subtopics: ['Cloud Concepts', 'AWS Global Infrastructure', 'IAM Basics', 'AWS Free Tier'],
      },
      {
        title: 'Compute Services',
        notes: `## Running Code in the Cloud

### EC2 (Elastic Compute Cloud)
- Virtual servers in the cloud
- Instance types: t3, m5, c5, r5 (general, memory, compute, memory optimized)
- Pricing: On-Demand, Reserved, Spot

### Lambda
- Serverless computing
- Pay only for what you use
- Supports: Node.js, Python, Java, Go, .NET, Ruby

### ECS/EKS
- Container orchestration
- Run Docker containers at scale`,
        subtopics: ['EC2', 'Lambda', 'ECS/EKS', 'Elastic Beanstalk', 'Lightsail'],
      },
      {
        title: 'Storage Solutions',
        notes: `## AWS Storage Services

### S3 (Simple Storage Service)
- Object storage in the cloud
- **Buckets**: Containers for objects
- **Objects**: Files with metadata
- **Features**: Versioning, Lifecycle policies, Replication

### EBS (Elastic Block Store)
- Block storage for EC2
- SSD and HDD options
- Snapshots for backup

### EFS (Elastic File System)
- Managed NFS (Network File System)
- Scales automatically
- Pay per use`,
        subtopics: ['S3 Basics', 'S3 Versioning & Lifecycle', 'EBS', 'EFS', 'Storage Gateway'],
      },
      {
        title: 'Networking & Security',
        notes: `## Building Secure Networks

### VPC (Virtual Private Cloud)
- Isolated cloud network
- Subnets: Public and Private
- Route Tables, Internet Gateway, NAT Gateway

### Security Services
- **IAM**: Identity and Access Management
- **Security Groups**: Instance-level firewall
- **WAF**: Web Application Firewall
- **KMS**: Key Management Service

### DNS & CDN
- **Route 53**: DNS service
- **CloudFront**: Content Delivery Network`,
        subtopics: ['VPC Setup', 'IAM Roles & Policies', 'Security Groups', 'Route 53', 'CloudFront'],
      },
    ],
  },
   {
    id: 'iframe-aws',
    title: 'Roadmap Iframe AWS',
    description: 'Build cloud expertise with Amazon Web Services - from core services to architecture',
    iframeUrl: '/aws-devops-roadmap.html',
    topics: [],
  },
  {
    id: 'typescript',
    title: 'TypeScript Roadmap',
    description: 'Level up your JavaScript with type safety and modern TypeScript patterns',
    topics: [
      {
        title: 'TypeScript Basics',
        notes: `## Why TypeScript?

TypeScript adds static typing to JavaScript:
- **Catch errors early** at compile time
- **Better IDE support** with autocomplete
- **Self-documenting code** through types

### Basic Types
\`\`\`typescript
let name: string = 'Nisha';
let age: number = 25;
let isDeveloper: boolean = true;
let hobbies: string[] = ['coding', 'reading'];
\`\`\`

### Type Inference
TypeScript infers types when not explicitly declared:
\`\`\`typescript
let greeting = 'Hello'; // inferred as string
\`\`\``,
        subtopics: ['Basic Types', 'Type Inference', 'Interfaces', 'Type Aliases'],
      },
      {
        title: 'Advanced Types',
        notes: `## Mastering TypeScript Types

### Union & Intersection Types
\`\`\`typescript
type StringOrNumber = string | number;
type Admin = User & { permissions: string[] };
\`\`\`

### Utility Types
- **Partial**: Make all properties optional
- **Required**: Make all properties required
- **Pick**: Select specific properties
- **Omit**: Exclude specific properties
- **Record**: Create object types

### Generics
\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}
\`\`\``,
        subtopics: ['Union Types', 'Intersection Types', 'Utility Types', 'Generics'],
      },
      {
        title: 'Object-Oriented TypeScript',
        notes: `## OOP in TypeScript

### Classes
\`\`\`typescript
class Developer {
  constructor(
    public name: string,
    private skills: string[]
  ) {}
  
  introduce(): string {
    return \`Hi, I'm \${this.name}\`;
  }
}
\`\`\`

### Access Modifiers
- **public**: Accessible everywhere
- **private**: Only within class
- **protected**: Within class and subclasses
- **readonly**: Cannot be modified after init

### Interfaces vs Abstract Classes`,
        subtopics: ['Classes', 'Inheritance', 'Access Modifiers', 'Abstract Classes'],
      },
    ],
  },
  {
    id: 'nodejs',
    title: 'Node.js Backend Roadmap',
    description: 'Build scalable server-side applications with Node.js and Express',
    topics: [
      {
        title: 'Node.js Fundamentals',
        notes: `## Understanding Node.js

- **Event-driven**: Non-blocking I/O model
- **Single-threaded**: Uses event loop for async operations
- **NPM**: Node Package Manager

### Core Modules
\`\`\`javascript
const fs = require('fs');
const path = require('path');
const http = require('http');
\`\`\`

### Async Patterns
- Callbacks
- Promises
- Async/Await`,
        subtopics: ['Event Loop', 'NPM & Packages', 'File System', 'HTTP Module'],
      },
      {
        title: 'Express.js',
        notes: `## Building APIs with Express

### Basic Server
\`\`\`javascript
const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
  res.json({ users: [] });
});

app.listen(3000);
\`\`\`

### Middleware
- Request/response processing
- Authentication
- Error handling
- Logging

### RESTful Routes
- GET, POST, PUT, DELETE
- Route parameters
- Query strings`,
        subtopics: ['Routing', 'Middleware', 'Request/Response', 'Error Handling'],
      },
      {
        title: 'Database Integration',
        notes: `## Connecting to Databases

### MongoDB with Mongoose
\`\`\`javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model('User', userSchema);
\`\`\`

### PostgreSQL with Sequelize/Prisma
- ORM tools for SQL databases
- Schema migrations
- Query building

### Best Practices
- Connection pooling
- Environment variables
- Input validation`,
        subtopics: ['MongoDB/Mongoose', 'PostgreSQL/Prisma', 'Redis/Caching', 'Data Modeling'],
      },
    ],
  },
];