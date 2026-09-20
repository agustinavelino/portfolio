import { useEffect, type RefObject } from 'react'

/**
 * Llama a `callback` cuando se hace click o touch fuera de `ref`.
 * Origen: registry de Aceternity UI. Adaptado: tipos estrictos
 * (`Function` → firma real, `any` → Event) y ref anulable para React 19.
 */
export function useOutsideClick(
  ref: RefObject<HTMLElement | null>,
  callback: (event: MouseEvent | TouchEvent) => void,
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // No hacer nada si el click cae dentro del elemento o sus hijos
      const target = event.target as Node | null
      if (!ref.current || !target || ref.current.contains(target)) return
      callback(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, callback])
}
