import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { label as labelClass } from '@/lib/styles'

/**
 * Esqueleto común de las secciones de contenido: riel de etiqueta a la
 * izquierda y contenido a la derecha, con aparición al entrar en pantalla.
 *
 * Sustituye a las clases `.section` / `.section-grid` / `.rail` del puente y al
 * hook `useScrollFadeIn`, que hacían lo mismo con IntersectionObserver.
 */
export default function Section({
  id,
  label,
  children,
}: {
  id: string
  label: string
  children: ReactNode
}) {
  const reduced = useReducedMotion()

  return (
    <section id={id} className="border-b border-line">
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: reduced ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto grid max-w-container grid-cols-1 items-start gap-6 px-gutter py-22 min-[900px]:grid-cols-[var(--spacing-rail)_minmax(0,1fr)] min-[900px]:gap-14 max-[640px]:py-14"
      >
        <div className="border-b border-line pb-1 min-[900px]:sticky min-[900px]:top-24 min-[900px]:border-b-0 min-[900px]:pt-[5px] min-[900px]:pb-0">
          {/* <h2> y no <p>: es el encabezado de la sección, y sin él el documento
              saltaba de h1 a h3. El aspecto lo da `labelClass`, no la etiqueta. */}
          <h2 className={labelClass}>{label}</h2>
        </div>

        <div>{children}</div>
      </motion.div>
    </section>
  )
}
