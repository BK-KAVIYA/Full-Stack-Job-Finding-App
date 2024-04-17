import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/poxy': {
        target: 'http://localhost:8800/api-v1/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/poxy/, ''),
      },
    },
  },
})
