import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['**/*.test.ts', '**/*.test.tsx'],
    setupFiles: ['/src/test/setup.ts'],
    coverage: {
      provider: 'c8',
      reporter: ['text', 'lcov'],
    },
  },
})
