'use strict'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path')

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { saveJsonFile, loadJsonFile } = require('./utils')

const updateChanges = (packageJson, changes) => {
  Object.keys(changes).forEach((changesKey) => {
    const change = changes[changesKey]
    if (typeof change === 'object' && change !== null) {
      if (!packageJson[changesKey]) {
        packageJson[changesKey] = {}
      }
      updateChanges(packageJson[changesKey], change)
    } else {
      packageJson[changesKey] = changes[changesKey]
    }
  })
}

const update = (parentFolder, changes) => {
  const packageJsonPath = resolve(parentFolder, 'package.json')
  const packageJson = loadJsonFile(packageJsonPath)
  updateChanges(packageJson, changes)
  saveJsonFile(packageJsonPath, packageJson)
}

module.exports = {
  update
}
