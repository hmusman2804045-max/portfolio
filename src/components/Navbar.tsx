const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-8 py-5 max-[900px]:px-[18px]">
      <a
        href="#top"
        className="text-sm font-bold uppercase tracking-tight text-white"
      >
        HMU
      </a>
      <ul className="flex items-center gap-6 max-[900px]:gap-4">
        {LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-xs font-medium uppercase tracking-wide text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
