export type MongoAccent =
  | 'mongo'
  | 'amber'
  | 'orange'
  | 'blue'
  | 'violet'
  | 'pink'
  | 'teal'
  | 'slate'
  | 'cyan';

export interface MongoRoadmapCard {
  label: string;
  title: string;
  accent: MongoAccent;
  points: string[];
  note?: {
    title: string;
    body: string;
  };
}

export interface MongoRoadmapSection {
  id: string;
  title: string;
  caption: string;
  accent: MongoAccent;
  cards: MongoRoadmapCard[];
  code?: string;
}

export const mongoLearningLoop = [
  {
    step: '01',
    title: 'Model',
    description: 'Understand documents, collections, BSON, and when to embed or reference data.',
    accent: 'from-emerald-300/80 via-green-400/80 to-lime-300/80',
  },
  {
    step: '02',
    title: 'Query',
    description: 'Practice CRUD, filters, projections, operators, sorting, pagination, and updates.',
    accent: 'from-amber-300/80 via-orange-400/80 to-yellow-300/80',
  },
  {
    step: '03',
    title: 'Index',
    description: 'Use indexes, explain plans, and schema design to make reads fast and predictable.',
    accent: 'from-orange-300/80 via-rose-400/80 to-amber-300/80',
  },
  {
    step: '04',
    title: 'Aggregate',
    description: 'Build pipelines for reports, joins, grouped metrics, analytics, and reshaped data.',
    accent: 'from-cyan-300/80 via-blue-400/80 to-sky-300/80',
  },
  {
    step: '05',
    title: 'Ship',
    description: 'Connect MongoDB to Node APIs with Mongoose, Atlas, transactions, backups, and scaling.',
    accent: 'from-violet-300/80 via-fuchsia-400/80 to-pink-300/80',
  },
];

