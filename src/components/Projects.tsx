import { useEffect, useState } from 'react'
import FadeUp from './FadeUp'
import ProjectCard from './ProjectCard'
import type { Project } from './ProjectCard'

const REPOS_API = 'https://api.github.com/users/hmusman2804045-max/repos'

// Exact repo names to show, in display order (trailing dashes are real).
const FEATURED_REPOS = [
  'Multi-Class-Medical-Image-Classification-System-Chest-X-ray-Based-',
  'fraud-detection-ml-',
]

interface GitHubRepo {
  name: string
  description: string | null
  language: string | null
  stargazers_count: number
  html_url: string
}

// "AI-Code-Maintainability-Scoring-Engine-" -> "AI Code Maintainability Scoring Engine"
function cleanRepoName(name: string) {
  return name.replace(/-/g, ' ').trim()
}

const LIVE_LINKS: Record<string, string> = {
  'Multi-Agent-Research-Assistant': 'https://research.hmuhammadusman.com',
  'Multi-Class-Medical-Image-Classification-System-Chest-X-ray-Based-': 'https://usman-ai-dev-healthscan-ai.hf.space',
  'Urdu-Sentiment-and-Emotion-Analysis-Engine': 'https://urdu-sentiment.hmuhammadusman.com',
}

function toProject(repo: GitHubRepo): Project {
  return {
    title: cleanRepoName(repo.name),
    description: repo.description ?? 'View the source on GitHub.',
    language: repo.language,
    stars: repo.stargazers_count,
    repoUrl: repo.html_url,
    liveLink: LIVE_LINKS[repo.name],
  }
}

// Shown if the GitHub API is unreachable or rate-limited, so the section
// never renders empty.
const FALLBACK_PROJECTS: Project[] = FEATURED_REPOS.map((name) => ({
  title: cleanRepoName(name),
  description: 'View the source on GitHub.',
  language: 'Python',
  repoUrl: `https://github.com/hmusman2804045-max/${name}`,
  liveLink: LIVE_LINKS[name],
}))

const RESEARCH_ASSISTANT_PROJECT: Project = {
  title: 'Multi-Agent Research Assistant',
  tagline: 'Autonomous 5-Agent AI Research Engine with Real-Time Fact Cross-Referencing, Contradiction Detection, and Cited Synthesis.',
  description:
    'An enterprise-grade autonomous deep research system. A specialized 5-agent pipeline deconstructs complex queries into multi-angle web searches, extracts verifiable XML claims, detects cross-source contradictions, and synthesizes structured Markdown reports with interactive citations.',
  repoUrl: 'https://github.com/hmusman2804045-max/Multi-Agent-Research-Assistant',
  liveLink: 'https://research.hmuhammadusman.com',
  hfLink: 'https://huggingface.co/spaces/usman-ai-dev/multi-agent-research-assistant',
  tags: [
    'Python 3.13',
    'FastAPI',
    'Groq (Llama 3.3 / GPT-OSS-20b)',
    'Tavily Search API',
    'React 18',
    'SSE Streaming',
    'MongoDB Atlas',
    'Docker Multi-Stage',
    '115 Tests Passing',
  ],
  highlights: [
    '5-Agent Pipeline: Planner (2–4 search angles), Search (Tavily with URL deduplication), Summarizer (XML claim parsing), Fact-Checker (cross-source consensus & contradiction detection), and Writer (cited Markdown synthesis).',
    'Real-Time SSE Streaming UI: Live stage progress checklist (planning → searching → summarizing → fact_checking → writing) with sub-second heartbeats and interactive source viewer.',
    'Enterprise-Grade Security: Dual-Key Storage Isolation (user_id + session_id), cryptographic JWT & PBKDF2 (100k rounds), sliding-window rate limiter, and anti-enumeration password reset.',
    '115 / 115 Automated Tests Passing: Full test suite verifying multi-agent handoffs, prompt injection defense delimiters, isolation, and streaming endpoints.',
  ],
  isFlagship: true,
  badge: 'Flagship Project',
  language: 'Python',
  stars: 0,
  inDevelopment: false,
}

const ASKMYDOCS_PROJECT: Project = {
  title: 'AskMyDocs AI — 3D Neural Document Q&A (RAG Engine)',
  description:
    'Enterprise-grade Retrieval-Augmented Generation (RAG) system with a 3D Three.js Neural Codex interface, grounded inline citations, session memory, and millisecond vector search over PDF documents.',
  repoUrl: 'https://github.com/hmusman2804045-max/rag-ask-my-docs',
  liveLink: 'https://askmydocs.hmuhammadusman.com/',
  apiDocsLink: 'https://askmydocs.hmuhammadusman.com/docs',
  tags: ['Python', 'FastAPI', 'LangChain', 'MongoDB Atlas', 'React', 'Three.js', 'Groq', 'Docker'],
  language: 'Python',
  stars: 0,
  inDevelopment: false,
}

