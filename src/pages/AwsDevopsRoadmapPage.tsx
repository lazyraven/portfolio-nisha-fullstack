import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FiArrowLeft,
  FiBookOpen,
  FiChevronRight,
  FiCloud,
  FiCode,
  FiDatabase,
  FiExternalLink,
  FiGitBranch,
  FiHome,
  FiLayers,
  FiMonitor,
  FiPackage,
  FiShield,
  FiTarget,
  FiTool,
  FiZap,
} from 'react-icons/fi';

type Accent = 'orange' | 'teal' | 'violet' | 'amber' | 'rose' | 'sky' | 'emerald' | 'pink';

const accentMap: Record<Accent, string> = {
  orange: 'from-orange-300/90 via-amber-400/90 to-yellow-300/90',
  teal: 'from-teal-300/85 via-cyan-400/85 to-emerald-300/85',
  violet: 'from-violet-300/85 via-fuchsia-400/85 to-indigo-300/85',
  amber: 'from-amber-300/85 via-yellow-400/85 to-orange-300/85',
  rose: 'from-rose-300/85 via-red-400/85 to-orange-300/85',
  sky: 'from-sky-300/85 via-cyan-400/85 to-blue-300/85',
  emerald: 'from-emerald-300/85 via-green-400/85 to-lime-300/85',
  pink: 'from-pink-300/85 via-rose-400/85 to-fuchsia-300/85',
};

const chipStyles: Record<Accent, string> = {
  orange: 'border-orange-300/40 bg-orange-400/10 text-orange-700 dark:text-orange-300',
  teal: 'border-teal-300/40 bg-teal-400/10 text-teal-700 dark:text-teal-300',
  violet: 'border-violet-300/40 bg-violet-400/10 text-violet-700 dark:text-violet-300',
  amber: 'border-amber-300/40 bg-amber-400/10 text-amber-700 dark:text-amber-300',
  rose: 'border-rose-300/40 bg-rose-400/10 text-rose-700 dark:text-rose-300',
  sky: 'border-sky-300/40 bg-sky-400/10 text-sky-700 dark:text-sky-300',
  emerald: 'border-emerald-300/40 bg-emerald-400/10 text-emerald-700 dark:text-emerald-300',
  pink: 'border-pink-300/40 bg-pink-400/10 text-pink-700 dark:text-pink-300',
};

const learningLoop = [
  { step: '01', title: 'Fundamentals', description: 'DevOps lifecycle, Git workflows, Linux basics, and automation habits.', accent: 'pink' as Accent },
  { step: '02', title: 'AWS Core', description: 'Compute, storage, database, networking, and real architecture combinations.', accent: 'teal' as Accent },
  { step: '03', title: 'Delivery', description: 'CI/CD stages, pipeline as code, testing, rollbacks, and release safety.', accent: 'orange' as Accent },
  { step: '04', title: 'Runtime', description: 'Docker, ECR, ECS, EKS, Terraform, CloudFormation, and CloudWatch.', accent: 'sky' as Accent },
  { step: '05', title: 'Projects', description: 'Build deployable systems that can survive portfolio and interview questions.', accent: 'emerald' as Accent },
];