export const mongoRoadmapSections: MongoRoadmapSection[] = [
  {
    id: '01',
    title: 'Fundamentals',
    caption: 'Learn the document model first. MongoDB rewards people who design around access patterns.',
    accent: 'mongo',
    cards: [
      {
        label: 'Core Model',
        title: 'Documents and Collections',
        accent: 'mongo',
        points: [
          'MongoDB stores data as flexible BSON documents grouped inside collections.',
          'A document is similar to a JSON object, but BSON supports more data types.',
          'Each document has an _id field that acts as the primary key.',
          'Collections do not require every document to share the same shape.',
        ],
      },
      {
        label: 'Data Shape',
        title: 'MongoDB vs SQL',
        accent: 'blue',
        points: [
          'SQL uses rows, tables, joins, and fixed schemas.',
          'MongoDB uses documents, collections, embedded documents, and references.',
          'Use MongoDB when flexible, nested, high-volume application data fits the read pattern.',
          'Use SQL when strict relational integrity and complex joins dominate the domain.',
        ],
      },
      {
        label: 'Tooling',
        title: 'Atlas, Compass, and Shell',
        accent: 'cyan',
        points: [
          'MongoDB Atlas provides managed cloud clusters.',
          'MongoDB Compass is the GUI for browsing data, indexes, and query plans.',
          'mongosh is the interactive shell for commands and scripts.',
          'Learn local Docker setup for repeatable practice environments.',
        ],
      },
    ],
    code: `// Database > Collection > Document
{
  _id: ObjectId('6650f3a8f1b2c3d4e5f60718'),
  name: 'Nisha',
  email: 'nisha@example.com',
  skills: ['React', 'Node.js', 'MongoDB'],
  profile: {
    role: 'Full Stack Developer',
    location: 'India'
  },
  createdAt: new Date()
}`,
  },
  {
    id: '02',
    title: 'CRUD and Queries',
    caption: 'This is the daily MongoDB muscle: create, read, update, delete, filter, project, and sort.',
    accent: 'amber',
    cards: [
      {
        label: 'Create',
        title: 'Insert Documents',
        accent: 'amber',
        points: [
          'insertOne adds a single document.',
          'insertMany adds a batch of documents.',
          'Ordered inserts stop on the first error by default.',
          'Validate required fields in the application and, when useful, at the database level.',
        ],
      },
      {
        label: 'Read',
        title: 'Find and Project',
        accent: 'mongo',
        points: [
          'find returns matching documents and findOne returns a single match.',
          'Use filters with comparison, logical, element, and array operators.',
          'Projection returns only the fields the API needs.',
          'Sort and limit early when building predictable list endpoints.',
        ],
      },
      {
        label: 'Update and Delete',
        title: 'Change Data Safely',
        accent: 'pink',
        points: [
          'updateOne and updateMany modify documents with update operators.',
          '$set, $unset, $inc, $push, $pull, and $addToSet cover common changes.',
          'replaceOne swaps the full document except _id.',
          'deleteOne and deleteMany should use carefully scoped filters.',
        ],
      },
    ],
    code: `db.users.insertOne({
  name: 'Nisha',
  email: 'nisha@example.com',
  age: 25
});

db.users.find(
  { age: { $gte: 18 }, skills: 'MongoDB' },
  { name: 1, email: 1, skills: 1 }
).sort({ name: 1 }).limit(10);

db.users.updateOne(
  { email: 'nisha@example.com' },
  { $set: { age: 26 }, $addToSet: { skills: 'Node.js' } }
);`,
  },
  {
    id: '03',
    title: 'Schema Design and Indexing',
    caption: 'Good schema design starts from how the app reads data, not from how entities look on a diagram.',
    accent: 'orange',
    cards: [
      {
        label: 'Modeling',
        title: 'Embed vs Reference',
        accent: 'orange',
        points: [
          'Embed data when child data is read with the parent and remains bounded.',
          'Reference data when it is large, reused, independently updated, or many-to-many.',
          'Avoid unbounded arrays that grow forever inside one document.',
          'Design around the most important read and write paths.',
        ],
        note: {
          title: 'Interview lens',
          body: 'There is no universal answer. Explain the read pattern, update frequency, document size, and consistency needs.',
        },
      },
      {
        label: 'Indexes',
        title: 'Fast Query Paths',
        accent: 'amber',
        points: [
          'Single-field indexes help common equality and range filters.',
          'Compound indexes should match filter, sort, and prefix order.',
          'Text indexes support basic full-text search.',
          'Unique indexes enforce values such as email uniqueness.',
        ],
      },
      {
        label: 'Explain',
        title: 'Performance Debugging',
        accent: 'blue',
        points: [
          'Use explain to compare IXSCAN against COLLSCAN.',
          'Check documents examined versus documents returned.',
          'Avoid indexes that are never used because they slow writes.',
          'Use covered queries when the index includes every returned field.',
        ],
      },
    ],
    code: `db.posts.createIndex({ authorId: 1, createdAt: -1 });
db.users.createIndex({ email: 1 }, { unique: true });
db.posts.createIndex({ title: 'text', body: 'text' });

db.posts.find({ authorId, status: 'published' })
  .sort({ createdAt: -1 })
  .explain('executionStats');`,
  },
  {
    id: '04',
    title: 'Aggregation Framework',
    caption: 'Aggregation is where MongoDB becomes useful for dashboards, reports, joins, and transformed API responses.',
    accent: 'blue',
    cards: [
      {
        label: 'Pipeline',
        title: 'Core Stages',
        accent: 'blue',
        points: [
          '$match filters documents early.',
          '$group calculates totals, counts, averages, and grouped metrics.',
          '$project reshapes output and computes fields.',
          '$sort, $skip, and $limit power reporting and pagination.',
        ],
      },
      {
        label: 'Relationships',
        title: '$lookup and $unwind',
        accent: 'violet',
        points: [
          '$lookup performs a left outer join between collections.',
          '$unwind breaks array values into separate pipeline documents.',
          '$facet can run multiple pipelines at once for page data and metadata.',
          'Aggregation output of one stage becomes the input of the next stage.',
        ],
      },
      {
        label: 'Analytics',
        title: 'Reporting Patterns',
        accent: 'teal',
        points: [
          'Revenue totals, daily activity, cohort reports, and funnel metrics.',
          'Top users by activity with $group, $sort, $limit, and $lookup.',
          'Pre-aggregate expensive dashboards when live aggregation becomes too slow.',
          'Always index fields used in early $match stages.',
        ],
      },
    ],
    code: `db.orders.aggregate([
  { $match: { status: 'paid' } },
  { $group: {
      _id: '$customerId',
      totalSpent: { $sum: '$total' },
      orderCount: { $sum: 1 }
    }
  },
  { $sort: { totalSpent: -1 } },
  { $limit: 3 },
  { $lookup: {
      from: 'users',
      localField: '_id',
      foreignField: '_id',
      as: 'customer'
    }
  }
]);`,
  },
  {
    id: '05',
    title: 'Node.js and Mongoose',
    caption: 'Most portfolio and MERN projects use MongoDB through either the native driver or Mongoose.',
    accent: 'violet',
    cards: [
      {
        label: 'Native Driver',
        title: 'MongoDB Node.js Driver',
        accent: 'blue',
        points: [
          'MongoClient connects to MongoDB and manages connection pooling.',
          'Use native collection methods for CRUD and aggregation.',
          'GridFS can store large files in MongoDB when that tradeoff is acceptable.',
          'Keep connection setup outside request handlers.',
        ],
      },
      {
        label: 'ODM',
        title: 'Mongoose',
        accent: 'violet',
        points: [
          'Schemas define structure, types, defaults, validation, and indexes.',
          'Models provide the interface for collections.',
          'Middleware hooks run before or after save, validate, update, and find operations.',
          'Virtuals create computed fields without storing them in MongoDB.',
          'populate resolves references into related documents.',
        ],
      },
      {
        label: 'API Pattern',
        title: 'Express Integration',
        accent: 'teal',
        points: [
          'Define schema, create model, write service, expose controller routes.',
          'Use try/catch or async wrappers for database failures.',
          'Implement pagination with skip and limit or cursor-based patterns.',
          'Return stable API shapes and hide internal MongoDB errors from clients.',
        ],
        note: {
          title: 'Build this',
          body: 'Create a blog API with users, posts, comments, references, populate, pagination, and text search.',
        },
      },
    ],
    code: `import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
}, { timestamps: true });

userSchema.virtual('postCount').get(function () {
  return this.posts.length;
});

export const User = mongoose.model('User', userSchema);`,
  },
  {
    id: '06',
    title: 'Real-World Features',
    caption: 'These show up in almost every useful MongoDB-backed backend.',
    accent: 'pink',
    cards: [
      {
        label: 'Pagination',
        title: 'Lists That Scale',
        accent: 'pink',
        points: [
          'Offset pagination uses skip and limit.',
          'Cursor-based pagination is better for large or constantly changing datasets.',
          'Return metadata such as total, page, limit, hasNext, and nextCursor.',
          'Use stable sorting to prevent duplicate or missing results between pages.',
        ],
      },
      {
        label: 'Search',
        title: 'Text Index and Atlas Search',
        accent: 'blue',
        points: [
          'Text indexes support basic keyword search.',
          '$text with $search can filter by search terms.',
          'Sort by text score for relevance.',
          'Atlas Search provides more advanced Lucene-powered search features.',
        ],
      },
      {
        label: 'Integrity',
        title: 'Validation and Transactions',
        accent: 'amber',
        points: [
          'Mongoose validators handle application-level validation.',
          '$jsonSchema can enforce database-level validation.',
          'Transactions coordinate multi-document writes when consistency matters.',
          'Use sessions carefully and keep transactions short.',
        ],
      },
    ],
  },
  {
    id: '07',
    title: 'Scaling and Operations',
    caption: 'Learn the production vocabulary: replication, sharding, backups, security, and observability.',
    accent: 'slate',
    cards: [
      {
        label: 'Availability',
        title: 'Replica Sets',
        accent: 'teal',
        points: [
          'A replica set keeps copies of data across multiple MongoDB instances.',
          'One primary accepts writes and secondaries replicate from it.',
          'Automatic failover promotes a secondary if the primary goes down.',
          'Read preferences can route some reads to secondaries when appropriate.',
        ],
      },
      {
        label: 'Scale',
        title: 'Sharding',
        accent: 'orange',
        points: [
          'Sharding splits collection data across multiple servers.',
          'A shard key determines how documents are distributed.',
          'A poor shard key creates hotspots or inefficient queries.',
          'Use sharding when data or throughput exceeds a single replica set.',
        ],
      },
      {
        label: 'Ops',
        title: 'Backups and Security',
        accent: 'pink',
        points: [
          'Use role-based access control and least-privilege users.',
          'Keep connection strings and credentials out of source code.',
          'Schedule backups and test restores.',
          'Monitor slow queries, index usage, storage growth, and connection counts.',
        ],
      },
    ],
  },
];

