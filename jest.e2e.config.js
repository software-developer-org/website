module.exports = {
  preset: 'jest-playwright-preset',
  testEnvironment: './e2eEnvironment.js',
  testMatch: ['**/*e2e.spec.ts'],
  transform: {
    '^.+\\.(ts)$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules', 'dist'],
  testTimeout: 900000,
};
