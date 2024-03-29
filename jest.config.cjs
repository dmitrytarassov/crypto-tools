// import type { Config } from '@jest/types';


const config = {
  verbose: true,
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {},
  coveragePathIgnorePatterns: ['tests']
};

module.exports = config;
