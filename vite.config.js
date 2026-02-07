import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    host: true, // Allow external access (helpful for testing on iPad)
  },
  build: {
    target: 'es2015',
    cssTarget: 'chrome61', // Better support for older Safari
  }
})
