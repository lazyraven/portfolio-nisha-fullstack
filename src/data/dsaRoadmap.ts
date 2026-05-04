export type DsaAccent =
  | 'yellow'
  | 'red'
  | 'sky'
  | 'orange'
  | 'teal'
  | 'violet'
  | 'pink'
  | 'amber'
  | 'cyan';

export interface DsaRoadmapCard {
  label: string;
  title: string;
  accent: DsaAccent;
  points: string[];
  note?: {
    title: string;
    body: string;
  };
}

export interface DsaRoadmapSection {
  id: string;
  title: string;
  caption: string;
  accent: DsaAccent;
  cards: DsaRoadmapCard[];
  code?: string;
}

export const dsaLearningLoop = [
  {
    step: '01',
    title: 'Analyze',
    description: 'Read the problem, identify constraints, and estimate time and space complexity before coding.',
    accent: 'from-yellow-300/80 via-amber-400/80 to-orange-300/80',
  },
  {
    step: '02',
    title: 'Pattern',
    description: 'Map the problem to a known pattern: two pointers, window, hashing, DFS, BFS, heap, or DP.',
    accent: 'from-red-300/80 via-rose-400/80 to-pink-300/80',
  },
  {
    step: '03',
    title: 'Implement',
    description: 'Write clean code with clear variable names and handle edge cases as part of the first pass.',
    accent: 'from-sky-300/80 via-cyan-400/80 to-blue-300/80',
  },
  {
    step: '04',
    title: 'Explain',
    description: 'Walk through an example, then explain why the algorithm works and what it costs.',
    accent: 'from-teal-300/80 via-emerald-400/80 to-lime-300/80',
  },
  {
    step: '05',
    title: 'Revise',
    description: 'Re-solve weak problems after a few days so pattern recognition becomes automatic.',
    accent: 'from-violet-300/80 via-fuchsia-400/80 to-pink-300/80',
  },
];

