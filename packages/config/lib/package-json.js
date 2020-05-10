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
  Object.assign(parentPackage.scripts, {
    lint: 'eslint . --ext js,ts,js,jsx,json --fix'
  })
  saveJsonFile(parentPackagePath, parentPackage)
}

module.exports = {
  update
}
