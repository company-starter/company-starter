'use strict'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

const loadJsonFile = (filepath) => {
  const rawData = fs.readFileSync(filepath)
  return JSON.parse(rawData.toString())
}

const saveJsonFile = (filepath, data) => {
  const content = `${JSON.stringify(data, null, '  ')}\n`
  fs.writeFileSync(filepath, content)
}

const update = (parentFolder) => {
  const parentPackagePath = path.resolve(parentFolder, 'package.json')
  const parentPackage = loadJsonFile(parentPackagePath)

  parentPackage.scripts = parentPackage.scripts ? parentPackage.scripts : {}
  parentPackage.devDependencies = parentPackage.devDependencies
    ? parentPackage.devDependencies
    : {}
  parentPackage.jest = parentPackage.jest ? parentPackage.jest : {}

  // should also remove format script because no more prettier
  Object.assign(parentPackage.scripts, {
    test: 'jest',
    'test:watch': 'jest --watch',
    'test:cov': 'jest --coverage',
    'test:debug':
      'node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand'
  })

  // Object.assign(parentPackage.devDependencies, {
  //   '@company-starter/eslint-config': '1.0.7',
  //   '@company-starter/jest-config': '1.0.4',
  //   '@company-starter/ts-config': '1.0.4',
  //   '@types/jest': '25.2.1',
  //   '@types/node': '13.9.1',
  //   '@types/supertest': '2.0.8',
  //   '@typescript-eslint/eslint-plugin': '2.31.0',
  //   '@typescript-eslint/parser': '2.31.0',
  //   eslint: '6.8.0',
  //   'eslint-config-prettier': '6.11.0',
  //   'eslint-plugin-import': '2.20.2',
  //   'eslint-plugin-prettier': '3.1.3',
  //   jest: '25.1.0',
  //   prettier: '2.0.5',
  //   supertest: '4.0.2',
  //   'ts-jest': '25.2.1',
  //   'ts-node': '8.6.2',
  //   'tsconfig-paths': '3.9.0',
  //   typescript: '3.7.4'
  // })

  Object.assign(parentPackage.jest, {
    preset: '@company-starter/jest-config/lib',
    rootDir: 'test',
    coverageDirectory: '../coverage'
  })

  saveJsonFile(parentPackagePath, parentPackage)
}

module.exports = {
  update
}
