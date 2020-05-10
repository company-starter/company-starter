'use strict'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { packageJson, utils } = require('@company-starter/utils-config')

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { packageJsonChanges } = require('./changes')

const parentFolder = utils.getParentFolder()

packageJson.update(parentFolder, packageJsonChanges)