export const mongoPipelineStages = [
  { op: '$match', description: 'Filter documents early', accent: 'mongo' as MongoAccent },
  { op: '$group', description: 'Create grouped metrics', accent: 'amber' as MongoAccent },
  { op: '$project', description: 'Shape the output', accent: 'blue' as MongoAccent },
  { op: '$lookup', description: 'Join related data', accent: 'violet' as MongoAccent },
  { op: '$sort', description: 'Order final results', accent: 'pink' as MongoAccent },
];

export const mongoInterviewTopics = [
  'CRUD operations',
  'Aggregation pipeline',
  'Indexing',
  'Schema design',
  'SQL vs MongoDB',
  'Mongoose populate',
  'Sharding',
  'Replica sets',
  'Embedded vs referenced',
  'Query performance',
  '$lookup joins',
  'Pagination',
  'Transactions',
  'Atlas Search',
];

export const mongoInterviewQuestions = [
  {
    question: 'How does MongoDB store data internally?',
    hint: 'MongoDB stores BSON documents inside collections. BSON supports richer types than JSON and documents have a 16MB size limit.',
  },
  {
    question: 'When should you embed instead of reference?',
    hint: 'Embed bounded data that is read with the parent. Reference large, shared, independently updated, or many-to-many data.',
  },
  {
    question: 'What is an aggregation pipeline?',
    hint: 'A sequence of stages where each stage transforms documents and passes the result to the next stage.',
  },
  {
    question: 'How do indexes improve performance?',
    hint: 'Indexes create sorted lookup structures so MongoDB can avoid scanning every document in a collection.',
  },
  {
    question: 'What is sharding?',
    hint: 'Horizontal scaling that splits data across shards using a shard key.',
  },
  {
    question: 'Explain replica sets.',
    hint: 'A group of MongoDB instances with one primary and multiple secondaries for replication and automatic failover.',
  },
  {
    question: 'How would you find the top 3 users by activity?',
    hint: 'Use aggregation with $group by userId, $sum activity, $sort descending, $limit 3, and optionally $lookup user details.',
  },
];