export const dsaRoadmapSections: DsaRoadmapSection[] = [
  {
    id: '00',
    title: 'Foundations',
    caption: 'Big-O, recursion, basic math, and complexity thinking make every later phase easier.',
    accent: 'yellow',
    cards: [
      {
        label: 'Complexity',
        title: 'Big-O Analysis',
        accent: 'yellow',
        points: [
          'Understand O(1), O(log n), O(n), O(n log n), O(n^2), and exponential growth.',
          'Separate time complexity from space complexity.',
          'Use constraints to decide whether brute force can pass.',
          'Practice deriving complexity from loops, recursion, and data structure operations.',
        ],
      },
      {
        label: 'Recursion',
        title: 'Base Cases and Call Stack',
        accent: 'violet',
        points: [
          'Every recursive function needs a base case and a smaller subproblem.',
          'Trace recursion with small inputs before trusting the code.',
          'Understand stack overflow and when iteration is safer.',
          'Backtracking and dynamic programming both build on recursion.',
        ],
      },
      {
        label: 'Core Tools',
        title: 'JavaScript DSA Setup',
        accent: 'cyan',
        points: [
          'Use arrays, objects, Map, Set, and custom classes confidently.',
          'Know when Array.shift is expensive for queues.',
          'Build small helper functions for frequency maps, bounds checks, and swaps.',
          'Use test cases for empty input, one item, duplicates, negatives, and sorted input.',
        ],
      },
    ],
    code: `function analyze(nums) {
  // O(n) time: one pass through the input
  // O(1) space: only two scalar variables
  let min = Infinity;
  let max = -Infinity;

  for (const value of nums) {
    min = Math.min(min, value);
    max = Math.max(max, value);
  }

  return { min, max };
}`,
  },
  {
    id: '01',
    title: 'Arrays and Strings',
    caption: 'Most interview patterns start here: pointers, windows, hashing, sorting, and prefix sums.',
    accent: 'red',
    cards: [
      {
        label: 'Two Pointers',
        title: 'Opposite Ends and Same Direction',
        accent: 'red',
        points: [
          'Use left and right pointers for sorted arrays and pair checks.',
          'Use slow and fast pointers for in-place filtering and duplicates.',
          'Common problems: Two Sum II, container with most water, valid palindrome.',
          'Great when brute force compares pairs in O(n^2).',
        ],
      },
      {
        label: 'Sliding Window',
        title: 'Subarray and Substring Ranges',
        accent: 'orange',
        points: [
          'Fixed window handles exact-size ranges.',
          'Variable window expands and shrinks while maintaining a condition.',
          'Common problems: max sum subarray, longest substring without repeats.',
          'Track counts, sums, or uniqueness inside the window.',
        ],
      },
      {
        label: 'Hashing',
        title: 'Map, Set, and Prefix Sum',
        accent: 'cyan',
        points: [
          'Use Map for counts, last seen indexes, and prefix sum frequencies.',
          'Use Set for membership checks and duplicate detection.',
          'Prefix sums convert range sums into subtraction.',
          'Common problems: Two Sum, subarray sum equals k, anagram grouping.',
        ],
      },
    ],
    code: `function longestUniqueSubstring(s) {
  const seen = new Map();
  let left = 0;
  let best = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    if (seen.has(char) && seen.get(char) >= left) {
      left = seen.get(char) + 1;
    }
    seen.set(char, right);
    best = Math.max(best, right - left + 1);
  }

  return best;
}`,
  },
  {
    id: '02',
    title: 'Linked Lists',
    caption: 'Linked lists teach pointer manipulation, cycle detection, reversal, and clean edge case handling.',
    accent: 'sky',
    cards: [
      {
        label: 'Basics',
        title: 'Nodes and Pointers',
        accent: 'sky',
        points: [
          'A singly linked list node stores a value and a next pointer.',
          'Access is O(n), but insertion at a known node can be O(1).',
          'Use dummy nodes to simplify insert and delete edge cases.',
          'Draw pointer changes before writing reversal logic.',
        ],
      },
      {
        label: 'Fast and Slow',
        title: 'Floyd Cycle Detection',
        accent: 'cyan',
        points: [
          'Move slow by one step and fast by two steps.',
          'If they meet, a cycle exists.',
          'Use the same pattern to find the middle node.',
          'Common problems: linked list cycle, happy number, remove nth from end.',
        ],
      },
      {
        label: 'Practice',
        title: 'Must-Solve Linked List Problems',
        accent: 'violet',
        points: [
          'Reverse linked list.',
          'Merge two sorted lists.',
          'Remove nth node from end.',
          'Detect cycle and find cycle start.',
          'Reorder list.',
        ],
      },
    ],
  },
  {
    id: '03',
    title: 'Stacks and Queues',
    caption: 'Use stacks for recent state and queues for level-order processing, scheduling, and BFS.',
    accent: 'orange',
    cards: [
      {
        label: 'Stack',
        title: 'LIFO State',
        accent: 'orange',
        points: [
          'Stack means last in, first out.',
          'Use stacks for balanced parentheses, undo, recursion simulation, and parsing.',
          'Monotonic stacks solve next greater and daily temperatures patterns.',
          'Push while useful, pop while the invariant breaks.',
        ],
      },
      {
        label: 'Queue',
        title: 'FIFO Processing',
        accent: 'sky',
        points: [
          'Queue means first in, first out.',
          'Use queues for BFS, task scheduling, and buffering.',
          'Avoid Array.shift for large queues; use a head index.',
          'Deque patterns support sliding window maximum.',
        ],
      },
      {
        label: 'Heap',
        title: 'Priority Queue',
        accent: 'amber',
        points: [
          'Heap gives quick access to min or max priority.',
          'Use heaps for top k, merge k lists, scheduling, and running median.',
          'JavaScript needs a custom heap or library implementation.',
          'Heap operations are usually O(log n).',
        ],
      },
    ],
  },
  {
    id: '04',
    title: 'Trees',
    caption: 'Trees train recursive thinking and appear constantly in frontend, backend, and interview problems.',
    accent: 'teal',
    cards: [
      {
        label: 'Traversal',
        title: 'DFS and BFS',
        accent: 'teal',
        points: [
          'DFS includes preorder, inorder, and postorder traversal.',
          'BFS uses a queue for level-order traversal.',
          'Recursive DFS is concise; iterative DFS avoids call stack limits.',
          'Know when the problem needs path state, subtree results, or levels.',
        ],
      },
      {
        label: 'BST',
        title: 'Binary Search Trees',
        accent: 'yellow',
        points: [
          'Left values are smaller and right values are larger.',
          'Inorder traversal of a BST is sorted.',
          'Search, insert, and delete depend on tree balance.',
          'Common problems: validate BST, kth smallest, lowest common ancestor.',
        ],
      },
      {
        label: 'Patterns',
        title: 'Tree Interview Moves',
        accent: 'cyan',
        points: [
          'Compute height and diameter.',
          'Check balance and symmetry.',
          'Serialize and deserialize trees.',
          'Use LCA for ancestor and path questions.',
          'Use recursion return values carefully.',
        ],
      },
    ],
  },
  {
    id: '05',
    title: 'Graphs',
    caption: 'Graphs model networks, grids, dependencies, routes, recommendations, and scheduling.',
    accent: 'violet',
    cards: [
      {
        label: 'Representation',
        title: 'Adjacency List and Matrix',
        accent: 'violet',
        points: [
          'Adjacency lists are memory efficient for sparse graphs.',
          'Adjacency matrices make edge lookup O(1) but cost O(V^2) space.',
          'Directed graphs have one-way edges; undirected graphs add edges both ways.',
          'Weighted graphs attach costs to edges.',
        ],
      },
      {
        label: 'Traversal',
        title: 'BFS and DFS',
        accent: 'sky',
        points: [
          'BFS finds shortest path by edge count in unweighted graphs.',
          'DFS explores connected components and path existence.',
          'Use visited sets to avoid repeated work and cycles.',
          'Grid problems are graph problems with bounds checks.',
        ],
      },
      {
        label: 'Advanced',
        title: 'Topo Sort, Union-Find, Dijkstra',
        accent: 'amber',
        points: [
          'Topological sort orders directed acyclic dependencies.',
          'Union-Find solves connectivity and component merging.',
          'Dijkstra finds shortest paths with non-negative weights.',
          'Common problems: course schedule, number of islands, network delay time.',
        ],
      },
    ],
  },
  {
    id: '06',
    title: 'Dynamic Programming',
    caption: 'DP is optimization through remembered subproblems. Learn it after recursion and core patterns feel solid.',
    accent: 'pink',
    cards: [
      {
        label: 'Top-Down',
        title: 'Memoization',
        accent: 'pink',
        points: [
          'Start with recursion and cache repeated subproblem results.',
          'Use arrays or Map objects for memo storage.',
          'The state definition is the heart of the solution.',
          'Great for problems where recursion is easier to discover first.',
        ],
      },
      {
        label: 'Bottom-Up',
        title: 'Tabulation',
        accent: 'violet',
        points: [
          'Fill a DP table iteratively from base cases.',
          'Avoids recursion stack overhead.',
          'Often easier to optimize space after the recurrence is clear.',
          'Use 1D DP for Fibonacci-like problems and 2D DP for string/table problems.',
        ],
      },
      {
        label: 'Classics',
        title: 'Must-Solve DP Problems',
        accent: 'amber',
        points: [
          'Climbing stairs and house robber.',
          'Longest increasing subsequence.',
          'Coin change.',
          '0/1 knapsack.',
          'Longest common subsequence and edit distance.',
        ],
        note: {
          title: 'Sequence matters',
          body: 'Do not jump to DP first. Strong arrays, recursion, trees, and graphs make DP much less slippery.',
        },
      },
    ],
  },
  {
    id: '07',
    title: 'Advanced Topics',
    caption: 'These patterns are powerful once the core phases are stable.',
    accent: 'amber',
    cards: [
      {
        label: 'Greedy and Bits',
        title: 'Local Choices and Binary Tricks',
        accent: 'amber',
        points: [
          'Greedy chooses a locally optimal option and needs proof.',
          'Interval scheduling and activity selection are classic greedy examples.',
          'Bit manipulation uses AND, OR, XOR, shifts, and masks.',
          'XOR helps find single number and missing values.',
        ],
      },
      {
        label: 'Trie',
        title: 'Prefix Tree',
        accent: 'teal',
        points: [
          'Trie stores characters along paths for O(L) prefix search.',
          'Use it for autocomplete, dictionary lookup, and word search.',
          'Operations include insert, search, and startsWith.',
          'Word Search II combines Trie with DFS backtracking.',
        ],
      },
      {
        label: 'Backtracking',
        title: 'Explore and Prune',
        accent: 'red',
        points: [
          'Choose an option, recurse, then undo the choice.',
          'Use pruning to avoid impossible branches.',
          'Common problems: subsets, permutations, combinations, N-Queens, word search.',
          'Backtracking is structured trial and correction.',
        ],
      },
    ],
  },
];

