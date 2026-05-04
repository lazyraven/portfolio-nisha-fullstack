export type JavaAccent =
  | 'java'
  | 'pink'
  | 'cyan'
  | 'green'
  | 'yellow'
  | 'rose'
  | 'lime'
  | 'sky'
  | 'violet'
  | 'red';

export interface JavaRoadmapCard {
  label: string;
  title: string;
  accent: JavaAccent;
  points: string[];
  note?: {
    title: string;
    body: string;
  };
}

export interface JavaRoadmapSection {
  id: string;
  title: string;
  caption: string;
  accent: JavaAccent;
  cards: JavaRoadmapCard[];
  code?: string;
}

export const javaLearningLoop = [
  {
    step: '01',
    title: 'Core',
    description: 'Build comfort with syntax, OOP, exceptions, collections, and how Java code runs.',
    accent: 'from-orange-300/80 via-amber-400/80 to-yellow-300/80',
  },
  {
    step: '02',
    title: 'Depth',
    description: 'Learn internals: HashMap, JVM basics, threads, streams, generics, and memory behavior.',
    accent: 'from-pink-300/80 via-rose-400/80 to-fuchsia-300/80',
  },
  {
    step: '03',
    title: 'Backend',
    description: 'Use Spring Boot, REST, validation, layers, databases, JPA, and security.',
    accent: 'from-green-300/80 via-emerald-400/80 to-lime-300/80',
  },
  {
    step: '04',
    title: 'Quality',
    description: 'Add Maven or Gradle, Git, Docker, JUnit, Mockito, MockMvc, and integration tests.',
    accent: 'from-sky-300/80 via-cyan-400/80 to-blue-300/80',
  },
  {
    step: '05',
    title: 'Ship',
    description: 'Build real projects, deploy APIs, document endpoints, and practice interview explanations.',
    accent: 'from-violet-300/80 via-fuchsia-400/80 to-indigo-300/80',
  },
];

