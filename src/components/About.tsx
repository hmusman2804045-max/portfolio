import FadeUp from './FadeUp'
import ProjectCard from './ProjectCard'
import type { Project } from './ProjectCard'

const PITCH =
  'I build intelligent systems, specializing in applied AI, machine learning, and bringing deep learning models into practical applications.'

const EDUCATION = 'BSCS — University of Management and Technology (UMT)'

const GITHUB_USER = 'https://github.com/hmusman2804045-max'

const PROJECTS: Project[] = [
  {
    title: 'Multi-Class Medical Image Classification System',
    description:
      'Deep learning pipeline that classifies medical scans across multiple disease categories, from dataset preprocessing to model evaluation.',
    tags: ['Python', 'Deep Learning', 'CNN', 'Computer Vision'],
    repoUrl: `${GITHUB_USER}/Multi-Class-Medical-Image-Classification-System`,
  },
  {
    title: 'AI Code Maintainability Scoring Engine',
    description:
      'Analyzes source code and scores its maintainability using machine learning, helping teams spot technical debt before it spreads.',
    tags: ['Python', 'Machine Learning', 'Static Analysis'],
    repoUrl: `${GITHUB_USER}/AI-Code-Maintainability-Scoring-Engine`,
  },
  {
    title: 'Smart Traffic Optimization System',
    description:
      'Data-driven system that models traffic flow and optimizes signal timing to reduce congestion at busy intersections.',
    tags: ['Python', 'Machine Learning', 'Optimization'],
    repoUrl: `${GITHUB_USER}/Smart-Traffic-Optimization-System`,
  },
  {
    title: 'Urdu Sentiment & Emotion Analysis Engine',
    description:
      'NLP engine that detects sentiment and emotion in Urdu text, built on a custom-collected corpus and served through a Flask API.',
    tags: ['Python', 'NLP', 'Transformers', 'Flask'],
    repoUrl: `${GITHUB_USER}/Urdu-Sentiment-and-Emotion-Analysis-Engine`,
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative z-[1] bg-neutral-950 px-8 py-28 max-[900px]:px-[18px] max-[900px]:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            About
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p
            className="mt-8 max-w-4xl font-bold text-white"
            style={{
              fontSize: 'clamp(22px, 2.4vw, 34px)',
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
            }}
          >
            {PITCH}
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="mt-14 border-t border-white/10 pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Education
            </p>
            <p className="mt-3 text-[15px] font-medium text-gray-200">
              {EDUCATION}
            </p>
          </div>
        </FadeUp>

        <div className="mt-16">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Project Work
            </p>
          </FadeUp>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project, i) => (
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
      </div>
    </section>
  )
}
