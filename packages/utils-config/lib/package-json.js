'use strict'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { saveJsonFile, loadJsonFile } = require('./utils')

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path')

const KEYS = [
  'scripts',
  'devDependencies',
  'dependencies',
  'peerDependencies',
  'jest'
]

const checkKeys = (keys) => {
  return keys.every((key) => KEYS.includes(key))
}

const init = (packageJson) => {
  KEYS.forEach((key) => {
    if (!packageJson[key]) {
      packageJson[key] = {}
    }
  })
}

const updateChanges = (packageJson, changes) => {
  const keys = Object.keys(changes)
  if (!checkKeys(keys)) {
    throw new Error('A key is not a package json acceptable key')
  }
  keys.forEach((change) => {
    const { add, remove } = changes[change]
    add &&
      add.forEach(({ key, value }) => {
        packageJson[change][key] = value
      })
    remove &&
      remove.forEach(({ key }) => {
        packageJson[change][key] = undefined
      })
  })
}

const update = (parentFolder, changes) => {
  const packageJsonPath = resolve(parentFolder, 'package.json')
  const packageJson = loadJsonFile(packageJsonPath)
  init(packageJson)
  updateChanges(packageJson, changes)
  saveJsonFile(packageJsonPath, packageJson)
}

module.exports = {
  update
}