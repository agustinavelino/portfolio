import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

/** Altura de la barra. Debe cuadrar con `scroll-padding-top` en index.css. */
const BAR = 'h-16'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const headerRef = useRef<HTMLElement>(null)
  const {
    lang,
    toggleLang,
    content: { personalInfo, ui },
  } = useLanguage()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      // En el Hero no debe quedar ninguna sección marcada como activa
      if (window.scrollY < 200) setActive('')
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Marca en el menú la sección que se está leyendo
  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter((el): el is Element => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (visible && window.scrollY >= 200) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // El menú móvil se cierra con Escape o al pulsar fuera
  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node | null
      if (target && !headerRef.current?.contains(target)) setMenuOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('touchstart', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('touchstart', onPointerDown)
    }
  }, [menuOpen])

  const handleLink = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleBrand = (e: React.MouseEvent) => {
    e.preventDefault()
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header
      ref={headerRef}
      className={cn(
        // z-100: por debajo del panel de proyecto (z-200), por encima de todo lo demás
        'fixed inset-x-0 top-0 z-[100] border-b backdrop-blur-[14px] backdrop-saturate-150 transition-colors duration-200',
        scrolled ? 'border-line bg-base/85' : 'border-transparent bg-base/70',
      )}
    >
      <div
        className={cn('mx-auto flex max-w-container items-center justify-between gap-6 px-gutter', BAR)}
      >
        <a
          href="#top"
          onClick={handleBrand}
          className="shrink-0 text-sm font-semibold tracking-[-0.01em] whitespace-nowrap text-ink [font-variation-settings:'wdth'_108] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal max-[420px]:text-[13px]"
        >
          {personalInfo.name}
        </a>

        {/* --- Enlaces en escritorio --- */}
        <nav className="hidden nav:flex nav:gap-7">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleLink(e, href)}
              aria-current={active === href ? 'true' : undefined}
              className={cn(
                'relative py-1.5 text-label font-medium tracking-[0.12em] uppercase transition-colors duration-200',
                "[font-variation-settings:'wdth'_96]",
                'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal',
                active === href ? 'text-ink' : 'text-ink-3 hover:text-ink',
              )}
            >
              {label}
              <span
                aria-hidden="true"
                className={cn(
                  'absolute bottom-0 left-1/2 h-[5px] w-[5px] -translate-x-1/2 translate-y-1 bg-signal transition-transform duration-200',
                  active === href ? 'scale-100' : 'scale-0',
                )}
              />
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={ui.nav.toggleLanguage}
            className="flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1 text-[11.5px] font-semibold tracking-[0.06em] text-ink-3 transition-colors duration-200 hover:border-line-strong focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signal"
          >
            <span className={lang === 'es' ? 'text-ink' : undefined}>ES</span>
            <span className="text-line-strong">/</span>
            <span className={lang === 'en' ? 'text-ink' : undefined}>EN</span>
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? ui.nav.closeMenu : ui.nav.openMenu}
            aria-expanded={menuOpen}
            aria-controls="nav-mobile"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-ink transition-colors duration-200 hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signal nav:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              aria-hidden="true"
              className="h-5 w-5"
            >
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* --- Panel móvil --- */}
      {menuOpen && (
        <nav
          id="nav-mobile"
          // Opaco a propósito: a media opacidad se transparentaba el texto del Hero
          className="border-y border-line bg-base pb-3 shadow-[0_18px_32px_-24px_rgb(0_0_0/0.9)] nav:hidden"
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleLink(e, href)}
              aria-current={active === href ? 'true' : undefined}
              className={cn(
                'relative block px-gutter py-3 text-label font-medium tracking-[0.12em] uppercase transition-colors duration-200',
                "[font-variation-settings:'wdth'_96]",
                'focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-signal',
                active === href ? 'text-ink' : 'text-ink-3 hover:text-ink',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'absolute top-1/2 left-[calc(var(--spacing-gutter)-14px)] h-[5px] w-[5px] -translate-y-1/2 bg-signal transition-transform duration-200',
                  active === href ? 'scale-100' : 'scale-0',
                )}
              />
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