const MAINTAINABILITY_PROJECT: Project = {
  title: 'AI Code Maintainability Scoring Engine',
  description:
    'A machine-learning system (Random Forest + CodeT5) that evaluates the structural quality of Python code via AST analysis and autonomously refactors risky code to improve its maintainability score. Features a 3D Glassmorphic UI with Post-Processing effects.',
  repoUrl: 'https://github.com/hmusman2804045-max/AI-Code-Maintainability-Scoring-Engine-',
  liveLink: 'https://ai-code-maintainability.hmuhammadusman.com',
  tags: ['Python', 'Random Forest', 'CodeT5', 'React', 'Three.js'],
  language: 'Python',
  stars: 0,
  inDevelopment: false,
}

const NEXUS_PROJECT: Project = {
  title: 'Nexus // Multimodal AI Traffic System',
  description:
    'A complete AI pipeline that dynamically optimizes traffic flow. Designed 4 distinct models: YOLOv8 (CV), LSTMs (Time-Series), BERT (NLP), and PPO (RL) feeding into a futuristic React dashboard.',
  repoUrl: 'https://github.com/hmusman2804045-max/Smart-Traffic-Optimization-System',
  liveLink: 'https://nexus.hmuhammadusman.com',
  tags: ['PyTorch', 'YOLOv8', 'React', 'FastAPI'],
  language: 'Python',
  stars: 0,
  inDevelopment: false,
}

const MANUAL_PROJECTS: Project[] = [
  {
    title: 'Urdu Sentiment & Emotion Analysis Engine',
    description:
      'A production-ready multilingual NLP engine that classifies sentiment and emotion in Urdu, Roman Urdu, and mixed-language text in real-time.',
    repoUrl: 'https://github.com/hmusman2804045-max/Urdu-Sentiment-and-Emotion-Analysis-Engine',
    liveLink: 'https://urdu-sentiment.hmuhammadusman.com',
    tags: ['PyTorch', 'FastAPI', 'Three.js', 'Modal'],
    language: 'Python',
    stars: 0,
    inDevelopment: false,
  },
]

function SkeletonCard() {
  return (
    <div className="h-56 animate-pulse rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
      <div className="h-5 w-3/4 rounded bg-white/10" />
      <div className="mt-4 h-3 w-full rounded bg-white/[0.07]" />
      <div className="mt-2 h-3 w-5/6 rounded bg-white/[0.07]" />
      <div className="mt-2 h-3 w-2/3 rounded bg-white/[0.07]" />
      <div className="mt-8 h-3 w-1/3 rounded bg-white/10" />
    </div>
  )
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[] | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    fetch(REPOS_API, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API responded ${res.status}`)
        return res.json() as Promise<GitHubRepo[]>
      })
      .then((repos) => {
        const featured = FEATURED_REPOS.map((name) =>
          repos.find((repo) => repo.name === name),
        )
          .filter((repo): repo is GitHubRepo => repo !== undefined)
          .map(toProject)
        setProjects(
          featured.length > 0
            ? [
                RESEARCH_ASSISTANT_PROJECT,
                ASKMYDOCS_PROJECT,
                MAINTAINABILITY_PROJECT,
                NEXUS_PROJECT,
                ...featured,
                ...MANUAL_PROJECTS,
              ]
            : [
                RESEARCH_ASSISTANT_PROJECT,
                ASKMYDOCS_PROJECT,
                MAINTAINABILITY_PROJECT,
                NEXUS_PROJECT,
                ...FALLBACK_PROJECTS,
                ...MANUAL_PROJECTS,
              ],
        )
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setProjects([
            RESEARCH_ASSISTANT_PROJECT,
            ASKMYDOCS_PROJECT,
            MAINTAINABILITY_PROJECT,
            NEXUS_PROJECT,
            ...FALLBACK_PROJECTS,
            ...MANUAL_PROJECTS,
          ])
        }
      })

    return () => controller.abort()
  }, [])

  return (
    <section
      id="projects"
      className="relative z-[1] bg-neutral-950 px-8 pb-28 pt-4 max-[900px]:px-[18px] max-[900px]:pb-20"
    >
      <div className="mx-auto max-w-6xl border-t border-white/10 pt-20 max-[900px]:pt-14">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Projects
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p
            className="mt-8 max-w-3xl font-bold text-white"
            style={{
              fontSize: 'clamp(22px, 2.4vw, 34px)',
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
            }}
          >
            Selected work, straight from GitHub.
          </p>
        </FadeUp>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects === null
            ? FEATURED_REPOS.map((name) => <SkeletonCard key={name} />)
            : projects.map((project, i) => (
                <FadeUp
                  key={project.title}
                  delay={0.1 + i * 0.1}
                  y={24}
                  className={project.isFlagship ? 'col-span-1 md:col-span-2 h-full' : 'h-full'}
                >
                  <ProjectCard project={project} />
                </FadeUp>
              ))}
        </div>
      </div>
    </section>
  )
}
