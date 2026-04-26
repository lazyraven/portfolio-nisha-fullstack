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
}

export const roadmaps: Roadmap[] = [
    {
    id: 'javascript',
    title: 'JavaScript Roadmap',
    description: 'Master the language of the web - from basics to advanced concepts',
    iframeUrl: '/javascript-roadmap-2026.html',
    topics: [
      {
        title: 'JavaScript Basics',
        notes: `## Getting Started with JavaScript

Learn the fundamentals of the language that powers the web:

### Variables & Data Types
\`\`\`javascript
let name = 'Nisha';        // let - block-scoped, can reassign
const age = 25;            // const - block-scoped, cannot reassign
var legacy = 'old way';    // var - function-scoped (avoid)

console.log(typeof name);  // string
console.log(typeof age);   // number
\`\`\`

### Primitive Types
- **String**: Text data
- **Number**: Integers and decimals
- **Boolean**: true/false
- **Undefined**: Variable declared but not assigned
- **Null**: Intentional absence of value
- **Symbol**: Unique identifier
- **BigInt**: Large integers

### Operators
- Arithmetic: +, -, *, /, %, **
- Comparison: ==, ===, !=, !==, <, >, <=, >=
- Logical: &&, ||, !`,
        subtopics: ['Variables (let, const, var)', 'Data Types', 'Operators', 'Type Conversion'],
      },
      {
        title: 'Control Flow',
        notes: `## Controlling Program Execution

### Conditionals
\`\`\`javascript
if (age >= 18) {
  console.log('Adult');
} else if (age >= 13) {
  console.log('Teenager');
} else {
  console.log('Child');
}

// Ternary operator
const status = age >= 18 ? 'Adult' : 'Minor';
\`\`\`

### Loops
\`\`\`javascript
// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while loop
while (condition) {
  // code
}

// for...of (arrays)
for (const item of array) {
  console.log(item);
}

// for...in (objects)
for (const key in object) {
  console.log(key, object[key]);
}
\`\`\`

### Switch Statement
\`\`\`javascript
switch (day) {
  case 0: console.log('Sunday'); break;
  case 1: console.log('Monday'); break;
  default: console.log('Other day');
}
\`\`\``,
        subtopics: ['If-else', 'Ternary Operator', 'Switch', 'For Loops', 'While Loops'],
      },
      {
        title: 'Functions',
        notes: `## Functions in JavaScript

### Function Declaration
\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

### Function Expression
\`\`\`javascript
const greet = function(name) {
  return \`Hello, \${name}!\`;
};
\`\`\`

### Arrow Functions
\`\`\`javascript
// Concise syntax
const greet = (name) => \`Hello, \${name}!\`;

// With body
const greet = (name) => {
  const message = \`Hello, \${name}!\`;
  return message;
};
\`\`\`

### Parameters & Arguments
- Default parameters
- Rest parameters (...args)
- Arguments object (in regular functions)

### Higher-Order Functions
- Functions that accept other functions as arguments
- Functions that return functions`,
        subtopics: ['Function Declaration', 'Arrow Functions', 'Parameters', 'Higher-Order Functions', 'Closures'],
      },
      {
        title: 'Arrays',
        notes: `## Working with Arrays

### Creating & Accessing Arrays
\`\`\`javascript
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits[0]);        // apple
console.log(fruits.length);    // 3
\`\`\`

### Array Methods
- **push/pop**: Add/remove from end
- **shift/unshift**: Add/remove from start
- **map**: Transform each element
- **filter**: Filter elements by condition
- **reduce**: Reduce to single value
- **find/findIndex**: Find element
- **includes**: Check if exists
- **slice/splice**: Extract/subset

### Destructuring
\`\`\`javascript
const [first, second, ...rest] = fruits;
const [a, , c] = fruits;  // skip second
\`\`\`

### Spread Operator
\`\`\`javascript
const newFruits = [...fruits, 'grape'];
const copy = [...fruits];
\`\`\``,
        subtopics: ['Array Methods', 'Map/Filter/Reduce', 'Destructuring', 'Spread Operator', 'Array Search'],
      },
      {
        title: 'Objects',
        notes: `## JavaScript Objects

### Creating Objects
\`\`\`javascript
const person = {
  name: 'Nisha',
  age: 25,
  greet() {
    return \`Hi, I'm \${this.name}\`;
  }
};
\`\`\`

### Accessing Properties
\`\`\`javascript
console.log(person.name);      // dot notation
console.log(person['age']);    // bracket notation
\`\`\`

### Object Methods
- **Object.keys()**: Get all keys
- **Object.values()**: Get all values
- **Object.entries()**: Get key-value pairs
- **Object.assign()**: Merge objects
- **Object.freeze()**: Make immutable

### Destructuring
\`\`\`javascript
const { name, age } = person;
const { name: userName } = person;  // rename
\`\`\`

### Spread Operator
\`\`\`javascript
const updatedPerson = { ...person, age: 26 };
\`\`\``,
        subtopics: ['Object Creation', 'Property Access', 'Object Methods', 'Destructuring', 'this Keyword'],
      },
      {
        title: 'ES6+ Features',
        notes: `## Modern JavaScript Features

### Template Literals
\`\`\`javascript
const message = \`Hello, \${name}!
Welcome to \${city}.\`;
\`\`\`

### Destructuring
\`\`\`javascript
// Array destructuring
const [a, b] = [1, 2];

// Object destructuring
const { x, y } = { x: 1, y: 2 };
\`\`\`

### Default Parameters
\`\`\`javascript
function greet(name = 'Guest') {
  return \`Hello, \${name}\`;
}
\`\`\`

### Rest & Spread
\`\`\`javascript
// Rest - collect values
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

// Spread - expand values
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
\`\`\`

### Optional Chaining & Nullish Coalescing
\`\`\`javascript
const name = user?.profile?.name ?? 'Anonymous';
\`\`\`

### Modules (import/export)
\`\`\`javascript
export const PI = 3.14;
export function add(a, b) { return a + b; }
import { PI, add } from './math';
\`\`\``,
        subtopics: ['Template Literals', 'Destructuring', 'Rest/Spread', 'Optional Chaining', 'Modules'],
      },
      {
        title: 'Asynchronous JavaScript',
        notes: `## Handling Async Operations

### Callbacks
\`\`\`javascript
function fetchData(callback) {
  setTimeout(() => {
    callback('Data received');
  }, 1000);
}
\`\`\`

### Promises
\`\`\`javascript
const promise = new Promise((resolve, reject) => {
  // async operation
  if (success) {
    resolve(data);
  } else {
    reject(error);
  }
});

promise
  .then(data => console.log(data))
  .catch(error => console.error(error))
  .finally(() => console.log('Done'));
\`\`\`

### Async/Await
\`\`\`javascript
async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
\`\`\`

### Promise Methods
- **Promise.all()**: Wait for all promises
- **Promise.race()**: First to resolve
- **Promise.allSettled()**: All settled
- **Promise.any()**: First to fulfill`,
        subtopics: ['Callbacks', 'Promises', 'Async/Await', 'Error Handling', 'Promise Methods'],
      },
      {
        title: 'DOM Manipulation',
        notes: `## Interacting with the DOM

### Selecting Elements
\`\`\`javascript
const element = document.getElementById('myId');
const elements = document.querySelectorAll('.myClass');
const first = document.querySelector('.myClass');
\`\`\`

### Modifying Elements
\`\`\`javascript
element.textContent = 'New text';
element.innerHTML = '<strong>Bold</strong>';
element.setAttribute('class', 'active');
element.style.color = 'blue';
\`\`\`

### Creating & Removing Elements
\`\`\`javascript
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello';
document.body.appendChild(newDiv);

element.remove();  // remove element
element.removeChild(child);  // remove child
\`\`\`

### Event Handling
\`\`\`javascript
element.addEventListener('click', (event) => {
  console.log(event.target);
});

// Common events: click, submit, keydown, mouseenter, input
\`\`\`

### DOM Traversal
\`\`\`javascript
element.parentElement;
element.children;
element.nextElementSibling;
element.previousElementSibling;
\`\`\``,
        subtopics: ['Selecting Elements', 'Modifying DOM', 'Creating Elements', 'Event Listeners', 'DOM Traversal'],
      },
    ],
  },
  {
    id: 'react',
    title: 'React Roadmap',
    description: 'Master frontend development with React - from basics to advanced patterns',
    iframeUrl: '/react-roadmap-2026.html',
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
    iframeUrl: '/aws-devops-roadmap.html',
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
  //  {
  //   id: 'iframe-aws',
  //   title: 'Roadmap Iframe AWS',
  //   description: 'Build cloud expertise with Amazon Web Services - from core services to architecture',
  //   iframeUrl: '/aws-devops-roadmap.html',
  //   topics: [],
  // },
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
    iframeUrl: '/nodejs-backend-roadmap.html',
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
  {
    id: 'mongodb',
    title: 'MongoDB Roadmap',
    description: 'Master the most popular NoSQL database - from basics to advanced scaling',
    iframeUrl: '/mongodb-roadmap-2026.html',
    topics: [
      {
        title: 'MongoDB Basics',
        notes: `## Getting Started with MongoDB

Learn the fundamentals of the most popular NoSQL database:

### What is MongoDB?
- Document-oriented NoSQL database
- Stores data in flexible, JSON-like documents
- No fixed schema - documents can have different fields
- High scalability and performance

### Key Concepts
\`\`\`javascript
// Database > Collection > Document
// Similar to: Database > Table > Row

// Example document
{
  "_id": ObjectId("..."),
  "name": "Nisha",
  "email": "nisha@example.com",
  "skills": ["React", "Node.js", "MongoDB"],
  "createdAt": new Date()
}
\`\`\`

### MongoDB vs SQL
| MongoDB | SQL |
|---------|-----|
| Document | Row |
| Collection | Table |
| Field | Column |
| Embedded Document | Join |
| _id | Primary Key |`,
        subtopics: ['Documents & Collections', 'JSON/BSON Format', 'Database Structure', 'MongoDB vs SQL'],
      },
      {
        title: 'CRUD Operations',
        notes: `## Create, Read, Update, Delete

### Create Operations
\`\`\`javascript
// Insert single document
db.users.insertOne({
  name: "Nisha",
  email: "nisha@example.com"
});

// Insert multiple documents
db.users.insertMany([
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
]);
\`\`\`

### Read Operations
\`\`\`javascript
// Find all documents
db.users.find();

// Find with filter
db.users.find({ name: "Nisha" });

// Find with operators
db.users.find({ age: { $gte: 18 } });

// Find one document
db.users.findOne({ email: "nisha@example.com" });

// Project specific fields
db.users.find({}, { name: 1, email: 1 });
\`\`\`

### Update Operations
\`\`\`javascript
// Update one document
db.users.updateOne(
  { name: "Nisha" },
  { $set: { age: 26 } }
);

// Update many documents
db.users.updateMany(
  { age: { $lt: 18 } },
  { $set: { status: "minor" } }
);

// Replace document
db.users.replaceOne(
  { name: "Nisha" },
  { name: "Nisha", age: 26 }
);
\`\`\`

### Delete Operations
\`\`\`javascript
// Delete one document
db.users.deleteOne({ name: "Nisha" });

// Delete many documents
db.users.deleteMany({ age: { $lt: 18 } });
\`\`\``,
        subtopics: ['insertOne/insertMany', 'find/findOne', 'updateOne/updateMany', 'deleteOne/deleteMany'],
      },
      {
        title: 'Query Operators & Aggregation',
        notes: `## Advanced Queries & Aggregation

### Comparison Operators
\`\`\`javascript
$eq  // Equal
$ne  // Not equal
$gt  // Greater than
$gte // Greater than or equal
$lt  // Less than
$lte // Less than or equal
$in  // In array
$nin // Not in array

// Usage
db.users.find({ age: { $gte: 18, $lte: 30 } });
db.users.find({ status: { $in: ["active", "pending"] } });
\`\`\`

### Logical Operators
\`\`\`javascript
$and // AND
$or  // OR
$not // NOT
$nor // NOR

// Usage
db.users.find({
  $and: [
    { age: { $gte: 18 } },
    { status: "active" }
  ]
});
\`\`\`

### Aggregation Pipeline
\`\`\`javascript
db.orders.aggregate([
  // Stage 1: Match documents
  { $match: { status: "completed" } },
  
  // Stage 2: Group by product
  { $group: {
    _id: "$product",
    totalSales: { $sum: "$amount" },
    count: { $sum: 1 }
  }},
  
  // Stage 3: Sort by total
  { $sort: { totalSales: -1 } },
  
  // Stage 4: Limit results
  { $limit: 10 }
]);
\`\`\`

### Common Aggregation Stages
- $match - Filter documents
- $group - Group documents
- $sort - Sort documents
- $project - Select fields
- $limit - Limit results
- $skip - Skip documents
- $unwind - Deconstruct arrays`,
        subtopics: ['Comparison Operators', 'Logical Operators', 'Aggregation Pipeline', '$group & $match'],
      },
      {
        title: 'MongoDB with Mongoose',
        notes: `## Using MongoDB with Mongoose ODM

### Setting Up Mongoose
\`\`\`javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
\`\`\`

### Defining Schemas
\`\`\`javascript
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  age: {
    type: Number,
    min: 0,
    max: 150
  },
  skills: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Virtual property
userSchema.virtual('fullName').get(function() {
  return this.name;
});

// Method
userSchema.methods.getInfo = function() {
  return \`\${this.name} - \${this.email}\`;
};

// Static method
userSchema.statics.findByEmail = function(email) {
  return this.findOne({ email });
};

const User = mongoose.model('User', userSchema);
\`\`\`

### CRUD with Mongoose
\`\`\`javascript
// Create
const user = new User({ name: "Nisha", email: "nisha@example.com" });
await user.save();

// Or use create
const newUser = await User.create({ name: "Alice", email: "alice@example.com" });

// Read
const users = await User.find({ age: { $gte: 18 } });
const user = await User.findById(id);

// Update
await User.findByIdAndUpdate(id, { age: 26 }, { new: true });
await User.updateOne({ name: "Nisha" }, { $set: { age: 27 } });

// Delete
await User.findByIdAndDelete(id);
await User.deleteOne({ name: "Nisha" });
\`\`\`

### Mongoose Middleware (Hooks)
\`\`\`javascript
userSchema.pre('save', function(next) {
  console.log('About to save:', this.name);
  next();
});

userSchema.post('save', function(doc) {
  console.log('Saved:', doc.name);
});
\`\`\``,
        subtopics: ['Schema Definition', 'Models & Documents', 'CRUD Operations', 'Middleware/Hooks'],
      },
      {
        title: 'Indexing & Performance',
        notes: `## Optimizing MongoDB Performance

### Indexes
\`\`\`javascript
// Create single field index
db.users.createIndex({ email: 1 });

// Create compound index
db.users.createIndex({ age: 1, name: 1 });

// Create unique index
db.users.createIndex({ email: 1 }, { unique: true });

// Create text index for search
db.articles.createIndex({ title: "text", content: "text" });

// Text search
db.articles.find({ $text: { $search: "mongodb" } });
\`\`\`

### Index Types
- **Single Field Index**: Index on one field
- **Compound Index**: Index on multiple fields (order matters!)
- **Unique Index**: Enforce uniqueness
- **Text Index**: Full-text search
- **Geospatial Index**: Location-based queries
- **Hashed Index**: For sharding

### Query Optimization Tips
\`\`\`javascript
// Use explain() to analyze queries
db.users.find({ email: "nisha@example.com" }).explain();

// Create covered queries (index only)
db.users.find({ name: "Nisha" }, { name: 1, _id: 0 });

// Use projection to limit fields
db.users.find({}, { password: 0 }); // Exclude password
\`\`\`

### Performance Monitoring
\`\`\`javascript
// Check index usage
db.users.find({ email: "test@example.com" }).hint({ email: 1 });

// View current indexes
db.users.getIndexes();

// Drop unused index
db.users.dropIndex("age_1");
\`\`\``,
        subtopics: ['Single & Compound Indexes', 'Unique Indexes', 'Text Indexes', 'Query Optimization'],
      },
      {
        title: 'Replication & Sharding',
        notes: `## Scaling MongoDB

### Replica Sets
\`\`\`javascript
// Replica Set Configuration
{
  "_id": "myReplicaSet",
  "members": [
    { "_id": 0, "host": "mongodb1:27017" },
    { "_id": 1, "host": "mongodb2:27017" },
    { "_id": 2, "host": "mongodb3:27017" }
  ]
}

// Primary - handles all writes
// Secondary - replicates data, can handle reads
// Arbiter - votes but no data
\`\`\`

### Sharding
- Horizontal scaling - distribute data across machines
- Shard key - field used to distribute documents
- Chunk - group of documents

\`\`\`javascript
// Enable sharding on database
sh.enableSharding("mydb");

// Shard collection with key
sh.shardCollection("mydb.users", { "userId": 1 });
\`\`\`

### Best Practices
- Choose good shard key (high cardinality, even distribution)
- Use replica sets for high availability
- Monitor chunk splits and migrations
- Consider embedded documents for read-heavy operations`,
        subtopics: ['Replica Sets', 'Primary/Secondary', 'Sharding Concepts', 'Choosing Shard Keys'],
      },
      {
        title: 'MongoDB Atlas & Cloud',
        notes: `## MongoDB Atlas - Cloud Database

### Getting Started with Atlas
1. Create free account at mongodb.com/cloud
2. Create free cluster
3. Get connection string
4. Connect via Compass or code

### Atlas Features
- **Atlas Search**: Full-text search with Lucene
- **Atlas Data API**: REST API for your database
- **Atlas Triggers**: Serverless functions
- **Atlas Charts**: Visualize your data
- **Realm**: Mobile database sync

### Connection Strings
\`\`\`javascript
// Standard connection
mongodb+srv://username:password@cluster.mongodb.net/mydb

// With options
mongodb+srv://username:password@cluster.mongodb.net/mydb?retryWrites=true&w=majority
\`\`\`

### Environment Variables
\`\`\`javascript
// .env file
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mydb

// In code
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
\`\`\`

### Security Best Practices
- Use Atlas network access (IP whitelist)
- Enable authentication
- Use environment variables for credentials
- Enable TLS/SSL
- Rotate credentials regularly`,
        subtopics: ['Atlas Setup', 'Connection Strings', 'Environment Variables', 'Security'],
      },
    ],
  },
  {
    id: 'dsa',
    title: 'DSA Roadmap',
    description: 'Master Data Structures and Algorithms - from fundamentals to advanced problem-solving',
    iframeUrl: '/dsa-roadmap-2026.html',
    topics: [
      {
        title: 'Arrays & Strings',
        notes: `## Foundation: Arrays & Strings

### Arrays
\`\`\`javascript
// Basic operations
const arr = [1, 2, 3, 4, 5];
console.log(arr.length);    // 5
console.log(arr[0]);        // 1

// Common patterns
// Two pointers
let left = 0, right = arr.length - 1;
while (left < right) {
  // process elements
  left++;
  right--;
}

// Sliding window
for (let i = 0; i < arr.length; i++) {
  // window of size k
}
\`\`\`

### Strings
\`\`\`javascript
const str = "hello world";

// Common methods
str.length;           // 11
str.charAt(0);        // 'h'
str.substring(1, 4);  // 'ell'
str.split(' ');       // ['hello', 'world']

// String manipulation
const reversed = str.split('').reverse().join('');
\`\`\`

### Key Concepts
- Time complexity: O(1) access, O(n) search
- Space complexity considerations
- In-place vs out-of-place operations`,
        subtopics: ['Array Basics', 'Two Pointers', 'Sliding Window', 'String Manipulation', 'Prefix Sum'],
      },
      {
        title: 'Linked Lists',
        notes: `## Linked Lists

### Singly Linked List
\`\`\`javascript
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Insert at head
function insertHead(head, val) {
  return new ListNode(val, head);
}

// Delete node
function deleteNode(head, target) {
  if (!head) return null;
  if (head.val === target) return head.next;
  head.next = deleteNode(head.next, target);
  return head;
}
\`\`\`

### Doubly Linked List
- Each node has prev and next pointers
- Better for bidirectional traversal

### Common Patterns
- **Fast & Slow Pointers**: Detect cycles
- **Reverse**: In-place reversal
- **Merge**: Combine sorted lists

### Complexity
- Access: O(n)
- Insert/Delete at head: O(1)
- Insert/Delete at tail: O(1) with tail pointer`,
        subtopics: ['Singly Linked List', 'Doubly Linked List', 'Cycle Detection', 'Reverse List', 'Merge Lists'],
      },
      {
        title: 'Stacks & Queues',
        notes: `## Stacks & Queues

### Stack (LIFO)
\`\`\`javascript
class Stack {
  constructor() {
    this.items = [];
  }
  push(val) { this.items.push(val); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
  isEmpty() { return this.items.length === 0; }
}

// Applications
// - Balanced parentheses
// - Expression evaluation
// - Undo mechanisms
// - Function call stack
\`\`\`

### Queue (FIFO)
\`\`\`javascript
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(val) { this.items.push(val); }
  dequeue() { return this.items.shift(); }
  front() { return this.items[0]; }
}

// BFS traversal
function bfs(graph, start) {
  const queue = [start];
  const visited = new Set([start]);
  
  while (queue.length) {
    const node = queue.shift();
    // process node
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}
\`\`\`

### Use Cases
- Stack: Undo, recursion, expression eval
- Queue: BFS, task scheduling, buffering`,
        subtopics: ['Stack Implementation', 'Queue Implementation', 'Balanced Parentheses', 'BFS/DFS', 'Monotonic Stack'],
      },
      {
        title: 'Hash Tables',
        notes: `## Hash Tables

### JavaScript Map & Set
\`\`\`javascript
// Map - key-value pairs (preserves insertion order)
const map = new Map();
map.set('key', 'value');
map.get('key');           // 'value'
map.has('key');           // true
map.delete('key');

// Set - unique values
const set = new Set();
set.add(1);
set.add(2);
set.add(1); // ignored
console.log(set.has(1));  // true
\`\`\`

### Object (Hash Map)
\`\`\`javascript
const obj = {};
obj['name'] = 'Nisha';
obj.name === obj['name']; // true

// Common patterns
// Frequency counter
const freq = {};
for (const char of str) {
  freq[char] = (freq[char] || 0) + 1;
}

// Anagram detection
const sorted = str.split('').sort().join('');
\`\`\`

### Complexity
- Average: O(1) insert, lookup, delete
- Worst: O(n) with poor hash function

### Collision Resolution
- Chaining (linked list at each bucket)
- Open addressing (linear/quadratic probing)`,
        subtopics: ['Map & Set', 'Frequency Counter', 'Anagram Detection', 'Two Sum Pattern', 'Hash Collisions'],
      },
      {
        title: 'Trees',
        notes: `## Binary Trees

### Tree Node Structure
\`\`\`javascript
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
\`\`\`

### Tree Traversals
\`\`\`javascript
// DFS - Inorder (Left, Root, Right)
function inorder(root, result = []) {
  if (!root) return result;
  inorder(root.left, result);
  result.push(root.val);
  inorder(root.right, result);
  return result;
}

// DFS - Preorder (Root, Left, Right)
function preorder(root, result = []) {
  if (!root) return result;
  result.push(root.val);
  preorder(root.left, result);
  preorder(root.right, result);
  return result;
}

// BFS - Level Order
function levelOrder(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  
  while (queue.length) {
    const level = [];
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }
  return result;
}
\`\`\`

### Binary Search Tree
- Left subtree < root < right subtree
- Search, insert, delete: O(log n) average`,
        subtopics: ['Tree Traversals', 'BST Operations', 'Depth Calculation', 'Lowest Common Ancestor', 'Tree Reconstruction'],
      },
      {
        title: 'Graphs',
        notes: `## Graphs

### Graph Representations
\`\`\`javascript
// Adjacency List
const graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D'],
  'C': ['A', 'D'],
  'D': ['B', 'C']
};

// Adjacency Matrix
const matrix = [
  [0, 1, 1, 0],  // A
  [1, 0, 0, 1],  // B
  [1, 0, 0, 1],  // C
  [0, 1, 1, 0]   // D
];
\`\`\`

### DFS & BFS
\`\`\`javascript
// DFS
function dfs(graph, start, visited = new Set()) {
  visited.add(start);
  console.log(start);
  
  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}

// BFS
function bfs(graph, start) {
  const visited = new Set([start]);
  const queue = [start];
  
  while (queue.length) {
    const node = queue.shift();
    console.log(node);
    
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}
\`\`\`

### Graph Types
- Directed vs Undirected
- Weighted vs Unweighted
- Cyclic vs Acyclic`,
        subtopics: ['Graph Representations', 'DFS & BFS', 'Cycle Detection', 'Topological Sort', 'Shortest Path'],
      },
      {
        title: 'Sorting Algorithms',
        notes: `## Sorting Algorithms

### Comparison of Sorting Algorithms
| Algorithm | Best | Average | Worst | Space |
|-----------|------|---------|-------|-------|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) |
| Selection | O(n²) | O(n²) | O(n²) | O(1) |
| Insertion | O(n) | O(n²) | O(n²) | O(1) |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | O(1) |

### Merge Sort
\`\`\`javascript
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  return [...result, ...left.slice(i), ...right.slice(j)];
}
\`\`\`

### Quick Sort
\`\`\`javascript
function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}
\`\`\``,
        subtopics: ['Bubble/Selection/Insertion', 'Merge Sort', 'Quick Sort', 'Heap Sort', 'Counting Sort'],
      },
      {
        title: 'Searching Algorithms',
        notes: `## Searching Algorithms

### Binary Search
\`\`\`javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

// With lower bound (first >= target)
function lowerBound(arr, target) {
  let left = 0, right = arr.length;
  
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) left = mid + 1;
    else right = mid;
  }
  return left;
}
\`\`\`

### Binary Search Variations
- Search in rotated sorted array
- Search in sorted matrix
- Find peak element
- Find minimum in rotated array

### Depth-First Search
\`\`\`javascript
function dfs(grid, row, col, visited) {
  const rows = grid.length;
  const cols = grid[0].length;
  
  if (row < 0 || row >= rows || col < 0 || col >= cols) return;
  if (visited[row][col] || grid[row][col] === 0) return;
  
  visited[row][col] = true;
  
  // Explore 4 directions
  dfs(grid, row + 1, col, visited);
  dfs(grid, row - 1, col, visited);
  dfs(grid, row, col + 1, visited);
  dfs(grid, row, col - 1, visited);
}
\`\`\``,
        subtopics: ['Binary Search', 'Binary Search Variations', 'DFS', 'BFS', 'Search in Matrix'],
      },
      {
        title: 'Recursion & Backtracking',
        notes: `## Recursion & Backtracking

### Recursion Fundamentals
\`\`\`javascript
// Base case + recursive case
function factorial(n) {
  if (n <= 1) return 1;           // base case
  return n * factorial(n - 1);    // recursive call
}

// Fibonacci
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
\`\`\`

### Backtracking
\`\`\`javascript
// Generate all permutations
function permutations(arr) {
  const result = [];
  
  function backtrack(start) {
    if (start === arr.length) {
      result.push([...arr]);
      return;
    }
    
    for (let i = start; i < arr.length; i++) {
      [arr[start], arr[i]] = [arr[i], arr[start]];
      backtrack(start + 1);
      [arr[start], arr[i]] = [arr[i], arr[start]]; // backtrack
    }
  }
  
  backtrack(0);
  return result;
}

// N-Queens
function solveNQueens(n) {
  const result = [];
  const board = Array(n).fill(null).map(() => Array(n).fill('.'));
  
  function isValid(row, col) {
    // Check column
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') return false;
    }
    // Check diagonals
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return false;
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') return false;
    }
    return true;
  }
  
  function solve(row) {
    if (row === n) {
      result.push(board.map(row => row.join('')));
      return;
    }
    
    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        board[row][col] = 'Q';
        solve(row + 1);
        board[row][col] = '.'; // backtrack
      }
    }
  }
  
  solve(0);
  return result;
}
\`\`\`

### Common Patterns
- Subset generation
- Combination sum
- Permutations
- Sudoku solver`,
        subtopics: ['Recursion Basics', 'Subset Generation', 'Permutations', 'Combination Sum', 'N-Queens'],
      },
      {
        title: 'Dynamic Programming',
        notes: `## Dynamic Programming

### DP Approach
1. Define subproblem
2. Find recurrence relation
3. Determine base cases
4. Build bottom-up or top-down solution

### Fibonacci (Multiple Approaches)
\`\`\`javascript
// Naive recursion - O(2^n)
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

// Memoization (Top-Down) - O(n)
function fibMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

// Tabulation (Bottom-Up) - O(n)
function fibTab(n) {
  if (n <= 1) return n;
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

// Space Optimized - O(n) time, O(1) space
function fibOptimized(n) {
  if (n <= 1) return n;
  let prev2 = 0, prev1 = 1;
  for (let i = 2; i <= n; i++) {
    const curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}
\`\`\`

### Classic DP Problems
\`\`\`javascript
// Climbing Stairs
function climbStairs(n) {
  if (n <= 2) return n;
  let prev2 = 1, prev1 = 2;
  for (let i = 3; i <= n; i++) {
    const curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}

// House Robber
function rob(nums) {
  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];
  
  let prev2 = 0, prev1 = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const curr = Math.max(prev1, prev2 + nums[i]);
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}

// Longest Common Subsequence
function lcs(s1, s2) {
  const m = s1.length, n = s2.length;
  const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
}

// 0/1 Knapsack
function knapsack(weights, values, capacity) {
  const n = weights.length;
  const dp = Array(n + 1).fill(null).map(() => Array(capacity + 1).fill(0));
  
  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          dp[i - 1][w],
          dp[i - 1][w - weights[i - 1]] + values[i - 1]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }
  return dp[n][capacity];
}
\`\`\`

### DP Patterns
- 1D DP: Fibonacci, climbing stairs
- 2D DP: LCS, knapsack
- Partition DP: matrix chain multiplication
- Bitmask DP: traveling salesman`,
        subtopics: ['Fibonacci Pattern', 'Climbing Stairs', 'House Robber', 'LCS & LPS', '0/1 Knapsack', 'Coin Change'],
      },
      {
        title: 'Heaps & Priority Queues',
        notes: `## Heaps & Priority Queues

### Binary Heap
\`\`\`javascript
class MinHeap {
  constructor() {
    this.heap = [];
  }
  
  parent(i) { return Math.floor((i - 1) / 2); }
  left(i) { return 2 * i + 1; }
  right(i) { return 2 * i + 2; }
  
  insert(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }
  
  bubbleUp(i) {
    while (i > 0) {
      const p = this.parent(i);
      if (this.heap[p] <= this.heap[i]) break;
      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
      i = p;
    }
  }
  
  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return min;
  }
  
  bubbleDown(i) {
    while (this.left(i) < this.heap.length) {
      let smallest = this.left(i);
      const r = this.right(i);
      if (r < this.heap.length && this.heap[r] < this.heap[smallest]) {
        smallest = r;
      }
      if (this.heap[i] <= this.heap[smallest]) break;
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
  }
}
\`\`\`

### Priority Queue in JavaScript
\`\`\`javascript
// Using MinHeap
const pq = new MinHeap();
pq.insert(5);
pq.insert(3);
pq.insert(7);
pq.extractMin(); // 3

// Using built-in (max heap via negation)
class MaxPriorityQueue {
  constructor() {
    this.data = [];
  }
  enqueue(val) {
    this.data.push(-val); // negate for max heap
    this.data.sort((a, b) => a - b);
  }
  dequeue() {
    return -this.data.shift();
  }
  peek() {
    return -this.data[0];
  }
}
\`\`\`

### Use Cases
- K smallest/largest elements
- Median of running stream
- Dijkstra's algorithm
- Top K frequent elements`,
        subtopics: ['Heap Implementation', 'Kth Largest/Smallest', 'Top K Frequent', 'Median in Stream', 'Merge K Sorted Lists'],
      },
    ],
  },

];