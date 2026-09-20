import { motion } from 'framer-motion'

export interface Project {
  title: string
  tagline?: string
  description: string
  highlights?: string[]
  repoUrl?: string
  liveLink?: string
  hfLink?: string
  apiDocsLink?: string
  tags?: string[]
  language?: string | null
  stars?: number
  inDevelopment?: boolean
  badge?: string
  isFlagship?: boolean
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
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  )
}

function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  )
}

function HuggingFaceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 text-amber-400">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 9h.01" />
      <path d="M16 9h.01" />
      <path d="M10 13a4 4 0 0 0 4 0" />
      <path d="M7 15c.5 1 2 2 5 2s4.5-1 5-2" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      className="h-3.5 w-3.5"
    >
      <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
    </svg>
  )
}

function SparklesIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 text-cyan-300 shrink-0">
      <path d="M12 2L14.4 7.6L20 10L14.4 12.4L12 18L9.6 12.4L4 10L9.6 7.6L12 2Z" />
    </svg>
  )
}

export default function ProjectCard({ project }: { project: Project }) {
  const languageColor =
    (project.language && LANGUAGE_COLORS[project.language]) ?? '#9ca3af'

  return (
    <motion.article
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 backdrop-blur-md transition-all duration-300 ${
        project.isFlagship
          ? 'border-cyan-400/40 bg-gradient-to-br from-white/[0.08] via-cyan-950/20 to-white/[0.04] shadow-[0_8px_32px_rgba(34,211,238,0.14)] hover:border-cyan-300 hover:shadow-[0_12px_48px_rgba(34,211,238,0.22)]'
          : 'border-white/10 bg-white/5 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:shadow-[0_8px_40px_rgba(34,211,238,0.12)]'
      }`}
    >
      {/* Header with Title and Flagship/Featured Badge */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-cyan-200">
          {project.title}
        </h3>

        {project.badge && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.25)]">
            <SparklesIcon />
            {project.badge}
          </span>
        )}
      </div>

      {project.tagline && (
        <p className="mt-1.5 text-xs font-medium italic leading-relaxed text-cyan-300/90">
          {project.tagline}
        </p>
      )}

      <p className="mt-3 text-sm leading-relaxed text-gray-300">
        {project.description}
      </p>

      {/* Highlights / Key Features */}
      {project.highlights && project.highlights.length > 0 && (
        <div className="mt-4 rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-sm">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-cyan-300/90">
            Key Architecture &amp; Pipeline Highlights
          </p>
          <ul className="space-y-2">
            {project.highlights.map((highlight, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs leading-relaxed text-gray-300"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech Stack Tags */}
      {project.tags && project.tags.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-wide text-cyan-200/90 transition-colors duration-200 hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Action Buttons & Links */}
      <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-6">
        {project.inDevelopment || (!project.repoUrl && !project.liveLink && !project.hfLink) ? (
          <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-amber-400/80">
            <LockIcon />
            In Development
          </span>
        ) : (
          <div className="flex flex-wrap items-center gap-4">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-cyan-200 transition-all duration-200 hover:border-cyan-400 hover:bg-cyan-400/20 hover:text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
              >
                <LinkIcon />
                Live Demo
              </a>
            )}
            {project.hfLink && (
              <a
                href={project.hfLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-200 transition-all duration-200 hover:border-amber-400 hover:bg-amber-400/20 hover:text-white hover:shadow-[0_0_15px_rgba(251,191,36,0.3)]"
              >
                <HuggingFaceIcon />
                Hugging Face
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/60 transition-colors duration-200 hover:text-cyan-300"
              >
                <GitHubIcon />
                GitHub
              </a>
            )}
            {project.apiDocsLink && (
              <a
                href={project.apiDocsLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-violet-300/80 transition-colors duration-200 hover:text-violet-200"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                API Docs
              </a>
            )}
          </div>
        )}

        <div className="flex items-center gap-4 text-xs text-white/50">
          {project.language && (
            <span className="flex items-center gap-1.5">
              <span
                aria-hidden="true"
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
