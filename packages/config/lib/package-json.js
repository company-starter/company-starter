import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

const loadJsonFile = (filepath) => {
  const rawData = readFileSync(filepath)
  return JSON.parse(rawData.toString())
}

const saveJsonFile = (filepath, data) => {
  const content = `${JSON.stringify(data, null, '  ')}\n`
  writeFileSync(filepath, content)
}

export const packageJson = (parentFolder) => {
  const parentPackagePath = resolve(parentFolder, 'package.json')
  const parentPackage = loadJsonFile(parentPackagePath)
  Object.assign(parentPackage.scripts, {
    lint: 'eslint . --ext js,ts,js,jsx,json --fix'
  })
  saveJsonFile(parentPackagePath, parentPackage)
}
