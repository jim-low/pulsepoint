import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/jim-low.github.io/pulsepoint',
  plugins: [react()],
})
