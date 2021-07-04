import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['<rootDir>/src/**/**/*.ts'],
  testPathIgnorePatterns: ['<rootDir>/main.ts'],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/shared/migrations/',
    '<rootDir>/src/shared/fakeRepositories/',
    '<rootDir>/src/config/',
    '<rootDir>/src/utils/',
    '.module.ts',
    'main.ts',
    '.entity.ts',
    '.repository.ts',
    '.controller.ts',
    'index.ts',
    '.dto.ts',
    '.interface.ts',
    '.validators.ts',
  ],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  roots: ['<rootDir>/src/modules'],
};
export default config;
