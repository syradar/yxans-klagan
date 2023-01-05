/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  testResultsProcessor: 'jest-sonar-reporter',
  coveragePathIgnorePatterns: ['/node_modules/', '/test/'],
  roots: ['<rootDir>/src'],

  // Jest transformations -- this adds support for TypeScript
  // using ts-jestw
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        babelConfig: false,
        useESM: true,
      },
    ],
  },

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: [
    //'@testing-library/react/cleanup-after-each',
    '@testing-library/jest-dom/extend-expect',
  ],

  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

  // Module file extensions for importing
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@testing-librart/react' +
      '|@testing-librart/react)' +
      ')',
  ],
}
