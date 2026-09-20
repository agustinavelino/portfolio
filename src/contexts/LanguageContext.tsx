import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import * as es from '../data/content'
import * as en from '../data/content.en'

export type Lang = 'es' | 'en'

/**
 * La forma del contenido la define el archivo en español.
 * Si `content.en.js` deja de coincidir, esto falla en tiempo de compilación
 * — que es justo el aviso que queremos: ambos idiomas deben tener la misma forma.
 */
export type Content = typeof es

type LanguageValue = {
  lang: Lang
  toggleLang: () => void
  content: Content
}

const LanguageContext = createContext<LanguageValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')
  const content: Content = lang === 'es' ? es : en
  const toggleLang = () => setLang((l) => (l === 'es' ? 'en' : 'es'))

  // Sin esto, un lector de pantalla leería el contenido en inglés con la
  // pronunciación del idioma declarado en index.html.
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, content }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage debe usarse dentro de <LanguageProvider>')
  return ctx
}
