import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['<rootDir>/test/setup.ts'],
  },
  ...(process.env.NODE_ENV === 'production' ? { base: '/yxans-klagan/' } : {}),
})
