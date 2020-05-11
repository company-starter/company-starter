/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { update, getParentFolder } = require('@company-starter/utils-config')

const { peerDependencies } = require('../package.json')

const { packageJsonChanges } = require('./changes')

const parentFolder = getParentFolder()

if (parentFolder !== process.env.PWD) {
  update('package.json', [
    packageJsonChanges,
    { devDependencies: peerDependencies }
  ])
}
