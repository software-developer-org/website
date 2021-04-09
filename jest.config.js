module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  transformIgnorePatterns: ['node_modules', 'dist'],
};
