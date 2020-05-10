'use strict'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { readFileSync, writeFileSync } = require('fs')

const loadJsonFile = (filepath) => {
  const rawData = readFileSync(filepath)
  return JSON.parse(rawData.toString())
}

const saveJsonFile = (filepath, data) => {
  const content = `${JSON.stringify(data, null, '  ')}\n`
  writeFileSync(filepath, content)
}

const getParentFolder = () => {
  const parentFolder = process.env.INIT_CWD

  if (!parentFolder) {
    throw new Error('This does not seem to be run by npm')
  }

  if (parentFolder === process.env.PWD) {
    throw new Error('This cannot be executed in this directory')
  }

  return parentFolder
}

module.exports = {
  getParentFolder,
  loadJsonFile,
  saveJsonFile
}
