import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'
import { labelSignal } from '@/lib/styles'
import { useOutsideClick } from '@/hooks/use-outside-click'

/* ==========================================================================
   Apple Cards Carousel — origen: registry de Aceternity UI.
   Adaptado al proyecto según .claude/skills/portfolio-taste/SKILL.md:
   - Sin Next.js: fuera "use client" y next/image.
   - Sin @tabler/icons-react: SVG inline (3 iconos no justifican la librería).
   - Re-tokenizado a la paleta zinc + ámbar.
   - Movimiento re-parametrizado (0.4s / ease-entrance / stagger 0.06)
     y respetando prefers-reduced-motion.
   - Corregido del original: layoutId de `category` no coincidía entre la
     tarjeta y el panel abierto, y el scroll-lock restauraba `auto` en vez
     del valor previo.
   - Añadido: foco gestionado, role="dialog", aria-labels.
   ========================================================================== */

const EASE = [0.22, 1, 0.36, 1] as const

const GAP = 16 // gap-4

export type CarouselCard = {
  /** Imagen de portada: es la que aparece en la tarjeta y la que se transforma al abrir. */
  src: string
  /** Imágenes adicionales que solo se ven dentro del panel abierto. Opcional. */
  gallery?: string[]
  title: string
  category: string
  content: ReactNode
}

type CarouselLabels = {
  prev: string
  next: string
  close: string
  /** Plantilla para el aria-label de las miniaturas, p. ej. "Imagen {n}". */
  image: string
}

const CarouselContext = createContext<{
  onCardClose: (index: number) => void
  labels: CarouselLabels
}>({
  onCardClose: () => {},
  labels: { prev: 'Anterior', next: 'Siguiente', close: 'Cerrar', image: 'Imagen {n}' },
})

export function Carousel({
  items,
  labels,
  header,
  initialScroll = 0,
}: {
  items: ReactNode[]
  labels: CarouselLabels
  /** Se renderiza a la izquierda de las flechas, alineado al contenedor. */
  header?: ReactNode
  initialScroll?: number
}) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollability = useCallback(() => {
    const el = carouselRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 1)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1)
  }, [])

  useEffect(() => {
    const el = carouselRef.current
    if (!el) return
    el.scrollLeft = initialScroll
    checkScrollability()
  }, [initialScroll, checkScrollability])

  /**
   * Un paso = el ancho real de una tarjeta + el gap. Se mide del DOM en vez de
   * hardcodearlo, para que siga siendo correcto si cambian las clases de <Card>.
   */
  const step = useCallback(() => {
    const card = carouselRef.current?.querySelector<HTMLElement>('[data-carousel-card]')
    return (card?.offsetWidth ?? 320) + GAP
  }, [])

  const scrollBy = (dir: -1 | 1) =>
    carouselRef.current?.scrollBy({ left: dir * step(), behavior: 'smooth' })

  /** Al cerrar una tarjeta, deja esa tarjeta alineada a la vista. */
  const onCardClose = useCallback(
    (index: number) => {
      carouselRef.current?.scrollTo({ left: step() * index, behavior: 'smooth' })
    },
    [step],
  )

  return (
    <CarouselContext.Provider value={{ onCardClose, labels }}>
      <div className="relative">
        {/* Cabecera alineada al contenedor: etiqueta a la izquierda, flechas a la derecha */}
        <div className="mx-auto mb-10 flex max-w-container items-center justify-between gap-6 px-gutter">
          {header}
          <div className="flex shrink-0 gap-2">
            <ArrowButton
              direction="left"
              label={labels.prev}
              disabled={!canScrollLeft}
              onClick={() => scrollBy(-1)}
            />
            <ArrowButton
              direction="right"
              label={labels.next}
              disabled={!canScrollRight}
              onClick={() => scrollBy(1)}
            />
          </div>
        </div>

        {/*
          Scroller a sangre: ocupa todo el ancho de la sección. La fila interior
          usa `mx-auto max-w-container px-gutter`, así la primera tarjeta queda
          alineada con la cabecera y el resto se derrama hacia la derecha.
        */}
        <div
          ref={carouselRef}
          onScroll={checkScrollability}
          className="w-full overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="mx-auto flex max-w-container gap-4 px-gutter">
            {items.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
            {/* Aire al final: el padding del contenedor no aplica tras el derrame */}
            <div aria-hidden="true" className="w-4 shrink-0 md:w-24" />
          </div>
        </div>

        {/* Desvanecido en el borde derecho: indica que hay más contenido */}
        <div
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-base to-transparent transition-opacity duration-200',
            canScrollRight ? 'opacity-100' : 'opacity-0',
          )}
        />
      </div>
    </CarouselContext.Provider>
  )
}

function ArrowButton({
  direction,
  label,
  disabled,
  onClick,
}: {
  direction: 'left' | 'right'
  label: string
  disabled: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink-2 transition-colors duration-200 hover:border-line-strong hover:text-ink disabled:pointer-events-none disabled:opacity-35 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signal"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={cn('h-5 w-5', direction === 'left' && 'rotate-180')}
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </button>
  )
}

