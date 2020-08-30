/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  copyFileSync,
  unlinkSync,
  readFileSync,
  writeFileSync,
  mkdirSync
} from 'fs'
import { resolve } from 'path'

const getParentFilePath = (filename: string) =>
  resolve(getParentFolder(), filename)

const loadJsonFile = (filePath: string): any => {
  try {
    const rawData = readFileSync(filePath)
    return JSON.parse(rawData.toString())
  } catch (err) {
    return {}
  }
}

const saveJsonFile = (filePath: string, data: any): void => {
  const content = `${JSON.stringify(data, null, '  ')}\n`
  writeFileSync(filePath, content)
}

export const getParentFolder = (): string => {
  const parentFolder = process.env.INIT_CWD

  if (!parentFolder) {
    throw new Error('This does not seem to be run by npm')
  }

  return parentFolder
}

export const updateChanges = (json: any, changes: any): void => {
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

export const update = (filename: string, changes: any): void => {
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

export const createDir = (dirName: string): void => {
  try {
    mkdirSync(getParentFilePath(dirName))
  } catch (err) {
    return
  }
}

export const copy = (fileDir: string, fileName: string): void => {
  try {
    copyFileSync(resolve(fileDir, fileName), getParentFilePath(fileName))
  } catch (err) {
    return
  }
}

export const remove = (fileName: string): void => {
  try {
    unlinkSync(getParentFilePath(fileName))
  } catch (err) {
    return
  }
}
