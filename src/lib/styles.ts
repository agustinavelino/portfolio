/**
 * Cadenas de clases compartidas. Existen para que un botón o una etiqueta de
 * sección se vean igual en todas partes sin repetir la lista de utilidades.
 * Se componen con `cn()` cuando hay que añadir algo puntual.
 */

const btnBase =
  'inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signal'

/** Acción primaria: tinta sólida sobre el fondo. */
export const btnSolid = `${btnBase} bg-ink text-base hover:bg-white`

/** Acción secundaria: superficie elevada con borde. */
export const btnOutline = `${btnBase} border border-line-strong bg-surface text-ink hover:border-ink-3 hover:bg-surface-2`

/** Acción terciaria: solo texto. */
export const btnQuiet = `${btnBase} text-ink-2 hover:text-ink`

const labelBase =
  "text-label font-semibold tracking-[0.14em] uppercase [font-variation-settings:'wdth'_88]"

/** Etiqueta de sección y de categoría: 12px, versalitas, ancho condensado. */
export const label = `${labelBase} text-ink-3`

/** La misma etiqueta en ámbar, para cuando encabeza un elemento destacado. */
export const labelSignal = `${labelBase} text-signal`
