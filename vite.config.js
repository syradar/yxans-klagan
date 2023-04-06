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
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (a) => {
          if (a.name === 'web-vitals') {
            return 'assets/[name][extname]'
          } else {
            return 'assets/[name]-[hash][extname]'
          }
        },
      },
    },
  },
})
