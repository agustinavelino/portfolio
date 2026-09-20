import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Los snippets de Aceternity/Kokonut/Watermelon importan '@/lib/utils'.
      // Con este alias se pegan sin editarlos.
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
