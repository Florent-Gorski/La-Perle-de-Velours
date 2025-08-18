import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [react()],
  base: '/', // ⚡ important pour Netlify : sert les assets depuis la racine
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src'), // ✅ alias '@' -> src
    },
  },
})