export const dsaPhaseBar = [
  { title: 'Big-O', accent: 'yellow' as DsaAccent },
  { title: 'Arrays', accent: 'red' as DsaAccent },
  { title: 'Lists', accent: 'sky' as DsaAccent },
  { title: 'Stacks', accent: 'orange' as DsaAccent },
  { title: 'Trees', accent: 'teal' as DsaAccent },
  { title: 'Graphs', accent: 'violet' as DsaAccent },
  { title: 'DP', accent: 'pink' as DsaAccent },
  { title: 'Advanced', accent: 'amber' as DsaAccent },
];

export const dsaWeekPlan = [
  {
    range: 'Days 1-14',
    title: 'Week 1-2',
    accent: 'red' as DsaAccent,
    items: ['Arrays and string patterns', 'Two-pointer technique', 'Sliding window pattern', 'Prefix sum and hashing', 'Solve 5 problems per day'],
  },
  {
    range: 'Days 15-21',
    title: 'Week 3',
    accent: 'orange' as DsaAccent,
    items: ['Linked list from scratch', 'Floyd cycle detection', 'Stack implementation', 'Monotonic stack pattern', 'Medium problem practice'],
  },
  {
    range: 'Days 22-28',
    title: 'Week 4',
    accent: 'teal' as DsaAccent,
    items: ['Binary tree DFS and BFS', 'BST operations', 'LCA pattern', 'Tree serialization', 'Daily tree problems'],
  },
  {
    range: 'Days 29-35',
    title: 'Week 5',
    accent: 'violet' as DsaAccent,
    items: ['Graph BFS and DFS', 'Topological sort', 'Union-Find basics', 'Dijkstra algorithm', 'Grid and dependency problems'],
  },
  {
    range: 'Days 36-42',
    title: 'Week 6',
    accent: 'pink' as DsaAccent,
    items: ['1D DP problems', '2D DP problems', 'Revise all phases', 'Mock interviews', 'Re-solve weak areas'],
  },
];

