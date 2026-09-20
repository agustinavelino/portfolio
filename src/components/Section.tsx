import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { label as labelClass } from '@/lib/styles'
import { cn } from '@/lib/utils'

/**
 * Esqueleto común de las secciones de contenido, con aparición al entrar en
 * pantalla. Dos disposiciones:
 *
 * - `rail` (por defecto): etiqueta en el riel izquierdo, contenido a la
 *   derecha. Es la asimetría del sitio y la usan todas las secciones con
 *   listas, tarjetas o líneas de tiempo, que llenan el ancho.
 * - `centered`: una sola columna centrada. Para bloques de puro texto, donde
 *   el riel dejaba medio ancho vacío a la derecha y el conjunto se leía
 *   escorado a la izquierda.
 *
 * Sustituye a las clases `.section` / `.section-grid` / `.rail` del puente y al
 * hook `useScrollFadeIn`, que hacían lo mismo con IntersectionObserver.
 */
export default function Section({
  id,
  label,
  layout = 'rail',
  children,
}: {
  id: string
  label: string
  layout?: 'rail' | 'centered'
  children: ReactNode
}) {
  const reduced = useReducedMotion()

  // <h2> y no <p>: es el encabezado de la sección, y sin él el documento
  // saltaba de h1 a h3. El aspecto lo da `labelClass`, no la etiqueta.
  const heading = <h2 className={labelClass}>{label}</h2>

  return (
    <section id={id} className="border-b border-line">
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: reduced ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'mx-auto max-w-container px-gutter py-22 max-[640px]:py-14',
          layout === 'rail' &&
            'grid grid-cols-1 items-start gap-6 min-[900px]:grid-cols-[var(--spacing-rail)_minmax(0,1fr)] min-[900px]:gap-14',
        )}
      >
        {layout === 'centered' ? (
          <div className="mx-auto w-full max-w-[62ch]">
            <div className="border-b border-line pb-3">{heading}</div>
            <div className="pt-8">{children}</div>
          </div>
        ) : (
          <>
            <div className="border-b border-line pb-1 min-[900px]:sticky min-[900px]:top-24 min-[900px]:border-b-0 min-[900px]:pt-[5px] min-[900px]:pb-0">
              {heading}
            </div>

            <div>{children}</div>
          </>
        )}
      </motion.div>
    </section>
  )
}
