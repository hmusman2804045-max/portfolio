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

function toProject(repo: GitHubRepo): Project {
  return {
    title: cleanRepoName(repo.name),
    description: repo.description ?? 'View the source on GitHub.',
    language: repo.language,
    stars: repo.stargazers_count,
    repoUrl: repo.html_url,
  }
}

// Shown if the GitHub API is unreachable or rate-limited, so the section
// never renders empty. Snapshot of the live data from 2026-07-03.
const FALLBACK_PROJECTS: Project[] = FEATURED_REPOS.map((name) => ({
  title: cleanRepoName(name),
  description: 'View the source on GitHub.',
  language: 'Python',
  repoUrl: `https://github.com/hmusman2804045-max/${name}`,
}))

const MAINTAINABILITY_PROJECT: Project = {
  title: "AI Code Maintainability Scoring Engine",
  description: "A machine-learning system (Random Forest + CodeT5) that evaluates the structural quality of Python code via AST analysis and autonomously refactors risky code to improve its maintainability score. Features a 3D Glassmorphic UI with Post-Processing effects.",
  repoUrl: "https://github.com/hmusman2804045-max/AI-Code-Maintainability-Scoring-Engine-",
  liveLink: "https://ai-code-maintainability.hmuhammadusman.com",
  tags: ["Python", "Random Forest", "CodeT5", "React", "Three.js"],
  language: "Python",
  stars: 0,
  inDevelopment: false
}

const NEXUS_PROJECT: Project = {
  title: "Nexus // Multimodal AI Traffic System",
  description: "A complete AI pipeline that dynamically optimizes traffic flow. Designed 4 distinct models: YOLOv8 (CV), LSTMs (Time-Series), BERT (NLP), and PPO (RL) feeding into a futuristic React dashboard.",
  repoUrl: "https://github.com/hmusman2804045-max/Smart-Traffic-Optimization-System",
  liveLink: "https://nexus.hmuhammadusman.com",
  tags: ["PyTorch", "YOLOv8", "React", "FastAPI"],
  language: "Python",
  stars: 0,
  inDevelopment: false
}

const MANUAL_PROJECTS: Project[] = [
  {
    title: 'Urdu Sentiment & Emotion Analysis Engine',
    description: 'NLP engine that detects sentiment and emotion in Urdu text, built on a custom-collected corpus and served through a Flask API.',
    tags: ['Python', 'NLP', 'Transformers', 'Flask'],
    language: 'Python',
    inDevelopment: true,
  }
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
        setProjects(featured.length > 0 ? [MAINTAINABILITY_PROJECT, NEXUS_PROJECT, ...featured, ...MANUAL_PROJECTS] : [MAINTAINABILITY_PROJECT, NEXUS_PROJECT, ...FALLBACK_PROJECTS, ...MANUAL_PROJECTS])
      })
      .catch((err) => {
        if (err.name !== 'AbortError') setProjects([MAINTAINABILITY_PROJECT, NEXUS_PROJECT, ...FALLBACK_PROJECTS, ...MANUAL_PROJECTS])
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
                  className="h-full"
                >
                  <ProjectCard project={project} />
                </FadeUp>
              ))}
        </div>
      </div>
    </section>
  )
}