export const javaRoadmapSections: JavaRoadmapSection[] = [
  {
    id: '01',
    title: 'Core Java',
    caption: 'Start with language fundamentals, control flow, OOP, exceptions, and clean code habits.',
    accent: 'java',
    cards: [
      {
        label: 'Syntax',
        title: 'Variables, Types, and Control Flow',
        accent: 'java',
        points: [
          'Primitive types: byte, short, int, long, float, double, char, boolean.',
          'Reference types: String, arrays, classes, wrappers, and null behavior.',
          'Operators, if/else, switch expressions, loops, break, and continue.',
          'Type casting, autoboxing, final variables, and constants.',
        ],
      },
      {
        label: 'Methods',
        title: 'Classes, Methods, and Packages',
        accent: 'cyan',
        points: [
          'Method parameters, return types, overloading, varargs, and recursion.',
          'Classes, objects, constructors, static members, and instance members.',
          'Access modifiers: public, private, protected, and package-private.',
          'Packages and imports for organizing larger projects.',
        ],
      },
      {
        label: 'Exceptions',
        title: 'Error Handling',
        accent: 'rose',
        points: [
          'Checked vs unchecked exceptions.',
          'try, catch, finally, throw, and throws.',
          'Custom exception classes for business rules.',
          'try-with-resources for safe file, stream, and database cleanup.',
        ],
      },
    ],
    code: `public class User {
    private final String name;
    private final String email;

    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }
}`,
  },
  {
    id: '02',
    title: 'OOP and Advanced Java',
    caption: 'This is where Java interview questions start getting interesting.',
    accent: 'pink',
    cards: [
      {
        label: 'OOP',
        title: 'Four Pillars',
        accent: 'pink',
        points: [
          'Encapsulation hides fields behind behavior and validation.',
          'Inheritance reuses and specializes behavior through class hierarchies.',
          'Polymorphism lets one interface expose multiple implementations.',
          'Abstraction hides implementation details behind interfaces and abstract classes.',
        ],
      },
      {
        label: 'Collections',
        title: 'List, Set, Map, and Queue',
        accent: 'cyan',
        points: [
          'ArrayList vs LinkedList tradeoffs.',
          'HashSet, LinkedHashSet, and TreeSet ordering behavior.',
          'HashMap internals: hashCode, buckets, collisions, treeification.',
          'Comparable vs Comparator for sorting custom objects.',
        ],
        note: {
          title: 'High-value topic',
          body: 'HashMap internals, equals, and hashCode are among the most repeated Java interview areas.',
        },
      },
      {
        label: 'Modern Java',
        title: 'Lambdas, Streams, Optional',
        accent: 'violet',
        points: [
          'Functional interfaces and lambda syntax.',
          'Stream operations: filter, map, sorted, reduce, collect, forEach.',
          'Optional for explicit absence handling.',
          'Records, switch expressions, pattern matching, and text blocks in modern Java.',
        ],
      },
    ],
    code: `List<Integer> evens = numbers.stream()
    .filter(n -> n % 2 == 0)
    .map(n -> n * n)
    .sorted()
    .toList();

Optional<User> user = userRepository.findByEmail(email);
user.ifPresent(System.out::println);`,
  },
  {
    id: '03',
    title: 'Concurrency and DSA',
    caption: 'Practice DSA in parallel while learning Java threading and JVM fundamentals.',
    accent: 'cyan',
    cards: [
      {
        label: 'Threads',
        title: 'Concurrency Basics',
        accent: 'cyan',
        points: [
          'Thread vs Runnable and why starting a thread differs from calling run.',
          'synchronized, volatile, race conditions, deadlocks, and thread safety.',
          'ExecutorService and thread pools for practical concurrency.',
          'CompletableFuture for asynchronous composition.',
        ],
      },
      {
        label: 'JVM',
        title: 'Memory and Runtime',
        accent: 'violet',
        points: [
          'Stack vs heap memory.',
          'Garbage collection basics and object reachability.',
          'Class loading, bytecode, JDK, JRE, and JVM differences.',
          'Why String is immutable and how the string pool works.',
        ],
      },
      {
        label: 'DSA',
        title: 'Parallel Interview Practice',
        accent: 'yellow',
        points: [
          'Arrays, strings, linked lists, stacks, queues, trees, and graphs.',
          'HashMap-heavy problems and custom comparators.',
          'Recursion, backtracking, and dynamic programming basics.',
          'Use LeetCode or HackerRank with Java syntax.',
        ],
      },
    ],
  },
  {
    id: '04',
    title: 'Spring Boot Backend',
    caption: 'Move from Java language knowledge to real server-side applications.',
    accent: 'green',
    cards: [
      {
        label: 'Spring Core',
        title: 'DI, IoC, Beans',
        accent: 'green',
        points: [
          'Inversion of Control and dependency injection.',
          '@Component, @Service, @Repository, @Controller, and @Bean.',
          'ApplicationContext manages object creation and dependencies.',
          'Constructor injection is preferred for required dependencies.',
        ],
      },
      {
        label: 'REST',
        title: 'Controllers and APIs',
        accent: 'sky',
        points: [
          '@RestController, @RequestMapping, @GetMapping, @PostMapping.',
          'Request bodies, path variables, query params, and response status codes.',
          'DTOs to avoid exposing entities directly.',
          'Validation with @Valid and Bean Validation annotations.',
        ],
      },
      {
        label: 'Layers',
        title: 'Controller, Service, Repository',
        accent: 'lime',
        points: [
          'Controllers handle HTTP input and output.',
          'Services contain business logic.',
          'Repositories handle persistence.',
          'Use global exception handlers for clean API errors.',
        ],
      },
    ],
    code: `@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDto> getUser(@PathVariable Long id) {
        return ResponseEntity.ok(userService.findById(id));
    }

    @PostMapping
    public ResponseEntity<UserDto> createUser(@Valid @RequestBody CreateUserRequest request) {
        UserDto created = userService.create(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }
}`,
  },
  {
    id: '05',
    title: 'Database and Security',
    caption: 'Most Java backend roles expect SQL, JPA, Hibernate, and Spring Security basics.',
    accent: 'yellow',
    cards: [
      {
        label: 'Persistence',
        title: 'SQL and JPA/Hibernate',
        accent: 'yellow',
        points: [
          'SQL SELECT, JOIN, GROUP BY, indexes, and transactions.',
          'MySQL or PostgreSQL for relational data.',
          '@Entity, @Table, @Column, @Id, and @GeneratedValue.',
          'Relationships: @OneToMany, @ManyToOne, @ManyToMany, and join tables.',
        ],
      },
      {
        label: 'Repository',
        title: 'Spring Data JPA',
        accent: 'green',
        points: [
          'CrudRepository and JpaRepository patterns.',
          'Derived queries such as findByEmail and findByStatus.',
          '@Query for custom JPQL or native SQL.',
          'Pagination with Pageable and Page.',
          'Lazy vs eager loading and the N+1 problem.',
        ],
      },
      {
        label: 'Security',
        title: 'Spring Security and JWT',
        accent: 'rose',
        points: [
          'Authentication verifies identity; authorization checks permissions.',
          'Spring Security filter chain processes incoming requests.',
          'JWT access tokens and refresh token flow.',
          'BCrypt for password hashing.',
          '@PreAuthorize for method-level rules and role checks.',
        ],
      },
    ],
  },
  {
    id: '06',
    title: 'Tools, Testing, and System Design',
    caption: 'A Java backend engineer needs build tools, tests, deployment basics, and architecture vocabulary.',
    accent: 'sky',
    cards: [
      {
        label: 'Tools',
        title: 'Daily Development Stack',
        accent: 'lime',
        points: [
          'Maven pom.xml and Gradle build.gradle for dependency and build management.',
          'Git branches, commits, pull requests, and code review workflow.',
          'Postman or Insomnia for API testing.',
          'IntelliJ IDEA debugging, breakpoints, and refactoring shortcuts.',
          'Docker for containerized Spring Boot apps.',
        ],
      },
      {
        label: 'Testing',
        title: 'JUnit, Mockito, MockMvc',
        accent: 'sky',
        points: [
          'JUnit 5 with @Test, assertions, and lifecycle methods.',
          'Mockito for mocking service and repository dependencies.',
          '@SpringBootTest for integration tests.',
          'MockMvc for controller tests without a real server.',
          'Test happy paths, validation errors, auth failures, and edge cases.',
        ],
      },
      {
        label: 'Architecture',
        title: 'System Design Basics',
        accent: 'violet',
        points: [
          'Monolith vs microservices tradeoffs.',
          'REST design principles and API gateway pattern.',
          'Redis caching basics and cache invalidation.',
          'Message queues such as Kafka or RabbitMQ.',
          'Load balancing and horizontal scaling vocabulary.',
        ],
      },
    ],
  },
];

