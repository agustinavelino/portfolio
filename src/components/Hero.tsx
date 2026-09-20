import { motion, useReducedMotion, type Variants } from 'motion/react'
import { useLanguage } from '../contexts/LanguageContext'
import HeroBackdrop from './HeroBackdrop'
import { btnOutline, btnQuiet, btnSolid, label as labelClass } from '@/lib/styles'
import { cn } from '@/lib/utils'

export default function Hero() {
  const {
    content: { personalInfo, ui },
  } = useLanguage()
  const reduced = useReducedMotion()

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  // Entrada escalonada. Con movimiento reducido, todo aparece en su estado final.
  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduced ? 0 : 0.06, delayChildren: reduced ? 0 : 0.08 },
    },
  }

  const item: Variants = {
    hidden: reduced ? { opacity: 1 } : { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section className="relative isolate flex min-h-[88svh] items-center overflow-hidden">
      <HeroBackdrop />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto grid w-full max-w-container grid-cols-1 items-center gap-14 px-gutter pt-28 pb-20 lg:grid-cols-12 lg:gap-16"
      >
        {/* --- Columna de texto --- */}
        <div className="lg:col-span-7">
          {/* Antetítulo con marca de señal */}
          <motion.div variants={item} className="flex items-center gap-3">
            <span className="h-px w-8 bg-signal" />
            <span className={labelClass}>{personalInfo.title}</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-[2.75rem] leading-[0.98] font-semibold text-balance text-ink sm:text-[3.25rem] lg:text-display"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-[58ch] text-lg text-pretty text-ink-2"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
            <button onClick={() => scrollTo('#projects')} className={btnSolid}>
              {ui.hero.viewProjects}
            </button>

            <button onClick={() => scrollTo('#contact')} className={btnOutline}>
              {ui.hero.contact}
            </button>

            {personalInfo.cv && (
              <a href={personalInfo.cv} download className={cn(btnQuiet, 'group')}>
                {ui.hero.downloadCV}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-y-0.5"
                >
                  ↓
                </span>
              </a>
            )}
          </motion.div>
        </div>

        {/* --- Retrato --- */}
        <motion.div variants={item} className="lg:col-span-5">
          <div className="relative mx-auto w-full max-w-[22rem] lg:ml-auto lg:max-w-none">
            {/* Marcas de esquina — detalle de instrumentación */}
            <span className="absolute -top-px -left-px z-10 h-4 w-4 border-t border-l border-signal" />
            <span className="absolute -right-px -bottom-px z-10 h-4 w-4 border-r border-b border-signal" />

            <div className="overflow-hidden rounded-xl border border-line bg-surface">
              {personalInfo.photo ? (
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  width={640}
                  height={800}
                  className="aspect-4/5 w-full object-cover grayscale-[35%] transition-[filter,transform] duration-500 ease-out hover:scale-[1.02] hover:grayscale-0"
                />
              ) : (
                <div className="flex aspect-4/5 w-full items-center justify-center text-sm text-ink-3">
                  Sin imagen
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
