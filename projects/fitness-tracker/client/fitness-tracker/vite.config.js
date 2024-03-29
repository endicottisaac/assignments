import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/workout': {
        target: 'http://localhost:2200',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
