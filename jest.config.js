module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/config/jest/jest.setupFramework.js'],
  setupFiles: ['<rootDir>/src/config/jest/jest.setup.js'],
  verbose: false,
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/src/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|css|json)$)':
      '<rootDir>/src/config/jest/fileTransform.js',
  },
  moduleNameMapper: {
    'Client(.*)$': '<rootDir>/src/client/$1',
    'Server(.*)$': '<rootDir>/src/server/$1',
    'Assets(.*)$': '<rootDir>/src/assets/$1',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
