module.exports = {
  verbose: true,
  rootDir: '.',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  coveragePathIgnorePatterns: ['/node_modules/', '/test/', 'dist/'],
  transform: {
    '.(ts|tsx|js|jsx)': '@swc/jest',
  },
  testEnvironment: 'node',
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  collectCoverageFrom: ['src/*.{js,ts}'],
};
