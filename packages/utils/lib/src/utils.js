'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const fs_1 = require('fs')
const path_1 = require('path')
const getParentFilePath = (filename) =>
  path_1.resolve(exports.getParentFolder(), filename)
const loadJsonFile = (filePath) => {
  try {
    const rawData = fs_1.readFileSync(filePath)
    return JSON.parse(rawData.toString())
  } catch (err) {
    return {}
  }
}
const saveJsonFile = (filePath, data) => {
  const content = `${JSON.stringify(data, null, '  ')}\n`
  fs_1.writeFileSync(filePath, content)
}
exports.getParentFolder = () => {
  const parentFolder = process.env.INIT_CWD
  if (!parentFolder) {
    throw new Error('This does not seem to be run by npm')
  }
  return parentFolder
}
exports.updateChanges = (json, changes) => {
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
        exports.updateChanges(json[changesKey], change)
      }
    } else {
      json[changesKey] = change
    }
  }
}
exports.update = (filename, changes) => {
  const jsonPath = getParentFilePath(filename)
  const json = loadJsonFile(jsonPath)
  if (Array.isArray(changes)) {
    for (const change of changes) {
      exports.updateChanges(json, change)
    }
  } else {
    exports.updateChanges(json, changes)
  }
  saveJsonFile(jsonPath, json)
}
exports.createDir = (dirName) => {
  try {
    fs_1.mkdirSync(getParentFilePath(dirName))
  } catch (err) {
    return
  }
}
exports.copy = (fileDir, fileName) => {
  try {
    fs_1.copyFileSync(
      path_1.resolve(fileDir, fileName),
      getParentFilePath(fileName)
    )
  } catch (err) {
    return
  }
}
exports.remove = (fileName) => {
  try {
    fs_1.unlinkSync(getParentFilePath(fileName))
  } catch (err) {
    return
  }
}
//# sourceMappingURL=utils.js.map
