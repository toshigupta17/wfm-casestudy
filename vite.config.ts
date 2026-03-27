import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Relative base: works on GitHub Pages project sites (/repo/) without hard-coding the repo name.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
