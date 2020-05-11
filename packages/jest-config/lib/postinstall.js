/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { createDir, update } = require('@company-starter/utils-config')

const { peerDependencies } = require('../package.json')

const { packageJsonChanges } = require('./changes')

update('package.json', [
  packageJsonChanges,
  { devDependencies: peerDependencies }
])
createDir('test')