export const javaStack = [
  { title: 'Java', description: 'Core runtime, OOP foundation, collections, and concurrency.' },
  { title: 'Spring Boot', description: 'REST APIs, dependency injection, validation, and embedded server.' },
  { title: 'PostgreSQL/MySQL', description: 'Relational persistence, indexes, joins, and transactions.' },
  { title: 'Hibernate/JPA', description: 'Entity mapping, repositories, relationships, and query patterns.' },
  { title: 'Spring Security', description: 'JWT auth, roles, filters, and password hashing.' },
  { title: 'Docker', description: 'Containerized builds and deployment-ready services.' },
];

export const javaLearningPath = [
  { title: 'Core Java', subtitle: 'Variables, OOP, classes, constructors, access modifiers.', accent: 'java' as JavaAccent },
  { title: 'OOP Deep Understanding', subtitle: 'Inheritance, polymorphism, abstraction, interfaces, design patterns.', accent: 'java' as JavaAccent },
  { title: 'Collections and Multithreading', subtitle: 'HashMap internals, List/Set/Map, thread safety.', accent: 'pink' as JavaAccent },
  { title: 'Java 8+ Features', subtitle: 'Lambdas, streams, Optional, method references, records.', accent: 'pink' as JavaAccent },
  { title: 'DSA Parallel Practice', subtitle: 'Arrays, strings, trees, graphs, recursion, and DP.', accent: 'cyan' as JavaAccent },
  { title: 'Spring Boot and REST APIs', subtitle: 'Controllers, services, DI, validation, request lifecycle.', accent: 'green' as JavaAccent },
  { title: 'Database and JPA', subtitle: 'SQL, Hibernate, Spring Data, entity relationships.', accent: 'yellow' as JavaAccent },
  { title: 'Security', subtitle: 'Spring Security, JWT, roles, authentication flow.', accent: 'rose' as JavaAccent },
  { title: 'Projects and Deployment', subtitle: 'Build real projects, add Docker, tests, docs, and deploy.', accent: 'lime' as JavaAccent },
];

