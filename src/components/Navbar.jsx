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
  const { lang, toggleLang, content: { personalInfo } } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <span className={styles.brand}>{personalInfo.name}</span>

        <nav className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} className={styles.link} onClick={(e) => handleLink(e, href)}>
              {label}
            </a>
          ))}
        </nav>

        <div className={styles.right}>
          <button className={styles.langToggle} onClick={toggleLang} aria-label="Cambiar idioma">
            <span className={lang === 'es' ? styles.activeLang : ''}>ES</span>
            <span className={styles.langDivider}>·</span>
            <span className={lang === 'en' ? styles.activeLang : ''}>EN</span>
          </button>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
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