const roadmapSections = [
  {
    id: '01',
    title: 'Core DevOps Concepts',
    caption: 'The operating model: collaboration, version control, repeatable delivery, and fast recovery.',
    accent: 'pink' as Accent,
    icon: FiGitBranch,
    cards: [
      {
        label: 'Lifecycle',
        title: 'DevOps Lifecycle',
        accent: 'pink' as Accent,
        points: [
          'Plan -> Code -> Build -> Test -> Deploy -> Monitor',
          'Teams collaborate through Git and automated pipelines',
          'Automation reduces manual deployment errors',
          'Version control: feature branch, trunk-based, tags, and releases',
          'Linux basics: permissions, processes, logs, networking',
        ],
        note: {
          title: 'Interview angle',
          body: 'DevOps matters because it reduces release time, improves reliability, and makes continuous delivery practical through automation.',
        },
      },
      {
        label: 'Pipelines',
        title: 'CI/CD Pipelines',
        accent: 'orange' as Accent,
        points: [
          'Pipeline stages: build, test, package, deploy',
          'CI vs CD vs continuous deployment',
          'Tools: Jenkins, GitHub Actions, CodePipeline, CodeBuild',
          'Pipeline as code using YAML',
          'Rollback, health checks, and failure handling strategies',
        ],
        note: {
          title: 'Failure playbook',
          body: 'Rollback to the previous stable version, use health checks, keep deployment logs, and trigger alerts for the owning team.',
        },
      },
      {
        label: 'Git',
        title: 'Git Workflows',
        accent: 'violet' as Accent,
        points: [
          'Feature branch workflow for isolated development',
          'Trunk-based development for fast integration',
          'Pull requests, code reviews, and branch protection',
          'Commit conventions, tags, and release notes',
          'Merge strategies: squash, rebase, and merge commits',
        ],
      },
    ],
  },
  {
    id: '02',
    title: 'AWS Core Services',
    caption: 'The services that show up constantly in real-world deployment architecture and interviews.',
    accent: 'teal' as Accent,
    icon: FiCloud,
    cards: [
      {
        label: 'Compute',
        title: 'EC2, Lambda, ECS, EKS',
        accent: 'teal' as Accent,
        points: [
          'EC2 for scalable virtual machines and long-running workloads',
          'Lambda for event-driven, stateless serverless functions',
          'ECS and EKS for managed containers and Kubernetes',
          'Auto Scaling Groups for availability and demand spikes',
          'Spot instances and right-sizing for cost optimization',
        ],
        note: {
          title: 'EC2 vs Lambda',
          body: 'Use EC2 for persistent workloads with server control. Use Lambda for short event-driven tasks that scale automatically.',
        },
      },
      {
        label: 'Storage',
        title: 'Storage and Databases',
        accent: 'sky' as Accent,
        points: [
          'S3 for object storage, static hosting, artifacts, and backups',
          'EBS for block storage attached to EC2',
          'RDS for managed SQL databases such as PostgreSQL and MySQL',
          'DynamoDB for serverless NoSQL access patterns',
          'S3 storage classes: Standard, IA, Glacier, and lifecycle rules',
        ],
      },
      {
        label: 'Networking',
        title: 'VPC, Load Balancing, CDN',
        accent: 'violet' as Accent,
        points: [
          'VPC as an isolated virtual network boundary',
          'Public and private subnets with route tables',
          'ALB and NLB for application and network traffic',
          'Internet Gateway, NAT Gateway, Route 53, and CloudFront',
          'Security Groups vs Network ACLs',
        ],
      },
      {
        label: 'Architecture',
        title: 'Real-World AWS Combos',
        accent: 'emerald' as Accent,
        points: [
          'EC2 + ALB + RDS for a traditional web application',
          'Lambda + API Gateway + DynamoDB for a serverless API',
          'ECS + ECR + ALB for a containerized service',
          'S3 + CloudFront for static site delivery',
          'CodePipeline + CodeBuild + ECS for full CI/CD',
        ],
      },
    ],
  },
  {
    id: '03',
    title: 'Infrastructure as Code and Containers',
    caption: 'Provision repeatable infrastructure, package apps predictably, and run them on managed container platforms.',
    accent: 'violet' as Accent,
    icon: FiLayers,
    cards: [
      {
        label: 'Terraform',
        title: 'Terraform',
        accent: 'violet' as Accent,
        points: [
          'Write declarative infrastructure using HCL',
          'Create EC2, VPC, subnets, IAM, and load balancers through code',
          'Use variables, modules, outputs, and environments',
          'Store remote state in S3 with DynamoDB locking',
          'Practice plan, apply, destroy, and drift review workflows',
        ],
        note: {
          title: 'Why IaC?',
          body: 'IaC gives repeatability, version control, automated provisioning, peer review, and fewer manual infrastructure mistakes.',
        },
      },
      {
        label: 'CloudFormation',
        title: 'CloudFormation and CDK',
        accent: 'amber' as Accent,
        points: [
          'Use AWS-native IaC with YAML or JSON templates',
          'Understand stacks, nested stacks, and change sets',
          'Use rollback behavior for failed deployments',
          'Integrate natively with AWS service coverage',
          'Use CDK to define infrastructure in TypeScript or Python',
        ],
      },
      {
        label: 'Docker',
        title: 'Docker and ECR',
        accent: 'sky' as Accent,
        points: [
          'Dockerfile basics: FROM, RUN, COPY, EXPOSE, CMD',
          'Build images locally and push them to ECR',
          'Use multi-stage builds for smaller production images',
          'Use docker-compose for local development',
          'Apply layer caching and image scanning best practices',
        ],
      },
      {
        label: 'Runtime',
        title: 'ECS and EKS',
        accent: 'emerald' as Accent,
        points: [
          'ECS Fargate for serverless containers',
          'Task definitions, services, clusters, and deployments',
          'EKS for managed Kubernetes on AWS',
          'Pods, deployments, services, ingress, and autoscaling',
          'Horizontal Pod Autoscaler and cluster observability basics',
        ],
      },
    ],
  },
  {
    id: '04',
    title: 'Monitoring, Logging, and Security',
    caption: 'Make deployments observable, secure access, manage secrets, and ship changes with controlled rollout patterns.',
    accent: 'amber' as Accent,
    icon: FiMonitor,
    cards: [
      {
        label: 'Observability',
        title: 'Monitoring Tools',
        accent: 'amber' as Accent,
        points: [
          'CloudWatch metrics, logs, alarms, and dashboards',
          'Prometheus and Grafana for open-source monitoring',
          'ELK stack for centralized log search and analysis',
          'Track CPU, memory, latency, error rate, and saturation',
          'Create alert policies tied to service ownership',
        ],
      },
      {
        label: 'Security',
        title: 'IAM and Secrets',
        accent: 'rose' as Accent,
        points: [
          'IAM users, groups, roles, policies, and permission boundaries',
          'Apply least privilege access everywhere',
          'Use roles for services instead of long-lived access keys',
          'Never hardcode secrets in code or pipeline YAML',
          'Use Secrets Manager or SSM Parameter Store for secrets',
        ],
        note: {
          title: 'IAM best practices',
          body: 'Use least privilege, MFA, short-lived credentials, service roles, rotation, and centralized secret storage.',
        },
      },
      {
        label: 'Releases',
        title: 'Deployment Strategies',
        accent: 'orange' as Accent,
        points: [
          'Blue-green deployment: two environments with an instant traffic switch',
          'Canary deployment: gradual traffic shift from 5% to 100%',
          'Rolling deployment: replace instances incrementally',
          'Feature flags for controlled releases',
          'Health-check gates before promotion',
        ],
      },
    ],
  },
];

