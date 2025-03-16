import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api/drivers': {
        target: 'https://api.openf1.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/drivers/, '/v1/drivers'),
      },
    },
  },
})
