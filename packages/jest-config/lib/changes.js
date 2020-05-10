'use strict'

const packageJsonChanges = {
  scripts: {
    test: 'jest',
    'test:watch': 'jest --watch',
    'test:cov': 'jest --coverage',
    'test:debug':
      'node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand'
  },
  jest: {
    preset: '@company-starter/jest-config/lib',
    rootDir: 'test',
    coverageDirectory: '../coverage'
  }
}

module.exports = {
  packageJsonChanges
}
