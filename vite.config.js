import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

const packagesToBuildWithNoHash = ['@vercel/analytics', 'web-vitals']

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  define: {
    'import.meta.env.VERCEL_ANALYTICS_ID': JSON.stringify(
      process.env.VERCEL_ANALYTICS_ID,
    ),
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['<rootDir>/test/setup.ts'],
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (a) => {
          if (packagesToBuildWithNoHash.includes(a.name)) {
            return 'assets/[name][extname]'
          } else {
            return 'assets/[name]-[hash][extname]'
          }
        },
      },
    },
  },
})
