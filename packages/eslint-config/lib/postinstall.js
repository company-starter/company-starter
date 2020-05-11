/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const {
  update,
  remove,
  getParentFolder
} = require('@company-starter/utils-config')

const { peerDependencies } = require('../package.json')

const { packageJsonChanges, eslintrcJsonChanges } = require('./changes')

const parentFolder = getParentFolder()

if (parentFolder !== process.env.PWD) {
  update('package.json', [
    packageJsonChanges,
    { devDependencies: peerDependencies }
  ])
  update('.eslintrc.json', eslintrcJsonChanges)
  remove('.prettierrc')
}
