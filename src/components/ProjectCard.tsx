import { motion } from 'framer-motion'

export interface Project {
  title: string
  description: string
  repoUrl?: string
  tags?: string[]
  language?: string | null
  stars?: number
  inDevelopment?: boolean
}

const LANGUAGE_COLORS: Record<string, string> = {
  Python: '#3572A5',
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  CSS: '#663399',
  HTML: '#e34c26',
  'Jupyter Notebook': '#DA5B0B',
}

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden
      className="h-4 w-4"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  )
}

function StarIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden
      className="h-3.5 w-3.5"
    >
      <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
    </svg>
  )
}

export default function ProjectCard({ project }: { project: Project }) {
  const languageColor =
    (project.language && LANGUAGE_COLORS[project.language]) ?? '#9ca3af'

  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors duration-300 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:shadow-[0_8px_40px_rgba(34,211,238,0.12)]"
    >
      <h3 className="text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-cyan-200">
        {project.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-gray-400">
        {project.description}
      </p>

      {project.tags && project.tags.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-wide text-cyan-200/90"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-6">
        {project.inDevelopment || !project.repoUrl ? (
          <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-amber-400/80">
            <LockIcon />
            In Development
          </span>
        ) : (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/50 transition-colors duration-200 hover:text-cyan-300 group-hover:text-cyan-300/80"
          >
            <GitHubIcon />
            View on GitHub
          </a>
        )}

        <div className="flex items-center gap-4 text-xs text-white/50">
          {project.language && (
            <span className="flex items-center gap-1.5">
              <span
                aria-hidden
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: languageColor }}
              />
              {project.language}
            </span>
          )}
          {typeof project.stars === 'number' && (
            <span className="flex items-center gap-1 text-amber-300/80">
              <StarIcon />
              {project.stars}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}
