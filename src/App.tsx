import { LanguageProvider, useLanguage } from './contexts/LanguageContext'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

/**
 * Enlace de salto: primer elemento enfocable de la página. Permite ir directo
 * al contenido sin tabular por toda la navegación. Solo se ve al enfocarlo.
 */
function SkipLink() {
  const {
    content: { ui },
  } = useLanguage()

  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[300] focus:rounded-lg focus:border focus:border-line-strong focus:bg-surface-2 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink focus:outline-2 focus:outline-offset-2 focus:outline-signal"
    >
      {ui.nav.skipToContent}
    </a>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <SkipLink />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </LanguageProvider>
  )
}