export const dsaDailyPlan = [
  { time: '1 hour', title: 'Theory', description: 'Read the concept, understand Big-O, and trace examples.', accent: 'yellow' as DsaAccent },
  { time: '2 hours', title: 'Problem Solving', description: 'Solve 2-3 problems and think before coding.', accent: 'teal' as DsaAccent },
  { time: '1 hour', title: 'Mini Project', description: 'Apply the concept in a small real-world build.', accent: 'sky' as DsaAccent },
  { time: 'Example', title: 'Arrays Day', description: 'Learn sliding window, solve two problems, then build a search filter UI.', accent: 'pink' as DsaAccent },
];

export const dsaMiniProjects = [
  {
    level: 'Beginner',
    title: 'Todo App with Priority Queue',
    tech: 'Heap / Priority Queue - greedy ordering',
    accent: 'from-yellow-300/80 via-amber-400/80 to-orange-300/80',
  },
  {
    level: 'Beginner',
    title: 'String Search Autocomplete',
    tech: 'Trie - prefix matching - string algorithms',
    accent: 'from-sky-300/80 via-cyan-400/80 to-blue-300/80',
  },
  {
    level: 'Intermediate',
    title: 'LRU Cache',
    tech: 'Doubly linked list + HashMap - O(1) operations',
    accent: 'from-orange-300/80 via-rose-400/80 to-amber-300/80',
  },
  {
    level: 'Intermediate',
    title: 'Chat Message Ordering',
    tech: 'Priority queue - timestamps - sorting',
    accent: 'from-teal-300/80 via-emerald-400/80 to-lime-300/80',
  },
  {
    level: 'Advanced',
    title: 'Route Finder',
    tech: 'Graph + Dijkstra - shortest path algorithm',
    accent: 'from-violet-300/80 via-fuchsia-400/80 to-indigo-300/80',
  },
  {
    level: 'Advanced',
    title: 'Recommendation System',
    tech: 'Graph traversal + DP - collaborative filtering',
    accent: 'from-pink-300/80 via-rose-400/80 to-fuchsia-300/80',
  },
];

export const dsaFocusAreas = [
  {
    title: 'Pattern Recognition',
    description: 'Spot the family of the problem before coding. Two pointers, sliding window, hashing, DFS, and DP repeat constantly.',
  },
  {
    title: 'Clean Code and Explanation',
    description: 'Use clear variables, walk through an example, and explain complexity after solving.',
  },
  {
    title: 'Medium-Level Mastery',
    description: 'Most interviews live in medium difficulty. Easy is baseline, hard is bonus.',
  },
];

export const dsaCommonMistakes = [
  {
    title: 'Jumping to DP too early',
    description: 'DP requires strong recursion and array foundations. Master simpler patterns first.',
  },
  {
    title: 'Not revising problems',
    description: 'Re-solve important problems after a week. Spaced repetition beats endless new problems.',
  },
  {
    title: 'Memorizing instead of understanding',
    description: 'Interviewers change inputs. Understanding why an approach works beats memorizing code.',
  },
];

export const dsaInterviewTopics = [
  'Two pointers',
  'Sliding window',
  'Floyd cycle detection',
  'Monotonic stack',
  'Tree DFS / BFS',
  'LCA pattern',
  'Graph BFS / DFS',
  'Topological sort',
  'Memoization',
  'Knapsack DP',
  'Backtracking',
  'Trie',
  'Dijkstra',
  'Big-O analysis',
  'LIS / LCS',
];

export const dsaReferences = [
  { title: 'LeetCode', subtitle: 'Best for interviews', href: 'https://leetcode.com/' },
  { title: 'GeeksforGeeks', subtitle: 'Theory and problems', href: 'https://www.geeksforgeeks.org/' },
  { title: 'HackerRank', subtitle: 'Coding challenges', href: 'https://www.hackerrank.com/' },
  { title: 'Codeforces', subtitle: 'Competitive programming', href: 'https://codeforces.com/' },
  { title: 'freeCodeCamp', subtitle: 'Free structured courses', href: 'https://www.freecodecamp.org/' },
  { title: 'Coursera', subtitle: 'University DSA courses', href: 'https://www.coursera.org/' },
];
