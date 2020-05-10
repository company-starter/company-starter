'use strict'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { changes } = require('./changes')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const postinstallRefacto = require('./package-json')

const parentFolder = postinstallRefacto.getParentFolder()

postinstallRefacto.packageJson(parentFolder, changes)