const heroChips: [string, Accent][] = [
  ['CI/CD', 'orange'],
  ['AWS Core', 'teal'],
  ['Terraform', 'violet'],
  ['Docker', 'sky'],
  ['Security', 'rose'],
];

const interviewTopics: [string, Accent][] = [
  ['CI/CD Pipeline Design', 'orange' as Accent],
  ['Failure Handling and Rollback', 'orange' as Accent],
  ['IAM Roles and Policies', 'rose' as Accent],
  ['VPC Basics and Networking', 'teal' as Accent],
  ['EC2 vs Lambda', 'teal' as Accent],
  ['S3 and Storage Classes', 'sky' as Accent],
  ['Docker and Containers', 'sky' as Accent],
  ['ECS / EKS Deployment', 'emerald' as Accent],
  ['Blue-Green Deployment', 'rose' as Accent],
  ['Canary Releases', 'rose' as Accent],
  ['Terraform Basics', 'violet' as Accent],
  ['CloudWatch Alerts', 'amber' as Accent],
  ['Load Balancer: ALB / NLB', 'teal' as Accent],
  ['Secrets Management', 'rose' as Accent],
];

const weekPlan = [
  {
    week: 'Week 1',
    title: 'DevOps and AWS Basics',
    accent: 'pink' as Accent,
    project: 'Host a static website on S3',
    days: [
      'DevOps basics and lifecycle',
      'Git commands and branching',
      'GitHub repo and workflow',
      'AWS account and EC2 intro',
      'Launch EC2 and SSH access',
      'Install Node app on EC2',
      'S3 static hosting',
    ],
  },
  {
    week: 'Week 2',
    title: 'Compute and Networking',
    accent: 'teal' as Accent,
    project: 'Deploy Node.js on EC2 with ALB',
    days: [
      'VPC basics',
      'Subnets and route tables',
      'Security groups setup',
      'Load balancer setup',
      'Attach EC2 to ALB',
      'Health checks config',
      'Mini project complete',
    ],
  },
  {
    week: 'Week 3',
    title: 'CI/CD Pipelines',
    accent: 'orange' as Accent,
    project: 'CI/CD pipeline for a Node app',
    days: [
      'CI/CD concepts',
      'GitHub Actions intro',
      'Build pipeline with YAML',
      'Add testing stage',
      'Deploy via pipeline',
      'Failure handling and alerts',
      'CI/CD project done',
    ],
  },
  {
    week: 'Week 4',
    title: 'Containers and Docker',
    accent: 'sky' as Accent,
    project: 'Dockerize app and deploy to ECS',
    days: [
      'Docker basics',
      'Create Dockerfile',
      'Build image locally',
      'Push to ECR registry',
      'ECS intro and Fargate',
      'Deploy container to ECS',
      'Container project done',
    ],
  },
  {
    week: 'Week 5',
    title: 'IaC and Monitoring',
    accent: 'violet' as Accent,
    project: 'Full infrastructure using Terraform',
    days: [
      'Terraform basics and HCL',
      'Create EC2 via Terraform',
      'VPC via Terraform',
      'Variables and modules',
      'CloudWatch logs setup',
      'Metrics and alarms',
      'Monitoring dashboard',
    ],
  },
  {
    week: 'Week 6',
    title: 'Advanced and Final Project',
    accent: 'amber' as Accent,
    project: 'Full AWS DevOps pipeline',
    days: [
      'IAM deep dive',
      'Roles and policies',
      'Blue-green deployment',
      'Canary deployment',
      'Final project setup',
      'Complete pipeline',
      'Review and mock interview',
    ],
  },
];

