/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { copyFile, unlink, readFileSync, writeFileSync } = require('fs')
const { resolve } = require('path')

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
  Object.keys(changes).forEach((changesKey) => {
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
  })
}

const update = (filename, changes) => {
  const jsonPath = resolve(process.env.INIT_CWD, filename)
  const json = loadJsonFile(jsonPath)
  updateChanges(json, changes)
  saveJsonFile(jsonPath, json)
}

const copy = (fileDir, fileName) => {
  copyFile(
    resolve(fileDir, fileName),
    resolve(process.env.INIT_CWD, fileName),
    (err) => {
      if (err) throw err
    }
  )
}

const remove = (fileName) => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  unlink(resolve(process.env.INIT_CWD, fileName), () => {})
}
const getParentFolder = () => {
  const parentFolder = process.env.INIT_CWD

  if (!parentFolder) {
    throw new Error('This does not seem to be run by npm')
  }

  return parentFolder
}

module.exports = {
  getParentFolder,
  copy,
  update,
  remove
}
