'use strict'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('./package-json')

const parentFolder = process.env.INIT_CWD

packageJson.update(parentFolder)
