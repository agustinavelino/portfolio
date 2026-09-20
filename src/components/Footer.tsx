import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
  const year = new Date().getFullYear()
  const {
    content: { personalInfo },
  } = useLanguage()

  const links = [
    { label: 'Email', href: `mailto:${personalInfo.email}`, external: false },
    { label: 'GitHub', href: personalInfo.github, external: true },
    { label: 'LinkedIn', href: personalInfo.linkedin, external: true },
  ]

  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-container items-center justify-between gap-5 px-gutter py-8 max-[560px]:flex-col max-[560px]:items-start max-[560px]:gap-4">
        <span className="text-sm text-ink-3">
          {personalInfo.name} · {year}
        </span>

        <nav className="flex gap-6">
          {links.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="border-b border-transparent pb-0.5 text-label font-medium tracking-[0.12em] text-ink-3 uppercase transition-colors duration-200 [font-variation-settings:'wdth'_96] hover:border-signal hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
