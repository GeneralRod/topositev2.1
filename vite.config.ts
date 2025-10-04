import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/topositev2.1/', // Temporarily disabled to test
  build: {
    outDir: 'docs'
  }
})
