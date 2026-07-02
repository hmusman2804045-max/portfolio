import { useEffect, useState } from 'react'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-8 transition-all duration-300 max-[900px]:px-[18px] ${
        scrolled
          ? 'border-b border-white/10 bg-black/20 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.25)] backdrop-blur-md'
          : 'border-b border-transparent bg-transparent py-5'
      }`}
    >
      <a
        href="#top"
        className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-sm font-extrabold uppercase tracking-tight text-transparent"
      >
        HMU
      </a>
      <ul className="flex items-center gap-6 max-[900px]:gap-4">
        {LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-xs font-semibold uppercase tracking-wide text-white/85 transition-all duration-200 hover:text-cyan-300 hover:[text-shadow:0_0_14px_rgba(34,211,238,0.65)]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
