'use strict'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { changes } = require('./changes')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { update } = require('./package-json')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getParentFolder } = require('./utils')

const parentFolder = getParentFolder()

update(parentFolder, changes)
