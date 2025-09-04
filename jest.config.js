module.exports = {
    testEnvironment: 'jsdom', // For React components
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    setupFiles: ['<rootDir>/src/jest.polyfills.js'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
        'node_modules/(?!(react-router|react-router-dom)/)'
    ],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
      }
};