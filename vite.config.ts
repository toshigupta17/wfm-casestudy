import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// GitHub Pages project URL: https://<user>.github.io/<repo>/
export default defineConfig({
  base: '/wfm-casestudy/',
  plugins: [react(), tailwindcss()],
})