const projects = [
  {
    title: 'CI/CD Pipeline',
    subtitle: 'Most important portfolio project',
    accent: 'orange' as Accent,
    flow: ['GitHub', 'CI/CD Pipeline', 'EC2 / ECS', 'ALB', 'S3 Artifacts'],
    features: ['Auto build on commit', 'Run tests', 'Deploy to EC2/ECS', 'Rollback support', 'Health checks', 'Failure alerts'],
  },
  {
    title: 'Full DevOps Pipeline',
    subtitle: 'Containerized production-style deployment',
    accent: 'emerald' as Accent,
    flow: ['Docker', 'ECS Fargate', 'Terraform IaC', 'CloudWatch'],
    features: ['Dockerized app', 'Terraform provisioning', 'ECS deployment', 'CloudWatch monitoring', 'IAM roles', 'Secrets Manager'],
  },
];

const commands = [
  { label: 'AWS CLI', lines: ['aws configure', 'aws s3 ls', 'aws ec2 describe-instances'] },
  { label: 'Docker', lines: ['docker build -t app .', 'docker run -p 3000:3000 app', 'docker push <account>.dkr.ecr.<region>.amazonaws.com/app'] },
  { label: 'Terraform', lines: ['terraform init', 'terraform plan', 'terraform apply'] },
  { label: 'GitHub Actions', lines: ['on: [push]', 'jobs: build-test-deploy', 'uses: actions/checkout@v4'] },
];

const references = [
  { title: 'AWS Documentation', subtitle: 'docs.aws.amazon.com', href: 'https://docs.aws.amazon.com', icon: FiCloud },
  { title: 'AWS Free Tier', subtitle: 'aws.amazon.com/free', href: 'https://aws.amazon.com/free', icon: FiZap },
  { title: 'AWS Skill Builder', subtitle: 'explore.skillbuilder.aws', href: 'https://explore.skillbuilder.aws', icon: FiBookOpen },
  { title: 'GitHub Projects', subtitle: 'Practice repos and forks', href: 'https://github.com', icon: FiGitBranch },
];