export const mongoProjects = [
  {
    level: 'Beginner',
    title: 'Student Management System',
    description: 'CRUD with filters, sorting, projection, query operators, and basic indexes.',
    accent: 'from-emerald-300/80 via-green-400/80 to-lime-300/80',
  },
  {
    level: 'Beginner',
    title: 'Notes App',
    description: 'Notes with tags, text search, draft expiry using TTL indexes, and simple user ownership.',
    accent: 'from-emerald-300/80 via-green-400/80 to-lime-300/80',
  },
  {
    level: 'Intermediate',
    title: 'Blog API',
    description: 'Users, posts, comments, populate, pagination, text search, and compound indexes.',
    accent: 'from-amber-300/80 via-orange-400/80 to-yellow-300/80',
  },
  {
    level: 'Intermediate',
    title: 'E-Commerce Backend',
    description: 'Products, carts, orders, inventory updates, transactions, and sales aggregation.',
    accent: 'from-amber-300/80 via-orange-400/80 to-yellow-300/80',
  },
  {
    level: 'Advanced',
    title: 'Analytics Dashboard',
    description: 'Daily metrics, monthly metrics, cohorts, funnels, and heavy aggregation pipelines.',
    accent: 'from-violet-300/80 via-fuchsia-400/80 to-pink-300/80',
  },
  {
    level: 'Advanced',
    title: 'Real-Time Chat App',
    description: 'Messages, read receipts, schema decisions, TTL for ephemeral messages, and Socket.io integration.',
    accent: 'from-cyan-300/80 via-blue-400/80 to-teal-300/80',
  },
];

export const mongoLearningPath = [
  { title: 'Basics', subtitle: 'CRUD, queries, projections, sorting, and operators.', accent: 'mongo' as MongoAccent },
  { title: 'Indexing and Schema Design', subtitle: 'Single, compound, text indexes, and embed vs reference decisions.', accent: 'amber' as MongoAccent },
  { title: 'Aggregation Framework', subtitle: '$match, $group, $project, $lookup, $unwind, $sort, and $limit.', accent: 'orange' as MongoAccent },
  { title: 'Backend Integration', subtitle: 'Node driver, Mongoose schemas, models, hooks, and REST APIs.', accent: 'blue' as MongoAccent },
  { title: 'Performance and Scaling', subtitle: 'explain, replica sets, sharding, transactions, and monitoring.', accent: 'violet' as MongoAccent },
  { title: 'Build Projects', subtitle: 'Blog API, e-commerce backend, analytics dashboard, and chat app.', accent: 'teal' as MongoAccent },
];

export const mongoCommonGaps = [
  {
    title: 'Skipping aggregation',
    description: 'Aggregation appears in interviews and real dashboards. Practice at least ten pipeline problems.',
  },
  {
    title: 'Ignoring schema design',
    description: 'Bad schema choices create slow queries and awkward updates. Design from the read path.',
  },
  {
    title: 'Forgetting indexes',
    description: 'CRUD that works locally can become painfully slow without the right indexes and explain checks.',
  },
  {
    title: 'Theory without projects',
    description: 'Build real APIs so pagination, text search, relationships, and indexes become concrete.',
  },
];

export const mongoReferences = [
  { title: 'MongoDB Docs', subtitle: 'Primary source', href: 'https://www.mongodb.com/docs/' },
  { title: 'MongoDB University', subtitle: 'Free official courses', href: 'https://learn.mongodb.com/' },
  { title: 'MongoDB Compass', subtitle: 'GUI for local development', href: 'https://www.mongodb.com/products/tools/compass' },
  { title: 'MongoDB Atlas', subtitle: 'Managed cloud clusters', href: 'https://www.mongodb.com/products/platform/atlas-database' },
  { title: 'Mongoose Docs', subtitle: 'ODM for Node.js', href: 'https://mongoosejs.com/docs/' },
  { title: 'Node.js Driver Docs', subtitle: 'Native driver reference', href: 'https://www.mongodb.com/docs/drivers/node/current/' },
];
