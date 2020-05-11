/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const {
  copyFileSync,
  unlinkSync,
  readFileSync,
  writeFileSync,
  mkdirSync
} = require('fs')
const { resolve } = require('path')

const getParentFolder = () => {
  const parentFolder = process.env.INIT_CWD

  if (!parentFolder) {
    throw new Error('This does not seem to be run by npm')
  }

  return parentFolder
}

const getParentFilePath = (filename) => resolve(getParentFolder(), filename)

const loadJsonFile = (filePath) => {
  try {
    const rawData = readFileSync(filePath)
    return JSON.parse(rawData.toString())
  } catch (err) {
    return {}
  }
}

const saveJsonFile = (filePath, data) => {
  const content = `${JSON.stringify(data, null, '  ')}\n`
  writeFileSync(filePath, content)
}

const updateChanges = (json, changes) => {
  for (const changesKey in changes) {
    const change = changes[changesKey]
    if (typeof change === 'object' && change !== null) {
      if (Array.isArray(change)) {
        if (!json[changesKey]) {
          json[changesKey] = []
        }
        change.forEach((value) => {
          if (!json[changesKey].includes(value)) {
            json[changesKey].push(value)
          }
        })
      } else {
        if (!json[changesKey]) {
          json[changesKey] = {}
        }
        updateChanges(json[changesKey], change)
      }
    } else {
      json[changesKey] = change
    }
  }
}

const update = (filename, changes) => {
  const jsonPath = getParentFilePath(filename)
  const json = loadJsonFile(jsonPath)
  if (Array.isArray(changes)) {
    for (const change of changes) {
      updateChanges(json, change)
    }
  } else {
    updateChanges(json, changes)
  }
  saveJsonFile(jsonPath, json)
}

const createDir = (dirName) => {
  try {
    mkdirSync(getParentFilePath(dirName))
  } catch (err) {
    return
  }
}

const copy = (fileDir, fileName) => {
  try {
    copyFileSync(resolve(fileDir, fileName), getParentFilePath(fileName))
  } catch (err) {
    return
  }
}

const remove = (fileName) => {
  try {
    unlinkSync(getParentFilePath(fileName))
  } catch (err) {
    return
  }
}
module.exports = {
  getParentFolder,
  createDir,
  copy,
  update,
  remove
}