export default function AwsDevopsRoadmapPage() {
  return (
    <div className="app-shell roadmap-mesh relative min-h-screen overflow-hidden bg-slate-50 text-slate-950 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animated-blob top-8 left-6 h-72 w-72 bg-orange-400/18" />
        <div className="animated-blob right-8 top-40 h-80 w-80 bg-cyan-400/16" />
        <div className="animated-blob bottom-0 left-1/3 h-72 w-72 bg-violet-500/14" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex items-center justify-between"
        >
          <Link
            to="/roadmaps"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-300"
          >
            <FiArrowLeft className="h-4 w-4" />
            Back to Roadmaps
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-300"
          >
            <FiHome className="h-4 w-4" />
            Home
          </Link>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="floating-panel relative overflow-hidden px-6 py-10 sm:px-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.18),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(45,212,191,0.13),transparent_26%),linear-gradient(135deg,rgba(15,23,42,0.02),transparent)] dark:bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.15),transparent_24%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,0.11),transparent_24%),linear-gradient(135deg,rgba(15,23,42,0.15),transparent)]" />
          <div className="relative">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/65 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-500 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-400">
              <FiCloud className="h-3.5 w-3.5" />
              Complete learning path
            </div>

            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <h1 className="font-serif text-5xl font-black leading-[0.92] tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
                  <span className="block bg-gradient-to-r from-orange-300 via-cyan-300 to-violet-300 bg-clip-text text-transparent">
                    AWS DevOps
                  </span>
                  <span className="block">Roadmap</span>
                  <span className="mt-2 block text-2xl font-semibold tracking-[0.18em] text-slate-400 dark:text-slate-500 sm:text-3xl">
                    42-Day Plan
                  </span>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
                  A portfolio-native AWS DevOps roadmap for cloud fundamentals, CI/CD, infrastructure as code, containers, monitoring, security, and real deployment projects.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:w-[25rem]">
                {[
                  { label: 'Length', value: '6 Weeks' },
                  { label: 'Focus', value: 'DevOps' },
                  { label: 'Ready', value: 'Interview' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200/70 bg-white/75 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60"
                  >
                    <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {heroChips.map(([pill, accent]) => (
                <span key={pill} className={`rounded-full border px-4 py-2 text-sm font-medium ${chipStyles[accent]}`}>
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-8 grid gap-4 rounded-[1.75rem] border border-slate-200/70 bg-white/70 p-3 shadow-lg shadow-slate-900/5 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/55 md:grid-cols-5"
        >
          {learningLoop.map((item) => (
            <div
              key={item.step}
              className="relative overflow-hidden rounded-[1.25rem] border border-slate-200/70 bg-white/80 p-5 dark:border-white/10 dark:bg-slate-950/50"
            >
              <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${accentMap[item.accent]}`} />
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">{item.step}</p>
              <h2 className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.description}</p>
            </div>
          ))}
        </motion.div>

        <div className="mt-10 space-y-10">
          {roadmapSections.map((section, sectionIndex) => {
            const Icon = section.icon;

            return (
              <motion.section
                key={section.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12 + sectionIndex * 0.05 }}
                className="space-y-5"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400 dark:text-slate-500">
                      Section {section.id}
                    </p>
                    <h2 className="mt-2 flex items-center gap-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                      <span className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br ${accentMap[section.accent]} text-slate-950 shadow-lg shadow-slate-900/10`}>
                        <Icon className="h-5 w-5" />
                      </span>
                      {section.title}
                    </h2>
                  </div>
                  <p className="max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400">{section.caption}</p>
                </div>

                <div className="roadmap-grid">
                  {section.cards.map((card) => (
                    <article
                      key={`${section.id}-${card.title}`}
                      className="roadmap-card group relative overflow-hidden rounded-[1.5rem] border border-slate-200/70 bg-white/82 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-slate-900/65"
                    >
                      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accentMap[card.accent]}`} />
                      <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                        {card.label}
                      </p>
                      <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{card.title}</h3>
                      <ul className="mt-5 space-y-3">
                        {card.points.map((point) => (
                          <li key={point} className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                            <FiChevronRight className="mt-1 h-4 w-4 shrink-0 text-cyan-500 dark:text-cyan-300" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      {card.note && (
                        <div className="mt-5 rounded-2xl border border-white/50 bg-slate-100/70 p-4 dark:border-white/10 dark:bg-slate-950/55">
                          <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">{card.note.title}</p>
                          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{card.note.body}</p>
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </motion.section>
            );
          })}
        </div>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.36 }}
          className="mt-12"
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-2xl bg-gradient-to-br from-orange-400/20 to-cyan-400/20 p-3 text-orange-600 dark:text-orange-300">
              <FiTarget className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400 dark:text-slate-500">Focus area</p>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Must-Know Interview Topics</h2>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {interviewTopics.map(([topic, accent]) => (
              <span key={topic} className={`rounded-full border px-4 py-2 text-sm font-medium ${chipStyles[accent]}`}>
                {topic}
              </span>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.42 }}
          className="mt-12"
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-2xl bg-gradient-to-br from-pink-400/20 to-violet-400/20 p-3 text-pink-600 dark:text-pink-300">
              <FiBookOpen className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400 dark:text-slate-500">Step 05</p>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">42-Day Detailed Learning Plan</h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {weekPlan.map((week) => (
              <article
                key={week.week}
                className="overflow-hidden rounded-[1.5rem] border border-slate-200/70 bg-white/80 shadow-xl shadow-slate-900/5 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/65"
              >
                <div className={`bg-gradient-to-r ${accentMap[week.accent]} p-5 text-slate-950`}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] opacity-70">{week.week}</p>
                  <h3 className="mt-2 text-lg font-bold">{week.title}</h3>
                </div>
                <div className="p-5">
                  <ol className="space-y-3">
                    {week.days.map((day, index) => (
                      <li key={day} className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        <span className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                          Day {index + 1}
                        </span>
                        <span>{day}</span>
                      </li>
                    ))}
                  </ol>
                  <div className={`mt-5 rounded-2xl border px-4 py-3 text-sm font-semibold ${chipStyles[week.accent]}`}>
                    Project: {week.project}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.48 }}
          className="mt-12"
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-2xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 p-3 text-emerald-600 dark:text-emerald-300">
              <FiPackage className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400 dark:text-slate-500">Step 06</p>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Real-World Projects</h2>
            </div>
          </div>
          <div className="space-y-4">
            {projects.map((project) => (
              <article
                key={project.title}
                className="roadmap-card relative overflow-hidden rounded-[1.5rem] border border-slate-200/70 bg-white/82 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/65"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accentMap[project.accent]}`} />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{project.subtitle}</p>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {project.flow.map((node, index) => (
                    <div key={`${project.title}-${node}`} className="flex items-center gap-2">
                      <span className={`rounded-full border px-4 py-2 text-sm font-semibold ${chipStyles[project.accent]}`}>
                        {node}
                      </span>
                      {index < project.flow.length - 1 && <FiChevronRight className="h-4 w-4 text-slate-400" />}
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-slate-200/70 bg-slate-100/70 px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-slate-950/50 dark:text-slate-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.54 }}
          className="mt-12 grid gap-4 lg:grid-cols-[1fr_1fr]"
        >
          <div className="rounded-[1.5rem] border border-slate-200/70 bg-white/80 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/65">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-2xl bg-gradient-to-br from-sky-400/20 to-violet-400/20 p-3 text-sky-600 dark:text-sky-300">
                <FiCode className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400 dark:text-slate-500">Cheat sheet</p>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Commands to Practice</h2>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {commands.map((command) => (
                <div key={command.label} className="rounded-2xl border border-slate-200/70 bg-slate-100/70 p-4 dark:border-white/10 dark:bg-slate-950/55">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">{command.label}</p>
                  <div className="roadmap-code mt-3 space-y-2">
                    {command.lines.map((line) => (
                      <code key={line} className="block text-xs leading-5 text-cyan-700 dark:text-cyan-300">
                        {line}
                      </code>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200/70 bg-white/80 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/65">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-2xl bg-gradient-to-br from-teal-400/20 to-emerald-400/20 p-3 text-teal-600 dark:text-teal-300">
                <FiTool className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400 dark:text-slate-500">Step 07</p>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">References and Resources</h2>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {references.map((reference) => {
                const Icon = reference.icon;

                return (
                  <a
                    key={reference.title}
                    href={reference.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-slate-200/70 bg-slate-100/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 dark:border-white/10 dark:bg-slate-950/55 dark:hover:border-cyan-400/30"
                  >
                    <div className="flex items-start gap-3">
                      <div className="rounded-xl bg-white/80 p-2 text-cyan-600 dark:bg-slate-900 dark:text-cyan-300">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">{reference.title}</p>
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{reference.subtitle}</p>
                      </div>
                      <FiExternalLink className="ml-auto h-4 w-4 text-slate-400 transition group-hover:text-cyan-500" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.section>

        <footer className="mt-12 border-t border-slate-200/70 py-8 text-center text-sm text-slate-500 dark:border-white/10 dark:text-slate-500">
          AWS DevOps Roadmap - Interview-ready, project-focused, and shaped for real deployments.
        </footer>
      </div>
    </div>
  );
}
