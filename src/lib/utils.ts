import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Une clases condicionales y resuelve conflictos de Tailwind
 * (la última utilidad del mismo grupo gana).
 * Lo importan casi todos los snippets de Aceternity / Kokonut / Watermelon.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
