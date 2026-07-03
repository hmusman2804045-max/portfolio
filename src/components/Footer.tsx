import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const SOCIALS: { label: string; href: string; icon: ReactNode }[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/hmusman2804045-max',
    icon: (
      <svg viewBox="0 0 16 16" fill="currentColor" className="h-5 w-5">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hafiz-muhammad-usman-a51300382',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:s2804045@gmail.com',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="relative z-[1] bg-neutral-950 px-8 pb-10 max-[900px]:px-[18px]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 border-t border-white/10 pt-10 sm:flex-row sm:justify-between">
        <p className="text-xs text-white/40">
          © 2026 Hafiz Muhammad Usman. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          {SOCIALS.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target={social.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noreferrer"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="text-white/50 transition-all duration-200 hover:text-cyan-300 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}