export const javaInterviewTopics = [
  'OOP principles',
  'HashMap internals',
  'ArrayList vs LinkedList',
  'Comparable vs Comparator',
  'Multithreading basics',
  'Pass by value',
  'String immutability',
  'Streams vs loops',
  'Lambda expressions',
  'Optional',
  'REST API design',
  'Spring Boot flow',
  'DI and IoC',
  'Lazy vs eager loading',
  'Checked vs unchecked',
];

export const javaInterviewQuestions = [
  {
    question: 'What happens inside HashMap?',
    answer: 'hashCode is called, a bucket index is calculated, collisions use linked nodes, and heavy collision buckets treeify. Average lookup is O(1), worst case is O(log n) after treeification.',
  },
  {
    question: 'Difference between ArrayList and LinkedList?',
    answer: 'ArrayList is fast for random access and slower for middle insert/delete. LinkedList is pointer-based, slower for access, and useful when you already hold the node position.',
  },
  {
    question: 'How does Spring Boot work internally?',
    answer: 'It uses auto-configuration, component scanning, ApplicationContext dependency injection, and an embedded server such as Tomcat to serve requests.',
  },
  {
    question: 'Why is String immutable?',
    answer: 'Immutability makes strings safe for pooling, hashing, sharing across threads, and secure use in paths, class loading, and credentials handling.',
  },
];

export const javaCommonGaps = [
  {
    title: 'Not writing clean code',
    description: 'Naming, formatting, small methods, and single responsibility matter as much as correctness in interviews and real work.',
  },
  {
    title: 'Skipping debugging skills',
    description: 'Read stack traces, use IntelliJ breakpoints, inspect variables, and learn to fix NullPointerException quickly.',
  },
  {
    title: 'Not building real projects',
    description: 'Tutorial code is not project experience. Build full CRUD APIs with JWT, tests, database, Docker, and deployment.',
  },
  {
    title: 'Memorizing syntax only',
    description: 'Know why HashMap uses hashing, why synchronization matters, and why JPA can create N+1 queries.',
  },
];

export const javaReferences = [
  { title: 'Oracle Java Docs', subtitle: 'Official language docs', href: 'https://docs.oracle.com/en/java/' },
  { title: 'Spring Boot Docs', subtitle: 'Spring official docs', href: 'https://spring.io/projects/spring-boot' },
  { title: 'Baeldung', subtitle: 'Java and Spring deep dives', href: 'https://www.baeldung.com/' },
  { title: 'LeetCode', subtitle: 'DSA interview practice', href: 'https://leetcode.com/' },
  { title: 'GeeksforGeeks', subtitle: 'Theory and examples', href: 'https://www.geeksforgeeks.org/' },
  { title: 'GitHub', subtitle: 'Show real projects', href: 'https://github.com/' },
];
