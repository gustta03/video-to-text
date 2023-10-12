import type {Config} from 'jest';

const config: Config = {
  collectCoverageFrom: ['<rootDir>/src/**/.ts'],
  testEnvironment: 'node',
  coverageDirectory: "coverage",
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
};

export default config;