export function Card({ card, index }: { card: CarouselCard; index: number }) {
  const [open, setOpen] = useState(false)
  /** Índice dentro de `images`: 0 es la portada. */
  const [active, setActive] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const { onCardClose, labels } = useContext(CarouselContext)
  const reduced = useReducedMotion()
  const uid = useId()

  const images = [card.src, ...(card.gallery ?? [])]

  // Con movimiento reducido no se comparte layout entre tarjeta y panel.
  const layoutId = (part: string) => (reduced ? undefined : `${part}-${uid}`)

  /**
   * La imagen solo se transforma si se está mostrando la portada. Si el usuario
   * eligió otra de la galería, cerrar hace un fundido en vez de una morfología
   * hacia una imagen que no es la de la tarjeta.
   */
  const imageLayoutId = active === 0 ? layoutId('image') : undefined

  const handleClose = useCallback(() => {
    setOpen(false)
    onCardClose(index)
    triggerRef.current?.focus()
  }, [index, onCardClose])

  useOutsideClick(containerRef, handleClose)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
        return
      }
      // Trampa de foco: sin esto el tabulador se escapa a la página de detrás,
      // que está oculta tras el velo pero sigue siendo navegable.
      if (e.key !== 'Tab') return
      const panel = containerRef.current
      if (!panel) return
      const focusables = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      if (!focusables.length) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      const activeEl = document.activeElement
      if (e.shiftKey && (activeEl === first || !panel.contains(activeEl))) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && activeEl === last) {
        e.preventDefault()
        first.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)

    // Bloqueo de scroll restaurando el valor previo, no un "auto" arbitrario
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open, handleClose])

  const openCard = () => {
    setActive(0)
    setOpen(true)
  }

  return (
    <>
      {/* El panel va por encima del navbar fijo (z-100 en Navbar.module.css) */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduced ? 0 : 0.2 }}
              className="absolute inset-0 bg-base/80 backdrop-blur-sm"
            />

            <motion.div
              ref={containerRef}
              layoutId={layoutId('card')}
              initial={reduced ? { opacity: 0 } : false}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduced ? 0 : 0.2 }}
              role="dialog"
              aria-modal="true"
              aria-label={card.title}
              className="relative z-10 flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-line bg-surface-2 shadow-[0_30px_70px_-24px_rgb(0_0_0/0.75)] md:h-[85vh] md:flex-row"
            >
              <button
                ref={closeRef}
                type="button"
                onClick={handleClose}
                aria-label={labels.close}
                className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-base/70 text-ink-2 backdrop-blur-sm transition-colors duration-200 hover:border-line-strong hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signal"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>

              {/* --- Columna de imagen --- */}
              <div className="flex shrink-0 flex-col md:h-full md:w-1/2">
                <div className="relative h-56 overflow-hidden sm:h-72 md:h-auto md:flex-1">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.img
                      key={images[active]}
                      layoutId={imageLayoutId}
                      src={images[active]}
                      alt={card.title}
                      initial={reduced || active === 0 ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: reduced ? 0 : 0.2 }}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </AnimatePresence>
                </div>

                {/* Tira de miniaturas: solo si el proyecto tiene imágenes extra */}
                {images.length > 1 && (
                  <div className="flex shrink-0 gap-2 overflow-x-auto border-t border-line bg-base/40 p-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {images.map((src, i) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() => setActive(i)}
                        aria-label={labels.image.replace('{n}', String(i + 1))}
                        aria-current={i === active}
                        className={cn(
                          'h-14 w-20 shrink-0 overflow-hidden rounded-lg border transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signal',
                          i === active
                            ? 'border-signal'
                            : 'border-line opacity-60 hover:border-line-strong hover:opacity-100',
                        )}
                      >
                        <img
                          src={src}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* --- Columna de contenido --- */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <motion.p
                  layoutId={layoutId('category')}
                  className={labelSignal}
                >
                  {card.category}
                </motion.p>

                <motion.h3
                  layoutId={layoutId('title')}
                  className="mt-4 max-w-[22ch] text-title font-semibold text-balance text-ink"
                >
                  {card.title}
                </motion.h3>

                <motion.div
                  initial={reduced ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: reduced ? 0 : 0.4, delay: reduced ? 0 : 0.12, ease: EASE }}
                  className="mt-8"
                >
                  {card.content}
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.button
        ref={triggerRef}
        data-carousel-card
        type="button"
        layoutId={layoutId('card')}
        onClick={openCard}
        aria-haspopup="dialog"
        aria-expanded={open}
        initial={reduced ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-64px' }}
        transition={{ duration: reduced ? 0 : 0.4, delay: reduced ? 0 : index * 0.06, ease: EASE }}
        className="group relative flex h-[26rem] w-[78vw] max-w-[21rem] shrink-0 flex-col items-start justify-end overflow-hidden rounded-xl border border-line bg-surface text-left transition-colors duration-200 hover:border-line-strong focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signal sm:w-80 md:h-[34rem] md:w-[25rem] md:max-w-none lg:h-[37rem] lg:w-[27rem]"
      >
        {/*
          El escalado al pasar el cursor va en un envoltorio, no en la <img>:
          la imagen lleva layoutId y Motion controla su transform durante la
          morfología hacia el panel. Tocarlo desde CSS provocaría conflicto.
        */}
        <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.04]">
          <motion.img
            layoutId={layoutId('image')}
            src={card.src}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Velo de legibilidad — no es un gradiente decorativo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base via-base/45 to-transparent"
        />

        <div className="relative z-10 w-full p-6 transition-transform duration-300 ease-out group-hover:-translate-y-1 md:p-8">
          <motion.p
            layoutId={layoutId('category')}
            className={labelSignal}
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layoutId('title')}
            className="mt-3 max-w-[16ch] text-lg font-semibold text-balance text-ink md:text-title"
          >
            {card.title}
          </motion.p>
        </div>
      </motion.button>
    </>
  )
}
