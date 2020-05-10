'use strict'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { copyFile, readFileSync, writeFileSync } = require('fs')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path')

const copy = (fileDir, fileName) => {
  copyFile(
    resolve(fileDir, fileName),
    resolve(process.env.INIT_CWD, fileName),
    (err) => {
      if (err) throw err
    }
  )
}

const loadJsonFile = (filePath) => {
  const rawData = readFileSync(filePath)
  return JSON.parse(rawData.toString())
}

const saveJsonFile = (filePath, data) => {
  const content = `${JSON.stringify(data, null, '  ')}\n`
  writeFileSync(filePath, content)
}

const getParentFolder = () => {
  const parentFolder = process.env.INIT_CWD

  if (!parentFolder) {
    throw new Error('This does not seem to be run by npm')
  }

  return parentFolder
}

module.exports = {
  copy,
  getParentFolder,
  loadJsonFile,
  saveJsonFile
}
