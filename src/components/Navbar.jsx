import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const { lang, toggleLang, content: { personalInfo } } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Marca en el menú la sección que se está leyendo
  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleLink = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleBrand = (e) => {
    e.preventDefault()
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#top" className={styles.brand} onClick={handleBrand}>
          {personalInfo.name}
        </a>

        <nav className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`${styles.link} ${active === href ? styles.active : ''}`}
              onClick={(e) => handleLink(e, href)}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className={styles.right}>
          <button className={styles.langToggle} onClick={toggleLang} aria-label="Cambiar idioma">
            <span className={lang === 'es' ? styles.activeLang : ''}>ES</span>
            <span className={styles.langDivider}>/</span>
            <span className={lang === 'en' ? styles.activeLang : ''}>EN</span>
          </button>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
